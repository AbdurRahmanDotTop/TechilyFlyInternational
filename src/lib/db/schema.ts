import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  hashedPassword: text('hashed_password'),
  role: text('role').notNull().default('CANDIDATE'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at').notNull(),
});

export const employers = sqliteTable('employers', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  companyName: text('company_name').notNull(),
  verificationStatus: text('verification_status').notNull().default('UNVERIFIED'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const jobs = sqliteTable('jobs', {
  id: text('id').primaryKey(),
  employerId: text('employer_id')
    .notNull()
    .references(() => employers.id),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description').notNull(),
  status: text('status').notNull().default('DRAFT'),
  acceptingApplications: integer('accepting_applications', { mode: 'boolean' }).notNull().default(false),
  publishedAt: text('published_at'),
  expiryAt: text('expiry_at').notNull(),
  expiryTimezone: text('expiry_timezone').notNull().default('UTC'),
  closedAt: text('closed_at'),
  expiredAt: text('expired_at'),
  archivedAt: text('archived_at'),
  country: text('country'),
  city: text('city'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const candidateProfiles = sqliteTable('candidate_profiles', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  fullName: text('full_name').notNull(),
  countryOfResidence: text('country_of_residence'),
  targetCountry: text('target_country'),
  targetTitle: text('target_title'),
  primarySkills: text('primary_skills'),
  experienceLevel: text('experience_level'),
  workAuthorization: text('work_authorization'),
  resumeStorageType: text('resume_storage_type').default('none'), // 'none', 'base64', 'url'
  resumeData: text('resume_data'), // Can hold base64 string for MVP free storage
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const applications = sqliteTable('applications', {
  id: text('id').primaryKey(),
  jobId: text('job_id')
    .notNull()
    .references(() => jobs.id, { onDelete: 'cascade' }),
  candidateId: text('candidate_id')
    .notNull()
    .references(() => candidateProfiles.id, { onDelete: 'cascade' }),
  status: text('status').notNull().default('APPLIED'), // APPLIED, SHORTLISTED, REJECTED, etc.
  coverLetter: text('cover_letter'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});
