/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://localhost:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-fo9ddrfq.us', // the auth0 domain prefix
    audience: 'image', // the audience set for the auth0 app
    clientId: '2O1bOKVaKFp37BcPIild5GqsKt6b0YiT', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
