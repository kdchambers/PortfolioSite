<template>
    <div>
        <div id="root">
            <Navigation id="navigation"></Navigation>
            <nuxt />
        </div>
		<Footer id="footer"></Footer>
  </div>
</template>

<script>
    import Navigation from '~/components/NavigationBar'
    import Footer from '~/components/Footer'
    
    export default {
        name: 'mainLayout',
        components: {
            Navigation,
            Footer
        }
    }
	
    
</script>

<style>
	
/*	body {
	 border: 4px solid yellow;
	}*/
 
	
	#root {
		min-height: calc(100vh - 80px);
	}

	body, h3, h1, h2, h4, h5, h6, p {
		margin: 0px;
		padding: 0px;
	}

	#footer {
		background-color: #22252D;    
		position: relative;
		height: 80px;
		margin-bottom: -80px;
		width: 100%;
		clear: both;
	}
    
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


</style>
