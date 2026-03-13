import React from 'react';
import './Features.css';
import accountBalanceIcon from '../../images/account_balance.png';
import verifiedUserIcon from '../../images/verified_user.png';
import percentDiscountIcon from '../../images/percent_discount.png';
import acuteIcon from '../../images/acute.png';
import hintIcon from '../../images/features__item-hint.svg';

function Features() {
  return (
    <section className="features">
      <div className="features__inner">
        <ul className="features__list">

          <li className="features__item">
            <div className="features__item-header">
              <img className="features__item-icon" src={accountBalanceIcon} alt="" />
              <h3 className="features__item-title">Прямой перевод<br />через банк</h3>
            </div>
            <p className="features__item-desc">
              Без агентов. Платёж через<br />банк-партнёр с лицензией ЦБ
            </p>
          </li>

          <li className="features__item">
            <div className="features__item-header">
              <img className="features__item-icon" src={verifiedUserIcon} alt="" />
              <h3 className="features__item-title">Юридическая<br />ответственность</h3>
            </div>
            <p className="features__item-desc">
              Прямой договор с банком
            </p>
          </li>

          <li className="features__item">
            <div className="features__item-header">
              <img className="features__item-icon" src={percentDiscountIcon} alt="" />
              <h3 className="features__item-title">
                Комиссия от 0,5%<br />за перевод
                <img className="features__item-hint" src={hintIcon} alt="Подробнее" />
              </h3>
            </div>
            <p className="features__item-desc">
              Прозрачные условия<br />без скрытых услуг
            </p>
          </li>

          <li className="features__item">
            <div className="features__item-header">
              <img className="features__item-icon" src={acuteIcon} alt="" />
              <h3 className="features__item-title">Проведём платёж<br />за 1 день</h3>
            </div>
            <p className="features__item-desc">
              Напрямую на банковский счёт получателя
            </p>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Features;
