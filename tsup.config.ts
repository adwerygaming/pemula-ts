import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/**/*.ts'],
    outDir: 'dist',
    format: ['esm'],
    sourcemap: false,
    dts: false,
    clean: true
});
