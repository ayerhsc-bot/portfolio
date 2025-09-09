## Shreya Sarkar — Portfolio

Personal site for an aspiring software engineer transitioning from law. It highlights projects like Beatsify, skills, education, and experience. Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.

### Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

Edit the homepage at `app/page.tsx`.

### Beatsify — project overview

Beatsify is a lightweight Next.js front end backed by a Node-based Spotify API wrapper. The app searches tracks, builds recommendations using simple heuristics (artist similarity, keyword matching, album diversity), and can create private playlists on behalf of an authorized user. The service uses a small axios-based Spotify client with request/response interceptors for token handling. Beatsify stores auth tokens in localStorage for session flow and relies on Spotify developer authorization, so the deployed demo requires a developer-authorized app and is not publicly distributable without proper Spotify API credentials.

- Live demo: https://beatsify.shreya.dev
- Code: GITHUB_LINK

See `DESIGN.md` for recommendation strategies and API flow.

### Editorial / implementation notes

- Use concise screenshots or a GIF for Beatsify rather than full-length video.
- Show the GitHub link prominently; include `DESIGN.md`.
- Make the Spotify authorization note visible on the Beatsify project card to avoid confusion.
- Prioritize mobile responsiveness and readable type sizes.
- Keep the hero CTA above the fold.

### SEO

- Title: "Shreya Sarkar — Aspiring Software Engineer | BA LL.B"
- Description: "Law graduate transitioning to software engineering. Building full-stack projects (Beatsify), completing Harvard CS50x, practicing DSA. Seeking Google Software Engineering Apprenticeship."
