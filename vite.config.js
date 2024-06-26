export default {
  server: { port: 3000 },
  base: "./",
  build: { target: "esnext" },
  optimizeDeps: { esbuildOptions: { target: "esnext" } },
};
