import React,{useState,useEffect,useRef} from 'react'
import {Link} from "react-router-dom";
import zonebanner1bgimage from "../Asset/zonebanner1bgimage.jpg"
import {  FaAngleRight, FaAngleLeft ,FaArrowRight} from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";
import "../Zone.css";
import Loader from "../Components/Loader.js";
import Swal from 'sweetalert2';
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};
const Zone = () => {
  const [isLoading,setIsLoading]= useState(false)
  const [usecaseData,setUsecaseData]= useState([])
  const [usecaseFilteredData,setUsecaseFilteredData]= useState([])
  const [usecaseFilteredDataPillar,setUsecaseFilteredDataPillar]= useState([])
  const [isAM,setIsAM]= useState(true)
  const [isCM,setIsCM]= useState(false)
  const [isER,setIsER]= useState(false)
  const [isFS,setIsFS]= useState(false)
  const [isGI,setIsGI]= useState(false)
  const [isHC,setIsHC]= useState(false)
  const [isPE,setIsPE]= useState(false)
  const [isTM,setIsTM]= useState(false)
  const [isDF,setIsDF]= useState(true)
  const [isDE,setIsDE]= useState(false)
  const [isBI,setIsBI]= useState(false)
  const [isAI,setIsAI]= useState(false)
  const inputElement = useRef();
  // useEffect(() => {
  //     let observer = new window.IntersectionObserver(function (entries, self) {
  //       console.log("entries", entries);
  //       console.log("self", self);
  //       // iterate over each entry
  //       entries.forEach((entry) => {
  //         // process just the images that are intersecting.
  //         // isIntersecting is a property exposed by the interface
  //         if (entry.isIntersecting) {
  //           // custom function that copies the path to the img
  //           // from data-src to src
  //           loadImages(entry.target);
  //           // the image is now in place, stop watching
  //           self.unobserve(entry.target);
  //         }
  //       });
  //     }, config);
  
  //     const imgs = document.querySelectorAll("[data-src]");
  //     imgs.forEach((img) => {
  //       observer.observe(img);
  //     });
  //     return () => {
  //       imgs.forEach((img) => {
  //         observer.unobserve(img);
  //       });
  //     };
  //   }, []);
  
  //   const loadImages = (image) => {
  //     image.src = image.dataset.src;
  //   };
  const handleBtnClickInd =(e)=>{
    console.log(e.target.id)
    const tempData=usecaseData.filter((item)=>{
      if(item.industry===e.target.id)
        return item
    })
    console.log("72",tempData)
    setUsecaseFilteredData(tempData)
    if(e.target.id==='AM')
    {
      setIsAM(true)
      setIsCM(false)
      setIsER(false)
      setIsFS(false)
      setIsGI(false)
      setIsHC(false)
      setIsPE(false)
      setIsTM(false)
    }
    else if(e.target.id==='CM')
      {
        setIsAM(false)
        setIsCM(true)
        setIsER(false)
        setIsFS(false)
        setIsGI(false)
        setIsHC(false)
        setIsPE(false)
        setIsTM(false)
      }
    else if(e.target.id==='ER')
    {
      setIsAM(false)
      setIsCM(false)
      setIsER(true)
      setIsFS(false)
      setIsGI(false)
      setIsHC(false)
      setIsPE(false)
      setIsTM(false)
    }
    else if(e.target.id==='FS')
      {
        setIsAM(false)
        setIsCM(false)
        setIsER(false)
        setIsFS(true)
        setIsGI(false)
        setIsHC(false)
        setIsPE(false)
        setIsTM(false)
      }
    else if(e.target.id==='GI')
      {
        setIsAM(false)
        setIsCM(false)
        setIsER(false)
        setIsFS(false)
        setIsGI(true)
        setIsHC(false)
        setIsPE(false)
        setIsTM(false)
      }
    else if(e.target.id==='HC')
      {
        setIsAM(false)
        setIsCM(false)
        setIsER(false)
        setIsFS(false)
        setIsGI(false)
        setIsHC(true)
        setIsPE(false)
        setIsTM(false)
      }
    else if(e.target.id==='PE')
      {
        setIsAM(false)
        setIsCM(false)
        setIsER(false)
        setIsFS(false)
        setIsGI(false)
        setIsHC(false)
        setIsPE(true)
        setIsTM(false)
      }
    else if(e.target.id==='TM')
      {
        setIsAM(false)
        setIsCM(false)
        setIsER(false)
        setIsFS(false)
        setIsGI(false)
        setIsHC(false)
        setIsPE(false)
        setIsTM(true)
      }
  }
  const handleBtnClickPillar =(e)=>{
    console.log(e.target.id)
    if(e.target.id==='DF')
    {
      setIsDF(true)
      setIsDE(false)
      setIsBI(false)
      setIsAI(false)
      const tempData=usecaseData.filter((item)=>{
        if(item.pillars==='Data Foundation')
          return item
      })
      console.log("72",tempData)
      setUsecaseFilteredDataPillar(tempData)
    }
    else if(e.target.id==='DE')
      {
        setIsDF(false)
        setIsDE(true)
        setIsBI(false)
        setIsAI(false)
        const tempData=usecaseData.filter((item)=>{
          if(item.pillars==='Data Engineering')
            return item
        })
        console.log("72",tempData)
        setUsecaseFilteredDataPillar(tempData)
      }
    else if(e.target.id==='BI')
    {
      setIsDF(false)
      setIsDE(false)
      setIsBI(true)
      setIsAI(false)
      const tempData=usecaseData.filter((item)=>{
        if(item.pillars==='Business Intelligence')
          return item
      })
      console.log("72",tempData)
      setUsecaseFilteredDataPillar(tempData)
    }
    else if(e.target.id==='AI')
      {
        setIsDF(false)
        setIsDE(false)
        setIsBI(false)
        setIsAI(true)
        const tempData=usecaseData.filter((item)=>{
          if(item.pillars==='Artificial Intelligence')
            return item
        })
        console.log("72",tempData)
        setUsecaseFilteredDataPillar(tempData)
      }
  }
    const getDataOnLoad = async() => {
          setIsLoading(true)
          try{
            const response = await fetch(
              'https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/api/getUseCaseList',
              {
                method: "GET",
                
              }
            );
            const result = await response.json()
            console.log("Data on Load ",result.data[0])
            let temparr=[]
            result.data[0].map((item)=>{
              temparr=[...temparr,{id:item.ID,industry:item.Industry,pillars:item.Pillars,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
            })
            console.log("53",temparr)
            setUsecaseData(temparr)
            const tempData=temparr.filter((item)=>{
              if(item.industry==="AM")
                return item
            })
            const tempDataPillar=temparr.filter((item)=>{
              if(item.pillars==="Data Foundation")
                return item
            })
            console.log("210",tempDataPillar)
            setUsecaseFilteredData(tempData)
            setUsecaseFilteredDataPillar(tempDataPillar)
            setIsLoading(false)
          }catch(err)
          {
            setIsLoading(false)
          //   const Toast = Swal.mixin({
          //   toast: true,
          //   position: "center",
          //   showConfirmButton: false,
          //   timer: 3000,
          //   timerProgressBar: true,
          //   didOpen: (toast) => {
          //     toast.onmouseenter = Swal.stopTimer;
          //     toast.onmouseleave = Swal.resumeTimer;
          //   }
          // });
          // Toast.fire({
          //   icon: "error",
          //   title: "Erro,Try Again"
          // })
          }
    
        }
    useEffect(()=>{
          getDataOnLoad()
        },[])
        const btnpressprev = () => {
          console.log("81",inputElement.current)
          
          let width = inputElement.current.clientWidth;
          inputElement.current.scrollLeft = inputElement.current.scrollLeft - width;
          console.log("170",width,inputElement.current.scrollLeft)
        }
        const btnpressnext = () => {
          console.log("93",inputElement.current)
          
          let width = inputElement.current.clientWidth;
          inputElement.current.scrollLeft = inputElement.current.scrollLeft + width;
          console.log("177",width,inputElement.current.scrollLeft)
        }
  return (
    <div className='zone-wrapper'>
      {isLoading && <Loader/> }
      <div className='zone-wrapper-1'
        style={{
          backgroundImage: `url(${zonebanner1bgimage})`,
          height:"70vh",
          width:"100%",
          // height:"800px",
          position: "relative",
          overflow: "hidden",
          backgroundPosition:"center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
         
        }}
      >
        <div className='overlay'>
          
        </div>
        {/* <img src={zone1image} style={{
            width:"300px",height:"200px",objectFit:"cover",position:"absolute",top:"30%",left:"10%",
            backgroundColor:"black"
            }}  /> */}
        <div className='zone2-navbar'>
          <nav>
             
              <button id='AM' className={isAM?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Manufacturing
              </button>
              <button id='CM' className={isCM?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Consumer
              </button>
              <button id='ER' className={isER?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Energy 
              </button>
              <button id='FS' className={isFS?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Finance
              </button>
              <button id='GI' className={isGI?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Infrastructure
              </button>
              <button id='HC' className={isHC?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Healthcare 
              </button>
              <button id='PE' className={isPE?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Private 
              </button>
              <button id='TM' className={isTM?'activebtn':''} onClick={(event)=>handleBtnClickInd(event)}>
              Technology
              </button>
          </nav>
        </div>
        <div className="zone-slider">
          <span className='zoneslider-title'>
            Industries
          </span>
          <div className='slider-container'>
          { 
                
                
                usecaseFilteredData?.map((item) => 
                  {
                    return(
                      <div className='slider-box' key={item.id}>
                        <img src={`https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/upload/${item.link}`} style={{width:"40%",height:"100%",padding:"5px",objectFit:"cover"}}/>
                        <div className='slider-data'>
                          <div className="slider-content">
                            {item.data}
                          </div>
                          <div style={{display:"flex"}}>
                            <p>Read More</p>
                            <Link style={{textDecoration:"none"}} to={`/usecases/${item.id}/${item.title}`}>
                              <FaArrowRight style={{color:"#747480",marginTop:"5px",cursor:"pointer"}}/>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  
                )
                
            }
            {/* <div className='slider-box'>
              <img src={GettyImages4} style={{width:"40%",height:"100%",padding:"5px",objectFit:"cover"}}/>
              <div className='slider-data'>
                <div className="slider-content">
                  As visualization consultants, accurately estimating the time and cost for report development is challenging but crucial for business processes.
                  
                </div>
                <div style={{display:"flex"}}>
                  <p>Read More</p>
                  <FaArrowRight style={{color:"#747480",marginTop:"5px",cursor:"pointer"}}/>
                </div>
                
                
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
      <div className='zone-wrapper-2'>
        <div className='zonebanner1' >
          <span className='zonebanner1-nav-title'>
              PILLARS
          </span>
          <div className='zone1-navbar'>
            <nav>
             
              <button id='DF' className={isDF?'activebtn':''} onClick={(event)=>handleBtnClickPillar(event)}>
              Data Foundation
              </button>
              <button id='DE' className={isDE?'activebtn':''} onClick={(event)=>handleBtnClickPillar(event)}>
              Data Engineering
              </button>
              <button id='BI' className={isBI?'activebtn':''} onClick={(event)=>handleBtnClickPillar(event)}>
              Business Intelligence
              </button>
              <button id='AI' className={isAI?'activebtn':''} onClick={(event)=>handleBtnClickPillar(event)}>
              Artificial Intelligence
              </button>
            </nav>
          </div>
        </div>
        <div className='zonebanner2' >
          <div className='zonebanner2-usecases' ref={inputElement}>
            
            { 
              usecaseFilteredDataPillar?.map((item) => 
                {
                  return(
                    <div className='zonebanner2-card' key={item.id}>
                      <img src={`https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/upload/${item.link}`} style={{width:"100%",height:"150px",padding:"5px",objectFit:"cover"}}/>
                      <p className="zone-image-text">{item.title}</p>
                      <p className="zone-image-content">{item.data}
                      </p>
                    </div>
                  )
                }
              )
            }
          </div>
          
        </div>
        {
          usecaseFilteredDataPillar?.length>4 && 
          <div className='zone-arrow'>
            <FaAngleLeft className="zone-pre-arrow" onClick={btnpressprev}/>
            <FaAngleRight className="zone-next-arrow" onClick={btnpressnext}/>
          </div>
        }
        
        
      </div>
    </div>
  )
}

export default Zone