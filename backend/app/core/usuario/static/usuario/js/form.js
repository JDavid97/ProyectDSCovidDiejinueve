$(function () {
    $('#select2').select2({
        theme: "bootstrap4",
        language: 'es',
        placeholder: 'Buscar..'
    });
});

function swal () {
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: errors,
    });
};