const bordList = () => {
  const board = document.getElementById('board');
  const list = `
        <div>
            <h3>Recent Scores <button>Refresh</button></h3>
            <table>
                <tr>
                    <th>Name : 100</th>
                </tr>
                <tr>
                    <th>Name : 100</th>
                </tr>
                <tr>
                    <th>Name : 100</th>
                </tr>
                <tr>
                    <th>Name : 100</th>
                </tr>
            </table>
        </div>
  `;

  board.innerHTML += list;
};

export default bordList;
