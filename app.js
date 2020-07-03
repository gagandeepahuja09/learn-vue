new Vue({
    el: '#vue-app',
    data: {
        name: 'Gagandeep',
        about: 'Chill guy',
        available: false,
        age: 21,
        website: 'http://github.com/gagandeepahuja09',
        websiteTag: '<a href="http://github.com/gagandeepahuja09">Way of binding html written in js</a>',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
    },
    methods: {
        greet: function(time) {
            return "Good " + time + ', ' + this.name; 
        },
        add: function(inc) {
            return this.age += inc;
        },
        subtract: function() {
            return this.age--;
        },
        // we get that event automatically
        updateXY: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        linkClick: function() {
            alert("Won't open the link");
        },
        logName: function() {
            console.log("Name entered");
        },
        logAge: function() {
            console.log("Age entered");
        },
        // ageA: function() {
        //     console.log("ageA");
        //     return this.age + this.a;
        // },
        // ageB: function() {
        //     console.log("ageB");
        //     return this.age + this.b;
        // }
    },
    computed: {
        ageA: function() {
            console.log("ageA");
            return this.age + this.a;
        },
        ageB: function() {
            console.log("ageB");
            return this.age + this.b;
        }
    }
});