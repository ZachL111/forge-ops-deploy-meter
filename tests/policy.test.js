import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 65,
    "capacity": 93,
    "latency": 19,
    "risk": 23,
    "weight": 7,
    "score": 47,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 73,
    "capacity": 92,
    "latency": 19,
    "risk": 9,
    "weight": 11,
    "score": 184,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 81,
    "capacity": 73,
    "latency": 26,
    "risk": 5,
    "weight": 10,
    "score": 182,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
