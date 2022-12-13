let menuIcon = document.querySelector(".menu-icon")
let sideBar = document.querySelector(".side-bar")
let mainContent = document.querySelector(".main-content")

menuIcon.addEventListener("click",function() {
	sideBar.classList.toggle("smallSideBar")
	mainContent.classList.toggle("largeContent")
})


let menuCn = document.querySelector(".menu-cn")
let innerCmt = document.querySelector(".inner-cmt")

menuCn.addEventListener("click",function() {
	innerCmt.classList.toggle("hideContent")
})

