import React from "react";

const FloatingImageContentBlock = () => {
    return(
        <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burgers</h2>
            <p className="text-white mb-4">Experience the juiciest burgers in town, made with fresh ingredients and grilled to perfection</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                Order Now
            </button>

            <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
                {" "}  
                 Coming soon: Our New Burger Launches{" "}
                 </h3>
           
           <ul>
            <li> <strong> Cheesy BBQ Bacon Burger: </strong>
               A mouthwatering blend of chedder cheese,
              crispy bacon, and BBQ.
            </li>
            <br />
            
            <li> <strong> Spicy Chicken Burger: </strong>
              A flavorful blend of spicy chicken,
              crispy bacon, and tomato sauce.
            </li>
            <br />

            <li> <strong> Grilled Chicken Sandwich: </strong>
              A smoky, grilled chicken breast
              served on a toasted bun.
            </li>
            <br />

            <li> <strong> Mushroom Swiss Burger: </strong>
              A mouthwatering blend of mushrooms,
              Swiss cheese, and grilled bacon.
            </li>
            <br />

             <li> <strong> Buffalo Chicken BBQ Burger: </strong>
              A mouthwatering blend of Buffalo chicken,
              crispy bacon, and BBQ.
            </li>
            <br />
           </ul>
           </div>
<div className="md:w-1/2 mt-6 md:mt-0">
<img src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706001.jpg?t=st=1731239154~exp=1731242754~hmac=8ae1810fa50e1005e81f5c742cfd077cb278caffee1ed4d366ba3f7df5297f53&w=826 " 
alt="delicious burger" 
className="-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>
</div>
            
        </section>
    )
}

export default FloatingImageContentBlock;