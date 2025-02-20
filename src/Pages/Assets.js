import React,{useState,useRef,useEffect} from 'react'
import {Link} from "react-router-dom";
import Assetbanner from "../Asset/Assetbanner.png"
import usecaseimg1 from "../Asset/usecaseimg1.svg"
import usecaseimg2 from "../Asset/usecaseimg2.svg"
import usecaseimg3 from "../Asset/usecaseimg3.svg"
import usecaseimg4 from "../Asset/usecaseimg4.svg"
import usecaseimg5 from "../Asset/usecaseimg5.svg"
import usecaseimg6 from "../Asset/usecaseimg6.svg"
import { FaSearch } from "react-icons/fa";
import { BiAbacus } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import {FaAngleRight ,FaAngleLeft } from "react-icons/fa6";
import Loader from "../Components/Loader.js";
import Swal from 'sweetalert2';
import "../Assets.css"

const Assets = () => {
  const inputElement = useRef();
      const [isLoading,setIsLoading]= useState(false)
      const [isAll,setIsAll]= useState(true)
      const [isDF,setIsDF]= useState(false)
      const [isDE,setIsDE]= useState(false)
      const [isBI,setIsBI]= useState(false)
      const [isAI,setIsAI]= useState(false)
      const [imageUrl,setImageUrl]= useState("")
      const [assetData,setAssetData]= useState([])
      const [assetFilteredData,setAssetFilteredData]= useState([])
      const [selectedClient,setSelectedClient]= useState("")
      const [selectedTech,setSelectedTech]= useState("")
      const [searchText,setSearchText]= useState("")
  // const assetData = [
  //       { id: 1, title: "Enterprise personalization for customers", data: "A platform that gives the personalized experience to the customer based on their purchase and browse history. Brand recommendations personalized for the customer.",
  //         link:usecaseimg1},
  //       { id: 2, title: "Unified Data Platform", data: "A unified platform to be used by internal teams like sales, finance, and HR for different analytics purpose and implement customer provided encryption on sensitive data",link:usecaseimg2 },
  //       { id: 3, title: "Data Factory CoE", data: "Setting up a Data Centre of Excellence, envisaging the need for ad-hoc data management requirements and expeditiously providing diversely skilled data champions.",link:usecaseimg3 },
  //       { id: 4, title: "Digital Risk Lighthouse", data: "Creating one single platform/centralized solution that enable risk owners to review the risks, prioritizing the remediation & track the risk treatment lifecycle in an effectiv...",link:usecaseimg4},
  //       { id: 5, title: "Recommendation engine", data: "ML based automated model for retailers to predict orders, recommend product bundles, improve cross/up-sell",link:usecaseimg5},
  //       { id: 6, title: "Digital/ SEO Analysis", data: "Diagnostic analysis of broken backlinks by source, Trend analysis of search volume, keyword assessment to optimise search performance",link:usecaseimg6},
  //       { id: 7, title: "Enterprise personalization for customers1", data: "A platform that gives the personalized experience to the customer based on their purchase and browse history. Brand recommendations personalized for the customer.",
  //         link:usecaseimg1},
  //       { id: 8, title: "Unified Data Platform2", data: "A unified platform to be used by internal teams like sales, finance, and HR for different analytics purpose and implement customer provided encryption on sensitive data",link:usecaseimg2 },
  //       { id: 9, title: "Data Factory CoE3", data: "Setting up a Data Centre of Excellence, envisaging the need for ad-hoc data management requirements and expeditiously providing diversely skilled data champions.",link:usecaseimg3 },
  //       { id: 10, title: "Digital Risk Lighthouse4", data: "Creating one single platform/centralized solution that enable risk owners to review the risks, prioritizing the remediation & track the risk treatment lifecycle in an effectiv...",link:usecaseimg4},
  //       { id: 11, title: "Recommendation engine5", data: "ML based automated model for retailers to predict orders, recommend product bundles, improve cross/up-sell",link:usecaseimg5},
  //       { id: 12, title: "Digital/ SEO Analysis6", data: "Diagnostic analysis of broken backlinks by source, Trend analysis of search volume, keyword assessment to optimise search performance",link:usecaseimg6},
  //     ];
  const getDataOnLoad = async() => {
    setIsLoading(true)
    try{
      const response = await fetch(
        'https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/api/getAssetList',
        {
          method: "GET",
          
        }
      );
      const result = await response.json()
      //console.log("Data on Load ",result.data[0])
      let temparr=[]
      result.data[0].map((item)=>{
        temparr=[...temparr,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
      })
      console.log("53",temparr)
      setAssetData(temparr)
      setAssetFilteredData(result.data[0])
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
  const getDataOnTabClick =(val)=>{
    if(val==='All')
    {
      let tempArr=assetFilteredData
      let temparrfilter=[]
      tempArr.map((item)=>{
        temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
    })
      setAssetData(temparrfilter)
    }
    else if(val==='DF')
    {
      let tempArr=assetFilteredData.filter((item)=>{
        return item.Pillars==="Data Foundation"
      })
      let temparrfilter=[]
      tempArr.map((item)=>{
        temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
    })
      setAssetData(temparrfilter)
    }
    else if(val==='DE')
    {
      let tempArr=assetFilteredData.filter((item)=>{
        return item.Pillars==="Data Engineering"
      })
      let temparrfilter=[]
      tempArr.map((item)=>{
        temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
    })
      setAssetData(temparrfilter)
    }
    else if(val==='BI')
    {
      let tempArr=assetFilteredData.filter((item)=>{
        return item.Pillars==="Business Intelligence"
      })
      let temparrfilter=[]
      tempArr.map((item)=>{
        temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
    })
      setAssetData(temparrfilter)
    }
    else if(val==='AI')
    {
      let tempArr=assetFilteredData.filter((item)=>{
        return item.Pillars==="Artificial Intelligence"
      })
      let temparrfilter=[]
      tempArr.map((item)=>{
        temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
    })
      setAssetData(temparrfilter)
    }
  }
  useEffect(()=>{
        getDataOnLoad()
      },[])
    const handleBtnClick =(e)=>{
      console.log(e.target.id)
      if(e.target.id==='All')
        {
          setIsAll(true)
          setIsDF(false)
          setIsDE(false)
          setIsBI(false)
          setIsAI(false)
          getDataOnTabClick(e.target.id)
        }
        else if(e.target.id==='DF')
          {
          setIsAll(false)
          setIsDF(true)
          setIsDE(false)
          setIsBI(false)
          setIsAI(false)
          getDataOnTabClick(e.target.id)
          }
        else if(e.target.id==='DE')
        {
          setIsAll(false)
          setIsDF(false)
          setIsDE(true)
          setIsBI(false)
          setIsAI(false)
          getDataOnTabClick(e.target.id)
        }
        else if(e.target.id==='BI')
          {
          setIsAll(false)
          setIsDF(false)
          setIsDE(false)
          setIsBI(true)
          setIsAI(false)
          getDataOnTabClick(e.target.id)
          }
          else if(e.target.id==='AI')
            {
            setIsAll(false)
            setIsDF(false)
            setIsDE(false)
            setIsBI(false)
            setIsAI(true)
            getDataOnTabClick(e.target.id)
            }
    }
      const btnpressprev = () => {
        console.log("81",inputElement.current)
        // if(box)
        // {
        //   let width = box.clientHeight;
        //   box.scrollTop = box.scrollTop - width;
        //   console.log(width)
        // }
        let width = inputElement.current.clientHeight;
        inputElement.current.scrollTop = inputElement.current.scrollTop - width;
        console.log(width)
      }
      const btnpressnext = () => {
        console.log("93",inputElement.current)
        // if(box)
        // {
        //   let width = box.clientHeight;
        //   box.scrollTop = box.scrollTop + width;
        //   console.log(width)
        // }
        let width = inputElement.current.clientHeight;
        inputElement.current.scrollTop = inputElement.current.scrollTop + width;
        console.log(width)
      }
      const handleClear=()=>{
        setIsAll(true)
        setIsDF(false)
        setIsDE(false)
        setIsBI(false)
        setIsAI(false)
        setSelectedClient("");
        setSelectedTech("");
        setSearchText("");
        let tempArr=assetFilteredData
            let temparrfilter=[]
            tempArr.map((item)=>{
              temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
          })
            setAssetData(temparrfilter)
      }
      const handleApplyFilter=()=>{
        if(searchText!=="")
        {
          console.log("searchtext there")
          let temparrfilter=[]
          let tempArr=assetFilteredData.filter((item)=>{
            return item.Title.toLowerCase().includes(searchText.toLowerCase()) 
          })
          // tempArr.map((item)=>{
          //   temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
          // })
          if(selectedClient && selectedTech)
            {
              console.log("221",selectedClient,selectedTech)
              let tempArrSearch=tempArr.filter((item)=>{
                return (item.Sub_Pillar===selectedClient && item.Industry===selectedTech)
              })
              tempArrSearch.map((item)=>{
                temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
              })
            }
            else
            {
              if(!selectedTech && selectedClient)
                {
                  console.log("232",selectedClient)
                  let tempArrSearch=tempArr.filter((item)=>{
                    return item.Sub_Pillar===selectedClient 
                  })
                  tempArrSearch.map((item)=>{
                    temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
                  })
                  
                }
              if(selectedTech && !selectedClient)
              {
                console.log("242",selectedTech)
                let tempArrSearch=tempArr.filter((item)=>{
                  return  item.Industry===selectedTech
                })
                tempArrSearch.map((item)=>{
                  temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
                })
              }
              if(!selectedTech && !selectedClient)
              {
                console.log("253",selectedTech,selectedClient)
                tempArr.map((item)=>{
                  temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
                })
              }
            }
          
          setAssetData(temparrfilter)
        }
        else{
          console.log(" no searchtext there")
          let temparrfilter=[]
          if(selectedClient && selectedTech)
          {
            let tempArr=assetFilteredData.filter((item)=>{
              return (item.Sub_Pillar===selectedClient && item.Industry===selectedTech)
            })
            tempArr.map((item)=>{
              temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
            })
          }
          else{
            if(!selectedTech && selectedClient)
              {
                let tempArr=assetFilteredData.filter((item)=>{
                  return item.Sub_Pillar===selectedClient
                })
                
                tempArr.map((item)=>{
                  temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
              })
                
              }
              if(selectedTech && !selectedClient)
              {
                let tempArr=assetFilteredData.filter((item)=>{
                  return item.Industry===selectedTech
                })
                
                tempArr.map((item)=>{
                  temparrfilter=[...temparrfilter,{id:item.ID,title:item.Title,data:item.Problem_Statement?.slice(0,200),link:item.Image_Link}]
              })
                
              }
          }
          setAssetData(temparrfilter)
        }
        setIsAll(true)
        setIsDF(false)
        setIsDE(false)
        setIsBI(false)
        setIsAI(false)
      }

  return (
    <div className='asset-wrapper'>
      <div className='asset-wrapper-1'>
        <img src={Assetbanner} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        <div 
          style={{
          position: "absolute",
          left: "50%",
          top:"50%",
          transform: "translate(-50%,-50%)",
          color:"#FFFFFF",
          whiteSpace: "nowrap",
          fontFamily:"EYInterstate",
          fontSize:"35px",
          fontWeight:"700",
          lineHeight: "48.01px",
          }}
        >
          
          Assets
        </div>
        <div className='addasset-btn'>
          <Link style={{textDecoration:"none"}} to={`/addasset`}>
            <button>
              Add Assets
            </button>
          </Link>
        </div>
        <div className='addasset-short-form'>
          <form className="tiles-search" onSubmit={ (e)=>e.preventDefault() }>
            <div id="search-input-box">
              <input id="search-input" type="text" placeholder='Search' value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}/>
              <FaSearch id="search-icon"/>
            </div>
            <div style={{display:"flex",marginTop:"25px"}}>
              <BiAbacus/>
              <p style={{marginLeft:"2px",fontFamily:"EYInterstate",fontSize:"14px",
                fontWeight: "700",lineHeight: "16.8px"}}>Filters</p>
            </div>
            <div className="search-select-box-1">
              <select value={selectedTech} onChange={(e)=>setSelectedTech(e.target.value)}>
                <option value="" hidden>Please Select Industry</option>
                <option value="AM" >Manufacturing</option>
                <option value="CM">Consumer</option>
                <option value="ER">Energy</option>
                <option value="FS">Finance</option>
                <option value="GI">Infrastructure</option>
                <option value="HC">Healthcare</option>
                <option value="PE">Private</option>
                <option value="TM">Technology</option>
              </select>
            </div>
            <div className="search-select-box-2">
              <select value={selectedClient} onChange={(e)=>setSelectedClient(e.target.value)}>
                <option value="" hidden>Please Select Sub-Pillar</option>
                <option value="Azure">Azure</option>
                <option value="AWS">AWS</option>
                <option value="GCP">GCP</option>
                <option value="Snowflake">Snowflake</option>
                <option value="DBT">DBT</option>
                <option value="Fivetran">Fivetran</option>
                <option value="Palantir Foundry">Palantir Foundry</option>
                <option value="Databricks">Databricks</option>
                <option value="Big Data & Hadoop">Big Data & Hadoop</option>
                <option value="MS Fabric">MS Fabric</option>
                <option value="Data Strategy">Data Strategy</option>
                <option value="MDM">MDM</option>
                <option value="Data Modelling">Data Modelling</option>
                <option value="DQ">DQ</option>
                <option value="ETL / DI">ETL / DI</option>
                <option value="Data Governance">Data Governance</option>
                <option value="Data Testing">Data Testing</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Data Visualization">Data Visualization</option>
                <option value="Power Platform">Power Platform</option>
                <option value="AI4BI">AI4BI</option>
                <option value="AI/ ML Engineering">AI/ ML Engineering</option>
                <option value="Gen-AI">Gen-AI</option>
                <option value="Python Full Stack">Python Full Stack</option>
              </select>
            </div>
            <div id="filter-btn">
              <button id="btn-1" onClick={handleApplyFilter}>Apply</button>
              <button id="btn-2" onClick={handleClear}>Clear all</button>
            </div> 
                     
          </form>
        </div>
        <div className='asset-navbar'>
          <nav>
            
            <button id='All' className={isAll?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            All
            </button>
            <button id='DF' className={isDF?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            Data Foundation
            </button>
            <button id='DE' className={isDE?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            Data Engineering
            </button>
            <button id='BI' className={isBI?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            Business Intelligence
            </button>
            <button id='AI' className={isAI?'activebtn':''} onClick={(event)=>handleBtnClick(event)}>
            Artificial Intelligence
            </button>
          </nav>
        </div>
        <div className='asset-list-container' ref={inputElement}>
          {isLoading ? <Loader/> : 
            assetData?.map((item) => (
              <div key={item.id} className='asset-list-box'>
                <img src={`https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/upload/${item.link}`} style={{width:"100%",objectFit:"cover"}}/>
                <p className="asset-tile-title">{item.title}</p>
                <p className="asset-tile-content">{item.data}
                </p>
                <Link style={{textDecoration:"none"}} to={`/assets/${item.id}/${item.title}`}>
                  <div style={{display:"flex"}}>
                    <p className="asset-tile-footer">Read More</p>
                    <FaArrowRight style={{color:"#FFE600",marginTop:"5px",cursor:"pointer"}}/>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
        {assetData.length>6 ?
                <div className='asset-footer-main'>
                  <FaAngleLeft style={{cursor:"pointer"}} onClick={btnpressprev}/>
                  <FaAngleRight style={{cursor:"pointer"}} onClick={btnpressnext} />
                </div>:
                ""
        }
        
      </div>
    </div>
  )
}

export default Assets