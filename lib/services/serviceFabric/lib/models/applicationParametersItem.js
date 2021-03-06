/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApplicationParametersItem class.
 * @constructor
 * The parameters
 *
 * @member {string} [key]
 *
 * @member {string} [value]
 *
 */
class ApplicationParametersItem {
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationParametersItem
   *
   * @returns {object} metadata of ApplicationParametersItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Application_ParametersItem',
      type: {
        name: 'Composite',
        className: 'ApplicationParametersItem',
        modelProperties: {
          key: {
            required: false,
            serializedName: 'Key',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'Value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationParametersItem;
