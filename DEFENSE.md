# Defense guide — understand it, then explain it in your own words

## A short opening explanation

“AutoCare is a fictional car-service website. HTML gives each page its structure. Bootstrap supplies the responsive columns, navigation and carousel. Our CSS defines the design and extra responsive rules. JavaScript reads the chosen service, validates the appointment date and shows a demo preview. There is no backend.”

## Where to look

| Concept | Example to open | What it does |
|---|---|---|
| Semantic HTML | index.html: header, nav, main, section, article, footer | Describes the purpose of content |
| Responsive viewport | head of every HTML file | Makes mobile CSS use the device width |
| Bootstrap grid | index.html: col-12 col-md-6 | Full width on phones, half width from tablet sizes upward |
| Flexbox | css/style.css: .footer-inner and .btn-group | Places items in a row and lets them wrap |
| CSS Grid | css/style.css: .media-card-grid | Arranges the numbered reasons in columns |
| Media queries | bottom of css/style.css | Changes column count, spacing and image sizes at narrower widths |
| CSS variables | :root at top of css/style.css | Stores shared colors in one place |
| Form validation | booking.html: required, type=email; js/main.js: validateDate | Browser checks required values; JS rejects Sunday |
| Events | js/main.js: addEventListener | Runs a function after input or submit |
| URL parameters | js/main.js: URLSearchParams | Reads a service chosen on another page |
| Bootstrap interaction | navbar data-bs-target and gallery data-bs-slide | Connects buttons to collapsible navigation and slides |
| Accessible feedback | role=status and textContent | Announces the preview and treats input as text |

## Live modification practice

1. Change the home heading in index.html and reload.
2. Change --blue at the top of css/style.css; explain why multiple buttons update.
3. Change .media-card-grid from three columns to two on desktop; keep the mobile rule.
4. Add a service card by copying an article and its Bootstrap column. Update the title, image, description and booking link. If it is a new service, add the matching option value in booking.html.
5. Make the vehicle field optional by removing required; explain the effect and restore it.
6. Change Saturday hours in schedule.html. If the example appointment times need changing, update booking.html too.
7. Change the contact preview sentence in js/main.js and test a valid submission.

## Likely questions

**Why does the mobile menu work?** The button targets #siteNav. Local bootstrap.bundle.min.js controls its collapsed state.

**What is the difference between a class and an ID?** Classes can style many elements. An ID identifies one element, such as #booking-form.

**Why preventDefault?** A normal form submission navigates or reloads. This demo instead stays on the page and displays a preview.

**Why check if bookingForm exists?** One script is shared by all pages, but only booking.html contains that form.

**Why textContent rather than innerHTML?** Entered text should be displayed as text, not interpreted as HTML.

**Does booking send email?** No. A production version needs a backend and actual scheduling logic. This version demonstrates the interface honestly.

**Why local Bootstrap?** It works offline and avoids relying on a CDN during the defense.

**What did you change from the original?** White navigation, stronger typography, consistent spacing and corners, mobile layouts, clearer demo wording, preselected services and functional previews. Original topic, page allocation, palette and local assets remain.

## Team rehearsal

Alan: explain Home and About, the hero, grid and carousel.
Aitemir: explain Services and Booking, query parameters and validation.
Beksultan: explain Schedule and Contact, table headings, labels and the preview.
Everyone: practice one CSS edit and one HTML edit without copying this guide.


## When the teacher removes css/style.css

Bootstrap is still CSS: vendor/bootstrap.min.css remains loaded. The img-fluid class limits images to their parent width and keeps their natural proportions. Bootstrap row/col classes retain the main responsive layout; table-responsive contains wide tables; Flexbox utilities let links wrap. Our custom colors, typography and decorative details disappear as expected. If all CSS including Bootstrap is removed, the page becomes plain semantic HTML rather than the styled layout. We do not duplicate the custom stylesheet in inline styles or hide it in another file.
