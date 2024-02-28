//Exercicio 1

let cidade : String;
cidade = 'Diadema';
console.log(`Cidade de ${cidade}`);

//Exercício 2

//objeto 1
interface Carro {
    marca: string;
    ano: number;
}
let meuCarro: Carro = { marca: 'Honda', ano: 2022 };
console.log(`O carro é: ${meuCarro}`)


//objeto 2
interface Peixe{
    especie: string;
    idade: number;   
}
let meuPeixe: Peixe = {especie: 'Carpa', idade: 2};
console.log(`O peixe ${meuPeixe}`);