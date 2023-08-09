let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
let listContainer = document.querySelector(".list-container");
let userIcon = document.querySelector(".user-icon");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
});

// -------To fill the video list using JS--------------- //

for (let i = 1; i <= 12; i++) {
  let vidlist = document.createElement("div");
  vidlist.classList.add("video-list");
  if (i == 1) {
    vidlist.innerHTML = `<div class="vid-list">
  <a href="playvideo.html">
    <img src="/img/thumbnail${i}.png" alt="" class="thumbnail1">
  </a>
  <div class="flex-div">
    <img src="/img/Jack1.png">
    <div class="vid-info">
      <a href="playvideo.html">Top 10 beautiful places to visit in Nepal</a>
      <p>World Adventures</p>
      <p>1M views &bull; 2 days</p>
    </div>
  </div>
</div>`;
  }
  else{
    vidlist.innerHTML = `<div class="vid-list">
  <a href="playvideo.html">
    <img src="/img/thumbnail${i}.png" alt="" class="thumbnail1">
  </a>
  <div class="flex-div">
    <img src="/img/Jack1.png">
    <div class="vid-info">
      <a href="playvideo.html">Top 10 beautiful places to visit in Nepal</a>
      <p>World Adventures</p>
      <p>1M views &bull; 2 days</p>
    </div>
  </div>
</div>`;
  }
  listContainer.appendChild(vidlist);
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
