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

let text="JavaScript";
console.log(texto.charAt(4));
let frase="O gato subiu no telhado e depois pulou.";
console.log(frase.indexOf("gato"));
console.log(frase.lastIndexOf("pulou"));

let palavra="abacaxi";
console.log(palavra.substring(2,5));
let texto2="Esta é uma String";
console.log(texto.slice(5,7));

console.log("--------------------------------------");

let lista="JavaScript";

console.log("--------------------------------------");


let isDataValida = true;
let isGameOver=false;

console.log(false)
console.log(typeof false);
console.log(isDataValida);
console.log(typeof isGameOver);
console.log("--------------------------------------");


let resultadoSoma;

function soma(a,b){
  return a+b;
}

resultadoSoma=soma(2,3);
console.log("Resultado da soma: " + resultadoSoma);

console.log("--------------------------------------");

let multiplicar=function(a,b){
  return a*b
}

console.log(multiplicar(4,3));

console.log("--------------------------------------");

let dividir=(a,b)=>a/b;
console.log(dividir(10,2));

console.log("--------------------------------------");

let usuario1={}
console.log(usuario1);
console.log(typeof usuario1);

let usuario2={
  nome:"João",
  sobrenome:"Silva",
  idade:27,
  email:"joao@email.com"
}
console.log(usuario2.nome + " " + usuario2.sobrenome);
console.log(usuario2.idade)
console.log(usuario2.email);

let usuario3={
  nome:"Maria",
  sobrenome:"Silva",
  idade:28,
  email:"maria@email.com"
}
console.log(usuario3.nome + " " + usuario2.sobrenome);
usuario3.idade=30;
console.log(usuario3.idade);

console.log("--------------------------------------");

let carro={
  marca: "Fiat",
  modelo:"Toro",

  acelerar: function(){
  console.log("O carro está acelerando!")
  }
}

carro.acelerar();

console.log("--------------------------------------");

let numeros = [ 1,2,3,4,5];
let nomes = ["Bruno", "Carlos", "Diego"];
let misto = [ 1,"dois", true, {chave:"valor"}];

console.log(numeros[0]);
console.log(nomes[1]);

for(let i = 0; i< numeros.length; i++){
  console.log(numeros[i])
}

numeros.forEach(function(numero){
  console.log(numero);
});

let dobro = numeros.map(function(numero){
  return numero*2;
}) 

console.log(dobro);

console.log("--------------------------------------");

const numeross= [1,2,3];
const [a1,b1,c1]=numeross;

console.log(a1);
console.log(b1);
console.log(c1);

const [primeiro, , terceiro]=numeross;


console.log(primeiro);
console.log(terceiro);

const [ x1=10, y1=20, z1=30] = [5, , 25]

console.log(x1);
console.log(y1);
console.log(z1);

console.log("--------------------------------------");


