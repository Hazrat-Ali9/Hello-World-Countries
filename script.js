document.addEventListener('DOMContentLoaded', function() {
  const greetingElement = document.getElementById('greeting');
  const changeButton = document.getElementById('changeButton');
  const body = document.body;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const greetings = [
    'Hello, World!',
    'Hola Mundo!',
    'Bonjour le Monde!',
    'Hallo Welt!',
    'Ciao, Mondo!',
    'Привет, мир!',
    '안녕하세요, 세계!',
    '你好，世界!',
    'Saluton, Mondo!',
    'Merhaba, Dünya!',
    'こんにちは、世界！',
    'Hej, Verden!',
    'مرحبا، العالم!',
    'Прывітанне, Сусвет!',
    'שלום עולם!',
    'Salamu, Dunia!',
    'Hei, Maailma!',
    'Dia duit, Domhan!',
    'Hej, Världen!',
    'Γεια σου, Κόσμε!',
    'Ahoj, Světe!',
    'Pozdrav, Svijete!',
    'Sveiki, Pasaule!',
    'Hoi, Wereld!',
    'Aloha, Honua!',
    'Szia, Világ!',
    'Labas, Pasauli!',
    'Привіт, Світ!',
    'Hei, Verden!',
    'හෙලෝ, වර්ල්ඩ්!',
    'ஹலோ, உலகமே!',
    'ສະບາຍດີ, ທ່ຽວຂອງມື!',
    'សួស្តី, ពិភពលោក!',
    'ഹലോ, ലോകം!',
    'မင်္ဂလာပါ, ကမ္ဘာ!',
    'ନମସ୍କାର, ବିଶ୍ୱ!',
    'ਹੈਲੋ, ਦੁਨਿਆ!',
    'سلام، دنیا!',
    'سلام، عالم!',
    'ہیلو، دنیا!',
    'हैलो, विश्व!',
    'नमस्ते, दुनिया!',
    'হ্যালো, বিশ্ব!',
    'હેલો, વિશ્વ!',
    'ಹಲೋ, ವಿಶ್ವ!',
    'ഹലോ, ലോകം!',
    'හෙලෝ, වර්ල්ඩ්!',
    'ஹலோ, உலகமே!',
    'హలో, ప్రపంచం!',
    'हॅलो, विश्व!'
    // Add more greetings as needed
  ];

  function createFallingLetter() {
    const letter = document.createElement('span');
    letter.className = 'falling-letter';
    letter.textContent = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    letter.style.left = Math.random() * window.innerWidth + 'px';
    letter.style.animationDuration = Math.random() * 2 + 1 + 's';
    body.appendChild(letter);

    letter.addEventListener('animationend', function() {
      letter.remove();
    });
  }

  function startFallingAnimation() {
    setInterval(createFallingLetter, 300);
  }

  startFallingAnimation();

  let lastGreetingIndex;

  function getRandomGreeting() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * greetings.length);
    } while (randomIndex === lastGreetingIndex);

    lastGreetingIndex = randomIndex;
    return greetings[randomIndex];
  }

  function changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    greetingElement.style.color = randomColor;
  }

  greetingElement.addEventListener('mouseover', function() {
    greetingElement.style.color = '#3498db';
  });

  greetingElement.addEventListener('mouseout', function() {
    greetingElement.style.color = '#fff';
  });

  greetingElement.addEventListener('click', function() {
    const newGreeting = getRandomGreeting();
    greetingElement.textContent = newGreeting;
    changeColor();
  });

  changeButton.addEventListener('click', function() {
    const newGreeting = getRandomGreeting();
    greetingElement.textContent = newGreeting;
    changeColor();
  });
});
