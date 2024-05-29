function menuSection() {
    const menuContent = document.createElement('div');
    menuContent.innerHTML = `
    
    <div class="menu-container">
        <h2>Menu</h2>

        <div class="drinks-table">
            <p id="table-header">Drinks</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Soft Drink</td>
                    <td>$2.50</td>
                </tr>
                <tr>
                    <td>Lemonade</td>
                    <td>$3.50</td>
                </tr>
                <tr>
                    <td>Draft Beer</td>
                    <td>$6.50</td>
                </tr>
            </table>
        </div>
    
        <div class="apps-table">
            <p id="table-header">Appetizers</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Mozzarella Sticks</td>
                    <td>$6.99</td>
                </tr>
                <tr>
                    <td>Fried Pickles</td>
                    <td>$7.99</td>
                </tr>
                <tr>
                    <td>Mac and Cheese Balls</td>
                    <td>$7.99</td>
                </tr>
            </table>
        </div>

        <div class="entrees-table">
            <p id="table-header">Entrees</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>The Fudd Burger</td>
                    <td>$12.50</td>
                </tr>
                <tr>
                    <td>The American Burger</td>
                    <td>$10.00</td>
                </tr>
                <tr>
                    <td>Brisket Burger</td>
                    <td>$14.50</td>
                </tr>
                <tr>
                    <td>Fully Loaded Burger</td>
                    <td>$16.50</td>
                </tr>
            </table>
        </div>

        <div class="dessert-table">
            <p id="table-header">Desserts</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Brownie</td>
                    <td>$5.99</td>
                </tr>
                <tr>
                    <td>Chocolate Pecan Pie</td>
                    <td>$8.99</td>
                </tr>
            </table>
        </div>
    </div>

    `;

    return menuContent;
}

export { menuSection }