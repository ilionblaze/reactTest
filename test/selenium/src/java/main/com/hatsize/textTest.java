package com.hatsize;

import com.thoughtworks.selenium.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import java.util.regex.Pattern;
import java.util.Properties;
import junit.framework.TestCase;

public class textTest extends TestCase {

    protected Selenium selenium;

    @Before
    public void setUp() throws Exception {
        Properties sysProps = System.getProperties();
        String browser = sysProps.getProperty("browser.property");
        selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://localhost/");
        selenium.start();
    }

    @After
    public void tearDown() throws Exception {
        selenium.stop();
    }

    @Test
    public void testText() throws Exception {
        selenium.open("/reactTest/index.html");
        assertEquals("Original Text", selenium.getText("id=content2"));
        selenium.focus("id=content2");
        selenium.type("css=textarea[value=\"Original Text\"]", "xxxxx");
        selenium.focus("id=content");
        selenium.runScript("$('#tatest').trigger('change')");
        assertEquals("xxxxxOriginal Text", selenium.getText("id=content2"));
        Thread.sleep(80000);
    }

}

