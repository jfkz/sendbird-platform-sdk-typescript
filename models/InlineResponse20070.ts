/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InlineResponse20070ReportLogs } from './InlineResponse20070ReportLogs';
import { HttpFile } from '../http/http';

export class InlineResponse20070 {
    'reportLogs'?: Array<InlineResponse20070ReportLogs>;
    'next'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "reportLogs",
            "baseName": "report_logs",
            "type": "Array<InlineResponse20070ReportLogs>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20070.attributeTypeMap;
    }

    public constructor() {
    }
}
