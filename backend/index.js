const express = require('express');
const cors = require('cors'); // importa o cors
const app = express();
const port = 3000;

app.use(cors()); // habilita o cors

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
