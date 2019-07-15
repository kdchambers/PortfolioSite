<template>
  <div id="gridRoot">
      <Navigation id="navigation"></Navigation>
      <Introduction id="introduction"></Introduction>
      <AboutMe id="aboutMe"></AboutMe>
      <Projects id="projects"></Projects>
      <Footer id="footer"></Footer>
  </div>
</template>

<script>
    
    import Navigation from '~/components/NavigationBar'
    import Introduction from '~/components/Introduction'
    import AboutMe from '~/components/AboutMe'
    import Projects from '~/components/Projects'
    import Footer from '~/components/Footer'

    export default {
      components: {
        Navigation,
        Introduction,
        AboutMe,
        Projects,
        Footer
      }
    }
</script>

<style>
    body {
        margin: 0px;
        font-family: "Roboto", sans-serif;
    }
    
/*    body * {
         border: 1px solid yellow;
    }*/

    #gridRoot {
      display: grid;
      margin: 0px;
      grid-template-columns: 1fr;
      grid-template-rows: 4em 500px minmax(450px, auto) minmax(450px, auto) 100px;
      grid-template-areas: "headerBar" "intro" "aboutMe" "projects" "footer";
    }
    
    #navigation {
        grid-area: headerBar;
        background-color: #22252D;
    }
    
    #introduction {
      grid-area: intro;
      background-color: white;
      margin-top: 5em;
    }
    
    #aboutMe {
        grid-area: aboutMe;
        background-color: #E7E7E7;
    }
    
    #projects {
        grid-area: projects;
        background-color: white;
    }
    
    #footer {
        grid-area: footer;
        background-color: #22252D;
    }
    
</style>
