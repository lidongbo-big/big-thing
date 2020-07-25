$.ajaxPrefilter(function (option) {
    // console.log(option);
    option.url = 'http://www.liulongbin.top:3007' + option.url


    if (option.url.indexOf('/my/') !== -1) {
        option.complete = function (xhr) {
            if (xhr.responseJSON.status === 1) {
                location.href = '/login.html'
            }
        }
        option.headers = {
            Authorization: localStorage.getItem('token')
        }
    }

})