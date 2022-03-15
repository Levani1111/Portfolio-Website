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
    // Sections active class
    allSections.addEventListener('click', function(e) {
        const id = e.target.dataset.id;
        if(id) {
            // remove deleted from other buttons
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    
        //Toggle theme
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click',() =>{
            let element = document.body;
            element.classList.toggle('light-mode')
        })
}

PageTransitions() // call function