'use server'

import { getClientAuthToken } from "@cord-sdk/server";

export async function getCordClientAuthToken(userData) {
    const { CORD_SECRET, CORD_PROJECT_ID } = process.env;
    const user = {
        // The user ID can be any identifier that makes sense to your application.
        // As long as it's unique per-user, Cord can use it to represent your user.
        user_id: userData.id,
    
        // By supplying the  `user_details` object, you can create the user in
        // Cord's backend on-the-fly. No need to pre-sync your users.
        user_details: {
          email: userData.mail,
          name: userData.displayName,
          profilePictureURL: "https://cdn.cpsforum.com.br/avatars/eric.png",
        },
      }
    const clientAuthToken = getClientAuthToken(CORD_PROJECT_ID, CORD_SECRET, {
      ...user,
    });
    return {
        clientAuthToken
    };
}