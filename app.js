const express = require('express');
const axios = require('axios'); 
const path = require('path');
const app = express();
const PORT = 3003;

app.set('views', path.join(__dirname, 'templates')); 
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

// --- ACCUEIL ---
app.get('/', (req, res) => {
    res.render('index');
});

// --- CATALOGUE (Route unique et corrigée) ---
app.get('/objects', async (req, res) => {
    try {
        const searchTerm = req.query.search || 'rap';
        const country = req.query.country || 'FR';
        const viewMode = req.query.view || 'grid';
        
        // 1. On récupère la page
        const page = parseInt(req.query.page) || 1;
        const limit = 20; 
        
        // 2. LE CALCUL MAGIQUE : Si on est page 2, on saute les 20 premiers (offset = 20)
        const offset = (page - 1) * limit;

        // 3. L'URL doit impérativement contenir &offset=
        const url = `https://itunes.apple.com/search?term=${searchTerm}&entity=album&limit=${limit}&offset=${offset}&country=${country}`;
        
        const response = await axios.get(url);
        
        res.render('objects', { 
            items: response.data.results, 
            view: viewMode,
            currentPage: page,
            searchTerm: searchTerm,
            country: country
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur");
    }
});
// --- DÉTAILS D'UN ALBUM ---
app.get('/objects/:id', async (req, res) => {
    try {
        const albumId = req.params.id;
        const response = await axios.get(`https://itunes.apple.com/lookup?id=${albumId}`);
        const album = response.data.results[0];

        if (!album) {
            return res.status(404).send("Album non trouvé");
        }

        res.render('object-details', { album: album });
    } catch (error) {
        res.status(500).send("Erreur lors de la récupération des détails.");
    }
});

// --- CONTACT ---
app.get('/contact', (req, res) => {
    res.render('contact');
});

// --- 404 ---
app.use((req, res) => {
    res.status(404).send("Page introuvable !");
});

/*
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
*/

// On exporte l'application pour Vercel
module.exports = app;

// On ne lance le serveur local que si on n'est pas sur Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3003;
    app.listen(PORT, () => {
        console.log(`Server local lancé sur http://localhost:${PORT}`);
    });
}