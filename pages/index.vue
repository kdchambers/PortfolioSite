<template>
  <div id="gridRoot">
      <Introduction id="introduction"></Introduction>
      <AboutMe id="aboutMe"></AboutMe>
  </div>
</template>

<script>
    
    import Introduction from '~/components/Introduction'
    import AboutMe from '~/components/AboutMe'

    export default {
        layout: 'main',
        components: {
            Introduction,
            AboutMe
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
      grid-template-rows: minmax(min-content, auto) minmax(600px, auto);
      grid-template-areas: "intro" "aboutMe";
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
    
</style>
