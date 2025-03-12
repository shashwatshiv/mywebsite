# Personal Portfolio Website

My personal portfolio website built with Astro and Tailwind CSS. Features a modern design, blog functionality, and project showcase.

## Features

- 🚀 Modern and responsive design
- 📝 Blog with Markdown/MDX support
- 💼 Project showcase
- 🎨 Dark mode support
- 📱 Mobile-friendly
- ⚡ Performance optimized

## Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [MDX](https://mdxjs.com)

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and styles
│   ├── components/  # UI components
│   ├── content/     # Blog posts and content
│   ├── layouts/     # Page layouts
│   └── pages/       # Page components
└── package.json
```

## Blog Posts

Blog posts are written in Markdown or MDX and stored in `src/content/post/`. See the [blog writing guide](https://your-site.com/blog/how-to-write-blog-posts) for detailed instructions.

## Deployment

This site is deployed on Netlify. To deploy your own:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## License

MIT License
