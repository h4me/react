import fetch from "node-fetch";
//const sleep = require('sleep')
import sleep from 'sleep'
import readline from 'readline'
//const readline = require('readline');
import EventEmitter from 'events'
//const EventEmitter = require('events');
const sig = new EventEmitter();
//const fetch = require('node-fetch');
//import fetch from 'node-fetch';
import express from 'express'
//const express = require('express')

const GLOG = {
   counter : 0,
   req : 0
}


function tick() {
  //  return Math.floor(Date.now() / 1000)  // sec
   return Math.floor(Date.now())
}

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
     const start = tick()
     console.log('Login from request')
     const stop = tick()
     GLOG.counter++;
     GLOG.req = stop - start
     console.log('Tick' , GLOG.req)
     res.json(GLOG)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



sig.on('message', (msg)=> { 
     console.log('Message from EventEmitter ', msg)
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    console.log("#");
    if(line === "send") {
   // fetch('http://localhost:8080/login').then((rsp) => { return rsp.text()  }).then( (msg) => {console.log("Rcv :" , msg) } )
   
   fetch('http://localhost:8080/login').then((rsp) => { console.log('Got RESPONSE'); return rsp.text()  }).then( (msg) => {
    
      console.log("Rcv :" , msg)
      const obj = JSON.parse(msg)
      console.log("RcvCounter :" , obj.counter)
      
     
   })
   
   
  // sig.emit('message', line)
}
});

rl.once('close', () => {
     // end of input
});


















//  async function asyncProcessing (ms) {  
//   await new Promise((resolve, reject) => {  
                                            
//                          let count = ms  
//                          let n = 0; 
//                        //   while ( i < count ) {        i++;      } 
//                           for(i=0;i<ms;i++)
//                           {
//                             console.log("task=",ms,"  ",i);
//                             let k = i;
//                             while ( n < count ) { n++; k = k*5; }
//                             n=0; 
//                         //    setTimeout(resolve, 100, 'foo')
//                          //   sleep.sleep(1);
//                           }

//                           resolve(ms)

                           


//        // setTimeout(resolve,ms); 
        
//     })

//   console.log(`waited: ${ms}ms`)

//   return ms
// }



// async function awaitAll () {  
//   const timeouts = [10, 6000, 200, 775, 125, 990]
//   const promises = timeouts.map(timeout => asyncProcessing(timeout))

//   const result = await Promise.all(promises)

//   return result
// }

// awaitAll()



// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise3, promise2, promise1]).then((values) => {
//   console.log(values);
// });

// const promiseA = new Promise((resolve, reject) => {
//   const count = 100000000; 
//                   let n = 0; 
//                    //   while ( i < count ) {        i++;      } 
//                       for(i=0;i<4;i++)
//                       {
//                         console.log("task1 sa1",i);
//                         let k = i;
//                         while ( n < count ) { n++; k = k*5; }
//                         n=0; 
//                         setTimeout(resolve, 100, 'foo')
//                      //   sleep.sleep(1);
//                       }
//                       resolve('A')
// });
// console.log("================ SECOND============");
// const promiseB = new Promise((resolve, reject) => {
//   const count = 100000000; 
//                   let n = 0; 
//                    //   while ( i < count ) {        i++;      } 
//                       for(i=0;i<4;i++)
//                       {
//                        console.log("task2 sa1",i);
//                       //  while ( n < count ) { n++; }
//                         n=0; 
//                      //   sleep.sleep(1);
//                       }
//                       resolve('B')
// });


// console.log('End')

// // At this point, "promiseA" is already settled.
// //promiseB.then((val) => console.log("asynchronous logging has val:", val));
// //promiseA.then((val) => console.log("asynchronous logging has val:", val));
// Promise.all([promiseA,promiseB]).then((values) => {
//   console.log(values);
// });

// console.log("immediate logging");

// function task1() { 
//      return new Promise((resolve, reject) => { 
//             const count = 100000000; 
//                 let n = 0; 
//                  //   while ( i < count ) {        i++;      } 
//                     for(i=0;i<4;i++)
//                     {
//                       console.log("task1 sa1",i);
//                       while ( n < count ) { n++; }
//                       n=0; 
//                    //   sleep.sleep(1);
//                     }
  
//                   //  sleep.sleep(1)
//       resolve("task1 is done");  });}
//   function task2() {
//           return new Promise((resolve, reject) => {
                
//                   for(i=0;i<5;i++)
//                   {
//                     console.log("task2 say",i);
//                    // sleep.sleep(1);
//                   }

//                 resolve("task2 is done");  });}
//  function task3() { 
//                   return new Promise((resolve, reject) => { 
//                          const count = 100000000; 
//                              let n = 0; 
//                               //   while ( i < count ) {        i++;      } 
//                                  for(i=0;i<6;i++)
//                                  {
//                                    console.log("task3 sa1",i);
//                                    while ( n < count ) { n++; }
//                                    n=0; 
//                                 //   sleep.sleep(1);
//                                  }
               
//                                //  sleep.sleep(1)
//   resolve("task3 is done");  });}


//                // const tasks = [ task1(),  task2(), task3() ];

//                task1();
//                task2();
//                task3();
               

                //  task1().then(()=>{}).catch(()=>{})
                //  console.log('====== 1 ===')

                //  task2().then(()=>{}).catch(()=>{})
                //  console.log('====== 2 ===')

                //  task3().then(()=>{}).catch(()=>{})
                //  console.log('====== 3 ===')

// //add tasks here
// Promise.all(tasks).then((result) => {
//      console.log(result);}).catch((error) => {
//         console.error(error);}
//   );







// const sleep = require('sleep')

// async function smsNotify(mobileNumber, msg){
//     // send sms
//   //  sleep.sleep(3)
//     console.log('Sms done')
    
// }

// async function emailNotify(emailId, msg){
//     // send email
//     //sleep.sleep(2)
//     console.log('email done')
// }

// async function pushNotify(fcmId, msg){
//     // push notifications
//    // sleep.sleep(1)
//     console.log('Notify done')
// }


// function userDetails() {
     
//      return ['dupa','3','4','2']
// }

// /**
// * Notify User by sms , email , push notification
// */

// async function notify(userDetails){
//     //const [mobileNumber, emailId, fcmId, msg] = userDetails()

//     // prepare async calls
//     const asyncCalls = [];

//     asyncCalls.push(smsNotify(1, 2));
//     asyncCalls.push(emailNotify(3, 4));
//     asyncCalls.push(pushNotify(5, 6));

//     try{
//         const result = await Promise.all(asyncCalls);
//     }catch(err){
//         console.error("Error Occur: ", err.message);
//     }
// }


//  notify()