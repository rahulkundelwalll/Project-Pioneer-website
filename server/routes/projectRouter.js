import express from 'express'
const router = express.Router()

import {project, addProject,updateProject,deleteProject,getStudentsByFaculty } from '../controllers/projectController.js'

router.route('/addProject').post(addProject)
router.route('/deleteProject/:id').delete(deleteProject) 
router.route('/updateProject/:id').patch(updateProject)
router.route('/project').get(project)
router.route('/getStudents').get(getStudentsByFaculty)

export default router