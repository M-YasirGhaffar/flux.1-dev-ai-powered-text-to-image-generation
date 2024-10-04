# FLUX.1-dev 

FLUX.1-dev is a cutting-edge image generation tool powered by an AI model developed by Black Forest Labs. This state-of-the-art model is available through Hugging Face’s inference API and enables users to generate high-quality, unique images based on their text prompts. This application is a MERN stack implementation of the text-to-image model using hugging face interface API.

## Table of Contents

- About
- Features
- Usage
- Installation
- Configuration
- [Running the Application](#running-the-application)
- Contributing
- License

## About

FLUX.1-dev is designed to interpret complex text descriptions and create visually stunning, relevant images. It offers creative professionals, marketers, and artists a versatile tool to bring their ideas to life with AI-driven precision.

This project was created to apply knowledge of web development, APIs, and the MERN stack, and to test full-stack solution-building skills in a unique and exciting project. Image generation with AI is an area that presents both technical challenges and creative opportunities, making it the perfect project for testing and expanding skills.

By leveraging the power of FLUX.1-dev, we aim to continuously evolve the capabilities of AI-generated imagery, ensuring the highest quality and creativity in every image.

## Features

- **Text-to-Image Generation**: Generate images based on text prompts using the FLUX.1-dev AI model.
- **Gallery Storage**: The last 20 generated images are saved in local storage.
- **Full-Screen View**: View generated images in full-screen mode.
- **Request Limits**: Each user can make up to 10 image generation requests per hour, with a global limit of 25 requests per hour.

## Usage

1. **Enter a Prompt**: On the Generator page, type a description of the image you want to create. Be creative, but remember that the quality of the prompt can greatly affect the results.
2. **Generate Image**: Click the "Generate Image" button to start the process. The AI model FLUX.1-dev (powered by Hugging Face's API) will interpret your prompt and generate an image.
3. **Wait for the Result**: Image generation usually takes between 1 and 3 minutes. You’ll see a loading indicator while the image is being generated.
4. **View the Generated Image**: Once complete, your image will be displayed below the form. Each image reflects the prompt you entered, but the results may vary.
5. **Gallery Storage**: The last 20 generated images are saved in your local storage. You can view them in the Gallery.
6. **Request Limits**: Each user can make up to 10 image generation requests per hour. There’s a global limit of 50 requests across all users in one day.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Clone the Repository

```sh
git clone https://github.com/M-YasirGhaffar/flux.1-dev-ai-powered-text-to-image-generation
cd flux.1-dev-ai-powered-text-to-image-generation
```

### Install Dependencies

Navigate to both the client and server directories and install the dependencies:

```sh
cd client
npm install

cd ../server
npm install
```

## Configuration

### Environment Variables

Create a [`.env`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FKiteretsu%2FDesktop%2Fhuggingface-text-to-image-generation-api%2Fclient%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FKiteretsu%2FDesktop%2Fhuggingface-text-to-image-generation-api%2Fserver%2Fconfig%2Fconfig.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A15%7D%7D%5D%2C%22186aa08c-6f25-40f2-84a0-a84197c6ecd7%22%5D "Go to definition") file in both the 

client

 and 

server

 directories based on the 

.env.example

 files provided.

#### Client [`.env`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FKiteretsu%2FDesktop%2Fhuggingface-text-to-image-generation-api%2Fclient%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FKiteretsu%2FDesktop%2Fhuggingface-text-to-image-generation-api%2Fserver%2Fconfig%2Fconfig.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A15%7D%7D%5D%2C%22186aa08c-6f25-40f2-84a0-a84197c6ecd7%22%5D "Go to definition")

```sh
VITE_API_URL=https://your-api-url.com/api/generate-image/
```

#### Server [`.env`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FKiteretsu%2FDesktop%2Fhuggingface-text-to-image-generation-api%2Fclient%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FKiteretsu%2FDesktop%2Fhuggingface-text-to-image-generation-api%2Fserver%2Fconfig%2Fconfig.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A15%7D%7D%5D%2C%22186aa08c-6f25-40f2-84a0-a84197c6ecd7%22%5D "Go to definition")

```sh
PORT=8000
HUGGING_FACE_API

_KEY

=your-hugging-face-api-key
```

## Running the Application

### Start the Server

```sh
cd server
npm start
```

### Start the Client

In a new terminal window:

```sh
cd client
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
