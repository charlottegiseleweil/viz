'use strict';

const e = React.createElement;
const Container = ReactBootstrap.Container;
const Col = ReactBootstrap.Col;

class Card extends React.Component {
    state = {  }
    render() { 
        return ( <Col md={4}>Hola</Col> );
    }
}
 




class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        liked: false,
        display: "all", 
    };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (<div>
        <Container fluid={true} style={{backgroundColor: "red"}}>
            

        </Container>
        <button onClick={() => this.setState({ liked: true })}>
          Like
        </button>
        </div>
      );
  }
}

const domContainer = document.querySelector('#MainContent');
ReactDOM.render(e(MainComponent), domContainer);
