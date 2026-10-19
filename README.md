# Peace & Quiet clone

A responsive, functional front-end recreation of the public Peace & Quiet site at `peaceandquiet.io`.

## Included routes

- `/` interactive world map shell with regional markers and zoom controls
- `/stats` statistics overview
- `/leaderboard` searchable, period-filtered leaderboard
- `/methodology` methodology and privacy content
- `/pricing` support plans and custom support amount
- `/support` ticket form and copy-to-clipboard donation addresses

## Run

```bash
npm run build
npm run dev
```

The app is a static SPA. Client-side route navigation works for the included paths and falls back cleanly to the map shell.

## Scope note

The clone preserves the public layout, visual language, route structure, controls, forms, map presentation, and interaction affordances. Login, checkout, ticket submission, and newsletter submission are local functional states until connected to a server-side service.
