const Red = "FF3333"
const Orange = "FF9933"
const Yellow = "FFff33"
const Blue = "3333FF"
const Skyblue = "33FFFF"
const Green = "33FF33"
const Brown = "B36B24"
const Gray = "B3B3B3"
const Black = "333333"

const nav = new Vue({
  el: "#nav",
  data: {
    tab: "home"
  }
})

const app = new Vue({
  el: "#main",
  data: {
    tab: "home",
    email: "39yatabis.work@gmail.com",
    updated_at: " ",
    rating: " ",
  },
  created: function () {
    fetch("https://api.github.com/repos/yatabis/portfolio")
      .then(response => response.json())
      .then(json => {
        this.updated_at = json.pushed_at.split("T")[0].replace(/-/g,".")
      })
    fetch("https://atcoder.jp/users/yatabis/history/json", {
      mode: "cors",
      credentials: "include",
    })
      .then(response => response.json())
      .then(json => {
        this.rating = parseInt(json[json.length - 1].NewRating)
      })
  },
  computed: {
    color: function () {
      if (this.rating === " ") {
        return Black
      }
      if (this.rating >= 2800) {
        return Red
      } else if (this.rating >= 2400) {
        return Orange
      } else if (this.rating >= 2000) {
        return Yellow
      } else if (this.rating >= 1600) {
        return Blue
      } else if (this.rating >= 1200) {
        return Skyblue
      } else if (this.rating >= 800) {
        return Green
      } else if (this.rating >= 400) {
        return Brown
      } else if (this.rating >= 0) {
        return Gray
      }
      return Black
    },
    updated_badge: function () {
      return 'https://img.shields.io/badge/last_update-' + this.updated_at + '-blue'
    },
    rating_badge: function () {
      return 'https://img.shields.io/badge/AtCoder-' + this.rating + '-' + this.color
    }
  }
})

const change_tab = (tab) => {
  nav.tab = tab
  app.tab = tab
}

const test = () => {
  fetch("https://atcoderratingsimulator.herokuapp.com?yatabis", {mode: "cors"})
    .then(response => {
      console.log(response)
      console.log(response.json())
    })
}
