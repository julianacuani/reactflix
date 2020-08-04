const URL_BACK = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://heartfix.herokuapp.com';

export default {
  URL_BACK,
};