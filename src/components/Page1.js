import React,{useState} from 'react'
import KIET from "./Assets/kietbanner.jpg"
import study from "./Assets/study.jpg"
import './Page1.css'
import {useHistory} from 'react-router-dom'

function Page1() {

    const initialValuesPage1 = { 
        studentName:"",
        studentEmail:"",
        fatherName:"",
        mothername:"",
        parentEmail:"",
        fatherMobile:"",
        fatherOccupation:"",
        studentMobile:"",
        category:"",
        DOB:"",
        gender:"",
        address:"",
        city:"",
        district:"",
        pincode:""
    }

    const [data1,setData1]=useState(initialValuesPage1)
    const history=useHistory();
 
    const HandleNext=()=>{
        if(data1.studentName==="")
            alert("Enter Student Name")
            else
                if(data1.fatherName==="")
                alert("Enter Father Name")
                else
                if(data1.mothername==="")
                    alert("Enter Mother Name")
                    else
                    if(data1.studentEmail==="")
                        alert("Enter student email")
                        else
                        if(data1.parentEmail==="")
                            alert("Enter Parent Email")
                            else
                            if(data1.fatherMobile==="" || data1.fatherMobile.length!==10)
                                alert("Enter Correct Father Mobile")
                                else
                                if(data1.studentMobile==="" || data1.studentMobile.length!==10)
                                    alert("Enter Correct Student Mobile")
                                    else
                                    if(data1.fatherOccupation==="")
                                        alert("Enter Father Occupation")
                                        else
                                        if(data1.category==="")
                                            alert("Enter Category")
                                            else
                                            if(data1.DOB==="")
                                                alert("Enter Date of Birth")
                                                else
                                                if(data1.gender==="")
                                                    alert("Enter gender")
                                                    else
                                                    if(data1.address==="")
                                                        alert("Enter Address")
                                                        else
                                                        if(data1.city==="")
                                                            alert("Enter City")
                                                            else
                                                            if(data1.district==="")
                                                                alert("Enter District")
                                                                else
                                                                if(data1.pincode==="" || data1.pincode.length!==6)
                                                                    alert("Enter Correct pincode")
                                                                    else{
                                                                        console.log(data1)
                                                                        history.push("/page2")
                                                                    }
                                                            }
    
    return (
        <div className="app">
        <img src={study} alt="" />
        <div className="student">
            <div className="student_header">
                <img src={KIET} alt="logo" />
                <h3>Registration for Admission Against Vacant/Lapse Seats After UPSEE Counselling</h3>
            </div> 
             
            <div className="student_details">
                <div className="student_detail">
                    <div>
                        <label>Student Name :</label>
                        <input type="text" placeholder="Student Name"  onChange={(e)=> setData1({...data1,studentName: e.target.value})}/> 
                    </div>
                    <div>  
                        <label>Student's Email :</label>
                        <input type="email" placeholder="Student Email" onChange={(e)=>setData1({...data1,studentEmail:e.target.value})}/>
                    </div>
                </div>

                <div className="student_detail"> 
                     <div> 
                        <label>Father's Name :</label>
                        <input type="text" placeholder="Father's name" onChange={(e)=>setData1({...data1,fatherName:e.target.value})}/>
                    </div>
                    <div>
                        <label>Mother's Name :</label>
                        <input type="text" placeholder="Mother's name" onChange={(e)=>setData1({...data1,mothername:e.target.value})}/>
                    </div>  
                </div>

                <div className="student_detail">
                    <div>
                        <label>Parent's Email :</label>
                        <input type="email" placeholder="Email" onChange={(e)=>setData1({...data1,parentEmail:e.target.value})}/>
                    </div>
                    <div> 
                        <label>Father's Mobile:</label>
                        <input type="number" placeholder="Mobile number" onChange={(e)=>setData1({...data1,fatherMobile:e.target.value})}/>
                    </div>    
                </div>

                <div className="student_detail">
                    <div>
                        <label>Father's Occupation:</label>
                        <input type="text" placeholder="Father occupation" onChange={(e)=>setData1({...data1,fatherOccupation:e.target.value})}/>
                    </div>
                    <div>   
                        <label>Student's Mobile:</label>
                        <input type="number" placeholder="Mobile Number" onChange={(e)=>setData1({...data1,studentMobile:e.target.value})}/>
                    </div>
                </div>

                <div className="student_detailRadio student_detail">
                    <div >
                        <label>Category:</label>
                        <input type="radio" name="Category" value="GEN" onClick={(e)=>setData1({...data1,category:e.target.value})}/>
                        <p className="radio-toobarLabel">GEN</p>

                        <input type="radio" name="Category" value="OBC" onClick={(e)=>setData1({...data1,category:e.target.value})}/>
                        <p className="radio-toobarLabel">OBC</p>
                        
                        <input type="radio" name="Category" value="SC" onClick={(e)=>setData1({...data1,category:e.target.value})}/>
                        <p className="radio-toobarLabel">SC</p>
                        
                        <input type="radio" name="Category" value="ST" onClick={(e)=>setData1({...data1,category:e.target.value})}/>
                        <p className="radio-toobarLabel">ST</p>
                    </div>
                    <div>
                        <label >DOB:</label>
                        <input type="date" onChange={(e)=>setData1({...data1,DOB:e.target.value})}/>
                    </div>
                    <div>    
                        <label >Gender:</label>
                        <input type="radio" name="Gender" value="Male" className="radio_gender" onClick={(e)=>setData1({...data1,gender:e.target.value})}/>
                        <p className="radio-toobarLabel label_gender">Male</p>
                        <input type="radio" name="Gender" value="Female" className="radio_gender" onClick={(e)=>setData1({...data1,gender:e.target.value})}/>
                        <p className="radio-toobarLabel label_gender">Female</p>
                    </div>
                </div>

                <div className="student_detailAddress student_detail">
                    <div >
                        <label>Address :</label>
                        <input type="text" placeholder="Address" className="student_detailAddress_full" onChange={(e)=>setData1({...data1,address:e.target.value})}/>
                    </div>
                    <div className="student_detailAddress_half ">
                        <input type="text" placeholder="City" onChange={(e)=>setData1({...data1,city:e.target.value})}/>
                        <input type="text" placeholder="District" onChange={(e)=>setData1({...data1,district:e.target.value})}/>
                        <input type="number" placeholder="Pin Code" onChange={(e)=>setData1({...data1,pincode:e.target.value})}/>
                    </div>
                </div>
                 
                <button className="student_button" onClick={HandleNext}>Next</button>
            </div>
        </div>    
    </div>
    )
}

export default Page1


