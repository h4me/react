import React from 'react';
import ReactDOM from 'react-dom/client';
import "./LoginBox.css"



const LoginBox = () => {


   const BoxStyle = {
        color : "red",
        width: "500px",
        border : "5px solid black",
        justifycontent: "center"
    }

    return (
          <div id={"boxdiv"} >
          <div>
              <div className='prompt'>Login:</div>  
              <input type={"text"}/>
              <div className={"clear"}></div>
          <div/>
          <div>
              <div className='prompt'>Password:</div>
              <input type={"password"}/>
              <div className={"clear"}></div>
             
          </div>
          </div>
          </div>
     )
}


export default LoginBox