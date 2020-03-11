package WebTest4;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepDefs {
    HomePage homePage = new HomePage();
// Method for user is on homepage
    @Given("user is on home page")
    public void userIsOnHomePage()
    {
        homePage.verifyUserIsOnHomePage();

    }
// Method for when user enter invalid id and password
    @When("user enter invalid {string} and password {string}")
    public void user_enter_invalid_and_password(String username, String password)
    {
        homePage.enterUsernameAndPassword(username,password);
    }

// Method for click on login button
    @When("user clicks on Login")
    public void user_clicks_on_Login()
    {
        homePage.clickOnLogin();
    }


//Method for  when registration failed user can see error message
    @Then("user should see {string}")
    public void user_should_see(String ErrorMessage)
    {
        homePage.loginErrorMsg(ErrorMessage);


    }
}
