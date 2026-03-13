import express from "express";
import path from "path";

const app = express();

const port = 1563;

const _dirname = import.meta.dirname;
console.log(_dirname);

app.use(express.static(path.join(_dirname, "public")));

app.get("/contact", (req, res) => {
  res.sendFile(path.join(_dirname, "public/contact.html"));
});

// Quinn was showing us something cool, we ran out of time :face_holding_back_tears:
// app.get("*", (req, res) => {
//   res.send("404");
// });

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
