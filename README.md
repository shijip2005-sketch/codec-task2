# Examora — Online Examination Platform

A full-stack JavaScript starter with separate `frontend/` and `backend/` folders.

## Requirements
- Node.js 18+
- MongoDB running locally, or a MongoDB Atlas connection string

## Run backend
```bash
cd backend
copy .env.example .env
npm install
npm run seed
npm run dev
```
Backend: http://localhost:5000

Seed accounts:
- Admin: `admin@examora.dev` / `Admin@123`
- Student: `student@examora.dev` / `Student@123`

Change these demo passwords before using this outside a local demo.

## Run frontend
Open a second terminal:
```bash
cd frontend
npm run dev
```
Open the Vite URL shown in terminal (usually http://localhost:5173).

## Included
- Responsive lavender/pink Examora interface
- SPA-style page navigation using History API
- Student registration/login and admin/student roles
- Exam list, instructions, timed MCQ flow, auto-submit, result/history
- Admin exam/question management and student overview
- Dashboard analytics with Chart.js
- REST API, JWT auth, password hashing, MongoDB models, validation and seed data

## Notes
This is a learning/demo project, not a production proctoring or payment system. Browser tab warnings are only a basic client-side notice, not secure proctoring. Keep secrets in `.env`; never commit it.
