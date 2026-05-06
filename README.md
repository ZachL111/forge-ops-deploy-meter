# forge-ops-deploy-meter

`forge-ops-deploy-meter` is a JavaScript project in automation. Its focus is to develop a JavaScript command-oriented project for deploy scenarios with append-only fixtures, checkpoint recovery checks, and single-node deterministic mode.

## Purpose

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Forge Ops Deploy Meter Review Notes

The first comparison I would make is `idempotence` against `rename risk` because it shows where the rule is most opinionated.

## What Is Covered

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/forge-ops-deploy-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `idempotence` and `rename risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Notes

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The JavaScript addition stays small enough to inspect in one sitting.

## Command

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Audit Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Limits

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
