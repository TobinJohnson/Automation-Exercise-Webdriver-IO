class Login{
    constructor(){                          //adding locators for logo and product
this.$logo=()=>$('//div[@class="logo pull-left"]/a/img')
this.$menplus=()=>$('//div[@class="panel-heading"]//a[@href="#Men"]//i[@class="fa fa-plus"]')
this.$tshirt=()=>$('//a[@href="/category_products/3"]') 
//this.dismiss=()=>$(' //*[@id="dismiss-button"]')

}
    async openUrl(url){                     //method for opening url
    await browser.url(url)
    //await this.logo().waitForDisplayed({timeout:5000,timeoutMsg:"wait time out failed for logo to be displayed"})
    
}
    async proselect(){                      //method for selecting a product
    await this.$menplus().click();
    await this.$tshirt().click();
    //await this.$logo().waitForDisplayed({timeout:5000,timeoutMsg:"wait time out failed for logo to be displayed"})
}
}export default new Login()
