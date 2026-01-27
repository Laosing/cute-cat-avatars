const cat = new Vue({
  el: "#cat",
  data() {
    return {
      catSrc: `<img src="img/api/v1/award.svg" />`,
      cats: [],
    }
  },
  mounted() {
    fetch("./api/v1/cats")
      .then((res) => res.json())
      .then((data) => {
        this.cats = data
      })
  },
  methods: {
    getCat(e) {
      const value = e.target.value.trim()
      if (value === "") return

      if (value === "random") {
        let random = Math.floor(Math.random() * this.cats.length)
        return (this.catSrc = this.getCatImage(random))
      } else if (this.cats.includes(value)) {
        let index = this.cats.indexOf(value)
        return (this.catSrc = this.getCatImage(index))
      } else if (!isNaN(Number(value))) {
        return (this.catSrc = this.getCatImage(value))
      } else {
        return (this.catSrc = this.getCatImage(value.length))
      }
    },
    getCatImage(id) {
      if (id >= this.cats.length) {
        id = id % this.cats.length
      }
      let catName = this.cats[id]
      return `<img class="w-100 img-fluid" src="img/api/v1/${catName}.svg" />`
    },
  },
})
