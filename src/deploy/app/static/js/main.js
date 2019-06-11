const submit = (e) => {
    e.preventDefault();
    let text = inputForm.input.value;
    let style = 0;
    route = "/api";
    body = {text: text, style: style};

    fetch(route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) response.json().then(data => display_svg(data["img"]));
    })
};

const display_svg = (svg) => {
    let img = document.createElement('div');
    img.className = "output-img";
    img.innerHTML = svg;
    outputImgWrapper.innerHTML = '';
    outputImgWrapper.appendChild(img);
};

let container = document.createElement('div');
container.className = 'container';

let inputWrapper = document.createElement('div');
inputWrapper.className = 'input-wrapper';

let inputForm = document.createElement('form');
inputForm.className = 'input-form';
inputForm.onsubmit = (e) => {
    submit(e)
};

let inputField = document.createElement('input');
inputField.type = 'text';
inputField.className = 'input-field';
inputField.placeholder = 'Write your masterpiece here';
inputField.name = 'input';

let inputBtn = document.createElement('button');
inputBtn.type = 'submit';
inputBtn.className = 'input-submit-btn';
inputBtn.innerText = 'Generate!';

let inputRadioContainer = document.createElement('div');
inputRadioContainer.className = 'input-radio-container';

["casual", "italic", "bold"].forEach((name) => {
    let btn = document.createElement('input');
    btn.type = 'radio';
    btn.id = name;
    btn.className = 'input-radio-btn';
    btn.name = "text-style";
    btn.value = name;
    inputRadioContainer.appendChild(btn);

    let btnLabel = document.createElement('label');
    btnLabel.className = 'input-radio-label';
    btnLabel.innerText = name;
    btnLabel.htmlFor = name;
    inputRadioContainer.appendChild(btnLabel)
});
inputRadioContainer.firstChild.checked = true;


let outputWrapper = document.createElement('div');
outputWrapper.className = 'output-wrapper';

let outputImgWrapper = document.createElement('div');
outputImgWrapper.className = 'output-img-wrapper';

outputWrapper.appendChild(outputImgWrapper);
inputForm.appendChild(inputField);
inputForm.appendChild(inputRadioContainer);
inputForm.appendChild(inputBtn);
inputWrapper.appendChild(inputForm);
container.appendChild(inputWrapper);

container.appendChild(outputWrapper);
document.body.appendChild(container);

