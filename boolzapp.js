
$(function (){
  $(".fa-paper-plane").click(function(){
    var text = $(".type_here").val();
    if (text) {
      var new_text = $(".template .message").clone();
      new_text.children(".content").text(text);
      var current_time = new Date();
      new_text.children(".message_time").text(current_time.getHours() + ":" + current_time.getMinutes());
      $(".message_box").append(new_text);
    };
    $(".type_here").val("");

    setTimeout (function (){
      var new_text = $(".template .message").clone();
      new_text.toggleClass("green white");
      new_text.children(".content").text("You're right!");
      new_text.children(".message_time").text(current_time.getHours() + ":" + current_time.getMinutes());
      $(".message_box").append(new_text);
    }, 1500);

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
