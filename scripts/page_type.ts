# Page Type
#
# This file defines what you will call the page throughout the project.
# This will allow you to define the analytics page_type custom variable as well
# as clarify what page you're trying to map to which tritium file.  Also, if
# there are no mappings for the page, it will be perfect proxied!
#
# Example starting code:

match_not($path, /\.css|\.gif|\.jpg|\.jpeg/) {
  match($path) {
    with(/^\/$|^\/\?/) {
      # Home page
      $page_type = "home"
    }
    with(/shop/) {
      # Category pages
      $page_type = "shop"
    }
    with(/sample-product/) {
      $page_type = "sample-product"
    }
    with(/brand/) {
      $page_type = "brand"
    }
  }
}

match($page_type, /^perfect_proxy$/) {
  $content_type = "perfect_proxy"
}
