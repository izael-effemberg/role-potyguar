/* Rolé Potyguar — interações discretas. Sem dependências. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hero = document.querySelector('.hero');
  var horizon = document.querySelector('.horizon');

  // Ano corrente no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Revelação no scroll
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  // Atalho fixo no celular: aparece depois da 1ª dobra, some no encerramento/rodapé (que já têm os botões)
  var sticky = document.querySelector('.sticky-cta');
  var endZone = document.getElementById('por-vir');
  function updateSticky() {
    if (!sticky) return;
    var past = (window.scrollY || 0) > window.innerHeight * 0.9;
    var nearEnd = endZone && endZone.getBoundingClientRect().top < window.innerHeight * 0.85;
    sticky.classList.toggle('is-visible', past && !nearEnd);
  }

  // Parallax leve do sol (o sol nasce no hero e "se põe" no fim)
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || 0;
    updateSticky();
    if (!reduce) {
      if (hero && y < window.innerHeight * 1.2) {
        hero.style.setProperty('--py', (y * 0.18).toFixed(1) + 'px');
        hero.style.setProperty('--py2', (y * -0.08).toFixed(1) + 'px');
      }
      if (horizon) {
        var r = horizon.getBoundingClientRect();
        var vh = window.innerHeight;
        var p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height * 0.2)));
        horizon.style.setProperty('--rise', (p * r.height * 0.45).toFixed(1) + 'px');
      }
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();
})();
