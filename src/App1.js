import Joke from './Joke.js'
import jokesData from './jokesData.js'

function App1(){
    const jokeElements = jokesData.map(
        joke => <Joke setup={joke.setup}
        punchline={joke.punchline}/>
    )
    return(
        <div>
            {jokeElements}
        </div>
    )
}

export default App1