Vue.filter('emoji', function (value) {
    return value.replace('единорог', '&#129412;')
        .replace('щенок', '&#128054;')
        .replace('огне', '&#128293;')
        .replace('грустно', '&#128546;')

})

new Vue({
    el: "#app",
    data:{
        input: '',
        array:[
            {
                name: 'Иван',
                age: 45
            },{
                name: 'Вика',
                age: 19
            },{
                name: 'Иван',
                age: 29
            },{
                name: 'Максим',
                age: 20
            }
        ]
    }
});