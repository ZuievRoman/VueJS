new Vue({
    el: "#app",
    data:{
        message: ''
    },
    methods: {
        onClick: function () {
            console.log(this.message)
        }
    }
});