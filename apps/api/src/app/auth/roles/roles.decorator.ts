import { SetMetadata } from '@nestjs/common';
import { roleName } from '../../app.constants';

export const Roles = (...roles: string[]) => SetMetadata(roleName, roles);