import { plainToClass } from "class-transformer";
import { Role } from "../entities/Roles";
import { RoleRepository } from "../repository/RoleRepository";

export class RoleService {
    constructor(
        private RoleRepository: RoleRepository
    ) {}
    public async createRole(RoleInput : any){
        const RoleData  = plainToClass(Role,{
            "rolename": RoleInput.name,
            "department" : "Main",
            "salary": RoleInput.salary
        })
        const savedDet = await this.RoleRepository.createRole(RoleData);
        return savedDet;
    }
    public async getallRole(){
        const savedDet = await this.RoleRepository.getallRole();
        return savedDet;
    }
    public async updateRole(roleId: string, roleDetails: any) {
        const updatedEmployee = await this.RoleRepository.updateRoleDetails(roleId, roleDetails);
        return updatedEmployee;
    }
    public async deleteRole(roleId: string) {
        return this.RoleRepository.deleteRoleById(roleId);
    }

}
