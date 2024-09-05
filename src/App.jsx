import Question from './Question'
import questions from './data'

const App = () => {
  return (
    <main>
      <section className="container">
        {questions.map((question) => {
          return <Question {...question} key={question.id} />
        })}
      </section>
    </main>
  )
}
export default App
