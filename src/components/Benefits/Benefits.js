import React from 'react';
import './Benefits.css';

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__inner">
        <p className="benefits__label">Вы получаете</p>
        <ul className="benefits__list">
          <li className="benefits__item">Прямой банковский перевод</li>
          <li className="benefits__item">Юридическую чистоту операции</li>
          <li className="benefits__item">Прозрачную структуру комиссии</li>
          <li className="benefits__item">Скорость оплаты в 1 день</li>
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
