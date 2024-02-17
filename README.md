 # Duck Explorer

duck-explorer is a full stack project which uses React and Express to fetch duck images and analyze them with the Open AI vision model API .

## Project Screenshots

The Duck Explorer program looks like this in a localhost development environment:

<img src="https://github.com/danctila/my-school/assets/134968796/bb90c1cf-8aec-4f6d-b760-ca17e5509c2c" alt="duck explorer website 1" width="800"/>

<img src="https://github.com/danctila/my-school/assets/134968796/df11980d-543f-461e-ab78-f4792f87330f" alt="duck explorer website 2" width="800"/>

<img src="https://github.com/danctila/my-school/assets/134968796/7710761d-44e9-45af-add9-21671953fc5b" alt="duck explorer website 3" width="800"/>

## Installation

### Prerequisites 

In order to run this project **you will need 3 applications installed** on your machine

#### 1 - Visual Studio Code
Install Microsoft's Visual Studio Code IDE from [this website](https://code.visualstudio.com/ "this website")
<img src="https://github.com/danctila/my-school/assets/134968796/93371555-3f98-4708-b17d-56a4ab4233ea" alt="visual studio code website" width="800"/>
#### 2 - Node JS
Install Node JS from [this website](https://nodejs.org/en "this website") onto your machine to be able to run the start commands for the frontend and backend
<img src="https://github.com/danctila/my-school/assets/134968796/33019d6d-df2d-44c0-b1c6-4b314864650b" alt="nodejs website" width="800"/>
#### 3 - GitHub
-Install Git from [this website](https://gitforwindows.org/ "this website") onto your machine to be able to run the start commands for the frontend and backend.

-On this repository site (github.com), create an account that can be used to sign in in later steps.
<img src="https://github.com/danctila/my-school/assets/134968796/745c5652-6167-46ce-be89-baf9bfbb7177" alt="nodejs website" width="800"/>

### Usage
One you have installed the **necessary 3 applications**, follow these steps to run the project.

##### 1 - Clone
Clone this repository down into your workspace

##### 2 - Start the frontend
Run `npm run dev` in the /frontend directory of a terminal window

##### 2 - Start the backend
Create a .env file in the backend and enter your Open AI API key for usage of the gpt-4-vision model. Have your key stored in a variable called OPENAI_API_KEY. 
Run `npm start` in the /backend directory of a terminal window

After these commands, the backend server should start and the site https://localhost:8081 should be prompted in the terminal. If the server is correctly configured, the terminal should say "Server listening..." 

If this is successful, return to the frontend at http://localhost:5173 (or any port number suggested in the terminal response to starting the frontend)

## Features
1. Instant fetching - when the page loads an initial image url is fetched
2. New Duck - button which fetches new image url from random duck API
3. Analyze - button which sends image data and prompt to gpt vision model for description

## Technologies
#### Frontend
The frontend was developed using React with TypeScript. The project was bootstrapped with Vite. The frontend uses CSS with no pre-processing for custom styling as well as Axios for connection to the backend API.

#### Backend
The backend server was developed using Express JS with Node. The server includes 2 endpoints for data collection and manipulation
1.  "/random" for fetching a random duck image url from the [Random-d.uk API](https://random-d.uk/api/v2/random "Random-d.uk API")
- Uses GET request
2. "/chat" for sending an inputted image url to [gpt-4-vision-preview model](https://platform.openai.com/docs/guides/vision?lang=node "gpt-4-vision-preview model") for analysis with a custom prompt and token amount
- Uses POST request
3. Message truncation
- After /chat fetches a response from the gpt model, this function cuts of remaining words that are not a complete sentence

## Reflection

**- What was the context for this project?**

After having a fascination with different types of rubber ducks, I wanted to find a way to document them or create a project revolving around them. My initial ideas were about a rubber duck encyclopedia but after stumbling across numerous API's which send random duck images I found this idea interesting. Instead of loading a page full of API fetched images, I wanted to take this a step forward by describing the images, however, I didn't want to hard code descriptions for images. This led me to choosing an LLM for this task and I decided to go with the gpt-4-vision-preview model as it was best at giving responses in my testing as compared to the Google image model options.

**- What was built?**

The final project ended as a full stack web application using NodeJs and Express for the backend and React for the frontend. The backend includes a RESTful API which connects to the frontend to ultimately display duck images fetched from an API and descriptions of those images using the gpt-4-vision model on the frontend.


