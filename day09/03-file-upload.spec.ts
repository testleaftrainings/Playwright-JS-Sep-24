import { expect, test } from "@playwright/test";
import path from "path";

test(`Test to upload file`, async ({page}) => {
    await page.goto("https://leafground.com/file.xhtml");
    //Directly upload the file to that particular location
    await page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator("input[type='file']").setInputFiles([path.join(__dirname, "01-Primitive-Datatypes.pdf")]);

    await expect(page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator(".ui-fileupload-filename")).toContainText("01-Primitive-Datatypes.pdf 280.1 KB")

    await page.waitForTimeout(3000);
})

test.only(`Test to upload files using fileChooser`, async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePromise = page.waitForEvent('filechooser');
    await page.click("#drag-drop-upload");
    const fileChooser = await filePromise;
    await fileChooser.setFiles([path.join(__dirname, "01-Primitive-Datatypes.pdf")]);

    await expect(page.locator("#drag-drop-upload")).toHaveClass("dz-filename");
})