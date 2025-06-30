import prisma from "../prisma";

export const getAllPatient = () => {
    return prisma.patient.findMany()
}