package screen;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;
import org.openqa.selenium.support.PageFactory;

public class CalculatorScreen {

    private AppiumDriver<MobileElement> driver;

    public CalculatorScreen(AppiumDriver<MobileElement> appiumDriver){
        PageFactory.initElements( new AppiumFieldDecorator( appiumDriver ),this );
        this.driver = appiumDriver;
    }

    @AndroidFindBy(id = "android_field_first_number")
    @iOSFindBy(id = "apple_first_input")
    public MobileElement first_number;
    @AndroidFindBy(id = "android_field_second_number")
    @iOSFindBy(id = "apple_second_input")
    public MobileElement second_number;
    @AndroidFindBy(id = "android_button_sum")
    @iOSFindBy(id = "apple-sum-button")
    public MobileElement button_sum;
    @AndroidFindBy(id = "android_button_sub")
    @iOSFindBy(id = "apple-subtract-button")
    public MobileElement button_sub;
    @AndroidFindBy(id = "android_button_mult")
    @iOSFindBy(id = "apple-multiply-button")
    public MobileElement button_mult;
    @AndroidFindBy(id = "android_button_div")
    @iOSFindBy(id = "apple-divide-button")
    public MobileElement button_div;
    @AndroidFindBy(id = "android_result_text")
    @iOSFindBy(id = "apple_result_text")
    public MobileElement result_text;

    public void inserirNumero(String num) {
        first_number.clear();
        first_number.sendKeys(num);
    }

    public void inserirNumero2(String num2) {
        second_number.clear();
        second_number.sendKeys(num2);
    }

    public String Resultado() {
        return result_text.getText().toString().trim();
    }

    public void closeKeyboard() {
        driver.hideKeyboard();
    }

    public void subtract(){
        button_sub.click();
    }

    public void divide(){
        button_div.click();
    }

    public void sum(){
        button_sum.click();
    }

    public void multiply(){
        button_mult.click();
    }

}
