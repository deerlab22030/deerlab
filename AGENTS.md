# Repository instructions

- Whenever making any user-facing website update in this repository, update the `Last Update` date in `src/sections/Footer.tsx` to the actual date of the change before committing or pushing.
- Only update the date. Do not replace, remove, or rewrite the disclosure text beneath it.
- Preserve the existing disclosures that the homepage hero video was generated with Grok and the research page images were generated with GPT-Image2.
- This requirement applies in every task and new chat working in this repository. It does not apply to read-only inspection or analysis that makes no website changes.

## People page maintenance

- Edit People page records in `src/pages/TeamPage.tsx`. Array order is the display order; preserve the user's established order rather than sorting alphabetically or putting new members first.
- Append new members to the end of the relevant group. For PhD students, append to the appropriate university's list. Change existing order only when explicitly requested.
- The established GMU PhD student order is: Shiwei Hong, Junjie Ma, Haichang Li, Weisen Zhao, Zhiyao Shu, Dhiman Goswami. Future additions follow these members at the end; if a member leaves, preserve the relative order of those remaining.
- Keep one record per person. When moving a graduate to Alumni PhDs, remove their current-student record and preserve their website and co-advising information.
- Follow the existing alumni format: `Name, Ph.D.` and a separate degree field such as `Ph.D., City University of Hong Kong`. Include a current position only when known; omit unknown positions rather than guessing.
- Use provided names, titles, websites, and email addresses exactly. Prefer portraits supplied by the user in the person's `people/` folder; if a portrait is requested but not supplied, obtain it from the person's own homepage. Store published portraits locally under `public/images/people/manual/` with descriptive filenames.
- Preserve the existing visual style: member portraits are 132px circular images with `object-cover`; the PI portrait uses the existing responsive 4:5 frame. Check face cropping when changing photos. Use the existing fallback avatar when no portrait is available.
- Before publishing, verify the affected group order, absence of duplicate members, website/email links, image loading, and desktop/narrow-screen layout as applicable. Run the production build and lint the modified code; report unrelated pre-existing failures accurately.
- Apply the footer date and disclosure rules above for every People page change as well.

## People information folders

- Read `people/README.md` when asked to add or update people from supplied folders. Each person's folder contains `info.md` and an optional portrait. Groups are `people/phd-students/gmu/`, `people/phd-students/cityu/`, `people/alumni-phds/`, and `people/collaborators/`.
- These folders are editorial inputs, not an automatic website data source. Apply requested changes to `src/pages/TeamPage.tsx` and copy supplied portraits to the published image directory. Keep the corresponding information folder consistent with completed updates.
- Preserve exact supplied values; do not infer unknown positions or treat blank optional fields as instructions to delete existing information. Use explicit notes for removals. Do not publish template placeholders.
- Match existing members before adding records. For graduation, move the information folder to Alumni PhDs and remove the current-student page record, preserving website and co-advising information. Preserve display order and append new members to the relevant group.
- Documentation or information-folder-only changes do not require a footer date change; any user-facing website change does.
- The intake template supports `Group` and `University`. Do not request, store in member records, or display a major for new members. Honor the supplied role and university; undergraduate/master students and interns belong to Collaborators unless the user specifies otherwise. Let long names wrap without clipping while retaining 132px circular portraits.
- Users may submit numbered records and matching portraits directly in `people/_template/` (for example `1.md` and `1.jpg`). Match each portrait to its record, then move completed submissions into the relevant named member folder as `info.md` and `portrait.<original-extension>`. Remove template filler from completed records and retain only the reusable blank `people/_template/info.md` in the template folder.
