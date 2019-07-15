<template>
    <div>
        <div id="footer_root">
            <h5>Contact</h5>
            <p id="emailAddress">keithchambers@protonmail.com</p>
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
      padding-left: 2em;
      padding-top: 2em;
      display: flex;
      flex-direction: column;
    }

    #footer_root * {
      color: white;
      padding: 2px;
      margin: 0px;
    }

    #emailAddress {
        font-size: 12px;
    }
</style>