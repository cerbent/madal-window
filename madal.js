const burgerMenu = document.querySelector(".burger-menu")
const headerNav = document.querySelector(".header-nav")
const burgerItem = document.querySelectorAll(".burger-item")



burgerMenu.addEventListener("click",()=>{
    if (!burgerMenu.classList.contains('active')){
        burgerMenu.classList.add('active')
        headerNav.style.transform = 'translateX(0)'

        burgerItem[0].style.transform = "rotate(45deg) translateY(26px)"
        burgerItem[2].style.transform = "rotate(-45deg) translateY(-26px)"
        burgerItem[1].style.transform = 'translateX(5px)'
        burgerItem[1].style.opacity = '0'
    }else {
        burgerMenu.classList.remove('active')
        headerNav.style.transform = ""

        burgerItem[0].style.transform = ""
        burgerItem[2].style.transform = ""
        burgerItem[1].style.transform = ''
        burgerItem[1].style.opacity = ''
    }
})
const hero = document.querySelector(".ali")
const has = document.querySelector(".hero")



hero.addEventListener("click",()=>{
         legendItem()
})


function legendItem (){
    fetch("https://restcountries.com/v3.1/all")
        .then(data => data.json())
        .then(result =>{
            console.log(result.slice(0,10))
            result.slice(0,10).map( el =>{
                has.innerHTML += `<div>
<img src="${el.flags.svg}" alt="" style="width: 250px; height: 250px;">
</div>`
            })
        })
}

const modal = document.querySelector(".modal-window")
const btn = document.querySelector(".open-btn")
const closeModal = document.querySelector(".close-modal")
const blurWindow = document.querySelector(".blur-window")

function closeModalFn (){
    btn.classList.remove('active')
    modal.style.transform = ""
    btn.innerHTML = "open"
    blurWindow.style.display = "none"
}

btn.addEventListener("click",()=>{
    if (btn.classList.contains('active')){
  closeModalFn()
    }else {
        btn.classList.add('active')
        modal.style.transform = 'scale(1)'
        btn.innerHTML = "close"
        blurWindow.style.display = "block"
    }
})

closeModal.addEventListener("click",() =>{
    closeModalFn()
})


blurWindow.addEventListener("click",() =>{
    closeModalFn()
})

