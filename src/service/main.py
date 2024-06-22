import requests
from bs4 import BeautifulSoup

url = "https://pnld.moderna.com.br/categoria-literatura/ensinomedio/#"

response = requests.get(url)

if response.status_code == 200:

    soup = BeautifulSoup(response.text, 'html.parser')

    titles = soup.find_all('h3')
    for title in titles:
        print(str(title).split(">")[1].split("<")[0])

    images = soup.find_all('img', class_="attachment-colecao-capa")
    for img in images:
        srcset = img.get('srcset')
        if srcset and '1024' in srcset:
            print(srcset)
