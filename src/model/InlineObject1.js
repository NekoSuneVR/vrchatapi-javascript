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
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 1.0.0
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:model/InlineObject1
     * @param code {String} 
     */
    constructor(code) { 
        
        InlineObject1.initialize(this, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code) { 
        obj['code'] = code;
    }

    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
InlineObject1.prototype['code'] = undefined;






export default InlineObject1;

