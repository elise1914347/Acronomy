import  express  from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./src/routes/index";
import cors from "cors"
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/",routes)

const dbUrl = process.env.DATABASE_URL;
mongoose.connect(dbUrl, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{console.log("Database connected successfully")})
const port = process.env.PORT || 4045;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});

export default app;