var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Title One'
    },
    methods: {
    },
    computed: {
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Title Two'
    },
    methods: {
        changeATitle: function() {
            one.title = "Title of A Changed";
        }
    },
    computed: {
    }
});

two.title = "Changed outside the vue instance";