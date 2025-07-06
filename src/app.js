import express from "express";
import cors from "cors";
import morgan from "morgan";
import routesProducts from './routes/products.routes.js'


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use('/', routesProducts)

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API!");
});

export default app;