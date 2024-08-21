/*-----------style switch toggle-----------*/
/*const styleSwitchToggle = document.querySelector(".style-switch-toggle");
styleSwitchToggle.addEventListener("click", () =>{
    document.querySelector(".style-switch").classList.toggle("open");

})*/
const styleDaynight = document.querySelector(".day-night");
styleDaynight.addEventListener("click", () =>{
    document.querySelector(".day-night").classList.toggle("click");
})
/* hide style switch on scrol */
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switch").classList.contains("open"))
    {
        document.querySelector(".style-switch").classList.remove("open");
    }
})
/*theme color */
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyle.forEach((style) =>{
        if (color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })    
}

/*light and dark mode*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector('i').classList.toggle("fa-sun");
    dayNight.querySelector('i').classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
   if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector('i').classList.add("fa-sun");
    }
    else{
        dayNight.querySelector('i').classList.add("fa-moon")
    } 
})
