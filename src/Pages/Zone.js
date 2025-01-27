import React,{useState,useEffect} from 'react'
import Zonebanner2 from "../Asset/Zonebanner2.svg"
import Zonebanner1 from "../Asset/Zonebanner1.svg"
import arrow from "../Asset/arrow.svg"
import "../Zone.css";
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};
const Zone = () => {
  const [isCPG,setIsCPG]= useState(true)
  const [isManu,setIsManu]= useState(false)
  const [isRetail,setIsRetail]= useState(false)
  const [isEnergy,setIsEnergy]= useState(false)
  const [loaded, setIsLoaded] = useState(false);
  useEffect(() => {
      let observer = new window.IntersectionObserver(function (entries, self) {
        console.log("entries", entries);
        console.log("self", self);
        // iterate over each entry
        entries.forEach((entry) => {
          // process just the images that are intersecting.
          // isIntersecting is a property exposed by the interface
          if (entry.isIntersecting) {
            // custom function that copies the path to the img
            // from data-src to src
            loadImages(entry.target);
            // the image is now in place, stop watching
            self.unobserve(entry.target);
          }
        });
      }, config);
  
      const imgs = document.querySelectorAll("[data-src]");
      imgs.forEach((img) => {
        observer.observe(img);
      });
      return () => {
        imgs.forEach((img) => {
          observer.unobserve(img);
        });
      };
    }, []);
  
    const loadImages = (image) => {
      image.src = image.dataset.src;
    };
  const handleBtnClick =(e)=>{
    console.log(e.target.id)
    if(e.target.id==='cpg')
    {
      setIsCPG(true)
      setIsManu(false)
      setIsRetail(false)
      setIsEnergy(false)
    }
    else if(e.target.id==='manu')
      {
        setIsCPG(false)
        setIsManu(true)
        setIsRetail(false)
        setIsEnergy(false)
      }
    else if(e.target.id==='retail')
    {
      setIsCPG(false)
      setIsManu(false)
      setIsRetail(true)
      setIsEnergy(false)
    }
    else if(e.target.id==='energy')
      {
        setIsCPG(false)
        setIsManu(false)
        setIsRetail(false)
        setIsEnergy(true)
      }
  }
  return (
    <div className='zone-wrapper'>
      <div className='zone-wrapper-1'>
        <img src={Zonebanner1} style={{width:"100%",height:"100%",objectFit:"cover"}}  />
        <div className='zone-navbar'>
          <nav>
            {/* <a href='#'>CPG</a>
            <a href='#'>Manufacturing</a>
            <a href='#'>Retail</a>
            <a href='#'>Energy</a>
            <span></span> */}
            <button id='cpg' className={isCPG?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            CPG
            </button>
            <button id='manu' className={isManu?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            Manufacturing
            </button>
            <button id='retail' className={isRetail?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            Retail
            </button>
            <button id='energy' className={isEnergy?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            Energy
            </button>
          </nav>
        </div>
        
      </div>
      <div className='zone-wrapper-2'>
          <img src={""} data-src={Zonebanner2} style={{width:"100%",height:"100%",objectFit:"cover"}}  />
          <div className='zone-arrow'>
            <img src={arrow} style={{width:"50%",height:"50%",objectFit:"cover"}}  />
          </div>
      </div>
    </div>
  )
}

export default Zone