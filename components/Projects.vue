<template>
    <div>
        <div id="projects_root">
            <h3 id=projectHeader>Projects</h3>
            <div id=projectsContainer>
                <div class="projectContainer">
                    <h5>Anagami</h5>
                    <p>blah baoh</p>
                </div>
                <div class="projectContainer">
                    <h5>Saiko</h5>
                    <p>blah baoh</p>
                </div>
                <div class="projectContainer">
                    <h5>Portfolio site</h5>
                    <p>blah baoh</p>
                </div>

                <div class="projectContainer">
                    <h5>Library Catalog System</h5>
                    <p>Built using PHP</p>
                </div>            
                <div class="projectContainer">
                    <h5>Tracker Game</h5>
                    <p>blah baoh</p>
                </div>
                <div class="projectContainer">
                    <h5>Terrain Generator</h5>
                    <p>Terrain Generator built using Unity and Perlin Noise.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Projects'
    }

</script>

<style>

#projects_root {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5em 1fr;
  grid-template-areas: "projectHeader" "projectContent";
}

#projectHeader {
  grid-area: projectHeader;
  justify-self: center;
  align-self: center;
  font-family: "Roboto", sans-serif;
}

#projectsContainer {
  grid-area: projectContent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  align-content: center;
  padding: 20px;
}

#projects p {
  font-size: 14;
}

.projectContainer {
  width: 22em;
  height: 14em;
  border: 1px solid black;
  margin: 1.5em;
  text-align: center;
}
    
</style>