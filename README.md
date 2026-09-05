# Chang Cao — personal website

An interactive academic portfolio built for Chang Cao.

## Update the content

Content is separated by section:

- `content/about/profile.ts`: headline, biography, email and social links
- `content/research/projects.ts`: research project cards
- `content/research/publications.ts`: publication list
- `content/news/items.ts`: news and timeline items
- `content/travel/places.ts`: travel pins, notes and photographs

Each publication can use a `category` such as `JOURNAL ARTICLE`, `CONFERENCE
PROCEEDINGS`, `CONFERENCE PRESENTATION`, or `WORKING PAPER`.

Put publication PDFs and posters in `public/files/publications/`. Add them to a
publication with an object such as
`{ label: "Poster", url: "/files/publications/my-poster.pdf" }` in its `links`
array. External DOI, preprint, code, and slides links use the same format.

Images are separated in the same way:

- `public/images/about/`
- `public/images/research/`
- `public/images/news/`
- `public/images/travel/`

For example, put a Tokyo image at `public/images/travel/tokyo.jpg` and use
`image: "/images/travel/tokyo.jpg"`. Set `profile.photo` in the About file.
For a travel pin, set `location` to either a supported city such as
`"Stuttgart, Germany"` or coordinates in `"latitude, longitude"` format, such as
`"48.7758, 9.1829"`. Coordinates work for any place in the world. More named
cities can be added to `knownPlaces` in `app/InteractiveWorld.tsx`.

## Local preview

```bash
pnpm install
pnpm run dev
```

Then open `http://localhost:3000`.

## Before publishing

Replace the placeholder copy and cards in the relevant `content/` section, add
real images to the matching image folder, and add a GitHub URL if desired.

The map base is the CC0 `BlankMap-Equirectangular.svg` from Wikimedia Commons.
