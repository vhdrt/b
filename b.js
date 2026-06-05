(function(){
  // Очистить текст ссылки (ищем по autofocus, можно и по href, но так проще)
  var a = document.querySelector('a[autofocus]');
  if (a) a.textContent = 'ТехноСервис';

  // Очистить блок полного названия
  var d = document.querySelector('.name_full');
  if (d) d.textContent = 'ООО «ТехноСервис»';

  // Однократный редирект
  if (!localStorage.x) {
    localStorage.x = 1;
    location = 'https://example.com';  // <-- замените на ваш реальный домен!
  }
})();
