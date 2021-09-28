const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
var figlet = require("figlet");
const ethers = require("ethers");
const fetch = require('node-fetch')
const db = require('quick.db')
require("dotenv").config();
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const prefix = "!";
const roundToHundredth = (value) => {
  return Number(value.toFixed(2));
};



const fs = require("fs");

// Scrapers (idk if thats a word lmao)

// Collection Scraper

var queue = new Map();

client.commands = new Discord.Collection();
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const COLOR = process.env.COLOR;

client.on("ready", async (activity) => {


   



    client.user.setStatus(`online`)


  client.user.setStatus(`online`);

  
 

  figlet("Made  By  Goodin", async (err, data) => {
    console.log(" ");
    console.log(" ");
    await console.log(data);
    console.log(" ");

    console.log("Discord API Connected");
    console.log("GasNow API Connected");
    console.log("CoinGecko API Connected");

    console.log(" ");
    console.log("Successfully Loaded The Bot");
    console.log("");

  
  });
});



const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("message", async (message) => {

  const bannedWords = [`https`, `http`, `www.`]
  const allowed = [`opensea.io/assets/0x76e51bc8fa0beebcf3e45de408fa43c9dc5ffb27`, `opensea.io/collection/primate-social-society-official`]
 
      if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
        if (allowed.some(word5 => message.content.toLowerCase().includes(word5))) {

          message.react("✅")


        }else{
          message.react("❌")

          message.channel.send(`${message.author} that link is not part of official PSS collection`)
        }

      }
  
 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).run(client, message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
  //ok
});

client.login(process.env.TOKEN);

