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

for (let i = 0; i < bikes.length; i++) {

  if (bikes[i].weight < lightest.weight) {
    lightest = bikes[i];
  }
}

console.log(lightest);