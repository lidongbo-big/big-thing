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
    var layer = layui.layer


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

    // 注册功能
    $('#reg-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3007/api/reguser',
            data: data,
            success: function (res) {
                if (res.status === 1) {
                    // console.log(res);
                    $('#reg-form')[0].reset()
                    return layer.msg(res.message)
                }
                layer.msg('注册成功')
            }
        })
    })


    // 登录功能
    $('#login-form').on('submit', function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.ajax({
            type: "POST",
            url: "http://www.liulongbin.top:3007/api/login",
            data: data,
            success: function (res) {
                if (res.status === 1) {
                    $('#login-form')[0].reset()
                   return layer.msg(res.message)
                }
                localStorage.setItem('token', res.token)
                layer.msg('登录成功')
            }
        })
    })
    

})