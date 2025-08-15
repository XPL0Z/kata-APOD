const image = document.getElementById('image');

const author = document.getElementById('name');

const image_text = document.getElementById('image_text');

const title = document.getElementById('title');

const date = document.getElementById('date');

const main_title = document.getElementById('main_title');

const urlParams = new URLSearchParams(window.location.search);

let params = urlParams.get("DATE");

const today_date = new Date();


async function selected_image() {
  if (!params){
    
    params =today_date.toISOString().split('T')[0];;
     
  }

  console.log("ICI")
  console.log(params)

  const reponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${params}`);
  
  const infos = await reponse.json();
  
  if (infos.copyright === undefined){
    console.log("any author")
  } else {
    author.textContent = "Author : " +   infos.copyright;
  }
  image.src = infos.hdurl;

  date.textContent = infos.date;
  
  title.textContent = infos.title;

  image_text.textContent = infos.explanation;

  main_title.textContent = "KATA-APOD " + infos.date;

  console.log(infos);
  console.log(urlParams.get("DATE")); 

}


const btn_previous = document.getElementById("previous");
btn_previous.onclick = function() {alert('Clicked!');};