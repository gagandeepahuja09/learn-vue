new Vue({
    el: '#vue-app',
    data: {
        name: 'Gagandeep',
        about: 'Chill guy',
        age: 21,
        website: 'http://github.com/gagandeepahuja09',
        websiteTag: '<a href="http://github.com/gagandeepahuja09">Way of binding html written in js</a>',
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
        }
    }
});