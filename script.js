const buttonSubmit = document.querySelector('.button');
const inputImg = document.getElementById('imagem');
const erro = document.querySelector('.erro');
const load = document.querySelector('.loadContainer');
const formUploadConteudo = document.querySelector('.formUpload');

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    if (!inputImg.files.length) {
        erro.innerHTML = 'Selecione uma imagem';
    } else {
        formUploadConteudo.style.display = 'none';
        load.style.display = 'block';

        setTimeout(() => {
            document.querySelector('.titulo').style.display = 'none';
            document.querySelector('.container').style.display = 'none';
        }, 2050);

        setTimeout(() => {
            document.querySelector('.none').style.display = 'block';
            document.querySelector('.imagePreviewContainer').style.display = 'block';
        }, 2050);

    }
});

const imagePreview = document.getElementById('image-preview');

inputImg.addEventListener('change', function () {
    const file = inputImg.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            imagePreview.src = reader.result;
        });

        reader.readAsDataURL(file);
    }
});



const inputColor = document.getElementById('color-picker');
const colorValue = document.getElementById('value');

inputColor.addEventListener('change', (event) => {
    const corHex = event.target.value;
    colorValue.style.backgroundColor = `${corHex}`;
    colorValue.textContent = ` ${corHex}`;
})



const voltar = document.querySelector('.voltar').addEventListener('click', () => {
    location.reload();
})