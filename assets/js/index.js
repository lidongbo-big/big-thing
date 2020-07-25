$(function () {
    $('tuichu').on('click', function (e) {
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
            console.log(res);
        },
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
