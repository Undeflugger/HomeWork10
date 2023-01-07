const myKapibara = document.getElementById('1');
const imgs = ['"kapibara/1.jpg"', '"kapibara/3.jpg"', '"kapibara/4.jpg"',
            '"kapibara/5.jpg"', '"kapibara/6.jpg"', '"kapibara/2.jpg"', 
            '"kapibara/7.jpg"', '"kapibara/8.jpg"', '"kapibara/9.jpg"'];

function getRandom() {
    const min = 0;
    const max = imgs.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

myKapibara.innerHTML = `<img src = ${imgs[getRandom()]}>`;
