

# Cedar Payment

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Running Storybook

```bash
npm run storybook
```

Open [http://localhost:6000](http://localhost:6006) with your browser.

## Running Unit Tests

```bash
npm test
# or
npm test:watch
```

### Shortcuts taken

1. I have some duplicate tailwind classes on the divs inside the actual pages. It would be worth seeing if even more things in the pages could be turned into re-usable components.
1. I did not implement the animation when switching between steps on the payment screen. I'd be happy to discuss ideas for this.
1. The payment page in the Figma looks like it might use an accordion. I didn't implement a proper accordion component with animation, but if we know this functionality is going to be needed for other pages, it would be worth looking into making a re-usable component.
1. When returning to Edit the payment info after clicking Continue, the green checkmarks in the input fields aren't displayed. With more time I could fix that issue.
1. The divs on my payment page might be overly complicated. I think I could trim those down to simplify the code.
1. Field validation only requires strings. It should be enhanced for even better validation.
1. I hard coded font colors in different areas. They should be moved to tailwind.config.js where they can be reused by name.
1. On some elements I didn't get the exact padding, font size, color that the Figma used. With more time those exact properties could be applied.