import * as bcrypt from 'bcrypt';

export function hashPassword(rawPassword: string): string {
    const saltRounds = 11;
    return bcrypt.hashSync(rawPassword, saltRounds);
}

export function validatePassword(rawPassword: string, dbPassword: string): boolean {
    return bcrypt.compareSync(rawPassword, dbPassword);
}