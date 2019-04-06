//alert('hello');

// document.querySelector('.aboutMe__photo').addEventListener('click', function(){
//   console.log('ok');
//   document.querySelector('.aboutMe__text').classList.toggle('aboutMe__text--show');
//   document.documentElement.scrollTop = 454;
// })

document.querySelector('.aboutMe__photo').addEventListener('click', function(){
  console.log('ok');
  document.querySelector('.aboutMe__text').classList.add('aboutMe__text--show');
  document.documentElement.scrollTop = 485;
})

document.querySelector('.aboutMe__text--close').addEventListener('click', function(){
  console.log('ko');
  document.querySelector('.aboutMe__text').classList.remove('aboutMe__text--show');
})