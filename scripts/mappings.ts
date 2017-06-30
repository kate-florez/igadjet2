// Mappings

// See page_type.ts to define the $page_type variable first!

// Mappings are matchers that we use to determine if we should execute a
// bit of Tritium during an execution. That is, run something when we are
// are on a certain page.

// Example starting code:

match($status) {
  match($page_type) {
    with(/^home$/) {
      log("--> Importing pages/home.ts in mappings.ts")
      @import pages/home.ts
      @import pages/products.ts
      @import pages/category.ts
    }
    with(/shop/) {
      log("--> Importing pages/category.ts in mappings.ts")
      @import pages/category.ts
      @import pages/products.ts
    }
    with(/sample-product/) {
      @import pages/products.ts
    }
    with(/brand/) {
      @import pages/products.ts
    }
    else() {
    }
  }
}
