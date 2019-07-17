<template>
    <div>
        <div id="footer_root">
            <span id="contactFooterHeading">Contact</span>
            <span id="emailAddress">Email: keithchambers@protonmail.com</span>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Footer'
    }
</script>


<style scoped>
    
    #footer_root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-top: 20px;
    }
    
    #contactFooterHeading {
        
        font-size: 0.9em;
    }
    
    #footer_root > * {
        color: white;
        margin-left: 40px;
        font-family: "Roboto", sans-serif;
    }

    #emailAddress {
        font-size: 0.80em;
    }
</style>