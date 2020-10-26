

const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true }
];

// const moe = document.createTextNode('moe');
// const larry = document.createTextNode('larry');
// const curly = document.createTextNode('curly');
// const lucy = document.createTextNode('lucy');

const lists = document.querySelector('#lists');
lists.addEventListener('click', selectOrSwitch);

const firstSlot = document.querySelector('#first');

function createUserElement () {
  for(let i = 0; i < users.length; i++) {
    users[i].dom = document.createElement('div');
    const name = document.createTextNode(users[i].name);
    users[i].dom.appendChild(name);
    users[i].dom.id = users[i].name;
    users[i].dom.className = 'selection';
    firstSlot.appendChild(users[i].dom);
  }
}

createUserElement();

function selectOrSwitch (event) {
  if(event.target.className.includes('selection')) {
    return selectName(event);
  }

  return moveListItem(event);
}

function selectName (event) {
  const name = event.target.id;
  for(let i = 0; i < users.length; i++) {
    if(name === users[i].name) {
      if(users[i].selected === true) {
        users[i].selected = false;
        users[i].dom.className = 'selection cold';
      } else {
        users[i].selected = true;
        users[i].dom.className = 'selection hot';
      }
    }
  }
}


function moveListItem(event) {
  const sourceParent = event.target.parentElement.id;
  const source = event.target.className;
  console.log(source.includes('move-rt'));
}
// const lists = document.querySelector('#lists');

// const secondSlot = document.querySelector('#second');
// const thirdSlot = document.querySelector('#third');
// const selection = document.createElement('div');

// lists.addEventListener('click', moveListItem);


// function moveListItem(event) {
//   if(event.target.className.includes('right')) {
//     if(event.target.parentElement.id === 'first') {
//       let user = users[0].name;
//       selection.innerHTML = user;
//       selection.id = user;
//       // selection.style.backgroundColor = 'white';
//       // selection.style.border = 'none';
//       selection.className = 'user-born'
//       selection.addEventListener('click', )
//       secondSlot.appendChild(selection);
//     }
//   }
// }