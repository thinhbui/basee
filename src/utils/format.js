import numeral from 'numeral';
import moment from 'moment';

export const formatCurrency = (number) => `${numeral(number || 0).format('0,0').replace(/,/g, ',')} ₫`;
export const formatNumber = number =>  `${numeral(number || 0).format('0,0').replace(/,/g, ',')}`;
export const formatCurrencyWithoutUnit = (number) => `${numeral(number || 0).format('0,0').replace(/,/g, ',')}`;

export const formatMoney = money => `${money / 1000}K`;

export const formatDate = date => moment(date).format('HH:mm - DD/MM/YYYY');
