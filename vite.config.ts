import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  server: {
    port: 1234,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'https://test.gnzs.ru/oauth/get-token.php',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          "X-Client-Id": "30878566",
          "Content-Type": "application/json"
        }
      },
      '/sub':  {
        target: 'https://www.amocrm.ru/oauth2/account/subdomain',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sub/, ''),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmZjEzYmE2NDMwYzZkYjViYTAzYzgxYzc2MWVmNjgyNmJmZjRiOTZhZWQ4MWFlODNkMWUwM2NiNzdkMmRiYzkxOTNhODc2Njg2NjA2NDU0In0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiIxZmYxM2JhNjQzMGM2ZGI1YmEwM2M4MWM3NjFlZjY4MjZiZmY0Yjk2YWVkODFhZTgzZDFlMDNjYjc3ZDJkYmM5MTkzYTg3NjY4NjYwNjQ1NCIsImlhdCI6MTY3Njc4NzE2MywibmJmIjoxNjc2Nzg3MTYzLCJleHAiOjE2NzY4NzM1NjMsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.aVmBXn0WZqR5smHwvxNoBAiTRTfsNTjGLrP4gAGUYp_dxfFSLTvuwbkcu584vtb7EfXmycv1YMmSXzz_GIZeWueUX9deO3TC9VARWiNoejzpCER7Jy2ZbefO3YCHfrwFJtVRZTj8Ai-zcT2sRzgTCOgjnwnB_dGy3bFyIMbd76weQ89h9gh4_oA5Hw3UXdl7WJOwgj_rUAtx_d_YVEvmDfCuFv20CMiK4xyNEqKPHdMd-XDj-CeU4cghTSn5Gq7U4aTY-63VmJY_FiVL8UYvRDmSD957PCqYJnEzH20VC1rKkV_vFwSPaLT1z2tAnGAAPG4i35PufO9zJzeT3gzQmg'}`
        }
      },
      '/full': {
        target: 'https://' + 'd6757be6f1100' + '.amocrm.ru/api/v4/contacts',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/full/, ''),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmZjEzYmE2NDMwYzZkYjViYTAzYzgxYzc2MWVmNjgyNmJmZjRiOTZhZWQ4MWFlODNkMWUwM2NiNzdkMmRiYzkxOTNhODc2Njg2NjA2NDU0In0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiIxZmYxM2JhNjQzMGM2ZGI1YmEwM2M4MWM3NjFlZjY4MjZiZmY0Yjk2YWVkODFhZTgzZDFlMDNjYjc3ZDJkYmM5MTkzYTg3NjY4NjYwNjQ1NCIsImlhdCI6MTY3Njc4NzE2MywibmJmIjoxNjc2Nzg3MTYzLCJleHAiOjE2NzY4NzM1NjMsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.aVmBXn0WZqR5smHwvxNoBAiTRTfsNTjGLrP4gAGUYp_dxfFSLTvuwbkcu584vtb7EfXmycv1YMmSXzz_GIZeWueUX9deO3TC9VARWiNoejzpCER7Jy2ZbefO3YCHfrwFJtVRZTj8Ai-zcT2sRzgTCOgjnwnB_dGy3bFyIMbd76weQ89h9gh4_oA5Hw3UXdl7WJOwgj_rUAtx_d_YVEvmDfCuFv20CMiK4xyNEqKPHdMd-XDj-CeU4cghTSn5Gq7U4aTY-63VmJY_FiVL8UYvRDmSD957PCqYJnEzH20VC1rKkV_vFwSPaLT1z2tAnGAAPG4i35PufO9zJzeT3gzQmg'}`
         }
      }
    }
  },
  define: {
    global: {
      base: "red",
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables.scss";
         `,
      },
    },
  },
});
