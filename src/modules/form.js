const form = () => {
  const board = document.getElementById('board');
  const form = `
        <form id="scoreForm" method="post">
            <h3 class="mb-3">Add your scores</h3>
            <input type="text" placeholder="your name" name="name" class="form-control mb-3">
            <input type="number" placeholder="your scores" name="score" class="form-control mb-3">
            <button class="btn btn-secondary shadow float-end">Submit</button>
        </form>
  `;

  board.innerHTML += form;
};

export default form;
