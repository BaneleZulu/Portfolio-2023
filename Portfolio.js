var navList = document.querySelectorAll('nav ul li a');
var sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY + 20
  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop * section.offsetHeight)) {
      navList.forEach(link => {
        link.classList.remove('active');
        if (section.getAttribute('id') === link.getAttribute('href').toString(1)) {
          link.classList.add('active');
        }
      });
    }
  });
});


var toggleButton = document.getElementById('menuBTN');
const sidePanel = document.getElementById('sidePanel');

function hide() {
  sidePanel.display = "none"; 
}


/*====TAGGLE BUTTON=====*/
var x = document.getElementById('menuBTN');
alert("START");

var typed = new Typed('.auto-input', {
    strings: ['Software Developer', 'Programmer', 'Front-End Developer', 'UI Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
    
 })

var typeRandom = new Typed('auto-input', {
    strings: ['Some strings without', 'Some HTML', 'Chars'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
  });


document.getElementById("menuBTN").onclick = function () {
    alert("Hello new WORLD!!!");
};

x.addEventListener('click', function(e) {
    alert("CLICK");

})

  var element = document.getElementById('.auto-input');
  if (element !== null) {
    var typeRandom = new Typed(element, {
      strings: ['Software Developer', 'Programmer', 'Front-End Developer', 'UI Designer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      attr: 'placeholder',
      bindInputFocusEvents: true,
      loop: true
    });
  }


sidePanel


x.addEventListener('click', function(e) {
    alert("CLICK");
    document.querySelector('body').classList.toggle('fa fa-solid fa-bars');
    this.classList.toggle('fa-solid fa-x')
})


taggle.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('fa fa-solid fa-bars');
    this.classList.toggle('fa-solid fa-x')
})











/*=========*/ 
/*=========*/ 
/*=========*/ 
/*=========*/ 