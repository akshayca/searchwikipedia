$(function() {
    $('#input').focus();
});
$('#input').on('input', function(e) {
    if ($('#input').val() !== '') {  
        wiki($('#input').val());
    } else {
        $('#wikipediaimage').html("<a id='random' target='_blank' href = 'https://en.wikipedia.org/wiki/Special:Random'><img src='http://imgh.us/wiki_3.svg'></a>"); 
     $('#placeholderText').html('<h2>Or Click on the icon to see a random article</h2>');
      
      $('#results').html('');
    }
})

function wiki(str) {
    var html = '';
    var apiCall = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
    var style = "&limit=10&format=json&callback=?";
    $.getJSON(apiCall + str + style, function(data) {
        for (var i = 0; i < data[1].length; i++) {
            html += '<a href= "' + data[3][i] + '" target = "_blank" class= "row"><h4>' + data[1][i] + '</h4><p>' + data[2][i] + '</p></a>';
        }
        $('#results').html(html);
      $('#wikipediaimage').html('');
      $('#placeholderText').html('');
    });
}