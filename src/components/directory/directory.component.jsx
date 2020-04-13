import React from "react"; 
import MenuItem from "../menu-item/menu-item.component";

import "./directory.style.scss"

// this one will need to be a class component because we do need to store the state value of 
//those menu items that we want to pass and create our menu items with.

class Directory extends React.Component {
    constructor(){
        super(); 

       this.state={
         sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              size: "large",
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              size: "large",
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              size: "large",
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
        }
    }



render(){   
    return(
        <div className="directory-menu">
       
       {/* otherSectionProps is equal to = title, imageUrl,id, size, linkUrl */}
           { this.state.sections.map(({id, ...otherSectionProps})=>(
               <MenuItem key={id}{...otherSectionProps} />
           ))}

               </div>
      )
    }
}

export default Directory; 