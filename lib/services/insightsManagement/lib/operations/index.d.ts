/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * AutoscaleSettings
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsManagementClient.
 */
export interface AutoscaleSettings {

    /**
     * Lists the autoscale settings for a resource group
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutoscaleSettingResourceCollection>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.AutoscaleSettingResourceCollection>): void;

    /**
     * Creates or updates an autoscale setting.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} autoscaleSettingName The autoscale setting name.
     * 
     * @param {object} parameters Parameters supplied to the operation.
     * 
     * @param {array} parameters.profiles the collection of automatic scaling
     * profiles that specify different scaling parameters for different time
     * periods. A maximum of 20 profiles can be specified.
     * 
     * @param {array} [parameters.notifications] the collection of notifications.
     * 
     * @param {boolean} [parameters.enabled] the enabled flag. Specifies whether
     * automatic scaling is enabled for the resource. The default value is 'true'.
     * 
     * @param {string} parameters.autoscaleSettingResourceName the name of the
     * autoscale setting.
     * 
     * @param {string} [parameters.targetResourceUri] the resource identifier of
     * the resource that the autoscale setting should be added to.
     * 
     * @param {string} [parameters.name] Azure resource name
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, autoscaleSettingName: string, parameters: models.AutoscaleSettingResource, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutoscaleSettingResource>): void;
    createOrUpdate(resourceGroupName: string, autoscaleSettingName: string, parameters: models.AutoscaleSettingResource, callback: ServiceCallback<models.AutoscaleSettingResource>): void;

    /**
     * Deletes and autoscale setting
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} autoscaleSettingName The autoscale setting name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, autoscaleSettingName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, autoscaleSettingName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets an autoscale setting
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} autoscaleSettingName The autoscale setting name.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, autoscaleSettingName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutoscaleSettingResource>): void;
    get(resourceGroupName: string, autoscaleSettingName: string, callback: ServiceCallback<models.AutoscaleSettingResource>): void;

    /**
     * Lists the autoscale settings for a resource group
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutoscaleSettingResourceCollection>): void;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.AutoscaleSettingResourceCollection>): void;
}

/**
 * @class
 * ServiceDiagnosticSettingsOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsManagementClient.
 */
export interface ServiceDiagnosticSettingsOperations {

    /**
     * Gets the active diagnostic settings for the specified resource.
     *
     * @param {string} resourceUri The identifier of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceUri: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServiceDiagnosticSettingsResource>): void;
    get(resourceUri: string, callback: ServiceCallback<models.ServiceDiagnosticSettingsResource>): void;

    /**
     * Create or update new diagnostic settings for the specified resource.
     *
     * @param {string} resourceUri The identifier of the resource.
     * 
     * @param {object} parameters Parameters supplied to the operation.
     * 
     * @param {string} [parameters.storageAccountId] The resource ID of the storage
     * account to which you would like to send Diagnostic Logs.
     * 
     * @param {string} [parameters.serviceBusRuleId] The service bus rule ID of the
     * service bus namespace in which you would like to have Event Hubs created for
     * streaming Diagnostic Logs. The rule ID is of the format: '{service bus
     * resource ID}/authorizationrules/{key name}'.
     * 
     * @param {array} [parameters.metrics] the list of metric settings.
     * 
     * @param {array} [parameters.logs] the list of logs settings.
     * 
     * @param {string} [parameters.workspaceId] The workspace ID (resource ID of a
     * Log Analytics workspace) for a Log Analytics workspace to which you would
     * like to send Diagnostic Logs. Example:
     * /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     * 
     * @param {string} [parameters.name] Azure resource name
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceUri: string, parameters: models.ServiceDiagnosticSettingsResource, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServiceDiagnosticSettingsResource>): void;
    createOrUpdate(resourceUri: string, parameters: models.ServiceDiagnosticSettingsResource, callback: ServiceCallback<models.ServiceDiagnosticSettingsResource>): void;
}

/**
 * @class
 * AlertRules
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsManagementClient.
 */
export interface AlertRules {

    /**
     * Creates or updates an alert rule.
     * Request method: PUT		Request URI:
     * https://management.azure.com/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/microsoft.insights/alertRules/{alert-rule-name}?api-version={api-version}
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} ruleName The name of the rule.
     * 
     * @param {object} parameters The parameters of the rule to create or update.
     * 
     * @param {string} parameters.alertRuleResourceName the name of the alert rule.
     * 
     * @param {string} [parameters.description] the description of the alert rule
     * that will be included in the alert email.
     * 
     * @param {boolean} parameters.isEnabled the flag that indicates whether the
     * alert rule is enabled.
     * 
     * @param {object} [parameters.condition] the condition that results in the
     * alert rule being activated.
     * 
     * @param {string} parameters.condition.odatatype Polymorphic Discriminator
     * 
     * @param {array} [parameters.actions] the array of actions that are performed
     * when the alert rule becomes active, and when an alert condition is resolved.
     * 
     * @param {string} [parameters.name] Azure resource name
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, ruleName: string, parameters: models.AlertRuleResource, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AlertRuleResource>): void;
    createOrUpdate(resourceGroupName: string, ruleName: string, parameters: models.AlertRuleResource, callback: ServiceCallback<models.AlertRuleResource>): void;

    /**
     * Deletes an alert rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} ruleName The name of the rule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, ruleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, ruleName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets an alert rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} ruleName The name of the rule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, ruleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AlertRuleResource>): void;
    get(resourceGroupName: string, ruleName: string, callback: ServiceCallback<models.AlertRuleResource>): void;

    /**
     * List the alert rules within a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation. For
     * more information please see
     * https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AlertRuleResourceCollection>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.AlertRuleResourceCollection>): void;
}

/**
 * @class
 * AlertRuleIncidents
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsManagementClient.
 */
export interface AlertRuleIncidents {

    /**
     * Gets an incident associated to an alert rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} ruleName The name of the rule.
     * 
     * @param {string} incidentName The name of the incident to retrieve.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, ruleName: string, incidentName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Incident>): void;
    get(resourceGroupName: string, ruleName: string, incidentName: string, callback: ServiceCallback<models.Incident>): void;

    /**
     * Gets a list of incidents associated to an alert rule
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} ruleName The name of the rule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByAlertRule(resourceGroupName: string, ruleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IncidentListResult>): void;
    listByAlertRule(resourceGroupName: string, ruleName: string, callback: ServiceCallback<models.IncidentListResult>): void;
}

/**
 * @class
 * LogProfiles
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the InsightsManagementClient.
 */
export interface LogProfiles {

    /**
     * Deletes the log profile.
     *
     * @param {string} logProfileName The name of the log profile.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(logProfileName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(logProfileName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets the log profile.
     *
     * @param {string} logProfileName The name of the log profile.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(logProfileName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LogProfileResource>): void;
    get(logProfileName: string, callback: ServiceCallback<models.LogProfileResource>): void;

    /**
     * Create or update a log profile in Azure Monitoring REST API.
     *
     * @param {string} logProfileName The name of the log profile.
     * 
     * @param {object} parameters Parameters supplied to the operation.
     * 
     * @param {string} parameters.storageAccountId the resource id of the storage
     * account to which you would like to send the Activity Log.
     * 
     * @param {string} [parameters.serviceBusRuleId] The service bus rule ID of the
     * service bus namespace in which you would like to have Event Hubs created for
     * streaming the Activity Log. The rule ID is of the format: '{service bus
     * resource ID}/authorizationrules/{key name}'.
     * 
     * @param {array} parameters.locations List of regions for which Activity Log
     * events should be stored or streamed. It is a comma separated list of valid
     * ARM locations including the 'global' location.
     * 
     * @param {array} [parameters.categories] the categories of the logs. These
     * categories are created as is convenient to the user. Some values are:
     * 'Write', 'Delete', and/or 'Action.'
     * 
     * @param {object} [parameters.retentionPolicy] the retention policy for the
     * events in the log.
     * 
     * @param {boolean} parameters.retentionPolicy.enabled a value indicating
     * whether the retention policy is enabled.
     * 
     * @param {number} parameters.retentionPolicy.days the number of days for the
     * retention in days. A value of 0 will retain the events indefinitely.
     * 
     * @param {string} [parameters.name] Azure resource name
     * 
     * @param {string} parameters.location Resource location
     * 
     * @param {object} [parameters.tags] Resource tags
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(logProfileName: string, parameters: models.LogProfileResource, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LogProfileResource>): void;
    createOrUpdate(logProfileName: string, parameters: models.LogProfileResource, callback: ServiceCallback<models.LogProfileResource>): void;

    /**
     * List the log profiles.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LogProfileCollection>): void;
    list(callback: ServiceCallback<models.LogProfileCollection>): void;
}
