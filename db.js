import {MongoClient} from "mongodb"
import Obj from "mongodb"

const MongoURL = "mongodb+srv://sarath98:sarath98@cluster0.0gkjcmu.mongodb.net/?retryWrites=true&w=majority"
async function createConnection(){
   const client = new MongoClient(MongoURL);
    await client.connect()
    console.log("MongoDB is connected Sucessfully")
    return client
}

export var ObjectId = Obj.ObjectId;
export const client = await createConnection();