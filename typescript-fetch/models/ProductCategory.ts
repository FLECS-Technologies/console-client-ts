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
 * @interface ProductCategory
 */
export interface ProductCategory {
    /**
     * 
     * @type {number}
     * @memberof ProductCategory
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ProductCategory
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProductCategory
     */
    slug: string;
}

/**
 * Check if a given object implements the ProductCategory interface.
 */
export function instanceOfProductCategory(value: object): value is ProductCategory {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    return true;
}

export function ProductCategoryFromJSON(json: any): ProductCategory {
    return ProductCategoryFromJSONTyped(json, false);
}

export function ProductCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
    };
}

export function ProductCategoryToJSON(json: any): ProductCategory {
    return ProductCategoryToJSONTyped(json, false);
}

export function ProductCategoryToJSONTyped(value?: ProductCategory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
    };
}

