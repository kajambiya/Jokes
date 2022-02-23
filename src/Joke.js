
function Joke({setup, punchline}){
    return(
        <section>
            {setup && <h3>Setup: {setup}</h3>}
            <p>Punchline: {punchline}</p>
            <hr/>
        </section>
       
    )
}

export default Joke