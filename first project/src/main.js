const app = Vue.createApp({
    data(){
        return {
            title: "Vue3 Tutorial Updated",
        };
    },
    template: `<div> 
                   <h1>
                        Hi 
                    </h1>
                    <p> {{title}} </p>   
                </div>`,
});
app.mount("#vue-app");