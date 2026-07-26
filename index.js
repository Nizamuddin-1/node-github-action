import express from 'express';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    return res.json({ msg: "This is a github action deployment" });
});

app.listen(port, () => {
    console.log("server is running on port ", port);
});