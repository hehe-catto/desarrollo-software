import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
    baseURL: process.env.APP_BASE_URL,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: process.env.AUTH0_SECRET,
    authorizationParameters: {
        audience: process.env.AUTH0_AUDIENCE,
    },
});
