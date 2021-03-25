import {Polly} from "aws-sdk"
import { PassThrough } from "stream";
import Speaker from "speaker";
import fs from "fs";

const player = new Speaker({
    channels: 1,
    bitDepth: 16,
    sampleRate: 16000
});


console.log('Initializing Polly...');
const polly = new Polly({
    region: "eu-central-1",
});

console.log('Preparing input');
const input = {
    Text: "... hello Yenz! I am happy to be alive.",
    // OutputFormat: "pcm",
    OutputFormat: "mp3",
    VoiceId: "Salli",
    Engine: "neural"
}

console.log('Calling synthesize speech request');
polly.synthesizeSpeech(input, (err, response) => {
    console.log("We have an answer");
    if (err){
        console.error(`We have an error: ${err}`);
        console.trace();
        throw err;
    }
    if (response && response.AudioStream){
        const stream: any = response.AudioStream;
        // fs.writeFile("./speech.pcm", stream, err => {
        fs.writeFile("./speech.mp3", stream, err => {
            if (err) {
                return console.log(err)
            }
            console.log("The file was saved!");

            // Playing the pcm file
            // const buffer = Buffer.from( fs.readFileSync("./speech.pcm").buffer);
            // const bufferStream = new PassThrough();
            // bufferStream.end(buffer);
            // bufferStream.pipe(player);

        })
    }
    else {
        console.error("I don't know what to do...");
    }
});

console.log("All done!");