import axios from "axios";

const url = "https://project-practise.atlassian.net/rest/api/2/issue/";
const username = "subraja.sivathanu@qeagle.com";
//const apiKey = "ATATT3xFfGF0i5dGAU7SpeJ2xe2djFgyCvDwTx-7gEEl5iPShM_kpTRh4V7lg4qnsJzMEIfVh8w0kO9tPHQ29WKgH0lv3e0bFLXu4t9kRMob9BjLt7TLz7YxYT5JA6PnQDIGu9ori2tABQA4hMyBjG_tWCuzSDP6YTvAchpWec647BT5qE_LhdY=68BE7567";
const projectId = "SAL";

async function createJiraIssue(summary:string, description:string) {
    const issueRequestJson = {
        "fields": {
            "project": {
                "key": projectId
            },
            "summary": summary,
            "description": description,
            "issuetype": {
                "name": "Bug"
            }
    }
}
    //Send the Post request
    await axios.post(url, issueRequestJson, {
        // auth: {
        //     username: username,
        //     password: apiKey
        // },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(`The API request is successful`);  
}

export {createJiraIssue}