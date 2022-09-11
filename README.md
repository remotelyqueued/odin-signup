# odin-signup

simple sign up form

## tailwindcss

```
npm install -D tailwindcss
npm install -D prettier-plugin-tailwindcss
npm install -D @tailwindcss/forms

npx tailwindcss init
```

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
```

src/input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

todo: 

credit artist - picture

design

add placeholder text?