const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelector('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    // button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
           let currentbtn = document.querySelectorAll('.active-btn');
              currentbtn[0].className = currentbtn[0].className.replace(' active-btn', '');
              this.className += ' active-btn';
        }) 
    }
}

PageTransitions() // call function