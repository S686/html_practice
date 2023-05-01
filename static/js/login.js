$('header .login').addClass('active');

var msgs = {
    login: 'Logined!',
    wrong: 'Wrong!',
};

var Event = {
    login: function(){
        $('#login-btn').on('click', function(){
            var params = {
                id: $('#email').val(),
                pw: $('#pw').val(),
            };
            console.log(params);
            // if(params.email === 'admin@kt.com'
            // && params.pw === '1234'){
            //     $('.msg').text(msgs.login).show();
            //     location.href = 'contents.html';
            // }else{
            //     $('.msg').text(msgs.wrong).show();
            // }
            $.post('/api/login', params, function(response){
                console.log(response);
                $('.msg').text(response.msg).show();
                if ($('.msg') === 'logined'){
                    location.href('/contents')
                }else{
                }
            });
        });
    }
};
Event.login();