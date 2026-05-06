# Forge Ops Deploy Meter Walkthrough

This note is the quickest way to read the extra review model in `forge-ops-deploy-meter`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 144 | ship |
| stress | rename risk | 130 | watch |
| edge | operator cost | 198 | ship |
| recovery | idempotence | 213 | ship |
| stale | dry-run spread | 165 | ship |

Start with `recovery` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `idempotence` against `rename risk`, not the raw score alone.
