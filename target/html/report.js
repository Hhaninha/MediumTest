$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/calculator.feature");
formatter.feature({
  "name": "Realizar operações matematicas",
  "description": "  Eu como usuário quero realizar quato tipos de operações matemáticas somar,subtrair,divisão e multiplicação",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Somar dois numeros positivos",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que insiro os dois numeros",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculatorSteps.que_insiro_os_dois_numeros()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tocar no sum",
  "keyword": "Quando "
});
formatter.match({
  "location": "CalculatorSteps.tocar_no_sum()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo ver o resultado da soma",
  "keyword": "Então "
});
formatter.match({
  "location": "CalculatorSteps.devo_ver_o_resultado_da_soma()"
});
formatter.result({
  "status": "passed"
});
});