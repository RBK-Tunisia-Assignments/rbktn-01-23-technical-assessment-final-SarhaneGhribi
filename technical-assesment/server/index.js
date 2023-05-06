const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors")
const rconnection=require("../server/routes/recipiesRoute")
const uconnection=require("../server/routes/usersRoute")

app.use(cors())
app.use(express.json())
app.use("/",rconnection)
app.use("/:recepie_Name",rconnection)
app.use("/users",uconnection)
// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
