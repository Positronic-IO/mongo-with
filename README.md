# mongo-with

A trifle, really. An implementation of scoped use for a mongo connection. See c-sharp 'using' or Python 'with'.

## Installation

```sh
npm install mongo-with
```

## Interface

```javascript
import { db } from "mongo-with";

async function main() {

	var mongo = {
		url: "mongodb://127.0.0.1:27017",
		db: "db_name"
	};

	await db.with(mongo.url, mongo.db, async (db) => {
		var labels = await db.collection(`collection_name`).find().toArray();
		console.log(labels);
	});
}

main();
```

## Source

[https://github.com/Positronic-IO/mongo-with](https://github.com/Positronic-IO/mongo-with)