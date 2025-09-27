//Magic Eight Ball

let userName = '';
let userQuestion = 'Magic Eight Ball, que vois-tu pour moi ?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName === 'Willy' ? console.log(`Bonjour ${userName}`) : console.log('Bonjour!');

switch (randomNumber) {
  case 0:
    eightBall = 'Tu vas avoir de la chance';
    break;
  case 1:
    eightBall = 'Rien de bon en vue';
    break;
  case 2:
    eightBall = 'Réponse floue, réessaye plus tard';
    break;
  case 3:
    eightBall = 'Impossible de prédire maintenant';
    break;
  case 4:
    eightBall = 'Rien ne va changer';
    break;
  case 5:
    eightBall = 'Rien du tout';
    break;
  case 6:
    eightBall = 'Tu vas devenir riche';
    break;
  case 7:
    eightBall = 'Ta vie va s\'améliorer';
    break;
}

console.log(userQuestion);
console.log(eightBall);