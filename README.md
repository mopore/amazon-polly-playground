```
  ▄███████▄  ▄██████▄   ▄█        ▄█       ▄██   ▄   
  ███    ███ ███    ███ ███       ███       ███   ██▄ 
  ███    ███ ███    ███ ███       ███       ███▄▄▄███ 
  ███    ███ ███    ███ ███       ███       ▀▀▀▀▀▀███ 
▀█████████▀  ███    ███ ███       ███       ▄██   ███ 
  ███        ███    ███ ███       ███       ███   ███ 
  ███        ███    ███ ███▌    ▄ ███▌    ▄ ███   ███ 
 ▄████▀       ▀██████▀  █████▄▄██ █████▄▄██  ▀█████▀  
                        ▀         ▀                    
```


# What is this?
This is a playground project to test the text to speech engine from Amazon (Polly).
The code needs active AWS credentials that are allowed to use Amazon Polly.
It will request the generation of an mp3 (or pcm) stream that can be used to play or write the stream/file.
If you write an mp3 file to the disk it is recommended to use mpg213 to play the file.

# Installation
- Create your normal node.js/TypeScript project
- AWS credentials with permission to run Polly should be stored under: ~/.aws/credentials (otherwise the code needs to be altered).
```
[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>

```
Just run npm install and use VS Code to launch App.ts

```
npm install
```

Optional:
If you want to play a mp3 file (headless) it is recommend to install mpg123
```
sudo apt install mpg123
sudo apt pacman -S mpg123
```

# How to run
Just run App.ts and comment / uncomment the funtctions you prefer to have.
Use following command to run an mp3 file quietly:
```
mpg123 -q speech.mp3
```

# Known issues
- The first part of the sentence might be swallowed when playing the pcm stream by using speaker.

# Release History

## v0.1.1
- Additional information in the readme file.

## v0.1.0
- Initial commit.