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
 * @interface SessionId
 */
export interface SessionId {
    /**
     * 
     * @type {string}
     * @memberof SessionId
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof SessionId
     */
    timestamp?: number;
}

/**
 * Check if a given object implements the SessionId interface.
 */
export function instanceOfSessionId(value: object): value is SessionId {
    return true;
}

export function SessionIdFromJSON(json: any): SessionId {
    return SessionIdFromJSONTyped(json, false);
}

export function SessionIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionId {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'timestamp': json['timestamp'] == null ? undefined : json['timestamp'],
    };
}

export function SessionIdToJSON(json: any): SessionId {
    return SessionIdToJSONTyped(json, false);
}

export function SessionIdToJSONTyped(value?: SessionId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'timestamp': value['timestamp'],
    };
}

