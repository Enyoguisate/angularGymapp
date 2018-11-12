import { Trainer, Activity, Shift } from "./trainer.component";

export const TRAINER_DATA: Trainer[] = [
  { id: 1, idTrainer: 1, name: "Pepe" },
  { id: 2, idTrainer: 2, name: "Jose" },
  { id: 3, idTrainer: 3, name: "Juan" },
  { id: 4, idTrainer: 4, name: "Alfredo" },
  { id: 5, idTrainer: 5, name: "Roberto" }
];

export const ACTIVITY_DATA: Activity[] = [
  { id: 1, idActivity: 1, idTrainer: 1, name: "spinning", value: "Spinning" },
  { id: 2, idActivity: 2, idTrainer: 1, name: "zumba", value: "Zumba" },
  { id: 3, idActivity: 3, idTrainer: 1, name: "bodyjump", value: "Body Jump" },
  { id: 4, idActivity: 4, idTrainer: 1, name: "crossfit", value: "CrossFit" },
  { id: 5, idActivity: 5, idTrainer: 2, name: "spinning", value: "Spinning" },
  { id: 6, idActivity: 6, idTrainer: 2, name: "zumba", value: "Zumba" },
  { id: 7, idActivity: 7, idTrainer: 3, name: "spinning", value: "Spinning" },
  { id: 8, idActivity: 8, idTrainer: 3, name: "crossfit", value: "CrossFit" },
  { id: 9, idActivity: 9, idTrainer: 4, name: "spinning", value: "Spinning" },
  { id: 10, idActivity: 10, idTrainer: 4, name: "zumba", value: "Zumba" },
  { id: 11, idActivity: 11, idTrainer: 4, name: "bodyjump", value: "Body Jump" },
  { id: 12, idActivity: 12, idTrainer: 5, name: "crossfit", value: "CrossFit" },
  { id: 13, idActivity: 13, idTrainer: 5, name: "zumba", value: "Zumba" },
  { id: 14, idActivity: 14, idTrainer: 5, name: "spinning", value: "Spinning" },
  { id: 15, idActivity: 15, idTrainer: 5, name: "bodyjump", value: "Body Jump" }
];

export const SHIFT_DATA: Shift[] = [
    { id: 1, idShift: 1, idActivity: 1, date: "15-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 2, idShift: 2, idActivity: 2, date: "15-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 10 },
    { id: 3, idShift: 3, idActivity: 3, date: "15-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 20 },
    { id: 4, idShift: 4, idActivity: 4, date: "15-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 5 },
    { id: 5, idShift: 5, idActivity: 5, date: "16-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 9 },
    { id: 6, idShift: 6, idActivity: 6, date: "16-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 22 },
    { id: 7, idShift: 7, idActivity: 7, date: "16-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 20 },
    { id: 8, idShift: 8, idActivity: 8, date: "16-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 15 },
    { id: 9, idShift: 9, idActivity: 9, date: "16-11-18", time: "12:00 - 13:00", maxQuota: 30, quotaLeft: 0 },
    { id: 10, idShift: 10, idActivity: 10, date: "17-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 11, idShift: 11, idActivity: 11, date: "17-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 1 },
    { id: 12, idShift: 12, idActivity: 12, date: "17-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 12 },
    { id: 13, idShift: 13, idActivity: 13, date: "17-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 27 },
    { id: 14, idShift: 14, idActivity: 14, date: "18-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 15, idShift: 15, idActivity: 15, date: "18-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 28 },
    { id: 16, idShift: 16, idActivity: 14, date: "18-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 2 },
    { id: 17, idShift: 17, idActivity: 13, date: "18-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 6 },
    { id: 18, idShift: 18, idActivity: 12, date: "19-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 30 },
    { id: 19, idShift: 19, idActivity: 11, date: "19-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 27 },
    { id: 20, idShift: 20, idActivity: 10, date: "19-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 12 },
    { id: 21, idShift: 21, idActivity: 9, date: "19-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 15 },
    { id: 22, idShift: 22, idActivity: 8, date: "20-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 23, idShift: 23, idActivity: 7, date: "20-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 0 },
    { id: 24, idShift: 24, idActivity: 6, date: "20-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 7 },
    { id: 25, idShift: 25, idActivity: 5, date: "20-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 20 },
    { id: 26, idShift: 26, idActivity: 4, date: "20-11-18", time: "12:00 - 13:00", maxQuota: 30, quotaLeft: 19 },
]
