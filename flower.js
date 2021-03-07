alert("welcum")

var type = prompt("what kind of flower would you like ,rose or tulip?") 
var j ="rose" 
var t="tulip" 
c=0
while(type !="rose" & type != "tulip") 
{var type = prompt("what kind of flower would you like rose or tulip?")

}


if (type == j )
{
document.write ("<Image src= 'rose.jpeg'></Image>");
 var b=prompt("how many roses do you need ?")

 for (var i = 0; i <b ; i++)
  {
    document.write("<Image  src= '1 rose.jpg' ; dis ></Image>");
     
 }

}

if (type == t)
{
    document.write ("<Image src= 'tulips.jpg'></Image>")
   var b=prompt("how many tulips do you need ?")

   for (var i = 0; i <b ; i++)
   {
     document.write("<Image src= '1tulip.jpg'></Image>");
      
  }
}


