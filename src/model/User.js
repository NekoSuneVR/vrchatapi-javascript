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
import DeveloperType from './DeveloperType';
import UserState from './UserState';
import UserStatus from './UserStatus';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     * @param id {String} 
     * @param username {String} 
     * @param displayName {String} 
     * @param userIcon {String} 
     * @param bio {String} 
     * @param bioLinks {Array.<String>} 
     * @param profilePicOverride {String} 
     * @param statusDescription {String} 
     * @param currentAvatarImageUrl {String} 
     * @param currentAvatarThumbnailImageUrl {String} 
     * @param fallbackAvatar {String} 
     * @param state {module:model/UserState} 
     * @param tags {Array.<String>} 
     * @param developerType {module:model/DeveloperType} 
     * @param lastLogin {Date} 
     * @param lastPlatform {String} 
     * @param allowAvatarCopying {Boolean} 
     * @param status {module:model/UserStatus} 
     * @param dateJoined {Date} 
     * @param isFriend {Boolean} 
     * @param friendKey {String} 
     */
    constructor(id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey) { 
        
        User.initialize(this, id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey) { 
        obj['id'] = id;
        obj['username'] = username;
        obj['displayName'] = displayName;
        obj['userIcon'] = userIcon;
        obj['bio'] = bio;
        obj['bioLinks'] = bioLinks;
        obj['profilePicOverride'] = profilePicOverride;
        obj['statusDescription'] = statusDescription;
        obj['currentAvatarImageUrl'] = currentAvatarImageUrl;
        obj['currentAvatarThumbnailImageUrl'] = currentAvatarThumbnailImageUrl;
        obj['fallbackAvatar'] = fallbackAvatar;
        obj['state'] = state;
        obj['tags'] = tags;
        obj['developerType'] = developerType;
        obj['last_login'] = lastLogin;
        obj['last_platform'] = lastPlatform;
        obj['allowAvatarCopying'] = allowAvatarCopying;
        obj['status'] = status;
        obj['date_joined'] = dateJoined;
        obj['isFriend'] = isFriend;
        obj['friendKey'] = friendKey;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('userIcon')) {
                obj['userIcon'] = ApiClient.convertToType(data['userIcon'], 'String');
            }
            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('bioLinks')) {
                obj['bioLinks'] = ApiClient.convertToType(data['bioLinks'], ['String']);
            }
            if (data.hasOwnProperty('profilePicOverride')) {
                obj['profilePicOverride'] = ApiClient.convertToType(data['profilePicOverride'], 'String');
            }
            if (data.hasOwnProperty('statusDescription')) {
                obj['statusDescription'] = ApiClient.convertToType(data['statusDescription'], 'String');
            }
            if (data.hasOwnProperty('currentAvatarImageUrl')) {
                obj['currentAvatarImageUrl'] = ApiClient.convertToType(data['currentAvatarImageUrl'], 'String');
            }
            if (data.hasOwnProperty('currentAvatarThumbnailImageUrl')) {
                obj['currentAvatarThumbnailImageUrl'] = ApiClient.convertToType(data['currentAvatarThumbnailImageUrl'], 'String');
            }
            if (data.hasOwnProperty('fallbackAvatar')) {
                obj['fallbackAvatar'] = ApiClient.convertToType(data['fallbackAvatar'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = UserState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('developerType')) {
                obj['developerType'] = DeveloperType.constructFromObject(data['developerType']);
            }
            if (data.hasOwnProperty('last_login')) {
                obj['last_login'] = ApiClient.convertToType(data['last_login'], 'Date');
            }
            if (data.hasOwnProperty('last_platform')) {
                obj['last_platform'] = ApiClient.convertToType(data['last_platform'], 'String');
            }
            if (data.hasOwnProperty('allowAvatarCopying')) {
                obj['allowAvatarCopying'] = ApiClient.convertToType(data['allowAvatarCopying'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = UserStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('date_joined')) {
                obj['date_joined'] = ApiClient.convertToType(data['date_joined'], 'Date');
            }
            if (data.hasOwnProperty('isFriend')) {
                obj['isFriend'] = ApiClient.convertToType(data['isFriend'], 'Boolean');
            }
            if (data.hasOwnProperty('friendKey')) {
                obj['friendKey'] = ApiClient.convertToType(data['friendKey'], 'String');
            }
            if (data.hasOwnProperty('worldId')) {
                obj['worldId'] = ApiClient.convertToType(data['worldId'], 'String');
            }
            if (data.hasOwnProperty('instanceId')) {
                obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} username
 */
User.prototype['username'] = undefined;

/**
 * @member {String} displayName
 */
User.prototype['displayName'] = undefined;

/**
 * @member {String} userIcon
 */
User.prototype['userIcon'] = undefined;

/**
 * @member {String} bio
 */
User.prototype['bio'] = undefined;

/**
 * @member {Array.<String>} bioLinks
 */
User.prototype['bioLinks'] = undefined;

/**
 * @member {String} profilePicOverride
 */
User.prototype['profilePicOverride'] = undefined;

/**
 * @member {String} statusDescription
 */
User.prototype['statusDescription'] = undefined;

/**
 * @member {String} currentAvatarImageUrl
 */
User.prototype['currentAvatarImageUrl'] = undefined;

/**
 * @member {String} currentAvatarThumbnailImageUrl
 */
User.prototype['currentAvatarThumbnailImageUrl'] = undefined;

/**
 * @member {String} fallbackAvatar
 */
User.prototype['fallbackAvatar'] = undefined;

/**
 * @member {module:model/UserState} state
 */
User.prototype['state'] = undefined;

/**
 * @member {Array.<String>} tags
 */
User.prototype['tags'] = undefined;

/**
 * @member {module:model/DeveloperType} developerType
 */
User.prototype['developerType'] = undefined;

/**
 * @member {Date} last_login
 */
User.prototype['last_login'] = undefined;

/**
 * @member {String} last_platform
 */
User.prototype['last_platform'] = undefined;

/**
 * @member {Boolean} allowAvatarCopying
 */
User.prototype['allowAvatarCopying'] = undefined;

/**
 * @member {module:model/UserStatus} status
 */
User.prototype['status'] = undefined;

/**
 * @member {Date} date_joined
 */
User.prototype['date_joined'] = undefined;

/**
 * @member {Boolean} isFriend
 */
User.prototype['isFriend'] = undefined;

/**
 * @member {String} friendKey
 */
User.prototype['friendKey'] = undefined;

/**
 * @member {String} worldId
 */
User.prototype['worldId'] = undefined;

/**
 * @member {String} instanceId
 */
User.prototype['instanceId'] = undefined;

/**
 * @member {String} location
 */
User.prototype['location'] = undefined;






export default User;

