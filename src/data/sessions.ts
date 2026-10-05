import type { CurriculumSession } from "@eladhollander/ui-kit";

/**
 * The 12 sessions of the NOVEMBER 2026 cohort.
 * This is the ONLY file to edit when the schedule changes.
 *
 * Note: this cohort's curriculum breakdown (topics per session, tags, and the
 * Eilat/Zoom split) has not been published yet — only meeting numbers, dates
 * and times. The shared CurriculumTable drops the location and detail columns
 * automatically when no session supplies them, so nothing here is invented.
 */

/** Every session in this cohort is a Wednesday, 17:00-21:00. */
const DAYTIME = "יום רביעי · 17:00-21:00";

export type SessionRow = CurriculumSession;

export const sessions: SessionRow[] = [
  {
    num: "1",
    date: "18 בנובמבר 2026",
    daytime: DAYTIME,
    topic: "מפגש ראשון - יוזמים סטארטאפ אילת",
  },
  {
    num: "2",
    date: "25 בנובמבר 2026",
    daytime: DAYTIME,
    topic: "מפגש שני - יוזמים סטארטאפ אילת",
  },
  {
    num: "3",
    date: "2 בדצמבר 2026",
    daytime: DAYTIME,
    topic: "מפגש 3 - יוזמים סטארטאפ אילת",
  },
  {
    num: "4",
    date: "16 בדצמבר 2026",
    daytime: DAYTIME,
    topic: "מפגש 4 - יוזמים סטארטאפ אילת",
  },
  {
    num: "5",
    date: "30 בדצמבר 2026",
    daytime: DAYTIME,
    topic: "מפגש 5 - יוזמים סטארטאפ אילת",
  },
  {
    num: "6",
    date: "6 בינואר 2027",
    daytime: DAYTIME,
    topic: "מפגש 6 - יוזמים סטארטאפ אילת",
  },
  {
    num: "7",
    date: "13 בינואר 2027",
    daytime: DAYTIME,
    topic: "מפגש 7 - יוזמים סטארטאפ אילת",
  },
  {
    num: "8",
    date: "20 בינואר 2027",
    daytime: DAYTIME,
    topic: "מפגש 8 - יוזמים סטארטאפ אילת",
  },
  {
    num: "9",
    date: "27 בינואר 2027",
    daytime: DAYTIME,
    topic: "מפגש 9 - יוזמים סטארטאפ אילת",
  },
  {
    num: "10",
    date: "3 בפברואר 2027",
    daytime: DAYTIME,
    topic: "מפגש 10 - יוזמים סטארטאפ אילת",
  },
  {
    num: "11",
    date: "17 בפברואר 2027",
    daytime: DAYTIME,
    topic: "מפגש 11 - יוזמים סטארטאפ אילת",
  },
  {
    num: "12",
    date: "24 בפברואר 2027",
    daytime: DAYTIME,
    topic: "מפגש 12 - יוזמים סטארטאפ אילת",
  },
];
