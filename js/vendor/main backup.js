cards = [];
var holdbutton = document.getElementById("hold");
holdbutton.style.visibility = "hidden";


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
var cardvalue1 = 0;
var cardvalue2 = 0;
var ass = false;
var end = 0;
var morecards = 2;
var final = false;

function reset() {
  secondcard = false;
  endcard = false;
  cardvalue1 = 0;
  cardvalue2 = 0;
  ass = false;
  end = 0;
  morecards = 2;
  document.getElementById("Info").innerText = "";
  document.getElementById("getcard").innerText = "1. Karte";
  final = false

}





function getcard() {

  if(!secondcard){
    if(final == true){
      for (var i = 1; i<morecards+1; i++){
        document.getElementById(i).remove()
      }
      reset();

      console.log("Reset 1")

    }
    var card1 = cards[Math.floor(Math.random() * cards.length)];

    var imgcard1 = document.createElement("img");
    imgcard1.weight = "240.25‬";
    imgcard1.height = "264";
    imgcard1.id = "1";
    imgcard1.src = "./pics/"+card1+".png";

    document.body.appendChild(imgcard1);

    document.getElementById("getcard").innerText = "2. Karte";
    if(card1.length == 2){
      cardvalue1 = card1.slice(-1)
    }else{
      substring = card1.slice(-2);
      if(substring == "14") {
        cardvalue1 = "11";
        ass = true
      }else {
        cardvalue1 = "10"
      }
    }
    console.log(cardvalue1);
    secondcard = true;
    console.log(endcard);
    document.getElementById("Points").innerText = "Points : "+cardvalue1

  }else{
    if(!endcard){
      var card2 = cards[Math.floor(Math.random() * cards.length)];

      var imgcard2 = document.createElement("img");
      imgcard2.weight = "240.25‬";
      imgcard2.height = "264";
      imgcard2.id = "2";
      imgcard2.src = "./pics/"+card2+".png";
      document.body.appendChild(imgcard2);

      if(card2.length == 2){
        cardvalue2 = card2.slice(-1)
      }else{
        substring = card2.slice(-2);
        if(substring == "14") {
          cardvalue2 = "11";
          ass = true
        }else {
          cardvalue2 = "10"
        }
      }
      console.log(cardvalue2);
      cardvalue1 = parseInt(cardvalue1, 10);
      cardvalue2 = parseInt(cardvalue2, 10);
      end = cardvalue1 + cardvalue2;
      console.log(end);


      if(end == 21){

        document.getElementById("Info").innerText = "BlackJack";

        document.getElementById("getcard").innerText = "Nächstes Spiel";
        final = true;
        secondcard = false



      }else{
        if(end == 22){
          end = 12
        }
        endcard = true;
        document.getElementById("getcard").innerText = "3. Karte";
        document.getElementById("hold").innerText = "Keine Karte"

      }
      document.getElementById("Points").innerText = "Points : "+end;

      console.log(endcard)
    }else{

      morecards = morecards + 1;
      var card3 = cards[Math.floor(Math.random() * cards.length)];
      var PlayerCard = [];
      document.getElementById("getcard").innerText = morecards+1+". Karte";
      imgcard = [];

      var imgcard3 = document.createElement("img");
      imgcard3.weight = "240.25‬";
      imgcard3.height = "264";
      imgcard3.id = morecards;
      imgcard3.src = "./pics/"+card3+".png";
      //imgcard3.style.visibility = "visible";
      //var currentDiv = document.getElementById("card"+morecards-1+"img");
      //document.body.insertBefore(imgcard3, currentDiv);
      document.body.appendChild(imgcard3);

      if(card3.length == 2){
        cardvalue3 = card3.slice(-1)
      }else{
        substring = card3.slice(-2);
        if(substring == "14") {
          if(end + 11 >21){
            cardvalue3 = "1";
            ass = false
          }else{
            cardvalue3 = "11";
            ass = false
          }
        }else {
          cardvalue3 = "10"
        }
      }
      cardvalue3 = parseInt(cardvalue3, 10);

      console.log(end);
      end = end + cardvalue3;
      console.log(end);
      if(end == 21){

        document.getElementById("Info").innerText = "21";

        document.getElementById("getcard").innerText = "Nächstes Spiel";
        final = true;
        secondcard = false

      }
      if(end > 21){
        if(!ass){

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
      ass = false;

      console.log(endcard);
      document.getElementById("Points").innerText = "Points : "+end
    }

  }



}

function hold() {

}

