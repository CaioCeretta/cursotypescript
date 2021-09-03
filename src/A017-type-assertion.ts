/** Recomendados */

// Condicional (Para quando não tiver certeza se ele estará na tela a todo momento)
const body = document.querySelector('body');

if (body) body.style.background = 'red';

// Type assertion (recomendada!)
const body3 = document.querySelector('body') as HTMLBodyElement;

body3.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// TYpe assertion 2, não é recomendado, apenas para mostrar subindo os tipos

const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion
const body2 = document.querySelector('body')!;

body2.style.background = 'red';
