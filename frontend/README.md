# POC Next v12 and MUI v5

The team has experience in Vue and React. It can work with both frameworks. The current state of Vue ecosystem, which seem to be in transition from version 2 to version 3, opens the question if React counterparts, NextJs and MUI5, are more suitable choice for this project at this specific moment. Based on features existing in the legacy application and current requirements, key features of the frontend framework to use are:

- Easy integration with generic SSO oAuth services like ORCID, SURFconext, Microsoft etc.
- SEO support for custom meta tags and dynamic build sitemap.xml file
- Rapid development of user interface, in particular, the input/admin pages of the legacy application require improvements

## Development

- intall dependencies `npm install`
- run in dev mode `npm run dev` or `yarn dev`

## Docker compose

To run solution using docker-compose run `docker-compose up`. The solution is avaliable on http://localhost:5000

If you want to rebuild the image run `docker-compose up --build`.

The image version is defined in the docker-compose.yml file. Inrease the version number specified in docker-compose.yml file and in package.json to trigger new image build automatically.

## Dependencies

```bash
# scaffole new project with typescript
npx create-next-app next-v12-mui5  --typescript
# install mui-5 based on https://mui.com/getting-started/installation/
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
# for next SSR we need server part for SSR
npm install @emotion/server
```

The integration between NextJS and MUI-5 is based on [official example](https://github.com/mui-org/material-ui/tree/master/examples/nextjs).
More explation concerning the official example can be found in [this video](https://www.youtube.com/watch?v=IFaFFmPYyMI&t=597s)

Most important point concerning Next is integration in template files: \_app.tsx, \_document.tsx

### Theming

Customization in MUI5 is done using [theme object](https://mui.com/customization/theming/).
The theme is provided at the root React component using Theme context provider.
In short, add theme provider to \_app.tsx file

## Default readme content of NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
