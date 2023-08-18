import mongoose from 'mongoose';

const uri: string = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

let cachedConnection: any = null;

export async function connectToDatabase ()
{
      if ( cachedConnection ) {
            return cachedConnection;
      }
      const connection = mongoose.connect( uri, {} ).then( (res) =>
      {
            console.log( "DataBase connected successfully..." );
            console.log( "🚀App is running ... \n" );
            console.log( "Press CTRL + C to stop the process. \n" );
      } ).catch( err =>
      {
            console.error( "App starting error:", err.message );
      } );

      cachedConnection = mongoose.connection;
      return connection;
}
