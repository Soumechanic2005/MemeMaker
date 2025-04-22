const imageUpload = document.getElementById('image-upload');
const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');
const memeCanvas = document.getElementById('meme-canvas');
const ctx = memeCanvas.getContext('2d');
const fontFamilySelect = document.getElementById('font-family');
const fontSizeInput = document.getElementById('font-size');
const textColorInput = document.getElementById('text-color');
const outlineColorInput = document.getElementById('outline-color');
const outlineWidthInput = document.getElementById('outline-width');
const topTextYInput = document.getElementById('top-text-y');
const bottomTextYInput = document.getElementById('bottom-text-y');
const applyStyleButton = document.getElementById('apply-style');
const downloadButton = document.getElementById('download-button');
const presetStyleButtons = document.querySelectorAll('.preset-style-button');

let image = new Image();
image.onload = () => {
    updateMemeCanvas();
};

imageUpload.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.text();
                console.log(result); // "Image uploaded successfully"
                // Optionally, you could now update the canvas with this uploaded image
                const reader = new FileReader();
                reader.onload = (e) => {
                    image.src = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                console.error('Image upload failed.');
            }
        } catch (error) {
            console.error('There was an error uploading the image:', error);
        }
    } else {
        ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
        image.src = ''; // Clear the image source
    }
});
topTextInput.addEventListener('input', updateMemeCanvas);
bottomTextInput.addEventListener('input', updateMemeCanvas);
fontFamilySelect.addEventListener('change', updateMemeCanvas);
fontSizeInput.addEventListener('input', updateMemeCanvas);
textColorInput.addEventListener('input', updateMemeCanvas);
outlineColorInput.addEventListener('input', updateMemeCanvas);
outlineWidthInput.addEventListener('input', updateMemeCanvas);
topTextYInput.addEventListener('input', updateMemeCanvas);
bottomTextYInput.addEventListener('input', updateMemeCanvas);
applyStyleButton.addEventListener('click', updateMemeCanvas);

presetStyleButtons.forEach(button => {
    button.addEventListener('click', function() {
        fontFamilySelect.value = this.dataset.font;
        fontSizeInput.value = this.dataset.size;
        textColorInput.value = this.dataset.color;
        outlineColorInput.value = this.dataset.outline;
        outlineWidthInput.value = this.dataset.outlineWidth;
        updateMemeCanvas();
    });
});

function updateMemeCanvas() {
    const width = memeCanvas.width;
    const height = memeCanvas.height;
    ctx.clearRect(0, 0, width, height);

    if (image.src) {
        const aspectRatio = image.width / image.height;
        let newWidth = width;
        let newHeight = height;

        if (newWidth / aspectRatio > newHeight) {
            newWidth = newHeight * aspectRatio;
        } else {
            newHeight = newWidth / aspectRatio;
        }

        const xOffset = (width - newWidth) / 2;
        const yOffset = (height - newHeight) / 2;

        ctx.drawImage(image, xOffset, yOffset, newWidth, newHeight);
    } else {
        ctx.fillStyle = '#eee';
        ctx.fillRect(0, 0, width, height);
        ctx.font = '20px sans-serif';
        ctx.fillStyle = '#888';
        ctx.textAlign = 'center';
        ctx.fillText('No Image Uploaded', width / 2, height / 2);
    }

    const topText = topTextInput.value.toUpperCase();
    const bottomText = bottomTextInput.value.toUpperCase();
    const fontFamily = fontFamilySelect.value;
    const fontSize = fontSizeInput.value;
    const textColor = textColorInput.value;
    const outlineColor = outlineColorInput.value;
    const outlineWidth = outlineWidthInput.value;
    const topY = parseInt(topTextYInput.value);
    const bottomY = parseInt(bottomTextYInput.value);

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.lineWidth = outlineWidth;
    ctx.strokeStyle = outlineColor;

    // Draw top text with outline
    ctx.strokeText(topText, width / 2, topY);
    ctx.fillText(topText, width / 2, topY);

    // Draw bottom text with outline
    ctx.strokeText(bottomText, width / 2, height - bottomY);
    ctx.fillText(bottomText, width / 2, height - bottomY);
}

downloadButton.addEventListener('click', () => {
    const dataURL = memeCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'meme.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Initial call to set up canvas if there's a default state
updateMemeCanvas();
