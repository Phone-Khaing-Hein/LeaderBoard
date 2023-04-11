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
    body: JSON.stringify({ name: "Phone Khaing Hein's new games" }),
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

const init = () => {
  getScores();
  bordList();
  form();
};

init();

const formElement = document.getElementById('scoreForm');
formElement.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    user: formElement.name.value.trim(),
    score: formElement.score.value.trim(),
  };

  formElement.name.value = '';
  formElement.score.value = '';

  if (data.user !== '' && data.score !== '') {
    const response = await fetch(`${URL}/games/${api}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    if (response.ok) {
      document.getElementById(
        'list',
      ).innerHTML += `<tr><td>${data.user} : ${data.score}</td></tr>`;
      const oldScores = JSON.parse(localStorage.getItem('scores'));
      localStorage.setItem('scores', JSON.stringify([...oldScores, { score: data.score, user: data.user }]));
    }
  }
});

const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  document.getElementById('board').innerHTML = '';
  bordList();
  form();
});
