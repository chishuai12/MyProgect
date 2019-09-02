<script>

  //浏览器中一般使用ajax来发送post请求
  $('#form').on('sunmit', function (e) {
    //禁用表单默认提交事件
    e.preventDefault();
    $.ajax({
      url: 'heroAdd',
      type: 'post',
      dataType: 'json',
      data: $(this).serialize(),
      success: function (data) {
      }
    });
  });
</script>