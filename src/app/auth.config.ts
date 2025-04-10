import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: 'window.location.origin',
    clientId: '1871100963-j2cev9pjr077bo2adp14jqqhma7inkt7.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}