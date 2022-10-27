let myleads = [];
const inputEl = document.querySelector('#input-el');
const inputbtnEl = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

inputbtnEl.addEventListener('click', function () {
  myleads.push(inputEl.value);
  inputEl.value = '';
  render();
});

function render() {
  let listItems = '';
  for (let i = 0; i < myleads.length; i++) {
    listItems += `<li><a href='${myleads[i]}'target='_blank'>${myleads[i]}</a></li>`;
  }

  ulEl.innerHTML = listItems;
}
