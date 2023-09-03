const slider = document.querySelector('#PriceSelect');
const views = document.querySelector('#Pageviews');
const pricing = document.querySelector('#Pricing');
const moy = document.querySelector('#MOYSelect');

const CONVERSION_RATE = 6.25;
const PAGEVIEWS_TEXT = 'k pageviews'

slider.addEventListener('input', () => updatePrice());
moy.addEventListener('input', () => updatePrice());

const updatePrice = () => {
  const price = slider.value;
  const pageViews = (price * CONVERSION_RATE).toFixed(0);

  views.innerText = pageViews.concat(PAGEVIEWS_TEXT);
  pricing.innerText = '$' + parseFloat(
    moy.checked? price * 0.75 : price
  ).toFixed(2);
}