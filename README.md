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
- Chip rows on product cards scroll together, so each parameter stays in one column; parameter card chips wrap. ▲ ▼ and Duplicate / Delete are aligned to the top of each card.
- Tapping a card's title, description or a chip opens the editor at that field, brought into view with a brief highlight that fades out.
- **Description and reasoning icons:** tiles and cards show titles only. The ⓘ icon beside a title opens the description, and the graduation-cap icon opens the reasoning, in a pop-up that closes when tapped outside or acknowledged.

All changes, inputs and weights are saved automatically on the device.

## Parameter types

Selected from the Type drop-down in the parameter editor (field order: Units, Resolution and slider step, Values, Allowable range):
- **Number:** numeric values with units (new parameters default to cm). **Resolution** 1, 0.1 or 0.01 with a **slider step**, or **Variable**: a list of numbers (numbers only).
- **%:** resolution 1, 0.1 or 0.01% with a slider step (default 25%). Allowable range defaults to 0–100 and can be changed.
- **Text:** units plus a list of text values.
- **Y/N:** Yes / No radio buttons on the Match screen.

Listed values (Text and Number Variable): the Match slider follows the list order (top value = leftmost position). Each value is numbered by its position for scoring; **Numbering** switches between ascending (first = 1) and descending (first = highest) without changing the order. The allowable range is set by the number of listed values. Number Variable has a **Score by numeric size** switch: when on, scoring uses the numbers themselves and the allowable range is the lowest to highest number.

**Show slider on Match** (Number, % and Text): when off, the tile has no slider; the value is typed (Number, %) or chosen by tapping a listed value.

**Flagged fields:** whenever a value is changed by the app (rounding, resolution change, product value adjusted to the parameter) or needs acknowledgement, the field shakes, stays highlighted and shows a floating comment. Selecting the comment accepts the value shown; selecting the field lets it be reviewed, and it is checked again when left (flagged again if required). If highlighted fields remain when **Save** is selected, a confirmation asks to accept the values shown, clear the prompts and save. A slider step that does not divide the allowable range evenly is flagged once; the accepted combination is remembered.

Resolution and slider step sit on one line. Step, allowable range and default are formatted to the resolution when entered. Changing the resolution re-formats them from the values as typed; any value the new resolution changes is flagged for review. Fields that cannot be edited are grayed. **+ Add value** and the numbering button (Ascending / Descending) sit above the listed values. New listed values slide in without opening the keyboard; deleted values, parameters and products slide out. Deleting a parameter or product, changing a parameter type, CSV import, loading sample data and erasing data use in-app confirmation prompts. Default values offer **Blank** for no default.

## Match screen

- Each tile shows the name and weight, the parameter description, the value between the range ends with units beside each, and the slider at the bottom.
- Sliders move only when the round thumb is grabbed; pressing elsewhere on the track does not change the value.
- The slider always spans the allowable range. It moves from the minimum in steps of the step value and always reaches the maximum (e.g. 0–10 in steps of 3: 0, 3, 6, 9, 10). Listed values (Number Variable, Text) step through the list.
- Tap the value above the slider to type a value. It is accepted when the field loses focus; the keyboard closes when anything other than a text field is tapped. Values outside the allowable range are accepted and shown in amber. When rounding is applied, the tile is highlighted with a comment stating the rounding, which then fades out. Entries that are not numbers are flagged with a floating comment.
- Opening the app with entered values: Input Parameters is collapsed and Result and All Products share the screen as two scrolling halves. With no entered values (and after **Reset to defaults**) only Input Parameters is open, with every tile shown. Y/N options use Yes / No buttons; the selected one is filled.
- Only parameters entered or changed on the Match screen are scored. **Reset to defaults** places the default values (shown faded) and clears the entered set; Result stays collapsed until a parameter is entered, then expands (the screen does not move) and refreshes with each change.
- Input Parameters shows every tile when it is the only section open (including after Reset); with Result or All Products also open, it is a sliding pane of two tiles.
- Opening **All Products** moves to the top of the screen and shows the products in their own scrolling panel; with Input Parameters open, Result collapses, otherwise Result and All Products share the screen. Collapsing All Products leaves Result as it is. Selecting a product collapses Input Parameters and shows Result and All Products together; the selected product stays in view. Entering or changing a parameter keeps the layout as it is.

**Manual entry rounding** (per parameter, not used for listed values): Nearest, Round up or Round down. Applied when a value is typed on the Match screen.

Parameter editor order: Name, Type, Units, Resolution and slider step, Values (listed), Allowable range, Rounding, Default, Weight, Enable for products, Description.

Product values follow the parameter's resolution (or listed values) and stay within its allowable range. Entries are adjusted when a field is left and on CSV import. Values saved earlier that do not match are listed under Data ▸ Review, with a button to apply the parameter's resolution and range.

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

## Splash screen

The app opens with the logo and title for one second. On Android, the installed app uses the system's own launch screen instead.

## Updating the app

The page is loaded from the network first when online, and the app reloads itself once when a new version is installed, so one launch while online shows the latest version. Offline, the saved copy is used.

## Updating the app (maintainer)

Upload the changed file to the same repository. Also increase `VERSION` in `sw.js` (e.g., `product-match-v2`). The update appears the second time the app is opened while online. Stored data is retained.

## CSV format

See `ProductMatch-Settings-Template.csv`. Sections `[SETTINGS]`, `[PARAMETERS]`, `[PRODUCTS]` in column A.
- Parameters: Name, Type (Number / % / Text / Y/N), Unit, Range Min, Range Max, Resolution (Number: 1 / 0.1 / 0.01 / Variable, 0.02 in older files reads as 0.01; %: 1 / 0.1 / 0.01), Step (slider step for Number and %), Values (Text values or Variable numbers, separated by semicolons), Numbering (listed values: Ascending / Descending / By value), Slider (Number, %, Text: Yes / No), Rounding (Nearest / Round up / Round down), Default, Weight, Description.
- Products: Product, Description, Link, then numeric parameters use `<Name> Lower` and `<Name> Upper`; Text and Number (Variable) parameters use the listed value in Lower / Upper; Y/N parameters use `<Name> Value` (Yes, No or Either); every parameter has `<Name> Weight` (0 = not relevant, blank = parameter default).
- Older files without the newer columns still import.
- In Excel, save as **CSV UTF-8**.

## Profiles

Tap the title at the top of the screen to switch profiles from a menu (or **Manage profiles…**).

Settings ▸ Data ▸ **Profiles** holds any number of uniquely named profiles. Each profile is an independent data set (title, parameters, products, do-not-combine pairs, inputs and view settings); switching or changing one does not affect the others. **+ New**, **Rename**, **Duplicate** and **Delete** manage them. Data saved by earlier versions becomes the first profile.

- **Import CSV:** a single-profile file can be added as a new profile or replace the current profile's data. A file exported with **Export all profiles** adds each profile it contains as a new profile (duplicate names are numbered).
- **Export profile:** the current profile only. **Export all profiles:** one file; each profile starts with a `[PROFILE],<name>` row followed by its usual `[SETTINGS]`, `[PARAMETERS]` and `[PRODUCTS]` sections.

## Do-not-combine products

In the product editor, **⚠ Do not combine with** lists the other products; tap one to mark that the two should not be used together (applies to both products), and add the reason. A red ⚠ icon beside the product's name (Result, All Products and Settings ▸ Products) opens the list of products not to combine with and the reason. In All Products, rows that conflict with the selected or best product are outlined in red and tagged. CSV product columns: `Do Not Combine` (product names separated by semicolons) and `Combination Note`.

## Must match

In the product editor, each relevant parameter has **◆ Must match**. When that parameter has an input outside the product's values, the product is marked **✕ Not suitable**: it is listed after all suitable products (striped, with the parameter named), it is never shown as the best match while a suitable product exists, and it is left out of the alternatives. Its score is still shown for reference. CSV product column: `<Parameter> Must Match` (Yes / blank); the column is written only for parameters that use it.

## Reasoning, multi-selection, one-sided values and hard limits

- **Reasoning** (parameter editor, CSV column `Reasoning`): why the parameter matters, kept separate from the description. Opened from the graduation-cap icon beside the parameter's title. Description and reasoning boxes grow to show their full text.
- **Multi-selection** (Text parameters, CSV `Selection` = Multi, `Max Selections`): each product accepts any set of the listed values (CSV product column `<Parameter> Values`, separated by semicolons), and several values can be selected on Match, up to the maximum. A product scores by the share of selected values it accepts; with Must match, every selected value must be accepted.
- **One-sided product values:** leave Lower or Upper blank. Lower only = at or above it (shown "≥ x"); upper only = at or below it ("≤ x").
- **Hard limit** (Number and %, CSV `<Parameter> Hard Min` / `Hard Max`): an absolute product limit, separate from the preferred range; an input beyond it marks the product Not suitable and is noted in the Result.

## Match panes

Match opens with the sections as they were last time (on first use, all three are expanded). Nothing opens or closes on its own. **Reset** (circular-arrow icon left of Settings) applies every parameter's default value and ranks the products with them. Before any input, products are shown gray (not relevant / no data).

The scroll button (↕) at the right of each section title turns its scroll pane on (solid outline) or off (dashed outline). When a pane reaches its top or bottom, the next swipe scrolls the page:

- **On:** the section scrolls inside its own pane; panes without a set height share the rest of the screen. Result shows two tiles: the top tile (score, product, alternatives) and, below it, the parameter inputs against that product; Result's pane opens to the height of the top tile. Drag the bar under a pane to change its height (Input Parameters snaps to whole tiles); holding near the bottom edge lets the pane extend past the screen. Tap the lock on the bar (dashed = unlocked) to lock that height (solid outline) so the section reopens at that height every time it is expanded (dragging is off while locked); unlocked adjustments last until the next expand or collapse. Each bar has its own lock.
- **Off:** the section shows its full content and the page scrolls.

## Developer mode

Hold the Settings icon for 2 seconds to turn developer mode on or off (the icon shakes and shows `</>`); it stays on between launches until turned off. While it is on, hold a parameter tile, a product row or the Result for ½ second: the editor opens at the matching field (for example a product chip opens that parameter's values). After **Save**, Match returns to the same position, and the edited value and any other changed values are highlighted.

## Product range checks

In the product editor, each Number or % parameter checks the range against its hard limit and the allowable range. Blocking (Save is held and the parameter is outlined): lower above upper, hard minimum above hard maximum, a range extending beyond the hard limit. Advisory: a hard limit at or outside the allowable range (no effect, or every input not suitable), or a hard limit with no range. Hard limits are rounded to the resolution when left. The same checks appear in Data ▸ Review. Multi-selection is also available for Number parameters with listed values.
