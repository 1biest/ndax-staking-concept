import NdaxLogo from "../img/ndax-logo-small.png";

const Nav = () => {
   return (
      <div className="fixed w-full z-50">
         <div className="max-w-2xl lg:max-w-7xl mx-auto px-10 flex z-50 flex justify-between text-white">
            <div className="flex space-x-10 h-20 py-5">
               <img src={NdaxLogo} alt="NDAX Logo" className="object-contain" />
               <p className="self-center p-2 cursor-pointer">Benefits of Staking</p>
            </div>
            <div className="flex space-x-10 items-center">
               <p>Logan Biesterfeldt Application</p>
            </div>
         </div>
      </div>
   )
}

export default Nav;