MusicShiva - Plateforme de découverte Rap
MusicShiva est une application web dynamique permettant d'explorer le catalogue musical Rap via l'API iTunes. Le projet met l'accent sur une interface minimaliste inspirée des standards de design Apple et une navigation fluide.

Lien du déploiement : https://musicshiva.vercel.app

Fonctionnalités
Recherche dynamique : Exploration d'albums par mots-clés (par défaut orientée Rap).

Pagination intelligente : Système de navigation fluide entre les résultats.

Détails d'albums : Vue détaillée de chaque opus avec récupération des métadonnées en temps réel.

Mode Aléatoire : Fonctionnalité d'écoute fortuite pour la découverte musicale.

Interface Responsive : Design optimisé pour une utilisation sur mobile et bureau.

Technologies utilisées
Backend : Node.js avec le framework Express.

Moteur de templates : EJS (Embedded JavaScript) pour le rendu dynamique côté serveur.

API : Intégration de l'API iTunes Search.

Client HTTP : Axios pour la gestion des requêtes externes.

Déploiement : Vercel (Architecture Serverless).

Design : CSS3 pur avec utilisation de dégradés linéaires et typographie Apple.

Installation et exécution locale
Prérequis

Node.js (version 18 ou supérieure recommandée)

npm (installé avec Node.js)

Procédure

Cloner le dépôt :

Bash
git clone [URL_DU_DEPOT]
cd musicshiva
Installer les dépendances :

Bash
npm install
Lancer l'application en mode développement :

Bash
npm run dev
L'application sera accessible sur http://localhost:3003.

Architecture du projet
Plaintext
├── assets/             # Fichiers statiques (CSS, images)
├── public/             # Fichiers servis par Express
├── templates/          # Vues EJS (Pages et Partials)
├── app.js              # Point d'entrée de l'application
├── vercel.json         # Configuration spécifique pour le déploiement Vercel
├── package.json        # Gestion des dépendances et scripts
└── .gitignore          # Exclusion des fichiers inutiles pour le versionnement
Déploiement
Le projet est configuré pour un déploiement continu sur Vercel. Chaque modification poussée sur la branche principale déclenche automatiquement une mise à jour de l'environnement de production.
