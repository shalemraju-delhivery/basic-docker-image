import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT;

/**
 * Express.js security middleware with HTTP headers
 * https://helmetjs.github.io/
 */
app.use(helmet());

/**
 * Enable CORS
 * https://expressjs.com/en/resources/middleware/cors.html#enabling-cors-pre-flight
 */
app.use(cors());

/**
 * Middleware for parsing and using JSON data inside request body.
 */
app.use(bodyParser.json());

app.get("/active", async(req:any, res:any) => {
	return res.status(200).json({resp: "ok"});
});

app.listen(port, () => {
	console.log(`server started at ${port}`);
});

//TODO: add readme
