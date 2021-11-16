import React from 'react';

function PortfolioItems({ items }) {
    return (
        <>
            {/* my main item section  */}
            <div className="mt-5 menu-items container-fluid">
                <div className="row">
                    <div className="mx-auto col-11">
                        <div className="my-5 row">

                            {/* Lopping  */}

                            {
                                items.map((elem) => {
                                    const { id, image, category } = elem;

                                    return (

                                        <div className="my-5 item1 col-12 col-md-6 col-lg-6 col-xl-4" key={id}>
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt="img-1" className="img-fluid" />

                                                </div>
                                                {/* menu discripation  */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="pt-4 pb-3 main-title">
                                                        {/* <h1> MERN </h1>
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, autem.</p> */}
                                                    </div>
                                                    <a href="">
                                                        <button className="rounded-3 btn-warning"> Visit </button>
                                                    </a>
                                                </div>
                                                {/* menu end  */}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioItems;
