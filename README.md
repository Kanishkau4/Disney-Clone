# Disney+ Clone

A modern, high-performance Disney+ clone built with **React 19**, **Vite**, and **Tailwind CSS**. This application fetches real-time movie data from **The Movie Database (TMDB)** API to provide a seamless streaming experience.

![Disney Plus Clone Screenshot](https://raw.githubusercontent.com/username/repository/main/screenshot.png) *(Replace with actual screenshot)*

## 🚀 Features

- **🏠 Home Page**: Includes a dynamic slider and movie categories.
- **🎬 Movie Slider**: Showcases trending movies with an auto-sliding feature.
- **🏢 Production Houses**: Dedicated sections for Disney, Pixar, Marvel, Star Wars, and National Geographic with hover video effects.
- **🎭 Genre-based Lists**: Browse movies categorized by popular genres.
- **📄 Movie Detail Page**: Detailed information about movies including ratings, release dates, and cast.
- **🎥 Video Trailers**: Watch trailers directly within the movie detail page.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **💅 Premium UI**: Modern aesthetics with glassmorphism, smooth animations, and a sleek dark mode.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router 7](https://reactrouter.com/)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/disney-clone.git
   cd disney-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_API_KEY=your_tmdb_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```text
src/
├── assets/         # Static assets like images and videos
├── components/     # Reusable UI components (Header, Slider, etc.)
├── Constant/       # Static data and genre lists
├── pages/          # Page components (Home, MovieDetail)
├── Services/       # API service configurations (Axios)
├── App.jsx         # Main application component & routing
└── main.jsx        # Entry point
```

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---
Built with ❤️ by [Your Name]
