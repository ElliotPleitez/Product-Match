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

- The app opens on the **Match** screen with your last inputs. Each input card shows the weight (top right), a slider, the current value, the allowable range and default, the units, and **⋯** to type a value (the box opens empty; leaving it empty keeps the current value). Y/N parameters use Yes / No radio buttons (tap again to clear). **Reset to defaults** sets every input to its parameter default.
- **Settings** (top right) holds **Parameters**, **Products** and **Data**. One section is open at a time; tap a heading to open or close it. **Done** returns to Match.
- Chip rows on product cards scroll together, so each parameter stays in one column.

All changes, inputs and weights are saved automatically on the device.

## Parameter types

Selected from the Type drop-down in the parameter editor:
- **Number:** numeric values with units (new parameters default to cm). Resolution 1, 0.1 or 0.02, or **Variable**: a list of numbers (numbers only), matched by their values. Allowable range is optional for fixed resolutions and set by the listed numbers for Variable.
- **%:** user-defined precision (1, 0.1 or 0.01%) and slider step (default 25%). Allowable range defaults to 0–100 and can be changed.
- **Text:** a list of text values (characters), each numbered by its position in the list; that number is used for matching. **Numbering** switches between ascending (first = 1) and descending (first = highest) without changing the list order.
- **Y/N:** Yes / No radio buttons on the Match screen; the default is chosen from a drop-down. Each product is set to Yes, No or Either.

Listed values (Number Variable and Text) are added, moved, duplicated and deleted like products. On Match, the slider steps through them in list order, the values are shown above the slider, and the selected value is highlighted and scrolled into view; manual entry and rounding do not apply to listed values.

On each Match tile the slider is the lowest element. **⋯** opens a manual entry box over the tile (it opens empty). The value is accepted when the box loses focus (Done, Enter, closing the keyboard or tapping elsewhere), and the box closes without moving other tiles. Values outside the allowable range are accepted and flagged. An entry that is not a number shakes and highlights the tile and leaves the value unchanged.

**Manual entry rounding** (per parameter, not used for listed values): Nearest, Round up or Round down. Applied when a value is typed on the Match screen.

Parameter editor order: Name, Type, Units, Allowable range, then Resolution or Precision and slider step, Values (Variable), Rounding, Default, Weight, Enable for products, Description.

Product values follow the parameter's precision (or defined values) and stay within its allowable range. Entries are adjusted when a field is left and on CSV import. Values saved earlier that do not match are listed under Data ▸ Review, with a button to apply the parameter's precision and range.

Parameters and products can be reordered with the ▲ / ▼ buttons on the left of each card; Duplicate and Delete are on the right. The screen stays in place while reordering.

## Defaults and enabling

- Each parameter can have a default value (below the allowable range in the editor). **Reset to defaults** on the Match tab sets every input to its default; parameters without one are cleared.
- The parameter editor lists all products under **Enable for products**. Checked products use the parameter; their values are entered by the user on the Products tab.
- Products missing values for an enabled parameter are highlighted on the Products tab, and the missing fields are highlighted in the product editor.

## Products

- Each product can have a **Link**, opened with **Open product link** in the Result section of the Match screen.
- In the product editor, each parameter section collapses to a one-line summary (tap its name; Expand all / Collapse all at the top).
- Scores show context, e.g. "87% (score: 23.5 of 27)": weighted points earned out of the total weight of the parameters scored for that product.

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
- Parameters: Name, Type (Number / % / Text / Y/N), Unit, Range Min, Range Max, Resolution (Number: 1 / 0.1 / 0.02 / Variable; %: precision), Step (% slider step), Values (Text values or Variable numbers, separated by semicolons), Numbering (Text: Ascending / Descending), Rounding (Nearest / Round up / Round down), Default, Weight, Description.
- Products: Product, Description, Link, then numeric parameters use `<Name> Lower` and `<Name> Upper`; Text parameters use the value text in Lower / Upper; Y/N parameters use `<Name> Value` (Yes, No or Either); every parameter has `<Name> Weight` (0 = not relevant, blank = parameter default).
- Older files without the newer columns still import.
- In Excel, save as **CSV UTF-8**.
