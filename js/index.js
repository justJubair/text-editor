let isTextBold = false;

// apply text bold function
function applyTextBold() {
    const inputElement = document.getElementById('text-input');
    const inputText = inputElement.value;
    const textBold = document.getElementById('bold');
    if(inputText === '') {
        alert('Input field is empty');
        return;
    }
    textBold.classList.add('bg-violet-800', 'text-white');
    inputElement.style.fontWeight = "700";
    isTextBold = true;
}

// unapply text bold function
function unapplyTextBold() {
    const inputElement = document.getElementById('text-input');
    const textBold = document.getElementById('bold');

    textBold.classList.remove('bg-violet-800', 'text-white');
    
    inputElement.style.fontWeight = "400";
    isTextBold = false;
}

// event listener on bold button
document.getElementById('bold').addEventListener('click', () => {
    if(isTextBold === true) {
         unapplyTextBold();
    } else {
         applyTextBold();
    }
 })
 

let isTextItalic = false;
// apply text italic function
function applyTextItalic() {
    const inputElement = document.getElementById('text-input');
    const inputText = inputElement.value;
    const textItalic = document.getElementById('italic');
    if(inputText === '') {
        alert('Input field is empty');
        return;
    }
    textItalic.classList.add('bg-violet-800', 'text-white');
    inputElement.style.fontStyle = "italic";
    isTextItalic = true;
}

// unapply text italic function
function unapplyTextItalic() {
    const inputElement = document.getElementById('text-input');
    const textItalic = document.getElementById('italic');

    textItalic.classList.remove('bg-violet-800', 'text-white');
    
    inputElement.style.fontStyle = "normal";
    isTextItalic = false;
}

// add event listener on italic button
document.getElementById('italic').addEventListener('click', () => {
    if(isTextItalic) {
         unapplyTextItalic();
    } else {
         applyTextItalic();
    }
 });


 let isTextUnderline = false;
// apply text italic function
function applyTextUnderline() {
    const inputElement = document.getElementById('text-input');
    const inputText = inputElement.value;
    const textUnderline = document.getElementById('underline');
    if(inputText === '') {
        alert('Input field is empty');
        return;
    }
    textUnderline.classList.add('bg-violet-800', 'text-white');
    inputElement.style.textDecoration = 'underline';
    isTextUnderline = true;
}

// unapply text italic function
function unapplyTextUnderline() {
    const inputElement = document.getElementById('text-input');
    const textUnderline = document.getElementById('underline');

    textUnderline.classList.remove('bg-violet-800', 'text-white');
    
    inputElement.style.textDecoration = 'none';
    isTextUnderline = false;
}

// add event listener on italic button
document.getElementById('underline').addEventListener('click', () => {
    if(isTextUnderline) {
         unapplyTextUnderline();
    } else {
         applyTextUnderline();
    }
 });
 
 