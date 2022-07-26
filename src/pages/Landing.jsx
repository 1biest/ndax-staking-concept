import HeroVideo from "../components/HeroVideo";

import imgSplash from "../img/ndax-staking-concept-website.png";
import bgGlow  from "../img/ndax-staking-concept-bg-glow2.png";

const Landing = () => {
   return (
      <div className="max-w-2xl lg:max-w-7xl mx-auto px-10 text-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 animate-fadeIn">
            <div className="absolute object-cover self-center -z-10 w-full pointer-events-none">
               <img src={bgGlow} alt="" className="relative top-20 scale-150"></img>
            </div>
            <div className="absolute object-cover self-center -z-10 -right-20 xl:right-60 w-2/3 max-w-[800px] pointer-events-none scale-[65%] xl:scale-[70%]">
               <HeroVideo />
            </div>
            <div className="self-center text-left py-40 z-10">
               <h4 className="text-[#41acfc] text-xl font-semibold py-4">Stake your tokens</h4>
               <h1 className="text-4xl w-2/3 font-bold">Earn staking yield on your investment</h1>
               <div className="flex align-bottom">
                  <h4 className="text-[#41acfc] uppercase font-semibold text-2xl pt-8 pr-3">EARN</h4>
                  <h2 className="text-9xl font-bold pt-6 pb-4">5%</h2>
                  <h4 className="text-[#41acfc] uppercase pt-28 pl-4">APY</h4>
               </div>
               <p className="pb-8 w-2/3">Instead of just holding, earn a passive return on your assets in the form of staking rewards.</p>
               <div className="flex align-bottom space-x-4">
                  <button className="transition-all duration-1000 p-6 py-3 rounded-xl bg-[#58dc4d] uppercase text-xl font-bold text-white hover:bg-opacity-60 hover:transition-all hover:duration-500">Stake Now</button>
                  <button className="transition-all duration-1000 p-6 py-3 rounded-xl uppercase text-xl font-bold text-white hover:translate-x-2 hover:transition-all hover:duration-500">> Calculate Yield</button>
               </div>
            </div>
         </div>
         <div className="z-20">
            <div className="self-center">
               <h4 className="text-[#41acfc] uppercase text-xl font-semibold py-4">Stake your tokens</h4>
               <h1 className="text-4xl font-bold">Earn staking yield on your investment</h1>
               <button></button>
               <p>Instead of just holding, earn a passive return on your assets in the form of staking rewards.</p>
               <div className="w-full bg-[#191f38] py-40 my-20 rounded-xl border-[1px] border-[#41acfc] animate-pulse">
                  <p>yield calculator</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Landing;