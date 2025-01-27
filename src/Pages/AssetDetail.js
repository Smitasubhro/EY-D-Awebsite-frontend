import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import usecasedetailbanner from "../Asset/usecasedetailbanner.svg"
import bannerdtlimg1 from "../Asset/bannerdtlimg1.svg"
import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "../Components/Loader.js"
import "../AssetDetail.css"

const AssetDetail = () => {
  const {assetid,assettitle} = useParams();
  console.log("10",assettitle,assetid)
  const [isLoading,setIsLoading]= useState(false)
  const [assetDetailData,setAssetDetailData]= useState({})
  const getDataOnLoad = async() => {
    setIsLoading(true)
    const response = await fetch(
      'http://localhost:8090/api/getAssetList',
      {
        method: "GET",
        
      }
    );
    const result = await response.json()
    console.log("Data on Load ",result.data[0])
  
    let temparr=result.data[0].filter((item)=>{
      return item.ID.toString()===assetid
    })
    console.log("26",temparr)
    setAssetDetailData(temparr[0])
    setIsLoading(false)
  }
  useEffect(()=>{
      getDataOnLoad()
    },[])
    return (
      <div className='assetdetail-wrapper'>
        <div className='assetdetail-wrapper-1'>
          <div className='breadcrumb'>
              <Link style={{textDecoration:"none"}} to='/'>
                  <CiHome style={{color:"white",cursor:"pointer"}}/>
              </Link>
              
              <IoIosArrowForward style={{color:"white"}}/>
              <Link style={{textDecoration:"none"}} to='/assets'>
                  <p style={{color:"white",fontSize:"12px",  whiteSpace: "nowrap",cursor:"pointer"}}>Assets</p>
              </Link>
              
              <IoIosArrowForward style={{color:"white"}}/>
              <p style={{color:"white",fontSize:"12px",  whiteSpace: "nowrap"}}>{assettitle}</p>
          </div>
          <img src={usecasedetailbanner} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        </div>
        <div className='assetdetail-wrapper-2'>
          {isLoading ? <Loader/> :
          <>
            <div className='addassetdetails-btn'>
              <Link style={{textDecoration:"none"}} to={`/addasset`}>
                <button>
                  Add Asset
                </button>
              </Link>
            </div>
            <div className='addassetdetails-short-form'>
              <table>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}} >
                  ID</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.AssetID}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>
                  Title of Project</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.Title}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}} >Year</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.YEAR}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Client Name</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.Client_Name}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Industry</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.Industry}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Function</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.Function_Used}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Technology Used</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.Technology_Used}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Region</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.Region}</td>
                </tr>
                <tr>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Complexcity</td>
                  <td>:</td>
                  <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{assetDetailData.Complexcity}</td>
                </tr>
              </table>
            </div>
            <div className='assetdetail-list-container'>
              <img src={`http://localhost:8090/upload/${assetDetailData.Image_Link}`} height="300" style={{width:"98%",objectFit:"cover",margin:"2px 5px 0 6px"}}/>
              <p style={{fontFamily: "EYInterstate",fontSize:"24px",fontWeight:"700",lineHeight:"28.8px",
              margin:"2px 0 0 40px"}}>Problem Statement</p>
              <p style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"300",lineHeight:"24px",
              margin:"2px 0 0 40px"}}>
              {assetDetailData.Problem_Statement}
              </p>
              <p style={{fontFamily: "EYInterstate",fontSize:"24px",fontWeight:"700",lineHeight:"28.8px",
              margin:"2px 0 0 40px"}}>
              Solution Approach
              </p>
              <p style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"300",lineHeight:"24px",
              margin:"2px 0 0 40px"}}>
              {assetDetailData.Solution}
              </p>
              <p style={{fontFamily: "EYInterstate",fontSize:"24px",fontWeight:"700",lineHeight:"28.8px",
              margin:"2px 0 0 40px"}}>
              Business Benefits
              </p>
              <p style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"300",lineHeight:"24px",
              margin:"2px 0 0 40px"}}>
              <span style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"700",lineHeight:"24px"}}>Improved Decision-Making :</span> A unified data foundation allows for real-time insights, enabling better strategic decisions.
              </p>
              <p style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"300",lineHeight:"24px",
              margin:"2px 0 0 40px"}}>
                  <span style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"700",lineHeight:"24px"}}>Enhanced Customer Experience : </span>
                  Accurate, comprehensive customer profiles lead to personalized marketing, increasing customer satisfaction and loyalty.
              </p>
              <p style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"300",lineHeight:"24px",
              margin:"2px 0 0 40px"}}>
                  <span style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"700",lineHeight:"24px"}}>Enhanced Customer Experience : </span>
                  Accurate, comprehensive customer profiles lead to personalized marketing, increasing customer satisfaction and loyalty.
              </p>
            </div>
          </>
          }
        </div>
      </div>
    )
}

export default AssetDetail