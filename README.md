![image alt](https://github.com/user-attachments/assets/2ed7166f-09ea-4ca6-81c1-3eaa946290b3)
# 🩺 Doctor Appointment Booking System

A full-stack web application for managing doctor appointments, availability, and scheduling using **Prisma ORM**, **PostgreSQL**, and **Next.js**.

---

## ✨ Features

- Doctor registration with verification system
- Patients can view doctor profiles and book appointments
- Doctors can define their **availability time slots**
- Dynamic generation of available 30-minute appointment slots
- Prevention of overlapping appointments
- Credit-based transaction system for bookings
- Admin-managed payouts to doctors

---

## 🧱 Tech Stack

- **Backend:** Node.js, Prisma ORM, PostgreSQL
- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Auth:** Clerk (or your chosen auth provider)
- **Date Utilities:** `date-fns`

---

## 🗃️ Database Models

### User
- `id`, `email`, `role` (`PATIENT`, `DOCTOR`, `ADMIN`)
- `verificationStatus`: `PENDING | VERIFIED | REJECTED`
- Doctor-specific fields: `specialty`, `experience`, `description`

### Availability
- `doctorId`, `startTime`, `endTime`, `status`: `AVAILABLE | BOOKED | BLOCKED`

### Appointment
- `patientId`, `doctorId`, `startTime`, `endTime`, `status`: `SCHEDULED | COMPLETED | CANCELLED`

### CreditTransaction
- Handles appointment charges, credit purchases, admin adjustments

### Payout
- For doctors to withdraw earned credits

---

## 🔁 Available Time Slot Logic

Implemented in:
```ts
export async function getAvailableTimeSlots(doctorId)
