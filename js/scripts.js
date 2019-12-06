$(document).ready(function() {
  var favoriteFlavors = ["Chocolate","Strawberry","Vanilla","Rocky Road"]

  favoriteFlavors.forEach(function(flavor){
    $("#icecream").append('<li>' + flavor + '</li>')
  })

})
