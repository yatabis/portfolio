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
  }
})

const change_tab = (tab) => {
  nav.tab = tab
  app.tab = tab
}
