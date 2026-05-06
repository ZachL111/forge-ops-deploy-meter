import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 40, slack: 40, drag: 14, confidence: 66 };
assert.equal(domainReviewScore(item), 144);
assert.equal(domainReviewLane(item), "ship");
