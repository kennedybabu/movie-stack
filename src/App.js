import React, {useState, useEffect} from "react";
import Filter from "./components/Filter";
import Movie from "./components/Movie";

function App() {
  const [popular, setPopular] = useState([])


  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=51b2b5d5f941e522b58e755e059cf6b2&language=en-US&page=1`)
    const movies = await data.json()
    console.log(movies)
    setPopular(movies.results)
  }


  return (
    <div className="w-full py-[5%]">
      <Filter />
      <div className="gap-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:px-[250px]">
          {popular.map((movie) => {
            return <Movie movie={movie} key={movie.id}/>
          })}
      </div>
    </div>
  );
}

export default App;
