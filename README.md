# pyr.sh React Quiz

Cat Corp has contracted out pyr.sh to deliver a dating platform for cats. Another team delivered a GraphQL backend with support for logging in using CatHub accounts through an [OAuth2 Authorization flow](https://auth0.com/docs/flows/authorization-code-flow). Now it's time to begin work on the user interface!

Your task is to complete the integration of the OAuth2 flow on the client-side. You can use any JS library that you'd like. It has to support the following features:

1. The authentication state must be stored in Redux.
1. The auth token should persist across reloads, preferably in local storage.
1. The user's details should be retrieved from the API once the page loads with an already persisted token. This should validate the token's validitdy.
1. The access token should be automatically refreshed one hour before its expiry time.
1. Any access to the site must be blocked if the user is not authenticated. In that scenario, the user must be redirected to the sign in page. Additionally, logged out users should not be able to view the auth pages.
1. The sign in page must trigger an OAuth2 Authorization flow on CatHub. The callback page should handle its completion. The `csrf` value should be compared against the `state` value in the callback.
1. Once the user is logged in, they must be able to see their own profile's details - their name and their profile picture. There should also be a working log out button.
1. The [GraphQL API](https://react-quiz.jobs.pyr.sh/graphiql) client should use the auth token from Redux as soon as it's available.

The GraphQL mutations accept a `redirectURI` argument - this should be the URL of the OAuth2 callback. `http://localhost:[3000-3003]/oauth2/callback` are supported.

The authentication flow is as following:
1. Website calls `initAuth` - server responds with an authorization URL and a CSRF token.
2. Client goes to the authorization URL, completes the flow.
3. Website calls `exchangeForToken`, exchanging the authorization code for an auth token and a refresh token.
4. Later, when the token is about to expire, the website calls `refreshToken`, passing the refresh token and acquiring a fresh access token.

All the secret credentials and constants are hardcoded in the boilerplate. You can use the publicly exposed [GraphiQL endpoint](https://react-quiz.jobs.pyr.sh/graphiql) to test the queries and mutations. Authentication is handled by using the retrieved token's ID as a `Bearer` token in an `Authorization` header.

Good luck!
# react-quiz-frontend-challenge
