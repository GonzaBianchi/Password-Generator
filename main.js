const minusculas = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
const mayusculas = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
const numeros = [1,2,3,4,5,6,7,8,9,0];
const caracteresEspeciales = ['!', '@', '#', '$', '%', '&', '*', '-', '_', '+', '=', '/', '?'];

const boton = document.querySelector('.passwordGenButton');
const myPassword = document.querySelector('.passwordGenerated');
const password = document.querySelector('.password');
const copiar = document.querySelector('.fa-copy');

boton.addeventListener('click', generatePassword);
copiar.addeventListener('click', copyToClipboard);

function generatePassword() {
    const charQuantity = parseInt(document.querySelector(".charQuantityInput").value);
    const useLetters = document.querySelector(".lettersCheckbox").checked;
    const useNumbers = document.querySelector(".numbersCheckbox").checked;
    const useCharacters = document.querySelector(".charactersCheckbox").checked;

    let availableChars = [];

    if (useLetters) {
      availableChars = availableChars.concat(minusculas, mayusculas);
    }

    if (useNumbers) {
      availableChars = availableChars.concat(numeros);
    }

    if (useCharacters) {
      availableChars = availableChars.concat(caracteresEspeciales);
    }

    let generatedPassword = '';
    for (let i = 0; i < charQuantity; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }


    password.innerText = generatedPassword;
    myPassword.style.display = "flex";
}

function copyToClipboard() {
  navigator.clipboard.writeText(password.innerHTML).then(() => {
    alert("Password copied to clipboard!");
  }).catch((err) => {
    console.error('Unable to copy to clipboard', err);
  });
}
