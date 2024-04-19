function toggleText() {
  let text = document.getElementById('text');
  let btn = document.querySelector('.toggle-text-button');

  btn.addEventListener('click', function () {
    text.hidden = !text.hidden;
  });
}