<template>
    <div>
        <nav id="nav">
            <div id="headerLogoContainer">
                <a href="#" id="headerText" class="links">Keith Chambers</a>
            </div>
            <div id="headerBarRHS">
                <a href="#" id="headerServices" class="links">Services</a> 
                <a href="#" id="headerContact" class="links">Contact</a> 
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

    #headerText {
      color: white;
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