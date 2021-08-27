let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line

const person = {
  name: 'Caio' as const,
  surname: 'Ceretta',
};

function pickColor(color: 'Vermelho' | 'Amarelo' | 'Azul') {
  return color;
}

console.log(pickColor('Vermelho'));

// Module mode
export default 1;
