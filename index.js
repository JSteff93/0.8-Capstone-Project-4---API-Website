import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
const API_URL = "https://api.todoist.com/rest/v2"

const yourBearerToken = "d67ee2fb5eac469f33342ff57c89d46212487ad7";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/", async (req, res) => {
    const projects = await axios.get(API_URL + "/projects", config)

    console.log(JSON.stringify(projects.data));
    res.render("index.ejs", { projects: projects.data });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });