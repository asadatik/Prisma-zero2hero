# Prisma-zero2hero

# 🐘 Prisma ORM CRUD Operations with PostgreSQL (TypeScript)

This repository demonstrates **Prisma ORM CRUD** (Create, Read, Update, Delete) operations using **TypeScript** with a **PostgreSQL** database.

The following is a structured reference of all the main Prisma Client queries used, based on the `User` model.

---

## 1. Create Operations

### 1.1. Create a Single Record (`create`)

Inserts a single user into the database and returns the created object.

```typescript
const user = await prisma.user.create({
  data: {
    name: "Jhankar Mahbub",
    email: "jkr@ph.com",
    profilePhoto: "[https://programing-hero.com/level2/jkr.png](https://programing-hero.com/level2/jkr.png)"
  }
});
// Returns the created object.