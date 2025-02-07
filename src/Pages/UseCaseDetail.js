import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import usecasedetailbanner from "../Asset/usecasedetailbanner.svg"
import bannerdtlimg1 from "../Asset/bannerdtlimg1.svg"
import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "../Components/Loader.js"
import "../UseCaseDetail.css"
const UseCaseDetail = () => {
    const {caseid,casetitle} = useParams();
    console.log("10",casetitle,caseid)
    const [isLoading,setIsLoading]= useState(false)
    const [usecaseDetailData,setUsecaseDetailData]= useState({})
    const getDataOnLoad = async() => {
        setIsLoading(true)
        const response = await fetch(
          'https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/api/getUseCaseList',
          {
            method: "GET",
            
          }
        );
        const result = await response.json()
        console.log("Data on Load ",result.data[0])
      
        let temparr=result.data[0].filter((item)=>{
          return item.ID.toString()===caseid
        })
        console.log("26",temparr)
        setUsecaseDetailData(temparr[0])
        setIsLoading(false)
      }
    useEffect(()=>{
          getDataOnLoad()
        },[])
  return (
    <div className='usecasedetail-wrapper'>
        <div className='usecasedetail-wrapper-1'>
            <div className='breadcrumb'>
                <Link style={{textDecoration:"none"}} to='/'>
                    <CiHome style={{color:"white",cursor:"pointer"}}/>
                </Link>
                
                <IoIosArrowForward style={{color:"white"}}/>
                <Link style={{textDecoration:"none"}} to='/usecases'>
                    <p style={{color:"white",fontSize:"12px",  whiteSpace: "nowrap",cursor:"pointer"}}>Use Cases</p>
                </Link>
                
                <IoIosArrowForward style={{color:"white"}}/>
                <p style={{color:"white",fontSize:"12px",  whiteSpace: "nowrap"}}>{casetitle}</p>
            </div>
            <img src={usecasedetailbanner} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        </div>
        <div className='usecasedetail-wrapper-2'>
            {isLoading ? <Loader/> :
            <>
                <div className='addusecasedetails-btn'>
                    <Link style={{textDecoration:"none"}} to={`/addusecase`}>
                        <button>
                            Add Use Case
                        </button>
                    </Link>
                    
                </div>
            
                <div className='addusecasedetails-short-form'>
                    <table  >

                            <tr >
                            
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}} >
                                    ID</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.UsecaseID}</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>
                                    Title of Project</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.Title}</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}} >Year</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.YEAR}</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Client Name</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.Client_Name}</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Industry</td>
                                <td>:</td>
                                
                            {(usecaseDetailData.Industry==="AM") &&
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                               Manufacturing
                                </td>  
                            }
                            {(usecaseDetailData.Industry==="CM") &&
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                               Consumer
                                </td>  
                            }
                            {(usecaseDetailData.Industry==="ER") &&
                            <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                            Energy
                            </td>  
                            }
                            {(usecaseDetailData.Industry==="FS") &&
                            <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                            Finance
                            </td>  
                            }
                            {(usecaseDetailData.Industry==="GI") &&
                            <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                            Infrastructure
                            </td>  
                            } 
                            {(usecaseDetailData.Industry==="HC") &&
                            <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                            Healthcare
                            </td>  
                            } 
                            {(usecaseDetailData.Industry==="PE") &&
                            <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                            Private
                            </td>  
                            } 
                            {(usecaseDetailData.Industry==="TM") &&
                            <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>
                            Technology
                            </td>  
                            } 
                            </tr>
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Function</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.Function_Used}</td>
                            </tr>
                        
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Technology Used</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.Technology_Used}</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Region</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.Region}</td>
                            </tr>
                            <tr>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"400",lineHeight:"16.8px",padding:"5px 20px"}}>Complexcity</td>
                                <td>:</td>
                                <td style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"600",lineHeight:"16.8px",padding:"5px 20px"}}>{usecaseDetailData.Complexcity}</td>
                            </tr>
                    </table>
                </div>
                <div className='usecasedetail-list-container'>
                    <img src={`https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/upload/${usecaseDetailData.Image_Link}`} height="300" style={{width:"98%",objectFit:"cover",margin:"2px 5px 0 6px"}}/>
                    <p style={{fontFamily: "EYInterstate",fontSize:"24px",fontWeight:"700",lineHeight:"28.8px",
                    margin:"2px 0 0 40px"}}>Problem Statement</p>
                    <p style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"300",lineHeight:"24px",
                    margin:"2px 0 0 40px"}}>
                    {usecaseDetailData.Problem_Statement}
                    </p>
                    <p style={{fontFamily: "EYInterstate",fontSize:"24px",fontWeight:"700",lineHeight:"28.8px",
                    margin:"2px 0 0 40px"}}>
                    Solution Approach
                    </p>
                    <p style={{fontFamily: "EYInterstate",fontSize:"14px",fontWeight:"300",lineHeight:"24px",
                    margin:"2px 0 0 40px"}}>
                    {usecaseDetailData.Solution}
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

export default UseCaseDetail
