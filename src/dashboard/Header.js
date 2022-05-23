import React, { useState } from "react";
import styled from "styled-components"
import Dashboard from "./Dashboard";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-scroll'
const Header =()=>{
    const [custom,setCustom]=useState(false);

    const OpenFunction=()=>{
        setCustom(true)
    }
    const CloseFunction=()=>{
        setCustom(false)
    }
    return(
        <Container>
            <a href="#">
    <img src="tesla_logo.png"/>
    </a>
        <LeftMenu>
        <a href="#"><Link activeClass="active" to="models" spy={true} smooth={true}>Model s</Link></a>
        <a href="#"><Link to="model3" spy={true} smooth={true}>model 3</Link></a>
        <a href="#"><Link to="modelx" spy={true} smooth={true}>model x</Link></a>
        <a href="#"><Link to="modely" spy={true} smooth={true}>model y</Link></a> 
        <a href="#"><Link to="roof" spy={true} smooth={true}>solar roof</Link></a>
        <a href="#"><Link to="charger" spy={true} smooth={true}>wall mount</Link></a> 
        </LeftMenu> 

        <RightMenu>    
        <a>customize</a>
        <a>customer care</a> 
        <a onClick={OpenFunction}>menu</a> 
        
        <Burger show={custom}>
        <CustomClose onClick={CloseFunction} >
        <CloseTag />
        </CustomClose>
        <li><a ><Link  activeClass="active" to="models" spy={true} smooth={true}>model S</Link></a></li>
        <li><a ><Link  to="model3" spy={true} smooth={true}>model 3</Link></a></li>
        <li><a ><Link  to="modelx" spy={true} smooth={true}>model x</Link></a></li>
        <li><a ><Link  to="modely" spy={true} smooth={true}>model y</Link></a></li>
        <li><a ><Link  to="roof" spy={true} smooth={true}>solar roof</Link></a></li>
        <li><a ><Link  to="charger" spy={true} smooth={true}>wall mount</Link></a></li>
        <li><a >profile</a></li>
        <li><a >country    -  [germany]</a><img src='country.webp'/></li>
        <li><a >customer care</a></li>
        </Burger>
        </RightMenu>
        

    </Container>
    )
}

const Container=styled.div`
    position:fixed;
    display:flex;
    height:10vh;
    margin:auto;
    width:100vw;
    flex:auto;
    z-index:1;


    a{
        display:flex;
        margin-top:14px;
        height:5vh;
        flex-wrap:nowrap;
        align-items:space-between;
        justify:content:space-between;
    }
  

`

const LeftMenu=styled.div`
display:flex;
margin-left:30px;
a{
    color:black;
    font-weight:800;
    padding-right:-10px;
    display:flex
    align-items:center;
    justify-content:center;
    padding-left:30px;
    text-transform:uppercase;
    font-size:12px;
    margin-top:12px;

    @media (max-width:768px){
             display:none;
         }
}


`
const RightMenu=styled.div`
display:flex;
margin-left:80px;
cursor:pointer;


a{
    font-weight:1000;
    display:flex;
    margin-left:15px;
    font-size:12px;
    text-transform:uppercase;
    margin-top:24px;
    
}
`
const Burger=styled.div`
position:fixed;
padding-top:20px;
padding-left:3px;
padding-bottom:0px;
background-color:white;
list-style:none; 
display:flex;
flex-direction:column;
text-align:start;
width:350px;
height:90vh;
opacity:0.95;
transform:${(props)=>props.show?"translateX(0)":"translate(100%)"};
overflow-y:scroll;
li{

    border-bottom:1px solid rgba(0,0,0,.2);
    text-transform:uppercase;
    padding-bottom:10px;
    align-items:center;
    padding-top:10px;
}
a{
    display:flex;
    margin-bottom:30px;
    margin-left:2px;
    align-items:flex-start;
    justify-content:flex-start;
    font-weight:600;
    font-size:17px;
}
img{
    position:absolute;
    display:flex;
    height:20px;
    justify-content:flex-end;
    align-items:flex-end;
    margin-left:60% ;
    margin-top:-55px;
}
`

const CloseTag=styled(CloseIcon)``

const CustomClose=styled.div`
position:relative;
display:flex;
justify-content:flex-end;
padding-right:80px;
`
export default Header