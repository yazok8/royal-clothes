import React from "react"; 
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import {connect} from "react-redux"; 
import {selectDirectorySections} from "../../redux/directory/directory.selector"

import "./directory.style.scss"

// this one will need to be a class component because we do need to store the state value of 
//those menu items that we want to pass and create our menu items with.

const Directory= ({sections})=> (

  <div className="directory-menu">
  
  {/* otherSectionProps is equal to = title, imageUrl,id, size, linkUrl */}
      { sections.map(({id, ...otherSectionProps})=>(
          <MenuItem key={id}{...otherSectionProps} />
      ))}

          </div>
); 

const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory); 