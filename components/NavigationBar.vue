<template>
    <div>
        <nav id="nav">
            <div id="headerLogoContainer">
                <nuxt-link to="/" id="headerText" class="links"><span id="title">KEITH CHAMBERS</span></nuxt-link>
            </div>
            <div id="headerBarRHS">
                <a href="#" id="headerServices" class="links">Services</a> 
                <div uk-dropdown delay-hide="100">
                    <ul class="uk-nav uk-dropdown-nav">
                        <li><nuxt-link to="/webdevelopment">Web Development</nuxt-link></li>
                        <li><nuxt-link to="/appdevelopment">App Development</nuxt-link></li>
                    </ul>
                </div>
                <nuxt-link to="/contact" id="headerContact" class="links">Contact</nuxt-link>
                <a href=http://github.com/keith-chambers id="headerGithub">
                    <img src="~/assets/GitHub-Mark-Light-32px.png" alt="Github" />
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style scoped>
    
    #nav {
        background-color: #22252D;
        
        display: grid;
        grid-template-columns: minmax(10em, 15em) minmax(0px, 1fr) 0.35fr;
        grid-template-rows: 1fr;
        grid-template-areas: "logo . headerRHS";
    }

    #headerBarRHS {
      grid-area: headerRHS;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
    }

    .links {
      text-decoration: none;
    }
    
    #title {
        color: white;
        font-size: 20px;
        font-weight: 100;
        font-family: "Roboto", sans-serif;
    }

    #headerLogoContainer {
      grid-area: logo;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #headerServices, #headerContact, #headerGithub {
      color: white;
      padding: 1em;
    }
</style>