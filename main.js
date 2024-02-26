// fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUNRRo2ZMzjSoKE6BMDE45DA&key=AIzaSyAHSx3r3LJF7ywz3RflRStmcXUd7IVLgCY")
// .then(res=>res.json())
// .then(data=>{console.log(data);})

// menu

let burgermenu = document.querySelector(".material-icons")
let aside = document.querySelector("aside")
burgermenu.addEventListener("click", ()=>{
  aside.classList.toggle("open");
})


