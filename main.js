let container = document.querySelector(".videos_container");


// get video


function getVideo() {
  container.innerHTML = "";
  fetch("https://api-youtube-zou4.onrender.com/videos")
    .then((data) => data.json())
    .then((res) => {
      for (i = 0; i < res.length; i++) {
        container.innerHTML += `
      <div class="video">
          <div class="tumbnail">
              ${res[i].videoUrl}
            <div class="video-detalis">  
              <div class="creater-img">
                <img src="images/profile-pic.png" alt="" />
              </div>
              <div class="title">
                <a class="video-title" href="#"> ${res[i].titleVideo}</a>
                <a href="#" class="video-creater"> Islam </a>
                <span> 10M مشاهدة <span>قبل 51 دقيقة</span> </span>
              </div>
            </div>
          </div>
        </div>
      `;
      }
    });
}

// getVideo();

// menu

let burgermenu = document.querySelector(".material-icons");
let aside = document.querySelector("aside");
burgermenu.addEventListener("click", () => {
  aside.classList.toggle("open");
});

let api_key = "AIzaSyCfsUvaiqFBh0ZdfWAsG0ivT02VZjeZbv0";

function Search(q) {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${api_key}&type=video&regionCode=SA&q=${q}&maxResults=20`
  )
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = "";
      let item = data.items;
      for (i = 0; i < item.length; i++) {
        console.log(container);
        // item[i].id.videoId
        // item[i].snippet.title

        container.innerHTML += `
        <div class="video">
            <div class="tumbnail">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${item[i].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div class="video-detalis">  
                <div class="creater-img">
                  <img src="images/profile-pic.png" alt="" />
                </div>
                <div class="title">
                  <a class="video-title" href="#"> ${item[i].snippet.title}</a>
                  <a href="#" class="video-creater"> Islam </a>
                  <span> 10M مشاهدة <span>قبل 51 دقيقة</span> </span>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    })
    .catch(() => {
      alert("خلصت البحث")
    })

}
document.querySelector("#clicksearch").addEventListener("click", (e) => {
  e.preventDefault();
  let search = document.querySelector("#searchData")
  Search(search.value);
  searchPost(search.value);
});

function data() {
  const data = new Date;
  const Hours = data.getHours();
  const Minutes = data.getMinutes();
  const Day = ["اللأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  return `الساعة:${data.getHours()}:${data.getMinutes()} اليوم:${Day[data.getUTCDay()]}`;
}




// search post 
function searchPost(value) {
  fetch("https://api-youtube-zou4.onrender.com/SEARCH", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      q: value,
      data: data(),
    })
  })
    .then(res => console.log(res))
}


