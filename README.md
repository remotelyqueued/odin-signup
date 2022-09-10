# odin-signup

## tailwindcss

```
npm install -D tailwindcss
npm install -D prettier-plugin-tailwindcss
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography

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
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
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

todo: design!
