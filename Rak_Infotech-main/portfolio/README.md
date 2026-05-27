# RAK Infotech - Professional Portfolio

A professional business portfolio website for RAK Infotech built with React.js.

## 🎯 Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Professional Layout**: Modern and clean UI with professional styling
- **Project Showcase**: Display of Java Full Stack and Python Django projects
- **Services Overview**: Detailed services and development process
- **Contact Form**: Integrated contact form for inquiries
- **Navigation**: Smooth navigation between sections

## 📋 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Navigate to the portfolio directory:
```bash
cd "d:\RAK Infotech\portfolio"
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Technology Stack

- **React.js**: UI library (no TypeScript)
- **CSS3**: Styling with responsive design
- **React Hooks**: State management
- **Responsive Design**: Mobile-first approach

## 📱 Sections

1. **Header**: Navigation menu with sticky positioning
2. **Hero**: Welcome section with CTA buttons
3. **About**: Company information and highlights
4. **Projects**: Showcase of Java and Python projects with filtering
5. **Services**: Service offerings and development process
6. **Contact**: Contact form and location information
7. **Footer**: Footer with links and company information

## 🔧 Customization

### Company Information
Update company details in relevant components:
- **Location**: Contact.js, Footer.js
- **Website**: Contact.js, Footer.js
- **Email**: Contact.js, Footer.js

### Projects
Edit the projects array in `src/components/Projects.js` to add/modify projects.

### Services
Edit the services array in `src/components/Services.js` to customize services.

## 🌐 Deployment

### netlify
1. Build the project: `npm run build`
2. Push the build folder to Netlify
3. Connect your domain

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json: `"homepage": "https://yourusername.github.io/rak-infotech"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
4. Run: `npm run deploy`

## 📞 Support

For inquiries about this portfolio:
- Website: rakinfotech.com
- Email: info@rakinfotech.com
- Location: Madurai, Tamil Nadu, India

## 📄 License

This project is the property of RAK Infotech.

---

**Built with React.js** | **Professional Portfolio** | **Responsive Design**
