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
  
	body {
		height: 100%;
	}
	
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
