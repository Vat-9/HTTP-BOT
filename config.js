const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "NkIH3KSK#Do0dc0owrMWgQScxKW9sbsYJnpPvHKzBb9Tjyc-ucKM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/t4kl7i.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hellow......i am vat-9 wa bot alive now ✅💀",
};
