import React, { useState } from "react";
import styled from "styled-components"
import Dashboard from "./Dashboard";
import CloseIcon from '@mui/icons-material/Close';
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
        <a href="#">Model s</a>
        <a href="#">model 3</a>
        <a href="#">model x</a>
        <a href="#">model y</a> 
        <a href="#">model y</a>
        <a href="#">solar roof</a>
        <a href="#">wall mount</a> 
        </LeftMenu> 

        <RightMenu>    
        <a>customize</a>
        <a>customer care</a> 
        <a onClick={OpenFunction}>menu</a> 
        
        <Burger show={custom}>
        <CustomClose onClick={CloseFunction} >
        <CloseTag />
        </CustomClose>
        <li><a>model S</a></li>
        <li><a>moderl 3</a></li>
        <li><a>model x</a></li>
        <li><a>model y</a></li>
        <li><a>solar roof</a></li>
        <li><a>wall mount</a></li>
        <li><a>profile</a></li>
        <li><a>country</a></li>
        <li><a>customer care</a></li>
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
        margin-top:10px;
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
    margin-left:10px;
    margin-right:-10px;
    display:flex
    align-items:center;
    justify-content:center;
    margin-left:50px;
    text-transform:uppercase;
    font-size:11px;
    margin-top:16px;

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
    margin-top:10px;
    text-transform:uppercase;
    margin-top:16px;
    
}
`
const Burger=styled.div`
position:fixed;
padding-top:20px;
padding-left:3px;
padding-bottom:30px;
background-color:white;
list-style:none; 
display:flex;
flex-direction:column;
text-align:start;
width:350px;
height:88.3vh;
opacity:0.95;
transform:${(props)=>props.show?"translateX(0)":"translate(100%)"};
li{
    border-bottom:1px solid rgba(0,0,0,.2);
    text-transform:uppercase;
    padding-bottom:10px;
    align-items:center;
    padding-top:10px;
}
a{
    font-weight:600;
    font-size:17px;
}
`

const CloseTag=styled(CloseIcon)``

const CustomClose=styled.div`
position:relative;
display:flex;
justify-content:flex-end;
padding-right:60px;
`
export default Header