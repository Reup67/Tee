
  var x = bot.onText(/\Films/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [
          ['1. Комедии'],
          ['2. Фантастика'],
          ['3. Ужасы'],
          ['4. Боевики'],
          ['5. Драма'],
          ['6. Детектив'],
          ['7. Документальный']
        ]
      })
    };
    bot.sendMessage(msg.chat.id, 'Подбери фильм под себя', opts);
  });

export default{x };
