import { expect, test } from "@playwright/test";
import path from "path";

test(`Test to download file`, async ({page}) => {
    await page.goto("https://leafground.com/file.xhtml");
    const fileDownloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Download'}).click();
    const fileDownloader = await fileDownloadPromise;
    //Content-Disposition: attachment; filename="Testleaf Logo.png"
    await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()))
    //extract and return the suggested filename from the Content-Disposition header
    const downloadUrl = fileDownloader.url();
    console.log(`The file is downloaded from: ${downloadUrl}`);    
})  