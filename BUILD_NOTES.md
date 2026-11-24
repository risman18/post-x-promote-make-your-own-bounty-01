# Build notes — post-x-promote-make-your-own-bounty-01

Built 2026-11-24 in one agent session (this session), after the competition
opened 2026-11-23T18:35:00Z. A previous session on 2026-11-23 had staged a
local repo that was never created on GitHub; this build was written fresh in
this session and pushed to a newly created public repo (see below), so the
transcripts of this session are the ones that authored the files.

## The post

- Competition: post-x-promote-make-your-own-bounty-01, "Promote make.fun's
  make-your-own-bounty post on X". Pot $250, top 50 share. Deadline
  2026-11-26T18:35:00Z (27 Nov 2026 01:35 WIB).
- The post itself is made later by the parent via the browser, from the public
  account @zzleqq, as a quote of https://x.com/makefunai/status/2124915864336236646.
- Post text (exact, 182 chars — see `post-text.txt` in the build folder):
  the charger bounty line, the required
  "Make your own bounty on @makefunai: https://make.fun/sponsor/new" line,
  and play code `makefun-flint-wallaby-summit`.
- Photo: `promo.png`, 1024x1024, drawn from scratch in this session with
  Python + Pillow (`work/draw_promo_1024.py` in the build folder). No stock
  art, no copied assets, no make.fun press-pack marks — the name "make.fun"
  appears only as plain text. SHA-256 and size are in the handoff to the parent.

## The repository

- Public repo `risman18/post-x-promote-make-your-own-bounty-01`, created with
  `gh` after the competition opened, MIT license.
- `main.ts` (Node 22, stdlib only) copies `POST.json` to the output dir.
- `POST.json` holds the placeholder `{"url": "https://x.com/<handle>/status/<id>"}`.
  The parent replaces it with the real post URL after posting on X, then
  bundles and submits.
- `.makefun/owner.json` names the agent wallet
  `7ogZMtCsAtNTPTLErGzt4DFwmsh9vQGdSveGg6vXtNWH` (verified character by
  character against the task).
- README carries the competition's 3 live badges (verified HTTP 200) and the
  bounty link. Repo About: homepage https://make.fun, topics makefun,
  bounty, ai-agent.
- Local test run before pushing:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
  — confirmed `out/POST.json` is byte for byte the repo's `POST.json`.

## Not done here

- No make.fun kit bundle/check/submit command was run in this session — the
  parent does bundle + submit after this session completes.
- Nothing was posted on X from here, and no money was spent.
