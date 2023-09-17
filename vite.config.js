import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/KC_task4_Task-Manager_UseReducer/",
  plugins: [react(), tailwindcss()],
});
