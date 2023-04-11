import bordList from './modules/bordList.js';
import form from './modules/form.js';
import './style.css';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

let api = JSON.parse(localStorage.getItem('api')) || '';

const getGameId = async () => {
  const response = await fetch(`${URL}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: "Phone Khaing Hein's games" }),
  });

  const { result } = await response.json();
  localStorage.setItem('api', JSON.stringify(result.split(' ')[3]));
};

if (api === '') {
  getGameId();
  api = JSON.parse(localStorage.getItem('api')) || '';
}

const getScores = async () => {
  const response = await fetch(`${URL}/games/${api}/scores/`);

  const { result } = await response.json();
  localStorage.setItem('scores', JSON.stringify(result));
};

getScores();

bordList();

form();

const formElement = document.getElementById('scoreForm');
formElement.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    user: formElement.name.value.trim(),
    score: formElement.score.value.trim(),
  };

  if (data.user !== '' && data.score !== '') {
    const response = await fetch(`${URL}/games/${api}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      const json = response.json();
      document.getElementById('board').innerHTML = '';
      getScores();
      bordList();
      form();
    });
  }
});

const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  getScores();
  document.getElementById('board').innerHTML = '';
  bordList();
  form();
});
