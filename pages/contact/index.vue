<template>
    <div>
        <div id="contactRoot">
            <div id="leftColumn">
                <div id="email" class="uk-margin">
                    <h5>Email: </h5><span>keithchambers@protonmail.com</span>
                </div>
                <div id="phoneNum">
                    <h5>Phone: </h5><span>(+353) 87 1702091</span>
                </div>
                <div id="links">
                    <a href=http://github.com/keith-chambers>
                        <img src="~/assets/GitHub-Mark-Light-32px.png" alt="Github" class="socialLink" />
                    </a>
                    <a href=http://github.com/keith-chambers >
                        <img src="~~/assets/GitHub-Mark-Light-32px.png" alt="Github" class="socialLink" />
                    </a>
                </div>
            </div>
            <div id="rightColumn">
                <form id="inputForm">
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
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'main'
    }
</script>

<style scoped>
    
    .socialLink {
        height: 64px;
        width: 64px;
    }
    
    #contactRoot {
        display: flex;
        margin-left: 10vw;
        margin-right: 10vw;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-around;
        
        margin-top: 10vw;
    }
    
    #leftColumn {
        min-width: 400px;
    }
    
    #rightColumn {
        min-width: 400px;
    }
    
</style>