import React, { useState } from 'react';
import './Loanform.css';
import Madal from './Madal';
export default function Loneform() {

  const [ErrorMasage, setErrorMasage] = useState(null)
  const [modal, setmodal] = useState(false)
  const [forminput, setforminput] = useState({
    FullName: '',
    Email: '',
    Age: '',
    Employed: false,
    LoanType: '',
  });
  
  console.log(forminput)

    const btnDisbled = 
    forminput.FullName === '' ||
    forminput.Email === '' ||
    forminput.Age === '';

    let btnclassname = ""
    if (btnDisbled) {
      btnclassname = "btn-disabled"
    } else {    
      btnclassname = "btn"
    }   
    
    function handalclackbutton(event){
        event.preventDefault();
        setErrorMasage(null);
        const {Age, Email} = forminput;

        if(Age < 16 || Age > 100){
            console.log("afff")
            setErrorMasage("The Age is not allowed" )
        }
        else if(Email.length < 10 || Email.length > 12 ){
            setErrorMasage("Phone number format is Incorrect")
        }


      setmodal(true)
    }
    function handalClickform(){
        if(modal){
            setmodal(false)
        }
    }
  return (
    <div className='Loan-container' onClick={handalClickform}>
      <form className='Loan-form'>
        <h2 className='titel'>Requesting a Loan</h2>
        <hr />

        <label> FullName</label>
        <input
          style={{textAlign: "center"}}
          onChange={(event) => {
            setforminput({ ...forminput, FullName: event.target.value });
          }}
          value={forminput.FullName}
          type='text'
        />

        <label> PhoneMobael</label>
        <input
        style={{textAlign: "center"}}
          onChange={(event) => {
            setforminput({ ...forminput, Email: event.target.value });
          }}
          value={forminput.Email}
          type="number"
        />

        <label> Age</label>
        <input
        style={{textAlign: "center"}}
          onChange={(event) => {
            setforminput({ ...forminput, Age: event.target.value });
          }}
          value={forminput.Age}
          type='number'
        />

        <label> Are you an employee? </label>
        <input
          onChange={(event) => {
            setforminput({ ...forminput, Employed: event.target.checked });
          }}
          checked={forminput.Employed}
          type='checkbox'
        />

        <select
          onChange={(event) => {
            setforminput({ ...forminput, LoanType: event.target.value });
          }}
          value={forminput.LoanType}
          className='select'
        >
          <option >Select Loan Type</option>
          <option >Loan Type 500$</option>
          <option >Home Loan 1000$</option>
          <option >Personal Loan 2000$</option>
        </select>

        <button
          id='btnid'
          className={btnclassname}
          disabled={btnDisbled}
          onClick={handalclackbutton}
        >
          Submit
        </button>
      </form>
      
      <Madal errorMasage={ErrorMasage} isVisidle={modal}/>
    </div>
  );
}
