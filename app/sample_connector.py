import requests

"""
curl -X 'POST' \
                    'http://127.0.0.1:8080/summarize/' \
                    -H 'accept: application/json' \
                    -H 'Content-Type: application/json' \
                    -d '{
                "input": "<enter the feedback here>",
              }'
"""

json_data = {
        'input': "fcuk",
            }


def get_response(url: str, text: str) -> dict:
    """
    Returns whether the retrieval was successful, and the summary

    Args:
        url (str): the url to the service
        input (str): the text to be summarized

    Returns:
        dict: contains keys success, summary
    """
    headers = {
            "accept": "application/json",
              }
    json_data = {
                    'input': text
                }
    response = requests.post(url, json=json_data, headers=headers).json()
    return response


if __name__ == '__main__':
    text = 'This is a piece of text that should be summarized by this app'
    url = 'http://0.0.0.0:1234/summarize/' 
    print(get_response(url, text))
