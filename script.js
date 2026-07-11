const text = `
Dear Sayang ❤️

Happy Birthday.

Terima kasih sudah hadir dalam hidupku.

Semoga semua impianmu tercapai.

Aku akan selalu mendukungmu.

I Love You Forever ❤️
`;

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

document.getElementById("loveBtn").onclick=()=>{

alert("I LOVE YOU ❤️");

}
