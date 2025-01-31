import React,{useState,useEffect} from 'react';
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
import "../Home.css"
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const allImages = [banner1,banner2,banner3,banner4]
  
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

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

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
        {/* <img src={Frame2} style={{width:"80%",height:"100%",objectFit:"cover"}} /> */}
        <img src={Frametitle} />
        <div className='home-wrapper-3-images'>
          <div className='card'>
            <img src={""} data-src={GettyImages1} style={{ padding:"5px",borderRadius:"3%"}}/>
            <div className='image-text'>
            Use Case Name 1
            </div>
            <div className='image-1-content'>
              <div className='title'>
                Use Case Name 1
              </div>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum ullamcorper nisi, ut gravida felis eleifend.
              </div>
            </div>
          </div>
          <div className='card'>
            <img src={""} data-src={GettyImages2} style={{padding:"5px",borderRadius:"3%"}}/>
            <div className='image-text'>
            Use Case Name 2
            </div>
            <div className='image-1-content'>
              <div className='title'>
                Use Case Name 2
              </div>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum ullamcorper nisi, ut gravida felis eleifend.
              </div>
            </div>
          </div>
          <div className='card'>
            <img src={""} data-src={GettyImages3} style={{padding:"5px",borderRadius:"3%"}}/>
            <div className='image-text'>
            Use Case Name 3
            </div>
            <div className='image-1-content'>
              <div className='title'>
                Use Case Name 3
              </div>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum ullamcorper nisi, ut gravida felis eleifend.
              </div>
            </div>
          </div>
          <div className='card'>
            <img src={""} data-src={GettyImages4} style={{padding:"5px",borderRadius:"3%"}}/>
            <div className='image-text'>
            Use Case Name 4
            </div>
            <div className='image-1-content'>
              <div className='title'>
                Use Case Name 4
              </div>
              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum ullamcorper nisi, ut gravida felis eleifend.
              </div>
            </div>
          </div>
          {/* <img src={GettyImages2} style={{padding:"5px",borderRadius:"3%"}}/>
          <img src={GettyImages3} style={{padding:"5px",borderRadius:"3%"}}/>
          <img src={GettyImages4} style={{padding:"5px",borderRadius:"3%"}}/> */}
        </div>
      </div>
      <div className='home-wrapper-4'>
        {/* <img src={clients} style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
        <div className='clienttitle'>
          <img src={clienttitle} style={{marginTop:"10px"}}/>
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