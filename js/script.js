let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
let listContainer = document.querySelector(".list-container");
let userIcon = document.querySelector(".user-icon");

let sideVideoList = document.querySelector(".rightSidebar");

// console.log(sideVideoList);

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
});

// -------To fill the video list using JS--------------- //
let i;
if (listContainer) {
  for (i = 1; i <= 12; i++) {
    let vidlist = document.createElement("div");
    vidlist.classList.add("video-list");
    vidlist.innerHTML = `<div class="vid-list">
  <a href="#">
    <img src="/img/thumbnail${i}.png" alt="" class="thumbnail1">
  </a>
  <div class="flex-div">
    <img src="/img/Jack1.png">
    <div class="vid-info">
      <a href="#">Top 10 beautiful places to visit in Nepal</a>
      <p>World Adventures</p>
      <p>1M views &bull; 2 days</p>
    </div>
  </div>
</div>`;
    listContainer.appendChild(vidlist);
  }
}

// -----SideBar On Small Screen-----//
userIcon.addEventListener("click", () => {
  const mediaQuery = window.matchMedia("(max-width: 900px)");
  if (mediaQuery.matches) {
    smallSidebar();
  }
  function smallSidebar() {
    sidebar.classList.toggle("right-sidebar");
  }
});

if (sideVideoList) {
  for (i = 1; i <= 12; i++) {
    let sideVideo = document.createElement("div");
    sideVideo.classList.add("side-video-list");
    sideVideo.innerHTML = `
  <a href="#" class="small-thumbnail">
    <img src="/img/thumbnail${i}.png" />
  </a>
  <div class="vid-info">
    <a href="#">Top 10 beautiful places to visit in Nepal</a>
    <p>World Adventures</p>
    <p>${i*4-2+10/2}k Views</p>
  </div>`;
    sideVideoList.appendChild(sideVideo);
  }
}
