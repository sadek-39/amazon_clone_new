import React from 'react';
import "./Home.css"
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_pic" src="home1.jpg"></img>
            </div>

            <div className="home_row">
                {/*product*/}
                <Product id="111001" 
                         title="Charging Cable of Iphone"
                         image="product1.jpg" 
                         price={5.00} 
                         rating={5}/>
                {/*product*/}
                <Product id="111002" 
                         title="Mi Note 9"
                         image="minote9.jpg" 
                         price={200.00} 
                         rating={5}/>
                <Product id="111003"
                         title="Charging Cable of Iphone"
                         image="product1.jpg" 
                         price={5.00} 
                         rating={5}/>

            </div>
            <div className="home_row">
                {/*product*/}
                <Product id="211001"
                         title="Charging Cable of Iphone"
                         image="product1.jpg" 
                         price={5.00} 
                         rating={5}/>
                <Product id="211002"
                         title="Charging Cable of Iphone"
                         image="product1.jpg" 
                         price={5.00} 
                         rating={5}/>
                
                {/*product*/}
                {/*product*/}
                
            </div>
            <div className="home_row">
                {/*product*/}
                <Product/>
                <Product/>
                <Product/>

            </div>


            
        </div>
    )
}

export default Home
