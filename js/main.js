// FUNGSI JAVASCRIPT

/* 
    Fungsi Text Limitation
    Judul Berita (card-title) = 50 Karakter
    Paragraf Berita (p) = 100 Karakter
*/

$('.card .card-body p').html(function (index, currentText) {
    var maxLength = $(this).attr('text-limit');
    
    console.log(maxLength);

    if(currentText.length >= maxLength){
        return currentText.substr(0, maxLength) + '...';
    }else{
        return currentText;
    }
});