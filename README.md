# Srijan'25 Frontend

Welcome to the frontend application for Srijan'25, an annual cultural festival organized by Jadavpur University. This application serves as the user interface for various components of the festival, including event registration, merchandise, and dashboards.

## Features

- **Landing Page**: Initial page of the application showcasing the event details.
- **Event Registration**: Register for events with options for team member management.
- **Merchandise Page**: Browse and purchase festival merchandise with customizable options.
- **Dashboard**: Access protected routes and user-specific information.
- **Responsive Navbar and Footer**: Navigate easily across pages with a consistent interface.
- **Animations**: Dynamic animations for mascot and hero text elements.

## Tech Stack

- **React**: Core library for building the user interface.
- **React Router**: Facilitates client-side routing.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **MUI**: Provides React components for faster and easier web development.
- **Vite**: Next generation frontend tooling for development and build processes.

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

- Access the landing page by navigating to the root URL after starting the server.
- Register for events using the `/eventregistration` route.
- Explore merchandise options at `/merchandise`.
- Access user-specific dashboard information at `/dashboard`.

## Environment Variables

No specific environment variables are defined in this project's metadata.

## API Reference

The application does not include server-side API endpoints. It focuses on client-side routing for different pages:
- `/dashboard`: Protected route requiring user authentication.
- `/merchandise`: Route displaying available merchandise.
- `/events`: Route showcasing event details.
- `/eventregistration`: Route for event registration.

## Contributing

We welcome contributions from the community. Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
> 🤖 *Last automated update: 2026-02-27 00:22:16*