const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');
const wrapper = document.querySelector('.wrapper');




menuIcon.addEventListener('click', () => {
  if(navUl.classList.contains('showing'))
  {
    navUl.classList.remove('showing');
  } else
  {
    navUl.classList.add('showing');
  }
});



const body = document.querySelector('.AnimatedBackGroundGameDev');
const nav = document.querySelector('nav');


body.addEventListener('scroll', function (e) {

    if( body.scrollTop > 0 )
    {
      nav.classList.add('black');
    }
    else
    {
      nav.classList.remove('black');
    }

});
