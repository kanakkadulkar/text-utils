//import React, { useState } from 'react'



export default function About(props) {

  // const[myStyle,setMystyle]= useState({
  //   color:'white',
  //   backgroundColor:'black',
    
  // })
  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#13466e':'white',
   
    borderColor:props.mode ==='dark'?'white':'#13466e'
  }



 
     
  
  return (
    <div className='container' style={myStyle}>
      <h1>
        About us
      </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={myStyle}>
        <strong>Welcome to Text Utils, your versatile and user-friendly tool for all your text manipulation needs</strong>  Whether you're a writer, developer, student, or just someone looking to streamline your workflow, Text Utils offers a suite of features designed to enhance your productivity and make text editing a breeze.

Our Features
Uppercase Conversion: Easily convert any text to uppercase, perfect for creating headings, emphasizing important information, or simply making your content stand out.
Lowercase Conversion: Standardize your text by converting it all to lowercase, ideal for a clean and uniform look in your documents and presentations.
Title Case Conversion: Automatically capitalize the first letter of each major word in your text, making it suitable for titles, headlines, and other formal uses.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Why Choose Text Utils?</strong> 
        Text Utils is designed with simplicity and efficiency in mind. Our intuitive interface allows you to make quick changes to your text without the hassle of complex tools. Whether you're preparing a report, editing an article, or formatting a presentation, Text Utils helps you get the job done faster and with ease.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Our Mission</strong>
Our mission is to provide a reliable, easy-to-use text utility that caters to a wide range of users. We believe in the power of simplicity and aim to offer a tool that is accessible to everyone, regardless of their technical expertise. We're constantly improving and expanding our features based on user feedback, ensuring that Text Utils remains your go-to app for all things text-related.

Thank you for choosing Text Utils. We hope our app becomes an invaluable part of your digital toolkit!
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
