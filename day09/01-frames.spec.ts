import { test } from "@playwright/test";

test(`Test to interact with the frames`, async ({page}) => {
    await page.goto("https://www.oneindia.com/");
    //To get the frames
    const allFrames = page.frames();
    console.log(allFrames);

    //To get the count of frames
    const frameCount = allFrames.length;
    console.log(`The total no.of frames is ${frameCount}`);
    
    for(let frame of allFrames) {
        const title = await frame.title();
        console.log(`The title of the frame is ${title}`);   
    }

    await page.waitForTimeout(3000);
})

test(`Test to handle frames using frame object`, async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml");

    //Interact with the iframe using url
    const frame = page.frame({url:"https://leafground.com/default.xhtml"});

    //Click the button
    frame?.click("#Click");
    await page.waitForTimeout(3000);
    /**
     * Conditional check
     * if(frame!===null){
     *  select the frame
     *  click the button
     * }
     * Non-null assertion operator
     * frame!.click("");
     * if()?true:false
     */

    //Using index
    const frames = page.frames();
    await frames[4].click("button#Click");
    await page.waitForTimeout(3000);
})

test.only(`Test to interact with frames using frameLocator object`, async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml");
    //Using frameLocator
    const frame = page.frameLocator("iframe").first();
    frame.locator("#Click").click();

    await page.waitForTimeout(3000);
    //Chaining
    // await page.frameLocator("iframe").first().locator("#Click").click();

    //Interact with nested frames
    const card = page.locator(".card").filter({hasText:"(Inside Nested frame)"});
    const frame_one = card.frameLocator("iframe");
    const frame_two = frame_one.frameLocator("iframe");
    await frame_two.locator("#Click").click();

    //Chaining
    // await page.locator(".card").filter({hasText:"(Inside Nested frame)"})
    // .frameLocator("iframe").frameLocator("iframe").locator("#Click").click();

    await page.waitForTimeout(3000);
})