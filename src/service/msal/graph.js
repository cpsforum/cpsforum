import { graphConfig } from "@/service/msal/authConfig";

export async function callMsGraph(response) {
    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => console.log(response.json()))
        .catch(error => console.log(error));
}