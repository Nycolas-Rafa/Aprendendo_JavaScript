const ano=1991;
let atrasoEmSegundos=0.00016;
let area = (16*3.14);
let metadeArea = area/2;

console.log("Ano " + ano);
console.log("Atraso em Segundos " + atrasoEmSegundos);
console.log("Área " + area);
console.log("Tipo " + typeof metadeArea);
console.log("--------------------------------------"); 
let a = 10;
let b = 0*10;
let c = 0o10;
let d = 0b10;

console.log(a); 
console.log(b);
console.log(c);
console.log(d);
console.log("--------------------------------------"); 

let x= 9e3;
let y= 123e-5;
console.log(x); 
console.log(y); 

let z= 0x21;
console.log(z); 
console.log("--------------------------------------"); 


let pais="Brasil";
let continente="America do Sul";
console.log(pais); 
console.log(typeof pais); 
console.log(continente);
console.log("Tipo variavel: " + typeof continente); 

let mensagem1="O navio 'Mars' faz escala no porto";
let mensagem2="A chuva forte passará perto da Cidade de São Paulo";

console.log(mensagem1 + " " + mensagem2);

console.log("--------------------------------------"); 


let nome="Jose";
let idade=30;

let mensagem = `Ola, ${nome}! voce tem ${idade} anos.`;	

console.log("--------------------------------------"); 

let multiLineString =  `
Está é uma string 
com multiplas linhas. \n
Ela pode ser usada para representar 
textos multilinhas.`;

console.log(multiLineString);


let texto="Olá, mundo!";

console.log(texto.startsWith("Olá"));
console.log(texto.endsWith("mundo!" ));
console.log(texto.includes("mundo"));
console.log("abc".repeat(3));

console.log("--------------------------------------"); 

let caminho = String.raw`C:\Users\João\Documents`;
console.log(caminho);

console.log("--------------------------------------");


