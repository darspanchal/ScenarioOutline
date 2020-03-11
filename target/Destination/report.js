$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/invalidscenario.feature");
formatter.feature({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.step({
  "name": "user should see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin1234",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "admin",
        "admin1234",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin1234",
        "Invalid credentials  1"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "admin",
        "",
        "Password cannot be empty"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"Admin\" and password \"admin1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"admin\" and password \"admin1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"Admin\" and password \"Admin1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials  1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cInvalid credentials[  1]\u003e but was:\u003cInvalid credentials[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat WebTest4.Utils.assertTextMessage(Utils.java:36)\r\n\tat WebTest4.HomePage.loginErrorMsg(HomePage.java:28)\r\n\tat WebTest4.MyStepDefs.user_should_see(MyStepDefs.java:32)\r\n\tat ✽.user should see \"Invalid credentials  1\"(file:///C:/Users/pdars/IdeaProjects/demonoppcommerce/Webpage1opm/Webpage1opm/ScenarioOutline/./src/test/resources/features/invalidscenario.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!....Scenario Failed....!!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"admin\" and password \"Admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\" and password \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"Admin\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"\" and password \"Admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: permission denied\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JAF229B\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat WebTest4.BrowserSelector.setUpBrowser(BrowserSelector.java:22)\r\n\tat WebTest4.Hooks.openBrowser(Hooks.java:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid \"admin\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_enter_invalid_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest4.MyStepDefs.user_should_see(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JAF229B\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 73.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200217142647, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 20036, moz:profile: C:\\Users\\pdars\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1e0197e0-79dd-4bb7-8951-55d4d472d8e1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat WebTest4.Hooks.closeBrowser(Hooks.java:36)\r\n",
  "status": "failed"
});
});