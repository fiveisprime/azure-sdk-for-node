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
 * Initializes a new instance of the AS2ValidationSettings class.
 * @constructor
 * The AS2 agreement validation settings.
 *
 * @member {boolean} overrideMessageProperties The value indicating whether to
 * override incoming message properties with those in agreement.
 *
 * @member {boolean} encryptMessage The value indicating whether the message
 * has to be encrypted.
 *
 * @member {boolean} signMessage The value indicating whether the message has
 * to be signed.
 *
 * @member {boolean} compressMessage The value indicating whether the message
 * has to be compressed.
 *
 * @member {boolean} checkDuplicateMessage The value indicating whether to
 * check for duplicate message.
 *
 * @member {number} interchangeDuplicatesValidityDays The number of days to
 * look back for duplicate interchange.
 *
 * @member {boolean} checkCertificateRevocationListOnSend The value indicating
 * whether to check for certificate revocation list on send.
 *
 * @member {boolean} checkCertificateRevocationListOnReceive The value
 * indicating whether to check for certificate revocation list on receive.
 *
 * @member {string} encryptionAlgorithm The encryption algorithm. Possible
 * values include: 'NotSpecified', 'None', 'DES3', 'RC2', 'AES128', 'AES192',
 * 'AES256'
 *
 */
class AS2ValidationSettings {
  constructor() {
  }

  /**
   * Defines the metadata of AS2ValidationSettings
   *
   * @returns {object} metadata of AS2ValidationSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AS2ValidationSettings',
      type: {
        name: 'Composite',
        className: 'AS2ValidationSettings',
        modelProperties: {
          overrideMessageProperties: {
            required: true,
            serializedName: 'overrideMessageProperties',
            type: {
              name: 'Boolean'
            }
          },
          encryptMessage: {
            required: true,
            serializedName: 'encryptMessage',
            type: {
              name: 'Boolean'
            }
          },
          signMessage: {
            required: true,
            serializedName: 'signMessage',
            type: {
              name: 'Boolean'
            }
          },
          compressMessage: {
            required: true,
            serializedName: 'compressMessage',
            type: {
              name: 'Boolean'
            }
          },
          checkDuplicateMessage: {
            required: true,
            serializedName: 'checkDuplicateMessage',
            type: {
              name: 'Boolean'
            }
          },
          interchangeDuplicatesValidityDays: {
            required: true,
            serializedName: 'interchangeDuplicatesValidityDays',
            type: {
              name: 'Number'
            }
          },
          checkCertificateRevocationListOnSend: {
            required: true,
            serializedName: 'checkCertificateRevocationListOnSend',
            type: {
              name: 'Boolean'
            }
          },
          checkCertificateRevocationListOnReceive: {
            required: true,
            serializedName: 'checkCertificateRevocationListOnReceive',
            type: {
              name: 'Boolean'
            }
          },
          encryptionAlgorithm: {
            required: true,
            serializedName: 'encryptionAlgorithm',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'None', 'DES3', 'RC2', 'AES128', 'AES192', 'AES256' ]
            }
          }
        }
      }
    };
  }
}

module.exports = AS2ValidationSettings;
