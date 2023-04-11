const form = () => {
  const board = document.getElementById('board');
  const form = `
        <form id="scoreForm" method="post">
            <h3>Add your scores</h3>
            <input type="text" placeholder="your name" name="name"> <br/>
            <input type="number" placeholder="your scores" name="score"> <br/>
            <button>Submit</button>
        </form>
  `;

  board.innerHTML += form;
};

export default form;
