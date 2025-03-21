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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    iD?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userLogin?: string;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'iD': json['ID'] == null ? undefined : json['ID'],
        'displayName': json['display_name'] == null ? undefined : json['display_name'],
        'userEmail': json['user_email'] == null ? undefined : json['user_email'],
        'userLogin': json['user_login'] == null ? undefined : json['user_login'],
    };
}

export function UserToJSON(json: any): User {
    return UserToJSONTyped(json, false);
}

export function UserToJSONTyped(value?: User | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ID': value['iD'],
        'display_name': value['displayName'],
        'user_email': value['userEmail'],
        'user_login': value['userLogin'],
    };
}

