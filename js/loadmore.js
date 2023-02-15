$(document).ready(function ($) {
  $(function () {
    $(".loadmore-frame .col-md-4").slice(0, 3).show();
    $("body").on(
      "click touchstart",
      ".loadmore-frame .load-more",
      function (e) {
        e.preventDefault();
        $(".loadmore-frame .col-md-4:hidden").slice(0, 3).slideDown();
        if ($(".loadmore-frame .col-md-4:hidden").length == 0) {
          $(".loadmore-frame .load-more").css("visibility", "hidden");
        }
      }
    );
  });
});
