var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";

menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px"){
      sideNav.style.right = "0";
      menu.src = "IMG/close.png";
    }
    else {
      sideNav.style.right = "-250px";
      menu.src = "IMG/menu.png";
    }
   }

document.addEventListener('click', function(event) {
  if (!sideNav.contains(event.target) && event.target !== menuBtn && event.target !== menu) {
    sideNav.style.right = "-250px";
    menu.src = "IMG/menu.png";
  }
});


//Go To Top Function

let mybutton = document.getElementById("goTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzk-ZhiKrRbUFlct8hn4nkZppwDNb3oBK8itjm7yWUGMGHhOnGwzfHNNK2Z2qc6iQHz/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Thank you for your subscribing!"
          setTimeout(function(){
            msg.innerHTML = ""
          },2000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })