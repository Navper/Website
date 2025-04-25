const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔄 Cargar el JSON de forma automática
const loadUserInfo = () => {
  const filePath = path.join(__dirname, "cristian_info.json");
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error al leer el JSON:", err.message);
    return {};
  }
};

// 🧠 Convertir JSON a texto para el contexto del modelo
const buildContextFromJson = (info) => {
  let context = `Eres CrisChat, un asistente que responde a cualquier pregunta sobre Cristian Navarro Pertegal.\n`;
  context += `CrisChat es amable, profesional y claro al responder.\n\n`;

  for (const [key, value] of Object.entries(info)) {
    if (typeof value === "string") {
      context += `${key.replace(/_/g, " ")}: ${value}\n`;
    } else if (Array.isArray(value)) {
      context += `${key.replace(/_/g, " ")}:\n- ${value.join("\n- ")}\n`;
    } else if (typeof value === "object") {
      context += `${key.replace(/_/g, " ")}:\n`;
      for (const [k, v] of Object.entries(value)) {
        context += `  - ${k}: ${v}\n`;
      }
    }
  }

  return context;
};

const headers = {
  "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
  "Content-Type": "application/json",
  "HTTP-Referer": "https://tuwebportfolio.com", // <- opcional
  "X-Title": "CrisChat"
};

// 🧠 Ruta del chatbot
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const userInfo = loadUserInfo();
  const CONTEXT = buildContextFromJson(userInfo);

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "system", content: CONTEXT },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error("OpenRouter error:", error.message);
    res.status(500).json({ reply: "Error al generar la respuesta." });
  }
});

// 🚀 Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor CrisChat (OpenRouter) activo en http://localhost:${PORT}`);
});
