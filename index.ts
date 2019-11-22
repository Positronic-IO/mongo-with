import * as mongodb from 'mongodb';

class db {
    // make a connection, do a thing, close the connection. no leaks.
    static async with(url, name, func) {
        const conn = await mongodb.MongoClient.connect(
            url, { 
                useUnifiedTopology: true, 
                useNewUrlParser: true 
            }
        );
        const db = conn.db(name);
        const retval =  await func(db);
        conn.close();
        return retval;
    }
}

export { db }