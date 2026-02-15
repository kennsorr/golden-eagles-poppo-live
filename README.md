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
- Postgres database (Supabase)

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

Create `golden-eagles-cms/.env` (for local Strapi):

```bash
ADMIN_JWT_SECRET=your_admin_jwt_secret
APP_KEYS=key1,key2
API_TOKEN_SALT=your_api_token_salt
TRANSFER_TOKEN_SALT=your_transfer_token_salt
JWT_SECRET=your_users_permissions_jwt_secret
DATABASE_CLIENT=postgres
DATABASE_URL=your_supabase_connection_string
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000/pt-br`.

## Strapi Setup (Events)

Create a Collection Type named `events` with fields:

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
- Frontend on Vercel or Render
- Strapi on Render (Web Service)
- Database on Supabase (Postgres)

Frontend environment variables:

```
STRAPI_URL=https://cms.goldeneagleslive.com
STRAPI_API_TOKEN=your_strapi_api_token_here
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Strapi (Render) environment variables:

```
ADMIN_JWT_SECRET=your_admin_jwt_secret
APP_KEYS=key1,key2
API_TOKEN_SALT=your_api_token_salt
TRANSFER_TOKEN_SALT=your_transfer_token_salt
JWT_SECRET=your_users_permissions_jwt_secret
DATABASE_CLIENT=postgres
DATABASE_URL=your_supabase_connection_string
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

## Scripts

```bash
npm run dev
npm run build
npm run start
```
