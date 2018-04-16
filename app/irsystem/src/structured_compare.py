from __future__ import division
import json
import os
import sys

DATA_FILE = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "data", "final_dataset.json")
# This is here in case all the weights are 0, we don't want to just fail
WEIGHT_EPSILON = .00001
CONFIDENCE_THRESHOLD = 0.1
doggo_data = None


def get_doggo_data():
    with open(DATA_FILE, 'r') as f:
        global doggo_data
        doggo_data = {k: v["structured"] for k, v in json.load(f).iteritems()}


get_doggo_data()


def _scale_val(val_name):
    mi = sys.maxint
    ma = 0
    for dog, info in doggo_data.items():
        val = info[val_name]
        if val is not None:
            mi = min(val, mi)
            ma = max(val, ma)

    for dog in doggo_data:
        if doggo_data[dog][val_name] is not None:
            doggo_data[dog][val_name] = (doggo_data[dog][val_name] - mi) / (ma - mi)


_scale_val("weight")
_scale_val("lifespan")
_scale_val("food_monthly_cost")
_scale_val("height")
_scale_val("coat_length")
_scale_val("activity_minutes")
_scale_val("walk_miles")


def _score(preferences, dog):
    total_weight = sum(v["importance"] + WEIGHT_EPSILON for k, v in preferences.items() if doggo_data[dog][k] is not None)
    actual_weight = sum(v["importance"] + WEIGHT_EPSILON for k, v in preferences.items())
    score = 0
    contributions = {}
    for p in preferences:
        if doggo_data[dog][p] is not None:
            importance = (preferences[p]["importance"] + WEIGHT_EPSILON) / total_weight
            similarity = 1 - abs(preferences[p]["value"] - doggo_data[dog][p])
            contributions[p] = (similarity * importance) / total_weight
            score += similarity * importance
        else:
            contributions[p] = 0

    confidence = total_weight / actual_weight
    if confidence < CONFIDENCE_THRESHOLD:
        score = 0
    return {"score": score, "confidence": confidence, "contributions": contributions}


def structured_score(preferences):
    return {d: _score(preferences, d) for d in doggo_data}


if __name__ == "__main__":
    print doggo_data['affenpinscher']
