const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="dollarveer88@gmail.com"
global.location="Kisumu,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/dollarveer/Suhail-Md/";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah8xSQ9MF98RpsRlh2S";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah8xSQ9MF98RpsRlh2S" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/dollarveer/Suhail-Md/blob/79800bdde8b3b713b81bb349e6d394ad13a7f89c/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "_*POWERED BY REALER-MD, AI_VINNIE*_" 


global.devs = "25702528705" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702528705";




//========================= [ BOT SETTNGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://github.com/dollarveer/Suhail-Md/blob/79800bdde8b3b713b81bb349e6d394ad13a7f89c/lib/assets/suhail.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_53_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidHNLbXQxdmdiQUsyakorcWVnWi96eTZLVlhwUjlGMDlZQjJyK1kvemFhcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwickQ3aEtlNDlSU1NJQ0xBOTlmVkJpUVwiLFxuICBcInBob25lSWRcIjogXCIyN2RkYWNmYy02OWNiLTRjOWMtYjI4MC04YmJlZTBhZjk1ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMjQyLFxuICAgICAgMTU1LFxuICAgICAgMjUzLFxuICAgICAgMTIyLFxuICAgICAgMTAxLFxuICAgICAgMTQxLFxuICAgICAgMjUyLFxuICAgICAgMjQzLFxuICAgICAgMjU1LFxuICAgICAgMTg1LFxuICAgICAgMTksXG4gICAgICAxMjgsXG4gICAgICAxMTYsXG4gICAgICAxODMsXG4gICAgICAyMjUsXG4gICAgICAyMjMsXG4gICAgICA0MSxcbiAgICAgIDExLFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDE1MSxcbiAgICAgIDM4LFxuICAgICAgMTMzLFxuICAgICAgMjAsXG4gICAgICA4NixcbiAgICAgIDI0MyxcbiAgICAgIDE0MixcbiAgICAgIDIyNCxcbiAgICAgIDYsXG4gICAgICAxNjksXG4gICAgICAyMzgsXG4gICAgICAxNTYsXG4gICAgICA5NSxcbiAgICAgIDY2LFxuICAgICAgMTc1LFxuICAgICAgMjM0LFxuICAgICAgMTI1LFxuICAgICAgNDgsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkdDUzlaQkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwMjUyODcwNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3Mjk3MTg5NzAzNjk4Mzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3djYxc1EyY0M3c3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTdvZHlZdVR5YVoxc0FDMWdqZXJ6NUk5eHo3bUJwbjFxUW1XZklnZVIxWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEbjZ5MXF0TmZQNWxqZGJqaEtwZkJxOW44QnVXSGF0d25JaTJrNyt1WThHSVZJOXMydzZST3g0VnVXZC9pUlFDOWVUS0Q3a1BaSVpjTXFPVjZ5RldEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFYnRvS0hDLzV4Nnl2bjBiQU5XKzlsaVBXRDI2MHE4cFByRi9MMy8rcExoK0JneEVYWEhsVzNvNXRoeUdkdnJ3TThjbzhSL2QzdHhWMHU3OWJuQ3JoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDI1Mjg3MDU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1NDI0MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBeUVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF5RS5qc29uIjogIntcImtleURhdGFcIjpcIk92U1hUMDRVaEFUVEJOL1JmZXZqbnR6cnZOdEhyTzQ4M24yV2h2ZFZYeUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNjA4MTg5LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NTQyMzU2MDA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "_*POWERED BY REALER-MD, AI_VINNIE*_" , //```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ai Vinnie",
  packname: process.env.PACK_NAME || "Realer Md",
  botname : process.env.BOT_NAME  || "REALER-MD",
  ownername:process.env.OWNER_NAME|| "Ai Vinnie",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
