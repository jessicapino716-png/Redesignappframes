# HELM

A Dune-poster-styled web app for tracking Bear and Indy's
walks and what Anselm is owed at the end of the week. Works on any iPhone
from a link, no App Store.

**The name.** Anselm comes from the Germanic *ans* (divine) + *helm*
(helmet, protection). A helm is also where you steer from. Anselm at the helm.

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

1. In this GitHub repo, click **Settings** then **Pages** in the left sidebar.
2. Under **Build and deployment**, set Source to **Deploy from a branch**,
   pick the `main` branch and the `/ (root)` folder, and click **Save**.
3. Wait a minute, then reload. GitHub shows the address, something like
   `https://YOURNAME.github.io/REPO-NAME/`. That is the link you share.

Until step 3 below is done, the app runs in "this phone only" mode: it works,
but each phone keeps its own walks.

### 2. Photos

Replace `images/bear.jpg` and `images/indy.jpg` with any photos you like
(square-ish looks best; they show cropped to a circle).

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

6. Commit `config.js`. Reload the app. The footer should change from
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
