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
```
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
```



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
```
Name	Role
Harib	Backend / AI Integration
Hala	Frontend / UI
Miguel	Research & Tech
Zach & Komal	Surveys & Analytics
```
