# 🧪 Insider.com QA Test Automation Project (Playwright + TypeScript)

Bu proje, [https://useinsider.com](https://useinsider.com) web sitesine yönelik UI testlerini otomatikleştirmek için **Playwright** ve **TypeScript** kullanılarak geliştirilmiştir. Testler, POM (Page Object Model) yapısına göre yapılmıştır.
---

## Proje Kapsamı

Toplam 5 test senaryosu aşağıdaki gereksinimleri kapsar:

1. Insider ana sayfasının açıldığını doğrula  
2. Company > Careers sayfasına gidilerek “Locations”, “Teams” ve “Life at Insider” bloklarının göründüğünü kontrol et  
3. QA pozisyonları için İstanbul ve Quality Assurance filtrelerini uygulayıp ilanların listelendiğini doğrula  
4. Listelenen tüm ilanların pozisyon, departman ve lokasyon bilgilerinin doğru olduğunu doğrula  
5. “View Role” butonuna tıklandığında Lever başvuru formu sayfasına yönlendirildiğini kontrol et  

---

## Gereksinimler

Aşağıdaki bileşenlerin sisteminizde kurulu olması gerekir:

- [Node.js (v18+)](https://nodejs.org/)
- npm (Node ile birlikte gelir)

---

## Kurulum

# 1. Projeyi klonla
git clone https://github.com/sadullahkisi34/case-automation.git
cd case-automation

# 2. Gerekli bağımlılıkları yükle
npm install

# 3. Playwright tarayıcılarını indir
npx playwright install
```

---

## ▶️ Testleri Çalıştırmak

Tüm testleri çalıştırmak için: npx playwright test

Belirli bir testi çalıştırmak için: npx playwright test tests/insider.spec.ts

---

## Tarayıcı Parametrizasyonu

Testler otomatik olarak hem **Chrome (chromium)** hem **Firefox** üzerinde koşacak şekilde yapılandırılmıştır.  
Konfigürasyon 'playwright.config.ts' dosyasında tanımlıdır.

Sadece belirli tarayıcıda test çalıştırmak için:

npx playwright test --project=chromium
npx playwright test --project=firefox

---

## Test Hatalarında Screenshot Alınması

Testlerden biri fail olursa:

- Otomatik olarak **ekran görüntüsü (screenshot)** alınır.
- 'playwright-report' klasöründe detaylı HTML raporu ile birlikte görüntülenebilir.

> Bu özellik 'playwright.config.ts' içinde 'screenshot: 'only-on-failure'' ile aktif hale getirilmiştir.

---

## HTML Raporu Oluşturmak

# Testleri çalıştır
npx playwright test

# Raporu aç
npx playwright show-report

'playwright-report/' klasörü içerisinde test adımları, hatalar, ekran görüntüleri ve trace dosyaları yer alır.

---

## 📁 Proje Yapısı

CASE-AUTOMATION/
│
├── .github/workflows/
│   └── playwright.yml            # GitHub Actions CI için test workflow'u
│
├── common/fixture/
│   └── common-fixtures.ts        # Ortak fixture tanımlamaları
│
├── fixtures/
│   └── ui-fixtures.ts            # UI'a özgü fixture ayarları
│
├── pages/                        # POM dosyaları
│   ├── HomePage.ts
│   ├── CareersPage.ts
│   └── QAPositionPage.ts
│
├── tests/
│   └── insider.spec.ts           # Tüm test case'ler burada
│
├── test-results/                 # Test çıktıları
├── playwright-report/            # HTML test raporları
├── playwright.config.ts          # Global test ayarları ve browser config
├── package.json                  # Script ve bağımlılıklar
└── README.md

---

## Ekstra

- Kodlar TypeScript ile yazılmıştır.
- Hatalı adımlar için ekran görüntüsü desteği vardır.
- Tüm yapı modern POM mimarisiyle geliştirilmiştir.

---

## 👤 Geliştirici

Sadullah Kişi  
📧 [GitHub](https://github.com/sadullahkisi34/)
