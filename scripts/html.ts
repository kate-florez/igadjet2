$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize_srcs()
  clean_mobile_meta_tags()
  remove_all_styles()
  remove_internal_styles()

  @import "sections/header.ts"
  @import "sections/footer.ts"
  @import "mappings.ts"

  move_css_to_head()

  $(".//img[not(contains(@src, '"+$asset_host+"'))]") {
    $("self::img[not(contains(@class,'mw-skip-opt'))]") {
      perf.optimize_image() {
        perf.quality("70")
      }
    }
    $("self::img[contains(@class,'mw-late-load')]") {
      attribute("src") {
        name("data-src")
      }
    }
  }

  relocate_scripts()
  add_assets()
}
