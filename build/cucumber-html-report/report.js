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
  "error_message": "java.lang.NullPointerException\n\tat helper.AppiumDriverHelper.createDriver(AppiumDriverHelper.java:20)\n\tat stepDefinition.CalculatorSteps.que_insiro_os_dois_numeros(CalculatorSteps.java:19)\n\tat ✽.que insiro os dois numeros(src/test/resources/features/calculator.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "tocar no sum",
  "keyword": "Quando "
});
formatter.match({
  "location": "CalculatorSteps.tocar_no_sum()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "devo ver o resultado da soma",
  "keyword": "Então "
});
formatter.match({
  "location": "CalculatorSteps.devo_ver_o_resultado_da_soma()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Subtrair dois numeros positivos",
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
  "error_message": "java.lang.NullPointerException\n\tat helper.AppiumDriverHelper.createDriver(AppiumDriverHelper.java:20)\n\tat stepDefinition.CalculatorSteps.que_insiro_os_dois_numeros(CalculatorSteps.java:19)\n\tat ✽.que insiro os dois numeros(src/test/resources/features/calculator.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "tocar no subtract",
  "keyword": "Quando "
});
formatter.match({
  "location": "CalculatorSteps.tocar_no_subtract()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "devo ver o resultado da subtração",
  "keyword": "Então "
});
formatter.match({
  "location": "CalculatorSteps.devo_ver_o_resultado_da_subtração()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Dividir dois numeros positivos",
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
  "error_message": "java.lang.NullPointerException\n\tat helper.AppiumDriverHelper.createDriver(AppiumDriverHelper.java:20)\n\tat stepDefinition.CalculatorSteps.que_insiro_os_dois_numeros(CalculatorSteps.java:19)\n\tat ✽.que insiro os dois numeros(src/test/resources/features/calculator.feature:19)\n",
  "status": "failed"
});
formatter.step({
  "name": "tocar no divide",
  "keyword": "Quando "
});
formatter.match({
  "location": "CalculatorSteps.tocar_no_divide()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "devo ver o resultado da divisão",
  "keyword": "Então "
});
formatter.match({
  "location": "CalculatorSteps.devo_ver_o_resultado_da_divisão()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Multiplicar dois numeros positivos",
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
  "error_message": "java.lang.NullPointerException\n\tat helper.AppiumDriverHelper.createDriver(AppiumDriverHelper.java:20)\n\tat stepDefinition.CalculatorSteps.que_insiro_os_dois_numeros(CalculatorSteps.java:19)\n\tat ✽.que insiro os dois numeros(src/test/resources/features/calculator.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "tocar no multiply",
  "keyword": "Quando "
});
formatter.match({
  "location": "CalculatorSteps.tocar_no_multiply()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "devo ver o resultado da multiplicação",
  "keyword": "Então "
});
formatter.match({
  "location": "CalculatorSteps.devo_ver_o_resultado_da_multiplicação()"
});
formatter.result({
  "status": "skipped"
});
});