import { Email } from "../valueobjects/Email";
import { FullName } from "../valueobjects/FullName";
import { Password } from "../valueobjects/Password";
import { Role } from "../valueobjects/Role";

export class User {
  private id: string;
  private fullName: FullName;
  private email: Email;
  private password: Password;
  private roles: Role;

  constructor(id: string, firstName: string, lastName: string, email: string, password: string, roles: number[]) {
    this.id = id;
    this.fullName = new FullName(firstName, lastName);
    this.email = new Email(email);
    this.password = new Password(password);
    this.roles = new Role(roles)
  }

  public getId(): string { return this.id; }
  public getFullName(): string { return this.fullName.getFullName(); }
  public getFirstName(): string { return this.fullName.getFirstName(); }
  public getLastName(): string { return this.fullName.getLastName(); }
  public getEmail(): string { return this.email.getValue(); }
  public setPassword(password: string) { this.password.setPassword(password); }
  public getRoles(): number[] { return this.roles.getValues(); }
}

function testUserCreation(data: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: number[];
}) {
  try {
    const user = new User(data.id, data.firstName, data.lastName, data.email, data.password, data.roles);
    console.log('Usuario creado correctamente:', user.getId());
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Error desconocido');
    }
  }
}
