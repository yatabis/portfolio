const nav = new Vue({
  el: "#nav",
  data: {
    tab: "home"
  }
})

const app = new Vue({
  el: "#main",
  data: {
    tab: "home"
  }
})

const change_tab = (tab) => {
  // console.log(tab)
  nav.tab = tab
  app.tab = tab
}
