// The following line makes sure your styles are included in the project. Don't remove this.
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.getElementById("myModal");

let myPromise = new Promise((resolve)=>{
    setTimeout(()=>{
            resolve(modal)
            
    }, (1000*60))
})

myPromise.then(modal => {
    modal.style.display = 'block';
    document.querySelector('.close').addEventListener('click', () =>{
        modal.style.display = 'none';
    })    
})



