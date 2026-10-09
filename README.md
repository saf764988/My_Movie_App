# 🎬 Binge Lounge

**Discover movies. Explore trending searches. Find your next favourite film!**

🔴 **Live Website:** https://binge-lounge.vercel.app/

Binge Lounge is a movie discovery web application that allows users to explore movies and search for their favourites. It uses The Movie Database (TMDB) API to retrieve movie information and Appwrite to track popular searches and display trending movies.

## ✨ Features

- 🎥 **Discover Movies** — Explore movie information and posters.
- 🔍 **Search Movies** — Search for movies by title.
- 📈 **Trending Searches** — View popular searches based on search counts.
- ⚡ **Debounced Search** — Helps reduce unnecessary API requests while typing.
- ☁️ **Cloud Deployment** — Hosted on Vercel.
- 📱 **Responsive UI** — Designed for a smooth browsing experience across screen sizes.

## 🛠️ Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript
- TMDB API
- Appwrite
- Vercel
- Git and GitHub

## 🚀 Live Demo

Visit the website:

👉 https://binge-lounge.vercel.app

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/saf764988/My_Movie_App.git
```

### 2. Navigate to the project folder

```bash
cd My_Movie_App
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root and add your own API and Appwrite configuration:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
```

Replace the example values with your own configuration. The variable names must match those used in your source code.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## 🔑 API Setup

- **TMDB:** Obtain an API key from [The Movie Database](https://www.themoviedb.org/).
- **Appwrite:** Create an Appwrite project and configure the required database and table/collection.

Make sure the Appwrite database permissions allow the operations your application needs.

**Security note:** Never commit your real `.env.local` file or server-side secret keys to GitHub. Variables beginning with `VITE_` are exposed in the browser bundle, so they must not contain confidential server secrets.

## 📦 Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

This project is deployed using [Vercel](https://vercel.com/). Push changes to the connected GitHub branch to trigger a new deployment.

⭐ If you find this project interesting, feel free to explore the repository and try the live demo!
