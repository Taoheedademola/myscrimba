import React from "react";
import App from "./airbnb";
import Hero from "./Hero";
import Card from "./card";
import CardComp from "./CardComp";

const CardElem = CardComp.map(Items=>{
    return <Card
        {...Items}
    />
})

function Index() {
    return(
        <div>
        <App/>
        <Hero/>
        <div className="flex">
        {CardElem}
        </div>
        </div>
    )
}

export default Index 