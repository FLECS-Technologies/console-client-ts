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
import type { ProductResponse } from './ProductResponse';
import {
    ProductResponseFromJSON,
    ProductResponseFromJSONTyped,
    ProductResponseToJSON,
    ProductResponseToJSONTyped,
} from './ProductResponse';

/**
 * 
 * @export
 * @interface GetApiV2Products200Response
 */
export interface GetApiV2Products200Response {
    /**
     * 
     * @type {number}
     * @memberof GetApiV2Products200Response
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof GetApiV2Products200Response
     */
    statusText?: string;
    /**
     * 
     * @type {ProductResponse}
     * @memberof GetApiV2Products200Response
     */
    data: ProductResponse;
}

/**
 * Check if a given object implements the GetApiV2Products200Response interface.
 */
export function instanceOfGetApiV2Products200Response(value: object): value is GetApiV2Products200Response {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetApiV2Products200ResponseFromJSON(json: any): GetApiV2Products200Response {
    return GetApiV2Products200ResponseFromJSONTyped(json, false);
}

export function GetApiV2Products200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetApiV2Products200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'statusText': json['statusText'] == null ? undefined : json['statusText'],
        'data': ProductResponseFromJSON(json['data']),
    };
}

export function GetApiV2Products200ResponseToJSON(json: any): GetApiV2Products200Response {
    return GetApiV2Products200ResponseToJSONTyped(json, false);
}

export function GetApiV2Products200ResponseToJSONTyped(value?: GetApiV2Products200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'statusCode': value['statusCode'],
        'statusText': value['statusText'],
        'data': ProductResponseToJSON(value['data']),
    };
}

