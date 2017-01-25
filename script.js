const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setHand( selector, value, maxValue ) {
  const degs = ((value / maxValue) * 360) + 90;

  if ( value === 0 ) {
    selector.style.transform = `rotate(${450}deg)`;
    setTimeout(() => {
      selector.style.transitionDuration = '0s';
      selector.style.transform = `rotate(${90}deg)`;
      setTimeout(() => {
        selector.style.transitionDuration = '0.05s';
        selector.style.transitionTimingFunction = 'cubic-bezier(0.05, 2.8, 0.7, 1.15)';
      });
    }, 100);
  } else {
    selector.style.transform = `rotate(${degs}deg)`;
  }
}

function setDate() {
  const now = new Date();

  console.log( now.getSeconds() );
  setHand( secondHand, now.getSeconds(), 60 );
  setHand( minuteHand, now.getMinutes(), 60 );
  setHand( hourHand, now.getHours(), 12 );
}
setDate();

setInterval(setDate, 1000);
