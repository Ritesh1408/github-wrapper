# GitHub Profile Explorer 🔍✨

This project is a **React + Vite** application that allows users to search and explore GitHub profiles using the **GitHub REST API v3**. It provides an elegant, responsive UI and displays essential profile data like repositories, followers, location, and more.

## 🚀 Tech Stack

- **React** (with JSX)
- **Vite** (fast build tool with HMR)
- **Axios** (for API requests)
- **CSS / SCSS** (responsive UI styling)
- **ESLint + Prettier** (code quality)

## 📦 Libraries Used

- [`axios`](https://www.npmjs.com/package/axios): To fetch data from the GitHub API
- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react): Babel-based plugin for Fast Refresh in React

## 📡 GitHub API Endpoints Used

The app interacts with the following GitHub REST API endpoints:

- **User Profile:**  
  `https://api.github.com/users/{username}`

- **Repositories:**  
  `https://api.github.com/users/{username}/repos`

- **Followers:**  
  `https://api.github.com/users/{username}/followers`

> For more, refer to the [GitHub REST API docs](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user).

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/github-profile-explorer.git
cd github-profile-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to start using the app.

---

## 🌐 Live Demo

> [Coming Soon or add deployed link here]

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Page-level components
├── api/               # Axios instance & GitHub API calls
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── styles/            # CSS files
```

---

## ✅ Future Improvements

- Add pagination for repositories
- Dark/light theme toggle
- Sort/filter repositories

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)


