$(document).ready(function(){

  console.log('Opaaa...');

  var res = $.ajax({
    url: "http://emjuizdefora.com/gdgjf/api/gamification/ranking",
  });

  res.done(function(data){
    console.table(data);
    $("#res").html("<pre>"+JSON.stringify(data, null, 2)+"</pre>");
  });

  res.fail(function(){
    $("#res").html("Falha na requisição!");
  });

});

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
