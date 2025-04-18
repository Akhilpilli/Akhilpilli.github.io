# Akhil Pilli Portfolio Template

This is a customizable portfolio template created using [Create React App](https://github.com/facebook/create-react-app). You can clone this repository and use it to showcase your professional journey, skills, and projects.

## Key Features

- **Dynamic Configuration**: All content is driven by the `src/config/constants.json` file. Simply edit this file to update your portfolio without modifying the code.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **Interactive Components**: Includes features like mouse trails, click effects, and smooth scrolling.
- **Professional Timeline**: Showcase your professional experience with a visually appealing timeline.
- **Contact Form**: Integrated with [EmailJS](https://www.emailjs.com/) for sending messages directly from the portfolio.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Akhilpilli/Akhilpilli.github.io.git
   cd Akhilpilli.github.io
   ```

2. Install dependencies:
    ```bash
    npm install
    ```

Configuration
1. Open the src/config/constants.json file and update the following sections:

2. Personal Information: Update name, jobTitles, and socialProfiles.
Skills: Add or modify skills under skillList.
Professional Experience: Add your work experience under professionalExperience.
Update the .env file with your EmailJS credentials:
```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```
### Running the Application
To start the development server:
```bash
npm start
```

Open http://localhost:3000 in your browser to view the application.

```bash
npm run build
```

The production-ready files will be available in the build folder.

Learn More
React Documentation
Create React App Documentation
EmailJS Documentation