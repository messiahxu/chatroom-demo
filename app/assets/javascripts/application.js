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

  $(function(){  
    var client = new Faye.Client('http://192.168.2.118:9292/faye');  
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
