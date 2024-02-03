# este proyecto fue iniciado desde cero con VanillaJS
# configuraremos desde cero

# pasos: 

1 - instalar el plugin de react de vite
 - npm install @vitejs/plugin-react

2 - instalar las dependencias React y React-dom
 - npm install react react-dom

3 - crear el archivo config de vite y colocamos el siguiente codigo
 - vite.config.js
 import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react";
 export default defineConfig({plugins: [react()]});

4 - crear el punto de entrada de la aplicacion
    import {createRoot} from "react-dom/client";

    import App from "./App";

    const root = createRoot(document.querySelector("#root"));

    root.render
    (
        <App/>
    )