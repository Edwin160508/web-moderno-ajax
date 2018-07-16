const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avalicao1 = 9.871;
const avalicao2 = 6.871;

const total = avalicao1 * peso1 + avalicao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toString(2));//exibindo valor 'media' em número binário
console.log(typeof media);
console.log(typeof Number);