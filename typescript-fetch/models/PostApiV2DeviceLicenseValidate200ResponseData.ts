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
 * @interface PostApiV2DeviceLicenseValidate200ResponseData
 */
export interface PostApiV2DeviceLicenseValidate200ResponseData {
    /**
     * 
     * @type {boolean}
     * @memberof PostApiV2DeviceLicenseValidate200ResponseData
     */
    isValid: boolean;
}

/**
 * Check if a given object implements the PostApiV2DeviceLicenseValidate200ResponseData interface.
 */
export function instanceOfPostApiV2DeviceLicenseValidate200ResponseData(value: object): value is PostApiV2DeviceLicenseValidate200ResponseData {
    if (!('isValid' in value) || value['isValid'] === undefined) return false;
    return true;
}

export function PostApiV2DeviceLicenseValidate200ResponseDataFromJSON(json: any): PostApiV2DeviceLicenseValidate200ResponseData {
    return PostApiV2DeviceLicenseValidate200ResponseDataFromJSONTyped(json, false);
}

export function PostApiV2DeviceLicenseValidate200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostApiV2DeviceLicenseValidate200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'isValid': json['isValid'],
    };
}

export function PostApiV2DeviceLicenseValidate200ResponseDataToJSON(json: any): PostApiV2DeviceLicenseValidate200ResponseData {
    return PostApiV2DeviceLicenseValidate200ResponseDataToJSONTyped(json, false);
}

export function PostApiV2DeviceLicenseValidate200ResponseDataToJSONTyped(value?: PostApiV2DeviceLicenseValidate200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isValid': value['isValid'],
    };
}

