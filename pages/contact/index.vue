<template>
    <div>
        <div id="contactRoot">
            <div id="leftColumn">
                <div id="email" class="uk-margin">
                    <h5>Email: </h5><span>keithchambers@protonmail.com</span>
                </div>
                <div id="phoneNum">
                    <h5>Phone: </h5><span>(+353) 83 1249721</span>
                </div>
                <div id="links">
                    <a href=http://github.com/keith-chambers>
                        <img src="~/assets/GitHub-Mark-32px.png" alt="Github" class="socialLink" />
                    </a>
                    <a href=https://www.linkedin.com/in/keithdchambers/ >
                        <img src="~~/assets/LI-In-Bug.png" alt="Github" id="linkedinLink" />
                    </a>
                </div>
            </div>
            <div id="rightColumn">
                <form id="inputForm" v-on:submit="sendFormReq()" v-on:submit.prevent entype="text/plain">
                    <fieldset class="uk-fieldset">
                        <h5>Get In Touch</h5>
                        <div class="uk-margin">
                            <input id="client-email" class="uk-input" type="text" placeholder="Email Address" v-model="clientEmail">
                        </div>
                        <div class="uk-margin">
                            <textarea id="client-message" class="uk-textarea" rows="5"  v-model="clientMessage" placeholder="What are you interested in?"></textarea>
                        </div>
                        <button type="submit" class="uk-button uk-button-secondary uk-button-small">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
	
    export default {
        layout: 'main',
		data(){ 
		  return {
			clientEmail: '',
			clientMessage: ''
		}},
		methods: {
			sendFormReq() {
				let axios = require('axios');
				const serverDomain = 'http://localhost:3000';

				const type = 'Get In Touch';
				const fromEmail = this.clientEmail;
				const clientMessage = this.clientMessage;

				const formData = {
					type: type,
					emailaddress: fromEmail,
					content: clientMessage
				};

				axios.post(serverDomain + "/submitform", formData)
				.then(function (response) {
				  console.log("Success");
				}).catch(function (error) {
				  console.log("Error:" + error);
				});
				
				this.clientMessage = '';
				this.clientEmail = '';
			}
		}
    }
</script>

<style scoped>
    
    .socialLink {
        height: 32px;
        width: 32px;
        
        margin-top: 80px;
        margin-right: 30px;
    }
    
    #linkedinLink {
        height: 32px;
        width: 36px;
        margin-top: 80px;
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