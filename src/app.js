import express from "express";
import userRouter from "./routes/userRoutes";
import accountRoutes from './routes/accountsRoutes'
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({message: "Hello World!"});
});

app.use('/api', userRouter);
app.use("/api", accountRoutes);

export default app