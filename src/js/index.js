(function ($) {
   let table =  $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            {"data":"Index"},
            { "data": "Living_Space_sq_ft"},
            { "data": "Beds" },
            { "data": "Baths" },
            { "data": "Zip" },
            { "data": "Year" },
            { "data": "List_Price" }
        ]
    } );
})(jQuery);