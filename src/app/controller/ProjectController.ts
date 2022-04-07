import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import { ProjectService } from "../services/ProjectService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class ProjectController extends AbstractController {
    constructor(
        private projectService: ProjectService
    ) {
        super(`${APP_CONSTANTS.apiPrefix}/projects`);
        this.initializeRoutes();
    }
    protected initializeRoutes(): void {
        this.router.post(
            `${this.path}`,this.createProject
        )
    }
    private createProject = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
        try {
          const data = await this.projectService.createProject(request.body);
          response.send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
        } catch (err) {
          next(err);
        }
      }
    
}
export default ProjectController;