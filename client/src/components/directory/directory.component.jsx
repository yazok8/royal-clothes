import React from "react"; 
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import {connect} from "react-redux"; 
import {selectDirectorySections} from "../../redux/directory/directory.selector"
import {DirectoryMenuContainer} from "./directory.styles";



const Directory= ({sections})=> (

  <DirectoryMenuContainer>
  
  {/* otherSectionProps = title, imageUrl,id, size, linkUrl */}
      { sections.map(({id, ...otherSectionProps})=>(
          <MenuItem key={id}{...otherSectionProps} />
      ))}

          </DirectoryMenuContainer>
); 

const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory); 