import { Request, Response } from 'express'
import { getAllPatient } from '../services/patient.service'


export const getPatients = async(req: Request, res: Response) => {
    const patients = await getAllPatient()
    res.json(patients)
}