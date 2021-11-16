import React, { useState } from 'react';
import Pmenu from '../Portfolio/Pmenu';
import PortfolioItems from '../Portfolio/PortfolioItems';
import ButtonPortfolio from '../Portfolio/ButtonPortfolio';


// for mapping of button 
const allButton = [ ... new Set(Pmenu.map((currenrElement) =>{ 
    return currenrElement.category
}))]


function Portfolio() {
const [items , setItems] = useState(Pmenu);
// button for 
const [catItems , setCatItems ] = useState(allButton);

const filterItem = (category ) =>{

if(category === "ALL"){

setItems(Pmenu);
return ;
}



const updatedItems = Pmenu.filter( (currenrElement) =>{
 return currenrElement.category === category ;
});
setItems(updatedItems);
}

    return (
        <>
            <h1 className="mt-5 text-center main-heading"> PORTFOLIO </h1>
            <hr />
        <ButtonPortfolio  filterItem={filterItem} catItems={catItems}/>
            <PortfolioItems items={items} />
        </>
    )
}

export default Portfolio;
