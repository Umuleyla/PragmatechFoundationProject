let main = document.createElement('div');
main.classList.add('block');
document.querySelector('body').appendChild(main);
for (let i = 0; i < 10; i++) {
  let mainInner = document.createElement('div')
  document.querySelector('main').appendChild(mainInner); 
  mainInner.classList.add('miniblock');
};