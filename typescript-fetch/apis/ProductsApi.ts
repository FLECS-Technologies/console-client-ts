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
  GetApiV2Products200Response,
  GetApiV2ProductsApps200Response,
  GetApiV2ProductsAppsReviews201Response,
  ReviewRequest,
} from '../models/index';
import {
    ErrorDescriptionFromJSON,
    ErrorDescriptionToJSON,
    GetApiV2Products200ResponseFromJSON,
    GetApiV2Products200ResponseToJSON,
    GetApiV2ProductsApps200ResponseFromJSON,
    GetApiV2ProductsApps200ResponseToJSON,
    GetApiV2ProductsAppsReviews201ResponseFromJSON,
    GetApiV2ProductsAppsReviews201ResponseToJSON,
    ReviewRequestFromJSON,
    ReviewRequestToJSON,
} from '../models/index';

export interface GetApiV2ProductsRequest {
    storeId?: number;
}

export interface GetApiV2ProductsAppsRequest {
    storeId?: number;
}

export interface GetApiV2ProductsAppsReviewsRequest {
    reviewRequest?: ReviewRequest;
}

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI {

    /**
     * Get all products
     * Get all products
     */
    async getApiV2ProductsRaw(requestParameters: GetApiV2ProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetApiV2Products200Response>> {
        const queryParameters: any = {};

        if (requestParameters['storeId'] != null) {
            queryParameters['store_id'] = requestParameters['storeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetApiV2Products200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all products
     * Get all products
     */
    async getApiV2Products(requestParameters: GetApiV2ProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetApiV2Products200Response> {
        const response = await this.getApiV2ProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all app products
     * Get all app products
     */
    async getApiV2ProductsAppsRaw(requestParameters: GetApiV2ProductsAppsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetApiV2ProductsApps200Response>> {
        const queryParameters: any = {};

        if (requestParameters['storeId'] != null) {
            queryParameters['store_id'] = requestParameters['storeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/products/apps`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetApiV2ProductsApps200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all app products
     * Get all app products
     */
    async getApiV2ProductsApps(requestParameters: GetApiV2ProductsAppsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetApiV2ProductsApps200Response> {
        const response = await this.getApiV2ProductsAppsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Post a review for an app
     * Post a review for an app
     */
    async getApiV2ProductsAppsReviewsRaw(requestParameters: GetApiV2ProductsAppsReviewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetApiV2ProductsAppsReviews201Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/products/apps/reviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReviewRequestToJSON(requestParameters['reviewRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetApiV2ProductsAppsReviews201ResponseFromJSON(jsonValue));
    }

    /**
     * Post a review for an app
     * Post a review for an app
     */
    async getApiV2ProductsAppsReviews(requestParameters: GetApiV2ProductsAppsReviewsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetApiV2ProductsAppsReviews201Response> {
        const response = await this.getApiV2ProductsAppsReviewsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
