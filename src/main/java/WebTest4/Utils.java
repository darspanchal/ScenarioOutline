package WebTest4;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;


import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils extends BasePage {

    //Method for Click on element
    public void clickOnElement(By by) { driver.findElement(by).click();   }

    //Method from wait for clickable
    public void waitForClickable(By by, int time) {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.elementToBeClickable(by)); }


    //Method for Enter Text
    public void EnterText(By by, String text) {
        driver.findElement(by).sendKeys(text); }

    //Method for getTextfromElement
    public static String getTextElement(By by) {
        String get_text = driver.findElement( by ).getText();
        return get_text;}

    //Method for assert
    public static void assertTextMessage(String message, String expected, By by) {
        String actual = getTextElement(by);
        Assert.assertEquals(message, expected,actual); }

   //Method for asserturl
    public static void assertURL(String text)
    {
        Assert.assertTrue( driver.getCurrentUrl().contains( text ) );
    }

}
