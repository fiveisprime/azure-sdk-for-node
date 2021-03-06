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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ServiceGroupDescription class.
 * @constructor
 * The description of the service group
 *
 * @member {string} [applicationName]
 *
 * @member {string} [serviceName]
 *
 * @member {string} [serviceTypeName]
 *
 * @member {object} [partitionDescription]
 *
 * @member {string} [partitionDescription.partitionScheme] Possible values
 * include: 'Invalid', 'Singleton', 'UniformInt64', 'Named'
 *
 * @member {number} [partitionDescription.count]
 *
 * @member {array} [partitionDescription.names]
 *
 * @member {string} [partitionDescription.lowKey]
 *
 * @member {string} [partitionDescription.highKey]
 *
 * @member {string} [placementConstraints]
 *
 * @member {object} [correlationScheme]
 *
 * @member {string} [correlationScheme.serviceName]
 *
 * @member {string} [correlationScheme.serviceCorrelationScheme] Possible
 * values include: 'Invalid', 'Affinity', 'AlignedAffinity',
 * 'NonAlignedAffinity'
 *
 * @member {object} [serviceLoadMetrics]
 *
 * @member {string} [serviceLoadMetrics.serviceName]
 *
 * @member {string} [serviceLoadMetrics.serviceCorrelationScheme] Possible
 * values include: 'Invalid', 'Affinity', 'AlignedAffinity',
 * 'NonAlignedAffinity'
 *
 * @member {object} [servicePlacementPolicies]
 *
 * @member {string} [servicePlacementPolicies.serviceName]
 *
 * @member {string} [servicePlacementPolicies.serviceCorrelationScheme]
 * Possible values include: 'Invalid', 'Affinity', 'AlignedAffinity',
 * 'NonAlignedAffinity'
 *
 * @member {number} [flags]
 *
 * @member {array} [serviceGroupMemberDescription]
 *
 * @member {string} serviceKind Polymorphic Discriminator
 *
 */
class ServiceGroupDescription {
  constructor() {
  }

  /**
   * Defines the metadata of ServiceGroupDescription
   *
   * @returns {object} metadata of ServiceGroupDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceGroupDescription',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'ServiceKind',
          clientName: 'serviceKind'
        },
        uberParent: 'ServiceGroupDescription',
        className: 'ServiceGroupDescription',
        modelProperties: {
          applicationName: {
            required: false,
            serializedName: 'ApplicationName',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: false,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          serviceTypeName: {
            required: false,
            serializedName: 'ServiceTypeName',
            type: {
              name: 'String'
            }
          },
          partitionDescription: {
            required: false,
            serializedName: 'PartitionDescription',
            type: {
              name: 'Composite',
              className: 'PartitionDescription'
            }
          },
          placementConstraints: {
            required: false,
            serializedName: 'PlacementConstraints',
            type: {
              name: 'String'
            }
          },
          correlationScheme: {
            required: false,
            serializedName: 'CorrelationScheme',
            type: {
              name: 'Composite',
              className: 'ServiceCorrelationDescription'
            }
          },
          serviceLoadMetrics: {
            required: false,
            serializedName: 'ServiceLoadMetrics',
            type: {
              name: 'Composite',
              className: 'ServiceCorrelationDescription'
            }
          },
          servicePlacementPolicies: {
            required: false,
            serializedName: 'ServicePlacementPolicies',
            type: {
              name: 'Composite',
              className: 'ServiceCorrelationDescription'
            }
          },
          flags: {
            required: false,
            serializedName: 'Flags',
            type: {
              name: 'Number'
            }
          },
          serviceGroupMemberDescription: {
            required: false,
            serializedName: 'ServiceGroupMemberDescription',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceGroupMemberDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceGroupMemberDescription'
                  }
              }
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceGroupDescription;
