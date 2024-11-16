import { test } from "../custom-fixtures/salesforce";
import { readJsonFile } from "../data-utils/jsonUtils";
import path from "path";

test(`Test to login functionality`, async ({login}) => {
    const filePath = path.resolve(__dirname, "../auth-helpers/login-salesforce.json")
    const credentials = await readJsonFile(filePath);
    const {username, password} = credentials;
    await login.doLogin(username, password);
})
