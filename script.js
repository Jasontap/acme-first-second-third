const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 4, name: 'curly', slot: 'third' },
  { id: 3, name: 'lucy', slot: 'third', selected: true }
];

const lists = document.querySelector('#lists');
const firstSlot = document.querySelector('#first');
const secondSlot = document.querySelector('#second');
const thirdSlot = document.querySelector('#third');
const selection = document.createElement('button');
selection.id = 'testborder';
lists.addEventListener('click', moveListItem);


function moveListItem(event) {
  if(event.target.className.includes('right')) {
    if(event.target.parentElement.id === 'first') {
      let user = users[0].name;
      selection.innerHTML = user;
      secondSlot.appendChild(selection);

    }
  }
}