// text bold, italic and underline section
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
    };
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


// text alignment section

// text left alignment section
let isTextLeft = false;

//apply text align left function
function applyTextAlignLeft() {
    const alignLeft = document.getElementById('align-left');
    const inputElement = document.getElementById('text-input');
    const inputText = inputElement.value;
    if(inputText === '') {
        alert('Input field is empty');
        return;
    }
    inputElement.style.textAlign = 'left';
    alignLeft.classList.add('bg-blue-800', 'text-white');

    isTextLeft = true;
}

// unapply text align left function
function unapplyTextAlignLeft() {
    const alignLeft = document.getElementById('align-left');
    const inputElement = document.getElementById('text-input');

    inputElement.style.textAlign = '';
    alignLeft.classList.remove('bg-blue-800', 'text-white');
    isTextLeft = false;
}
 
//  event listener on text align left button
document.getElementById('align-left').addEventListener('click', ()=> {
    if(isTextLeft) {
        unapplyTextAlignLeft()
    } else {
        applyTextAlignLeft();
    }
})

// text center alignment section
let isTextCenter = false;

// text center apply function
function applyTextCenter() {
    const alignCenter = document.getElementById('align-center');
    const inputElement = document.getElementById('text-input');
    const inputText = inputElement.value;
    if(inputText === '') {
        alert('Input field is empty');
        return;
    }
    inputElement.style.textAlign = 'center';
    alignCenter.classList.add('bg-blue-800', 'text-white');
    isTextCenter = true;
}

// text center unapply function
function unapplyTextCenter() {
    const alignCenter = document.getElementById('align-center');
    const inputElement = document.getElementById('text-input');

    inputElement.style.textAlign = '';
    alignCenter.classList.remove('bg-blue-800', 'text-white');
    isTextCenter = false;
}

// add event listener on align center button
document.getElementById('align-center').addEventListener('click', () => {
    if(isTextCenter) {
        unapplyTextCenter();
    } else {
        applyTextCenter();
    }
});


// text right alignment section
let isTextRight = false;

// text right apply function
function applyTextRight() {
    const alignRight = document.getElementById('align-right');
    const inputElement = document.getElementById('text-input');
    const inputText = inputElement.value;
    if(inputText === '') {
        alert('Input field is empty');
        return;
    }
    inputElement.style.textAlign = 'right';
    alignRight.classList.add('bg-blue-800', 'text-white');
    isTextRight = true;
}

// text right unapply function
function unapplyTextRight() {
    const alignRight = document.getElementById('align-right');
    const inputElement = document.getElementById('text-input');

    inputElement.style.textAlign = '';
    alignRight.classList.remove('bg-blue-800', 'text-white');
    isTextRight = false;
}

// add event listener on align center button
document.getElementById('align-right').addEventListener('click', () => {
    if(isTextRight) {
        unapplyTextRight();
    } else {
        applyTextRight();
    }
});


// font size section
document.getElementById('font-size').addEventListener('click', (e) => {
    const inputElement = document.getElementById('text-input');
    const inputText = inputElement.value;
    if(e.target.value < 16) {
        alert('This is the smallest you can go')
        e.target.value = 16;
    } else if(inputText === '') {
       alert('Text field is empty')
       e.target.value = 16;
    }

    const indexFont = (e.target.value);
    const newFontSize = indexFont + 'px';
    console.log(newFontSize)
    
    inputElement.style.fontSize = newFontSize;
});
