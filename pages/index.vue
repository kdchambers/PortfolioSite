<template>
  <div id="gridRoot">
      <Introduction id="introduction"></Introduction>
      <AboutMe id="aboutMe"></AboutMe>
      <Projects id="projects"></Projects>
  </div>
</template>

<script>
    
    import Introduction from '~/components/Introduction'
    import AboutMe from '~/components/AboutMe'
    import Projects from '~/components/Projects'

    export default {
        layout: 'main',
        components: {
            Introduction,
            AboutMe,
            Projects
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
      grid-template-rows: 500px minmax(450px, auto) minmax(450px, auto);
      grid-template-areas: "intro" "aboutMe" "projects";
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
    
</style>
