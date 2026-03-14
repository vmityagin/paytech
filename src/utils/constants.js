import chinaFlag from '../images/china 2.svg';
import brazilFlag from '../images/brazil.svg';
import kazakhstanFlag from '../images/kazakhstan.svg';
import armeniaFlag from '../images/armenia.svg';
import uzbekistanFlag from '../images/uzbekistan.svg';
import tajikistanFlag from '../images/tajikistan.svg';
import belarusFlag from '../images/belarus.svg';
import kyrgyzstanFlag from '../images/kyrgyzstan.svg';

export const COUNTRIES = [
  { flag: chinaFlag,      name: 'Китай',       currency: '¥'   },
  { flag: brazilFlag,     name: 'Бразилия',    currency: 'R$'  },
  { flag: kazakhstanFlag, name: 'Казахстан',   currency: '₸'   },
  { flag: armeniaFlag,    name: 'Армения',     currency: '֏'   },
  { flag: uzbekistanFlag, name: 'Узбекистан',  currency: 'сум' },
  { flag: tajikistanFlag, name: 'Таджикистан', currency: 'смн' },
  { flag: belarusFlag,    name: 'Беларусь',    currency: 'Br'  },
  { flag: kyrgyzstanFlag, name: 'Кыргызстан',  currency: 'с'   },
];

export const CURRENCY_SYMBOLS = Object.fromEntries(
  COUNTRIES.map((c) => [c.name, c.currency])
);

export const TOOLTIPS = {
  featuresCommission: 'Банковская комиссия за проведение перевода',
  calcPaymentRub: 'По курсу банка на текущую дату',
  calcTotal: 'Точная стоимость операции определяется по фактическому курсу банка на момент покупки',
};

export const CBR_RATE = parseFloat(process.env.REACT_APP_CBR_RATE);
export const BANK_MARKUP = parseFloat(process.env.REACT_APP_BANK_MARKUP);
export const COMMISSION_RATE = parseFloat(process.env.REACT_APP_COMMISSION_RATE);
