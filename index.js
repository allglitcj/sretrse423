import express from 'express';
import  fetch  from 'node-fetch';
const app = express();
app.get("/", (req, res) => {
  res.send('H E C K Y E A H <br>')
});

// listen for requests | Don't change this!
const listener = app.listen(process.env.PORT, () => {
  console.log("Listening on PORT " + listener.address().port);
});

async function pong() { 
// Btns and Subm
await fetch('https://sequoia-azure-paneer.glitch.me'); 
  console.log('DONE 1');
} 
async function pong2(){
  // btns
await fetch('https://fanatical-chiseled-jodhpur.glitch.me');
  console.log('DONE 2');
}
async function pong3(){
await fetch('https://intermediate-leaf-gazelle.glitch.me');
  console.log('DONE 3');
}
async function pong4(){
  //cmds
await fetch('https://chemical-fourth-break.glitch.me');
  console.log('DONE 4');
}
async function pong5(){  
  // cos
await fetch('https://relic-lucky-gum.glitch.me');
  console.log('DONE 5');
}

/*async function pongMain(){
  await fetch('https://glitch259.vvliwnw.repl.co');
  console.log('Loaded The Pj Success !')
}*/

setInterval(pong, 40000);
setInterval(pong2, 40000);
setInterval(pong3, 40000);
setInterval(pong4, 40000);
setInterval(pong5, 40000);
//setInterval(pongMain, 30000);