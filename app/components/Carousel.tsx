import React from "react";

export default function CArousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-grey-700">
        <div className="py-4 px-2 mx-suto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className=" group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 flex-grow"
              >
                <img
                  src="https://img.freepik.com/free-photo/view-3d-delicious-looking-burger_23-2150914673.jpg?t=st=1730312044~exp=1730315644~hmac=06d69f440b541138b51219911ceef2a2f2e515a14dd85d44ff2f53093795c580&w=360"
                  alt="burger 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Classic Bites{" "}
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 "
              >
                <img
                  src="https://img.freepik.com/premium-photo/delicious-quick-aetizer-meat-burger-with-vegetables-sauce-with-drinks_124507-50683.jpg?w=826 "
                  alt="burger 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Spicy Masala{" "}
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://img.freepik.com/free-photo/front-view-burger-with-french-fries_23-2148235001.jpg?t=st=1730313368~exp=1730316968~hmac=83a79b34a4a5b0b7229e48d0271d01e696e8107ee78bed11e76945a6b0d4ceb6&w=900"
                    alt="burger 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute insect-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className=" z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Gourmate Grill{" "}
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://img.freepik.com/free-photo/tasty-spicy-burger-with-onion-rings_23-2150914673.jpg?t=st=1730312044~exp=1730315644~hmac=06d69f440b541138b51219911ceef2a2f2e515a14dd85d44ff2f53093795c580&w=360"
                    alt="burger 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <h3 className=" z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Veggie Burger{" "}
                  </h3>
                </a>
              </div>
            </div>
              

            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className=" group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40  flex-grow"
              >
                <img
                  src="https://as2.ftcdn.net/v2/jpg/06/73/70/67/1000_F_673706797_7S2wMAOuW0mRLAxWhDDQZaTdzgNyxDNt.jpg "
                  alt="burger 5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Chessy Delight{" "}
                </h3>
              </a>
            </div>















          </div>
        </div>
      </section>
    </div>
  );
}
