# Book Management Angular Exercise

Build a Book Management application. Users register, log in, manage a Book record collection (CRUD), view a dashboard, and customise the app theme.

**Tech stack:** Angular (standalone components), Angular Material, Reactive Forms, JSON Server, chart.js/ng2-charts, ngx-color-picker.

## Data Models

**User** id, name, email, password

**Record** id, title, artist, genre (Rock | Jazz | Electronic | Hip-Hop | Classical), releaseYear, condition (Mint | Near Mint | Very Good | Good | Fair), status (Wishlist | Owned | Sold), pressings (string[]), collectorNotes, referenceLinks (string[]), tags (string[]), userId

**Theme** id, name, color (hex), active (boolean)

## Authentication

| Page       | Route       | Fields                                    |
|------------|-------------|-------------------------------------------|
| Register   | `/register` | Name, Email, Password, Confirm Password   |
| Login      | `/login`    | Email, Password                           |
	
- All fields required. Email must be valid. Password minlength 6. Confirm Password must match Password (custom validator).
- Register: POST to json-server, snackbar on success, redirect to login.
- Login: validate against json-server, store user in localStorage, redirect to `/dashboard`. Snackbar on failure.
- Each page links to the other.
- `canActivate` guard on all routes except login and register. Redirect unauthenticated users to `/login`.

## Layout

Shared layout (header + router-outlet + footer) for all authenticated routes only. Login/Register have no layout.

**Header:** MatToolbar app title, nav links (Dashboard, Collection, Themes) with active highlighting, user name, logout button.
**Footer:** copyright line.

## Dashboard (`/dashboard`)

- Summary cards: total records, count per status (Wishlist, Owned, Sold).
- Pie/doughnut chart: records by genre.
- Bar chart: records by status.

## Collection (`/collection`)

### List

MatTable columns: Title, Artist, Genre, Condition, Status, Release Year, Actions (Edit, Delete). Add pagination (5/10/25), sorting on all columns, and search by title. "Add Record" button above the table.

### Add/Edit Dialog (MatDialog, 4 tabs)

| Tab | Fields | Validations |
|-----|--------|-------------|
| Album Info | Title, Artist, Genre (select), Release Year (datepicker) | Title: required, minlength 3. Artist: required, minlength 2. Genre: required. Year: required. |
| Condition & Pressings | Condition (slider: Mint to Fair, 1-5), Status (select), Pressings (dynamic list of text inputs) | Condition: required. Status: required. At least one pressing. |
| Extras | Collector Notes (textarea), Reference Links (dynamic list), Tags (chips) | Notes: required. Links: optional. At least one tag. |
| Summary | Read-only view of all tabs | No editable fields. |

- Buttons on every tab: Cancel, Back (hidden on tab 1), Continue (replaced by Save on tab 4).
- Save disabled if any tab is invalid.
- Show error/success icon on each tab label based on that tab's validity.
- Edit mode pre-fills all fields from the selected record.

### Delete

Confirmation dialog before delete. Snackbar after.

## Status Highlight Directive

Custom attribute directive on the Status column: Wishlist = blue (`#e3f2fd`), Owned = green (`#e8f5e9`), Sold = grey (`#e0e0e0`).

## Themes (`/themes`)

MatTable columns: Theme Name, Color (swatch + hex), Applied (active indicator), Actions (Apply, Delete). "Add Theme" button above the table.

- Add/Edit dialog: Name (required, minlength 3), Color (color picker). Reactive form.
- Only one theme active at a time. Apply sets CSS variable `--primary-color` on `:root` and updates json-server. App toolbar and accents use this variable.
- Load and apply the active theme on app startup.
- Delete shows confirmation dialog.

## Snackbar

MatSnackBar (~3s) after: register success, login failure, record add/update/delete, theme apply/delete, any HTTP error.

## Routing

| Route         | Auth Required |
|---------------|---------------|
| `/login`      | No            |
| `/register`   | No            |
| `/dashboard`  | Yes           |
| `/collection` | Yes           |
| `/themes`     | Yes           |
| `**`          | Redirect to login |

Default authenticated route: `/dashboard`.

## General Rules

- Angular Material for all UI components.
- Reactive Forms for all forms. No template-driven forms.
- JSON Server for backend (port 3000, collections: users, records, themes).
- Standalone components only. No NgModules.
- Feature folder structure: auth, layout, dashboard, collection, theme, models.
- Handle HTTP errors with snackbar messages.

## Checklist

- [ ] Register and login work end-to-end with validation and snackbar feedback.
- [ ] Auth guard protects all routes; unauthenticated users redirected to login.
- [ ] Layout wraps authenticated pages; login/register have no layout.
- [ ] Dashboard shows summary cards and charts.
- [ ] Collection table has pagination, sorting, and search.
- [ ] Record dialog has 4 tabs with validation, tab icons, and navigation buttons.
- [ ] Save disabled when any tab is invalid.
- [ ] Delete shows confirmation dialog.
- [ ] Status directive colours the status column.
- [ ] Theme table with apply/delete; applying a theme changes app colours.
- [ ] All forms use Reactive Forms.
- [ ] Feature folder structure is followed.
