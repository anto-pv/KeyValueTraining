import { getConnection, Repository } from "typeorm";
import { Role } from "../entities/Roles";

export class RoleRepository extends Repository<Role> {
    public async createRole(RoleDetails : Role){
        const RoleConnection  = getConnection().getRepository(Role);
        const saveedDetails = await RoleConnection.save(RoleDetails);
        return saveedDetails;
    }
    public async getallRole(){
        const RoleConnection  = getConnection().getRepository(Role);
        const saveedDetails = await RoleConnection.find();
        return saveedDetails;
    }
    public async updateRoleDetails(roleId: string, roleDetails: any) {
        const RoleRepo = getConnection().getRepository(Role);
        const updateRoleDetails = await RoleRepo.update({ id: roleId, deletedAt: null }, {
            rolename: roleDetails.rolename ? roleDetails.rolename : undefined,
            department: roleDetails.department ? roleDetails.department : undefined,
            salary: roleDetails.salary ? roleDetails.salary : undefined
        });
        return updateRoleDetails;
    }
    public async deleteRoleById(id: string) {
        const roleRepo = getConnection().getRepository(Role);
        return roleRepo.softDelete({
            id
        });
    }
}
