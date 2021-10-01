const app = require('express')();
const request = require('request');

app.get('/', (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ message: 'url required' });
  request.get(url).pipe(res);
});

app.listen(process.env.PORT || 4000, () => console.log('listening'));
