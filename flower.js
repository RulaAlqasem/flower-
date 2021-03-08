alert("welcum");

var type = prompt("what kind of flower would you like ,rose or tulip?")
var j = "rose"
var t = "tulip"

while (type != "rose" & type != "tulip") {
  var type = prompt("what kind of flower would you like rose or tulip?")

}


if (type == j) {

  document.write("<Image src= 'rose.jpeg'  class='m' ></Image>");
function rose (){

  document.writeln('<img src="rr1.jpg" alt="tulip" class="d"></img>');

 
  document.writeln("<p class='a' >A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.[1] There are over three hundred species and tens of thousands of cultivars.[1] They form a group of  plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp  prickles.[1] Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds.[1] Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.[1] Species, cultivars and hybrids are all widely grown for their beauty  and often are fragrant.Roses have acquired cultural significance in many societies.[1] Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height.[1] Different species hybridize easily, and this has been used in the development of the wide range of garden roses.[1]</p>");
}
  var b = prompt("how many roses do you need ?")


  for (var i = 0; i < b; i++) {
    document.writeln("<Image  src= '1 rose.jpg' class='e'></Image>");

  }

}

if (type == t) {
  document.write("<Image src= 'tulips.jpg'  class='m'></Image>")
  
  function tulip (){

  document.writeln('<img src="tt1.jpg"  class="d"></img>');

  document.writeln("<p class='a'>(Tulipa) form a genus of spring-blooming perennial herbaceous bulbiferous geophytes (having bulbs as  storage organs). The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white (usually in warm colors). They often have a different colored blotch at the base of the tepals (petals and  sepals, collectively), internally. Because of a degree of variability within the populations, and a long  history of cultivation, classification has been complex and controversial. The tulip is a member of the lily family,  Liliaceae, along with 14 other genera, where it is most closely related to Amana, Erythronium and Gagea in  the tribe Lilieae. There are about 75 species, and these are divided among four subgenera. The name tulip is  thought to be derived from a Persian word for turban, which it may have been thought to resemble. Tulips  originally were found in a band stretching from Southern Europe to Central Asia, but since the seventeenth century have become widely naturalised and cultivated (see map). In their natural state they are adapted to steppes and mountainous areas with temperate climates. Flowering in the spring, they become dormant in the  summer once the flowers and leaves die back, emerging above ground as a shoot from the underground bulb in early spring.</p>");
  }
  var b = prompt("how many tulips do you need ?")

  for (var i = 0; i < b; i++) {
    document.writeln("<Image src= '1tulip.jpg' class='e'></Image>");

  }
}


