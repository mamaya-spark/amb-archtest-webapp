from django.shortcuts import render
from django.http import JsonResponse

import os
import json

def index(request):
    root                = os.path.dirname(os.path.abspath(__file__))
    webpack_assets_path = os.path.join(root, 'webpack-assets.json')

    with open(webpack_assets_path) as webpack_assets_file:
        assets = json.load(webpack_assets_file)

    return render(request, 'index.html', { 'assets': assets })
