<template>
<div>
    <div id="webDevRoot">
        <h1 id="webDevHeading">Web Development</h1>
        <p id="webDevIntro">Whether a simple portfolio site (Like this one) or a more complicated web application,  I can build a custom-tailored, robust and lightweight solution for you. I use cutting edge, modern web technologies that allow me to build impressive applications quickly. However, unlike many web developers I avoid abusing large, bloated frameworks that allow for quick development times, at the expense of producing overly simple ‘boilerplate’ websites. Everything I build is from scratch and can be customised to any degree.</p> 
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
        <div id="bottomSection">
            <div class="textBlock">
            <h5>Need an existing site redone?</h5>
            <span>Enter the address of the site below, along with what you’d like done with it. I’ll create a simple mock-up and quote free of charge.</span>
            </div>
            <div class="textBlock">
            <h5>Are You A Student?</h5>
            <span>Impress employers with a custom tailored portfolio / CV site. Regardless of yor field of study, it’ll be sure to make yourself stand out and give yourself the best chance to suceed in your career ambitions. 

I’m currently doing a promotion where I will do a simple site for students for 60 euro. If you have design skills and prefer I’ll even work to your design specification. Get in touch before promotion expires!</span>
            </div>
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
    
    #webDevRoot * {
        /*border: 1px solid yellow;*/
    }
    
    #webDevRoot {
        
        margin-top: 80px;
        padding: 0px;
        
        display: grid;
        justify-items: center;
        align-items: start;
        grid-column-gap: 50px;
        grid-row-gap: 10px;
        margin-right: 50px;
        margin-left: 50px;
        margin-bottom: 40px;
        
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: minmax(200px, auto) 80px minmax(300px, auto) 300px 300px;
        grid-template-areas: 
            "heading introText introText introText"
            ". . . . "
            "fromScratch fromScratch seo seo"
            "perf perf responsive responsive"
            "bottomSection bottomSection bottomSection bottomSection";
    }
    
    #webDevHeading {
        grid-area: heading;
    }
    
    #webDevIntro {
        grid-area: introText;
    }

    #seo {
        grid-area: seo;
    }
    
    #perf {
        grid-area: perf;
    }
    
    #responsive {
        grid-area: responsive;   
    }
    
    #fromScratch {
        grid-area: fromScratch;
    }

    .textBlock {
        display: flex;
        flex-direction: column;
        width: 35vw;
    }
    
    #bottomSection {
        grid-area: bottomSection;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: aliceblue;
    }
    
</style>