function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const makeHeaderChangeColor = () => {
  const navigation = document
    .getElementsByTagName('nav')[0]
    .getElementsByTagName('ul')[0];
  const randomColor = getRandomColor();
  navigation.style.setProperty('background-color', randomColor);
  setInterval(() => {
    const newColor = getRandomColor();
    navigation.style.setProperty('background-color', newColor);
    navigation.style.setProperty('opacity', '1');
  }, 2000);
};

makeHeaderChangeColor();
