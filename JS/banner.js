"use strict";

// 상단 배너
const topBanner = document.querySelector(".top_element");
const topBannerItem = document.querySelectorAll(".top_slide");

// 하단 배너                                      ul들
const bannerBox = document.querySelector("#BannerBox > ul");
//                                                li들
const bannerItem = document.querySelectorAll(".Banner_Num");

// 버튼
const prevBtn = document.getElementById("PrevBtn");
const nextBtn = document.getElementById("NextBtn");

//패딩을 포함한 넓이를 가지고 오는 기능
//해당 요소의 길이를 가지고 온다
//querySelectorAll이 배열을 반환하기 때문에 0번째(첫번째 방)라고 적었다.

//clientWidth
//실제로 보여지고 있는 컨텐츠가 얼마만큼의 공간을 차지하고 있는지 확인하고 싶다면 사용하는 것이 좋디
//border와 스크롤바의 크기를 제외한 실제 컨텐츠의 크기를 리턴한다
//padding 포함한 px단위의 요소 가시너비 반환.(※ border, scrollbar, margin 제외)

const size = bannerItem[0].clientWidth;
const size2 = topBannerItem[0].clientWidth;

let counter = 0;

//addEventListener
//이벤트를 동작시킨다.
//이벤트 = click, wheel, mousrover, mouseleave, mousrclick, keypress... 등등
nextBtn.addEventListener("click", () => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

//setInterval = 반복
setInterval(() => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);

// TOP배너
setInterval(() => {
  if (counter < topBannerItem.length - 1) {
    counter++;
    topBanner.style.transform = "translateX(" + -size2 * counter + "px)";
  } else if (counter === topBannerItem.length - 1) {
    counter = 0;
    topBanner.style.transform = "translateX(" + -size2 * counter + "px)";
  }
}, 4000);