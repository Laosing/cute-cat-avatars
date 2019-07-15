const cat = new Vue({
    el: '#cat',
    data () {
        return {
            catSrc: `<img src="static/img/api/award.svg" />`,
            cats: [
                "announcer",
                "art",
                "award",
                "book",
                "bug",
                "cat",
                "comic",
                "gaming",
                "general",
                "groups",
                "idea",
                "news",
                "support",
                "tv",
            ]
        }
    },
    methods: {
        getCat(e) {
            const value = e.target.value
            if(value === '') return;

            if(value === 'random') {
                let random = Math.floor(Math.random() * this.cats.length)
                return this.catSrc = this.getCatImage(random)
            }
            else if (this.cats.includes(value)) {
                let index = this.cats.indexOf(value)
                return this.catSrc = this.getCatImage(index)
            }
            else if(!isNaN(Number(value))) {
                return this.catSrc = this.getCatImage(value)
            }
            else {
                return this.catSrc = this.getCatImage(value.length)
            }
        },
        getCatImage(id) {
            if(id >= this.cats.length) {
                id = id % this.cats.length;
            }
            let catName = this.cats[id];
            return `<img class="w-100 img-fluid" src="static/img/api/${catName}.svg" />`
        }
    },
})