new Vue({
    el: '#vue-app',
    data: {
        text: "Some text",
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs);
            // this.text = this.$refs.input.value;
            this.text = this.$refs.test.innerHTML;
        }
    }
});