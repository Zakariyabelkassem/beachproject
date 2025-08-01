let li = document.querySelectorAll("ul li");
let bn  = document.getElementById("bn");
let contaparent = document.querySelector(".contaparent");
let container1 = document.querySelector(".container1");
let container4 = document.querySelector(".container4");
let jes = document.getElementById("jes");
let nov = document.querySelector(".nov");
let topp = document.getElementById("top");
let login = document.getElementById("login");
let sliders = document.querySelectorAll(".conthree");
let countor = 0 ;
let flightthree = document.getElementById("flightthree");




// turn = 0 ;
// li.forEach(l=>{
//     l.classList.remove("active");

// })


window.onload = ()=>{
    container1.classList.add("active");
}

window.onscroll = ()=>{
    if(scrollY >= 230){
        contaparent.classList.add("active");
         container1.classList.remove("active");
         topp.style.visibility = "visible" ;
      
    }else{
        contaparent.classList.remove("active");
         container1.classList.add("active");
         topp.style.visibility = "hidden" ;
    }
    if(scrollY >= 1400){
        container4.classList.add("active");
    }else{
        container4.classList.remove("active");
    }
}

jes.addEventListener("click" , (eo)=>{
    if(eo.target.id === "i2"){
        nov.classList.add("active");
        let li = nov.querySelectorAll("ul li a");
        eo.target.style.display = "none";
        if(nov.classList.contains("active")){
           let i1 = document.getElementById("i1").style.display = "block" ;
        }
       li.forEach(lli=>{
        lli.addEventListener("click" , ()=>{
            nov.classList.remove("active");
            i1.style.display = "none" ;
            i2.style.display = "block" ;
        })
       })
        
       
    }if(eo.target.id === "i1"){
            nov.classList.remove("active");
            eo.target.style.display = "none"
            let i2 = document.getElementById("i2").style.display = "block" ;
        }
})

topp.addEventListener("click" , ()=>{
    scrollTo ({
        top:0,
        behavior:"smooth",
    })
})


// login.addEventListener("click" , (eo)=>{
//     if(eo.target.id === "btn"){
//         let email = document.getElementById("email");
//         let password = document.getElementById("password");
//         console.log(email , password)
//         if(email.value.toLowerCase().includes("belkassemz631@gmail.com") && password.value.toLowerCase().includes("hamada12#")){
//             login.style.display = "none" ;
//             document.getElementById("grandsec").classList.add("active") ;
//         }
//          if(email.value === "" || !email.value.includes("belkassemz631@gmail.com")){
//            let sp =  document.getElementById("sp").style.display = "block";
//         }else{
//             sp.style.display = "none" ;
//         }
//         if(password.value === "" || !password.value.toLowerCase().includes("hamada12#")){
//          let spa =   document.getElementById("spa").style.display = "block" ;
//         }else{
//             spa.style.display = "none" ;
//         }
        
//     }
// })


let btn2 = document.getElementById("btn2");
let b2 = document.getElementById("b2");

btn2.addEventListener("click" , ()=>{
    let link1 = btn2.dataset.page ;
    document.getElementById("grandsec").style.display = "none" ;
   let page1 = document.getElementById(link1).style.display = "block" ;
  
 })

b2.addEventListener("click" , ()=>{
    let link2 = b2.dataset.page ;
    b2.parentElement.parentElement.parentElement.style.display = "none" ;
    document.getElementById(link2).style.display = "block" ;
 })


 let btn1 =document.getElementById("btn1");


 btn1.addEventListener("click" , ()=>{
    let mypage = btn1.dataset.page ;
    btn1.parentElement.parentElement.parentElement.style.display = "none";
    document.getElementById(mypage).style.display = "block" ;
 })

 let togrand = document.getElementById("togrand");

 togrand.addEventListener("click" , ()=>{
    let mysecoundpage = togrand.dataset.page ;
    togrand.parentElement.parentElement.style.display = "none" ;
    document.getElementById(mysecoundpage).style.display = "block" ;
 } )




 function slid(index){
    sliders.forEach(slider=>{
        slider.classList.remove("active");
    })
    sliders[index].classList.add("active");
   
}




function right(){
    countor++ ;
    if(countor > 2){
        countor = 0 ;
    }
    slid(countor);
}

function left(){
    countor-- ;
    if(countor < 0){
        countor = 2 ;
    }
    slid(countor);
}

flightthree.addEventListener("click" , (eo)=>{
    if(eo.target.id === "btn11"){
        left()
    }
    else if(eo.target.id === "btn22"){
        right()
    }
})

