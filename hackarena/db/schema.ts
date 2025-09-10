import {
  pgTable,
  text,
  timestamp,
  integer,
  boolean,
  decimal,
  uuid,
  varchar,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  avatar: text("avatar"),
  githubLink: text("github_link"),
  twitterLink: text("twitter_link"),
  telegramHandle: varchar("telegram_handle", { length: 100 }),
  wechatHandle: varchar("wechat_handle", { length: 100 }),
  walletAddress: varchar("wallet_address", { length: 42 }),
  role: varchar("role", { length: 20 }).notNull().default("participant"), // participant, judge, admin
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Hackathons table
export const hackathons = pgTable("hackathons", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  shortDescription: text("short_description").notNull(),
  fullDescription: text("full_description"),
  logo: text("logo"),
  bannerImage: text("banner_image"),
  totalPrize: decimal("total_prize", { precision: 10, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 10 }).notNull().default("USD"),

  // Dates
  registrationStart: timestamp("registration_start").notNull(),
  registrationEnd: timestamp("registration_end").notNull(),
  hackathonStart: timestamp("hackathon_start").notNull(),
  hackathonEnd: timestamp("hackathon_end").notNull(),
  votingStart: timestamp("voting_start"),
  votingEnd: timestamp("voting_end"),

  // Settings
  techStack: jsonb("tech_stack").$type<string[]>().default([]),
  experienceLevel: varchar("experience_level", { length: 50 })
    .notNull()
    .default("all"),
  location: text("location"),
  socialLinks: jsonb("social_links")
    .$type<Record<string, string>>()
    .default({}),
  maxParticipants: integer("max_participants"),

  // Status
  status: varchar("status", { length: 20 }).notNull().default("draft"), // draft, published, active, ended
  isPublished: boolean("is_published").notNull().default(false),

  // Metadata
  organizerId: uuid("organizer_id")
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Prize cohorts within hackathons
export const prizeCohorts = pgTable("prize_cohorts", {
  id: uuid("id").primaryKey().defaultRandom(),
  hackathonId: uuid("hackathon_id")
    .references(() => hackathons.id, { onDelete: "cascade" })
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  numberOfWinners: integer("number_of_winners").notNull().default(1),
  prizeAmount: decimal("prize_amount", { precision: 10, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 10 }).notNull().default("USD"),

  // Judging settings
  judgingMode: varchar("judging_mode", { length: 20 })
    .notNull()
    .default("judges_only"), // judges_only, public_voting
  votingMode: varchar("voting_mode", { length: 20 })
    .notNull()
    .default("project_scoring"), // project_scoring, ranked_choice
  maxVotesPerJudge: integer("max_votes_per_judge"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Evaluation criteria for prize cohorts
export const evaluationCriteria = pgTable("evaluation_criteria", {
  id: uuid("id").primaryKey().defaultRandom(),
  prizeCohortId: uuid("prize_cohort_id")
    .references(() => prizeCohorts.id, { onDelete: "cascade" })
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  maxPoints: integer("max_points").notNull().default(100),
  order: integer("order").notNull().default(0),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Projects created by users
export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  shortDescription: text("short_description").notNull(),
  fullDescription: text("full_description"),
  logo: text("logo"),

  // Links and media
  githubLink: text("github_link"),
  demoVideoUrl: text("demo_video_url"),
  pitchVideoUrl: text("pitch_video_url"),
  liveUrl: text("live_url"),

  // Project details
  techStack: jsonb("tech_stack").$type<string[]>().default([]),
  sector: jsonb("sector").$type<string[]>().default([]),
  progressDuringHackathon: text("progress_during_hackathon"),
  fundraisingStatus: text("fundraising_status"),

  // Team
  teamLeaderId: uuid("team_leader_id")
    .references(() => users.id)
    .notNull(),
  teamMembers: jsonb("team_members").$type<string[]>().default([]),

  // Status
  status: varchar("status", { length: 20 }).notNull().default("draft"), // draft, published
  isPublished: boolean("is_published").notNull().default(false),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Project submissions to hackathons
export const submissions = pgTable("submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id")
    .references(() => projects.id, { onDelete: "cascade" })
    .notNull(),
  hackathonId: uuid("hackathon_id")
    .references(() => hackathons.id, { onDelete: "cascade" })
    .notNull(),

  // Submission details
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  status: varchar("status", { length: 20 }).notNull().default("submitted"), // submitted, under_review, winner, rejected

  // Metadata at time of submission
  submissionData: jsonb("submission_data")
    .$type<Record<string, any>>()
    .default({}),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Judge assignments to hackathons
export const judgeAssignments = pgTable("judge_assignments", {
  id: uuid("id").primaryKey().defaultRandom(),
  judgeId: uuid("judge_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  hackathonId: uuid("hackathon_id")
    .references(() => hackathons.id, { onDelete: "cascade" })
    .notNull(),

  // Assignment details
  assignedAt: timestamp("assigned_at").defaultNow().notNull(),
  status: varchar("status", { length: 20 }).notNull().default("pending"), // pending, accepted, declined
  inviteToken: varchar("invite_token", { length: 255 }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Judge evaluations/scores for projects
export const evaluations = pgTable("evaluations", {
  id: uuid("id").primaryKey().defaultRandom(),
  judgeId: uuid("judge_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  submissionId: uuid("submission_id")
    .references(() => submissions.id, { onDelete: "cascade" })
    .notNull(),
  prizeCohortId: uuid("prize_cohort_id")
    .references(() => prizeCohorts.id, { onDelete: "cascade" })
    .notNull(),
  criteriaId: uuid("criteria_id")
    .references(() => evaluationCriteria.id, { onDelete: "cascade" })
    .notNull(),

  // Score details
  score: integer("score").notNull(),
  maxScore: integer("max_score").notNull(),
  comments: text("comments"),

  // Status
  isComplete: boolean("is_complete").notNull().default(false),
  submittedAt: timestamp("submitted_at"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Hackathon schedule/timeline events
export const scheduleEvents = pgTable("schedule_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  hackathonId: uuid("hackathon_id")
    .references(() => hackathons.id, { onDelete: "cascade" })
    .notNull(),

  // Event details
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time"),

  // Speaker information (optional)
  includeSpeaker: boolean("include_speaker").notNull().default(false),
  speakerName: varchar("speaker_name", { length: 255 }),
  speakerPicture: text("speaker_picture"),
  speakerXHandle: varchar("speaker_x_handle", { length: 100 }),
  speakerXLink: text("speaker_x_link"),
  speakerRealName: varchar("speaker_real_name", { length: 255 }),
  speakerWorkplace: text("speaker_workplace"),

  // Metadata
  order: integer("order").notNull().default(0),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  organizedHackathons: many(hackathons),
  projects: many(projects),
  judgeAssignments: many(judgeAssignments),
  evaluations: many(evaluations),
}));

export const hackathonsRelations = relations(hackathons, ({ one, many }) => ({
  organizer: one(users, {
    fields: [hackathons.organizerId],
    references: [users.id],
  }),
  prizeCohorts: many(prizeCohorts),
  submissions: many(submissions),
  judgeAssignments: many(judgeAssignments),
  scheduleEvents: many(scheduleEvents),
}));

export const prizeCohortsRelations = relations(
  prizeCohorts,
  ({ one, many }) => ({
    hackathon: one(hackathons, {
      fields: [prizeCohorts.hackathonId],
      references: [hackathons.id],
    }),
    evaluationCriteria: many(evaluationCriteria),
    evaluations: many(evaluations),
  })
);

export const evaluationCriteriaRelations = relations(
  evaluationCriteria,
  ({ one, many }) => ({
    prizeCohort: one(prizeCohorts, {
      fields: [evaluationCriteria.prizeCohortId],
      references: [prizeCohorts.id],
    }),
    evaluations: many(evaluations),
  })
);

export const projectsRelations = relations(projects, ({ one, many }) => ({
  teamLeader: one(users, {
    fields: [projects.teamLeaderId],
    references: [users.id],
  }),
  submissions: many(submissions),
}));

export const submissionsRelations = relations(submissions, ({ one, many }) => ({
  project: one(projects, {
    fields: [submissions.projectId],
    references: [projects.id],
  }),
  hackathon: one(hackathons, {
    fields: [submissions.hackathonId],
    references: [hackathons.id],
  }),
  evaluations: many(evaluations),
}));

export const judgeAssignmentsRelations = relations(
  judgeAssignments,
  ({ one }) => ({
    judge: one(users, {
      fields: [judgeAssignments.judgeId],
      references: [users.id],
    }),
    hackathon: one(hackathons, {
      fields: [judgeAssignments.hackathonId],
      references: [hackathons.id],
    }),
  })
);

export const evaluationsRelations = relations(evaluations, ({ one }) => ({
  judge: one(users, {
    fields: [evaluations.judgeId],
    references: [users.id],
  }),
  submission: one(submissions, {
    fields: [evaluations.submissionId],
    references: [submissions.id],
  }),
  prizeCohort: one(prizeCohorts, {
    fields: [evaluations.prizeCohortId],
    references: [prizeCohorts.id],
  }),
  criteria: one(evaluationCriteria, {
    fields: [evaluations.criteriaId],
    references: [evaluationCriteria.id],
  }),
}));

export const scheduleEventsRelations = relations(scheduleEvents, ({ one }) => ({
  hackathon: one(hackathons, {
    fields: [scheduleEvents.hackathonId],
    references: [hackathons.id],
  }),
}));
