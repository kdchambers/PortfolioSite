<template>
    <div>
        <div id="aboutMe_root">
        <header id="aboutMeHeading">A Little About Me</header>
        <h5 id="educationHeading">Education</h5>
        <div id="educationContent" class="aboutMeContent">
            <p>BSc in Computer Science from Technical University of Dublin</p>
            <br/>
            <p>Formerly Dublin Institute of Technology (DIT)</p>
        </div>
        <h5 id="programmingLanguageHeading">Top Programming Languages</h5>
        <div id="programmingLanguageContent" class="flexList aboutMeContent">    
            <span>JavaScript</span>
            <span>HTML5 & CSS3</span>
            <span>SQL</span>
            <span>C/C++</span>
            <span>Java</span>
            <span>Zig</span>
        </div>
        <h5 id="additionalSKillsHeading">Additional Skills</h5>
        <div id="additionalSkillsContent" class="flexList aboutMeContent">
            <span>Linux</span>
            <span>UI/UX</span>
            <span>Data Oriented Design</span>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name: 'AboutMe'
    }
</script>

<style>
    
#aboutMe_root {
  display: grid;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-items: center;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 150px 60px 1fr;
  grid-template-areas: 
      ". aboutMeHeading ." 
      "educationHeading programmingLanguageHeading additionalSkillsHeading" 
      "educationContent programmingLanguageContent additionalSkillsContent";
}

@media only screen and (max-width: 600px) {
  #aboutMe {
    grid-template-columns: 1fr;
    grid-template-rows: 150px repeat(3, 60px 1fr);
    grid-template-areas: "aboutMeHeading" "educationHeading" "educationContent" "programmingLanguageHeading" "programmingLanguageContent" "additionalSkillsHeading" "additionalSkillsContent";
  }
}
    
.flexList {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.aboutMeContent {
  font-size: 14;
  font-family: "Roboto", sans-serif;
  max-width: 20em;
}

#aboutMeHeading {
  grid-area: aboutMeHeading;
  padding-top: 3em;
  font-size: 18;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}

#educationHeading {
  grid-area: educationHeading;
}

#educationContent {
  grid-area: educationContent;
  padding-top: 20px;
  text-align: center;
}

#programmingLanguageHeading {
  grid-area: programmingLanguageHeading;
}

#programmingLanguageContent {
  grid-area: programmingLanguageContent;
  padding-top: 20px;
}

#additionalSKillsHeading {
  grid-area: additionalSkillsHeading;
}

#additionalSkillsContent {
  grid-area: additionalSkillsContent;
  padding-top: 20px;
}
    
</style>