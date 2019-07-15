<template>
    <div>
        <div id="container">
            <img id="picture" src="~/assets/me.jpg" alt="Picture of me"> 
            <p id="introMessage">
                Hi. I’m a software developer with a passion for making clean, fast and modern applications. I am versed in a wide variety of technologies for both application and web development. Get in touch and we can build something together! 
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Introduction'
    }
</script>

<style scoped>
    
    #container {
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-left: 5%;
      padding-right: 5%;
    }
    
    #picture {
      grid-area: "picture";
      height: 250px;
      width: 180px;
    }

    #introMessage {
      color: black;
      font-family: "Roboto", sans-serif;
      font-size: 14;
      word-wrap: normal;
      max-width: 30em;
      min-width: 5em;
      margin-left: 2em;
      margin-right: 2em;
    }
</style>