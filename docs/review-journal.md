# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 144, lane `ship`
- `stress`: `rename risk`, score 130, lane `watch`
- `edge`: `operator cost`, score 198, lane `ship`
- `recovery`: `idempotence`, score 213, lane `ship`
- `stale`: `dry-run spread`, score 165, lane `ship`

## Note

This file is intentionally plain so the fixture remains the source of truth.
