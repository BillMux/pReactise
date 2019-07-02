class NumPicker extends React.Component {
  render () {
    let number = getNumber();
    let message = getMessage(number);
    return (
      <div>
        <h1>Your number is: {number}</h1>
        <p>{message}</p>
        {
          isLucky(number, 7) && <img
            src="https://media.giphy.com/media/uTuLngvL9p0Xe/giphy.gif"
          />
        }
      </div>
    );
  };
};

function getMessage(number) {
  if (isLucky(number, 7)) {
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

ReactDOM.render(<NumPicker />, document.getElementById('root'));
