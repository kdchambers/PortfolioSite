<template>
    <div>
        <div id="footer_root">
            <span id="contactFooterHeading">Contact</span>
            <span id="emailAddress">keithchambers@protonmail.com</span>
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
        justify-content: space-around;
        align-items: flex-start;
        
    }
    
    #contactFooterHeading {
        margin-top: 20px;
        font-size: 0.85em;
    }
    
    #footer_root > * {
        color: white;
        margin-left: 10px;
    }

    #emailAddress {
        font-size: 0.70em;
    }
</style>