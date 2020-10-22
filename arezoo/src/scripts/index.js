// The following line makes sure your styles are included in the project. Don't remove this.
// import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.getElementById("myModal");
document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

let myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(modal);
  }, 60000);
});

myPromise.then((result) => {
  result.style.display = "block";
});
