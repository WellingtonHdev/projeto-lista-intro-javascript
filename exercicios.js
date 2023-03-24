// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  
  return num1 + num2
}
//console.log(soma(11,22))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
//console.log(imprimeMensagem())

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura){
    //altura = Number(prompt("altura do retangulo?"))
    //largura = Number(prompt("largura do retangulo?"))
const area = altura*largura
return area
}


console.log("1)a area do retangulo é: ",calculaAreaRetangulo(2,4))



// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNasc) {
  const idade = anoAtual-anoNasc 
  //anoAtual = Number(prompt("Em que ano estamos?"))
  //anoNasc = Number(prompt("Em que ano você nasceu?"))
  return idade

}
console.log("2)",imprimeIdade(2023,1995))

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso/(altura*altura)
  return imc

}
console.log("3)",calculaIMC(70,1.70))

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  //nome = prompt("Qual seu nome?")
  //idade = Number(prompt("Qual sua idade?"))
  //email = prompt("Qual seu email?")

  return `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

}
console.log("4)",imprimeInformacoesUsuario("wellington",28,"wellington@gmail.com"))

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  //cor1 = prompt("Diga sua cor favorita:")
  //cor2 = prompt("Diga outra cor favorita:")
  //cor3 = prompt("Diga mais uma cor favorita:")

  return `Suas cores favoritas são: \n1-${cor1} \n2-${cor2} \n3-${cor3}`
}
console.log("5)",imprimeTresCoresFavoritas("verde","preto","amarelo"))
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 string = "retorno de string"
  
  return string.toUpperCase()

}
console.log("6)",retornaStringEmMaiuscula())

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressoVendido = custo/valorIngresso
  return ingressoVendido

}
console.log("7)",calculaIngressosEspetaculo(5000,50))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1 = "aaa"
  string2 = "abc"
  const checar = string1 == string2
  return checar

}
console.log("8)",checaStringsMesmoTamanho())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  array = [2,4,6]
  return array[0]
}
console.log("9)",retornaPrimeiroElemento())

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  array = [1, 2, 4 ,16]
  return array [3]

}
console.log("10)",retornaUltimoElemento())

// EXERCÍCIO 11 retorna o array com os elementos trocado
  function trocaPrimeiroEUltimo(array) {
    let temp = array[0]
    array[0] = array[array.length - 1]; 
    array[array.length - 1] = temp; 
    return array; s
  }
  console.log("11)",trocaPrimeiroEUltimo([1, 2, 3, 4, 5]))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 
  return string1.toLowerCase() === string2.toLowerCase()

}
console.log("12)",checaIgualdadeDesconsiderandoCase("abc","Abc"))

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}