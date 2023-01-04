let apikey="AIzaSyCRYtkoSEYKrFZOOVQ_P4Eis03z6T9S7b8";
let videoApi="https://www.googleapis.com/youtube/v3/videos?";
let url="https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCRYtkoSEYKrFZOOVQ_P4Eis03z6T9S7b8"

fetch(url)
.then(response=>response.json())
.then(maindata=>{
let data= maindata.items;
let cardData= document.querySelector(".video-container");
    
data.map((element)=>{
let videoCard = document.createElement("a");
videoCard.setAttribute("href",`https://www.youtube.com/watch?v=${element.id}`);
videoCard.setAttribute("class","card");
cardData.append(videoCard);

let thumbnail = document.createElement("img");
thumbnail.setAttribute("src",`${element.snippet.thumbnails.high.url}`);
thumbnail.setAttribute("class","card-img-top");
videoCard.append(thumbnail);

let videoInfo = document.createElement("div");
videoInfo.setAttribute("class","card-body");
videoCard.append(videoInfo);

let icon = document.createElement("img");
icon.setAttribute("src",`${element.snippet.thumbnails.high.url}`);
icon.setAttribute("class","channelIcon");
videoInfo.append(icon);
 
let info = document.createElement("div");
info.setAttribute("class","channelInfo");
videoInfo.append(info);

let content = document.createElement("h6");
content.setAttribute("class","card-text");
content.innerHTML=`${element.snippet.title}`;
info.append(content);

let channelTitle = document.createElement("span");
channelTitle.innerHTML=`${element.snippet.channelTitle}`
info.append(channelTitle);

    })
});
let input=document.querySelector(".form-control.me-2 ")
let search= document.querySelector(".btn.btn-outline-dark ")
let searchLink="https://www.youtube.com/results?search_query=";

search.addEventListener("click",()=>{
    if(input.value.length){
        location.href=searchLink+input.value;
    }
});
