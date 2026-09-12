# HELM

A Dune-poster-styled web app for tracking Bear and Indy's
walks and what Anselm is owed at the end of the week. Works on any iPhone
from a link, no App Store.

**The name.** Anselm comes from the Germanic *ans* (divine) + *helm*
(helmet, protection). A helm is also where you steer from. Anselm at the helm.

**Week numbers.** Week 1 is the week of Aug 31, 2026, Anselm's first week.
Walks from before the app existed are listed in `config.js` under `history`
so the totals are right from day one.

**How it works.** Monday through Friday, two walks a day (Morning and
Evening). Whoever is around taps a walk when it's done and the button floods
with color and records the time. The week sits underneath as a strip; tap any
day to jump to it. The ring at the bottom fills as walks are logged and shows
dollars owed ($5 per walk). When you pay, tap **Mark week paid**. Any earlier
week never marked paid shows up as a carry-over so nothing gets lost.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app. You should never need to touch it. |
| `config.js` | Names, price per walk, days, and the sync settings. **This is the one file you edit.** |
| `images/bear.jpg`, `images/indy.jpg` | The dogs' photos, shown in the circles at the top. |

## Setup (about 15 minutes, no coding)

### 1. Put it on the web (GitHub Pages)

This happens automatically. Every time something lands on the `main` branch,
GitHub rebuilds the site (see `.github/workflows/pages.yml`). The link is:

    https://jessicapino716-png.github.io/redesignappframes/

If the link ever shows a 404, open **Settings** then **Pages** in the repo and
make sure Source is set to **GitHub Actions**. That is the only setting.

Until step 3 below is done, the app runs in "this phone only" mode: it works,
but each phone keeps its own walks.

**Why a database at all, if it's just a web page?** A web page is like a
printed poster: every phone that opens the link gets its own copy, and
anything you write on your copy stays on your copy. For Anselm's tap to
show up on your phone, all three copies have to write to one shared place on
the internet. That shared place is the database. Firebase is Google's free
one, and it needs about five minutes of clicking once.

### 2. Photos

On the repo page, open the `images` folder, click **Add file** then
**Upload files**, and drop in two photos named exactly `bear.jpg` and
`indy.jpg`. Click **Commit changes**. Square-ish photos look best; they show
cropped to a circle. The site rebuilds itself in about a minute.

### 3. Turn on syncing between phones (Firebase, free)

Think of Firebase as a shared notepad in the cloud. Every phone reads and
writes the same notepad, so a tap on one phone shows up on the others within
a second. Google runs it and the free tier is far more than this app will
ever use.

1. Go to <https://console.firebase.google.com>, sign in with a Google account,
   and click **Create a project**. Name it anything (for example `helm-walks`).
   You can turn off Google Analytics when asked; it isn't needed.
2. In the left menu open **Build** then **Realtime Database**. Click
   **Create Database**, keep the default location, and choose
   **Start in test mode**. Test mode locks itself after 30 days, so do step 5
   now rather than later.
3. Click the gear icon next to **Project Overview**, then **Project settings**.
   Scroll down to **Your apps** and click the `</>` (web) icon. Give the app a
   nickname, skip Firebase Hosting, and click **Register app**. Firebase shows
   a block of code containing `apiKey`, `authDomain`, `databaseURL`,
   `projectId`, and so on.
4. Copy each of those values into the matching line of `config.js` in this
   repo (between the quotes). If `databaseURL` isn't shown in the code block,
   copy it from the top of the Realtime Database page instead; it looks like
   `https://helm-walks-xxxxx-default-rtdb.firebaseio.com`.
5. Back in **Realtime Database**, open the **Rules** tab, replace everything
   with the text below, and click **Publish**:

   ```json
   {
     "rules": {
       "households": {
         "$household": {
           ".read": true,
           ".write": true
         }
       }
     }
   }
   ```

6. Save `config.js` in GitHub: open the file in the repo, click the pencil
   icon, paste the values, and click **Commit changes**. Wait a minute for
   the site to rebuild, then reload the app. The footer should change from
   "This phone only" to "Synced".

**About privacy.** These rules let anyone who knows both the link and the
household name (set in `config.js`) read and change the walks. There is no
login, on purpose, so anyone in the household or Anselm can tap without an
account. The data is only dog walks and dollar amounts, and the link is
shared privately over WhatsApp, so this is a reasonable tradeoff.

## Sharing it

Send the GitHub Pages link over WhatsApp. On an iPhone, open it in Safari, tap
the Share button, then **Add to Home Screen**. It gets the HELM icon and
opens full-screen like a real app.

## Changing things

Everything adjustable lives in `config.js`, with comments explaining each
line: price per walk, the walker's name, which days count, and the dogs and
their photos.
