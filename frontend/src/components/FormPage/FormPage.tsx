import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './FormPage.css'

function FormPage() {
  const [romanticText, setRomanticText] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [date, setDate] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  const handleSubmit = () => {
    if (!romanticText || !youtubeLink || photos.length === 0 || !date) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    const data = {
      romanticText,
      photos: photos.map((file) => URL.createObjectURL(file)),
      date,
      youtubeLink,
    };
    localStorage.setItem('giftData', JSON.stringify(data));
    
    // Abre a página de resultados em uma nova aba
    window.open('/result', '_blank');
  };
  

  return (
    <div className="form-page">
      <h1>Presente para Minha Namorada</h1>

      <label>Texto Romântico:</label>
      <textarea
        value={romanticText}
        
        onChange={(e) => setRomanticText(e.target.value)}
        placeholder="Escreva algo especial..."
      />

      <label>Fotos:</label>
      <input type="file" multiple accept="image/*" onChange={handleFileUpload} />

      <label>Data e Hora do Primeiro Encontro:</label>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label>Link da Música do YouTube:</label>
      <input
        type="url"
        value={youtubeLink}
        onChange={(e) => setYoutubeLink(e.target.value)}
        placeholder="https://www.youtube.com/watch?v=..."
      />

      <button onClick={handleSubmit}>Finalizar</button>
    </div>
  );
}

export default FormPage;
