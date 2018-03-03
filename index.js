const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

const TOKEN = config.get('token');
const bot = new TelegramBot(TOKEN, {polling: true});


bot.onText(/\/help/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
  };
  bot.sendMessage(msg.chat.id, 'Not today');
});
bot.onText(/\/start/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Films'],
        [' Series']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Сериал или фильм?', opts);
});
bot.onText(/\Назад/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Films'],
        ['Series']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Сериал или фильм?', opts);
});
bot.onText(/\Films/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Комедии'],
        ['Фантастика'],
        ['Ужасы'],
        ['Боевики'],
        ['Драма'],
        ['Детектив'],
        ['Документальный'],
        ['Назад', 'Вперед']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Подбери фильм под себя', opts);
});
bot.onText(/\Series/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['1. Русские сериалы'],
        ['2. Зарубежные сериалы '],
        ['3. Сериалы 2017'],
        ['4. Сериалы 2018'],
        [ ' Назад ' , 'Вперед']
      ]
    })
  };
  bot.sendMessage(msg.chat.id,"Подбери сериал под себя ", opts);
});
bot.onText(/\Yes/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Ну рил, го мир?'],
        ['Ну и хрен с тобой']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, `Извини, но нет\n в другой раз`, opts);
});




bot.onText(/\Комедии/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['5 врачей'],
        ['Ночные игры'],
        ['Вуди Вудпекер'],
        ['Герой'],
        ['Это не я'],
        ['Черри Пол'],
        ['Учительница'],
        ['Назад', 'Вперед']
      ]
    })
  };
  bot.sendMessage(msg.chat.id,"Подбери сериал под себя ", opts);
});
bot.onText(/\Фантастика/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Черная Пантера '],
        ['Веном'],
        ['Излом Времени'],
        ['Немой (2018)'],
        ['Лига справедливости'],
        ['Кривизна'],
        ['Портал '],
        ['Назад','Вперед']
      ]
    })
  };
  bot.sendMessage(msg.chat.id,"Подбери сериал под себя ", opts);
});







bot.onText(/\/p/, (msg, match) => {
// const chatId = msg.chat.id
// var file = fs.readFileSync('9d76e2f07a01c9b49ce074070e4ca3.jpg')
// const fileOpts = {
//     filename : '9d76e2f07a01c9b49ce074070e4ca3',
//     contentType : 'image/jpg'
//   }
     bot.sendPhoto('https://bokino.tv/uploads/mini/poster/e0/9d76e2f07a01c9b49ce074070e4ca3.jpg')
})
