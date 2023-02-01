import { workerData, parentPort } from 'worker_threads'
import { pid } from 'node:process';
import  os  from 'os';

import tls  from 'node:tls';

import net from 'node:net';

import  fs from 'node:fs';
 process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

console.log('Child  node::preocess::pid=', pid,  " os.pid=", process.pid, " gotData " );


// send message to parent 

parentPort.postMessage({ fileName: 'ss', status: 'Done' })
// parentPort.postMessage('Got it')

// RCV message from parent 
parentPort.on('message', (v) => {


    //   const client = net.createConnection({ port: 7777 }, () => {
    //     // 'connect' listener.
    //     console.log('connected to server!');
    //     client.write('world!\r\n');
    //   });
    //   client.on('data', (data) => {
    //     console.log(data.toString());
    //     client.end();
    //   });

 const options = {

  //  key: fs.readFileSync('/home/react/tests/key.pem'),
  //  cert: fs.readFileSync('/home/react/tests/cert.pem'),
  //  checkServerIdentity: () => { return null; },
 }

    const l = 
        {
            "command": "login",
            "arguments": {
                "userId": "1000",
                "password": "PASSWORD",
                "appId": "test",
                "appName": "test"
            }
        }
       

    let socket = undefined


    function sendDebug(obj) {

        let myobj = JSON.stringify(obj)
       // myobj+="\r\n"
        console.log('Sending: ' + myobj)
        socket.write(myobj)

    }


     const c = { host : "xapi.xtb.com" , port :"5124" }
     // const c = { host : "localhost" , port :"5125" }

      socket = tls.connect(c, options, () => {
        console.log('client connected',
                    socket.authorized ? 'authorized' : 'unauthorized');
      //  process.stdin.pipe(socket);
       // process.stdin.resume();
      });
      socket.setEncoding('utf8');
      socket.on('data', (data) => {
        console.log('Got message from Server:' + data);
      });

      socket.on('connect', () => {
        console.log('Connection TLS Success !!!!' + socket.getSession());
       // socket.write(JSON.stringify(l))
       sendDebug(l)
      });


      socket.on('end', () => {
        console.log('server ends connection');
      });

      socket.on('error', (e) => {
        console.log('error connection' + e);
      });



 //   setInterval(()=>{ socket.write(JSON.stringify(l) + "\n"); console.log('Writen ', JSON.stringify(l))}, 1000);   
   // setTimeout(()=>{ console.log('Timer 1 sek')}, 1000);
    console.log('Child got message from parent :)' + v)

});

// const fromParent = parentPort.workerData

// fromParent.on('message', (message) => console.log('Got message from parent port ' + message));
