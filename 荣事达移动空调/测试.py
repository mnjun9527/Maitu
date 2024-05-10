import requests

cookies = {
    'Hm_lvt_0635661383aaa290c3690f94520a59f1': '1714793400',
    'Hm_lpvt_0635661383aaa290c3690f94520a59f1': '1714793478',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    # 'Cookie': 'Hm_lvt_0635661383aaa290c3690f94520a59f1=1714793400; Hm_lpvt_0635661383aaa290c3690f94520a59f1=1714793478',
    'Referer': 'https://www.liantu.com/shiliang/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
    'sec-ch-ua': '"Chromium";v="124", "Microsoft Edge";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'text': '测试',
    'el': 'L',
    'm': '10',
    'vt': 'svg',
}

response = requests.get('https://www.liantu.com/savevector.php', params=params, cookies=cookies, headers=headers)