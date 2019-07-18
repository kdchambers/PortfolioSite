<template>
<div>
    <div id="appDevRoot">
        <div id="topSectionContainer">
            <div id=appDevHeadingContainer>
                <h1 id="appDevHeading">APP DEVELOPMENT</h1>
            </div>
            <p id="appDevIntro">Commission powerful native desktop applications for Linux and Windows. Create something unique and innovative or simply automate tedious tasks. </p> 
        </div>
        <div class="bottomColumn" id="bottomColumnLeft"></div>
        <div id="bottomSection">
            <div id="technologies">
                <div class="textBlock">
                    <h5>Core Languages (By Experience Level)</h5>
                    <ul>
                        <li>C/C++</li>
                        <li>Zig</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div class="textBlock">
                    <h5>UI Technologies</h5>
                    <ul>
                        <li>Dear ImGui</li>
                        <li>Qt (QML)</li>
                    </ul>
                </div>
                <div class="textBlock">
                    <h5>Persistence</h5>
                    <ul>
                        <li>Sqlite (C)</li>
                        <li>RapidJSON</li>
                    </ul>
                </div>
                <div class="textBlock">
                    <h5>Dev Tools</h5>
                    <ul>
                        <li>CMake / Make</li>
                        <li>Git / Github</li>
                        <li>Catch2 (Test framework)</li>
                    </ul>
                </div>
                <div class="textBlock">
                    <h5>Speciality</h5>
                    <ul>
                        <li>Data-oriented / performance driven design</li>
                    </ul>
                </div>

                <span id="addedNote"><strong>*Not Exhaustive and can learn new technologies if required*</strong></span>
            </div>
            <!--<form id="inputForm">
                <fieldset class="uk-fieldset">
                    <h5>Get In Touch</h5>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Email Address">
                    </div>
                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="What are you interested in?"></textarea>
                    </div>
                    <button class="uk-button uk-button-secondary uk-button-small">Submit</button>
                </fieldset>
            </form>-->
        </div>
        <div class="bottomColumn" id="bottomColumnRight"></div>
    </div>
</div>

</template>

<script>

    export default {
        layout: 'main'
    }

</script>

<style scoped>
    
    body * {
        /*border: 1px solid red;*/
    }
    
    h5 {
        font-weight: 600;
    }
    
    ul {
        list-style: none;
    }
    
    #addedNote {
        font-size: 11px;
    }

    #bottomColumnLeft {
        grid-area: bcl;
        background-color: #F0F0F0;
    }
    
    #bottomColumnRight {
        grid-area: bcr;
        background-color: #F0F0F0;
    }
    
    #appDevRoot {
        display: grid;
        margin-top: 80px;
        grid-template-columns: 1fr minmax(min-content, 1200px) 1fr;
        grid-template-areas: 
            ". topSection ."
            ". bottomSection .";
    }
    
    #inputForm {
        margin-left: 15vw;
        max-width: 20vw;
        min-width: 300px;
        margin-top: 80px;
    }
    
    #topSectionContainer {
        grid-area: topSection;
        
        display: grid;
        grid-template-columns: 1fr 4fr;
        align-items: stretch;
        grid-template-areas: 
            "heading intro";
    }
    
    @media only screen and (max-width: 600px) {
        #topSectionContainer {
            grid-template-columns: 1fr;
            grid-template-areas: 
                "heading"
                "intro";
        }
    }
    
    #bottomSection {
        grid-area: bottomSection;
        margin-top: 5vw;
        margin-bottom: 4vw;
        margin-left: 30px;
        
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        
        padding-bottom: 80px;
        
    }
    
    #appDevHeading {
        font-size: 40px;
        font-weight: 700;
    }
    
    #appDevHeadingContainer {
        grid-area: heading;
        margin-left: 30px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #appDevIntro {
        grid-area: intro;
        
        min-width: 200px;
        max-width: 700px;
        margin-right: 30px;
        margin-left: 30px;
        
        font-size: 22px;
        
        justify-self: end;
        align-self: center;
    }

    .textBlock, h5 {
        font-size: 14px;
    }
    
</style>