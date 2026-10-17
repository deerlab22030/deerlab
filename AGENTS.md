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
- Use provided names, titles, websites, and email addresses exactly. Obtain requested portraits from the person's own homepage and store them locally under `public/images/people/manual/` with descriptive filenames.
- Preserve the existing visual style: member portraits are 132px circular images with `object-cover`; the PI portrait uses the existing responsive 4:5 frame. Check face cropping when changing photos. Use the existing fallback avatar when no portrait is available.
- Before publishing, verify the affected group order, absence of duplicate members, website/email links, image loading, and desktop/narrow-screen layout as applicable. Run the production build and lint the modified code; report unrelated pre-existing failures accurately.
- Apply the footer date and disclosure rules above for every People page change as well.
