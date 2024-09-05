import { useState } from 'react'

const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'hide' : 'show'}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  )
}
export default Question
