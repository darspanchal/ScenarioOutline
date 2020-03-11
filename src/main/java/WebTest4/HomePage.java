package WebTest4;

import org.openqa.selenium.By;

public class HomePage extends Utils {

    // locator for username field
    private By _usernameField = By.id("txtUsername");

    // locator for password field
    private By _passwordField = By.id("txtPassword");

    //locator for login button
    private By _loginButtonField = By.id("btnLogin");

    //locator for errormsg
    private By _errorMsgField = By.id("spanMessage");


   // Assert msg to Verify user is on homepage
    public void verifyUserIsOnHomePage()
    {
        assertURL( "https://opensource-demo.orangehrmlive.com/" );
    }


    public void enterUsernameAndPassword(String username, String password)
    {
        EnterText(_usernameField,username);
        EnterText(_passwordField,password );
    }

    //Method for clickonLogin
    public void clickOnLogin()
    {
        clickOnElement(_loginButtonField);
    }

    //Mehtod for login error message
    public void loginErrorMsg(String ErrorMessage)
    {
        String expected = ErrorMessage;
        assertTextMessage("",expected,_errorMsgField);
    }
}

