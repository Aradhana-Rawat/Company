# Excellence Tuition Center Website

A modern, responsive website for a tuition center built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases the center's courses, expert tutors, and provides an excellent user experience for potential students and parents.

## 🌟 Features

### Design & User Experience
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

### Pages & Sections
- **Homepage**: Hero section, features, course preview, testimonials, and call-to-action
- **About Page**: Mission, vision, values, team introduction, and track record
- **Courses Page**: Detailed course information with pricing and features
- **Tutors Page**: Expert tutor profiles with qualifications and achievements
- **Contact Page**: Contact form, location info, FAQs, and contact details

### Components
- **Reusable UI Components**: Button, navigation, layout components
- **Interactive Elements**: Mobile hamburger menu, contact forms
- **Section Components**: Hero, Features, Testimonials, etc.

### Technical Features
- **Next.js 15**: Latest features with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Modern styling with custom theme
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tuition-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
tuition-website/
├── src/
│   └── app/
│       ├── components/
│       │   ├── ui/              # Reusable UI components
│       │   │   └── Button.tsx
│       │   ├── layout/          # Layout components
│       │   │   ├── Navbar.tsx
│       │   │   └── Footer.tsx
│       │   └── sections/        # Page sections
│       │       ├── Hero.tsx
│       │       ├── Features.tsx
│       │       ├── CoursesSection.tsx
│       │       ├── Testimonials.tsx
│       │       └── CallToAction.tsx
│       ├── (pages)/             # Route group for pages
│       │   ├── about/
│       │   ├── courses/
│       │   ├── tutors/
│       │   └── contact/
│       ├── globals.css          # Global styles and theme
│       ├── layout.tsx           # Root layout
│       └── page.tsx             # Homepage
├── public/
│   └── images/
│       └── placeholder.svg      # Placeholder images
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) - Used for main CTAs and branding
- **Secondary**: Amber (#f59e0b) - Used for accents and highlights
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter - Modern, readable sans-serif font
- **Hierarchy**: Clear heading and text size hierarchy

### Components
- **Buttons**: Primary and secondary variants with hover states
- **Cards**: Consistent shadow and border radius
- **Forms**: Clean, accessible form inputs with validation

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with compelling messaging
- Features highlighting key benefits
- Course preview cards
- Student testimonials
- Strong call-to-action sections

### About (`/about`)
- Mission and vision statements
- Core values presentation
- Team member profiles
- Achievement statistics

### Courses (`/courses`)
- Detailed course information
- Pricing and duration details
- Course features and highlights
- Enrollment call-to-actions

### Tutors (`/tutors`)
- Expert tutor profiles
- Qualifications and experience
- Subject specializations
- Achievement highlights

### Contact (`/contact`)
- Contact information cards
- Interactive contact form
- Location and facility details
- Frequently asked questions

## 🔧 Customization

### Content Updates
1. **Contact Information**: Update in `Footer.tsx` and `ContactPage.tsx`
2. **Course Details**: Modify course arrays in respective page files
3. **Tutor Profiles**: Update tutor information in `TutorsPage.tsx`
4. **Testimonials**: Edit testimonial content in `Testimonials.tsx`

### Styling
1. **Colors**: Update CSS custom properties in `globals.css`
2. **Fonts**: Change font imports and variables
3. **Components**: Modify component styles using Tailwind classes

### Images
- Replace placeholder images in `/public/images/`
- Add real tutor photos and facility images
- Consider using Next.js Image component for optimization

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

### Other Platforms
- **Netlify**: Deploy via GitHub integration
- **AWS Amplify**: Connect repository for automatic deployment
- **Custom Server**: Build and deploy using `npm run build` and `npm run start`

## 📊 Performance

The website is optimized for performance with:
- Next.js automatic code splitting
- Optimized fonts and images
- Efficient component structure
- Minimal JavaScript bundle size

## 🔒 Security

- Form validation on both client and server side
- No sensitive data exposure in client code
- HTTPS recommended for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: info@excellencetuition.com
- Phone: (555) 123-4567

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
