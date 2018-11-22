package stepDefinition;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import helper.AppiumDriverHelper;
import screen.CalculatorScreen;

import java.net.MalformedURLException;

import static org.junit.Assert.assertTrue;

public class CalculatorSteps {

    CalculatorScreen screen;

    @Dado("que insiro os dois numeros")
    public void que_insiro_os_dois_numeros() throws MalformedURLException {
        screen = new CalculatorScreen( AppiumDriverHelper.createDriver( System.getProperty( "environment" )));
        screen.inserirNumero("9" );
        screen.inserirNumero2( "1" );
        screen.closeKeyboard();

    }

    @Quando("tocar no sum")
    public void tocar_no_sum() {
        screen.sum();
    }

    @Então("devo ver o resultado da soma")
    public void devo_ver_o_resultado_da_soma() {
        assertTrue(screen.Resultado().equals("10"));
    }

    @Quando("tocar no subtract")
    public void tocar_no_subtract() {
        screen.subtract();
    }

    @Então("devo ver o resultado da subtração")
    public void devo_ver_o_resultado_da_subtração() {
        assertTrue(screen.Resultado().equals("8"));
    }

    @Quando("tocar no divide")
    public void tocar_no_divide() {
        screen.divide();
    }

    @Então("devo ver o resultado da divisão")
    public void devo_ver_o_resultado_da_divisão() {
        assertTrue(screen.Resultado().equals("9"));
    }

    @Quando("tocar no multiply")
    public void tocar_no_multiply() {
       screen.multiply();
    }

    @Então("devo ver o resultado da multiplicação")
    public void devo_ver_o_resultado_da_multiplicação() {
        assertTrue(screen.Resultado().equals("9"));
    }


}
