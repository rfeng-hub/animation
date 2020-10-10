/*
 * @Author: ranfeng
 * @LastEditors: ranfeng
 * @Description: 
 * @Date: 2020-10-10 10:14:00
 * @LastEditTime: 2020-10-10 10:16:38
 * @FilePath: \帧动画\webpack.config.js
 */
module.exports = {
  entry: {
    animation: './src/animation.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    library: 'animation',
    libraryTarget: 'umd'
  }
}