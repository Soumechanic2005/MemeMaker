# Ultimate Meme Machine

This is a simple web application that allows you to create memes by uploading an image and adding top and bottom text with various styling options.

## Features

* **Image Upload:** Upload your own images to use in memes.
* **Top and Bottom Text:** Add custom text to the top and bottom of the image.
* **Font Styling:** Choose from different font families and adjust the font size.
* **Text Color and Outline:** Customize the color and outline of your meme text.
* **Text Position:** Adjust the vertical position of the top and bottom text.
* **Preset Styles:** Quickly apply common meme text styles.
* **Download:** Save your created meme as a PNG image.
* **Backend Integration (Flask):** Basic backend to handle image uploads.

## Setup

To run this application on your local machine, follow these steps:

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone [your-github-repository-url]
    ```
    *(Replace `[your-github-repository-url]` with the actual URL of your GitHub repository)*

2.  **Navigate to the project directory:**
    ```bash
    cd MemeMakerApp
    ```
    *(Replace `MemeMakerApp` with the name of your project folder if it's different)*

3.  **Install Flask (if you haven't already):**
    ```bash
    pip install Flask
    ```

4.  **Run the Flask development server:**
    ```bash
    python app.py
    ```
    This will start the server, usually accessible at `http://127.0.0.1:5000/`. Keep this terminal window open while you use the application.

5.  **Open your web browser:**
    Go to `http://127.0.0.1:5000/` to use the MemeMaker application.

## How to Use

1.  **Upload an Image:** Click the "Upload Image" button and select an image from your computer.
2.  **Add Text:** Enter your desired top and bottom text in the respective input fields.
3.  **Customize Style:** Adjust the font family, size, text color, outline color, and outline width using the controls.
4.  **Adjust Text Position:** Modify the Top Y Position and Bottom Y Position to fine-tune the vertical placement of the text.
5.  **Apply Preset Styles:** Click the preset style buttons for quick styling options.
6.  **View Meme:** The generated meme will be displayed on the canvas.
7.  **Download:** Click the "Download Meme" button to save the meme as a PNG file.

## Next Steps (Future Enhancements)

* Saving generated memes to the server.
* User authentication to manage saved memes.
* More advanced image editing features.
* API endpoints for wider integration.

## Contributing

*(Optional: Add information about how others can contribute if this is a public project)*

## License

*(Optional: Add license information if applicable)*
