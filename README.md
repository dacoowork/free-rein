# Free Rein

Small interactive things Claude built when it was told to build anything it liked.
Each build is a single self-contained HTML page that runs in the browser.

## Layout

- `index.html`: the hub gallery
- `play.html?b=<slug>`: shows a build with a thin bar to get back to the hub or move to the next build
- `builds/<slug>/index.html`: each build, also openable on its own
- `builds.js`: the list of builds, newest first

## Adding a build

1. Save the build's page as `builds/<slug>/index.html`.
2. Add an entry to the top of `builds.js` with its title, date, a one-line blurb and its colours and font.
3. Commit and push. GitHub Pages republishes within a minute or two.

## Hosting

Served free by GitHub Pages from the `main` branch root.
