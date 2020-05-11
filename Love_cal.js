prompt("what is your name?(PERSON1) ");
prompt("what is your name?(PERSON2) ");

var lovescore = Math.random() * 100;

lovescore = Math.floor(lovescore)+1;
if(lovescore>70){
  alert("your lovescore is "+ lovescore + "% ." + " you love each other unconditionally");
}
if(lovescore > 30 && lovescore <= 70){
  alert(" your lovescore is "+ lovescore + "% .");
}
if(lovescore <= 30){
  alert(" your lovescore is "+ lovescore + "% ." + " you love each other like iol and water.")
}
