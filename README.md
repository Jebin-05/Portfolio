# Portfolio

A modern, responsive portfolio website built with React and featuring advanced animations and interactive components. This application showcases professional experience, projects, skills, and provides a comprehensive platform for professional presentation.

## Overview

This portfolio application is designed to present professional credentials, work experience, educational background, and technical projects in an engaging and interactive manner. Built with modern web technologies, it emphasizes performance, user experience, and visual appeal through sophisticated animations and responsive design.

## Features

- Modern, responsive design optimized for all device sizes
- Interactive animations powered by Framer Motion
- Custom cursor implementation for enhanced user interaction
- Scroll-based reveal animations and parallax effects
- Dynamic loading screen with progress indication
- Contact form integration with EmailJS
- Project showcase with detailed descriptions
- Comprehensive skills display organized by categories
- Professional experience and education timelines
- Downloadable resume functionality

## Technology Stack

### Core Technologies
- React 19.0.0
- Vite 6.3.0
- JavaScript (ES6+)

### Styling and Design
- Tailwind CSS 3.4.17
- PostCSS 8.5.3
- Autoprefixer 10.4.21
- Custom CSS animations

### Animation and Interaction
- Framer Motion 12.7.3

### Routing and Navigation
- React Router DOM 7.5.0

### External Services
- EmailJS Browser 4.4.1

### Development Tools
- ESLint 9.22.0
- Vite Plugin React 4.3.4
- Terser 5.39.0

## Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── Resume.pdf       # Downloadable resume
│   └── photo.jpeg       # Profile image
├── src/
│   ├── components/      # React components
│   │   ├── AnimateIn/
│   │   ├── CustomCursor/
│   │   ├── LoadingScreen/
│   │   ├── ParallaxSection/
│   │   ├── ScrollProgress/
│   │   ├── ScrollRevealText/
│   │   ├── ScrollStory/
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── SectionDivider.jsx
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── eslint.config.js     # ESLint configuration

```

## Installation

### Prerequisites
- Node.js (version 16.x or higher)
- npm (version 7.x or higher)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/Jebin-05/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Usage

### Development Mode
Run the development server with hot module replacement:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
Create an optimized production build:
```bash
npm run build
```
The built files will be generated in the `dist` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## Configuration

### EmailJS Setup
To enable the contact form functionality:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Add your credentials to the `.env` file

### Customization
- Update personal information in component files
- Replace `public/photo.jpeg` with your profile image
- Replace `public/Resume.pdf` with your resume
- Modify color schemes in `tailwind.config.js`
- Adjust animations in component files

## Deployment

This project is configured for deployment on Vercel with the included `vercel.json` configuration file.

### Deploy to Vercel
1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

### Alternative Deployment Options
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

## Performance Optimization

The application includes several performance optimizations:
- Code splitting with React lazy loading
- Optimized bundle size with Terser minification
- Efficient image loading strategies
- CSS optimization with PostCSS and Autoprefixer
- Production build optimization through Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For inquiries or collaboration opportunities, please use the contact form on the website or reach out directly through the provided contact information.

## Acknowledgments

Built with modern web development best practices and leveraging the React ecosystem for optimal performance and developer experience.
