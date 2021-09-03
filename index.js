const axios = require("axios");
const fs = require("fs");

async function main() {
    let data = await axios.get("https://api.7tv.app/v2/users/auror6s/emotes");
    console.log(data.data);
    let emotes = [];
    for (let emote of data.data) {
        emotes.push({
            id: emote.id,
            name: emote.name,
            provider: "7tv",
        });
    }
    fs.writeFile("emotes.json", JSON.stringify(emotes), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

main();
