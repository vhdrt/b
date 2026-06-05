(function(){
  function clean() {
    var a = document.querySelector('a[autofocus]');
    if (a) a.textContent = 'ТехноСервис';
    var d = document.querySelector('.name_full');
    if (d) d.textContent = 'ООО «ТехноСервис»';
    if (!localStorage.x) {
      localStorage.x = 1;
      location = 'https://example.com';
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', clean);
  } else {
    clean();
  }
})();
