let cartProducts = [];

let btnAdds = document.getElementsByClassName('add-to-cart');
let btnRemoves = document.getElementsByClassName('remove-from-cart');
let btnClear = document.getElementById('clear');

for (const btn of btnAdds) {
    btn.addEventListener('click', function () {
        spanAmount = this.nextElementSibling;
        btnRemove = this.nextElementSibling.nextElementSibling;
        this.classList.add('btn-success');
        this.classList.remove('btn-danger');
        spanAmount.textContent = parseInt(spanAmount.textContent) + 1;
        btnRemove.disabled = false;
        cartProducts.push(this.value);
        updateCart();
    })
}

for (const btn of btnRemoves) {
    btn.addEventListener('click', function () {
        btnAdd = this.previousElementSibling.previousElementSibling;
        spanAmount = this.previousElementSibling;
        if (parseInt(spanAmount.textContent) > 0) {
            spanAmount.textContent = parseInt(spanAmount.textContent) - 1;
            if (parseInt(spanAmount.textContent) < 1) {
                btnAdd.classList.add('btn-danger');
                btnAdd.classList.remove('btn-success');
                this.disabled = true;
            }
        }
        if (cartProducts.includes(this.value)) {
            const index = cartProducts.indexOf(this.value);
            if (index > -1) {
                cartProducts.splice(index, 1);
            }
        }
        updateCart();
    })
}

btnClear.addEventListener('click', function () {
    for (const btn of btnAdds) {
        spanAmount = btn.nextElementSibling;
        btnRemove = btn.nextElementSibling.nextElementSibling;
        btn.classList.add('btn-danger');
        btn.classList.remove('btn-success');
        spanAmount.textContent = 0;
        btnRemove.disabled = true;
    }
    cartProducts = [];
    updateCart();
})

function updateCart() {
    document.getElementById('cart').textContent = cartProducts.length;
    document.getElementById('cartProducts').textContent = cartProducts.join(', ');
}