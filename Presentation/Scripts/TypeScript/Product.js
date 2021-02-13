$(document).ready(function () {
    new Product();
});
var Product = /** @class */ (function () {
    function Product() {
        var _this = this;
        this.code = $('#Code');
        this.name = $('#Name');
        this.quantity = $('#Quantity');
        this.state = $('#State');
        this.id = $('#Id');
        this.btnSave = $('#btnSave');
        this.btnUpdate = $('#btnUpdate');
        this.btnDelete = $('#btnDelete');
        this.code.focusout(function (e) {
            $.ajax({
                url: 'https://localhost:44383/Api/Services/GetByCode/' + _this.code.val(),
                data: {},
                type: 'GET',
                success: function (response, status) {
                    if (response != null) {
                        _this.id.val(response.Id),
                            _this.name.val(response.Name),
                            _this.quantity.val(response.Quantity),
                            _this.state.prop('checked', response.State);
                        _this.btnSave.attr('disabled', 'disabled');
                    }
                }
            });
        });
        this.btnUpdate.click(function (e) {
            $.ajax({
                url: 'https://localhost:44383/Api/Services/Edit/',
                data: {
                    Id: _this.id.val(), Code: _this.code.val(), Name: _this.name.val(), Quantity: _this.quantity.val(), State: _this.state.prop(":checked")
                },
                type: 'POST',
                success: function (response, status) {
                    if (response != null) {
                        alert("Guardado con éxito");
                    }
                }
            });
        });
        this.btnDelete.click(function (e) {
            $.ajax({
                url: 'https://localhost:44383/Api/Services/Delete/',
                data: {
                    id: _this.id.val()
                },
                type: 'DELETE',
                success: function (response, status) {
                    if (response != null) {
                        alert("Eliminado con éxito");
                    }
                }
            });
        });
    }
    return Product;
}());
//# sourceMappingURL=Product.js.map