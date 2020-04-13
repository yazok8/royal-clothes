
import React from "react"; 
import {withRouter} from "react-router-dom";

import "./menu-item.style.scss";

//we will use the match to know where in our directory we will be. 
const MenuItem= ({title, imageUrl, size, history, linkUrl,match})=>(

   
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>


    <div className="background-image" style= {{backgroundImage: `url(${imageUrl})`
    }} ></div>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
    </div>
</div>
    
)

export default withRouter(MenuItem);