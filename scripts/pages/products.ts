$("./body") {
  add_class("mw_products")
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
      
      $("./div[@class='Left']") {
        $("./div[@id='SideNewProducts']") {
          move_to("../../div[@class='Right']", "top");
        }
      }
      $("./div[@class='Content']") {
        $("./div[@id='ProductBreadcrumb']") {
          $("./ul") {
            //remove();
            $("./li") {
              insert("div", class: "mw_arrow")
            }
          }
        }
      }
      $("./div[@class='Right']") {
        //move_here("../div/div/div/div/div[@id='SideNewProducts']", "top");
      }


    }
  }
}