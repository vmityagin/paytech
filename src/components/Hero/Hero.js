import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">

        <div className="hero__content">
          <h1 className="hero__title">
            Прямые международные<br />банковские переводы
          </h1>
          <p className="hero__subtitle">
            Переводы в Китай, Бразилию и страны СНГ<br />
            с прозрачным маршрутом и контролем на каждом этапе
          </p>
          <button className="hero__btn" type="button">
            Рассчитать условия
          </button>
        </div>

        <div className="hero__globe" role="img" aria-label="Глобус с международными переводами">
        </div>

      </div>
    </section>
  );
}

export default Hero;
