let movie = Vue.component('movie', {
    template: "<h1>Esta es una pelicula</h1>"
})

const controls = new Vue({
    el: "#controls",
    components: [movie],
    data: {
        message: "Hello world...",
        controls_enabled: true,
        counter: 0,
        total_time: 10,
        current_time: 2
    },
    computed: {
        remainingTime(){
            return this.total_time - this.current_time;
        }
    },    
    methods: {
        counterAdd () {
            this.counter +=1;
        },
        counterSubstract () {
            if(this.counter > 0){
                this.counter -=1;
            }
            
        },
        shouldShowSubstract() {
            return this.counter>0;
        }
    }
});


let myObject = {}