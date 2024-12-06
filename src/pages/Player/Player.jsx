import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Importação do useParams
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    videoType: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhlM2IzMTRiOWYwNDhmNjY5Y2IxNTU5ZDg3MWE4MSIsIm5iZiI6MTczMjgxMDQ4NC4xMzExMzMsInN1YiI6IjY3NDg5NTYyMmVkMzlhM2FmMTcxZTcwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAh8cxhLHyJdd54xLJgThd7VYySMvexJD4PrwDYGIzI`
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => {
          if (res.results.length > 0) {
            // Prioriza vídeos do tipo "Trailer"
            const trailer = res.results.find(video => video.type === "Trailer");

            // Fallback: usa o primeiro vídeo disponível caso não encontre um trailer
            setApiData(trailer || res.results[0]);
          }
        })
        .catch(err => console.error(err));
    }
  }, [id]); // Adiciona id como dependência

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)}/>
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='Trailer do vídeo'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.videoType}</p>
      </div>
    </div>
  );
};

export default Player;
