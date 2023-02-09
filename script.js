const submit = document.getElementById("Submit");
const htag = document.getElementById("indiv");
let canvas=document.querySelector("#canvas");
let context=canvas.getContext("2d")


submit.addEventListener('click', () =>{
  //send input fields data to backend here
 htag.innerText="Kindly proceed with the test";
 submit.disabled=true;
 const hideIt= document.getElementsByClassName('labels');
 for(const hd of hideIt){
   hd.style.display='none';
 }
});

window.onload=function proctor() {
 var constraints = { audio: true, video: true };
 navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
   var video = document.querySelector('video');
   video.srcObject = mediaStream;
   video.play();

   setInterval(function () {
    //share following to backend here 
     context.drawImage(video,0,0,150,75);
     const d = new Date(); 
     const m=d.getMinutes(); 
     const s=d.getSeconds();
   }, 180000); //capturing video every 3 minutes


 }).catch(function(err) {
   console.log("An error occured " + err.message);
   htag.innerText="An error occured, please refresh the page.";
 })
}
