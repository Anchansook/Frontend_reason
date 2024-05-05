{
    var Cart = /** @class */ (function () {
        function Cart() {
            this.items = [];
        }
        Cart.prototype.addItem = function (product) {
            var existingItem = this.items.find(function (item) { return item.name === product.name; });
            if (existingItem) {
                existingItem.quantity += product.quantity;
            }
            else {
                this.items.push(product);
            }
            this.render();
        };
        Cart.prototype.removeItem = function (index) {
            this.items.splice(index, 1);
            this.render();
        };
        Cart.prototype.render = function (filteredItems) {
            var _this = this;
            var list = document.getElementById('product-list');
            list.innerHTML = '';
            var itemsToRender = filteredItems || this.items;
            itemsToRender.forEach(function (product, index) {
                var item = document.createElement('li');
                item.textContent = "".concat(product.name, " - ").concat(product.quantity);
                var removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.onclick = function () { return _this.removeItem(index); };
                item.appendChild(removeButton);
                list.appendChild(item);
            });
            var totalQuantity = this.items.reduce(function (total, product) { return total + product.quantity; }, 0);
            document.getElementById('total-quantity').textContent = "\uCD1D \uC218\uB7C9: ".concat(totalQuantity);
        };
        Cart.prototype.searchItem = function (query) {
            var filteredItems = this.items.filter(function (item) { return item.name.toLowerCase().includes(query.toLowerCase()); });
            this.render(filteredItems);
        };
        return Cart;
    }());
    var cart_1 = new Cart();
    document.getElementById('product-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var nameInput = document.getElementById('product-name');
        var quantityInput = document.getElementById('product-quantity');
        var product = { name: nameInput.value, quantity: parseInt(quantityInput.value, 10) };
        cart_1.addItem(product);
        nameInput.value = '';
        quantityInput.value = '';
    });
    document.getElementById('search-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var searchInput = document.getElementById('search-input');
        cart_1.searchItem(searchInput.value);
        searchInput.value = '';
    });
}
