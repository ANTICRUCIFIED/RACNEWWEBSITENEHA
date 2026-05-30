var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  let aiClient = null;
  const getGoogleGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined. Please ensure your API key has been added in the Settings > Secrets panel of your AI Studio visual environment.");
    }
    if (!aiClient) {
      aiClient = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
    }
    return aiClient;
  };
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userMessage } = req.body;
      const ai = getGoogleGenAI();
      let startIndex = 0;
      while (startIndex < messages.length && messages[startIndex].role === "model") {
        startIndex++;
      }
      const contents = messages.slice(startIndex).map((m) => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      contents.push({ role: "user", parts: [{ text: userMessage }] });
      const modelConfig = {
        config: {
          systemInstruction: "You are a highly expert Medical Device Regulatory Consultant for RAC Forge Pvt. Ltd. Your goal is to provide accurate, professional, and helpful advice regarding CDSCO (India), USFDA (USA), and EU MDR (Europe) regulations. Be concise but thorough. Always maintain a professional tone."
        },
        contents
      };
      let result;
      try {
        result = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          ...modelConfig
        });
      } catch (primaryError) {
        console.warn("Primary model gemini-3.5-flash failed, attempting fallback to gemini-flash-latest...", primaryError);
        try {
          result = await ai.models.generateContent({
            model: "gemini-flash-latest",
            ...modelConfig
          });
        } catch (secondaryError) {
          console.error("Secondary model fallback failed as well:", secondaryError);
          throw new Error(`Gemini API Error: ${primaryError.message || primaryError}`);
        }
      }
      res.json({ text: result.text });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to generate response", details: error.message || String(error) });
    }
  });
  app.post("/api/generate-image", async (req, res) => {
    try {
      const { prompt, size } = req.body;
      const ai = getGoogleGenAI();
      const modelConfig = {
        contents: {
          parts: [
            {
              text: `Generate a professional, high-quality technical illustration or diagram for a medical device regulatory context. Subject: ${prompt}`
            }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: size || "1K"
          }
        }
      };
      let result;
      try {
        result = await ai.models.generateContent({
          model: "gemini-3-pro-image-preview",
          ...modelConfig
        });
      } catch (primaryError) {
        console.warn("Primary image model gemini-3-pro-image-preview failed, attempting fallback to gemini-2.5-flash-image...", primaryError);
        try {
          result = await ai.models.generateContent({
            model: "gemini-2.5-flash-image",
            ...modelConfig
          });
        } catch (secondaryError) {
          console.error("Image model fallback failed:", secondaryError);
          throw new Error(`Image API Error: ${primaryError.message || primaryError}`);
        }
      }
      const imagePart = result.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
      if (imagePart?.inlineData?.data) {
        res.json({ base64: imagePart.inlineData.data });
      } else {
        res.status(400).json({ error: "No image was generated. Please try a different prompt." });
      }
    } catch (error) {
      console.error("Image API Error:", error);
      res.status(500).json({ error: "Failed to generate image", details: error.message || String(error) });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.get("/sitemap.xml", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "sitemap.xml"));
    });
    app.get("/robots.txt", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "robots.txt"));
    });
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
