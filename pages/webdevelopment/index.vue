<template>
<div>
    <div id="webDevRoot">
        <div id="topSection">
            <h1 id="webDevHeading">WEB DEVELOPMENT</h1>
            <p id="webDevIntro">Whether a simple portfolio site or a more complicated web application,  I can build a custom-tailored, robust and lightweight solution for you using cutting edge, modern web technologies.</p> 
        </div>
        <div id="benefitsContainer">
            <div class="textBlock" id="fromScratch">
                <h5>Custom Websites</h5>
                <span>Unlike many web developers, I don’t rely on large CSS frameworks (Like Bootstrap)  to develop websites quickly. All websites are buillt from scratch and can be customised to any degree to suit the client’s specific needs and reflect genuine charactor. </span>
            </div>
            <div class="textBlock" id="seo">
                <h5>Search Engine Optimization (SEO)</h5>
                <span>This is a big concern for many business’ that rely on their websites for potential customer leads. Using descriptive HTML5 helps web crawlers identify and understand the structure of your website, but that isn’t enough. 

                Along side that, I can deploy any built website using server-side rendering which pre-renders a site fully the first time it is requested by the client. This is beneficial as web crawlers only analyse static websites, so web pages that require a lot of javascript to download additional content can be almost empty from an SEO point of view!</span>
            </div>
            <div class="textBlock" id="perf">
                <h5>Performance</h5>
                <span>It doesn’t matter how good your website is, if it’s slow to respond most users will abandon it. Modern websites can certainly do a lot, but with that comes the price of performance. 

                I only choose technologies that are lightweight and performance, as well as using additional techniques to reduce the amount of data needed to be sent between the client and server. This means faster websites for users and less burden on the server for the website owner. </span>
            </div>
            <div class="textBlock" id="responsive">
                <h5>Responsive Design</h5>
                <span>Websites are viewed from a large variety of devices and need to be responsive so that all users have the same positive experience regardless of screen size. Using responsive HTML5 and CSS3 this can be achieved without the headache of having to maintain multiple versions of a site.</span>
            </div>
        </div>
        <div class="bottomColumn" id="bottomColumnLeft"></div>
        <div id="bottomSection">
            <div class="textBlock">
                <h5>Need an existing site redone?</h5>
                <span>Enter the address of the site below, along with what you’d like done with it. I’ll create a simple mock-up and quote free of charge.</span>
            </div>
            <div class="textBlock">
                <h5>Are You A Student?</h5>
                <span>Impress employers with a custom tailored portfolio / CV site. Regardless of yor field of study, it’ll be sure to make yourself stand out and give yourself the best chance to suceed in your career ambitions. Students are charged at a discounted rate so get in touch for a quote.</span>
            </div>
            <form id="inputForm">
                <fieldset class="uk-fieldset">
                    <h5>Get In Touch</h5>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Website Address (Optional)">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Email Address">
                    </div>
                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="What can I help you with?"></textarea>
                    </div>
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label><input class="uk-checkbox" type="checkbox">  Student</label>
                    </div>
                    <button class="uk-button uk-button-secondary uk-button-small">Submit</button>
                </fieldset>
            </form>
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
    
    h5 {
        font-weight: 500;
        margin-bottom: 10px;
    }
    
    #webDevRoot * {
        /*border: 1px solid yellow;*/
    }
    
    #bottomColumnLeft {
        grid-area: bcl;
        background-color: #F0F0F0;
    }
    
    #bottomColumnRight {
        grid-area: bcr;
        
        background-color: #F0F0F0;
    }
    
    #webDevRoot {        
        display: grid;
        margin-top: 80px;
        
        grid-template-columns: 1fr minmax(min-content, 1200px) 1fr;
        grid-template-areas: 
            ". heading ."
            ". middleSection ."
            "bcl bottomSection bcr";

    }
    
    #benefitsContainer {
        grid-area: middleSection;
        margin-top: 80px;
        margin-bottom: 4vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        
        align-items: flex-start;
    }
    
    #topSection {
        grid-area: heading;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        align-items: flex-start;
        justify-content: space-between;
    }
    
    #webDevHeading {
        flex-grow: 1;       /* Set the ratio for how much to grow */
        min-width: 200px;   /* Give hard bindings to force it to wrap */
        max-width: 300px;
        
        margin-left: 30px;
        font-size: 40px;
        font-weight: 700;
    }
    
    #webDevIntro {
        flex-grow: 3;
        min-width: 200px;
        max-width: 700px;
        margin-right: 30px;
        margin-left: 30px;
        
        font-size: 22px;
        
        align-self: center; 
    }

    .textBlock {
        flex-basis: 200px;
        min-width: 350px;
        margin: 30px;
        flex-grow: 2;
        flex-shrink: 1;
    }
    
    #bottomSection {
        grid-area: bottomSection;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 4vw;
        
        background-color: #F0F0F0;
    }
    
    #inputForm {
        min-width: 400px;
        margin: 30px;
        padding-bottom: 80px;
    }
    
</style>