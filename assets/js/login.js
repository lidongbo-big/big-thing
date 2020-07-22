$(function () {
    //切换登录注册  
    $('#quzhuce').on('click', function () {
        $('.login').hide()
        $('.reg').show()
    })
    $('#qudenglu').on('click', function () {
        $('.login').show()
        $('.reg').hide()
    })
    // 使用layui需要加载模块
    var form = layui.form
    // 表单验证
    form.verify({
        pass: [/^[\S]{6,12}$/, '密码长度必须是6~12位'],
        repass: function (value) {
            var pwd = $('.password').val().trim()
            if (pwd != value) {
                return '密码不一致'
            }
        }
    });
})