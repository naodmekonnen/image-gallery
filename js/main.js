const displayImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.overlay');

const btn = document.querySelector('button');
const overlay = document.querySelector('overlay');

/* Declaring the array of image filenames */

let imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */

let imgalts = {
    'img1':''
    'img2':''
    'img2':''
    'img4':''
    'img5':''
}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src',xxx);
newImage.setAttribute('alt',xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
