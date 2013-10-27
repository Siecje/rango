$('#likes').click(function(){
    var catid;
    catid = $(this).attr("data-catid");
    $.get('/rango/like_category/', {category_id: catid}, function(data){
       $('#like_count').html(data);
       $('#likes').hide();
    });
});

$('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
         $('#cats').html(data);
        });
});

/*
$('#ajax-add-page').click(function(){
    var page_name = $(this).attr("data-id_title);
    var page_url = $(this).attr("data-id_url");

    // need django url tag
    $.get('/rango/

}
*/