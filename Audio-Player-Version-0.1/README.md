# Welcome :)

## 1: Install Tailwind CSS

Install *Tailwind CSS* via npm, and create a `tailwind.config.js file`

- `npm install -D tailwindcss`
- `npx tailwindcss init`

---

## 2: Configure the template paths
-
 Add the paths to all of your template files in the`tailwind.config.js` file.

```javascript
//tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---


## 3: Add the Tailwind directives to `src/input.css`

- Add the @tailwind directives for each of Tailwind’s layers to the main CSS file.


```css
/* input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

---


## 4: Start the Tailwind CLI build process
- Run the CLI tool to scan template files for classes and build out the CSS.



```terminal
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## 5:  Start using Tailwind in HTML

- Add the compiled CSS file to the `<head>` and start using Tailwind’s utility classes to style content.


```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```


# CDN: Dev Starter

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```