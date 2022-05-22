import react from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
const Section=(props)=>{
    
  return(  
     
      <Wrap bgimage={props.image}>
           <Fade bottom cascade>
        {/* <img src={props.image}/> */}
    <Topmodel>
        <h1>{props.name}</h1>
        <h3>{props.title}</h3>
    </Topmodel>
    </Fade>
    <Button>
        <Fade bottom>
    <Buttongroup>
<Left theme="dark">{props.left}</Left>
{props.right&&
<Left theme="light">{props.right}</Left>
}
    </Buttongroup>
    </Fade>
     <DownArrow src="images.png"/>
    </Button>
    </Wrap>
    
  )
}

const Topmodel = styled.div`
font-weight:600
position:absolute;
text-align:center;
padding:14vh;
text-transform:uppercase;
letter-spacing:5px;


`;




const Wrap = styled.div`
width:100vw;
height:100vh;
background-position:center;
background-image:${props=>`url(${props.bgimage})`};
background-size:cover;
background-repeat:no-repeatl
overflow-x:hidden;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`;


const Buttongroup=styled.div`
display:flex;
margin-bottom:30px;

@media (max-width:768px){
    flex-direction:column;

    }
`;

const Left =styled.div`
   
    font-weight:800;
    height:40px;
    color:${(props)=>props.theme==="dark"?"white":"black"};
    width:256px;
    display:flex;
    background-color:${(props) => props.theme === 'dark' ? "rgba(23,26,32,0.8)" : "#fff"};    
    opacity:${(props)=>props.theme==="dark"?"0.85":"0.65"};
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    border-radius:100px;
    font-size:12px;
    cursor:pointer;
    margin:5px;
   `
const Button=styled.div`

`
 const DownArrow = styled.img`
 height:5vh;
 display:flex;
 flex-direction:column
justify-content:center;
align-items:center;
padding-left:47%;
animation:animationdown infinite 2s ;
margin-bottom:5px;
 `


export default Section;
