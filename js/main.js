// FUNGSI JAVASCRIPT

/* 
    Fungsi Text Limitation
    Judul Berita (card-title) = 50 Karakter
    Isi Berita (p) = 85 Karakter
*/

$('.card .card-body p').html(function (index, currentText) {
    // Deklarasi variable maxLength yang diambil dari element html dengan attribut bernama text-limit
    var maxLength = $(this).attr('text-limit');
    
    // Test console
    // console.log(maxLength);
    
    // kalau panjang text saat ini lebih besar dibandingkan maxLength
    if(currentText.length >= maxLength){
        // akan menghasilkan text saat ini dengan maxLength sebagai batasnya sisanya digantikan dengan ...
        return currentText.substr(0, maxLength) + '...';
    }else{
        // jika tidak lebih besar dari maxLength maka akan menampilkan text saat ini
        return currentText;
    }
});