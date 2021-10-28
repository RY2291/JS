// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").removeClass("box1-ext");
//   });
// });


// ----------------マウスクリックイベント$('.セレクタ名').on('click', function(){});--------------------------------------------------------------------
// $(function(){
//   $(".box1").on("click", function(){
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").removeClass("box1-ext");
//   });
// });
// ----------------------クリックされたものをスライドアップさせる------------------------------------------
// $(function(){
//   $(".bg1").on("click", function(){
//     $(".bg1").slideUp();
//   });
//   $(".bg2").on("click", function(){
//     $(".bg2").slideUp();
//   });
//   $(".bg3").on("click", function(){
//     $(".bg3").slideUp();
//   });
//   $(".bg4").on("click", function(){
//     $(".bg4").slideUp();
//   });
// })


// ------上記はイベントを４つ作成していたが、thisでクリックされた要素のみメソッドで変化をさせる------
// $(function(){
//   $(".box1").on("click", function(){
//     $(this).slideUp();
//   });
// });

// -------------------------------------------------------------------------------------
$(function(){
  $("button").on("click", function(){
    $("ul").children().css("color", "red");
  });
});