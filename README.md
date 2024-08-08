# Slurpeesh personal site

## Run on local machine

1. To build a project in development mode, enter in the terminal: `npm run build:dev`, the built project will appear in the "build" folder.
2. To build a project for production you should enter in the terminal: `npm run build:prod`.
3. To build a project in *watch-mode* you should enter in the terminal: `npm run start`.
4. In order to analyze the built project, you should specify the parameter in the terminal: `-- --env analyzer=true`, for example, to build and run the project in *watch-mode* you should enter: `npm run start -- --env analyzer=true`, if you do not specify the parameter, the default will be `analyzer=false`.
5. In order to start the project in *watch-mode* on a certain port, you need to specify the parameter in the terminal `-- --env port=(port number)`, for example, to build and run the project on port 5000 in *watch-mode* you need to enter: `npm run start -- --env port=5000`, if you do not specify the parameter, **the default port will be 3000**.
