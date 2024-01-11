import React, { useEffect, useRef } from 'react';
import '../assets/css/Body.css';
import FotoProfil from '../assets/img/Profil.jpeg';

const Body = () => {
  const typedTextRef = useRef(null);
  
  useEffect(() => {
    const text = "My Name is Tirta Fisabilillah";
    const maxLength = text.length;
    let index = 0;
    const speed = 200; // Kecepatan animasi (ms)

    function typeWriter() {
      if (index < maxLength) {
        typedTextRef.current.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      } else {
        // Jika sudah mencapai panjang maksimum, ulangi dari awal
        index = 0;
        typedTextRef.current.innerHTML = "";
        setTimeout(typeWriter, speed);
      }
    }

    if (typedTextRef.current.innerHTML.length === 0) {
      typeWriter();
    }
  }, []);

  return (
    <div className="body-container">
      <div className="content-container">
        <div className="text-section">
          <div className="hero-section">
            <h1>Welcome TO MyPortofolio!!</h1>
            <p ref={typedTextRef} className="typewriter-text"></p>
          </div>
          <div className="feature-section">
            <div className="feature">
              <h2>Pendidikan</h2>
              <p>SMKN 06 JEMBER</p>
            </div>
            <div className="feature">
              <h2>Lokasi</h2>
              <p>Lokasi</p>
            </div>
           {/* <div className="feature">
              <h2>Fitur 3</h2>
              <p>Deskripsi fitur 3 yang menarik.</p>
            </div>*/}
          </div>
        </div>
        <div className="image-section">
          <img src={FotoProfil} alt="Foto Portofolio" />
        </div>
      </div>
    </div>
  );
};

export default Body;