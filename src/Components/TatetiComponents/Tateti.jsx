import React, { useState } from 'react'
import './Tateti.css'
import confetti from 'canvas-confetti'


const TURNS = {
  X : 'X',
  O : 'O '
}
const Square = ({children, updateBoard, index, isSelected}) => {
  
  //visual conditional rendering of whose turn it is
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index);
  }
  
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
} 


const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6], 
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

export const Tateti = () => {

const [board, setBoard] = useState (Array(9).fill(null));
  
  const [turn, setTurn] = useState (TURNS.X);
  //null is not winner, false is tie
  const [winner, setWinner] = useState (null);
  
const updateBoard = (index) => {
      //no update the board
      if (board[index] || winner ) return;
      //update board
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      //change turn
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
      //check winner
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        confetti()
        setWinner(newWinner); 
        // setWinner(
        //   (prevWinner) => {
        //   console.log('Ganador: ${newWinner}, el anterior era ${prevWinner}')
        //   return newWinner;
        // })
  
      } //Check if the game is over
      else if (checkEndGame(newBoard)) {
        setWinner(false); //tie
      }
  }
  
  const checkWinner = (boardToCheck) => {
    //running the combinations winners
    for (const combo of WINNER_COMBOS) {
      //we extract the values of the board
      const [a,b,c] = combo;
      //if have a winner
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c])
        {
        return boardToCheck[a];
      }
    }
    //if not have a winner
    return null;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X); 
    setWinner(null);
  }

  const checkEndGame = (newBoard) => {
    //if there are no more empty spaces, the game is over
    return newBoard.every((square) => square !== null);
  }


  return (
    <>
    <main className='board'>
    <h2>
    TaTeTi
    </h2>
    <button onClick={resetGame}>Restart game</button>
    <section className='game'>
      {
        board.map((square, index)=>{
          return(
          <Square 
          key={index}
          index={index}
          updateBoard={updateBoard}>
            {square}
          </Square>
          )
        })
      }
    </section>
    <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
            <h2>
            {
              winner === false ? 'Empate' : 'Ganador:'
            }
            </h2>
            <header className='win'>
              {
                winner && <Square>{winner}</Square>
              }
            </header>
            <footer>
            <button onClick={resetGame}>Restart game</button>
            </footer>
            </div>
          </section>
        )
      }


    </main>
    </>
  )
}
