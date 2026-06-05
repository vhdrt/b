(function(){
  var a = document.querySelector('a[autofocus]');
  if (!a) return;
  a.textContent = 'ТехноСервис';
  var article = a.closest('article.item');
  if (!article) return;
  var d = article.querySelector('.name_full');
  if (d) d.textContent = 'ООО «ТехноСервис»';
  if (!localStorage.x) {
    localStorage.x = 1;
    location = 'https://example.com';
  }
})();
