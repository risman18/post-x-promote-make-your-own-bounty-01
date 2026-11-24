# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/risman18/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/risman18/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): one post of our own on X that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached and our play code in its text. The post itself is the entry — places go by its replies plus its reposts plus its quotes at the deadline, and the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid. The page for making one is https://make.fun/sponsor/new.

## The post

Our post quotes make.fun's post and carries a photo made for it in this session: a WANTED-style bounty poster drawn from scratch with Python + Pillow (`promo.png`, drawn by `work/draw_promo_1024.py` in the build folder) — a gold star, "WANTED: BOUNTY CREATORS", and the three things a bounty needs: describe any task, set the reward, keep a share of every fee.

Its text, in our own words, opens with the bounty we would make first — a $5 reward (plus eternal glory) for whoever keeps stealing our charger — then the line the bounty asks for, and our play code:

> My first bounty: find whoever keeps stealing my charger. Reward: $5 and eternal glory.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> makefun-flint-wallaby-summit

The exact text is saved in `post-text.txt` in the build folder (182 characters, under the 280 limit). The post is made from the public account @zzleqq.

## What this repository does

`POST.json` at the root names the post's address on X. `main.ts` (Node 22, standard library only) copies `POST.json` into the output directory — that is all the program has to do. The house reads the post itself from X and scores its replies, reposts and quotes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
