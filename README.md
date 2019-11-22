# mongo-with

A trifle, really. An implementation of scoped use for a mongo connection. See c-sharp 'using' or Python 'with'.

## Installation

```sh
npm install mongo-with
```

## Interface

```javascript
import * as muse from "mongo-with";

var mongo = {
    url: "mongodb://127.0.0.1:27017",
    db: "test_db"
};

let with (func) => muse.db.use(mongo.url, mongo.db, func)

with(async (db) => { // db connection is opened
    var array = await db.collection('test_collection').find().toArray();
    console.log(array);
}); // db connection is closed. no leaks.

```

## Source

[https://github.com/Positronic-IO/mongo-with](https://github.com/Positronic-IO/mongo-with)