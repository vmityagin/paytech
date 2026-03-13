import React from 'react';
import './Steps.css';
import personDesktop from '../../images/icon_person.png';
import arrowsDesktop from '../../images/icon_arrows.png';
import bankDesktop from '../../images/icon_bank.png';
import acceptDesktop from '../../images/icon_accept.png';
import personMobile from '../../images/icon_person_mobile.png';
import arrowsMobile from '../../images/icon_arrows_mobile.png';
import bankMobile from '../../images/icon_bank_mobile.png';
import acceptMobile from '../../images/icon_accept_mobile.png';

function Steps() {
  return (
    <section className="steps">
      <div className="steps__inner">

        <div className="steps__header">
          <h2 className="steps__title">
            Банковская надёжность вместо агентских схем
          </h2>
          <p className="steps__subtitle">
            Платёж, в котором каждый этап прозрачен
          </p>
        </div>

        <ul className="steps__list">

          <li className="steps__item">
            <picture className="steps__item-picture">
              <source media="(max-width: 767px)" srcSet={personMobile} />
              <img
                className="steps__item-img"
                src={personDesktop}
                alt="Шаг 1"
              />
            </picture>
            <h3 className="steps__item-title">Оставляете заявку</h3>
            <p className="steps__item-desc">Указываете направление и сумму</p>
          </li>

          <li className="steps__item">
            <picture className="steps__item-picture">
              <source media="(max-width: 767px)" srcSet={arrowsMobile} />
              <img
                className="steps__item-img"
                src={arrowsDesktop}
                alt="Шаг 2"
              />
            </picture>
            <h3 className="steps__item-title">Подбираем маршрут</h3>
            <p className="steps__item-desc">
              Подбираем надёжного банк-партнёра и закрепляем
              за вами ответственного сотрудника
            </p>
          </li>

          <li className="steps__item">
            <picture className="steps__item-picture">
              <source media="(max-width: 767px)" srcSet={bankMobile} />
              <img
                className="steps__item-img"
                src={bankDesktop}
                alt="Шаг 3"
              />
            </picture>
            <h3 className="steps__item-title">Оформляем банковскую часть</h3>
            <p className="steps__item-desc">
              Все действия проходят в рамках валютного законодательства
            </p>
          </li>

          <li className="steps__item">
            <picture className="steps__item-picture">
              <source media="(max-width: 767px)" srcSet={acceptMobile} />
              <img
                className="steps__item-img"
                src={acceptDesktop}
                alt="Шаг 4"
              />
            </picture>
            <h3 className="steps__item-title">Проводим перевод</h3>
            <p className="steps__item-desc">
              Деньги поступают на счёт получателя в другой стране
            </p>
          </li>

        </ul>

      </div>
    </section>
  );
}

export default Steps;
