import React, {useState, useEffect} from "react";

function App() {
  const [popular, setPopular] = useState([])


  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=51b2b5d5f941e522b58e755e059cf6b2&language=en-US&page=1`)
    const movies = await data.json()
    setPopular(movies.results)
  }


  return (
    <div className="App">
      <div className="popular-movies">

      </div>
    </div>
  );
}

export default App;
