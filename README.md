  # MINDU – Pre-Exam Mastery Platform

**MINDU** is an AI-powered platform designed to help students prepare efficiently for challenging courses, especially those with high failure or anxiety rates. It focuses on **pre-exam preparation**, combining AI-guided study, professor-approved training, and gamified accountability to improve focus, understanding, and confidence.

---

## **Features**

- **AI-Guided Study Sessions**  
  Personalized learning sessions that adapt to the student’s pace, attention style, and anxiety levels.

- **Professor-Aligned Content**  
  The AI provides feedback and hints aligned with professor-approved answers and course material.

- **Focus & Flow Mode**  
  Dynamic screen lock and mindful gamified sessions to improve focus while reducing stress.

- **PDF & Course Material Support**  
  Upload and parse course PDFs; AI can generate study questions or summaries.

- **Gamification & Motivation**  
  Streaks, progress bars, and rewards to encourage consistent study habits.

- **Inclusive & Neurodiverse-Friendly Design**  
  Accessibility features, mood tracking, and adaptable learning paths.

---

## **Project Structure**

MINDU/
├─ lib/
│ ├─ firebase.ts # Firebase frontend configuration
│ ├─ firebaseAdmin.ts # Firebase Admin SDK (backend)
│ ├─ gemini.ts # Gemini AI integration
│ └─ pdf.ts # PDF parsing helper
├─ app/
│ └─ api/
│ ├─ courses/route.ts # CRUD for courses
│ ├─ materials/upload/route.ts # PDF upload & parsing
│ └─ ai/questions/route.ts # Gemini AI endpoint
├─ package.json
├─ next.config.js
└─ .gitignore




## **Getting Started**

### **Prerequisites**

- Node.js >= 18  
- npm, yarn, pnpm, or bun  
- Firebase project (optional for mock mode)  
- Gemini API key for AI features  

---

### **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```



### **Environment Variables**
Create a .env.local file in the project root:
```bash
FIREBASE_PROJECT_ID=mindu-5120a
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@mindu-5120a.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCqgAZznO84iIir\nAyblBIPzJUoboMTZ/qCtDm3HsWgPltrWsCKkQ0UCKGzuHHfKl0wT8f9toG8v27YG\nPfuV642OwHsC8LPUYtUxighqFn5h2W0M6i77w+dLl5a5GhlG+/YG1BGqZTbOWem9\nfiXDhaY8todoswjfJ33fCDyH0tUsfK2xDBD3BJQmgTyr1L7SEcqu41YmkLfKy8VU\nnW2eG19Dh4Qn1o8LyHUWxj/m/vcKeryPKewPEqOT7uUKf6P4QThTgIK2L+IbP7zV\nBe0vCsoCijikOUV5irw13tAThbSUmKD2GALXpRV/cZ+OkdrhNHj2G1rLdrOE9li/\n+zNHftNhAgMBAAECggEAAoaxEcdyd+j19WqvidceSVz1EyG3qO8v3ECJedr0Cr8W\ncPXdHYftntGQg5qiX7sMIoOEYFBvNUtREBidAKSjzUimye1dDLmGJRzBcSjyKGr7\nRaS2m35Uj/coAYgUdcvH4mQD+v1S6Y3Fe8xBrPru8plVukRkzkGciNBrbSu/gtAz\n5BtN9yAGV3MBLLvi7MmKCG9XhJuI68YxV9/i6mybTRWrUbDhumwzKXvTM/uWSjVC\nJstbqxjw2RiiEB0t2eEQBtKQQo8d3u+QbrW6d6WmnBiAudp4XgXOvtX9gtsUAJIV\nuMDIFyKfUVh0KIl0f9QgMMuGyGBRp827urdtQJrGbQKBgQDaoQemyR0+85SfrnoT\nQlPi6uAv0biVzwyK0gnmBiyhXTqO0/OgvxZg7LHRGwcqTeCoN6jp+bxc96tT2/Of\nSqQI738P2l3FgsfoWMFAouQdh3t00+NbS2phzUFIiha95TNAmgzGWLVquGelcMB2\nWnjCS9X5hUEtYu1G/JQXAHMazwKBgQDHpOzuaot2B5hYgr4nj56UMmGMHKx96g2A\nGEQ6Q22gt2EnD9AZ/An7dxFaBPiE0MIPDhN5IZFYys1pcCGDvXSbx4IWBeeeCCOh\nRBG+YFrO0ktzTtV2C85ro73dyiKLNdUVymD2Y1RCpVpBkSIPB8E+uioSeEZjkCMH\noEv2kWL6zwKBgAmB6zVDlbQBH7t5+PERd1hs4mbx9db99AutaqTIK/SwezVu3i9l\nX/HDGVCAnmUmkdh+4yeZpqlcU+UHsaaBtnR1Bc+IrX9DWrIt+el3q/fkxmekN0Tn\nGK88H9SpvKdxajMq/9c4UFtdvZQiPRxofsvkRF/ffaAdpzfpD/+YE2ldAoGAKNal\n2MdWq9g147Uq7LDGQY5kweKDrmYYSOGt4zUz0bJxXyou6YHTEOt0UzO9Gn4RlD7O\n4PJq5vzlM/JKCMbSeaNACv0+Oed0UmK4NndDXBdMc9PmenVDzmT6S8ozcsKaShDR\n8NS0wcVNRyhHDUgK0agHPyv3ShqL791sbI2k76UCgYBaSSwzM7aCksfmUgufU6a5\nuzsEiM8wpfjigg3kCZpUCC+YeHEPSB8gtFtiMFEwTBEkMhSKxpYCne9Yy934zKxO\n0O2qwRMvmhX7+p/dxa3Q7tG/rb1zvWp/WldLHjUKTO+PbEWKwaVkMTsEhLsxEo+Z\n/BBdUpXqre5VjiSre0xglg==\n-----END PRIVATE KEY-----\n",
FIREBASE_STORAGE_BUCKET=mindu-5120a.appspot.com
GEMINI_API_KEY=<gemini-api-key> #Not done yet!
```


### **Run Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser to view the app.
```


### **Testing the Backend**
note: uncomment test code in /ap/api/courses/route.ts
Courses API (mock mode):

```bash
curl http://localhost:3000/api/courses
Expected output:

[
  { "id": "c1", "name": "Calculus 101", "description": "Intro to Calculus" },
  { "id": "c2", "name": "Physics 101", "description": "Intro to Physics" }
]

```


### **Deployment**
1. We recommend Vercel for deployment:
2. Connect your GitHub repository.
3. Set environment variables in Vercel Dashboard.
4. Deploy.
Official docs: Next.js Deployment

### **Team**
Name	Role
Harib	Backend / AI Integration
Hala	Frontend / UI
Miguel	Research & Tech
Zach & Komal	Surveys & Analytics
