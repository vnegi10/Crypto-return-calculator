import requests as rq
import json

#PUB_URL = "https://api.coingecko.com/api/v3"
PRO_URL = "https://pro-api.coingecko.com/api/v3"

# Get local Pro API key
def get_key():
    f = open("/home/vikas/Documents/CG_pro_key.json")
    key_dict = json.load(f)
    return key_dict["key"]

# Switch between demo and pro accounts
#use_demo = {"accept": "application/json"}

use_pro = {
         "accept": "application/json",
         "x-cg-pro-api-key" : get_key()
}

def get_response(endpoint, headers, params, URL):
    url = "".join((URL, endpoint))
    response = rq.get(url, headers = headers, params = params)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print(f"Failed to fetch data, check status code {response.status_code}")