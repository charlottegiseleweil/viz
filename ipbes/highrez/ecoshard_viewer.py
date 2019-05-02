"""Flask app to view ecoshard map data."""
import threading
import multiprocessing
import subprocess
import urllib
import sys
import os
import logging

import taskgraph
from flask import Flask
import flask

LOGGER = logging.getLogger(__name__)

logging.basicConfig(
    level=logging.DEBUG,
    format=(
        '%(asctime)s (%(relativeCreated)d) %(levelname)s %(name)s'
        ' [%(funcName)s:%(lineno)d] %(message)s'),
    stream=sys.stdout)

APP = Flask(__name__, static_url_path='', static_folder='')
APP.config['SECRET_KEY'] = b'\xe2\xa9\xd2\x82\xd5r\xef\xdb\xffK\x97\xcfM\xa2WH'
LOGGER.debug(APP.config['SECRET_KEY'])
VISITED_POINT_ID_TIMESTAMP_MAP = {}
COLOR_TABLE_PATH = 'poll_hab_color.txt'
WORKSPACE_DIR = 'workspace'
ECOSHARD_LIST = [
    'https://storage.googleapis.com/ipbes-natcap-ecoshard-data-for-publication/pollhab_2km_prop_on_ag_10s_cur_md5_0cfd31e3ccea4c661cf1bf8914b8b426.tif',
    'https://storage.googleapis.com/ipbes-natcap-ecoshard-data-for-publication/pollhab_2km_prop_on_ag_10s_ssp1_md5_b843575b5ef98c8431f6e78e2ce3fba0.tif',
    'https://storage.googleapis.com/ipbes-natcap-ecoshard-data-for-publication/pollhab_2km_prop_on_ag_10s_ssp3_md5_5d50078e62d5cb1066a95a408f6c15da.tif',
    'https://storage.googleapis.com/ipbes-natcap-ecoshard-data-for-publication/pollhab_2km_prop_on_ag_10s_ssp5_md5_48a6718435e58e9e67e39824005c4ad1.tif',
]
MIN_ZOOM = 3
MAX_ZOOM = 10


@APP.route('/favicon.ico')
def favicon():
    return flask.send_from_directory(
        os.path.join(APP.root_path, 'images'), 'favicon.ico',
        mimetype='image/vnd.microsoft.icon')


@APP.route('/', defaults={'ecoshard': 'None'})
@APP.route('/<ecoshard>')
def index(ecoshard):
    """Show map."""
    try:
        LOGGER.debug('index: %s', ecoshard)
        return flask.render_template(
            'viewer.html', **{
                'ecoshard': ecoshard,
                'min_zoom': MIN_ZOOM,
                'max_zoom': MAX_ZOOM,
            })
    except Exception as e:
        LOGGER.exception('exception in index')
        return str(e)


def build_tiles():
    """Func to build tiles so it can happen in parallel."""
    task_graph = taskgraph.TaskGraph(WORKSPACE_DIR, -1, 5.0)
    for ecoshard_url in ECOSHARD_LIST:
        ecoshard_path = os.path.join(
            WORKSPACE_DIR, os.path.basename(ecoshard_url))
        fetch_task = task_graph.add_task(
            func=urllib.request.urlretrieve,
            args=(ecoshard_url, ecoshard_path),
            target_path_list=[ecoshard_path],
            task_name=f'fetch {os.path.basename(ecoshard_path)}')
        fetch_task.join()
        color_raster_path = os.path.join(
            WORKSPACE_DIR, f'color_{os.path.basename(ecoshard_path)}')
        color_raster_task = task_graph.add_task(
            func=subprocess.run,
            args=([
                'gdaldem', 'color-relief', ecoshard_path, COLOR_TABLE_PATH,
                color_raster_path],),
            target_path_list=[color_raster_path],
            dependent_task_list=[fetch_task],
            task_name=f'color {os.path.basename(color_raster_path)}')
        color_raster_task.join()

        target_tile_dir = os.path.join(
            WORKSPACE_DIR, 'tiles', os.path.splitext(
                os.path.basename(ecoshard_path))[0])
        tile_creation_task = task_graph.add_task(
            func=subprocess.run,
            args=([
                'python', 'gdal2tiles.py', '-v', '-e', '-z',
                f'{MIN_ZOOM}-{MAX_ZOOM}', '-r',
                'average', '--processes=%d' % multiprocessing.cpu_count(),
                color_raster_path, target_tile_dir],),
            dependent_task_list=[color_raster_task],
            task_name=f'create tiles {os.path.basename(color_raster_path)}')
    task_graph.close()
    task_graph.join()
    task_graph = None


def main():
    """Entry point."""
    build_tiles_thread = threading.Thread(target=build_tiles)
    build_tiles_thread.start()
    APP.run(host='0.0.0.0', port=8080)
    build_tiles_thread.join()


if __name__ == '__main__':
    main()
