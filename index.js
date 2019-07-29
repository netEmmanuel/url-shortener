const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to database
connectDB();

app.use(express.json({ extended: false }));

//define URLS
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
