$(function () {
    $('#tuichu').on('click', function (e) {
        e.preventDefault()
        layer.confirm('确定退出？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }, function () {
        });
    })
    getUserInfo ()
})


function getUserInfo () {
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            // console.log(res);
            if (res.status === 1) {
                return  layer.msg(res.message)
            }
            renderHtml(res.data)
        },
    })
}

function renderHtml(data) {
    var name = data.nickname || data.username
    var firstText = name.substr(0, 1).toUpperCase();
    
    if (data.user_pic) {
        $('.person img').show().attr('src', data.yser_pic)
        $('.text-avatar').hide()
    } else {
        $('.person img').hide()
        $('.text-avatar').css('display', 'inline-block').text(firstText)
    }
    $('.welcome').html('欢迎你&nbsp;&nbsp;' + name)
}