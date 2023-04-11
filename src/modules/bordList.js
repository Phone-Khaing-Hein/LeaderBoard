const bordList = () => {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  const board = document.getElementById('board');
  const data = scores.map((s) => '<tr><td>'.concat(s.user).concat(' : ').concat(s.score).concat('</td></tr>'));
  const list = `
        <div class="w-50" style="max-height:500px;overflow:scroll;">
            <h3 class="mb-3">Recent Scores <button id="refresh" class="btn btn-sm btn-secondary shadow ms-3">Refresh</button></h3>
            <table class="table table-striped table-hover table-bodered">
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
