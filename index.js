const blur = document.getElementById('blur');
const signInPopup = document.getElementById('signInPopup');
const mobile = document.querySelector('.mobile_nav');

// const closePopup = document.getElementById('closePopup');


function popup() {
    blur.classList.add('active');
    signInPopup.classList.add('active');

};

function closePopup() {
    blur.classList.remove('active');
    signInPopup.classList.remove('active')
}


function openMenu () {
    console.log('Open the menu now!')
    mobile.classList.toggle('active');
}
