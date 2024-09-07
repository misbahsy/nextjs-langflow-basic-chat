# Chat App with Next.js and Langflow

This is a [Next.js](https://nextjs.org) project that integrates with Langflow for chat functionality.

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up your environment variables:
   - Create a `.env.local` file in the root of your project
   - Add the following variables:
     ```
     LANGFLOW_API_URL=your_langflow_api_url_here
     LANGFLOW_API_TOKEN=your_langflow_api_token_here
     ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Langflow Setup

To use this chat app, you need to set up a Langflow instance:

1. Sign up for a Langflow account at [Langflow Cloud](https://astra.datastax.com/?utm_source=misbah)
2. Create a new flow or use an existing one
3. Get your API URL and token from the Langflow dashboard
4. Add these to your `.env.local` file as described in the setup instructions above

## Learn More

To learn more about Next.js and Langflow, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Langflow Documentation](https://docs.langflow.org/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
