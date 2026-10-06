# AutoCare Service

A responsive, six-page website for a fictional car-service workshop. Built for the SE2508 web assignment with HTML, CSS, local Bootstrap 5.3.8 and a small vanilla JavaScript file. No package installation or build step is needed.

## Team and pages

- Alan Akylbek: Home (`index.html`) and About (`about.html`).
- Aitemir Nazimov: Services (`services.html`) and Booking (`booking.html`).
- Beksultan Amantai: Schedule (`schedule.html`) and Contact (`contact.html`).

This preserves the page allocation in the original project. Each member should understand and be able to edit their pages and the shared CSS.

## Run

Unzip the project and open `index.html` in a browser. In IntelliJ IDEA, open the AutoCare folder and use the browser icon on index.html. All images and Bootstrap files are local, so the site also works offline.

## Features

- Six linked pages, responsive navigation and mobile/tablet layouts.
- Service buttons preselect the booking form using a URL query parameter.
- Required fields, email validation, no past dates, and no Sunday appointments.
- Booking and contact previews with accessible status messages.
- A manual Bootstrap image carousel and an opening-hours table.
- An additional standalone CSS media-query exercise at `media-queries.html`.

This is a frontend student demo. Forms do not send data or create real appointments. Contact details and workshop hours are examples. No personal information is saved by the application.

## File guide

- `*.html`: page structure and content.
- `css/style.css`: numbered sections for typography, navigation, layouts, forms and breakpoints.
- `css/media-queries.css`: optional CSS-only exercise.
- `js/main.js`: service preselection, date validation and demo previews.
- `images/`: AI-generated automotive images and original assets.
- `vendor/`: local Bootstrap distribution; do not edit minified library files.
- `DEFENSE.md`: explanations and live-edit practice.

## Design

The supplied Brex style reference guided spacing, flat surfaces, 12px corners, the split hero and larger headings. AutoCare retains its original navy #14213d, blue #1856b8, pale blue #eaf2ff, white and gray palette. Arial is a local font fallback so an internet connection is not required. Six matching automotive images were created with the built-in image generation tool. They depict a fictional workshop, not real premises or team members.

## Publish on GitHub Pages

1. Create or open your team's GitHub repository.
2. Upload the CONTENTS of this folder so index.html is at the repository root. Include css, js, images and vendor.
3. Commit to the main branch.
4. In Settings → Pages, choose Deploy from a branch, then main and / (root), and Save.
5. Wait for deployment, then open the URL shown by GitHub Pages.
6. Test the navigation and forms at that URL. Paste the actual URL in your LMS online-text submission and add it to this README.

Typical URL format: https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
This is a format example, not a deployed URL. Hosting has not been performed from this workspace.

## Before submission

Every member submits the project files. Confirm the live URL, rehearse two pages each, and complete the exercises in DEFENSE.md. Local checks cannot guarantee an instructor's grade.

Official hosting reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
