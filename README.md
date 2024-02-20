# Swiss League Website

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![standard-readme compliant](https://img.shields.io/badge/-Deployment-green)](https://swissleague.org/)

Main website of the Lichess Swiss League project.

## Install

```

npm install

//Replace [CONNECTION STRING]
echo 'MONGO_KEY = '[CONNECTION STRING]' > .env

npm run build

```

## Usage

```

npm run start

```

## Start on Boot

The following instructions will make the next app start on boot or after undesired crash:

```
crontab -e
```

Add the following instruction:

```
*/1 * * * * ~/lichess-swiss-league-website/script.sh start
```

## Contributing

PRs accepted.

Please contact me if you wish to contribute.

## License

MIT © Daniel Bray
