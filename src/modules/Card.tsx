import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const [wrongAnswerState, setWrongAnswerState] = useState(0)
  const navigate = useNavigate()

  const turnOnWrongAnswer = () => {
    setWrongAnswerState(1)
    setTimeout(() => {
      setWrongAnswerState(0)
    }, 600)
  }

  return (
    <>
      <h1 id="wrongAnswerAlert" style={{opacity: wrongAnswerState}}>WRONG ANSWER</h1>
      <div className='valentineCard'>
          <h2><span>Thalia</span>, will you be my valentine?</h2>
          <div className='buttonRow'>
              <button onClick={() => navigate('/letter')}>Yes</button>
              <button onClick={turnOnWrongAnswer}>No</button>
          </div>
      </div>
    </>
  )
}

export default Card