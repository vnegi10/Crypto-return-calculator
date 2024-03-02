import json
import sys
from data import get_hist_market
from helpers import get_prices_dict, create_value_dict

duration = "15" # days
target_currency = "eur"

# Define portfolio
port_curr = ["bitcoin", "ethereum"]
port_amount = [0.25, 1.5]
value_dict = None

for (curr, amount) in zip(port_curr, port_amount):
    curr_hist = get_hist_market(curr, target_currency, duration)
    curr_dict = get_prices_dict(curr_hist["prices"])

    if value_dict is None:
        value_dict = create_value_dict(curr_dict)

    for i in range(len(curr_dict)):
        daily_value = curr_dict[i]["price"] * amount
        value_dict[i]["value"] += daily_value

json.dump(value_dict, sys.stdout)