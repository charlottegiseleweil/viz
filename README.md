This is the codebase for the [NatCap viz gallery](http://viz.naturalcapitalproject.org/)<br/>
*Interested in contributing? [Send an email](mailto:chweil@stanford.edu) and tell us about your idea*

Besides the css, images, and js folders - which contains code for the gallery - this repo includes several subfolders with builds for other NatCap visualization. 

## Set up 
1. Download or clone this repository and open the project directory in your text editor ([how to clone](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository))

## Structure

### Folders
* `/js` - includes javascript for interaction
* `/images` - includes all thumbnails and images for the projects featured
* `/css` - includes css code

### `Index.html` 
This file includes all html code and is divided into three sections. First, the side menu is declared, then the header, and finally the main content with all the examples and resources. 

## Adding a new visualization
1. Locate the last viz example row in index.html 
2. Each row can include 3 examples <br/>
    a. If there is room in the row, simply include a new div with the project: <br/>
    Change the link, the image, the name, info, and creator
```
      <div class="w3-third w3-container w3-margin-bottom filterDiv webmaps">
        <a href='link to the viewer' target='_blank'> 
           <img src="images/name of image" alt="Image" style="width:100%" class="w3-hover-opacity">
        </a>
        <div class="w3-container w3-white">
          <p><b>Name of viewer</b></p>
          <p>Short intro text
            <span class="light"> By the creator</span>
          </p>
        </div>
     </div>
 ```
 <br/>
    b. If the row is full, create a new row by adding the following code: - then include a new div as explained in 2.a <br/>
    
 ```
   <!-- New example row -->
   <div class="w3-row-padding">
   <!-- Three new examples can be placed here -->
   </div>
 ```




 
