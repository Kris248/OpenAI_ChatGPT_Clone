import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const app = express();
env.config();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  organization: "org-twhqZ2PH3yCKhXJkxZZmFLCb",
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

app.listen("3080", () =>
  console.log("Server listening on: http://localhost:3080")
);

// GET request
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// POST request

app.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });

    res.json({ message: response.data.choices[0].text });
  } catch (e) {
    console.log(e);
  }
});
