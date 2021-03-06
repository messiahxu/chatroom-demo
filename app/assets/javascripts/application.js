// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$('document').ready(function(){

  $('#chat-form #body').keydown(function(e){
    if (e.ctrlKey && e.keyCode === 13) {
      $('#chat-form form').submit();
    }
  });

  $('#logout-link').click(function(){
    $(this).text('logouting...');
  });

  $('#chat-form form').submit(function(){
    if($('#chat-form #body').val() == ''){
      alert('Can not commit empty message...');
      return false;
    }
    $('#chat-form input[type="submit"]').val('submiting');
    $('#chat-form input[type="submit"]').attr('disabled', 'disabled');
  });

  $('#login-form').submit(function(){
    if($('#login-form #name').val() == ''){
      alert('What is your name?');
      return false;
    }
    $('#login-form input[type="submit"]').val('logining');
    $('#login-form input[type="submit"]').attr('disabled', 'disabled');
  });

  $(function(){  
    var client = new Faye.Client('http://faye-demo.herokuapp.com/faye');  
    client.subscribe("/messages", function(data){  
      eval(data);
    });  
    client.subscribe("/login", function(data){  
      eval(data);
    });  
    client.subscribe("/logout", function(data){  
      eval(data);
    });  
  });
});
