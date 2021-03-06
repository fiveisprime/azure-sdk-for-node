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
 * Initializes a new instance of the CertificateCollection class.
 * @constructor
 * Collection of certificates.
 *
 * @member {string} [nextLink] Link to next page of resources.
 *
 */
class CertificateCollection extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CertificateCollection
   *
   * @returns {object} metadata of CertificateCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CertificateCollection',
      type: {
        name: 'Composite',
        className: 'CertificateCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CertificateElementType',
                  type: {
                    name: 'Composite',
                    className: 'Certificate'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CertificateCollection;
