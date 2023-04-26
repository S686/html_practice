var msgs = {
    login: 'Logined!',
    wrong: 'Wrong!',
};

var Event = {
    login: function(){
        $('#login-btn').on('click', function(){
            var params = {
                email: $('#email').val(),
                pw: $('#pw').val(),
            };
            console.log(params);
            if(params.email === 'admin@kt.com'
            && params.pw === '1234'){
                $('.msg').text(msgs.login).show();
                location.href = 'contents.html';
            }else{
                $('.msg').text(msgs.wrong).show();
            }
        });
    }
};
Event.login();