import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function logEvent(actor, eventType, summary, data = {}, taskId = null) {
  try {
    const log = await prisma.activityLog.create({
      data: {
        actor,
        eventType,
        summary,
        data,
        taskId
      }
    });

    console.log(`[LOG][${log.timestamp.toISOString()}] ${actor.toUpperCase()} - ${eventType} - ${summary}`);
    return log;

  } catch (error) {
    console.error("[LOG ERROR]", error);
  }
}

