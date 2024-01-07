import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/language.routes";

const app = express();

// Settings
app.set("port", 8057);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/datos", languageRoutes);


export default app;