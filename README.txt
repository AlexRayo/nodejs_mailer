WORKING WITH typescript
>Create an init file to be able tu set up our ts output
tsc --init

>Install dependecies necesary to set ts as default language
npm i -D typescript ts-node @types/node @types/express

>Setting up scripts
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.ts",
    "build": "tsc -p ."
  },