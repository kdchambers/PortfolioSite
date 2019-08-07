let express = require('express');

const httpServer = express();

httpServer.get('/test', function(req, res) {
	res.send({success:true});
});

export default {
  mode: 'universal',
  head: {
    title: 'Keith Chambers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'}
    ]
  },
  loading: { color: '#fff' },
  css: [
      'uikit/dist/css/uikit.css'
  ],
  plugins: [
      { src: '~/plugins/uikit', ssr: false }
  ],
  modules: [
    // '@nuxtjs/eslint-module'
  ],
  build: {
    extend(config, ctx) {
    }
  },
  serverMiddleware: [
    '~/api/index.js'
  ]
}
