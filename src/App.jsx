//import React from 'react'

import {  useEffect , useState } from "react"
import Search from "./Components/Search"
import Spinner from "./Components/Spinner";
import MovieCard from "./Components/MovieCard";
import { useDebounce } from "react-use";
import { getTrendingMovies, updateSearchTerm } from "./AppWrite";

 const  API_BASE_URL = 'https://api.themoviedb.org/3';
 const API_KEY = import.meta.env.VITE_TMDB_API_KEY ;
 const API_OPTIONS = {
      method : 'GET',
      headers : {
      accept : 'application/json',
      Authorization : `Bearer ${API_KEY}`
    }

 }


const App = () => {
  
const [searchTerm, setsearchTerm] = useState('');
const [errorMessage, seterrorMessage] = useState('');
const [movieList, setmovieList] = useState([]);
const [trendingMovies, settrendingMovies] = useState([]);
const [isLoading, setisLoading] = useState(false);
const [debouncedSearchTerm, setdebouncedSearchTerm] = useState('');

// debounce the search term to prevent making too many API requests
//by waiting for the user to stop typing for 500 ms(mile seconds)

useDebounce(() =>setdebouncedSearchTerm(searchTerm),500, [searchTerm]);



const fetchMovie = async(query ='') =>{
  setisLoading(true);
  seterrorMessage('');
  
      try {

        const endPoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endPoint , API_OPTIONS);
       
        if(!response.ok){
           throw new Error('Failed to fetch Movies');
        }

        const data = await response.json();
       // console.log(data);

        if(data.response === false){
          seterrorMessage('data.error || Failed to Fetch Movies');
          setmovieList([]);
          return ;
        }
        setmovieList(data.results || [])

        if(query && data.results.length > 0){
          await updateSearchTerm(query , data.results[0]);
        }

       // alert(response)
      } catch (error) {
        console.log(`Error fetching Movies : ${error}`);
        seterrorMessage('Error Fetching Movies .Try Again Later');
      }
      finally{
        setisLoading(false);
      }
}

const loadTrendingMovies = async () => {
  try {
    const movies = await getTrendingMovies();
    settrendingMovies(movies);
  } catch (error) {
    console.log(`Error While  fetching Trenging Movies : ${error} `);
  }
}

    useEffect(   () =>{
      fetchMovie(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    useEffect( () =>{
      loadTrendingMovies();
    },[]);

  return (
    <main>
      <div className="pattern"/>
        <div className="wrapper">
              <header>
                <h1><span className="text-gradient">Binge Lounge</span></h1>
                <img src="banner_img.png" alt="Hero Banner" />
                <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without Hassle</h1>

                 <Search searchTerm ={searchTerm} setsearchTerm ={setsearchTerm}/>

              </header>

              {trendingMovies.length > 0 && (
                <section className="trending">
                  <h2>Trending Movies</h2>

                  <ul>
                      {trendingMovies.map((movie, index) =>(
                        <li key={movie.$id}>
                          <p>{index+1}</p>
                          <img src={movie.poster_url}  alt={movie.title} />

                        </li>
                      ))}
                  </ul>
                </section>
              )}

             <section className="all-movies">
              <h2>All Movies</h2>
             
             {isLoading ? (
              <Spinner/>
              ): errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
              ): (
                <ul>
                  {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie ={movie}/>
                  ))}
                </ul>
              )
              }

             </section>
             
      </div>
    </main>

  )
}

export default App