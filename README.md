# dash-hue
If pressing amazon dash button toggle a hue light


## Environment variables

| Variable           | Notes                                                              |
|--------------------|--------------------------------------------------------------------|
| HUE_HOST           | IP address of your HUE bridge                                      |
| HUE_USER           | Your hue-bridge user name                                          |
| LIGHT_NUMBER       | Light Number you'd like to control                                 |
| DASH_MAC           | Mac Address of Dash Button eg., de:62:ba:1o:d6:c5                  |

## Development

Start the script with `export $(cat .env | xargs) && npm start` in case you have all environment variables defined in a .env file.

## Installation

### Prerequisites

1. node >=4
1. GIT

How to install node >=4 on a Raspberry pi:

1. `wget http://nodejs.org/dist/v4.3.1/node-v4.3.1-linux-armv7l.tar.gz`
1. `tar -xvf node-v4.3.1-linux-armv7l.tar.gz`
1. `sudo cp -R * /usr/local/`
