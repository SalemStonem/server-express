import app from "./app";
import './database'

const port = 3080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
