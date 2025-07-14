//Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
  {
    brand: 'Rockrider',
    weight: 900
  },
  {
    brand: 'Engwe',
    weight: 1200
  },
  {
    brand: 'Fiido E-Bike',
    weight: 950
  },
  {
    brand: 'Turbo Lego G4',
    weight: 650
  },
  {
    brand: 'Peak E-Bike',
    weight: 950
  },

]

let lightest = bikes[0];

//cerco nell'array di bici quella con la proprietà weight inferiore
for (let i = 0; i < bikes.length; i++) {

  if (bikes[i].weight < lightest.weight) {
    lightest = bikes[i];
  }
}

console.log(lightest);

//creo l'array di oggetti di squadre 
const squads = [
  {
    team: 'Napoli',
    totScore: Math.floor(Math.random() * 100),
    foulsSuffered: Math.floor(Math.random() * 100)
  },
  {
    team: 'Inter',
    totScore: Math.floor(Math.random() * 100),
    foulsSuffered: Math.floor(Math.random() * 100)
  },
  {
    team: 'Milan',
    totScore: Math.floor(Math.random() * 100),
    foulsSuffered: Math.floor(Math.random() * 100)
  },
  {
    team: 'Juventus',
    totScore: Math.floor(Math.random() * 100),
    foulsSuffered: Math.floor(Math.random() * 100)
  },
  {
    team: 'Atalanta',
    totScore: Math.floor(Math.random() * 100),
    foulsSuffered: Math.floor(Math.random() * 100)
  }
]

console.log(squads);

//mi creo un nuovo array dove andrò ad inserire le squadre con le proprietà specifiche
const newSquads = [];

for (let i = 0; i < squads.length; i++) {
  const squad = squads[i];

  let newSquad = {
    team: squad.team,
    foulsSuffered: squad.foulsSuffered
  }

  newSquads.push(newSquad);
}
console.log(newSquads);