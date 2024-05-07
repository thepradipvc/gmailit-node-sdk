# Thunder Mail Node.js SDK

Node.js library for the Thunder Mail API.

## Install

```bash
npm install thundermail
# or
yarn add thundermail
# or
pnpm add thundermail
```

## Examples

coming soon
<!-- Send email with:

- [Node.js](https://github.com/thundermaillabs/thundermail-node-example)
- [Next.js (App Router)](https://github.com/thundermaillabs/thundermail-nextjs-app-router-example)
- [Next.js (Pages Router)](https://github.com/thundermaillabs/thundermail-nextjs-pages-router-example)
- [Express](https://github.com/thundermaillabs/thundermail-express-example) -->

## Setup

First, you need to get an API key, which is available in the [Thunder Mail Dashboard](https://thundermail.vercel.app/dashboard).

```js
import { ThunderMail } from 'thundermail';
const thundermail = new ThunderMail('tim_12345678');
```

## Usage

Send your first email:

```js
await thundermail.emails.send({
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  text: 'it works!',
});
```

## Send email using HTML

Send an email custom HTML content:

```js
await thundermail.emails.send({
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: '<strong>it works!</strong>',
});
```

## Send email using React

Start by creating your email template as a React component.

```jsx
import React from 'react';

export default function EmailTemplate(props) {
  const { firstName, product } = props;

  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Thanks for trying {product}. We’re thrilled to have you on board.</p>
    </div>
  );
}
```

Then import the template component and pass it to the `react` property.

```jsx
import EmailTemplate from '../components/EmailTemplate';

await thundermail.emails.send({
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  react: <EmailTemplate firstName="John" product="MyApp" />,
});
```

## License

MIT License