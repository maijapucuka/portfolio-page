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

// document.addEventListener('click', function(e){
    
//   //Get the dataset attribute from the product that user clicked the add button for and create new item for this product
//   if (e.target.dataset.open) {
//       createNewItem(e.target.dataset.btn)
      
//   //Delete the product property from the food item object if user clicks its remove btn
//   } else if (e.target.dataset.remove) {
//       const test = e.target.dataset.remove
//       delete foodItemArr[test]
      
//       //Render user menu
//       renderUserMenu()
//   }
// })

document.addEventListener('click', function(e){
    
  //Get the dataset attribute from the product that user clicked the add button for and create new item for this product
  if (e.target.dataset.open) {
    console.log(e.target.dataset.open)
    document.getElementById(e.target.dataset.open).classList.remove("display__none")
    document.getElementById(e.target.dataset.open).classList.add("work__test")
    document.getElementById("relative").classList.remove("display__none")
    document.getElementById("portfolio").style.display = "none";
      
  //Delete the product property from the food item object if user clicks its remove btn
  } else if (e.target.dataset.close) {
    document.getElementById(e.target.dataset.close).classList.remove("work__test")
    document.getElementById(e.target.dataset.close).classList.add("display__none")
    document.getElementById("portfolio").style.display = "grid";
  }

  // window.addEventListener('resize', function() {
  //   if (window.innerWidth < 900) {
  //     console.log("I'm wide!!!")
  //     document.getElementById("portfolio").style.display = "none";
  //   }

  //   if (window.innerWidth >= 900) {
  //     console.log("I'm wide!!!")
  //     document.getElementById("portfolio").style.display = "grid";
  // }
  // });

})

const resumeDownloadBtn = document.getElementById("download-resume");

resumeDownloadBtn.addEventListener('click', () => {
  
  const resumeDownloadLink = document.createElement('a');
  resumeDownloadLink.setAttribute('href', './Maija_Pucuka_CV_EN.pdf');
  resumeDownloadLink.setAttribute('download', 'Maija_Pucuka_CV_EN.pdf');

  resumeDownloadLink.click();
});
 

// window.addEventListener('resize', function() {
//   if (window.innerWidth < 900) {
//     console.log("I'm wide!!!")
//     document.getElementById("portfolio").style.display = "none";
//   }
//   if (window.innerWidth >= 900) {
//     console.log("I'm wide!!!")
//     document.getElementById("portfolio").style.display = "grid";
// }
// });

// document.getElementById("test").addEventListener("click", () => {
//   document.getElementById("test1").classList.remove("display__none")
//   document.getElementById("test1").classList.add("work__test")
//   document.getElementById("relative").classList.remove("display__none")
// })

// document.getElementById("close__btn").addEventListener("click", () => {
//   document.getElementById("test1").classList.remove("work__test")
//   document.getElementById("test1").classList.add("display__none")
// })
