class DashboardPage
{
constructor(page)
{
    this.page = page;
    this.products = page.locator(".card-body");
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");

}

async searchProductAddCart(productName)
{
    await this.page.waitForSelector('.card-body');

    const productCard = this.products.filter({ hasText: productName }).first();
    const cardCount = await productCard.count();

    if (cardCount === 0)
    {
        const titles = await this.productsText.allTextContents();
        throw new Error(`Product not found: ${productName}. Visible products: ${titles.join(', ')}`);
    }

    await productCard.locator('button').filter({ hasText: /Add To Cart/i }).click();
}

async navigateToOrders()
{
    await this.orders.click();
}


async navigateToCart()
{
    await this.cart.click();
}

}
module.exports = {DashboardPage};