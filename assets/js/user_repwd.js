$(function () {
    var form = layui.form
    var layer = layui.layer

    // 添加表单验证规则
    form.verify({
        len: [/^[\S]{6,12}$/, '密码长度必须是6~12位'],
        diff: function (value) {
            var old = $('input[name="oldPwd"]').val()
            if (value === old) {
                return '新密码不能跟旧密码一致'
            }
        },
        same: function (value) {
            var newPwd = $('input[name="newPwd"]').val()
            if (value !== newPwd) {
                return '密码不一致'
            }
        }
    })

    // 提交密码功能

    $('#xiugai').on('submit', function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: '/my/updatepwd',
            data,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('失败')    
                }
                layer.msg('修该成功')
                $('#xiugai')[0].reset()
            }
        })
    })

})