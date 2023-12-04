function myFunction1() {
  let ges_number = Math.floor(Math.random() * 101);
  document.getElementById("demo").innerHTML =
    "The Amount She Loves You: %" + ges_number;
  document.getElementById("love").value = ges_number;
  document.getElementById("day").value = ges_number;
}

function myFunction() {
  let love = document.getElementById("love").value;
  let voteable = love < 50 ? "Dont Loves You" : "Loves You";
  document.getElementById("demo2").innerHTML =
    " The Person İn Front Of You " + voteable;
}

function myFunction3() {
  let text;
  let day = document.getElementById("day").value;
  switch (day) {
    case "1":
      text = "Fuck it";
      break;
    case "2":
      text = "Fuck it";
      break;
    case "3":
      text = "Fuck it";
      break;
    case "4":
      text = "Fuck it";
      break;
    case "5":
      text = "Fuck it";
      break;
    case "6":
      text = "Fuck it";
      break;
    case "7":
      text = "Fuck it";
      break;
    case "8":
      text = "Fuck it";
      break;
    case "9":
      text = "Fuck it";
      break;
    case "10":
      text = "Fuck it";
      break;
    case "11":
      text = "Fuck it";
      break;
    case "12":
      text = "Fuck it";
      break;
    case "13":
      text = "Fuck it";
      break;
    case "14":
      text = "Fuck it";
      break;
    case "15":
      text = "Fuck it";
      break;
    case "16":
      text = "Fuck it";
      break;
    case "17":
      text = "Fuck it";
      break;
    case "18":
      text = "Fuck it";
      break;
    case "19":
      text = "Fuck it";
      break;
    case "20":
      text = "Fuck it";
      break;
    case "21":
      text = "Fuck it";
      break;
    case "22":
      text = "Fuck it";
      break;
    case "23":
      text = "Fuck it";
      break;
    case "24":
      text = "Fuck it";
      break;
    case "25":
      text = "Fuck it";
      break;
    case "26":
      text = "Fuck it";
      break;
    case "27":
      text = "Fuck it";
      break;
    case "28":
      text = "Fuck it";
      break;
    case "29":
      text = "Fuck it";
      break;
    case "30":
      text = "Fuck it";
      break;
    case "31":
      text = "Fuck it";
      break;
    case "32":
      text = "Fuck it";
      break;
    case "33":
      text = "Fuck it";
      break;
    case "34":
      text = "Fuck it";
      break;
    case "35":
      text = "Fuck it";
      break;
    case "36":
      text = "Fuck it";
      break;
    case "37":
      text = "Fuck it";
      break;
    case "38":
      text = "Fuck it";
      break;
    case "39":
      text = "Fuck it";
      break;
    case "40":
      text = "Fuck it";
      break;
    case "41":
      text = "Give Her a Chance";
      break;
    case "42":
      text = "Give Her a Chance";
      break;
    case "43":
      text = "Give Her a Chance";
      break;
    case "44":
      text = "Give Her a Chance";
      break;
    case "45":
      text = "Give Her a Chance";
      break;
    case "46":
      text = "Give Her a Chance";
      break;
    case "47":
      text = "Give Her a Chance";
      break;
    case "48":
      text = "Give Her a Chance";
      break;
    case "49":
      text = "Give Her a Chance";
      break;
    case "50":
      text = "Give Her a Chance";
      break;
    default:
      text = "You Found The Right Person";
  }
  document.getElementById("demo3").innerHTML = text;
}
