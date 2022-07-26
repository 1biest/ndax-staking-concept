import HeroVideoFile from "../img/ndax-eth-anim.webm";

const HeroVideo = () => {
   return (
     <video className="w-full" id="hero-video" preload="none" loop playsInline autoPlay muted poster="../img/ndax-staking-concept-website.png">
       <source src={HeroVideoFile} type="video/webm" />
     </video>
   );
 };
 
 export default HeroVideo;