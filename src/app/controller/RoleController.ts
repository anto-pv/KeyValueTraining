import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import { RoleService } from "../services/RoleService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class RoleController extends AbstractController {
    constructor(
        private RoleService: RoleService
    ) {
        super(`${APP_CONSTANTS.apiPrefix}/roles`);
        this.initializeRoutes();
    }
    protected initializeRoutes(): void {
        this.router.post(
            `${this.path}`,this.createRole
        );
        this.router.get(
            `${this.path}`,this.getallRole
        );
        this.router.put(
          `${this.path}/:roleId`,this.asyncRouteHandler(this.updateRole)
      );
      this.router.delete(
        `${this.path}/:roleId`,this.asyncRouteHandler(this.deleteRole)
    );
    }
    private createRole = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {

        try {
          const data = await this.RoleService.createRole(request.body);
          response.send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
        } catch (err) {
          next(err);
        }
      }
    private getallRole = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
    ) => {

        try {
          const data = await this.RoleService.getallRole();
          response.send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
        } catch (err) {
          next(err);
        }
      }
      private updateRole = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
          const data = await this.RoleService.updateRole(request.params.roleId, request.body);
          response.status(201).send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
      }
      private deleteRole = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
          const data = await this.RoleService.deleteRole(request.params.roleId);
          response.status(201).send(
            this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
          );
      }
}
export default RoleController;