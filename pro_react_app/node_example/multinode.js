import fetch from "node-fetch";
import { pid } from 'node:process';
// import worker from 'worker_threads';
import {
    Worker, isMainThread, parentPort, workerData, MessageChannel
  } from 'worker_threads';


//import  MessageChannel from 'node:worker_threads';
import { json } from "express";

 const { port1, port2 } = new MessageChannel();
// port1.on('message', (message) => console.log('received', message));
// port2.postMessage({ foo: 'bar' });


   
  if(isMainThread) {

     const w = new Worker('./work.js',  { workerData : 'ss'} )

     w.on('message', (msg) => {

           console.log("Message from child " +  JSON.stringify(msg) )
     }); 

     w.on('exit', (msg) => {
          console.log("Worker thread exit ")
     });

     w.postMessage('lalalala'); //  send message to child    

     console.log('Print root :) tid=', w.threadId, " pid=", pid , " PID=", process.pid)
   
    } else {
      
      console.log('Print child :) pid=', pid)

  }



