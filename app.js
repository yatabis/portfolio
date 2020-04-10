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
    updated_at: ""
  },
  created: function () {
    fetch("https://api.github.com/repos/yatabis/portfolio")
      .then(response => response.json())
      .then(json => {
        this.updated_at = "https://img.shields.io/badge/last_update-"
                        + json.updated_at.split("T")[0].replace(/-/g,".")
                        + "-blue"
      })
  }
})

const change_tab = (tab) => {
  nav.tab = tab
  app.tab = tab
}
