const form = () => {
  const board = document.getElementById('board');
  const form = `
        <form>
            <h3>Add your scores</h3>
            <input type="text" placeholder="your name"> <br/>
            <input type="number" placeholder="your scores"> <br/>
            <button>Submit</button>
        </form>
  `;

  board.innerHTML += form;
};

export default form;
