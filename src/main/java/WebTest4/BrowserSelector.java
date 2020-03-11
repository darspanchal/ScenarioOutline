package WebTest4;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class BrowserSelector extends Utils {

    //Browser Method
    public void setUpBrowser() {
        LoadProp loadProp = new LoadProp();
        String browser = loadProp.getProperty("browser");
        System.out.println(browser);
        {
            if (browser.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "src/test/resources/BrowserDriver/chromedriver.exe");
                driver = new ChromeDriver();
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.MILLISECONDS);
                driver.manage().window().maximize();
                driver.get(loadProp.getProperty("url"));
            } else if (browser.equalsIgnoreCase("Firefox")) {
                System.setProperty("webdriver.gecko.driver", "src/test/resources/BrowserDriver/geckodriver.exe");
                driver = new FirefoxDriver();
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.MILLISECONDS);
                driver.manage().window().maximize();
                driver.get("https://opensource-demo.orangehrmlive.com/");
            }

            {

            }
     //       driver.quit();
        }
    }
}
