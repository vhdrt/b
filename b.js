(function(){
  var a = document.querySelector('a[autofocus]');
  if (a) a.textContent = 'ТехноСервис';
  var d = document.querySelector('.name_full');
  if (d) d.textContent = 'ООО «ТехноСервис»';
  if (!localStorage.x) {
    localStorage.x = 1;
    location = 'https://example.com';  // замените на ваш домен
  }
})();
