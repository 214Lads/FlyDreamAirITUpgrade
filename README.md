# FlyDreamAirITUpgrade

## Setup
- Clone repository `git clone https://github.com/214Lads/FlyDreamAirITUpgrade`
- **Note** - If on windows exact commands may differ
- Recomended OS for running this project is Ubuntu Linux or MacOS

### Install Node Package Mangager (NPM)
- Linux - `sudo apt install npm`
- Mac - `brew install node`
- Windows - Download and install [node.js](https://nodejs.org/en/download/) 

### Install dependencies
- If on windows, please install [python](https://www.python.org/)
- Install [serve](https://www.npmjs.com/package/serve) `npm i serve`, this will be used to serve the react website

#### Install python dependencies
- Navigate to backend directory `cd FlyDreamAirITUpgrade/project/backend`
- Create python virtual environment `python3 -m venv .venv/`
- Activate virtual environment `source .venv/bin/activate`
- Install python dependencies `pip install -r requirements.txt`

### Configuration
#### Decompress files
- First thing to do is decompress the json files that contain flight information
- Unzip json files `unzip FlyDreamAirITUpgrade/project/backend/json.zip`

#### DNS configuration
- Some extra configuration is needed in order for the react server to be able to talk with the python server
- We need to point flydreamair.com to the IP address of the machine that will be running our react and python servers
- To do this edit your host file `sudo vim /etc/hosts`
- If running locally, append flydreamair.com to the line that contains your localhost IP
- If running on a public facing server edit the file accordinly with IP address followed by the domain name
<img width="438" alt="image" src="https://user-images.githubusercontent.com/74891114/171770920-0a7a55a6-cb2e-46f9-a80a-4c396d71a9ce.png">

#### Configure email confirmation (optional)
- This requires a gmail account
- If you would like to recieve and email confirming your booking, additional configuration is required
- Navigate to the backend directory `cd FlyDreamAirITUpgrade/project/backend`
- Create an environment file `touch .env`
- Open environment file `vim .env/
- Type `EMAIL="MY_EMAIL"`
- Create a new line and type `EMAIL_PASS="MY_PASSWORD"` using your corresponding details
<img width="1011" alt="image" src="https://user-images.githubusercontent.com/74891114/171773280-5651b094-75ca-4293-973d-1ec9bbceb072.png">

### Run React Server (frontend)
- Run the react server to start up the website
- Change to the project folder `cd FlyDreamAirITUpgrade/`
- Instantiate the react server by running `serve build -p 80`

### Run the Python Server (backend)
- Run the python server so that the react server can receive and send data
- Open a seperate terminal to that running the react server
- Change to backend directory `cd FlyDreamAirITUpgrade/project/backend
- Activate virtual environment once again `source .venv/bin/activate`
- Instantiate python server by running `python RestAPI.py`

## Conclusion
- If sucessfull navigate to [flydreamair.com](http://flydreamair.com) and you will be presented with a page that looks like this:
![Screen Shot 2022-06-03 at 11 54 44 am (2)](https://user-images.githubusercontent.com/74891114/171771709-3449797f-125e-45c0-8043-80a1d61fb8bc.png)
- Now you can start booking flights

