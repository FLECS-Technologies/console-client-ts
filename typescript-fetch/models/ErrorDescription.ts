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
/**
 * 
 * @export
 * @interface ErrorDescription
 */
export interface ErrorDescription {
    /**
     * 
     * @type {string}
     * @memberof ErrorDescription
     */
    reason?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorDescription
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorDescription
     */
    statusText?: string;
}

/**
 * Check if a given object implements the ErrorDescription interface.
 */
export function instanceOfErrorDescription(value: object): value is ErrorDescription {
    return true;
}

export function ErrorDescriptionFromJSON(json: any): ErrorDescription {
    return ErrorDescriptionFromJSONTyped(json, false);
}

export function ErrorDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDescription {
    if (json == null) {
        return json;
    }
    return {
        
        'reason': json['reason'] == null ? undefined : json['reason'],
        'statusCode': json['statusCode'] == null ? undefined : json['statusCode'],
        'statusText': json['statusText'] == null ? undefined : json['statusText'],
    };
}

export function ErrorDescriptionToJSON(json: any): ErrorDescription {
    return ErrorDescriptionToJSONTyped(json, false);
}

export function ErrorDescriptionToJSONTyped(value?: ErrorDescription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reason': value['reason'],
        'statusCode': value['statusCode'],
        'statusText': value['statusText'],
    };
}

