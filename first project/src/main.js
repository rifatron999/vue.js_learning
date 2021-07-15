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
};

const app = {data , template};

Vue.createApp(app).mount("#vue-app");