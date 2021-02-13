$(document).ready(() => {
    new Index();
})


class Index {

    private products: JQuery = $('#Products')

    constructor() {
        $.ajax({
            url: 'https://localhost:44383/Api/Services',
            data: {},
            type: 'GET',
            success: (response, status) => {
                for (let product of response) {
                    this.products.html('<tr><th scope = "row">' + product.Code + '</th><td>' + product.Name + '</td><td>' + product.Quantity + '</td><td>' + product.State + '</td></tr>' )
                }
            }
        })
    }
}