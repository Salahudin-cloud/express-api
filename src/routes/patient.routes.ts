import { Router } from 'express'
import { getPatients } from '../controller/patient.controller'

const router = Router()

router.get('/patients', getPatients)

export default router