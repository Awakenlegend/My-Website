import React from 'react';
import './Background3D.css';

const Background3D = () => {
  return (
    <div className="background-container">
      <div className="grid"></div>
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${Math.random() * 5}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--size': `${Math.random() * 3 + 1}px`,
          }} />
        ))}
      </div>
    </div>
  );
};

export default Background3D; 