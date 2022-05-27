const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000


// midddleware 
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.nysre.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function () {
    try {
        await client.connect();
        const partsCollection = client.db('bike-mart').collection('parts');


        app.get('/parts', async (req, res) => {
            const query = {};
            const cursor = partsCollection.find(query)
        })
    }
    finally {

    }
}

app.get('/', (req, res) => {
    res.send('Anything from motor bike')
})

app.listen(port, () => {
    console.log('Hello from motor bike', port);
})