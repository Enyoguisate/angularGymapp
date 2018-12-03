import { Trainer, Activity, Activities, Shift, User } from "../interfaces/index";

export const TRAINER_DATA: Trainer[] = [
  { id: 1, idTrainer: 1, name: "Pepe" },
  { id: 2, idTrainer: 2, name: "Jose" },
  { id: 3, idTrainer: 3, name: "Juan" },
  { id: 4, idTrainer: 4, name: "Alfredo" },
  { id: 5, idTrainer: 5, name: "Roberto" }
];

export const ACTIVITIES_DATA: Activities[] = [
  { id: 1, idActivity: 1, idTrainer: 1, name: "spinning", value: "Spinning" },
  { id: 2, idActivity: 2, idTrainer: 1, name: "zumba", value: "Zumba" },
  { id: 3, idActivity: 3, idTrainer: 1, name: "bodyjump", value: "Body Jump" },
  { id: 4, idActivity: 4, idTrainer: 1, name: "crossfit", value: "CrossFit" },
  { id: 5, idActivity: 1, idTrainer: 2, name: "spinning", value: "Spinning" },
  { id: 6, idActivity: 2, idTrainer: 2, name: "zumba", value: "Zumba" },
  { id: 7, idActivity: 1, idTrainer: 3, name: "spinning", value: "Spinning" },
  { id: 8, idActivity: 4, idTrainer: 3, name: "crossfit", value: "CrossFit" },
  { id: 9, idActivity: 1, idTrainer: 4, name: "spinning", value: "Spinning" },
  { id: 10, idActivity: 2, idTrainer: 4, name: "zumba", value: "Zumba" },
  { id: 11, idActivity: 3, idTrainer: 4, name: "bodyjump", value: "Body Jump" },
  { id: 12, idActivity: 4, idTrainer: 5, name: "crossfit", value: "CrossFit" },
  { id: 13, idActivity: 2, idTrainer: 5, name: "zumba", value: "Zumba" },
  { id: 14, idActivity: 1, idTrainer: 5, name: "spinning", value: "Spinning" },
  { id: 15, idActivity: 3, idTrainer: 5, name: "bodyjump", value: "Body Jump" }
];

export const ACTIVITY_DATA: Activity[] = [
  { idActivity: 1, nombre: "Spinning" },
  { idActivity: 2, nombre: "Zumba" },
  { idActivity: 3, nombre: "Body Jump" },
  { idActivity: 4, nombre: "CrossFit" },
]

export const SHIFT_DATA: Shift[] = [
    { id: 1, idShift: 1, idActivity: 1, date: "15-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 2, idShift: 2, idActivity: 2, date: "15-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 10 },
    { id: 3, idShift: 3, idActivity: 3, date: "15-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 20 },
    { id: 4, idShift: 4, idActivity: 4, date: "15-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 5 },
    { id: 5, idShift: 5, idActivity: 1, date: "16-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 9 },
    { id: 6, idShift: 6, idActivity: 2, date: "16-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 22 },
    { id: 7, idShift: 7, idActivity: 3, date: "16-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 20 },
    { id: 8, idShift: 8, idActivity: 4, date: "16-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 15 },
    { id: 9, idShift: 9, idActivity: 1, date: "16-11-18", time: "12:00 - 13:00", maxQuota: 30, quotaLeft: 0 },
    { id: 10, idShift: 10, idActivity: 2, date: "17-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 11, idShift: 11, idActivity: 3, date: "17-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 1 },
    { id: 12, idShift: 12, idActivity: 4, date: "17-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 12 },
    { id: 13, idShift: 13, idActivity: 1, date: "17-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 27 },
    { id: 14, idShift: 14, idActivity: 4, date: "18-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 15, idShift: 15, idActivity: 3, date: "18-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 28 },
    { id: 16, idShift: 16, idActivity: 4, date: "18-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 2 },
    { id: 17, idShift: 17, idActivity: 3, date: "18-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 6 },
    { id: 18, idShift: 18, idActivity: 2, date: "19-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 30 },
    { id: 19, idShift: 19, idActivity: 1, date: "19-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 27 },
    { id: 20, idShift: 20, idActivity: 1, date: "19-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 12 },
    { id: 21, idShift: 21, idActivity: 2, date: "19-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 15 },
    { id: 22, idShift: 22, idActivity: 3, date: "20-11-18", time: "08:00 - 09:00", maxQuota: 30, quotaLeft: 20 },
    { id: 23, idShift: 23, idActivity: 4, date: "20-11-18", time: "09:00 - 10:00", maxQuota: 30, quotaLeft: 0 },
    { id: 24, idShift: 24, idActivity: 1, date: "20-11-18", time: "10:00 - 11:00", maxQuota: 30, quotaLeft: 7 },
    { id: 25, idShift: 25, idActivity: 2, date: "20-11-18", time: "11:00 - 12:00", maxQuota: 30, quotaLeft: 20 },
    { id: 26, idShift: 26, idActivity: 3, date: "20-11-18", time: "12:00 - 13:00", maxQuota: 30, quotaLeft: 19 },
];


export const USERS_DATA: User[] = [
  { username: "pepe", password: "asdasd123", id: 0,    firstName: "pepe",     lastName: "pepon", token: "fake-jwt-token" },
  { username: "pepe1", password: "asdasd123", id: 1,   firstName: "roberto",  lastName: "perez", token: "fake-jwt-token" },
  { username: "pepe2", password: "asdasd123", id: 2,   firstName: "juan",     lastName: "javier", token: "fake-jwt-token" },
  { username: "pepe3", password: "asdasd123", id: 3,   firstName: "jose",     lastName: "gorosito", token: "fake-jwt-token" },
  { username: "pepe4", password: "asdasd123", id: 4,   firstName: "jimena",   lastName: "alvarez", token: "fake-jwt-token" },
  { username: "pepe5", password: "asdasd123", id: 5,   firstName: "marcela",  lastName: "martinez", token: "fake-jwt-token" },
  { username: "pepe6", password: "asdasd123", id: 6,   firstName: "julia",    lastName: "garcia", token: "fake-jwt-token" },
  { username: "pepe7", password: "asdasd123", id: 7,   firstName: "camila",   lastName: "estevez", token: "fake-jwt-token" },
  { username: "pepe8", password: "asdasd123", id: 8,   firstName: "lourdes",  lastName: "martin", token: "fake-jwt-token" },
  { username: "pepe9", password: "asdasd123", id: 9,   firstName: "ailen",    lastName: "pepon", token: "fake-jwt-token" },
  { username: "pepe10", password: "asdasd123", id: 10, firstName: "ailin",    lastName: "perez", token: "fake-jwt-token" },
  { username: "pepe11", password: "asdasd123", id: 11, firstName: "carolina", lastName: "javier", token: "fake-jwt-token" },
  { username: "pepe12", password: "asdasd123", id: 12, firstName: "jonatan",  lastName: "gorosito", token: "fake-jwt-token" },
  { username: "pepe13", password: "asdasd123", id: 13, firstName: "ana",      lastName: "alvarez", token: "fake-jwt-token" },
  { username: "pepe14", password: "asdasd123", id: 14, firstName: "leo",      lastName: "martinez", token: "fake-jwt-token" },
  { username: "pepe15", password: "asdasd123", id: 15, firstName: "leandro",  lastName: "garcia", token: "fake-jwt-token" },
  { username: "pepe16", password: "asdasd123", id: 16, firstName: "martin",   lastName: "estevez", token: "fake-jwt-token" },
  { username: "pepe17", password: "asdasd123", id: 17, firstName: "jairo",    lastName: "martin", token: "fake-jwt-token" },
  { username: "pepe18", password: "asdasd123", id: 18, firstName: "ruben",    lastName: "pepon", token: "fake-jwt-token" },
  { username: "pepe19", password: "asdasd123", id: 19, firstName: "mariano",  lastName: "perez", token: "fake-jwt-token" },
  { username: "pepe20", password: "asdasd123", id: 20, firstName: "esteban",  lastName: "javier", token: "fake-jwt-token" },
  { username: "pepe21", password: "asdasd123", id: 21, firstName: "fausto",   lastName: "gorosito", token: "fake-jwt-token" },
  { username: "pepe22", password: "asdasd123", id: 22, firstName: "romina",   lastName: "pepon", token: "fake-jwt-token" },
  { username: "pepe23", password: "asdasd123", id: 23, firstName: "sandra",   lastName: "perez", token: "fake-jwt-token" },
  { username: "pepe24", password: "asdasd123", id: 24, firstName: "aldana",   lastName: "javier", token: "fake-jwt-token" },
  { username: "pepe25", password: "asdasd123", id: 25, firstName: "maria",    lastName: "gorosito", token: "fake-jwt-token" },
  { username: "pepe26", password: "asdasd123", id: 26, firstName: "carlos",   lastName: "alvarez", token: "fake-jwt-token" },
  { username: "pepe27", password: "asdasd123", id: 27, firstName: "maximo",   lastName: "martinez", token: "fake-jwt-token" },
  { username: "pepe28", password: "asdasd123", id: 28, firstName: "emilia",   lastName: "garcia", token: "fake-jwt-token" },
  { username: "pepe29", password: "asdasd123", id: 29, firstName: "juana",    lastName: "estevez", token: "fake-jwt-token" },
  { username: "pepe30", password: "asdasd123", id: 30, firstName: "paco",     lastName: "martin", token: "fake-jwt-token" },
  

]
