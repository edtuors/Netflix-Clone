import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhlM2IzMTRiOWYwNDhmNjY5Y2IxNTU5ZDg3MWE4MSIsIm5iZiI6MTczMjgxMDQ4NC4xMzExMzMsInN1YiI6IjY3NDg5NTYyMmVkMzlhM2FmMTcxZTcwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAh8cxhLHyJdd54xLJgThd7VYySMvexJD4PrwDYGIzI',
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY * 0.5; // Suavizando o scrolling
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results) {
          setApiData(res.results);
        } else {
          console.error('Erro na resposta da API:', res);
        }
      })
      .catch((err) => console.error(err));

    const currentRef = cardsRef.current;

    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category, options]);

  return (
    <div className="titlecards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef} onWheel={handleWheel}>
        {apiData.map((card, index) => (
          card.poster_path && (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.poster_path}
                alt={card.original_title || 'Movie poster'}
              />
              <p>{card.original_title}</p>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
