const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
console.log(thumbBar)

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

let imgArray = [
    'pic1',
    'pic2',
    'pic3',
    'pic4',
    'pic5'
];

/* Declaring the alternative text for each image file */

 let imgalts = {
    pic1 : 'All seeing eye',
    pic2 : 'Not so grand canyon',
    pic3 : 'Flower of some kind',
    pic4 : 'hieroglyphs',
    pic5 : 'butterfly'
 };

/* Looping through images */

for (let i=0; i<5; i++) {

const newImage = document.createElement('img');
newImage.setAttribute('src', "./img/pic" + (i+1) + ".jpg");
newImage.setAttribute('alt', imgalts[imgArray]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', (e) =>{
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.src;
})

}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const buttonColor = btn.getAttribute('class')
    if (buttonColor === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    
    else {
    btn.setAttribute('class','dark');
    btn.textContent = 'darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }

})

  





