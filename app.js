new Vue({
    el: '#vue-app',
    data: {
        height: 300,
        ended: false,
    },
    methods: {
        kick: function() {
            if(this.height >= 30)
                this.height -= 30;
            if(this.height == 0)
                this.ended = true;
        },
        restart: function() {
            this.height = 300;
            this.ended = false;
        }
    },
    computed: {
    }
});