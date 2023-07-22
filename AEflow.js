import loginPage from '../pageobjects/Login.js'        ///importing login class 
import Cart from '../pageobjects/Cart.js'               //importing Cart class
let randomEmail=import('email-generator')               //for random email generation


describe("Automation exercise basic flow",()=>{
    it("open Url and load the application",async()=>{
        await loginPage.openUrl("https://automationexercise.com/")                  //opening url
        await expect(browser).toHaveUrl("https://automationexercise.com/")          //assertion for url

    })
    it("Selection of product",async()=>{
        await loginPage.proselect();                                            //selecting product
        //await browser.pause(1000);
        })
        
    it("Handling add",async()=>{
    await loginPage.openUrl("https://automationexercise.com/category_products/3")
   // await expect(this.$logo().waitForDisplayed({timeout:5000,timeoutMsg:"wait time out failed for logo to be displayed"}))
    await expect(browser).toHaveUrl("https://automationexercise.com/category_products/3")
    })
    it("hoverin",async()=>{
        await Cart.hover();                                             //hover to product
    })
    it("Adding product to the cart",async()=>{                          //adding product to cart
       // await browser.pause(1000);
        await Cart.addToCart();
        //await expect(browser).toHaveUrl("https://automationexercise.com/product_details/2")
    })
    
    it("Entering details for review ",async()=>{                        //entering details for review 
        await browser.pause(2000);
        await expect(browser).toHaveTitleContaining('Automation Exercise - Product Details')
        await Cart.review('tobin','tobin@gmail.com','Good  to see its completed');
    })
    //it("Entering details with random email for review ",async()=>{           ///entering details with random email
    //     await browser.pause(2000);
    //     await Cart.review('tobin',{randomEmail},'Good  to see its completed');
    // })
})
 
