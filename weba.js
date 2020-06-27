$.ajax({
     type: 'post',
     url: `/api/login`,
     data: $(this).serialize(),
     success: function (res) {
          if(res.status !== 0) {
               return layer.msg(res)
          }
          localStorage.setItem('token', res.token)
          location.href = '/index.html'
     }
})