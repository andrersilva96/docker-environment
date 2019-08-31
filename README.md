# Project to build dev environment for projects using docker

## Configuring the project for the first time

> Warning this repository must be in the user's home

windows: `C:/User/USER_NAME`

linux: `/home/USER_NAME`

> For everything to work be sure to configure git and its ssh ir_rsa and id_rsa.pub credentials and let the team to allow it on the server

1 - Download and install the docker

windows / mac: Install docker toolbox or docker descktop according to your pc link: https://docs.docker.com/toolbox/overview/ and restart pc

2 - Launch the container
windows: Open docker terminal from desktop icon
linux / mac: Open terminal

## Work routine

```
Open terminal
cd ~/docker-environment/WICH_DOCKER_ENVIRONMENT
docker-compose up
```

PHP Composer:
 ```
docker exec -ti nginx-php-mysql_php_1 sh -c "cd {NAMEPROJECT} && composer install"
``` 

NODE:

To start your file you need to open the Dockerfile and change the ENTRYPOINT