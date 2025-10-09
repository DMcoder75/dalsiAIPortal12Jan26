#!/bin/bash

# Add images to each product
sed -i "/codeGeniusData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/code-genius-1.png',\n    '\/src\/assets\/products\/code-genius-2.png',\n    '\/src\/assets\/products\/code-genius-3.png'\n  ],/" src/data/productsData.js

sed -i "/businessSuiteData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/business-suite-1.png',\n    '\/src\/assets\/products\/business-suite-2.png',\n    '\/src\/assets\/products\/business-suite-3.png'\n  ],/" src/data/productsData.js

sed -i "/researcherData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/researcher-1.png',\n    '\/src\/assets\/products\/researcher-2.png',\n    '\/src\/assets\/products\/researcher-3.png'\n  ],/" src/data/productsData.js

sed -i "/chatbotBuilderData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/chatbot-builder-1.png',\n    '\/src\/assets\/products\/chatbot-builder-2.png',\n    '\/src\/assets\/products\/chatbot-builder-3.png'\n  ],/" src/data/productsData.js

sed -i "/visionScanData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/vision-scan-1.png',\n    '\/src\/assets\/products\/vision-scan-2.png',\n    '\/src\/assets\/products\/vision-scan-3.png'\n  ],/" src/data/productsData.js

sed -i "/medVisionData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/medvision-1.png',\n    '\/src\/assets\/products\/medvision-2.png',\n    '\/src\/assets\/products\/medvision-3.png'\n  ],/" src/data/productsData.js

sed -i "/artStudioData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/art-studio-1.png',\n    '\/src\/assets\/products\/art-studio-2.png',\n    '\/src\/assets\/products\/art-studio-3.png'\n  ],/" src/data/productsData.js

sed -i "/inspectorData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/inspector-1.png',\n    '\/src\/assets\/products\/inspector-2.png',\n    '\/src\/assets\/products\/inspector-3.png'\n  ],/" src/data/productsData.js

sed -i "/brandGuardData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/brand-guard-1.png',\n    '\/src\/assets\/products\/brand-guard-2.png',\n    '\/src\/assets\/products\/brand-guard-3.png'\n  ],/" src/data/productsData.js

sed -i "/movieMakerData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/moviemaker-1.png',\n    '\/src\/assets\/products\/moviemaker-2.png',\n    '\/src\/assets\/products\/moviemaker-3.png'\n  ],/" src/data/productsData.js

sed -i "/translateGlobalData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/translate-global-1.png',\n    '\/src\/assets\/products\/translate-global-2.png',\n    '\/src\/assets\/products\/translate-global-3.png'\n  ],/" src/data/productsData.js

sed -i "/musicStudioData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/music-studio-1.png',\n    '\/src\/assets\/products\/music-studio-2.png',\n    '\/src\/assets\/products\/music-studio-3.png'\n  ],/" src/data/productsData.js

sed -i "/videoAdsData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/videoads-1.png',\n    '\/src\/assets\/products\/videoads-2.png',\n    '\/src\/assets\/products\/videoads-3.png'\n  ],/" src/data/productsData.js

sed -i "/learningPlatformData = {/,/mockupLines:/ s/mockupLines: \[.*\],/&\n  images: [\n    '\/src\/assets\/products\/learning-platform-1.png',\n    '\/src\/assets\/products\/learning-platform-2.png',\n    '\/src\/assets\/products\/learning-platform-3.png'\n  ],/" src/data/productsData.js

echo "Images added to all products!"
