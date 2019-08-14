cards = [];
holdbutton = document.getElementById("hold");
//holdbutton.style.visibility = "hidden";
console.log("Version 1.0")

for(var i = 1;i<5;i++){
  type = "";
  if(i==1) {
    type = "A"
  }
  if(i==2){
    type= "B"
  }
  if(i==3){
    type= "C"
  }
  if(i==4){
  type="D"
  }

  for(var e = 2; e<15;e++){
    cards.push(type+e)
  }

}

var secondcard = false;
var endcard = false;
var ass = false;
var end = 0;
var morecards = 0;
var final = false;

function reset() {
  ass = false;
  end = 0;
  morecards = 0;
  document.getElementById("Info").innerText = "";
  document.getElementById("getcard").innerText = "1. Karte";
  final = false

}





function getcard() {

    var cardvaluex = 0;



    if(final){
      for (var i = 1; i<morecards+1; i++){
        document.getElementById(i).remove()
      }
      reset();

      console.log("Reset 1")

    }
    morecards = morecards + 1;
    var cardx = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById("getcard").innerText = morecards+1+". Karte";
    imgcard = [];

    var imgcardx = document.createElement("img");
    imgcardx.weight = "240.25‬";
    imgcardx.height = "264";
    imgcardx.id = morecards;
    imgcardx.src = "./pics/"+cardx+".png";
    //imgcardx.style.visibility = "visible";
    //var currentDiv = document.getElementById("card"+morecards-1+"img");
    //document.body.insertBefore(imgcardx, currentDiv);
    document.body.appendChild(imgcardx);

    if(cardx.length == 2){
      cardvaluex = cardx.slice(-1)
    }else{
      substring = cardx.slice(-2);
      if(substring == "14") {
        console.log("Ass")
        if(end + 11 >21){
          cardvaluex = "1";
          ass = false
        }else{
          cardvaluex = "11";
          console.log("Ass Abfrage")
          if(morecards <3) {
            ass = true

            console.log("Ass True")
          }
        }


      }else {
        cardvaluex = "10"

      }
    }
    cardvaluex = parseInt(cardvaluex, 10);

    console.log(end);
    end = end + cardvaluex;
    console.log(end);
    if(end == 21){

      document.getElementById("Info").innerText = "21";

      document.getElementById("getcard").innerText = "Nächstes Spiel";
      final = true;
      secondcard = false

    }
    if(end > 21){
      if(!ass){
        console.log("Kein Ass")

        document.getElementById("Info").innerText = "Busted";

        document.getElementById("getcard").innerText = "Nächstes Spiel";
        final = true;
        secondcard = false
      }else{

        end = end - 10;
        console.log(end);
        ass = false

      }
    }


    console.log(endcard);
    document.getElementById("Points").innerText = "Points : "+end
    if(!cardvaluex == 11){
      if(morecards > 2){
        ass = false
      }
    }

}









function hold() {
  var morecardsdealer = 0;
  var assdealerdealer = false;
  var enddealer = 0;




  var imgcarddealer = document.createElement("img");
  imgcarddealer.weight = "240.25‬";
  imgcarddealer.height = "264";
  imgcarddealer.id = morecards;
  imgcarddealer.src = "./pics/"+"green_back"+".png";
  document.body.appendChild(imgcarddealer);


  while(enddealer <17){
      var cardvaluex = 0;



      morecardsdealer = morecardsdealer + 1;
      var cardx = cards[Math.floor(Math.random() * cards.length)];
      console.log(cardx)
      var imgcardx = document.createElement("img");
      imgcardx.weight = "240.25‬";
      imgcardx.height = "264";
      imgcardx.id = morecards;
      imgcardx.src = "./pics/"+cardx+".png";
      document.body.appendChild(imgcardx);

      if(cardx.length == 2){
        cardvaluex = cardx.slice(-1)
        console.log("Lenght: 2")
      }else {
        substring = cardx.slice(-2);
        if (substring == "14") {
          console.log("assdealer")
          if (end + 11 > 21) {
            cardvaluex = "1";
            assdealer = false
          } else {
            cardvaluex = "11";
            console.log("assdealer Abfrage")
            if (morecards < 3) {
              assdealer = true

              console.log("assdealer True")
            }
          }

        } else {
          cardvaluex = "10"

        }
      }
        cardvaluex = parseInt(cardvaluex, 10);
        console.log("Wert:"+cardvaluex);
        enddealer = enddealer + cardvaluex;
        console.log(enddealer);
        if(enddealer == 21){

          document.getElementById("Info").innerText = "21";

          document.getElementById("getcard").innerText = "Nächstes Spiel";
          final = true;
          secondcard = false

        }
        if(enddealer > 21){
          if(!assdealer){
            console.log("Kein assdealer")

            document.getElementById("Info").innerText = "Busted";

            document.getElementById("getcard").innerText = "Nächstes Spiel";
            final = true;
            secondcard = false
          }else{

            enddealer = enddealer - 10;
            console.log(end);
            assdealer = false

          }
        }

      }


  console.log(enddealer)
  document.getElementById("DealerPoints").innerText = "Dealer Points : "+enddealer







}

