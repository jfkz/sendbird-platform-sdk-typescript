// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { InlineResponse20063 } from '../models/InlineResponse20063';
import { InlineResponse20063ExportedData } from '../models/InlineResponse20063ExportedData';
import { InlineResponse20064 } from '../models/InlineResponse20064';
import { RegisterAndScheduleDataExportData } from '../models/RegisterAndScheduleDataExportData';

/**
 * no description
 */
export class DataExportApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   `data_type`      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.
     * List data exports by message, channel, or user
     * @param dataType 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public async listDataExportsByMessageChannelOrUser(dataType: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dataType' is not null or undefined
        if (dataType === null || dataType === undefined) {
            throw new RequiredError("DataExportApi", "listDataExportsByMessageChannelOrUser", "dataType");
        }





        // Path Params
        const localVarPath = '/v3/export/{data_type}'
            .replace('{' + 'data_type' + '}', encodeURIComponent(String(dataType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------
     * Register and schedule a data export
     * @param dataType 
     * @param apiToken 
     * @param registerAndScheduleDataExportData 
     */
    public async registerAndScheduleDataExport(dataType: string, apiToken?: string, registerAndScheduleDataExportData?: RegisterAndScheduleDataExportData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dataType' is not null or undefined
        if (dataType === null || dataType === undefined) {
            throw new RequiredError("DataExportApi", "registerAndScheduleDataExport", "dataType");
        }




        // Path Params
        const localVarPath = '/v3/export/{data_type}'
            .replace('{' + 'data_type' + '}', encodeURIComponent(String(dataType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(registerAndScheduleDataExportData, "RegisterAndScheduleDataExportData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * View a data export
     * @param dataType 
     * @param requestId 
     * @param apiToken 
     */
    public async viewDataExportById(dataType: string, requestId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dataType' is not null or undefined
        if (dataType === null || dataType === undefined) {
            throw new RequiredError("DataExportApi", "viewDataExportById", "dataType");
        }


        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new RequiredError("DataExportApi", "viewDataExportById", "requestId");
        }



        // Path Params
        const localVarPath = '/v3/export/{data_type}/{request_id}'
            .replace('{' + 'data_type' + '}', encodeURIComponent(String(dataType)))
            .replace('{' + 'request_id' + '}', encodeURIComponent(String(requestId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class DataExportApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDataExportsByMessageChannelOrUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDataExportsByMessageChannelOrUser(response: ResponseContext): Promise<InlineResponse20063 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20063 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20063", ""
            ) as InlineResponse20063;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20063 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20063", ""
            ) as InlineResponse20063;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to registerAndScheduleDataExport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async registerAndScheduleDataExport(response: ResponseContext): Promise<InlineResponse20063ExportedData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20063ExportedData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20063ExportedData", ""
            ) as InlineResponse20063ExportedData;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20063ExportedData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20063ExportedData", ""
            ) as InlineResponse20063ExportedData;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewDataExportById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewDataExportById(response: ResponseContext): Promise<InlineResponse20064 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20064 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20064", ""
            ) as InlineResponse20064;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20064 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20064", ""
            ) as InlineResponse20064;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}