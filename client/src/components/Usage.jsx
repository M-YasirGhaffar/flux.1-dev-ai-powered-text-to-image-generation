import React from 'react';

const Usage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#008080]">How to Use FLUX.1-dev</h1>
      <ol className="list-decimal list-inside space-y-3 text-gray-300 font-sans">
        <li>
          <span className="font-semibold">Enter a Prompt:</span> On the Generator page, type a description of the image you want to create. Be creative, but remember that the quality of the prompt can greatly affect the results.
        </li>
        <li>
          <span className="font-semibold">Generate Image:</span> Click the "Generate Image" button to start the process. The AI model <span className="font-bold">FLUX.1-dev</span> (powered by Hugging Face's API) will interpret your prompt and generate an image.
        </li>
        <li>
          <span className="font-semibold">Wait for the Result:</span> Image generation usually takes between 1 and 3 minutes, though it could take longer if the backend server on Render.com is experiencing high traffic or has been inactive. You’ll see a loading indicator while the image is being generated.
        </li>
        <li>
          <span className="font-semibold">View the Generated Image:</span> Once complete, your image will be displayed below the form. Each image reflects the prompt you entered, but the results may vary.
        </li>
        <li>
          <span className="font-semibold">Gallery Storage:</span> The last 20 generated images are saved in your local storage. You can view them in the Gallery, but images cannot be regenerated, and only the most recent 20 are stored.
        </li>
        <li>
          <span className="font-semibold">Request Limits:</span> Each user can make up to 10 image generation requests per hour. There’s a global limit of 50 requests across all users in one day, after which you’ll need to wait until the limit resets.
        </li>
        <li>
          <span className="font-semibold">Explore the Gallery:</span> You can preview your previously generated images in the Gallery. However, full-screen views and regenerating images are not supported at this time.
        </li>
      </ol>
      <p className="mt-6 text-gray-300 font-sans">
        Please note that while the image generation process is highly advanced, some results may include inappropriate or unexpected content, such as NSFW (not safe for work), adult, or violent imagery. We recommend exercising caution while using this tool.
      </p>
      <p className="mt-4 text-gray-300 font-sans">
        This is an experimental project, so results might sometimes be inaccurate or unexpected. Your experience with <span className="font-bold">FLUX.1-dev</span> is a journey of creativity and discovery, and we appreciate your understanding!
      </p>
    </div>
  );
};

export default Usage;
