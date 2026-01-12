# Creative Agency Website - Frontend Technical Assessment

## 📋 Overview
A fully responsive creative agency website built as a technical assessment for Junior Front-End Developer position. The project demonstrates responsive layouts, interactive components, and modern React development practices.

## 🚀 Live Demo
**Website:** [https://dulceramr.github.io/creative-agency-website](https://dulceramr.github.io/creative-agency-website)  
**Repository:** [https://github.com/Dulceramr/creative-agency-website](https://github.com/Dulceramr/creative-agency-website)

## 🏗️ Technology Stack
- **React 19** - Component-based architecture
- **Vite** - Build tool and development server
- **SCSS/SASS** - Advanced styling with preprocessing
- **React Router DOM** - Client-side routing
- **GitHub Pages** - Static deployment

## ✨ Key Features Implemented

### 1. Responsive Design
- **Mobile-first approach** with 4 responsive breakpoints (375px, 768px, 1024px, 1440px)
- **Figma design replication** with exact color palette and typography
- **Flexible layouts** using CSS Grid and Flexbox
- **Optimized images** with lazy loading and object-fit cover
- **Cross-browser compatibility** tested on Chrome, Firefox, Safari

### 2. Interactive Navigation System
- **Fixed header** with smooth scroll navigation
- **Mobile hamburger menu** with animations
- **Desktop navigation** with hover effects and indicators

## 🎯 Projects Section - Custom Filtering System

### 🏗️ Implementation Overview
The Projects section features a custom-designed filtering system that allows users to browse portfolio items by category. This component was created from scratch based on the provided design specifications, implementing both visual design requirements and interactive functionality.

### ✨ Key Features
- **Dynamic Filtering**: Real-time filtering of projects by category
- **Responsive Grid**: Adapts from 1 column (mobile) to 3 columns (desktop)
- **Visual Feedback**: Active filter highlighting with smooth transitions

### 4. Advanced Contact Modal System
**Custom-designed modal** based on the provided color palette and styles:

**Features:**
- **Multi-step form validation** with real-time feedback
- **Three submission states**: Loading, Success, Error
- **Required fields**: Name, Email, Project Details
- **Optional fields**: Phone, Company, Project Type
- **Accessible design** with proper focus management
- **Animated transitions** for smooth user experience

**Form Validations:**
- **Name**: Minimum 2 characters, required
- **Email**: Valid format, required
- **Phone**: Optional international format
- **Message**: Minimum 10 characters, required
- **Project Type**: Dropdown selection with 5 options

**Visual Feedback States:**
- **Loading**: Animated spinner with "Scheduling your call..." message
- **Success**: Green checkmark with confirmation message and auto-close
- **Error**: Red exclamation with retry option and error details

### 5. Design System Implementation

### Centralized SCSS Variables
All design tokens are centralized in `styles/_variables.scss` for consistent theming across the entire application:

**Color Palette:**
```scss
$color-primary: #f94f4f;      // Primary red accent
$color-secondary: #191921;    // Dark background
$color-text: #000000;         // Main text color
$color-white: #FFFFFF;        // Light backgrounds
Typography:

Font Family: Commissioner (400, 700, 800 weights)

Headings: 5rem (h1), 3rem (h2), 1.25rem (h3)

Body Text: 1.125rem with 2rem line height
```

## 🎨 Component Library

**Button:** Primary, Underline, and Ghost variants  
**Card:** Reusable card components for projects and steps  
**Modal:** Reusable modal system with overlay  
**Controls:** Carousel navigation with indicators  

## 🏗️ Architecture Pattern

### Hybrid Layered Architecture
The project follows a **layered architecture** combined with **Atomic Design principles**:

**Layer Structure:**
1. **UI Primitives Layer** (`ui/`): Base components (Button, Card, Modal)
2. **Layout Components Layer** (`layout/`): Global layout (Header, Navigation)  
3. **Section Components Layer** (`sections/`): Page section blocks (Hero, Projects)
4. **Page Components Layer** (`pages/`): Full page compositions
5. **Application Layer** (`App.jsx`): Routing and global providers

**Key Architectural Decisions:**
- **Separation of Concerns**: Clear division between presentation and business logic
- **Component Reusability**: UI components are completely independent
- **Scalable Structure**: Easy to add new features without restructuring
- **Maintainable Codebase**: Logical folder structure with single responsibility

## 🎯 Technical Achievements

### Responsive Breakpoints Implementation
- **Mobile**: < 768px (vertical layouts, touch-friendly)
- **Tablet**: 768px - 1023px (adaptive grids, side-by-side)
- **Desktop**: 1024px - 1439px (full navigation, complex layouts)
- **Wide**: ≥ 1440px (optimized for large screens)

### Performance Optimization
- **Image lazy loading** for below-fold content

### Accessibility Features
- **Semantic HTML** structure
- **Focus indicators** for all interactive elements

## 🛠️ Development Decisions

### 1. Why React + Vite?
- **Fast development** with hot module replacement
- **Optimized production builds** with tree-shaking
- **Modern tooling** with minimal configuration

### 2. Why SCSS Architecture?
- **Modular styling** 
- **Centralized variables** for consistent theming
- **Reusable mixins** for common patterns
- **Better organization** than plain CSS

### 3. Why Component-Based Architecture?
- **Reusability** across multiple sections
- **Maintainability** with clear separation of concerns
- **Testability** of individual components
- **Scalability** for future features

## 🔍 Code Quality

### File Organization:
- **One component per file** rule
- **Separate SCSS files** for each component
- **Logical folder structure** by feature
- **Consistent naming conventions**

## 🚀 Deployment Strategy

- **GitHub Pages** for static hosting
- **HashRouter** for SPA compatibility with static hosting

## 🎨 Visual Design Highlights

### Hero Section
- **Gradient overlay** on hero image
- **Responsive typography** scaling
- **Call-to-action** with smooth hover effects

## 🔮 Future Enhancements

### Planned Features:
**Dark mode** toggle based on user preference
**Form backend integration** with email service
**Unit testing** with Jest and React Testing Library
**Image optimization** for different screen sizes

---

**Developed by:** Dulce Ramírez  
**Position:** Front-End Developer Candidate  
**Assessment:** Technical implementation from Figma design  

*This project was created as part of a technical assessment to demonstrate front-end development skills including design implementation, responsive development, and interactive feature creation.*