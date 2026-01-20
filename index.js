document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("click", function (e) {

        if (e.target.classList.contains("increase")) {
            const qtyEl = e.target.previousElementSibling;
            let qty = parseInt(qtyEl.textContent);
            qtyEl.textContent = qty + 1;
        }

        if (e.target.classList.contains("decrease")) {
            const qtyEl = e.target.nextElementSibling;
            let qty = parseInt(qtyEl.textContent);
            if (qty > 1) {
                qtyEl.textContent = qty - 1;
            }
        }

    });

});
