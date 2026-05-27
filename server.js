import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/protected", (req, res) => {

    const password = req.body.password;

    if (password !== process.env.PAGE_PASSWORD) {
        return res.status(401).send("密碼錯誤");
    }

    const protectedPath =
        path.join(__dirname, "private", "protected.html");

    const html =
        fs.readFileSync(protectedPath, "utf8");

    res.send(html);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
