## Fullstack blog app with the experimental app directory

This is a fullstack blog app built with Next.js and React. It uses the experimental app directory feature from Next.

[Docs about the experimental app directory](https://nextjs.org/blog/next-13#:~:text=config%2Dnext%40latest-,app/%20Directory%20(beta),-One%20of%20the)

## Getting Started

Fist install all the dependencies
  
```bash
npm install
```

Then, create the ".env" file and add the "DATABASE_URL" key
 - You can copy the content inside the ".env.example" into ".env" and make the needed changes

Push the db changes into the local db
```bash
npx prisma db push
```

Finally, run the development server:

```bash
npm run dev
```