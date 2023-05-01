$('header .join').addClass('active');

(function(){
    var msgs = {
        checkpw: 'Check Your Password!',
        joinAccount: 'joined Your Account!',
    }
    var Event = {
        join: function(){
            $('#join-btn').on('click', function(){
                var params = {
                    id: $('#email').val(),
                    pw: $('#pw').val(),
                    ckpw: $('#ckpw').val(),
                    adrr: $('input[name="addr"]:checked').val(),
                    birth: $('#birth').val(),
                    subscription: $('#subscription').val(),
                }
                console.log(params);
                if (params.pw !== params.ckpw){
                    alert('check password!');
                    $('.join-wrap > .msg').text(msgs.checkpw).show();
                }else{
                    //console.log('joined');
                    //$('.join-wrap > .msg').text(msgs.joinAccount).show();
                    $.post('/api/join', params, function(response){
                        console.log(response);
                    });
                }
            });
        }
    }
    Event.join();
})();