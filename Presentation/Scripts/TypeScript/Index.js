$(document).ready(function () {
    new Index();
});
var Index = /** @class */ (function () {
    function Index() {
        var _this = this;
        this.products = $('#Products');
        $.ajax({
            url: 'https://localhost:44383/Api/Services',
            data: {},
            type: 'GET',
            success: function (response, status) {
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var product = response_1[_i];
                    _this.products.html('<tr><th scope = "row">' + product.Code + '</th><td>' + product.Name + '</td><td>' + product.Quantity + '</td><td>' + product.State + '</td></tr>');
                }
            }
        });
    }
    return Index;
}());
//# sourceMappingURL=Index.js.map