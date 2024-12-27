// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import './ResultPage.css';

function ResultPage() {
  const [data, setData] = useState<any>(null);
  const [timeTogether, setTimeTogether] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('giftData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (data?.date) {
      const interval = setInterval(() => {
        const now = new Date();
        const startDate = new Date(data.date);
        const diff = now.getTime() - startDate.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeTogether(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [data]);

  if (!data) return <p>Carregando...</p>;

  return (
    <div className="result-page">
      <h1>Nossa Hinstória Até aqui...</h1>

      <h2>❤</h2>
      <p>{data.romanticText}</p>

      <h2>Nossos Momentos</h2>
      <div className="photo-gallery">
        {data.photos.map((photo: string, index: number) => (
          <div
            key={index}
            className="photo"
            style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}
          >
            <img src={photo} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>

      <h2>Tempo Juntos</h2>
      <p>{timeTogether}</p>

      <h2>Nossa Música</h2>
      <iframe
        width="560"
        height="315"
        src={data.youtubeLink.replace('watch?v=', 'embed/')}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ResultPage;