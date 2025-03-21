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
import type { OrderBilling } from './OrderBilling';
import {
    OrderBillingFromJSON,
    OrderBillingFromJSONTyped,
    OrderBillingToJSON,
    OrderBillingToJSONTyped,
} from './OrderBilling';
import type { OrderLineItem } from './OrderLineItem';
import {
    OrderLineItemFromJSON,
    OrderLineItemFromJSONTyped,
    OrderLineItemToJSON,
    OrderLineItemToJSONTyped,
} from './OrderLineItem';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    customerId: number;
    /**
     * 
     * @type {Array<OrderLineItem>}
     * @memberof Order
     */
    lineItems: Array<OrderLineItem>;
    /**
     * 
     * @type {OrderBilling}
     * @memberof Order
     */
    billing: OrderBilling;
}

/**
 * Check if a given object implements the Order interface.
 */
export function instanceOfOrder(value: object): value is Order {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('customerId' in value) || value['customerId'] === undefined) return false;
    if (!('lineItems' in value) || value['lineItems'] === undefined) return false;
    if (!('billing' in value) || value['billing'] === undefined) return false;
    return true;
}

export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'],
        'customerId': json['customer_id'],
        'lineItems': ((json['line_items'] as Array<any>).map(OrderLineItemFromJSON)),
        'billing': OrderBillingFromJSON(json['billing']),
    };
}

export function OrderToJSON(json: any): Order {
    return OrderToJSONTyped(json, false);
}

export function OrderToJSONTyped(value?: Order | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'status': value['status'],
        'customer_id': value['customerId'],
        'line_items': ((value['lineItems'] as Array<any>).map(OrderLineItemToJSON)),
        'billing': OrderBillingToJSON(value['billing']),
    };
}

