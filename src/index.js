import './styles/main.scss';

const todo = [
  {
    description: 'Was the car',
    completed: true,
    index: 1,
  },
  {
    description: 'Go to Supermarket',
    completed: false,
    index: 2,
  },
  {
    description: 'Walk the Kids',
    completed: true,
    index: 3,
  },
  {
    description: 'Walk the Kids',
    completed: true,
    index: 4,
  },
];

const populateUI = () => {
  const todoItems = document.querySelector('.todo-items');
  let html = '';
  todo.forEach((item, index) => {
    html += `
        <div class="item-list" id=item-${index}><div class="status"><label><input type="checkbox"></label></div>
        <div>${item.description}</div>
        <div class="threedots"></div></div>`;

    todoItems.innerHTML = html;
  });
};
populateUI();

// const laughImg = document.getElementById('testImg')
// laughImg.src = laughing

// const jokeBtn = document.getElementById('jokeBtn')
// jokeBtn.addEventListener('click', generatejoke)

// generatejoke()
