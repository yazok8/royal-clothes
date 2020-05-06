
import React from "react"; 
import {withRouter} from "react-router-dom";
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';


//we will use the match to know where in our directory we will be. 
const MenuItem= ({title, imageUrl, size, history, linkUrl,match})=>(

   
    <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>


    <BackgroundImageContainer style= {{backgroundImage: `url(${imageUrl})`
    }}/>

    <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>Shop now</ContentSubtitle>
    </ContentContainer>
</MenuItemContainer>
    
)

export default withRouter(MenuItem);