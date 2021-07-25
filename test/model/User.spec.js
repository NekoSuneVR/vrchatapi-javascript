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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.vrchatapi);
  }
}(this, function(expect, vrchatapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new vrchatapi.User();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instane = new vrchatapi.User();
      //expect(instance).to.be.a(vrchatapi.User);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property userIcon (base name: "userIcon")', function() {
      // uncomment below and update the code to test the property userIcon
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property bio (base name: "bio")', function() {
      // uncomment below and update the code to test the property bio
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property bioLinks (base name: "bioLinks")', function() {
      // uncomment below and update the code to test the property bioLinks
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property profilePicOverride (base name: "profilePicOverride")', function() {
      // uncomment below and update the code to test the property profilePicOverride
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property statusDescription (base name: "statusDescription")', function() {
      // uncomment below and update the code to test the property statusDescription
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property currentAvatarImageUrl (base name: "currentAvatarImageUrl")', function() {
      // uncomment below and update the code to test the property currentAvatarImageUrl
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property currentAvatarThumbnailImageUrl (base name: "currentAvatarThumbnailImageUrl")', function() {
      // uncomment below and update the code to test the property currentAvatarThumbnailImageUrl
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property fallbackAvatar (base name: "fallbackAvatar")', function() {
      // uncomment below and update the code to test the property fallbackAvatar
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property developerType (base name: "developerType")', function() {
      // uncomment below and update the code to test the property developerType
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property lastLogin (base name: "last_login")', function() {
      // uncomment below and update the code to test the property lastLogin
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property lastPlatform (base name: "last_platform")', function() {
      // uncomment below and update the code to test the property lastPlatform
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property allowAvatarCopying (base name: "allowAvatarCopying")', function() {
      // uncomment below and update the code to test the property allowAvatarCopying
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property dateJoined (base name: "date_joined")', function() {
      // uncomment below and update the code to test the property dateJoined
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property isFriend (base name: "isFriend")', function() {
      // uncomment below and update the code to test the property isFriend
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property friendKey (base name: "friendKey")', function() {
      // uncomment below and update the code to test the property friendKey
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property worldId (base name: "worldId")', function() {
      // uncomment below and update the code to test the property worldId
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "instanceId")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new vrchatapi.User();
      //expect(instance).to.be();
    });

  });

}));
