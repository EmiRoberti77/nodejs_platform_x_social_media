require('dotenv').config({
  path: __dirname + '/.env',
});

const { twitterClient } = require('./twitterClient');
const tweet = async () => {
  const imagePath = './src/images/odin1.png';
  const mediaId = await twitterClient.v1.uploadMedia(imagePath);
  console.log('mediaId', mediaId);
  try {
    await twitterClient.v2.tweet({
      text: 'Hi i am Odin OAIX and i can post on social media, watch out!',
      media: {
        media_ids: [mediaId],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

tweet();
