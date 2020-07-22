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
})