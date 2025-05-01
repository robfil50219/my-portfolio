# Robert Filep Portfolio

A modern, responsive portfolio site built with React, Vite, and Tailwind CSS to showcase three standout projects.

---
## 🔗 Connect with Me

- [LinkedIn](https://www.linkedin.com/in/robert-filep-417146264/)


## 🚀 Features

- **Fast & Lightweight** — Powered by Vite’s dev server and build optimizations.  
- **Utility-First Styling** — Tailwind CSS for rapid, consistent design.  
- **Component-Driven** — Clean React components for Navbar, Hero, Projects, Contact, and Footer.  
- **Responsive Layout** — Mobile-first grid and utility classes ensure it looks great on any screen.  

---

## 📦 Project Structure

```
my-portfolio/
├─ index.html
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.cjs
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ index.css
│  ├─ App.jsx
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ Projects.jsx
│     ├─ ProjectCard.jsx
│     ├─ Contact.jsx
│     └─ Footer.jsx
└─ public/ (optional – for static assets)
```

---

## 📥 Prerequisites

- [Node.js](https://nodejs.org/) v16 or later  
- npm (comes with Node.js)  

---

## 🔧 Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/robfil50219/my-portfolio
   cd my-portfolio
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

---

## 🛠️ Development

Start the Vite dev server with hot-reload:

```bash
npm run dev
```

Then open your browser to [http://localhost:5173](http://localhost:5173).

---

## 📦 Production Build

Generate an optimized, minified build in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Customization

- **Tailwind config**: [tailwind.config.js](./tailwind.config.js)  
- **Global styles**: [src/index.css](./src/index.css)  
- **Content paths**: Make sure any new `.jsx`, `.js`, `.html` files are included in the `content` array of `tailwind.config.js`.

---

## 🔗 Deployment

You can deploy your `dist/` folder to any static host:

- **Netlify**: Drag & drop the `dist/` folder.  
- **Vercel**: Connect your GitHub repo and set the build command to `npm run build` and output directory to `dist`.  
- **GitHub Pages**: Use [gh-pages](https://www.npmjs.com/package/gh-pages) or push the contents of `dist/` to your `gh-pages` branch.

---

## 🤝 Contributing

1. Fork this repo  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m "Add YourFeature"`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

> © {new Date().getFullYear()} Robert Filep. All rights reserved.