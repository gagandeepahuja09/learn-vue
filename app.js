Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}. This <button @click="changeName">button</button> will change my name</p>',
    data: function() {
        return {
            name: 'Gagandeep',
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Gary';
        }
    },
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});