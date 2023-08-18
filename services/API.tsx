
// get URL variable from env file
const API_URL = process.env.API_URL;
/**
 * 
 * @param {String} url End Point of the API
 * @param {String} token Bearer Token
 * @returns {Object}
 */
export const MakeGetRequest = ( endpoint: any ) =>
{
      return fetch( '/api' + endpoint, {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json',
            }
      } )
            .then( response =>
            {
                  if ( response.status === 401 ) {
                        return "Unauthorized User";
                  }
                  return response.json();
            } )
            .catch( error =>
            {
                  throw error;
            } );
};

/**
 * 
 * @param {*} url End Point of the API
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const MakePostRequest = ( endpoint: any, data: any ) =>
{
      return fetch( '/api' + endpoint, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify( data )
      } )
            .then( response =>
            {
                  if ( response.status === 401 ) {
                        return "Unauthorized User";
                  }
                  return response.json();
            } )
            .catch( error =>
            {
                  throw error;
            } );
};