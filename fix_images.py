import re

# Read the file
with open('src/data/productsData.js', 'r') as f:
    content = f.read()

# Product slugs and their image paths
products = {
    'writer-pro': ['writer-pro-1', 'writer-pro-2', 'writer-pro-3'],
    'code-genius': ['code-genius-1', 'code-genius-2', 'code-genius-3'],
    'business-suite': ['business-suite-1', 'business-suite-2', 'business-suite-3'],
    'researcher': ['researcher-1', 'researcher-2', 'researcher-3'],
    'chatbot-builder': ['chatbot-builder-1', 'chatbot-builder-2', 'chatbot-builder-3'],
    'vision-scan': ['vision-scan-1', 'vision-scan-2', 'vision-scan-3'],
    'medvision': ['medvision-1', 'medvision-2', 'medvision-3'],
    'art-studio': ['art-studio-1', 'art-studio-2', 'art-studio-3'],
    'inspector': ['inspector-1', 'inspector-2', 'inspector-3'],
    'brand-guard': ['brand-guard-1', 'brand-guard-2', 'brand-guard-3'],
    'moviemaker': ['moviemaker-1', 'moviemaker-2', 'moviemaker-3'],
    'translate-global': ['translate-global-1', 'translate-global-2', 'translate-global-3'],
    'music-studio': ['music-studio-1', 'music-studio-2', 'music-studio-3'],
    'videoads': ['videoads-1', 'videoads-2', 'videoads-3'],
    'learning-platform': ['learning-platform-1', 'learning-platform-2', 'learning-platform-3']
}

# Add images array after mockupLines for each product
for slug, images in products.items():
    # Create images array string
    images_array = "  images: [\n"
    for img in images:
        images_array += f"    '/src/assets/products/{img}.png',\n"
    images_array = images_array.rstrip(',\n') + "\n  ],\n"
    
    # Find and replace pattern: after mockupLines, before features
    pattern = f"(slug: '{slug}'.*?mockupLines: \[.*?\],)\n(  features: \[)"
    replacement = f"\\1\n{images_array}\\2"
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write back
with open('src/data/productsData.js', 'w') as f:
    f.write(content)

print("Images added successfully!")
