// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
let myPromise=new Promise((resolve, reject) => {
    let a =2;
    if (a==2){
    resolve(setTimeout(()=>{
        let modal=document.querySelector(".modal")
        modal.style.display="block";
        let close=document.querySelector(".close");
        close.addEventListener("click",()=>{modal.style.display="none"})
    },6000))
}else{reject(console.log("An error occured"))
}})