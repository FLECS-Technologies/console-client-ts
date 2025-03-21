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


import * as runtime from '../runtime';
import type {
  ErrorDescription,
  GetApiV2MySubscriptions200Response,
  GetApiV2Products200Response,
} from '../models/index';
import {
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    GetApiV2MySubscriptions200ResponseFromJSON,
    GetApiV2MySubscriptions200ResponseToJSON,
    GetApiV2Products200ResponseFromJSON,
    GetApiV2Products200ResponseToJSON,
} from '../models/index';

export interface GetApiV2MyProductsRequest {
    authorization: string;
    storeId?: number;
}

export interface GetApiV2MyProductsAppsRequest {
    authorization: string;
    storeId?: number;
}

export interface GetApiV2MySubscriptionsRequest {
    authorization: string;
    storeId?: number;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Get all products for a specific user
     * Get all products for a specific user
     */
    async getApiV2MyProductsRaw(requestParameters: GetApiV2MyProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetApiV2Products200Response>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getApiV2MyProducts().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['storeId'] != null) {
            queryParameters['store_id'] = requestParameters['storeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/api/v2/my/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetApiV2Products200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all products for a specific user
     * Get all products for a specific user
     */
    async getApiV2MyProducts(requestParameters: GetApiV2MyProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetApiV2Products200Response> {
        const response = await this.getApiV2MyProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all app products for a specific user
     * Get all app products for a specific user
     */
    async getApiV2MyProductsAppsRaw(requestParameters: GetApiV2MyProductsAppsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetApiV2Products200Response>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getApiV2MyProductsApps().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['storeId'] != null) {
            queryParameters['store_id'] = requestParameters['storeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/api/v2/my/products/apps`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetApiV2Products200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all app products for a specific user
     * Get all app products for a specific user
     */
    async getApiV2MyProductsApps(requestParameters: GetApiV2MyProductsAppsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetApiV2Products200Response> {
        const response = await this.getApiV2MyProductsAppsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all subscriptions of a specific user
     * Get all subscriptions of a specific user
     */
    async getApiV2MySubscriptionsRaw(requestParameters: GetApiV2MySubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetApiV2MySubscriptions200Response>> {
        if (requestParameters['authorization'] == null) {
            throw new runtime.RequiredError(
                'authorization',
                'Required parameter "authorization" was null or undefined when calling getApiV2MySubscriptions().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['storeId'] != null) {
            queryParameters['store_id'] = requestParameters['storeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/api/v2/my/subscriptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetApiV2MySubscriptions200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all subscriptions of a specific user
     * Get all subscriptions of a specific user
     */
    async getApiV2MySubscriptions(requestParameters: GetApiV2MySubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetApiV2MySubscriptions200Response> {
        const response = await this.getApiV2MySubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
