// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default defineUserConfig({
  // 全局基础配置
  base: "/",
  lang: "zh-CN",
  title: "李沐晨的赤石冒险",
  description: "李沐晨的赤石冒险",

  // 主题配置 (必须全部包裹在 hopeTheme 中)
  theme: hopeTheme({
    // 主题专属配置
    hostname: "https://lmc.deanqwq233.top",
    author: {
      name: "deanqwq233",
      url: "https://www.deanqwq233.top",
    },
    iconAssets: "fontawesome-with-brands",
    logo: "/logo.png",
    repo: "deanqwq233/lmcdcsmx",
    docsDir: "src",
    
    // 导航系统
    navbar,
    sidebar,

    // 页脚
    footer: "deanqwq233",
    displayFooter: true,

    // 加密配置
    encrypt: {
      config: {
      },
    },

    // 页面元数据
    metaLocales: {
      editLink: "编辑此页……",
    },

    markdown: {
      hint: true,
      mark: true,
      align: true,
      spoiler: true,
      container: true,
    },

    // 插件系统 (必须在此处配置)
    plugins: {
      copyright: {
        global: true,
        disableCopy: true,
        disableSelection: true,
        author: "deanqwq233",
      },
      searchPro: {
        indexContent: true,
      },
    }
  }),  

  head: [
    // 添加一段脚本
    [
      "script",
      {},
      `\
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?e210c6bc5a108d13861157c8e94333d3";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
