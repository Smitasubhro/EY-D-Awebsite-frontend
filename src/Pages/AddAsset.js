import React,{useState,useRef} from 'react'
import Addassetbanner from "../Asset/Addassetbanner.svg"
import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import {Link,useNavigate} from "react-router-dom";
import {v4 as uuid} from "uuid";
import Swal from 'sweetalert2'
import "../AddAsset.css"

const AddAsset = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const uniqueid=uuid().toUpperCase();
  const [isBtnLoading,setIsBtnLoading]= useState(false)
  const [fileName,setFileName]= useState("")
  const [fileData, setFileData] = useState("");
  const [formData, setFormData] = useState({clientName:"",techName:"",region:"",industry:"",
      function:"",complexity:"",developedby:"",pillar:"",subpillar:"",problem:"",solution:"",
      business:"",effort:"",year:"",startdate:"",enddate:"",title:"",assetid:uniqueid
  });
  const handleFileUpload=(e)=>{
    console.log("12",e.target.files[0].name)
    let reader= new FileReader()
    // reader.readAsDataURL(inputRef.files[0])
    setFileName(e.target.files[0].name)
    setFileData(e.target.files[0])
}
const onSubmitHandler = async(e) => {

        e.preventDefault();
        setIsBtnLoading(true)
          const data = new FormData();
          data.append("imageLink", fileData);
          const response = await fetch(
            'https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/api/uploadImage',
            {
              method: "POST",
              body: data,
            }
          );
          const result = await response.json()
          console.log("File saved ",result)
          const assetdata={
            "Tag_Name":formData.pillar,
            "Title":formData.title,
            "YEAR":formData.year,
            "Client_Name":formData.clientName,
            "Industry":formData.industry,
            "Function_Used":formData.function,
            "Technology_Used":formData.techName,
            "Region":formData.region,
            "Complexcity":formData.complexity,
            "Image_Link":result.data,
            "AssetID":formData.assetid,
            "Startdate":formData.startdate,
            "Enddate":formData.enddate,
            "Effortdays":formData.effort,
            "Developed_By":formData.developedby,
            "Pillars":formData.pillar,
            "Sub_Pillar":formData.subpillar,
            "Problem":formData.problem,
            "Solution":formData.solution,
            "Business":formData.business,
          }
          const addresponse = await fetch(
            'https://dawebsitebackend-cbbsfecegrejhvbx.eastus-01.azurewebsites.net/api/addAsset',
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                
                'Accept': '*/*',
            },
             
              body: JSON.stringify(assetdata)
            }
          );
          const addresult = await addresponse.json()
          setIsBtnLoading(false)
          console.log("asset added ",addresult)
          if(addresult.status==="success")
          {
            const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Asset added successfully"
              }).then(()=>{
                navigate("/assets");
              })
          }
          if(addresult.status==="error")
            {
              const Toast = Swal.mixin({
                  toast: true,
                  position: "center",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "error",
                  title: "Asset cant be added"
                })
            }
        
      };
      const handleFormdataChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }
      return (
        <div className='addasset-wrapper'>
          <div className='addasset-wrapper-1'>
            <div className='breadcrumb'>
                <Link style={{textDecoration:"none"}} to='/'>
                    <CiHome style={{color:"white",cursor:"pointer"}}/>
                </Link>
                
                <IoIosArrowForward style={{color:"white"}}/>
                <Link style={{textDecoration:"none"}} to='/assets'>
                    <p style={{color:"white",fontSize:"12px",  whiteSpace: "nowrap",cursor:"pointer"}}>Assets</p>
                </Link>
                
                <IoIosArrowForward style={{color:"white"}}/>
                <p style={{color:"white",fontSize:"12px",  whiteSpace: "nowrap"}}>Add Asset</p>
            </div>
            <img src={Addassetbanner} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </div>
          <div className='addasset-wrapper-2'>
            <div className='addasset-form'>
              <form className='addasset-main-form' onSubmit={ onSubmitHandler }>
                <div className='form-field-text'>
                  <label for='assetid'>Asset Id</label>
                  <input type="text" id='assetid' name='assetid'
                  value={formData.assetid} readonly disabled={true}/>
                </div>
                <div className='form-field-text'>
                  <label for='title'>Title of the Project (Application Name) *</label>
                  <input type="text" id='title' name='title' required
                  value={formData.title} onChange={(e)=>handleFormdataChange(e)}/>
                </div>
                <div className="form-field-select">
                  <label for='client' >Client Name *</label>
                  <select id='client' name='clientName' required value={formData.clientName} onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="EY">EY</option>
                      <option value="Infosys">Infosys</option>
                      <option value="TCS">TCS</option>
                      <option value="TSL">TSL</option>
                  </select>
                </div>
                <div className="form-field-select">
                  <label for='technology'>Technology Used *</label>
                  <select id='technology' name='techName' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="powerapps" >Power Apps</option>
                      <option value="powerbi">Power BI</option>
                      <option value="react">React</option>
                      <option value="java">JAVA</option>
                  </select>
                </div>
                <div className="form-field-select">
                  <label for='region'>Region *</label>
                  <select id='region' name='region' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="europe" >Europe</option>
                      <option value="asia">Asia</option>
                  </select>
                </div>
                <div className="form-field-select">
                  <label for='industry'>Industry *</label>
                  <select id='industry' name='industry' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="telecom" >Telecom</option>
                      <option value="transport">Transport</option>
                  </select>
                </div>
                <div className="form-field-select">
                  <label for='function'>Functions *</label>
                  <select id='function' name='function' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="hr" >HR</option>
                      <option value="finance">Finance</option>
                  </select>
                </div>
                <div className="form-field-select">
                  <label for='complexity'>Complexity *</label>
                  <select id='complexity' name='complexity' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="hr" >Medium</option>
                      <option value="easy">Easy</option>
                  </select>
                </div>
                <div className='form-field-text'>
                  <label for='startdate'>Start Date & Time</label>
                  <input type="date" id='startdate' name='startdate' required
                  value={formData.startdate} onChange={(e)=>handleFormdataChange(e)}/>
                </div>
                <div className='form-field-text'>
                  <label for='enddate'>End Date & Time</label>
                  <input type="date" id='enddate' name='enddate' required
                  value={formData.enddate} onChange={(e)=>handleFormdataChange(e)}/>
                </div>
                <div className='form-field-text'>
                  <label for='effort'>Total Effort(Days) *</label>
                  <input type="text" id='effort' name='effort' required
                  value={formData.effort} onChange={(e)=>handleFormdataChange(e)} />
                </div>
                <div className='form-field-text'>
                  <label for='year'>Year *</label>
                  <input type="text" id='year' name='year' required
                  value={formData.year} onChange={(e)=>handleFormdataChange(e)}/>
                </div>
                <div className="form-field-select">
                  <label for='developedby'>Developed By *</label>
                  <select id='developedby' name='developedby' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="EY" >EY</option>
                      <option value="TCS">TCS</option>
                  </select>
                </div>
                <div className="form-field-select">
                  <label for='pillar'>Pillars *</label>
                  <select id='pillar' name='pillar' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="Data Foundation" >Data Foundation</option>
                      <option value="Data Engineering">Data Engineering</option>
                      <option value="Business Intelligence">Business Intelligence</option>
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                  </select>
                </div>
                <div className="form-field-select">
                  <label for='subpillar'>Sub-Pillars *</label>
                  <select id='subpillar' name='subpillar' required onChange={(e)=>handleFormdataChange(e)}>
                      <option value="" hidden>Please Select an item</option>
                      <option value="Data Foundation" >Data Foundation</option>
                      <option value="Data Engineering">Data Engineering</option>
                      <option value="Business Intelligence">Business Intelligence</option>
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                  </select>
                </div>
                <div className="form-field-select">

                </div>
                <div className='form-field-textarea'>
                  <label for='problem'>Problem Statement *</label>
                  <textarea id="problem" name="problem" required rows="6" cols="400"
                  value={formData.problem} onChange={(e)=>handleFormdataChange(e)}>

                  </textarea>
                </div>
                <div className='form-field-textarea'>
                  <label for='solution'>Solution Provided *</label>
                  <textarea id="solution" name="solution" required rows="6" cols="400"
                  value={formData.solution} onChange={(e)=>handleFormdataChange(e)}>

                  </textarea>
                </div>
                <div className='form-field-textarea'>
                  <label for='business'>Business Benefit *</label>
                  <textarea id="business" name="business" required rows="6" cols="400"
                  value={formData.business} onChange={(e)=>handleFormdataChange(e)}>

                  </textarea>
                </div>
                <div className='form-field-upload'>
                  <label for='business'>Attach images of the project*</label>
                  <div className='container'>
                    <figure className='image-container'>
                        <figcaption id='file-name'>
                            {fileName}
                        </figcaption>
                    </figure>
                    <input ref={inputRef} type="file" id="upload-btn" required accept="image/*" onChange={(event)=>handleFileUpload(event)}/>
                    <label for="upload-btn">
                        <FiUpload/>
                    </label>
                  </div>
                </div>
                <div className='form-btn'>
                  <div className='addasset-form-btn'>
                    <button type="submit" id={isBtnLoading?"disable-submit-btn":"submit-btn"} disabled={isBtnLoading}>
                      {isBtnLoading?
                      <FaSpinner style={{width:"20px",marginTop:"5px"}}/>:
                      ""
                      }
                      SUBMIT
                    </button>
                    <Link style={{textDecoration:"none"}} to={`/assets`}>
                      <button type="submit" id={isBtnLoading?"disable-cancel-btn":"cancel-btn"} disabled={isBtnLoading}>
                      {isBtnLoading?
                      <FaSpinner style={{display:"none"}}/>:
                      ""
                      }
                          CANCEL
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
}

export default AddAsset