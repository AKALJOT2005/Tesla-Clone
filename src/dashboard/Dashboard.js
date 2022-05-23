import react from "react";
import Section from './Section' 
import Header from './Header'

const cars_details=[
{
id:1, 
hid:"models",
name:"model s",
title:"its worth it",
left_button:"order now",
right_button:"customize",
image:"Homepage-Model-S-Desktop-LHD.jpg"
},
{
    id:2,
    hid:"model3",
    name:"model 3",
    title:"its amazing",
    left_button:"order now",
    right_button:"customize",
    image:"Model-3-Main-Hero-Desktop-LHD.jpg"
    },
    {
        id:3,
        hid:"modelx",
        name:"model x",
        title:"its spacious",
        left_button:"order now",
        right_button:"customize",
        image:"Homepage-Model-X-Desktop-LHD.jpg"
        },
        {
            id:4,
            hid:"modely",
            name:"model y",
            title:"its luxury",
            left_button:"order now",
            right_button:"customize",
            image:"tesla-model-y-2021-002-min.png"
            },
            {
                id:5,
                hid:"roof",
                name:"solar roof",
                left_button:"order now",
                //right_button:"customize",
                image:"tesla-solar-roof-powerwall-energy.jpg"
                },
                {
                    id:6,
                    hid:"charger",
                    name:"wallmount",
                    left_button:"order now",
                    right_button:"customize",
                    image:"wall-mount.jpg"
                    },
            
        
    
]


const Dashboard=()=>{
     
const cars = cars_details.map(cars=>{

    return (<Section hid={cars.hid}
    key={cars.id}
    name={cars.name}
    title={cars.title}
    left={cars.left_button}
    right={cars.right_button}
    image={cars.image}
    />
    )

})
return (
    <div>
     <Header
     />   
    {cars}
    </div>
)

}

export default Dashboard