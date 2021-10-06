// const { Builder, Capabilities, By } = require("selenium-webdriver");

import { TestScheduler } from "@jest/core";
import { Builder, Capabilities, By } from "selenium-webdriver";

require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()

});

test('Add a movie to list', async () => {
    let input = await driver.findElement(By.css('input'));
    let addBtn = driver.findElement(By.css('button'));

    await driver.sleep(3000);

    await input.sendKeys('Evil Dead');

    await driver.sleep(3000);

    await addBtn.click();

    await driver.sleep(4000)
    
})

test('delete a movie', async () => {
    //The following two lines specifiy the elements we are targeting in the test
    // We target the input field because we will type a movie title in there
    // We target the add button because we will click on it to add the specified movie
    let input = await driver.findElement(By.css('input'));
    let addBtn = driver.findElement(By.css('button'));
    
    await driver.sleep(3000);

    //Send keys on movie typed in - "Spaghetti"
    await input.sendKeys('Spaghetti');

    //wait to see results from typing
    await driver.sleep(3000);

    //click add button
    await addBtn.click();
    //We are targeting the newly created element to test for deletion
    let deleteFn = await driver.findElement(By.id('Spaghetti'));

    await driver.sleep(4000);
    //We click the targeted element to ensure it is deleted after clicking
    deleteFn.click();

    //Pause action to ensure we can see the movie being deleted from the list
    await driver.sleep(4000);



})

test('Make sure delete message says the correct output', async () => {
    //The following two lines specifiy the elements we are targeting in the test
    // We target the input field because we will type a movie title in there
    // We target the add button because we will click on it to add the specified movie
    let input = await driver.findElement(By.css('input'));
    let addBtn = driver.findElement(By.css('button'));
    
    await driver.sleep(3000);

    //Send keys on movie typed in - "Spaghetti"
    await input.sendKeys('Monster Squad');

    //wait to see results from typing
    await driver.sleep(3000);

    //click add button
    await addBtn.click();
    //We are targeting the newly created element to test for deletion
    let deleteFn = await driver.findElement(By.id('MonsterSquad'));

    await driver.sleep(4000);
    //We click the targeted element to ensure it is deleted after clicking
    deleteFn.click();
    //Target the element created from the delete action, in this case, "message"
    let messageChk = await driver.findElement(By.id('message'));
    //Pause action to ensure we can see the movie being deleted from the list
    await driver.sleep(4000);
    //Test to see if the message is displayed
    await messageChk.isDisplayed();

    await driver.sleep(4000);
})