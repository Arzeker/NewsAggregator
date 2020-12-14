const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<head>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport"
        content="width=device-width, initial-scale=1"
        charset="UTF-8">
    </head>
<body>
<div id="app"></div>
</body>

<script src=
"https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.development.js"
></script>
<script src=
"https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.development.js"
></script>

<script src="https://unpkg.com/babel-standalone/babel.js"></script>
<script src="https://unpkg.com/babel-plugin-transform-vue-jsx"></script>
<script>
Babel.registerPlugin('transform-vue-jsx',window['babel-plugin-transform-vue-jsx']);
</script>
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<script src ="js/NewsModel.js"></script>
<script src="js/apiConfig.js"></script>
<script src="js/newsSource.js"></script>

<script src="vuejs/sidebar.js"></script>

<script src="js/views/sidebarView.js" type="text/jsx"  
                      data-plugins="transform-vue-jsx" data-presets="es2016">
</script>
<script src="js/views/promiseNoData.js" type="text/jsx"  
    data-plugins="transform-vue-jsx" data-presets="es2016">
</script> 
<script src="js/app.js" type="text/jsx" 
                     data-plugins="transform-vue-jsx" data-presets="es2016">
</script>
<script type="text/jsx" data-plugins="transform-vue-jsx" data-presets="es2016">
    const model = new NewsModel();
    new Vue({
       data(){ return {model}; },
       render(h){return App({model:this.model, h})}
    }).$mount("#app");
</script>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});