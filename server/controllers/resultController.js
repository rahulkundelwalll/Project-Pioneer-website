import { connection } from '../server.js'

async function assignProject(student, project) {
    try {
        console.log(student.email);
        console.log(project.project_id);

        await connection.execute(
            'UPDATE Student SET assignedProject = ? WHERE email = ?',
            [project.project_id, student.email]
        );

        await connection.execute('UPDATE Projects SET strength = strength - 1 WHERE project_id = ?', [project.project_id]);
    } catch (error) {
        console.error(error);
    }
}

const getResults = async (req, res) => {
    try {
        // Get students in descending order of CGPA
        const studentList = await connection.execute(
            'SELECT email, cgpa, firstPreference, secondPreference, thirdPreference, assignedProject FROM Student WHERE assignedProject IS NULL ORDER BY cgpa DESC'
        );

        // Loop through students and assign projects
        for (const students of studentList) {
            for (const student of students) {
                // Check available project preferences
                const preferences = [
                    student.firstPreference,
                    student.secondPreference,
                    student.thirdPreference
                ];

                // Fetch project IDs corresponding to project names
                const projectIDs = await Promise.all(preferences.map(async (preference) => {
                    const [project] = await connection.execute('SELECT project_id FROM Projects WHERE pname = ?', [preference]);
                    return project[0].project_id;
                }));

                // Loop through project IDs to find available projects
                for (const projectId of projectIDs) {
                    // Check if project has available slots
                    const project = await connection.execute('SELECT * FROM Projects WHERE project_id = ? AND strength > 0', [projectId]);
                    if (project[0].length > 0) {
                        await assignProject(student, project[0][0]);
                        break; // Exit the loop once a project is assigned
                    }
                }
            }
        }

        // Update unassigned students
        await connection.execute('UPDATE Student SET assigned = FALSE WHERE assignedProject IS NULL');

        res.json({ message: 'Projects assigned successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error assigning projects.' });
    }
};

export { getResults }