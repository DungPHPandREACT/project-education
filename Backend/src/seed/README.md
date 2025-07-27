# Seed Data Documentation

## Overview
This folder contains seed data for the education platform database. The seed data includes sample users, courses, lessons, quizzes, questions, reviews, discussions, schedules, and user quiz results.

## Data Structure & Relationships

### 1. Users (`users.json`)
- Contains sample users with different roles: `student`, `teacher`, `admin`
- Each user has: email, password (hashed), fullName, role, courses, avatar
- **Relationships**: 
  - Many-to-Many with Courses (enrolled courses)
  - One-to-Many with Reviews, Discussions, Schedules

### 2. Categories (`categories.json`)
- Course categories like "Lập trình Web", "Lập trình Mobile", "Data Science", etc.
- **Relationships**: 
  - One-to-Many with Courses

### 3. Courses (`courses.json`)
- Sample programming courses with Vietnamese titles
- Each course has: title, description, instructorId, lessons, resources, reviews, quizzes, category, users
- **Relationships**:
  - Many-to-One with Categories
  - Many-to-One with Users (instructor)
  - One-to-Many with Lessons, Reviews, Quizzes
  - Many-to-Many with Users (enrolled students)

### 4. Lessons (`lessons.json`)
- Individual lessons belonging to courses
- Each lesson has: title, content, courseId, resources
- **Relationships**:
  - Many-to-One with Courses

### 5. Quizzes (`quizzes.json`)
- Quizzes for testing student knowledge
- Each quiz has: title, description, courseId, questions, duration, level, category
- **Relationships**:
  - Many-to-One with Courses
  - One-to-Many with Questions
  - Many-to-Many with Users (through UsersQuizzes)

### 6. Questions (`questions.json`)
- Individual questions for quizzes
- Each question has: questionText, answers, quizId, questionType
- Supports both single_choice and multiple_choice questions
- **Relationships**:
  - Many-to-One with Quizzes

### 7. Reviews (`reviews.json`)
- Course reviews and ratings from students
- Each review has: courseId, userId, rating (1-5), comment
- **Relationships**:
  - Many-to-One with Courses
  - Many-to-One with Users

### 8. Discussions (`discussions.json`)
- Course discussion forums
- Each discussion has: courseId, userId, question, answers, isClose
- **Relationships**:
  - Many-to-One with Courses
  - Many-to-One with Users (question author)
  - One-to-Many with Users (answer authors)

### 9. Schedules (`schedules.json`)
- Meeting/session schedules
- Each schedule has: userCreated, usersJoin, type, link, timeStart, timeEnd
- Types include: online_meeting, workshop, consultation, group_study, etc.
- **Relationships**:
  - Many-to-One with Users (creator)
  - Many-to-Many with Users (participants)

### 10. UsersQuizzes (`usersquizzes.json`)
- Junction table for user quiz attempts and results
- Each record has: userId, quizId, answers, score, feedback
- **Relationships**:
  - Many-to-One with Users
  - Many-to-One with Quizzes

## How to Use

### 1. Seed the Database
```bash
npm run seed
```

### 2. Manual Import (if needed)
You can also import individual JSON files using MongoDB tools or your preferred database client.

## Data Consistency

### ID References
All IDs are UUIDs and maintain referential integrity:
- Course IDs in lessons match course IDs in courses.json
- User IDs in reviews match user IDs in users.json
- Quiz IDs in questions match quiz IDs in quizzes.json
- Category IDs in courses match category IDs in categories.json

### Sample Data Quality
- **Users**: 12+ users with different roles
- **Categories**: 6 main programming categories
- **Courses**: 15+ courses covering various programming topics
- **Lessons**: 40+ lessons distributed across courses
- **Quizzes**: 10+ quizzes with varying difficulty levels
- **Questions**: 50+ questions with both single and multiple choice
- **Reviews**: 11+ authentic-looking reviews with ratings
- **Discussions**: 10+ realistic discussion threads
- **Schedules**: 10+ various meeting types and schedules
- **UsersQuizzes**: 12+ quiz attempt records with scores

## Notes

### Password Security
- All user passwords in seed data are set to "hashed_password"
- In production, these should be properly hashed using bcrypt

### Timestamps
- All timestamps use ISO 8601 format
- CreatedAt and updatedAt fields are included where applicable

### Localization
- All content is in Vietnamese to match the target audience
- Course titles, descriptions, and comments are localized

### Data Relationships
- Foreign key relationships are maintained through ObjectId references
- Many-to-many relationships use arrays of ObjectIds
- Junction tables (like UsersQuizzes) properly link related entities

## Troubleshooting

### Common Issues
1. **Duplicate Key Errors**: Clear the database before seeding
2. **Reference Errors**: Ensure all referenced IDs exist in their respective collections
3. **Schema Validation**: Check that all required fields are present

### Validation
The seed script includes basic validation and will report any issues during the seeding process.