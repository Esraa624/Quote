
var wisdom=[
    {qute:`"It's not what happens to you, but how you react to it that matters."`,auther:`--Epictetus`},
    {qute:`"You miss 100% of the shots you don't take."`,auther:`--Wayne Gretzy`},
    {qute:`"Resentment is like drinking poison and waiting for your enemies to die."`,auther:`--Nelson Mandela`},
    {qute:`"The best revenge is massive success."`,auther:`--Frank Sinatra`},
    {qute:`"Do not take life too seriously. You will not get out alive."`,auther:`--Elbert Hubbard`},
];

function newquote(){
    var randomNumber = Math.floor(Math.random() * 5);
    document.getElementById("display").innerHTML = `
      <p id="quote" class="fs-2 fw-2 my-4">${wisdom[randomNumber].qute} </p>
      <p id="author" class="fs-2 fw-2 ">${wisdom[randomNumber].auther}</p>
    `;
  }