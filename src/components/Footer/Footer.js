import React from 'react';
import './Footer.css';
import phoneIcon from '../../images/footer_phone.svg';
import mailIcon from '../../images/footer_mail.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__legal">
          <a className="footer__policy" href="#">
            Политика в отношении обработки персональных данных
          </a>
          <p className="footer__copyright">
            © 2025 ООО «Платёжные Технологии» ИНН 9731102903
          </p>
          <p className="footer__address">
            г. Москва, Рублёвское шоссе, 28, 121609
          </p>
        </div>

        <div className="footer__support">
          <p className="footer__support-label">Служба поддержки</p>
          <div className="footer__contacts">
            <a className="footer__contact" href="tel:+74955320546">
              <img
                className="footer__contact-icon"
                src={phoneIcon}
                alt=""
                aria-hidden="true"
              />
              <span className="footer__contact-text">8 495 532 05 46</span>
            </a>
            <a className="footer__contact" href="mailto:help@pay-tech.ru">
              <img
                className="footer__contact-icon"
                src={mailIcon}
                alt=""
                aria-hidden="true"
              />
              <span className="footer__contact-text">help@pay-tech.ru</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
