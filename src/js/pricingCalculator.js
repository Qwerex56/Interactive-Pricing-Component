const slider = document.querySelector('#PriceSelect');
const views = document.querySelector('#Pageviews');
const pricing = document.querySelector('#Pricing');
const moy = document.querySelector('#MOYSelect');

const CONVERSION_RATE = 6.25;
const PAGEVIEWS_TEXT = 'k pageviews'

slider.addEventListener('input', ev => {
  const price = ev.target.value;
  const pageViews = (price * CONVERSION_RATE).toFixed(0);

  views.innerHTML = pageViews.concat(PAGEVIEWS_TEXT);
  pricing.innerHTML = parseFloat(price).toFixed(2);
})