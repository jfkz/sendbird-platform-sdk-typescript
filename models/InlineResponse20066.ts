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

import { InlineResponse20066Webhook } from './InlineResponse20066Webhook';
import { HttpFile } from '../http/http';

export class InlineResponse20066 {
    'webhook'?: InlineResponse20066Webhook;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "InlineResponse20066Webhook",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20066.attributeTypeMap;
    }

    public constructor() {
    }
}
