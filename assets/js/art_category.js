$(function () {

    // 获取图书
    function getBooks() {
        $.ajax({
            url: '/my/article/cates',
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                var strHtml = template('tpl-cateList', res)
                $('tbody').html(strHtml)
            }
        })
    }
    getBooks()


    var index
    // 添加书籍
    $('#showAdd').on('click', function () {
            index = layer.open({
            type: 1,
            title: '添加书籍',
            content: $('#tpl-add').html(),
            area: ['500px', '250px']
        });
    })

    $('body').on('submit','#form-add', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'POST',
            url: '/my/article/addcates',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    layer.msg(res.message)
                }
                layer.close(index)
                getBooks()
                layer.msg('添加成功')
            }
        })
    })
})