/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener('click', function(e){
    
  if (e.target.dataset.open) {
    console.log(e.target.dataset.open)
    document.getElementById(e.target.dataset.open).classList.remove("display__none")
    document.getElementById(e.target.dataset.open).classList.add("work__test")
    document.getElementById("relative").classList.remove("display__none")
    document.getElementById("portfolio").style.display = "none";
      
  } else if (e.target.dataset.close) {
    document.getElementById(e.target.dataset.close).classList.remove("work__test")
    document.getElementById(e.target.dataset.close).classList.add("display__none")
    document.getElementById("portfolio").style.display = "grid";
  }
})

//Change navigation container color when page is scrolled
const navbar = document.getElementById('nav');

window.onscroll = () => {
  if (window.scrollY > 350) {
      navbar.classList.add("nav-scroll");
      navbar.classList.remove("nav-top");
  } else {
    navbar.classList.add("nav-top");
    navbar.classList.remove("nav-scroll");
  }
};

//CV download
const resumeDownloadBtn = document.getElementById("download-resume");

resumeDownloadBtn.addEventListener('click', () => {
  
  const resumeDownloadLink = document.createElement('a');
  resumeDownloadLink.setAttribute('href', './Maija_Pucuka_CV_EN.pdf');
  resumeDownloadLink.setAttribute('download', 'Maija_Pucuka_CV_EN.pdf');

  resumeDownloadLink.click();
});
 
