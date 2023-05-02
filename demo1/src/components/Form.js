import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Alerts from './Alerts';


export default function Form(props) {

    const [text,setText] = useState(""); // this is the state and value of the state will ve store on "text" and to update "text" we have to use "setText" function.

    const [words,updateWord] = useState(0);
    const [arr,updateArr] = useState([]);
    
    
    
    const  upBtnClicked = ()=>{
        
        if( /[a-z]/.test(text))
            updateMsg("Successfuly Converted to Upper-Case", true);
        else
            updateMsg("Nothing to convert to Upper-Case!!", false);
        
        
        setText(text.toUpperCase());

        
    
        /*const textBox = document.getElementById("textBox");
        let textValue = textBox.value;
        console.log(textValue);
        setText(textValue.toUpperCase());*/
        
        
    }

    
    const [msg,setMsg] = useState(" ");
    const [outColor, setOutColor] = useState("white");
    const [inColor, setInColor] = useState("white");
    
    function updateMsg(givenMsg,flag){

        
        setMsg(givenMsg);
        
        if(flag === true)
        {


            setOutColor("rgba(97, 238, 62, 0.384)");
            setInColor("rgb(14, 104, 14)");
    
        }
        else{

            
            setOutColor("rgba(238, 83, 62, 0.384)");
            setInColor("rgb(85, 12, 12)");
        }
        const alertBox = document.getElementById("alert-box");
        console.log(alertBox);
        alertBox.style.top = '10%';
        alertBox.style.zIndex = 2;

        setTimeout(() => {
            
            alertBox.style.zIndex = '-1';
            
        alertBox.style.top = '0';
          }, "2000");
    }

    function onChange(event)
    {
        
        setText(event.target.value);
        let textVal = document.getElementById("textBox");

        
        if(textVal.value === '')
        {
            updateWord(0);
           
        }
            
        else
            updateWord(textVal.value.split(" ").length);

        
        
        
    }


    function getEmail()
    {
        const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        const wordArr = text.split(" ");
        
        const mailArr = [];
        wordArr.forEach(element => {
            if(element.match(mail))
            {
                mailArr.push(element+" ");

                
            }
        });

        console.log(mailArr);
        updateArr(mailArr);

        if(mailArr.length > 0)
            updateMsg("Successfuly extracted the Emails", true);
        else
            updateMsg("No Emails Found!!", false);
    }



  return (
    <div>
        <Alerts msg = {msg} outColor = {outColor} inColor = {inColor}/>
        <div className="container my-5" >

            <h2>{props.formHeading}</h2>

            <div className="mb-3">
            <label htmlFor="textBox" className="form-label">{props.textLabel}</label>
            <textarea className="form-control fs-3"  placeholder = "Write you text!! " value= {text} onChange={onChange} id="textBox" rows="10" cols="5"></textarea>
            </div>

            <button type="button" className="btn btn-primary btn-lg" id="up-btn" onClick={upBtnClicked}>To Uppercase</button>
            
            <button type="button" className="btn btn-primary btn-lg mx-4" id="E-btn" onClick={getEmail}>Get Emails</button>
        </div>

        <div className="container my-5">
            <h2>Word count</h2>
            <p>{words} words are present. </p>

            <h2>
                Email List:
            </h2>
            <p>{arr}</p>
        </div>
    </div>
        
  )
}


Form.protoType = {
    formHeading: PropTypes.string,
    textLabel: PropTypes.string
}

Form.defaultProps = {

    formHeading: "form-heading",
    textLabel: "text-label"

}
