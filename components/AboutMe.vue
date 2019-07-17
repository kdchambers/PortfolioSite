<template>
    <div>
        <div id="aboutMe_root">
            <header id="heading">ABOUT ME</header>
            <div id="contentContainer">
                <div class="aboutMeInfoColumn" id="edu">
                    <h5 class="aboutMeInfoHeading">EDUCATION</h5>
                    <ul class="aboutMeInfoList">
                        <li>BSc in Computer Science from Technical University of Dublin</li>
                        <li><br/></li>
                        <li>(Formerly DIT Kevin St)</li>
                    </ul>
                </div>
                <div class="aboutMeInfoColumn" id="skills">
                    <h5 class="aboutMeInfoHeading">SKILLS</h5>
                    <ul class="aboutMeInfoList">
                        <li>Web Developement</li>
                        <li>Linux / Windows App Development</li>
                        <li>UI Design</li>
                    </ul>
                </div>
                <div class="aboutMeInfoColumn" id="projects">
                    <h5 class="aboutMeInfoHeading">PROJECTS</h5>
                    <ul class="aboutMeInfoList">
                        <li>C++ Transpiler (C++)</li>
                        <li>3D Terrain Generator (Unity)</li>
                        <li>Money Management App (Android)</li>
                        <li>Auction System Server (Java)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutMe'
    }
</script>

<style scoped>
    
    #aboutMe_root {
        display: grid;
        grid-template-columns: 1fr minmax(min-content, 1000px) 1fr;
        grid-template-areas: 
            ". heading ."
            ". content .";
    }
    
    #aboutMe_root * {
/*        border: 1px solid yellow;*/
    }

    #contentContainer {
        grid-area: content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }
    
    h5, ul, li {
        margin: 0px;
        padding: 0px;
    }
    
    .aboutMeInfoList > li{
        list-style: none;
        text-align: center;
    }
    
    .aboutMeInfoHeading {
        margin-bottom: 50px;
        font-family: "Roboto", sans-serif;
        
    }
    
    .aboutMeInfoColumn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 5px;
        
        width: 300px;
        margin-bottom: 50px;
    }

    .aboutMeInfoColumn * {
        font-size: 14;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    #heading {
        grid-area: heading;
        padding-bottom: 80px;
        padding-top: 80px;
        text-align: center;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: black;
    }


    
</style>