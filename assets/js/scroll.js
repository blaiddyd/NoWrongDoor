/* eslint-disable no-undef */
window.onscroll = function scroll() {};

(function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('topBtn').style.display = 'block';
  } else {
    document.getElementById('topBtn').style.display = 'none';
  }
}());

(function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}());
