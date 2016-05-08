  import {Object} from './object';
  import * as _ from 'lodash';

/**
 * Grid column class.
 * Defines a single grid column with its properties and methods. Should be used
 * when defining the 'columns' property in the grid options configuration.
 *
 * @author Branimir Borisov <branimir@raketasoft.com>
 * @since 1.0.0-alpha
 */
export class GridColumn extends Object {
  heading: string;
  name: string;
  filtering: boolean = true;
  sorting: boolean = true;
  width: string;

  /**
   * Render grid heading for this column.
   *
   * @returns {string}
   */
  renderHeading(): string {
    return this.heading ? this.heading : this.name;
  }

  /**
   * Render single grid cell for this column for the given data row.
   *
   * @param {any} data
   * @returns {string}
   */
  renderCell(data: any): string {
    return _.get(data, this.name).toString();
  }
}