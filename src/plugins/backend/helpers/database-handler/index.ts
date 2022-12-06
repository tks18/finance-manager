import { requester } from '@plugins/backend/helpers';
import { api } from '@plugins/backend/api';
import type {
  IDBAddInput,
  IDBGetInput,
  IDBEditInput,
  IDBDeleteInput,
  IDBAdd,
  IDBGet,
  IDBEdit,
  IDBDelete,
  IDBColumns,
} from './types';
import type { ICalendarDateIdInput } from '@plugins/backend/types';

export class DatabaseHandler<ICreationAttributes, IDocumentAttributes> {
  private route: string;

  constructor(route: string) {
    this.route = route;
  }

  private get subRoutes() {
    return {
      columns: `${this.route}/columns`,
      get: `${this.route}/get`,
      add: `${this.route}/add`,
      edit: `${this.route}/edit`,
      delete: `${this.route}/delete`,
    };
  }

  public getColumns(token: string) {
    return requester<any, IDBColumns>('post', {
      url: this.subRoutes.columns,
      token,
    });
  }

  public add(token: string, data: IDBAddInput<ICreationAttributes>) {
    return requester<
      IDBAddInput<ICreationAttributes>,
      IDBAdd<IDocumentAttributes>
    >('post', {
      url: this.subRoutes.add,
      token,
      data,
    });
  }

  public get(token: string, data: IDBGetInput<ICreationAttributes>) {
    return requester<
      IDBGetInput<ICreationAttributes>,
      IDBGet<IDocumentAttributes>
    >('post', {
      url: this.subRoutes.get,
      token,
      data,
    });
  }

  public edit(token: string, data: IDBEditInput<ICreationAttributes>) {
    return requester<IDBEditInput<ICreationAttributes>, IDBEdit>('post', {
      url: this.subRoutes.get,
      token,
      data,
    });
  }

  public delete(token: string, data: IDBDeleteInput<ICreationAttributes>) {
    return requester<IDBDeleteInput<ICreationAttributes>, IDBDelete>('post', {
      url: this.subRoutes.get,
      token,
      data,
    });
  }

  public getDateId(token: string, data: ICalendarDateIdInput) {
    return api.data.masters.calendar.getDateId(token, data);
  }
}
