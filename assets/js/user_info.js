var form = layui.form
var layer = layui.layer
$(function () {
    // 提交修该功能
    $('#xiugai').on('submit', function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        console.log(data);
        $.ajax({
            type: 'POST',
            url: '/my/userinfo',
            data,
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
               window.parent.getUserInfo ()
            }
        })
    })

    // 重置按钮
    $('button[type=reset]').on('click', function (e) {
        e.preventDefault()
        initUserInfo();
    })
    initUserInfo();
})

function initUserInfo () {
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            form.val('f1', res.data)
        }
    })
}