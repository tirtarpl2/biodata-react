import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/About.css';

const About = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={springProps} className="about-container">
    <div className="about-content">
    <h1>Tentang Saya</h1>
    <p>
    Siswa Smk Negri 6 Jember
    Saya adalah siswa jurusan RPL di Sekolah SMK Negri 6 Jember

    Name: Tirta Fisabilillah
    Birthday: 31 Desember 2005
    Status: Siswa
    Umur: 18 Tahun
    Phone: +62 858 ****
    Email: tirtafisabilillah232@gmail.com
    Alamat: Tanggul Wetan
    </p>
    </div>
    </animated.div>
    );
};

export default About;