import React ,{useState}from 'react'
import {Link,useHistory} from 'react-router-dom'
import study from "./Assets/study.jpg"
import './page2.css'

function Page2() {

    const initialvaluesPage2={
        applyingFor:"",
        upseeAppear:"",
        Qualified:"",
        Gate:"",
        Gpat:"",
        Jee:"",
        highBoard:"Board",
        highGrade:"Grade(yes/no)",
        intermediateBoard:"Board",
        intermediateGrade:"Grade(yes/no)",
        diplomaBoard:"Choose",
        diplomaGrade:"Grade(yes/no)",
        graduationBoard:"Choose",
        graduationGrade:"Grade(yes/no)",

        upseeRollNo:null,
        upseeGeneralRank:null,
        GateGeneralRank:null,
        GpatGeneralRank:null,
        JeeRank:null,

        intermediateMarks:[
            {
                id:"Physics",
                obtaniedMarks:null,
                maximumMarks:null
            },
            {
                id:"Chemistry",
                obtaniedMarks:null,
                maximumMarks:null
            },
            {
                id:"Mathematics",
                obtaniedMarks:null,
                maximumMarks:null
            },
            {
                id:"Biology",
                obtaniedMarks:null,
                maximumMarks:null
            },{
                id:"Computer",
                obtaniedMarks:null,
                maximumMarks:null
            }
        ],
        marks: [
            { 
            id:"High",
            passingYear:null,
            obtainedMarks: null,
            TotalMarks:null
            },
            { 
            id:"Intermediate",    
            passingYear:null,
            obtainedMarks: null,
            TotalMarks:null
                },
            { 
            id:"Diploma",
            passingYear:null,
            obtainedMarks: null,
            TotalMarks:null
                },
            { 
            id:"Graduation",
            passingYear:null,
            obtainedMarks: null,
            TotalMarks:null
            }
        ]
    }

    const [data2,setData2]=useState(initialvaluesPage2);
    const history=useHistory();
    const handleSubmit=()=>{
        if(data2.applyingFor==="")
            alert("Choose application for")
        else if(data2.upseeAppear==="")
            alert("UPSEE appeared")
        else if(data2.upseeAppear==="Yes" && data2.Qualified==="")
            alert("UPSEE Qualified")
        else if(data2.Gate==="")
            alert("Gate Qualified ?")
        else if(data2.Gpat==="")
            alert("Gpat Qualified ?")
        else if(data2.Jee==="")
            alert("Jee Qualified ?")
        else if(data2.highBoard==="Board")
            alert("Choose High School Board")
        else if(data2.highGrade==="Grade(yes/no)")
            alert("Grading in High School (Yes/No)")    
        else if(data2.intermediateBoard==="Board")
            alert("Choose intermediate School Board")
        else if(data2.intermediateGrade==="Grade(yes/no)")
            alert("Grading in Intermediate (Yes/No)")
        else if(data2.diplomaBoard==="Choose")
            alert("Choose Passed/Appeared/Not Done in Diploma")
        else if(data2.diplomaBoard!=="NotDone" &&data2.diplomaGrade==="Grade(yes/no)")
            alert("Grading in Diploma(Yes/No)")    
        else if(data2.graduationBoard==="Choose")
            alert("Choose Passed/Appeared/Not Done in Graduation")
        else if(data2.graduationBoard!=="NotDone" &&data2.graduationGrade==="Grade(yes/no)")
            alert("Grading in Graduation( Yes/No)")
        else{
            alert("Form submitted to KIET")  
            history.push("/")}
    }

    
    console.log(data2)

    return (
        <div className="page">
            <img src={study} alt=""/>
            <div className="page_details">

{/* Applying for */}
                <div className="page_details_Application">    
                    <label className="page_details_Application_label">Application For :</label>
                    <div className="radio_button">
                        <div>
                            <input type="radio" name="Degree" value="Btech" onClick={(e)=>setData2({...data2,applyingFor:e.target.value})}/>
                            <span className="radio_buttonSpan">BTech</span>
                        </div>    
                        <div>
                            <input type="radio" name="Degree" value="MBA" onClick={(e)=>setData2({...data2,applyingFor:e.target.value})}/>
                            <span className="radio_buttonSpan">MBA</span>
                        </div>
                        <div>
                            <input type="radio" name="Degree" value="MCA" onClick={(e)=>setData2({...data2,applyingFor:e.target.value})}/>
                            <span className="radio_buttonSpan">MCA</span>
                        </div>
                        <div>
                            <input type="radio" name="Degree" value="Mtech" onClick={(e)=>setData2({...data2,applyingFor:e.target.value})}/>
                            <span className="radio_buttonSpan">MTech</span>
                        </div>
                    </div>
                </div>

{/* For Branch Selection */}
                {data2.applyingFor==="Btech" &&<div className="page_details_Application">
                    <label className="page_details_Application_label">Select Branch:</label>
                    <div className="page_details_DivSelect">
                        <select name="Branch" >
                            <option>Computer Science & Engineering</option>
                            <option>Electrical & Electronics Engineering</option>
                            <option>Electronics & Communication Engineering</option>
                            <option>Mechanical Engineering</option>
                        </select>
                        <select name="Branch" >
                            <option>Electrical & Electronics Engineering</option>
                            <option>Electronics & Communication Engineering</option>
                            <option>Mechanical Engineering</option>
                        </select>
                        <select name="Branch" >
                             <option>Electronics & Communication Engineering</option>
                            <option>Mechanical Engineering</option>
                        </select>
                    </div>
                </div>}

                {data2.applyingFor==="Mtech" &&<div className="page_details_Application">
                    <label className="page_details_Application_label">Select Branch:</label>
                    <div className="page_details_DivSelect">
                        <select name="Branch" >
                            <option>Computer Science & Engineering</option>
                            <option>Electrical & Electronics Engineering</option>
                            <option>Electronics & Communication Engineering</option>
                            <option>Mechanical Engineering</option>
                        </select>
                    </div>
                </div>}

{/* For UPSEE Appearance */}                
                <div className="page_details_Application">
                    <label className="page_details_Application_label">UPSEE Appeared :</label>
                    <div className="radio_button">
                        <div>
                            <input type="radio" value="Yes" name="UPSEE_AppearedY" onClick={e=>setData2({...data2, upseeAppear:e.target.value})}/>
                            <span className="radio_buttonSpan">Yes</span>
                        </div>
                        <div>
                            <input type="radio" value="No" name="UPSEE_AppearedY" onClick={e=>setData2({...data2, upseeAppear:e.target.value})}/>
                            <span className="radio_buttonSpan">No</span>
                        </div>
                    </div>    
                </div>

{/* For UPSEE Qualifying Status */}
                {data2.upseeAppear==="Yes" && <div className="page_details_Application">
                    <label className="page_details_Application_label">UPSEE Qualifying Status:</label>
                    <div className="radio_button">
                        <div>
                            <input type="radio" value="Qualified" name="UPSEE_AppearedQ" onClick={e=>setData2({...data2, Qualified:e.target.value})}/>
                            <span className="radio_buttonSpan">Qualified</span>
                        </div>
                        <div>
                            <input type="radio" value="Not_Qualified" name="UPSEE_AppearedQ" onClick={e=>setData2({...data2, Qualified:e.target.value})}/>
                            <span className="radio_buttonSpan">Not Qualified</span>
                        </div>
                    </div>    
                </div>}

{/* For UPSEE details */}
                {data2.upseeAppear==="Yes" &&<div className="page_details_Application">
                    <label className="page_details_Application_label">UPSEE Details :</label>
                    <div className="page_details_TypeNumber">
                        <input className="page_details_TypeNumberInput" type="number" placeholder="UPSEE Roll no. " onChange={(e)=>setData2({...data2,upseeRollNo:e.target.value})}/>
                {data2.Qualified==="Qualified" &&   <input className="page_details_TypeNumberInput" type="number" placeholder="UPSEE General Rank Only" onChange={(e)=>setData2({...data2,upseeGeneralRank:e.target.value})}/>}
                    </div>
                </div> }
                
{/* For GATE */}
                <div className="page_details_Application">
                    <label className="page_details_Application_label">GATE Qualified:</label>
                    <div className="radio_button">
                        <div>
                            <input type="radio" value="Yes" name="Gate_Qualified" onClick={e=>setData2({...data2, Gate:e.target.value})}/>
                            <span className="radio_buttonSpan">Yes</span>
                        </div>
                        <div>
                            <input type="radio" value="No" name="Gate_Qualified" onClick={e=>setData2({...data2,Gate:e.target.value})}/>
                            <span className="radio_buttonSpan">No</span>
                        </div>
                        {data2.Gate==="Yes" &&<input type="number" placeholder="GATE General Rank" className="page_details_TypeNumberInput" onChange={(e)=>setData2({...data2,GateGeneralRank:e.target.value})}/>}
                    </div>
                </div>

{/* For GPAT */}
                <div className="page_details_Application">
                    <label className="page_details_Application_label">GPAT Qualified:</label>
                    <div className="radio_button">
                        <div>
                            <input type="radio" value="Yes" name="Gpat_Qualified" onClick={e=>setData2({...data2, Gpat:e.target.value})}/>
                            <span className="radio_buttonSpan">Yes</span>
                        </div>
                        <div>
                            <input type="radio" value="No" name="Gpat_Qualified" onClick={e=>setData2({...data2, Gpat:e.target.value})}/>
                            <span className="radio_buttonSpan">No</span>
                        </div>
                        {data2.Gpat==="Yes" &&<input type="number" placeholder="GPAT General Rank" className="page_details_TypeNumberInput" onChange={(e)=>setData2({...data2,GpatGeneralRank:e.target.value})}/>}
                    </div>
                </div>

{/* For Jee Status */}
                <div className="page_details_Application">
                    <label className="page_details_Application_label">JEE Status:</label>
                    <div className="radio_button">
                        <div>
                            <input type="radio" value="Yes" name="JEE_Applied" onClick={e=>setData2({...data2, Jee:e.target.value})}/>
                            <span className="radio_buttonSpan">Applied</span>
                        </div>
                        <div>
                            <input type="radio" value="No" name="JEE_Applied" onClick={e=>setData2({...data2, Jee:e.target.value})}/>
                            <span className="radio_buttonSpan">Not Applied</span>
                        </div>
                        {data2.Jee==="Yes" &&<input type="number" placeholder="JEE Main General Rank" className="page_details_TypeNumberInput" onChange={(e)=>setData2({...data2,JeeRank:e.target.value})}/>}
                    </div>
                </div>

{/* for High School */}
                <div className="page_details_Application">
                    <label className="page_details_Application_label">10th/High School:</label>
                    <div>
                        <div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,highBoard:e.target.value})}>
                                <option value="Board">Board</option>
                                <option value="CBSE">CBSE</option>
                                <option value="ICSE">ICSE</option>
                                <option value="UP">UP</option>
                                <option value="Other">Other</option>
                            </select>
                            {data2.highBoard==="Other" && <input type="text" placeholder="Board if Other" className="page_details_TypeNumberInput"/>}
                            <input type="month" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[0].passingYear=e.target.value}/>
                        </div>
                        <div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,highGrade:e.target.value})}>
                                <option >Grade(yes/no)</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {(data2.highGrade==="Yes")? <div>
                                <input type="number" placeholder="Obtained CGPA" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[0].obtainedMarks=e.target.value}/>
                                <input type="number" placeholder="Maximum CGPA"  className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[0].TotalMarks=e.target.value}/>
                            </div>:<div>
                                <input type="number" placeholder="Obtained Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[0].obtainedMarks=e.target.value}/> 
                                <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[0].TotalMarks=e.target.value}/> 
                            </div> }
                        </div>
                    </div>
                </div>

{/* for Intermediate */}
                <div className="page_details_Application">
                    <label className="page_details_Application_label">12th/ Intermediate:</label>
                    <div>
                        <div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,intermediateBoard:e.target.value})}>
                                <option value="Board">Board</option>
                                <option value="CBSE">CBSE</option>
                                <option value="ICSE">ICSE</option>
                                <option value="UP">UP</option>
                                <option value="Other">Other</option>
                            </select>
                            {data2.intermediateBoard==="Other"&& <input type="text" placeholder="Board if Other" className="page_details_TypeNumberInput"/>}
                            <input type="month" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[1].passingYear=e.target.value}/>
                        </div>
                        <div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,intermediateGrade:e.target.value})}>
                                <option>Grade(yes/no)</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {(data2.intermediateGrade==="Yes")? <div>
                                <input type="number" placeholder="Obtained CGPA" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[1].obtainedMarks=e.target.value}/>
                                <input type="number" placeholder="Maximum CGPA" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[1].TotalMarks=e.target.value}/>
                            </div>:<div>
                                <input type="number" placeholder="Obtained Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[1].obtainedMarks=e.target.value}/> 
                                <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[1].TotalMarks=e.target.value}/> 
                            </div> }
                        </div>
                    </div>
                </div>

{/* For Diploma */}                
                <div className="page_details_Application">
                    <label className="page_details_Application_label">Diploma : </label>
                    <div>
                        <div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,diplomaBoard:e.target.value})}>
                                <option value="Choose">Choose</option>
                                <option value="Passed">Passed</option>
                                <option value="Appeared">Appeared</option>
                                <option value="NotDone">Not Done</option>
                            </select>
                            {(data2.diplomaBoard!=="NotDone")&&<input type="text" placeholder="University/College" className="page_details_TypeNumberInput"/>}
                            {(data2.diplomaBoard!=="NotDone")&&<input type="month" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[2].passingYear=e.target.value}/>}
                        </div>
                        {(data2.diplomaBoard!=="NotDone")&&<div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,diplomaGrade:e.target.value})}>
                                <option>Grade(yes/no)</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {(data2.diplomaGrade==="Yes")?<div>
                                <input type="number" placeholder="Obtained CGPA" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[2].obtainedMarks=e.target.value}/>
                                <input type="number" placeholder="Maximum CGPA" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[2].TotalMarks=e.target.value}/>
                            </div>:<div>
                                <input type="number" placeholder="Obtained Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[2].obtainedMarks=e.target.value}/> 
                                <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[2].TotalMarks=e.target.value}/> 
                            </div> }
                        </div>}
                    </div>
                </div>

{/* For Graduation */}
                <div className="page_details_Application">
                    <label className="page_details_Application_label">Graduation : </label>
                    <div>
                        <div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,graduationBoard:e.target.value})}>
                                <option value="Choose">Choose</option>
                                <option value="Passed">Passed</option>
                                <option value="Appeared">Appeared</option>
                                <option value="NotDone">Not Done</option>
                            </select>
                            {(data2.graduationBoard!=="NotDone")&&<input type="text" placeholder="University/College" className="page_details_TypeNumberInput"/>}
                            {(data2.graduationBoard!=="NotDone")&&<input type="month" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[3].passingYear=e.target.value}/>}
                        </div>
                        {(data2.graduationBoard!=="NotDone")&&<div className="page_details_DivSelect result">
                            <select onClick={(e)=>setData2({...data2,graduationGrade:e.target.value})}>
                                <option>Grade(yes/no)</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {(data2.graduationGrade==="Yes")?<div>
                                <input type="number" placeholder="Obtained CGPA" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[3].obtainedMarks=e.target.value}/>
                                <input type="number" placeholder="Maximum CGPA" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[3].TotalMarks=e.target.value}/>
                            </div>:<div>
                                <input type="number" placeholder="Obtained Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[3].obtainedMarks=e.target.value}/> 
                                <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.marks[3].TotalMarks=e.target.value}/> 
                            </div> }
                        </div>}
                    </div>
                </div>

{/* For entering 12th marks */}
                <div className="page_details_Application">
                    <label className="page_details_Application_label">12th marks:</label>
                    <div className="page_details_12thMarks">
                        <div className="page_details_TypeNumber result">
                            <span className="radio_buttonSpan">Physics</span>
                            <input type="number" placeholder="Obtanied Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.intermediateMarks[0].obtaniedMarks=e.target.value}/>
                            <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.intermediateMarks[0].maximumMarks=e.target.value}/>
                        </div>
                        <div className="page_details_TypeNumber result">
                            <span className="radio_buttonSpan">Chemistry</span>
                            <input type="number" placeholder="Obtanied Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.intermediateMarks[1].obtaniedMarks=e.target.value}/>
                            <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.intermediateMarks[1].maximumMarks=e.target.value}/>
                        </div>
                        <div className="page_details_TypeNumber result">
                            <span className="radio_buttonSpan">Mathematics</span>
                            <input type="number" placeholder="Obtanied Marks" className="page_details_TypeNumberInput"onChange={(e)=>data2.intermediateMarks[2].obtaniedMarks=e.target.value}/>
                            <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput"onChange={(e)=>data2.intermediateMarks[2].maximumMarks=e.target.value}/>
                        </div>
                        <div className="page_details_TypeNumber result">
                            <span className="radio_buttonSpan">Biology</span>
                            <input type="number" placeholder="Obtanied Marks" className="page_details_TypeNumberInput"onChange={(e)=>data2.intermediateMarks[3].obtaniedMarks=e.target.value}/>
                            <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.intermediateMarks[3].maximumMarks=e.target.value}/>
                        </div>
                        <div className="page_details_TypeNumber result">
                            <span className="radio_buttonSpan">Computer</span>
                            <input type="number" placeholder="Obtanied Marks" className="page_details_TypeNumberInput"onChange={(e)=>data2.intermediateMarks[4].obtaniedMarks=e.target.value}/>
                            <input type="number" placeholder="Maximum Marks" className="page_details_TypeNumberInput" onChange={(e)=>data2.intermediateMarks[4].maximumMarks=e.target.value}/>
                        </div>
                    </div>    
                </div>

{/* For Declaration with tick */}                
                <div className="page_details_Application tick">
                    <input type="checkbox" />
                    <span>I hereby declare, that the information filled by me in registration form is true to the 
                        best of my knowledge and if any information is found incorrect then my registration is liable to be cancelled.</span>
                </div>

{/* For Buttons */}                     
                <Link to="/">
                <button className="button">Back</button>
                </Link>
                <button className="button submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Page2
