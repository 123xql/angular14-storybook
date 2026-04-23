export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // 这个选项是关键：强制 Docs 页面使用内联框架来渲染故事
    // 而不是使用一个独立的 iframe
    inlineStories: true,
  },
};