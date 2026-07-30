import re

path = r'd:\FormX\FormX-master\src\data\services.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('asset: string;\n};', 'asset: string;\n  gallery?: string[];\n};')

galleries = {
    "architectural-design": '["services/architecture.jpg", "services/architecture-02.jpg"]',
    "site-infrastructure": '["services/site.jpg"]',
    "sustainable-design": '["services/sustainable.jpg", "services/sustainable-02.jpg", "services/sustainable-03.jpg"]',
    "structural-engineering": '["services/structural.jpg", "services/structural-02.jpg", "services/structural-03.jpg"]',
    "civil-engineering": '["services/civil.jpg", "services/civil-02.jpg", "services/civil-03.jpg"]',
    "mechanical-utility-engineering": '["services/mechanical.jpg", "services/mechanical-02.jpg"]',
    "hvac-engineering": '["services/hvac.jpg"]',
    "electrical-engineering": '["services/electrical.jpg"]',
    "fire-protection-engineering": '["services/fire.jpg"]',
    "project-management": '["services/pm.jpg"]'
}

for slug, gal in galleries.items():
    pattern = rf'slug:\s*"{slug}"[\s\S]*?asset:\s*"services/[^"]+"'
    def replacer(match):
        return match.group(0) + f',\n    gallery: {gal}'
    content = re.sub(pattern, replacer, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated services.ts with galleries successfully!')
