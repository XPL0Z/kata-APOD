const image = document.getElementById('image');

const author = document.getElementById('name');

const image_text = document.getElementById('image_text');

const title = document.getElementById('title');

const date = document.getElementById('date');

const main_title = document.getElementById('main_title');

const urlParams = new URLSearchParams(window.location.search);

let params = urlParams.get("DATE");

const today_date = new Date();

const today_date_ISO = today_date.toISOString().split('T')[0];

const btn_previous = document.getElementById("previous");

async function selected_image() {
  if (!params){
    
    params = today_date_ISO;
     
  }  

  console.log("ICI")
  
  console.log(params)

  const reponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=bbckooccBbqkgef4WgsbRLwl43J0RpYTXFAbHRjS&date=${params}`);
  
  const infos = await reponse.json();
  
  if (infos.copyright === undefined){
    console.log("any author");
  } else {
    author.textContent = "Author : " +   infos.copyright;
  }
  image.src = infos.hdurl;

  date.textContent = infos.date;
  
  title.textContent = infos.title;
    if (infos.media_type === "video") {
    video.src = infos.url;
  }else{
    image.src = infos.hdurl;
  }
  image_text.textContent = infos.explanation;

  main_title.textContent = "KATA-APOD " + infos.date;

  console.log(infos);
  
  console.log(urlParams.get("DATE")); 

}


btn_previous.onclick = function() {

  
  if (!urlParams.get("DATE")){
    
    today_date.setDate(today_date.getDate() - 1);
    
    console.log(today_date.setDate(today_date.getDate() - 1));
    
    window.location.replace(`?DATE=${today_date.toISOString().split('T')[0]}`);

  }else {
    alert("test")
    //console.log(today_date.setDate(today_date.getDate() - 1));
    //console.log(today_date.setDate(today_date.getDate() - 1).toISOString().split('T')[0]);
    //console.log("ICI " + params.setDate(params.getDate()-1));
  
  }
  

};