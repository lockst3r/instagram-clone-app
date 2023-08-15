import {Control} from 'react-hook-form';
import {IUser} from '../../types/models';

export type IEditableUserFields = 'bio' | 'name' | 'username' | 'website';

export type IEditableUser = Pick<IUser, IEditableUserFields>;

export interface ICustomInput {
  name: IEditableUserFields;
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  rules?: object;
}
