class NumPicker extends React.Component {
  render() {
    let number = getNumber();
    let message = (isLucky(number, 7)) ? congratulate() : commiserate();
    let congratsPic = <img
      src="https://media.giphy.com/media/uTuLngvL9p0Xe/giphy.gif"
    />;
    let commiseratePic = <img
      src="https://media0.giphy.com/media/L95W4wv8nnb9K/giphy.gif"
    />;
    return (
      <div>
        <h1>Your number is: { number }</h1>
        { message }
        { isLucky(number, 7) ? congratsPic : commiseratePic }
      </div>
    )
  }
}

function congratulate() {
  return <div><h2>CONGRATS!!!</h2></div>
};

function commiserate() {
  return <div><h2>Tough break :(</h2></div>
}

function getMessage(number, luckyNumber) {
  if (isLucky(number, luckyNumber)) {
    return 'Lucky Number Seven!'
  } else {
    return 'Unlucky'
  };
};

function isLucky(number, lucky) {
  return number === lucky;
}

function getNumber() {
  let number = Math.floor(Math.random() * 10) + 1;
  if (number === 7) {
    document.getElementById('lucky').display = 'block'
  };
  return Math.floor(Math.random() * 10) + 1;
}
