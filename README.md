# benri.github.io

The user site for the `benri` GitHub account, served at
[benri.github.io](https://benri.github.io/). It's a launcher page with an icon
for each app:

| App | Repo | URL |
|---|---|---|
| flightdeck | [benri/flightdeck](https://github.com/benri/flightdeck) | [benri.github.io/flightdeck](https://benri.github.io/flightdeck/) |
| cafflife | [benri/cafflife](https://github.com/benri/cafflife) | [benri.github.io/cafflife](https://benri.github.io/cafflife/) |

Each app is its own repo with its own GitHub Pages deploy. GitHub serves
project sites under this domain at `/<repo-name>/`, which is where the
launcher links point.

## Adding an app

1. Put a square SVG icon in `icons/`. The page rounds the corners and adds the
   shadow, so the icon can be full-bleed.
2. In `index.html`, copy one `<li>` in the `.apps` list and change the link,
   icon, name and description.

There's no build step. Push to `master` and Pages publishes it.

## Notes

- `.nojekyll` turns off GitHub's Jekyll build. Without it, folders that start
  with a dot (like `.well-known/`) aren't published.
- For a Play Store (TWA) build of an app, Android checks
  `/.well-known/assetlinks.json` at the root of the domain. Only this repo can
  publish there, so that file belongs here once there's a signing-key
  fingerprint to put in it.
- To preview locally: `python3 -m http.server -d .` and open
  <http://localhost:8000>. The app links go to `/flightdeck/` and `/cafflife/`
  on the same host, so they only work once deployed.
