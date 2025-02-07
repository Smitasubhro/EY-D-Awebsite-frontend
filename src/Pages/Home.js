import React,{useState,useEffect,useRef} from 'react';
import Dots from "../Components/Dots";
import banner1 from "../Asset/banner1.jpg"
import banner2 from "../Asset/banner2.jpg"
import banner3 from "../Asset/banner3.jpg"
import banner4 from "../Asset/banner4.jpg"
import Frame1 from "../Asset/Frame1.jpg"
import Frametitle from "../Asset/Frametitle.svg"
import clienttitle from "../Asset/clienttitle.svg"
import GettyImages1 from "../Asset/GettyImages-1.jpg"
import GettyImages2 from "../Asset/GettyImages-2.jpg"
import GettyImages3 from "../Asset/GettyImages-3.jpg"
import GettyImages4 from "../Asset/GettyImages-4.jpg"
import airbnbLogo from "../Asset/airbnb Logo.svg"
import AmazonLogo from "../Asset/Amazon Logo.svg"
import bookmyshowLogo from "../Asset/bookmyshow Logo.svg"
import fedexLogo from "../Asset/fedex Logo.svg"
import MicrosoftLogo from "../Asset/Microsoft Logo.svg"
import WalmartLogo from "../Asset/Walmart Logo.svg"
import {  FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "../Home.css"
import HomeLoader from "../Components/HomeLoader.js";
import Swal from 'sweetalert2';
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};
const Home = () => {
  const [isLoading,setIsLoading]= useState(false)
  const [usecaseData,setUsecaseData]= useState([])
  const [usecaseFilteredData,setUsecaseFilteredData]= useState([])
  const [selectedImage, setSelectedImage] = useState(0)
  const allImages = [banner1,banner2,banner3,banner4]
  const inputElement = useRef();
  useEffect(() => {
    
    const len=allImages.length-1
    if (selectedImage < 0) {
      setSelectedImage(len);
    }
    if (selectedImage > len) {
      setSelectedImage(0);
    }
    
  }, [selectedImage,allImages])
  useEffect(() => {
    let slider = setInterval(() => {
      setSelectedImage(selectedImage + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [selectedImage]);
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
            temparr=[...temparr,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
          })
          console.log("53",temparr)
          setUsecaseData(temparr)
          setUsecaseFilteredData(result.data[0])
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

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };
  const btnpressprev = () => {
    console.log("81",inputElement.current)
    
    let width = inputElement.current.clientWidth;
    inputElement.current.scrollLeft = inputElement.current.scrollLeft - width;
    console.log(width)
  }
  const btnpressnext = () => {
    console.log("93",inputElement.current)
    
    let width = inputElement.current.clientWidth;
    inputElement.current.scrollLeft = inputElement.current.scrollLeft + width;
    console.log(width)
  }

  return (
    <div className='home-wrapper'>
      <div className='home-wrapper-1'>
        {/* <img width={1272} height={260} style={{objectFit:"cover"}} src={allImages[selectedImage]} /> */}
        <img  style={{width:"100%",height:"100%",objectFit:"cover"}} src={allImages[selectedImage]} 
        />
        
        <Dots
          activeIndex={selectedImage}
          sliderImage={allImages}
          onclick={(selectedImage) => setSelectedImage(selectedImage)}
        />
      </div>
      <div className='home-wrapper-2'>
        <img src={""} data-src={Frame1} style={{width:"100%",height:"100%",objectFit:"cover"}} />
      </div>
      <div className='home-wrapper-3'>
        {isLoading &&  <HomeLoader/>}
        <div className='frametitle'>Explore Recent Use Cases</div>
          <FaAngleLeft className="icon-home-pre" onClick={btnpressprev}/>
          <div className='home-wrapper-3-images' ref={inputElement}>
            { 
                
                
                usecaseData?.map((item) => 
                  {
                    return(
                      <div className='card' key={item.id}>
                        <img src={`https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/upload/${item.link}`} style={{width:"100%",height:"150px",padding:"5px",objectFit:"cover"}}/>
                        <p className="image-text">{item.title}</p>
                        <p className="image-content">{item.data}
                        </p>
                        {/* <div className='image-text'>
                        {item.title}
                        </div>
                        <div className='image-1-content'>
                          <div className='title'>
                          {item.title}
                          </div>
                          <div className='content'>
                          {item.data}
                          </div>
                        </div> */}
                      </div>
                    )
                  }
                  
                )
                
            }
            
          </div>
          <FaAngleRight className="icon-home-next" onClick={btnpressnext}/>
      </div>
      <div className='home-wrapper-4'>
        {/* <img src={clients} style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
        <div className='clienttitle'>
          our clients
        </div>
        <div className='clientlogo'>
          <div className='clientlogoslide'>
            <div className='clientlogobox'>
              <img src={airbnbLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={AmazonLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={bookmyshowLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={fedexLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={MicrosoftLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={WalmartLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
          </div>
          <div className='clientlogoslide'>
            <div className='clientlogobox'>
              <img src={airbnbLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={AmazonLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={bookmyshowLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={fedexLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={MicrosoftLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={WalmartLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
          </div>
          <div className='clientlogoslide'>
            <div className='clientlogobox'>
              <img src={airbnbLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={AmazonLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={bookmyshowLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={fedexLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={MicrosoftLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
            <div className='clientlogobox'>
              <img src={WalmartLogo} style={{padding:"5px",borderRadius:"3%"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home