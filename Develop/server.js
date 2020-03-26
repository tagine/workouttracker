const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

