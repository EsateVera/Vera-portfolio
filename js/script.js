/* typing animation*/
var typed = new Typed (".typing",{
    strings:["","Graphic Designer", "Digital Marketer","Web Developer"],
    typeSpeed:100,
    BackSpeed: 60,
    loop: true,
})
/* sidebar*/
const nav = document.querySelector(".nav"),
navLink = nav.querySelectorAll("li"),
navItem = navLink.length,
allSection =document.querySelectorAll(".main-section"),
totalSection = allSection.length;
for(let i = 0; i<navItem; i++)
    {
    const a = navLink[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j=0; j<navItem; j++)
        {
            if(navLink[j].querySelector("a").classList.contains("active"))
            {
                //addBackSection(j);
              allSection[j].classList.add("backSection");
            }
            navLink[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200){
            sidebarSectionTogglebtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<navItem; i++)
    {
        allSection[i].classList.remove("backSection")
    }
}
function addBackSection(num)
{
    allSection[num].classList.remove("backSection")
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function navUpdate(element)
{
    for(let i=0; i<navItem; i++)
    {
        navLink[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navLink[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navLink[i].querySelector("a").classList.add("active");
            }
    }
}

document.querySelector(".hire").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("date-section-index");
    console.log(sectionIndex);
  showSection(this);
  navUpdate(this);
})
const navTogglebtn = document.querySelector(".nav-toggle"),
    sidebar = document.querySelector(".sidebar");
    navTogglebtn.addEventListener("click",() =>{
        sidebarSectionTogglebtn();
    })
    function sidebarSectionTogglebtn(){
        sidebar.classList.toggle("open");
        navTogglebtn.classList.toggle("open");
        for(let i=0; i < totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }