/* tslint:disable */
/* eslint-disable */
/**
 * FLECS Console API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Subscriptions } from './Subscriptions';
import {
    SubscriptionsFromJSON,
    SubscriptionsFromJSONTyped,
    SubscriptionsToJSON,
    SubscriptionsToJSONTyped,
} from './Subscriptions';

/**
 * 
 * @export
 * @interface GetApiV2MySubscriptions200Response
 */
export interface GetApiV2MySubscriptions200Response {
    /**
     * 
     * @type {number}
     * @memberof GetApiV2MySubscriptions200Response
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof GetApiV2MySubscriptions200Response
     */
    statusText?: string;
    /**
     * 
     * @type {Subscriptions}
     * @memberof GetApiV2MySubscriptions200Response
     */
    data: Subscriptions;
}

/**
 * Check if a given object implements the GetApiV2MySubscriptions200Response interface.
 */
export function instanceOfGetApiV2MySubscriptions200Response(value: object): value is GetApiV2MySubscriptions200Response {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetApiV2MySubscriptions200ResponseFromJSON(json: any): GetApiV2MySubscriptions200Response {
    return GetApiV2MySubscriptions200ResponseFromJSONTyped(json, false);
}

export function GetApiV2MySubscriptions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetApiV2MySubscriptions200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'statusText': json['statusText'] == null ? undefined : json['statusText'],
        'data': SubscriptionsFromJSON(json['data']),
    };
}

export function GetApiV2MySubscriptions200ResponseToJSON(json: any): GetApiV2MySubscriptions200Response {
    return GetApiV2MySubscriptions200ResponseToJSONTyped(json, false);
}

export function GetApiV2MySubscriptions200ResponseToJSONTyped(value?: GetApiV2MySubscriptions200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'statusCode': value['statusCode'],
        'statusText': value['statusText'],
        'data': SubscriptionsToJSON(value['data']),
    };
}

