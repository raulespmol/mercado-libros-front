import { Container } from "react-bootstrap";
import './SectionFeatures.css';
import React, { useEffect } from 'react';

const animateText = (text) => {
  return text.split('').map((char, index) => (
    <span key={index} className={`feature-item ld${(index % 9) + 1}`}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const SectionFeatures = () => {
  useEffect(() => {
    const style = document.createElement('style');
    let dropDelays = '\n';

    for (let i = 1; i <= 9; i++) {
      dropDelays += `.ld${i} { animation-delay: 1.${i}s; }\n`;
    }

    style.innerHTML = dropDelays;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="features my-5">
      <Container className="text-center">
        <h3>{animateText('¡Tu próximo capítulo está a solo un clic de distancia!')}</h3>

      </Container>
    </section>
  );
};

export default SectionFeatures;
