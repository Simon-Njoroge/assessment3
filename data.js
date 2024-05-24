
const dark =document.querySelector(".onoff")
const background=document.querySelector("body")
dark.addEventListener('click',turnon);
function turnon(){
      if(dark.src.includes("download.png")){
            dark.src="./images/sunicon.png";
            background.classList.toggle("white")
           }
           else{
            dark.src="./images/download.png";
           
           }
}
const image1= document.getElementsByClassName("image1");
const county =document.getElementById("country")
const pop1=document.getElementById("population1")
const region1=document.getElementById("region1")
const capital1=document.getElementById("capital1")
 async function fetchdata(){
    await fetch("http://localhost:3000/1")
    .then( (response) => response.json())
    .then(data => {
          image1.textContent=data.flags.png;
          county.textContent=data.name;
          pop1.textContent=data.population;
          region1.textContent=data.region
          capital1.textContent=data.capital
          console.log(data);
    })
    .catch(error=>console.log(error))
}
fetchdata();
const county2= document.getElementById("country1")
const pop=document.getElementById("population")
const region =document.getElementById("region")
const capital=document.getElementById("capital")

async function fetchdata2(){
      await fetch("http://localhost:3000/0")
      .then( (response) => response.json())
      .then(data => {
            image1.textContent=data.flags;
            county2.textContent=data.name;
            pop.textContent=data.population;
            region.textContent=data.region;
            capital.textContent=data.capital
            console.log(data);
      })
      .catch(error=>console.log(error))
  }
  fetchdata2();
  const county3= document.getElementById("country2")
const pop2=document.getElementById("population2")
const region2=document.getElementById("region2")
const capital2=document.getElementById("capital2")

async function fetchdata3(){
      await fetch("http://localhost:3000/3")
      .then( (response) => response.json())
      .then(data => {
            image1.textContent=data.flags;
            county3.textContent=data.name;
            pop2.textContent=data.population;
            region2.textContent=data.region;
            capital2.textContent=data.capital
            console.log(data);
      })
      .catch(error=>console.log(error))
  }
  fetchdata3();
