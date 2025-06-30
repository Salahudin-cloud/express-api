import { Router } from "express";
import patientRoutes from '../routes/patient.routes'
const router = Router()

router.get("/", (req, res) => {
    res.send("Hello World")
})

router.use("/api", patientRoutes); 

export default router;