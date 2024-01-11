import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/Riwayat.css';

const About = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div style={springProps} >
     <div className='p'>
     <div className='bg-p'>
    <div className='p1'>
    <h3>Th.2011-2013</h3>
    <h2>TK.Kemala Bayangkari 31 </h2>
    <h4>jl.pb sudirman</h4>
    </div>
    <div className='p2'>
    <h3>Th.2011-2013</h3>
    <h2>TK.Kemala Bayangkari 31 </h2>
    <h4>jl.pb sudirman</h4>
    </div>
    <div className='p3'>
    <h3>Th.2011-2013</h3>
    <h2>TK.Kemala Bayangkari 31 </h2>
    <h4>jl.pb sudirman</h4>
    
    </div>

    </div>
      </div>
    </div>
  );
};

export default About;