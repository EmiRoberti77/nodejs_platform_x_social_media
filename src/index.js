require('dotenv').config({
  path: __dirname + '/.env',
});

const { twitterClient } = require('./twitterClient');
const tweet = async () => {
  try {
    await twitterClient.v2.tweet('hello from odin');
  } catch (err) {
    console.log(err);
  }
};

tweet();
