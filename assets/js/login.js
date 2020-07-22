$(function () {
    // 切换登录和注册的盒子
    $('#quzhuce').on('click', function () {
        $('.login').hide();
        $('.reg').show();
    });

    $('#qudenglu').on('click', function () {
        $('.login').show();
        $('.reg').hide();
    });

    // 使用layui内置模块的步骤：
    // 1. 加载模块
    var form = layui.form;

    // 2. 使用模块
    // 使用layui的表单验证功能
    form.verify({
        // 各种自定义的验证规则
        // 规则名称: ['验证的代码', '错误提示'],
        // 规则名称：function () {}
        pass: [/^[\S]{6,12}$/, '密码长度必须是6到12位'], // {6,12} 不要写成 {6, 12}
        repwd: function (value) {
            // value表示当前使用该验证规则的输入框的值
            // 先找到密码框的值
            var pwd = $('.password').val().trim();
            // 比较当前重复密码是否和密码相同
            if (pwd != value) {
                // return '提示';
                return '两次密码不一致'
            }
        }
    });


    // 加载弹出层模块
    var layer = layui.layer;

    // 完成注册功能
    $('#reg-form').on('submit', function (e) {
        // 阻止默认行为
        e.preventDefault();
        // 收集表单信息
        var data = $(this).serialize();
        // console.log(data);
        // 按照接口要求，提交数据
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3007/api/reguser',
            data: data,
            success: function (res) {
                // console.log(res);
                if (res.status === 1) {
                    // 失败了
                    // return alert(res.message);
                    return layer.msg(res.message);
                }
                // 成功
                // alert('注册成功~');
                layer.msg('注册成功~');
                // 触发“去登录”的单击事件
                $('#qudenglu').click(); // 用代码的方式，模拟用户的点击行为
            }
        });
    });


    // 完成登录功能
});