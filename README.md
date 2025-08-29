# IoT Academy - React Application

A modern, responsive landing page for an IoT and Electronics training academy built with React and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX**: Beautiful gradient designs and smooth animations
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Interactive Elements**: Animated backgrounds, floating components, and smooth transitions
- 🎯 **Program Selection**: Three different IoT training programs (2-month, 4-month, 6-month)
- 📚 **Detailed Syllabus**: Week-by-week breakdown of topics and projects
- 🔧 **Prerequisites**: Clear requirements and hardware specifications
- 📊 **Statistics**: Student success metrics and achievements

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd iot-academy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Project Structure

```
iot-academy/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main React component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles and Tailwind imports
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## Customization

### Colors and Themes

The application uses a dark theme with cyan/blue gradients. You can customize colors by modifying:

- `tailwind.config.js` - Add custom color palettes
- `src/index.css` - Modify CSS custom properties
- Component-specific color classes in `App.js`

### Content Updates

To modify the content:

1. **Programs**: Update the `programs` object in `App.js`
2. **Prerequisites**: Modify the `prerequisites` array
3. **Hardware Requirements**: Update the `hardwareRequirements` array
4. **Statistics**: Change the stats in the stats section

### Adding New Sections

To add new sections:

1. Create the section JSX in `App.js`
2. Add navigation links in the header
3. Update the mobile menu if needed
4. Style with Tailwind CSS classes

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Various Platforms

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading of components
- Optimized animations
- Responsive images
- Efficient CSS with Tailwind

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact:
- Email: info@iotacademy.com
- Phone: +1 (555) 123-4567

---

**Happy Coding! 🚀**
