$(function () {
    var $image = $('#image')
    const options = {
        aspectRatio: 1,
        preview: '.img-preview'
    }
    $image.cropper(options)

    // 选择文件

    $('#btnChooseImage').on('click', function () {
        $('#iptAvatar').click()
    })

    $('#iptAvatar').change(function () {
        if (this.files.length <= 0) {
            return layui.msg('请选择图片')
        }
        var fileObj = this.files[0]
        var url = URL.createObjectURL(fileObj)
        console.log(url);
        $image
        .cropper('destroy')
        .attr('src', url)
        .cropper(options)
    })

    // 确定修该头像
    $('#btnCreateAvatar').on('click', function () {
        var canvas = $image.cropper('getCroppedCanvas', {
            width: 100,
            height: 100
        });
        var a = canvas.toDataURL()   
        $.ajax({
            type: 'POST',
            url: '/my/update/avatar',
            data: { avatar: a },
            success: function (res) {
                if (res.status === 0) {
                    return layer.msg(res.message)
                }
                window.parent.getUserInfo();
            }
        })
    })
})
