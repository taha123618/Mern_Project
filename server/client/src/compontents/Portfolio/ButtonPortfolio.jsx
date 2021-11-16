import React from 'react';

function ButtonPortfolio({ filterItem, catItems }) {
    return (
        <>

            <div className="container menu-tabs">
                <div className="menu-tab d-flex justify-content-around ">

                    {/* looping  */}

                    {
                        catItems.map((currentEelement, index) => {
                            return <button className="btn btn-primary" key={index} onClick={() => filterItem(currentEelement)}>{currentEelement}</button>
                        })
                    }

                    {/* 
                    <button className="btn btn-primary" onClick={() => filterItem('MERN')}>MERN</button>
                    <button className="btn btn-primary" onClick={() => filterItem('HTML & CSS')}>HTML & CSS </button>
                    <button className="btn btn-primary" onClick={() => filterItem('REACT')}>REACT</button>
                    <button className="btn btn-primary" onClick={() => filterItem('NODE JS')}>NODE JS</button>
                    <button className="btn btn-primary" onClick={() =>setItems(Pmenu)}>ALL</button> */}
                </div>
            </div>

        </>
    )
}

export default ButtonPortfolio;
