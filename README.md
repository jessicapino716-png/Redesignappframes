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
with color and records the time. Phones stay in sync through the Share
button (see step 3). The week sits underneath as a strip; tap any
day to jump to it. The ring at the bottom fills as walks are logged and shows
dollars owed ($5 per walk). When you pay, tap **Mark week paid**. Any earlier
week never marked paid shows up as a carry-over so nothing gets lost.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app. You should never need to touch it. |
| `config.js` | Names, price per walk, days, and the walk history. **This is the one file you edit.** |
| `images/bear.jpg`, `images/indy.jpg` | The dogs' portraits, shown in the circles at the top. |

## Setup (about five minutes, no coding)

### 1. Put it on the web (GitHub Pages, two settings)

GitHub hosts the page for free, but only for **public** repos on a free
account. This repo is private right now, so:

1. In the repo click **Settings**. Scroll to the bottom ("Danger Zone"),
   click **Change visibility**, choose **Public**, and confirm. Nothing in
   here is secret: it's the app's design and a list of dog walks.
2. Still in **Settings**, click **Pages** in the left sidebar. Under
   **Build and deployment**, set Source to **Deploy from a branch**, pick
   `main` and `/ (root)`, and click **Save**.

A minute later the app is live at:

    https://jessicapino716-png.github.io/Redesignappframes/

That is the link to share. Every later change (photos, settings) goes live on
its own within a minute or two.


### 2. Photos (already done, but swappable)

The two circles at the top show hand-drawn retro portraits of Bear and Indy,
stored as `images/bear.jpg` and `images/indy.jpg`.

To use real photos instead: on the repo page open the `images` folder, click
**Add file** then **Upload files**, and drop in two photos named exactly
`bear.jpg` and `indy.jpg` so they replace the drawings. Click
**Commit changes**. Square-ish photos look best; they show cropped to a
circle. The site updates itself in about a minute.

### 3. Keeping phones in sync (no database, no accounts)

There is no database on purpose. Each phone keeps its own copy of the walks,
and the **Share week** button in the ledger sends a WhatsApp message like:

    HELM · Week 2 · Sep 7–11
    9 of 10 walks · $45 owed to Anselm

    Open to sync your phone:
    https://jessicapino716-png.github.io/Redesignappframes/#w=3a.3p.7a465...

Whoever opens that link gets every walk in it added to their phone. Taps are
merged, never overwritten, so if two people logged different walks before
syncing, both sets survive. The link is small: a whole month of walks fits in
a few hundred characters.

The routine: Anselm taps walks on his phone as he does them. Whenever he
shares the week (Friday works), you open the link and your phone matches his.
If you or your husband log a walk, share back the same way.

**One limit.** Undoing a walk does not travel through a link (a link can only
add). If a walk was tapped by mistake, un-tap it on every phone that has it,
or just live with it and settle up by hand that week.

**About privacy.** Anyone who has the link can see and edit the walks on
their own phone. The link is shared privately over WhatsApp and the data is
dog walks and dollar amounts, so that's fine.

## Sharing it

Send the GitHub Pages link over WhatsApp. On an iPhone, open it in Safari, tap
the Share button, then **Add to Home Screen**. It gets the HELM icon and
opens full-screen like a real app.

## Changing things

Everything adjustable lives in `config.js`, with comments explaining each
line: price per walk, the walker's name, which days count, the dogs and their
photos, and the walk history from before the app existed.
