# 📋 Rittinger – Landing Page "Devis Salle de Bain"

Ce dépôt contient le code source de la **Landing Page** dédiée à la demande de devis pour la société **Rittinger**, spécialisée dans la rénovation de salle de bain haut de gamme.

---

## 🔗 Accès en ligne

- **URL publique** : [https://devis-sdb.rittinger.fr](https://devis-sdb.rittinger.fr)
- **Hébergement** : [Netlify](https://www.netlify.com/)
- **Code source** : Versionné sur GitHub dans ce dépôt

---

## ⚙️ Fonctionnement

- **Site 100 % statique**, développé en HTML5 et CSS3, sans dépendance externe.
- **Formulaire connecté à Netlify Forms** pour la réception des demandes.
- **Déploiement automatique** à chaque `push` sur la branche `main`.
- **Redirection automatique** vers une page de confirmation (`success.html`) après envoi de formulaire.
- **Optimisé SEO, accessibilité et performance**.

---

## 🗂 Structure du projet

```txt
├── index.html                  # Page d’accueil
├── success.html                # Page de confirmation après soumission du formulaire
├── mentions-legales.html       # Mentions légales
├── vie-privee.html             # Politique de confidentialité
├── info-cookies.html           # Informations cookies (RGPD)
├── css/
│   └── styles.css              # Feuille de styles commentée pour maintenance
│   └── styles.min.css          # Feuille de styles minifiée (performances) liée au HTML
├── assets/                     
│   └── brand                   # Logos de l'entreprise
│   └── favicon                 # Favicon (+ variantes optimisées) généré à partir du logo de l'entreprise
│   └── fonts                   # Police d'écriture personnalisée associée à l'image de marque de l'entreprise
│   └── icons                   # Icones d'illustration
│   └── media                   # Images et photos (formats optimisés) d'illustration
├── js/                         
│   └── load.js                 # Script pour le chargement asynchrone des ressources critiques du head (HTML)
├── _headers                    # En-têtes HTTP de sécurité pour Netlify
├── robots.txt                  # Fichier d’indexation SEO
├──sitemap.xml                 # Fichier d’indexation pour moteurs de recherche
└── README.md                   # Le présent fichier de présentation
```

## 📈 Performance & SEO

Le site obtient de très bons résultats dans [Google Lighthouse](https://web.dev/measure/) :

- ✅ Performance : > 100
- ✅ Accessibilité : > 100
- ✅ SEO : > 100

Testez-le vous-même ici : [https://pagespeed.web.dev](https://pagespeed.web.dev)

## 🔐 Sécurité & conformité

- **HTTPS forcé** via Netlify (Let's Encrypt).
- **En-têtes HTTP** activés dans `_headers` : HSTS, CSP, X-Content-Type-Options, etc.
- **Fichiers RGPD** conformes : `robots.txt`, `sitemap.xml`, cookies, vie privée.
- **Formulaires sécurisés** et sans JavaScript requis.

---

## 📦 À propos du déploiement

- Branche active : `main`
- Déploiement via : **Netlify + GitHub integration**
- Chaque `commit` sur `main` déclenche un **build & déploiement automatique**
- En cas d’erreur de build : vérifier les logs dans l’onglet **Deploys** sur Netlify

---

## ✉️ Contact

**Julien Borgeon** – Développeur Front-End freelance  
📧 [julienborgeon@gmail.com](mailto:julienborgeon@gmail.com)
🌐 [www.julienborgeon.fr](https://julienborgeon.fr)
💻 [github.com/julienborgeon](https://github.com/julienborgeon)

---

## 🧾 Licence

Projet développé pour la société **Rittinger**
© 2025 – Tous droits réservés.
Ce code ne doit pas être redistribué ou réutilisé sans autorisation.