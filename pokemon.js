function getPokemon(url) {
  console.log("getting")
  $.ajax({
    method: "GET",
    url: url,    
    success: function(res) {
      console.log("got it")
      console.log(res)
      Name.html(res["name"] + ":")
      ID.html("ID: " + res["id"])
      Type.html("Type(s): " + res["types"])      
      ability.html ("Ability(ies): " + res["ability"])
    }
  })
}

function getTypes() {
}


var input = $("#input");
var Name = $("#name-text");
var ID = $("#id");
var Type = $("#type");
var ability = $("#ability");
var number = 0;

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var number = input.val();
    var url = "https://pokeapi.co/api/v2/pokemon/" +  number;
    getPokemon(url)
  }
})