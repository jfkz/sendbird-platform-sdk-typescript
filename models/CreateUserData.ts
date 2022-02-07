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

import { HttpFile } from '../http/http';

export class CreateUserData {
    /**
    * Specifies a user's unique ID, which is used to sign into the Sendbird service. The length is limited to 80 characters.<br /><br /> Do not use PII (Personally Identifiable Information) of your service, such as user email address, legal name or phone number.
    */
    'userId': string;
    /**
    * Specifies a nickname for a new user. The length is limited to 80 characters.
    */
    'nickname': string;
    /**
    * Specifies the URL of the user's profile image. If left empty, no profile image is set for the user. The length is limited to 2,048 characters.<br /><br /> The [domain filter](/docs/chat/v3/platform-api/guides/filter-and-moderation#2-domain-filter) filters out the request if the value of this property matches the filter's domain set.
    */
    'profileUrl': string;
    /**
    * Uploads the file of the user's profile image. An acceptable image is limited to `JPG` (.jpg), `JPEG` (.jpeg), or `PNG` (.png) file of up to 25 MB.
    */
    'profileFile'?: HttpFile;
    /**
    * Determines whether to create an access token for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, an access token is not required when the user logs in. (Default: false)
    */
    'issueAccessToken'?: boolean;
    /**
    * Specifies an array of unique keys of the user which is provided to Sendbird server for discovering friends. By using the keys, the server can identify and match the user with other users.
    */
    'discoveryKeys'?: Array<string>;
    /**
    * Specifies a `JSON` object to store key-value items for additional user information such as phone number, email or a long description of the user. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
    */
    'metadata'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileFile",
            "baseName": "profile_file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "issueAccessToken",
            "baseName": "issue_access_token",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "discoveryKeys",
            "baseName": "discovery_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserData.attributeTypeMap;
    }

    public constructor() {
    }
}
