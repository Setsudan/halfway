import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Routes";
import "./styles/index.css";

// Pwa code
/*
Détecte si le code sur l'appareil est le même que celui en ligne
Continue en téléchargeant le code pour le mode hors ligne
*/
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {
    alert("L'app est prête à tourner hors-ligne");
  },
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, 60 * 60 * 1000);
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
