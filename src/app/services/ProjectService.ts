import { plainToClass } from "class-transformer";
import { Project } from "../entities/Projects";
import { ProjectRepository } from "../repository/ProjectRepoistory";

export class ProjectService {
    constructor(
        private projectRepository: ProjectRepository
    ) {}
    public async createProject(projectInput : any){
        const projectData  = plainToClass(Project,{
            "projectname": projectInput.name,
            "desc": "Violence violence violence I don't like violence I aviod it ..But violence likes me I can't avoid it"
        })
        const savedDet = await this.projectRepository.createProject(projectData);
        return savedDet;
    }
}
