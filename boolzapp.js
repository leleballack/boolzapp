
$(function (){

  $(".fa-paper-plane").click(function(){
    var text = $(".type_here").val();
    if (text) {
      var new_text = $(".template .message").clone();
      new_text.children(".content").text(text);
      new_text.children(".message_time").text(current_time());
      $(".message_box").append(new_text);
    };
    $(".type_here").val("");

    setTimeout (function (){
      var new_text = $(".template .message").clone();
      new_text.toggleClass("green white");
      new_text.children(".content").text("Strong minds discuss ideas, average minds discuss events, weak minds discuss people");
      new_text.children(".message_time").text(current_time());
      $(".message_box").append(new_text);
      $(".chat_list").find(".sentence").text("Strong minds discuss ideas, average minds discuss events, weak minds discuss people").css("color", "black").css("font-weight","Bold");
      $(".header_right").find(".message_time").text(current_time());
      $(".chat_list").find(".message_time").text(current_time());
    }, 1000);

  });
    $(".type_here").keypress(function(e) {
      var key = e.which;
      if (key == 13) {
        $(".fa-paper-plane").click();
        return false;
      }
    });

    $(".searchme").keyup(function() {
      var lookup = $(this).val().toLowerCase();
      $(".contact").each(function() {
        if ($(this).find(".firstname").text().toLowerCase().includes(lookup)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
});

function current_time() {
   var d = new Date();
   var m = d.getMinutes();
   var h = d.getHours();

   if (m < 10) {
     m = "0" + m;
   };
   if (h < 10) {
     h = "0" + h;
   }
   return h + ":" + m;
};
