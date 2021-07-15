const template = `<div> 
                        <h1>
                            Hi {{ name }}
                        </h1>
                        <p> {{ title }} </p>   
                    </div>`;
const data = function data() {
    return {
        title: "Simpifying main.js",
        name: "rifat",
    }
}

Vue.createApp({
    data , template
}).mount("#vue-app");