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
 * @interface ProductAttribute
 */
export interface ProductAttribute {
    /**
     * 
     * @type {number}
     * @memberof ProductAttribute
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ProductAttribute
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductAttribute
     */
    options: Array<string>;
}

/**
 * Check if a given object implements the ProductAttribute interface.
 */
export function instanceOfProductAttribute(value: object): value is ProductAttribute {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('options' in value) || value['options'] === undefined) return false;
    return true;
}

export function ProductAttributeFromJSON(json: any): ProductAttribute {
    return ProductAttributeFromJSONTyped(json, false);
}

export function ProductAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductAttribute {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'options': json['options'],
    };
}

export function ProductAttributeToJSON(json: any): ProductAttribute {
    return ProductAttributeToJSONTyped(json, false);
}

export function ProductAttributeToJSONTyped(value?: ProductAttribute | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'options': value['options'],
    };
}

