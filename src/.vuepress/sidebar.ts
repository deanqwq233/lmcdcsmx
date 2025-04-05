import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "李沐晨的赤石冒险",
      icon: "laptop-code",
      prefix: "word/",
      link: "word/",
      children: "structure",
    },
  ],
});
