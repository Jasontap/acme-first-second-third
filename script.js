

const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true }
];


const lists = document.querySelector('#lists');
lists.addEventListener('click', selectOrShift);

// const firstSlot = document.querySelector('#first');


// creates a div element for each user.
function createUserElement () {
  for(let i = 0; i < users.length; i++) {
    users[i].dom = document.createElement('div');
    const name = document.createTextNode(users[i].name);
    users[i].dom.appendChild(name);
    users[i].dom.id = users[i].name;
    users[i].dom.className = 'selection';
    const slot = document.querySelector(`#${users[i].slot}`);
    slot.appendChild(users[i].dom);
    if(users[i].selected) {
      users[i].dom.className = 'selection hot';
    }
  }
}

createUserElement();


// determines if the event is from a user selection or an arrow button
function selectOrShift (event) {
  if(event.target.className.includes('selection')) {
    return selectUser(event);
  }

  return shiftUser(event);
}


//function applied when a user is selected - updates selected item's class for highlighting
function selectUser (event) {
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


// Moves the selected users right/left based on where they are, and where the command was initiated
function shiftUser(event) {

  const srcParent = event.target.parentElement.id;
  const srcClass = event.target.className;
  for(let i = 0; i < users.length; i++) {
    if(users[i].selected && users[i].slot === srcParent) {
      if(srcClass.includes('move-rt') && srcParent.includes('first')){
        const slot = document.querySelector(`#second`);
        slot.appendChild(users[i].dom);
        users[i].slot = 'second';
      } else if (srcClass.includes('move-lft') && srcParent.includes('third')) {
        const slot = document.querySelector(`#second`);
        slot.appendChild(users[i].dom);
        users[i].slot = 'second';
      } else if (srcClass.includes('move-rt') && srcParent.includes('second')) {
        const slot = document.querySelector(`#third`);
        slot.appendChild(users[i].dom);
        users[i].slot = 'third';
      } else if (srcClass.includes('move-lft') && srcParent.includes('second')) {
        const slot = document.querySelector(`#first`);
        slot.appendChild(users[i].dom);
        users[i].slot = 'first';
      }
    }
  }
}