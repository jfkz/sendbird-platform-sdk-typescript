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

export class UpdateAnnouncementByIdData {
    /**
    * Specifies the unique ID of the announcement to update.
    */
    'uniqueId': string;
    /**
    * Specifies an action to take on the announcement. If this property is updated, other specified properties in the request are not effective. Acceptable values are limited to remove, pause, resume, and cancel. The [Announcement actions](#2-update-an-announcement-3-how-to-change-announcement-status) table explains each action in detail.
    */
    'action'?: string;
    /**
    * Specifies the name of an announcement group to retrieve. If not specified, all announcements are returned, regardless of their group.
    */
    'announcementGroup'?: string;
    /**
    * Determines whether to create a new channel if there is no existing channel that matches with the target options including target_at and target_list.
    */
    'createChannel'?: boolean;
    /**
    * Specifies the name of the channel. (Default: Group Channel)
    */
    'createChannelOptionsName'?: string;
    /**
    * Specifies the URL of the cover image.
    */
    'createChannelOptionsCoverUrl'?: string;
    /**
    * Specifies the custom channel type.
    */
    'createChannelOptionsCustomType'?: string;
    /**
    * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
    */
    'createChannelOptionsData'?: string;
    /**
    * Determines whether to create a [distinct](/docs/chat/v3/platform-api/guides/channel-types#2-group-channel) channel. (Default: true)
    */
    'createChannelOptionsDistinct'?: string;
    /**
    * Specifies the unique ID of the announcement sender.
    */
    'messageUserId'?: string;
    /**
    * Specifies the content of the message.
    */
    'messageContent'?: string;
    /**
    * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
    */
    'messageData'?: string;
    /**
    * Determines whether to turn on push notification for the announcement. If set to true, push notifications will be sent for announcements.
    */
    'enablePush'?: boolean;
    /**
    * Specifies the time to start the announcement, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. (Default: current timestamp)
    */
    'scheduledAt'?: number;
    /**
    * Specifies the time to permanently end the announcement, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format, even if the announcement is not sent to all its targets.
    */
    'endAt'?: number;
    /**
    * Specifies the time to temporarily put the announcement on hold in UTC. The string is represented in HHMM format. This property should be specified in conjunction with the resume_at below.
    */
    'ceaseAt'?: string;
    /**
    * Specifies the time to automatically resume the on-hold announcement in UTC. The string is represented in HHMM format. This property should be specified in conjunction with the cease_at above.
    */
    'resumeAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uniqueId",
            "baseName": "unique_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "announcementGroup",
            "baseName": "announcement_group",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannel",
            "baseName": "create_channel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createChannelOptionsName",
            "baseName": "create_channel_options.name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsCoverUrl",
            "baseName": "create_channel_options.cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsCustomType",
            "baseName": "create_channel_options.custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsData",
            "baseName": "create_channel_options.data",
            "type": "string",
            "format": ""
        },
        {
            "name": "createChannelOptionsDistinct",
            "baseName": "create_channel_options.distinct",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageUserId",
            "baseName": "message.user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageContent",
            "baseName": "message.content",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageData",
            "baseName": "message.data",
            "type": "string",
            "format": ""
        },
        {
            "name": "enablePush",
            "baseName": "enable_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduled_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "ceaseAt",
            "baseName": "cease_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "resumeAt",
            "baseName": "resume_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateAnnouncementByIdData.attributeTypeMap;
    }

    public constructor() {
    }
}
