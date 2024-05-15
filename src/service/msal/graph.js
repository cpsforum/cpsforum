import { graphConfig } from "@/service/msal/authConfig";
import { getToken } from "@/service/msal/msal";

export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function callMsGraphPhoto(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphProfilePicEndpoint, options)
        .catch(error => console.log(error));
}

export async function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    const token = await getToken();
    const graphData = await callMsGraph(token);
    const photoResponse = await callMsGraphPhoto(token);
    const blob = await photoResponse.blob();
    const url = URL.createObjectURL(blob);

    return { graphData, url };
}