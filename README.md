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

# Known issues
- The first part of the sentence might be swallowed.

# Release History

## v0.1.0
- Initial commit.