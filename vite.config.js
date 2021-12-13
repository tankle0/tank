import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport(
      {
        libs:[
          {
            libraryName:'vant',
            esModule:true,
            resolveStyle:(name) => `../es/${name}/style`
          }
        ]
      }
    )
  ],
  base: process.env.NODE_ENV === 'production' ? '/tank/' : '/',
  server:{
    open:true,
    port: 8080,
    host:'0.0.0.0',
    proxy:{
      '/eam':{
        target:'http://103.113.6.179:8086',
        changeOrigin:true,
        // rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "src"),
    }
  },
  build:{
    rollupOptions: {
      // plugins: [dynamicImportVars()],  //https://github.com/orca-studio/vue-template/tree/vite-3.X
      output: {
        assetFileNames: (AssetInfo)=>{
          if(/\.(png|jpg|gif)$/.test(AssetInfo.name)){
            return 'img/[name].[hash].[ext]'
          }else if(/\.(ttf|woff)$/.test(AssetInfo.name)){
            return 'font/[name].[hash].[ext]'
          }else{
            return '[ext]/[name].[hash].[ext]'
          }
        },
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js'
      }
    }
  }
})
