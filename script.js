//factory function for player

const player = (name, marker) => {
    return {name, marker,};
  };
  
  const player1 = player('will', 'X');
  const player2 = player('comp', 'O')
  
  console.log(player1.name);
  
  
  // module function for gameboard

  const gameBoard = (() => {
    const gameboard = ['X', 'O', 'X', 'O'];
    return {gameboard};
  })();


  // display the gameboard on the screen

  const displayController = (() => {
      const container = document.getElementById('gameContainer');
      container.textContent = '';

      

  })();