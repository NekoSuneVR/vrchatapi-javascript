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

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1.0.0
 */
class InlineResponse2003 {
    /**
     * Constructs a new <code>InlineResponse2003</code>.
     * @alias module:model/InlineResponse2003
     * @param isFriend {Boolean} 
     * @param outgoingRequest {Boolean} 
     * @param incomingRequest {Boolean} 
     */
    constructor(isFriend, outgoingRequest, incomingRequest) { 
        
        InlineResponse2003.initialize(this, isFriend, outgoingRequest, incomingRequest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isFriend, outgoingRequest, incomingRequest) { 
        obj['isFriend'] = isFriend || false;
        obj['outgoingRequest'] = outgoingRequest || false;
        obj['incomingRequest'] = incomingRequest || false;
    }

    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();

            if (data.hasOwnProperty('isFriend')) {
                obj['isFriend'] = ApiClient.convertToType(data['isFriend'], 'Boolean');
            }
            if (data.hasOwnProperty('outgoingRequest')) {
                obj['outgoingRequest'] = ApiClient.convertToType(data['outgoingRequest'], 'Boolean');
            }
            if (data.hasOwnProperty('incomingRequest')) {
                obj['incomingRequest'] = ApiClient.convertToType(data['incomingRequest'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isFriend
 * @default false
 */
InlineResponse2003.prototype['isFriend'] = false;

/**
 * @member {Boolean} outgoingRequest
 * @default false
 */
InlineResponse2003.prototype['outgoingRequest'] = false;

/**
 * @member {Boolean} incomingRequest
 * @default false
 */
InlineResponse2003.prototype['incomingRequest'] = false;






export default InlineResponse2003;

