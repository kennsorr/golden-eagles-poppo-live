# Golden Eagles (Poppo Live Agency)

Marketing site for the Golden Eagles Poppo Live agency. Includes bilingual pages
(English + Portuguese) and events sourced from Strapi.

## Features

- Next.js App Router + TypeScript
- EN / PT-BR locale routes
- Events powered by Strapi API
- Google Analytics (GA4)
- Animated background + custom UI components

## Requirements

- Node.js 18+
- Strapi running locally or deployed

## Local Development

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```bash
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token_here
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000/pt-br`.

## Strapi Setup (Events)

Create a Collection Type named `event` (or `events`) with fields:

- `title` (Text)
- `time` (Datetime)
- `category` (Text)
- `host` (Text)
- `guest` (Text, optional)
- `description` (Text, optional)
- `image` (Media, optional)

Ensure the API token has read access and the Events endpoint is public or
token-authenticated.

## Deployment

Recommended:
- Frontend on Vercel
- Strapi on Render / Railway / VPS

Set these environment variables in your host:

```
STRAPI_URL=https://cms.goldeneagleslive.com
STRAPI_API_TOKEN=your_strapi_api_token_here
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Scripts

```bash
npm run dev
npm run build
npm run start
```
