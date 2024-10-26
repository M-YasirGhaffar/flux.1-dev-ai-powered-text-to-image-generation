# FLUX.1-schnell

FLUX.1-schnell is a cutting-edge image generation tool powered by an AI model developed by Black Forest Labs. This state-of-the-art model is available through Hugging Face’s inference API and enables users to generate high-quality, unique images based on their text prompts. This application is a MERN stack implementation of the text-to-image model using Hugging Face's inference API.

## Table of Contents

- About
- Features
- Usage
- Installation
- Configuration
- [Running the Application](#running-the-application)
- Contributing

## About

FLUX.1-schnell interprets complex text descriptions to create visually stunning images, offering a versatile tool for creative professionals, marketers, and artists. This project applies web development, APIs, and the MERN stack to test full-stack solution-building skills in an exciting AI-driven project.

## Features

- **Text-to-Image Generation**: Generate images from text prompts using the FLUX.1-schnell AI model.
- **Gallery Storage**: Last 20 generated images saved in local storage.
- **Full-Screen View**: View images in full-screen mode.
- **Request Limits**: Up to 10 image generation requests per user per hour, with a global limit of 25 requests per hour.

## Usage

1. **Enter a Prompt**: Type a description of the image you want to create.
2. **Generate Image**: Click "Generate Image" to start the process.
3. **Wait for the Result**: Image generation takes just a few seconds.
4. **View the Generated Image**: Your image will be displayed below the form.
5. **Gallery Storage**: View the last 20 generated images in the Gallery.
6. **Request Limits**: Up to 10 requests per user per hour, with a global limit of 25 requests per hour.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Clone the Repository

```sh
git clone https://github.com/M-YasirGhaffar/flux.1-schnell-ai-image-generator
cd flux.1-schnell-ai-image-generator
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

Create a `.env` file in both the 

client

 and 

server

 directories based on the `.env.example` files provided.

#### Client `.env`

```sh
VITE_API_URL=https://your-api-url.com/api/generate-image/
```

#### Server `.env`

```sh
PORT=8000
HUGGING_FACE_API_KEY=your-hugging-face-api-key
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
