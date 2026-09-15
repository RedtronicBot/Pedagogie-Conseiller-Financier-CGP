# Pédagogie Conseiller Financier — Site vitrine & blog pour un CGP

**Démo live :** [pedagogieetconseilfinanciercgp.fr](https://www.pedagogieetconseilfinanciercgp.fr/)

Site web réalisé pour un Conseiller en Gestion de Patrimoine (CGP), permettant de présenter son activité et de publier des articles pédagogiques destinés à ses clients et prospects.

## Contexte

Projet mené en mode freelance/bénévole pour un client réel. L'objectif : lui offrir une présence web professionnelle avec une vitrine claire de son activité, ainsi qu'un blog qu'il peut alimenter lui-même, sans dépendre d'un développeur pour publier du contenu.

## Fonctionnalités

- **Page vitrine one-page** avec navigation par ancres (scroll fluide vers chaque section) :
  - Accueil
  - Présentation
  - Objectifs du client
  - Solutions proposées
  - FAQ
  - Avis clients
  - Contact
- **Blog pédagogique** sur une page dédiée, avec articles gérés par le client de façon autonome
- **Design responsive**, réalisé sur-mesure en s'inspirant des standards du secteur (finance/conseil patrimonial)

## Architecture : WordPress headless

Le blog fonctionne en **headless CMS** :

- Le client rédige et publie ses articles depuis une instance **WordPress** installée sur un sous-domaine dédié, qui sert uniquement de back-office de rédaction (aucune page WordPress n'est affichée aux visiteurs)
- Le site principal (Next.js) va chercher les articles via la **WordPress REST API** et les affiche avec son propre design, intégré au reste du site

Cette architecture permet au client de publier du contenu en toute autonomie (interface WordPress familière), tout en gardant un site principal rapide, cohérent visuellement, et non dépendant du thème WordPress.

## Stack technique

- **Framework :** Next.js (App Router)
- **Langage :** TypeScript
- **Style :** Tailwind CSS
- **Contenu :** WordPress headless (REST API)
- **Déploiement :** Vercel

## Lancer le projet en local

```bash
# Cloner le repo
git clone https://github.com/RedtronicBot/Pedagogie-Conseiller-Financier-CGP.git
cd Pedagogie-Conseiller-Financier-CGP

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env

# Lancer le serveur de développement
pnpm dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Aperçu

Appercu à venir

## Pistes d'amélioration

- Ajout d'un système de catégories/tags pour les articles
- Optimisation SEO (métadonnées dynamiques par article)

---

Développé par [Théo Desurvire](https://github.com/RedtronicBot)
