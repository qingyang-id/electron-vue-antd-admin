module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // ant-design-vue按需加载配置
    ['import', {
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: true
    }]
  ]
}
