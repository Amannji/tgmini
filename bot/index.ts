const { Telegraf } = require("telegraf");
const { BOT_TOKEN } = require("./config");

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN must be provided");
}

const bot = new Telegraf(BOT_TOKEN);
bot.command("start", (ctx: any) => {
  ctx.reply("Welcome to TaskValutBot! \nUse /help to see the commands");
});

bot.command("help", (ctx: any) => {
  ctx.reply(
    "Available commands:\n" +
      "/start - Start the bot\n" +
      "/help - Show this help message\n" +
      "/webapp - Open the Mini App"
  );
});

bot.command("webapp", (ctx: any) => {
  ctx.reply("Open Web App", {
    reply_markup: {
      inline_keyboard: [[{ text: "Open App", web_app: { url: "" } }]],
    },
  });
});

bot.launch().then(() => {
  console.log("Bot is running");
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
