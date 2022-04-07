import { getConnection, Repository } from "typeorm";
import { Project } from "../entities/Projects";

export class ProjectRepository extends Repository<Project> {
    public async createProject(projectDetails : Project){
        const projectConnection  = getConnection().getRepository(Project);
        const saveedDetails = await projectConnection.save(projectDetails);
        return saveedDetails;
    }
}
