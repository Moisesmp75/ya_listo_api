import { Roles } from "../../../../shared/domain/models/enums/Roles";

export class Role {
  private readonly roles: Roles[];

  constructor(inputRoles: number[]) {
    const uniqueRoles = Array.from(new Set(inputRoles));

    const validRoles = Object.values(Roles).filter(v => typeof v === 'number') as number[];
    const invalidRoles = uniqueRoles.filter(role => !validRoles.includes(role));

    if (invalidRoles.length > 0) {
      throw new Error(`Roles inválidos: ${invalidRoles.join(', ')}`);
    }

    this.roles = uniqueRoles as Roles[];
  }

  getValues(): Roles[] {
    return this.roles;
  }

  includes(role: Roles): boolean {
    return this.roles.includes(role);
  }

  toString(): string {
    return this.roles.map(role => Roles[role]).join(', ');
  }
}
