const dark = document.querySelector(".onoff img");
dark.addEventListener("click", darklight);
function darklight(){
    if(dark.src.includes("download.png")){
        dark.src = "./images/sunicon.png";
        document.body.classList.toggle("light");
    }
    else{
        dark.src="./images/download.png";
    }
}
const county = document.querySelector(".countries");
function fetchdata(){
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
          const div = document.createElement('div');
          div.classList.add('county')

          const img = document.createElement("div")
          img.classList.add("image");
          img.innerHTML = `<img src="${country.flags.png}" alt="">`
         
          const cdata = document.createElement("div")
          cdata.classList.add("county");

          cdata.innerHTML =`
          <h3>${country.name.common}</h3>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Capital: ${country.capital}</p>
          `
          div.append(img);
          div.append(cdata);
          county.append(div);
        })
    })
}

fetchdata();
// const county = document.querySelector(".countries");
// function fetchdata(){
//     fetch('data.json')
//     .then(res => res.json())
//     .then( data => {
//      data.forEach(value => {
//         const div = document.createElement("div")
//         div.classList.add('county')
//         const img =document.createElement('div')
//         div.classList.add('img')
//         img.innerHTML=`<img src="${value.flags.png}" alt="" >`
//         const userdata = document.createElement('div')
//         userdata.classList.add('county');
//         userdata.innerHTML=`
//         <h3>${value.name}</h3>
//         <p> population ${value.population}</p>
//         <p> region ${value.region}</p>
//          <p> capital ${value.capital}</p>
//         `
//         div.append(img)
//         div.append(userdata)
//         county.append(div)
//      })
//      .catch(error => console.error(error))
//     })

// }
// fetchdata();
