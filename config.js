//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUQyTENqY0RPdXlveWlCSEIxRHNPM1pGaE9PMXdoQzU3bG5qd2dDZzAzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDJmZmFnOWVIVTB3VTdLbENUUHNEU1UrNGN2NjRxc0wySmYyZzdYY01HOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSnpqM001Q0ovdFhqQ3NVdlcxZXNuQWRwelZJVnpreHRSWGxDT1ZHSW44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUWDhjZ1R3VlpKUkhYOTNGYWxXTU4va21SOUFvL3dPdGVVMENvVFBzOEEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCTThNVFVRa2lreXc2ZnloYy8xWWx1WlE1WGNnNTRvYU9PS01Xc0FZVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OL21ZaFo2Mlk1YVIvTjJrcHdoVGpaL05uZ3BIcDlLZFRQUkF2TmVubmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ExeFc2NlhwRHpnV3k2dTViOXpuaHRmb0VWZjMzbkE1K2ZVTFdpVWpIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnRLU3psRUpSRHJCaml2ZHc2dk5XZmNMdm9DMXFUMURyc01zendPZXd6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img2L0ZvaVhSdWh5OER4bkxSNjRFOGdqY1Iyc1VxdUxVVHdFd2dlWi8zM0k3ZDZZU21RSWM1aENMNmM1Q2tLbjIrLzdqbEs3UmVSY2lkRzBJejFZN0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiIyeEVyZFRicnVNazI3Nm5aNXpaNHl6MXRwc3d6emI4SW1Ua1d0TDVJVVA0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODM4ODg5MjI3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBOEUwMTNENzUyMEUyQzk1NjA3OUY3NDc3OEEzMTgyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzA2ODQ1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGM3hVOS1UUlRhdUFjMi1KMVd4T2N3IiwicGhvbmVJZCI6IjNjODdmZTY4LTMwN2YtNDAxMS04MTQxLTRjYzc2Yjc5ZGE3NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzVVF0SjFNWjlWMVFtNTF3OWR3Wmlzdml5UFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDU5Tmx3cTBLdVpXaDc1MVNQZ2lhMlFTWUtrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJXNUhHQkgxIiwibWUiOnsiaWQiOiI5MTgzODg4OTIyNzk6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A3TzBlUUVFSXVacDdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBwZ01KazRJc2lzcnN4YnlOSHltTlY0RUp1ZU9DT0pkdlJXN1psV1JjVmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkMyMDYxRk53QkNkUHYwK3dFY0p0V2dMNVA5dmdTUE4zM0R0V2hHNStlZGtON2xkVDRSSkF0bGcvMVRXbTVvY0g4ak05RVhMcTJtZUExeEg0TmlLOUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1aGxBcUhrY05qbjlxZHZ4bi9LOG95cVhKeEdTTy83c3BsdUFydDVVd3ZUbi9XMWJ0U2ZjYUJMK3dsbE9UUVNoM0U0aEVTR0c0U2FPL294Szk5bm1EUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODM4ODg5MjI3OToxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUNllEQ1pPQ0xJcks3TVc4alI4cGpWZUJDYm5qZ2ppWGIwVnUyWlZrWEZZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzA2ODQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJZdSJ9|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIzOEJ4Z3dBbGlIMllHcEpqb3BySjN4VFg5ZUN5a2hRL084Tkxya1EwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnZtZXdQU0ZHL1h3aHh4REFjSll3YU4raEkvSkZnVG1PY1JDUTdjbi9WND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUEhsa2FPWlZhYkhqeUc1Z3BzL29GVVhPbU5YdjM2OG9TMlFJUWZRbTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNXdoWXRZdDBERDFOQWg1YWhzWVliVllIM3hhWG9SeW5ZOCtFaWtTc2k0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIQ05jK0xpUDk1aWVQc2hxcE52d3VYdWkxbzlmZFFFcXdteHhqSFNra3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1aM1NwQUo2RG5LcWV3NFZPTW5rMEJZYThvY24vWjYwbUY4YzBHSGpOQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS04xcVBQM1pXMzIwTm5McCtGREJUMzcySnQwcGlLWFEzWXZESzM5eU5WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXhBdEY1Y3AzNEtwQ3lCRkxhR0t3SngwWit4R0grZlFSZlBMTnM3akNqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sRlJuaDFRMWdEdTFRR3ZlMG9ROHNkd1hHeCtCRVBDeDhjNHRQeVZFOFdZZzBPMDJ0T2c1U3M5RmxhYlNaQzdrdzJDM2pBQkNCSVhwMjBDeWhuSmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiIzbE41QnpiUlN4WWRWMEJPSnVhekREbXlZUVQ0VTVETWVEQXlkSGF3UXNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0U0N5SFN4eFNQUy03UDJzeVd5NkpnIiwicGhvbmVJZCI6Ijg5MjNhMzZmLWVjZGMtNDAwNy05ZGFmLWNiMzRlNmMwNDEwZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZmpyc1FDRWwzelZRTkRvTDRmOXpkaHhheGc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhSjBvZzNDbnZqemY0Nm9Hb3JINnBoQ0NlYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2M2dPNERFSmVrZ0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imo4cDEycTRtbmk1UkVzYmxldWI0WjAzbllTdVJ2ZlhqMkdlcWRIKzdBRE09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFDQWN2SThoZ0NXRE10MEc1NHdEVUpwR21WdGJQS0JsR2FSSUxKMnFPMEZLYUFQVjBsUFR3ejV2bnhXT3BqbVBwSkZMMjNrcVdaSm1LZFBhOUNpYUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXOWZaWkR0NmhySjNmdWtxazFkeEJqUFdzOU10Qmh5dU01TWJEM2VLUUtDOWo1aHhQbmF2U3Qza3E4UnVNd3V3VTRpRWo0SzB6YXJpUHlUdEFkbERnQT09In0sIm1lIjp7ImlkIjoiOTIzMTkyMTczMzk4OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkbTwnZG5IPCdkb7wnZGo8J2RuvCdkbAiLCJsaWQiOiIxNDQ1Nzc2MDg1NTY2MTk6MjNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5MjE3MzM5ODoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZL0tkZHF1SnA0dVVSTEc1WHJtK0dkTjUyRXJrYjMxNDlobnFuUi91d0F6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk2NjkyNzMsImxhc3RQcm9wSGFzaCI6IjJGOXl4eiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3FtIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
