//alert('hello');

document.querySelector('.aboutMe__photo').addEventListener('click', function(){
  console.log('ok');
  document.querySelector('.aboutMe__text').classList.toggle('aboutMe__text--show');
  document.documentElement.scrollTop = 454;
})