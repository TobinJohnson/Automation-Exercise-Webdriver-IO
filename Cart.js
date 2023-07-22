class Cart {
    constructor() {                     //adding locators for adding product to cart and review
        this.$viewDetails=()=>$('//a[@href="/product_details/2"]')
        this.$cartButton=()=>$('//button[@class="btn btn-default cart"]')
        this.hoverCartButton=()=>$('//div[@class="productinfo text-center"]/a[@class="btn btn-default add-to-cart"]')
        this.$continue=()=>$('//*[@id="cartModal"]//button')
        this.$logo=()=>$('//div[@class="logo pull-left"]/a/img')
        this.$names=()=>$("//input[@id='name']")
        this.$email=()=>$("//input[@id='email']")
        this.$writeReview=()=>$("//textarea[@id='review']")
        this.$submit=()=>$('#button-review')
        this.googleads=()=>$('class="google-auto-placed"')
        this.$hoverOver=()=>$('//p[contains(text(),"Premium Polo T-Shirts")]/preceding-sibling::img[@alt="ecommerce website products"]');
    }
    async addToCart() {                         //method to add a product to cart
        await this.$viewDetails().click();
         await this.$cartButton().click();
        expect(await this.$continue().waitForDisplayed({timeout:5000,timeoutMsg:"wait time out failed for continue button to be displayed"}))
        await this.$continue().click();
        await browser.pause(1000);

    }
    async hover(){                              //method to hover to the product
        await browser.scroll(0,300);
        await this.$hoverOver().moveTo();

    }
    async review(username,email,review){
        await this.$names().setValue(username)
        await this.$email().setValue(email);
        await this.$writeReview().setValue(review)
        //await this.$logo().waitForDisplayed({timeout:5000,timeoutMsg:"wait time out failed for logo to be displayed"})
        await browser.pause(2000);
        await this.$submit().click()
    }
}
export default new Cart()