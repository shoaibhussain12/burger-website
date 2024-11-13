// 'use client'
// import React from "react"

// type offer = {
//     title: string;
//     description: string;
// }

// const SpecialOffer: React.FC = () => {
//     const offers: offer[] =[
//         {
//             title: "Weekend Offers",
//             description: "Get 50% off your total purchase during the weekend."
//         },

//         {
//             title: "Loyalty Program",
//             description: "Earn points for every purchase. Redeem them for free products."
//         },

//         {
//             title: "New Product Launch",
//             description: "Discover new products added to our store during the launch."
//         },
//     ];

// const handleOfferClick =(description: string) => {
//     alert(description);
// }

// return(
// <section className="py-10">
//     <div className="container mx-auto text-current">
// <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// {/* Map over the offers array */}
// {offers.map((offer, index) => {
// <button 
// key={index}
// onClick={() => handleOfferClick(offer.description)}
// className="bg-white shadow-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105">
// <h3 className="text-2xl font-semibold text-red-700"> {offer.title} </h3>
// <p className="text-slate-700 mt-3"> {offer.description} </p>
// </button>
// })}

// </div>
//     </div>
// </section>
// );
// };

// export default SpecialOffer;





"use client"; 

import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffer: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "5PM to 7PM Get 50% off in all baverages.",
    },

    {
      title: "Family Meal Deal",
      description: "Buy family meal deal get junior meal free.",
    },
   
   
    {
      title: "Weekend Offers",
      description: "Get 50% off your total purchase during the weekend.",
    },


    {
      title: "Loyalty Program",
      description:
        "Earn points for every purchase.Redeem for free products.",
    },
    // {
    //   title: "New Product Launch",
    //   description:
    //     "Discover new products to our store during the launch.",
    // },

    // {
    //   title: "Mid-Night Deal",
    //   description: "1 free complimentry burger & drink in midnight deal.",
    // },


  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-current">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over the offers array */}
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-red-700">
                {offer.title}
              </h3>
              <p className="text-slate-700 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
