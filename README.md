# Full Stack Project (Flask + React)

steps to run the project :

## Backend Setup (python-Flask)

1. Create and activate virtual environment:
   
    `python3 -m venv venv`

    `source venv/bin/activate`

 2.   
    `cd backend`

    `pip install -r requirements.txt`

  3.  now run the backend service

    `python run.py`


The backend should now be running at http://localhost:5000

the POST API http://127.0.0.1:5000/api/generate-questions  will give list of questions given passage as payload


## Frontend  Setup (React)

1. `cd frontend`

2.  Install dependencies:

    `npm install`

3. Start the React development server:

    `npm run dev`

The frontend should now be running at http://localhost:5173

we can check it on browser. 

on submit a paragraph on this page it will call the backend api to generate a list of question which internally uses gemini API .
