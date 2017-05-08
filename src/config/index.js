export default {
  serverURI: 'http://localhost:3000/',
  fixedLayout: false,
  hideLogoOnMobile: false,
  transformRequest: [(data) => JSON.stringify(data.data)],
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  }
}
