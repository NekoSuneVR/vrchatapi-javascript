/**
 * VRChat API Documentation
 * ![VRChat API Banner](https://raw.githubusercontent.com/vrchatapi/vrchatapi.github.io/master/assets/apibanner.png)  # VRChat API Documentation This project is an [OPEN Open Source Project](https://openopensource.org)  Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.  ## Disclaimer  This is the official response of the VRChat Team (from Tupper more specifically) on the usage of the VRChat API.  > **Use of the API using applications other than the approved methods (website, VRChat application) are not officially supported. You may use the API for your own application, but keep these guidelines in mind:** > * We do not provide documentation or support for the API. > * Do not make queries to the API more than once per 60 seconds. > * Abuse of the API may result in account termination. > * Access to API endpoints may break at any given time, with no warning.  As stated, this documentation was not created with the help of the official VRChat team. Therefore this documentation is not an official documentation of the VRChat API and may not be always up to date with the latest versions. If you find that a page or endpoint is not longer valid please create an issue and tell us so we can fix it.  ## Get in touch with us!  [https://discord.gg/qjZE9C9fkB#vrchat-api](https://discord.gg/qjZE9C9fkB)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: me@ruby.js.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NotificationType from './NotificationType';

/**
 * The Notification model module.
 * @module model/Notification
 * @version 1.0.0
 */
class Notification {
    /**
     * Constructs a new <code>Notification</code>.
     * 
     * @alias module:model/Notification
     * @param id {String} 
     * @param senderUserId {String} 
     * @param senderUsername {String} 
     * @param type {module:model/NotificationType} 
     * @param message {String} 
     * @param details {String} **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
     * @param seen {Boolean} 
     * @param createdAt {Date} 
     */
    constructor(id, senderUserId, senderUsername, type, message, details, seen, createdAt) { 
        
        Notification.initialize(this, id, senderUserId, senderUsername, type, message, details, seen, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, senderUserId, senderUsername, type, message, details, seen, createdAt) { 
        obj['id'] = id;
        obj['senderUserId'] = senderUserId;
        obj['senderUsername'] = senderUsername;
        obj['type'] = type;
        obj['message'] = message;
        obj['details'] = details || '{}';
        obj['seen'] = seen || false;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('senderUserId')) {
                obj['senderUserId'] = ApiClient.convertToType(data['senderUserId'], 'String');
            }
            if (data.hasOwnProperty('senderUsername')) {
                obj['senderUsername'] = ApiClient.convertToType(data['senderUsername'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = NotificationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('seen')) {
                obj['seen'] = ApiClient.convertToType(data['seen'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Notification.prototype['id'] = undefined;

/**
 * @member {String} senderUserId
 */
Notification.prototype['senderUserId'] = undefined;

/**
 * @member {String} senderUsername
 */
Notification.prototype['senderUsername'] = undefined;

/**
 * @member {module:model/NotificationType} type
 */
Notification.prototype['type'] = undefined;

/**
 * 
 * @member {String} message
 */
Notification.prototype['message'] = undefined;

/**
 * **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
 * @member {String} details
 * @default '{}'
 */
Notification.prototype['details'] = '{}';

/**
 * @member {Boolean} seen
 * @default false
 */
Notification.prototype['seen'] = false;

/**
 * @member {Date} created_at
 */
Notification.prototype['created_at'] = undefined;






export default Notification;

