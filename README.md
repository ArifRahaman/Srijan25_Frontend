# Srijan'25 Frontend

Srijan'25 Frontend is a web application designed to enhance user interaction and engagement for the Srijan event hosted by Jadavpur University. The platform allows users to register for events, purchase merchandise, and manage their profiles via a personalized dashboard.

## Features

- **Landing Page**: An introductory page highlighting the event details and key features.
- **Protected Routes**: Certain pages require user authentication to access.
- **Event Registration**: Users can register for various events.
- **Merchandise Page**: Users can explore and order official event merchandise.
- **User Dashboard**: A personalized dashboard for managing event participation and user settings.

## Tech Stack

- **Frontend**: React
- **Styling**: Tailwind CSS, CSS Animations
- **Routing**: React Router
- **State Management**: React Hooks
- **Build Tool**: Vite
- **Utilities**: clsx, tailwind-merge

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ArifRahaman/Srijan25_Frontend.git
   cd Srijan25_Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage Guide

1. **Landing Page**: Visit the root URL to access the main landing page.
2. **Event Registration**: Navigate to `/events` to view and register for available events.
3. **Merchandise Page**: Visit `/merchandise` to browse and order event merchandise.
4. **Dashboard**: Access `/dashboard` to view your personalized user dashboard. This route is protected and requires authentication.

Example route for the Dashboard:
```jsx
<Route path="/dashboard" element={<DashboardPage user={user} logout={handleLogout} />} />
```

## Environment Variables

No specific environment variables are configured in this project.

## API Reference

No external API endpoints are referenced or utilized in this project.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
> 🤖 *Last automated update: 2026-02-25 15:37:41*