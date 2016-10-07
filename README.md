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

### Step by Step

1. `cd /home/pi`
1. `git clone https://github.com/Pindar/dash-hue.git`
1. `cd dash-hue`
1. `npm install`
1. create your environment file(s) `/home/pi/hue-forecast/.env` (one for each light you'd like to control)
1. update your systemd file(s), you can find an example [./systemd/dash-hue.service](./systemd/dash-hue.service)
1. `sudo cp systemd/* /lib/systemd/system/`
1. `sudo systemctl daemon-reload`
1. `sudo systemctl start dash-hue.service`
