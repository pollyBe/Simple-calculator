# Simple-calculator App
1. Task: [Simple-calculator](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0)
2. Screenshot:
![image](https://github.com/user-attachments/assets/fd9901c8-7667-4665-ad98-cf10bce058f5)
3. Deploy: [Simple-calculator deploy](https://singular-starship-281a31.netlify.app/)
4. How to build this app locally:
   
  •  Prerequisites:
  
Node.js and npm installed on your machine.
Git for cloning the repository.

  • Steps:
  
- Clone the repository:
```
git clone [<repository_url>](https://github.com/pollyBe/Simple-calculator.git)
```

- Navigate to the project folder:
```
cd Simple-calculator
```

- Install dependencies:
```
npm install
```
- This will install all required dependencies from the package.json file.

- Start the development server:
```
npm run dev
```

- The application will automatically run at:
```
http://localhost:8080
```

- Optional - Build for production:
```
npm run build
```

- The production-ready files will be saved in the dist folder.

   ▌Project Structure

Let me walk you through how I've organized this project, so you can easily find your way around.

```
Simple-calculator/
├── .husky/       # This folder stores the settings for Husky, which I use to automatically run certain tasks (like code checks or tests) before I commit or push my code. It helps me keep the code working well.
├── src/        # This is the heart of my project - where I write all the source code.
│  ├── app/      # I keep the core application logic in this subfolder.
│  │  ├── actions.js        # This is where I define functions for calculator actions.
│  │  ├── calcListeners.js     # I use this file to set up event handlers for the calculator's UI elements.
│  │  ├── createCalculatorUi.js   # Here, I have for creating the user interface for the calculator.
│  │  ├── createElement.js     # This file has helper functions to create HTML elements.
│  │  ├── createLayout.js     # I manage the layout of the calculator using function in this file.
│  │  ├── index.js         # This is the main file I use to start the application.
│  │  └── style.scss        # This is where I style my App.
├── .eslintrc.js    # The file for configuring ESlint.
├── .prettierrc    # Configuration file to use Prettier.
├── eslint.config.mjs  # Configuration file for ESlint
├── package.json    # Contains project information.
├── package-lock.json # Used to ensure all other Devs use same Dependency Versions.
├── README.md     # This file describes the project.
└── webpack.config.js # Used to Bundeling of the Project.
```

Let me give you a bit more detail about a few of these elements:

•  .husky/: With Husky, I can automatically run tasks before I commit, etc. It helps me keep the code well-maintained.

•  src/: The Heart of this project. It contains all the source Code

•  .eslintcache, .eslintrc.js, .prettierrc: These Files are Configured to make sure I write high quality code.

•  package.json and package-lock.json: These manage dependencies I'm using.

•  README.md: The important file with usage info and examples.

•  webpack.config.js: With this File I Bundling all my Code


This structure should make it easier to understand where different parts of the code live and find what you are looking for.


