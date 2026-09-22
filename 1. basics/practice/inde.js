const loadJoke = async () =>{
    try{
        const chuckNorrisFetch=await fetch('https://api.chucknorris.io/jokes/random',{
            headers:{
                Accept:"applicatio/json"
            }
        });
        const jokeData = await chuckNorrisFetch.json();
        document.getElementById('LoadingJoke').innerHTML=jokeData.value;
    }
    catch(error){
        console.log(error)
    }
}
document.getElementById('loadJokeBtn').addEventListener("click",loadJoke);