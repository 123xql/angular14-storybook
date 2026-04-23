module.exports = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  core: {
    builder: 'webpack5'
  }
};