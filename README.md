# Product Match – Home Screen App for iPhone

An installable web app. It is free, needs no Mac or Apple Developer membership, and does not expire.
After installation it opens full screen from its own Home Screen icon and works offline.

## One-time setup (Windows PC or the iPhone itself)

The files must be hosted once at an HTTPS address. GitHub Pages is free.

1. Create a free account at github.com.
2. Select **New repository**. Name it (e.g., `product-match`), set it to **Public**, and create it.
3. Select **Add file ▸ Upload files**. Upload `index.html`, `manifest.webmanifest`, `sw.js` and the `icons` folder (drag the folder in). Select **Commit changes**.
4. Open **Settings ▸ Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then **Save**.
5. After 1–2 minutes the address appears at the top of the Pages screen, e.g. `https://yourname.github.io/product-match/`.

Public repository note: the app **code** is publicly viewable. Your parameters, products and inputs are **not** uploaded; they are stored only on the iPhone. A private repository requires a paid GitHub plan for Pages. Cloudflare Pages (free) is an alternative host.

## Install on the iPhone

1. Open the address in **Safari**.
2. Tap **Share ▸ Add to Home Screen**. Confirm that **Open as Web App** is on (if shown), then tap **Add**.
3. Open **Product Match** from the Home Screen. Always use the Home Screen icon, not a Safari tab, because the two keep separate data.

## Using the app

- **Parameters tab:** name, units, allowable range, weight (0–10) and description for each parameter.
- **Products tab:** each product's lower and upper value for every parameter.
- **Match tab:** inputs and weight sliders at the top, best match in the center, all products ranked below.
- **Data tab:** CSV import/export (share sheet ▸ Save to Files, iCloud Drive or OneDrive), consistency review, sample data.

All changes, inputs and weights are saved automatically on the device.

## Parameter types

Selected from the Type drop-down in the parameter editor:
- **cm:** values to the nearest 0.1 cm.
- **%:** design inputs in 25% increments; range defaults to 0–100 unless an allowable range is entered.
- **Number:** user-defined minimum and maximum (required) and optional units; design inputs in whole numbers.
- **Y/N:** drop-down on the Match screen; each product is set to Yes, No or Either.

The Match-screen slider moves at the type's resolution: 0.1 cm steps for cm, 25% steps for %, steps of 1 for Number. Typed inputs are rounded to the same resolution.

Product values follow the same resolution and stay within the parameter's allowable range. Entries are adjusted when a field is left and on CSV import. Values saved earlier that do not match are listed under Data ▸ Review, with a button to apply the parameter's resolution and range.

Parameters and products can be reordered with Move up / Move down. Parameter order sets the Match-screen order; product order sets the list order and breaks ties in the ranking.

## Weights and relevance

- Each parameter has a default weight (0–10), shown on the Match screen as "Weight: #".
- In each product, a checkbox marks each parameter relevant. Unchecked = weight 0 (not scored for that product). Checked = enter the product's weight for that parameter.
- Product score = Σ(weight × parameter score) ÷ Σ(weight), using that product's weights, for parameters that have an input value.

## Backups

Data is deleted if the app is removed from the Home Screen or the iPhone is erased. Export a CSV after significant changes and save it to iCloud Drive or OneDrive.

## Updating the app

Upload the changed file to the same repository. Also increase `VERSION` in `sw.js` (e.g., `product-match-v2`). The update appears the second time the app is opened while online. Stored data is retained.

## CSV format

See `ProductMatch-Settings-Template.csv`. Sections `[SETTINGS]`, `[PARAMETERS]`, `[PRODUCTS]` in column A.
- Parameters: Name, Type (cm / % / Number / Y/N), Unit, Range Min, Range Max, Weight, Description.
- Products: numeric parameters use `<Name> Lower` and `<Name> Upper`; Yes/No parameters use `<Name> Value` (Yes, No or Either); every parameter has `<Name> Weight` (0 = not relevant, blank = parameter default).
- In Excel, save as **CSV UTF-8**.
