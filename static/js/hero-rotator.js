// Home-page hero slideshow: slow crossfade, pauses on hover/focus, has a
// pause button, stops when the tab is hidden, and never auto-plays for
// visitors who prefer reduced motion.
(function () {
  var root = document.querySelector('.hero-rotator');
  if (!root) return;
  var slides = root.querySelectorAll('.slide');
  var caps = root.querySelectorAll('.slide-caption');
  var dots = root.querySelectorAll('.rotator-dot');
  var pauseBtn = root.querySelector('.rotator-pause');
  var live = root.querySelector('.rotator-captions');
  if (slides.length < 2) return;

  var INTERVAL = 7000;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0, timer = null, userPaused = reduce, held = false;

  function show(n) {
    current = (n + slides.length) % slides.length;
    for (var k = 0; k < slides.length; k++) {
      var on = k === current;
      slides[k].classList.toggle('is-active', on);
      slides[k].setAttribute('aria-hidden', on ? 'false' : 'true');
      caps[k].classList.toggle('is-active', on);
      caps[k].setAttribute('aria-hidden', on ? 'false' : 'true');
      var link = caps[k].querySelector('a');
      if (link) link.tabIndex = on ? 0 : -1;
      dots[k].classList.toggle('is-active', on);
      if (on) dots[k].setAttribute('aria-current', 'true'); else dots[k].removeAttribute('aria-current');
    }
  }
  function running() { return !userPaused && !held && !document.hidden; }
  function schedule() {
    clearInterval(timer);
    timer = running() ? setInterval(function () { show(current + 1); }, INTERVAL) : null;
    // Announce caption changes only when a person is driving the slideshow.
    live.setAttribute('aria-live', running() ? 'off' : 'polite');
  }
  function setPaused(p) {
    userPaused = p;
    pauseBtn.setAttribute('aria-pressed', String(p));
    pauseBtn.textContent = p ? 'Play' : 'Pause';
    pauseBtn.setAttribute('aria-label', p ? 'Play slideshow' : 'Pause slideshow');
    schedule();
  }

  pauseBtn.addEventListener('click', function () { setPaused(!userPaused); });
  for (var k = 0; k < dots.length; k++) {
    dots[k].addEventListener('click', function () { show(+this.dataset.i); schedule(); });
  }
  root.addEventListener('mouseenter', function () { held = true; schedule(); });
  root.addEventListener('mouseleave', function () { held = false; schedule(); });
  root.addEventListener('focusin', function () { held = true; schedule(); });
  root.addEventListener('focusout', function (e) {
    if (!root.contains(e.relatedTarget)) { held = false; schedule(); }
  });
  document.addEventListener('visibilitychange', schedule);

  root.classList.add('is-ready');
  setPaused(userPaused);
})();
