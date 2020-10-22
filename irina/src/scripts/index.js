// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

/* it was already created on html: 
<!-- Modal -->
<section id="myModal" class="modal">
    <!-- Modal content -->
    <section class="modal__content">
      <span class="close">&times;</span>
      <p>You've been on the site for 60 seconds! Cool!</p>
    </section>
  </section>
</body>
*/

let modal = document.getElementById("myModal");
document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

let myPromise = new Promise((resolve) => { // here no need to use reject, because it will not fail.
  setTimeout(() => {
    resolve(modal);
  }, 60000);
}).then((result) => {
  result.style.display = "block";
}).catch(err=>alert(err));

//https://attacomsian.com/blog/javascript-hide-show-dom-elements

/* Basic exemple
//let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout( function() {
    resolve("Success!")  // Yay! Everything went well!
  }, 250) 
}) 

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage) 
});
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
