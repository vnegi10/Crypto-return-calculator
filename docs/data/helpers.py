import datetime

def get_prices_dict(prices):

    prices_dict = []

    for i in range(len(prices)):
        # Convert to seconds
        s = prices[i][0] / 1000
        prices_dict.append({'time' : datetime.datetime.fromtimestamp(s).strftime('%Y-%m-%d'),
                            'price' : prices[i][1]})
        
    return prices_dict

def create_value_dict(curr_dict):

    value_dict = []

    for i in range(len(curr_dict)):
        value_dict.append({'time' : curr_dict[i]["time"],
                           'value' : 0.0})

    return value_dict