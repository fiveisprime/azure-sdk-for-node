/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.Resource = require('./resource');
exports.ScaleCapacity = require('./scaleCapacity');
exports.MetricTrigger = require('./metricTrigger');
exports.ScaleAction = require('./scaleAction');
exports.ScaleRule = require('./scaleRule');
exports.TimeWindow = require('./timeWindow');
exports.RecurrentSchedule = require('./recurrentSchedule');
exports.Recurrence = require('./recurrence');
exports.AutoscaleProfile = require('./autoscaleProfile');
exports.EmailNotification = require('./emailNotification');
exports.WebhookNotification = require('./webhookNotification');
exports.AutoscaleNotification = require('./autoscaleNotification');
exports.AutoscaleSettingResource = require('./autoscaleSettingResource');
exports.AutoscaleSettingResourcePatch = require('./autoscaleSettingResourcePatch');
exports.AutoscaleSettingResourceCollection = require('./autoscaleSettingResourceCollection');
exports.ErrorResponse = require('./errorResponse');
exports.RuleDataSource = require('./ruleDataSource');
exports.RuleCondition = require('./ruleCondition');
exports.RuleMetricDataSource = require('./ruleMetricDataSource');
exports.RuleManagementEventClaimsDataSource = require('./ruleManagementEventClaimsDataSource');
exports.RuleManagementEventDataSource = require('./ruleManagementEventDataSource');
exports.ThresholdRuleCondition = require('./thresholdRuleCondition');
exports.LocationThresholdRuleCondition = require('./locationThresholdRuleCondition');
exports.ManagementEventAggregationCondition = require('./managementEventAggregationCondition');
exports.ManagementEventRuleCondition = require('./managementEventRuleCondition');
exports.RuleAction = require('./ruleAction');
exports.RuleEmailAction = require('./ruleEmailAction');
exports.RuleWebhookAction = require('./ruleWebhookAction');
exports.AlertRuleResource = require('./alertRuleResource');
exports.AlertRuleResourcePatch = require('./alertRuleResourcePatch');
exports.AlertRuleResourceCollection = require('./alertRuleResourceCollection');
exports.Incident = require('./incident');
exports.IncidentListResult = require('./incidentListResult');
exports.ActivityLogAlertLeafCondition = require('./activityLogAlertLeafCondition');
exports.ActivityLogAlertAllOfCondition = require('./activityLogAlertAllOfCondition');
exports.ActivityLogAlertActionGroup = require('./activityLogAlertActionGroup');
exports.ActivityLogAlertActionList = require('./activityLogAlertActionList');
exports.ActivityLogAlertResource = require('./activityLogAlertResource');
exports.ActivityLogAlertList = require('./activityLogAlertList');
exports.ActivityLogAlertPatchBody = require('./activityLogAlertPatchBody');
exports.RetentionPolicy = require('./retentionPolicy');
exports.LogProfileResource = require('./logProfileResource');
exports.LogProfileResourcePatch = require('./logProfileResourcePatch');
exports.LogProfileCollection = require('./logProfileCollection');
exports.MetricSettings = require('./metricSettings');
exports.LogSettings = require('./logSettings');
exports.ServiceDiagnosticSettingsResource = require('./serviceDiagnosticSettingsResource');
exports.ServiceDiagnosticSettingsResourcePatch = require('./serviceDiagnosticSettingsResourcePatch');
exports.EmailReceiver = require('./emailReceiver');
exports.SmsReceiver = require('./smsReceiver');
exports.WebhookReceiver = require('./webhookReceiver');
exports.ActionGroupResource = require('./actionGroupResource');
exports.ActionGroupList = require('./actionGroupList');
exports.EnableRequest = require('./enableRequest');
exports.AutoscaleSettingResourceCollection = require('./autoscaleSettingResourceCollection');
exports.AlertRuleResourceCollection = require('./alertRuleResourceCollection');
exports.IncidentListResult = require('./incidentListResult');
exports.ActivityLogAlertList = require('./activityLogAlertList');
exports.LogProfileCollection = require('./logProfileCollection');
exports.ActionGroupList = require('./actionGroupList');
exports.discriminators = {
  'RuleDataSource' : exports.RuleDataSource,
  'RuleCondition' : exports.RuleCondition,
  'RuleDataSource.Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' : exports.RuleMetricDataSource,
  'RuleDataSource.Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' : exports.RuleManagementEventDataSource,
  'RuleCondition.Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' : exports.ThresholdRuleCondition,
  'RuleCondition.Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' : exports.LocationThresholdRuleCondition,
  'RuleCondition.Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' : exports.ManagementEventRuleCondition,
  'RuleAction' : exports.RuleAction,
  'RuleAction.Microsoft.Azure.Management.Insights.Models.RuleEmailAction' : exports.RuleEmailAction,
  'RuleAction.Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' : exports.RuleWebhookAction
};