// Essa é uma maneira de tipar objetos, porém é melhor deixar o proprio typescript inferir o tipo

// const objetoA: Record<string, unknown> = {
//   chaveA: 'a',
//   chaveB: 'b',
// };

// Maneira melhor
// const objetoA = {
//     chaveA: 'a',
//     chaveB: 'b',
//   };

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
  chaveC: 'Valor C',
};

// objetoA.chaveA = 'Outro valor';
// objetoA.chaveA = 'b';
// objetoA.chaveC = 'Teste';
objetoA.chaveD = 'Teste2';

console.log(objetoA);
