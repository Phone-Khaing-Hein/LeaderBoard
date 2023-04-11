const bordList = () => {
  console.log('list');
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  const board = document.getElementById('board');
  const data = scores.map((s) => '<tr><td>'.concat(s.user).concat(' : ').concat(s.score).concat('</td></tr>'));
  const list = `
        <div>
            <h3>Recent Scores <button id="refresh">Refresh</button></h3>
            <table>
              <tbody id="list">
              </tbody>
            </table>
        </div>
  `;

  board.innerHTML += list;

  data.forEach((d) => {
    document.getElementById('list').innerHTML += d;
  });
};

export default bordList;
