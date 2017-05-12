import historyApiFallback from 'connect-history-api-fallback';
import {chalkSuccess} from './chalkConfig';
import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const server = http.createServer(app);
const port = (process.env.PORT || 4000);
console.log(chalkSuccess('Starting Express dist server...'));

app.use(express.static(path.join(__dirname, '../dist')));
app.use(historyApiFallback());

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.use(express.static('dist/*.html'));

server.listen(port);
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
