$(document).ready(() => {
    new Product();
})


class Product {
    private code: JQuery = $('#Code')
    private name: JQuery = $('#Name')
    private quantity: JQuery = $('#Quantity')
    private state: JQuery = $('#State')
    private id: JQuery = $('#Id')
    private btnSave: JQuery = $('#btnSave')
    private btnUpdate: JQuery = $('#btnUpdate')
    private btnDelete: JQuery = $('#btnDelete')

    constructor() {


        this.code.focusout(e => {
            $.ajax({
                url: 'https://localhost:44383/Api/Services/GetByCode/' + this.code.val(),
                data: {},
                type: 'GET',
                success: (response, status) => {
                    if (response != null) {
                        this.id.val(response.Id),
                        this.name.val(response.Name),
                        this.quantity.val(response.Quantity),
                        this.state.prop('checked', response.State)
                        this.btnSave.attr('disabled', 'disabled')
                    }
                }
            })
        });

        this.btnUpdate.click(e => {
            $.ajax({
                url: 'https://localhost:44383/Api/Services/Edit/',
                data: {
                    Id: this.id.val(), Code: this.code.val(), Name: this.name.val(), Quantity: this.quantity.val(), State: this.state.prop(":checked")
                },
                type: 'POST',
                success: (response, status) => {
                    if (response != null) {
                        alert("Guardado con éxito")
                    }
                }
            })
        });

        this.btnDelete.click(e => {
            $.ajax({
                url: 'https://localhost:44383/Api/Services/Delete/',
                data: {
                    id: this.id.val()
                },
                type: 'DELETE',
                success: (response, status) => {
                    if (response != null) {
                        alert("Eliminado con éxito")
                    }
                }
            })
        });

    }
}