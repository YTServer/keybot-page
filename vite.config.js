import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl({
      /** name of certification */
      name: 'test',
      /** custom trust domains */
      domains: ['*.whitey.me'],
      /** custom certification directory */
      certDir: './.devServer/cert',
    }),
  ],
  server: {
    host: 'local.whitey.me',
    https: true,
  },
});
