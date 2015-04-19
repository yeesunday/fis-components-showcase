var itemTpl = __inline('templates/item.ejs');
var data = {
    items: [1, 2, 3, 4, 5]
}
$('#itemList').html(itemTpl(data));