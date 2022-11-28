import * as bcrypt from 'bcrypt';

export function hashPassword(rawPassword: string): string {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPassword, salt);
}

export function validatePassword(password: string, dbPassword: string): boolean {
    const hashPass = hashPassword(password);
    return bcrypt.compareSync(hashPass, dbPassword);
}