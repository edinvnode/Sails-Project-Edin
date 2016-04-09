/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

    attributes: {

        firstname: {

            type: 'string',
            required: true,
            alphanumeric: true,
            //maxLength : 20,
            unique: true,
        },

        lastname: {

            type: 'string',
            required: true,
            alphanumeric: true,
            //maxLength : 20,
            //unique: true,
        },

        birthdate: {

            type: 'date',
            required: true,

        },



        username: {

            type: 'string',
            required: true,
            alphanumeric: true,
            maxLength: 20,
            unique: true,
        },

        gender: {
            type: 'string',
            enum: ['Male', 'Female', 'Other'],
            required: true,
        }

        image:
        {
        	type:'string',
        	defaultsTo:'https://www.colourbox.com/preview/11632019-jesus-faceless-avatar.jpg',
        }

    },
};