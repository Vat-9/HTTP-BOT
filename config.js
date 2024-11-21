const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "58xFlQKK#SsgGzEMkINqPtc8V9SmGAZU5CEam-2w4tjv1xUQV0SY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/t4kl7i.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hellow......i am vat-9 wa bot alive now ✅💀",
};
