const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "development";

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "eks-demo-api",
    environment: APP_ENV
  });
});

app.get("/api/info", (req, res) => {
  res.status(200).json({
    application: "AWS EKS Platform Demo",
    version: "1.0.0",
    environment: APP_ENV
  });
});

app.get("/api/users", (req, res) => {
  res.status(200).json({
    users: [
      {
        id: 1,
        name: "Alice"
      },
      {
        id: 2,
        name: "Bob"
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
