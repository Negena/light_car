$(function(){
  var wheels = $(".wheels img")
    $(document).on("keypress", function(e){
      if(e.which == 13){
        $(wheels).toggleClass("drive")
        $(wheels).toggleClass("circle")
        $(wheels).toggleClass("building")
        $(wheels).toggleClass("road")
      }
    })
})
