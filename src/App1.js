import Joke from './Joke.js'

function App1(){
    return(
        <div>
            <h1>Jokes</h1>
            <Joke setup='Coming up with jokes is not that easy' 
            punchline='We shall get there'
            isPun = {true}
            upVotes={5}
            downVotes={1}/>
            <Joke setup='MC Kapale is actually funny'
            punchline='It is just haters that do not feel him'
            isPun = {false}
            upVotes={16}
            downVotes={5}/>
            <Joke setup='Testing 123  waguan'
            punchline='Just for laughs'
            isPun = {true}
            upVotes={8}
            downVotes={11}/>
            <Joke setup='Short people are good people' punchline='They are down to earth'/>
            <Joke punchline="We are going higher, that's evident, got the lion of Judah magnificent"
            isPun = {false}
            upVotes={3}
            downVotes={2}/>
        </div>
    )
}

export default App1