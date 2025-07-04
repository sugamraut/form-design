# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```





<br><br><br>
<hr>
<h1>Git File renaming problem solved</h1>
We wanted to rename file named Register.tsx to register.tsx but it was not recognized by the git on windows OS.
<br>
The problem was due to the default case-insensitivity property of git in windows and MacOS. The property does not recognize the change in the upper case and lower case characters of the filename.
<br>
<h2>Solution </h2>
git mv Filename.extension filename.extension
<br>
For Eg:
<br>
<b>git mv Register.tsx register.tsx</b>

<br><br><br>
<hr>
<h1>Git Folder renaming problem solved</h1>
We wanted to rename folder named Register to register but it was not recognized by the git on windows OS.
<br>
The problem was due to the default case-insensitivity property of git in windows and MacOS. The property does not recognize the change in the upper case and lower case characters of the foldername.
<br>
<h2>Solution </h2>
git mv Foldername temp_foldername
<br>
git mv temp_foldername foldername
<br>
For Eg:
<br>
<b>git mv Register tempFolder</b>
<br>
<b>git mv tempFolder register</b>
<br>
<br><br>
<hr>
<h1> Solutions of both Problems</h1>
<br>
Both problems arises due to the default case insensitiveness of git on windows and  Mac OS. 
<br>
Get list of all the configurations through code :  <b>git config -l</b>
<br> Get the value of ignorecase configuration :   <b>git config core.ignorecase </b>
<br>If the value of the ignorecase configuration is <b>true</b>, then the problem is due to the case insensitiveness of the OS.
<br>To change the configuration : <b>git config core.ignorecase false</b>
<br>To change the global configuration : <b>git config --global core.ignorecase false</b>
<hr>
#   f o r m - d e s i g n 
 
 