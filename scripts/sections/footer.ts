$("./body") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") {
    // Move or insert elements here
    move_here("../div[@id='Footer']", "top")
  }
}
