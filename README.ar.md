<div align="center" dir="rtl">

# 🟨 مهارة تايتفكتور لتطبيقات جافاسكريبت المستقلة `TidyFactor JS v1.2.0`
### تطبيقات الصفحة الواحدة SPA بدون أطر عمل وبنظام ES Modules النقي ومكونات الويب Web Components

[![npm version](https://img.shields.io/npm/v/@tidyfactor/js.svg?style=for-the-badge&color=F7DF1E&logo=npm)](https://www.npmjs.com/package/@tidyfactor/js)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg?style=for-the-badge)](LICENSE)
[![Ecosystem](https://img.shields.io/badge/TidyFactor-Skills--LAB-purple.svg?style=for-the-badge)](https://github.com/TidyFactor)
[![Compatibility](https://img.shields.io/badge/Agents-Antigravity%20|%20Claude%20|%20Cursor%20|%20Codex-orange.svg?style=for-the-badge)](SKILL.md)
[![طبقة القرارات](https://img.shields.io/badge/CDL-طبقة%20القرارات%20السياقية-purple.svg?style=for-the-badge)](SKILL.md)
[![فانيلا سبا](https://img.shields.io/badge/معمارية-Zero%20Dependency%20SPA-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](SKILL.md)
[![RTL Native Arabic](https://img.shields.io/badge/RTL-Native%20Arabic-emerald.svg?style=for-the-badge)](README.ar.md)
[![Architect Score](https://img.shields.io/badge/Architect%20Score-13%2F13%20Pass%20(100%25)-green.svg?style=for-the-badge)](#-معايير-الحوكمة-والجودة)
[![AI Agents Compatible](https://img.shields.io/badge/AI%20Agents-Universal%20Compatibility-4285F4.svg?style=for-the-badge)](SKILL.md)

[ English ](README.md) • [ العربية ](README.ar.md) • [ فارسی ](README.fa.md) • [ Español ](README.es.md) • [ Português ](README.pt.md) • [ 简体中文 ](README.zh.md) • [ Deutsch ](README.de.md) • [ Français ](README.fr.md)](https://www.npmjs.com/package/@tidyfactor/js)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge)](LICENSE)
[![RTL Native Arabic](https://img.shields.io/badge/RTL-Native%20Arabic-emerald.svg?style=for-the-badge)](#-معمارية-منظومة-tidyfactor)

[⚡ الأوامر](#-أوامر-المهارة) • [🏛️ المنظومة](#-معمارية-منظومة-tidyfactor) • [📖 English Version](README.md)

<br/><br/>

<p align="center">
  <img src="assets/hero-banner.png" alt="TidyFactor JS Hero Banner" width="100%" />
</p>

</div>

---

## 🚀 التثبيت والبدء السريع

اختر طريقة التثبيت المناسبة لمشروعك:

### الخيار (أ): عبر TidyFactor CLI الرسمي (الموصى به)
التثبيت الفوري دون الحاجة لتثبيت الأداة عالمياً في بيئة عملك النشطة:
```bash
npx @tidyfactor/cli add js
```
*أو في حال كانت الأداة مثبتة لديك عالمياً (`npm i -g @tidyfactor/cli`):*
```bash
tidyfactor add js
```

### الخيار (ب): عبر معيار مهارات الوكلاء المفتوح (skills.sh)
التثبيت العالمي المتوافق مع كافة بيئات الوكلاء ومحررات الذكاء الاصطناعي (Antigravity, Cursor, Claude Code, Windsurf, Codex):
```bash
npx skills add tidyfactor/js
```

### الخيار (ج): التثبيت المباشر الفردي عبر NPM
تشغيل مثبت المهارة المستقل مباشرة مع تجاوز الذاكرة المخبأة وضمان أحدث إصدار:
```bash
npx @tidyfactor/js@latest
```

---

## 🏛️ معمارية منظومة TidyFactor

**منظومة TidyFactor** هي بيئة معمارية برمجية مفتوحة وحزم مهارات لوكلاء الذكاء الاصطناعي قائمة على الفصل التام للمسؤوليات عبر دورة حياة المنتجات:

```text
منظمة TidyFactor الرسمية (github.com/TidyFactor)
│
├── مهارات التصميم (Design Skills)
│   ├── Cinematic    ← تجربة الإبهار البصري / Experience ("Wow")     (صفحات سينمائية تفاعلية)
│   ├── Design       ← بناء النماذج الأولية / Prototype ("Build")   (محرك تصميم كودي وبديل Figma)
│   └── Styler       ← الجاهزية للإنتاج والتنسيق / Production ("Ship")  (محرك التنسيق ودعم RTL)
│
├── مهارات التطوير البرمجي (Development Skills)
│   ├── HTML         ← المواقع الثابتة وسيو المحتوى / Static & SEO   (هياكل خفيفة وسريعة)
│   ├── HTMX         ← الواجهات التفاعلية الخفيفة / Hypermedia        (تفاعلات بدون جافاسكريبت معقدة)
│   ├── JS           ← تطبيقات الصفحة الواحدة بدون أطر / Vanilla SPA  (نماذج تفاعلية بـ ES Modules)
│   ├── PHP          ← المنظومات المخدمية الحديثة / Server-Rendered  (مكونات حديثة وتطبيقات PHP 8)
│   └── Next         ← منصات الساس متعددة المستأجرين / Multi-Tenant (Next.js 16 + Postgres RLS)
│
└── مهارات النمو والتسويق (Growth Skills)
    └── Marketing    ← استراتيجيات النمو والمبيعات / Growth & SEO    (تسويق الاستجابة المباشرة)
```

### 💎 ثلاثي الواجهات الأمامية والتجربة (Frontend Triad)

```text
                TidyFactor
                    │
          ┌─────────┼─────────┐
          │         │         │
      Cinematic   Design    Styler
          │         │         │
       Experience Prototype Production
          │         │         │
       "Wow"      "Build"   "Ship"
```

### 📦 مصفوفة التكامل الشامل للمجتمع (GitHub • Skill • NPM)

| المسار البرمجي | الفئة | مستودع GitHub | مهارة الوكيل | حزمة NPM |
| :--- | :--- | :--- | :--- | :--- |
| **Cinematic** | التصميم | [`TidyFactor/Cinematic`](https://github.com/TidyFactor/Cinematic) | `tidyfactor-cinematic` | [`@tidyfactor/cinematic`](https://www.npmjs.com/package/@tidyfactor/cinematic) |
| **Design** | التصميم | [`TidyFactor/Design`](https://github.com/TidyFactor/Design) | `tidyfactor-design` | [`@tidyfactor/design`](https://www.npmjs.com/package/@tidyfactor/design) |
| **Styler** | التصميم | [`TidyFactor/Styler`](https://github.com/TidyFactor/Styler) | `tidyfactor-styler` | [`@tidyfactor/styler`](https://www.npmjs.com/package/@tidyfactor/styler) |
| **Next** | التطوير | [`TidyFactor/Next`](https://github.com/TidyFactor/Next) | `tidyfactor-next` | [`@tidyfactor/next`](https://www.npmjs.com/package/@tidyfactor/next) |
| **HTML** | التطوير | [`TidyFactor/HTML`](https://github.com/TidyFactor/HTML) | `tidyfactor-html` | [`@tidyfactor/html`](https://www.npmjs.com/package/@tidyfactor/html) |
| **HTMX** | التطوير | [`TidyFactor/HTMX`](https://github.com/TidyFactor/HTMX) | `tidyfactor-htmx` | [`@tidyfactor/htmx`](https://www.npmjs.com/package/@tidyfactor/htmx) |
| **JS** | التطوير | [`TidyFactor/JS`](https://github.com/TidyFactor/JS) | `tidyfactor-js` | [`@tidyfactor/js`](https://www.npmjs.com/package/@tidyfactor/js) |
| **PHP** | التطوير | [`TidyFactor/PHP`](https://github.com/TidyFactor/PHP) | `tidyfactor-php` | [`@tidyfactor/php`](https://www.npmjs.com/package/@tidyfactor/php) |
| **Marketing** | النمو | [`TidyFactor/Marketing`](https://github.com/TidyFactor/Marketing) | `tidyfactor-marketing` | [`@tidyfactor/marketing`](https://www.npmjs.com/package/@tidyfactor/marketing) |

---

## 👨‍💻 المنظمة والتواصل والدعم

- 🌐 **الموقع الرسمي للمنظومة:** [https://tidyfactor.com/](https://tidyfactor.com/)
- 📚 **التوثيق الرسمي المعتمد:** [https://tidyfactor.com/documentation](https://tidyfactor.com/documentation)
- 🤝 **الشريك التقني الرسمي:** [الوكالة الرقمية Alwkala](https://alwkala.com/)
- 🐙 **منظمة GitHub الرسمية:** [github.com/TidyFactor](https://github.com/TidyFactor)
- 📧 **استفسارات الأعمال والشركات:** [hello@tidyfactor.com](mailto:hello@tidyfactor.com)
- 📱 **واتساب:** [+20 101 665 6899](https://wa.me/201016656899)
- 📞 **الهاتف:** +20 101 665 6899
- 📍 **المقر:** القاهرة، جمهورية مصر العربية

---

## 📜 الترخيص والمجتمع

مرخصة تحت رخصة **Apache License 2.0**. حقوق النشر محفوظة (c) 2026 لصالح [منظومة TidyFactor](https://tidyfactor.com) و[الوكالة الرقمية Alwkala](https://alwkala.com).
