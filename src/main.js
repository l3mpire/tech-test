import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

if (Meteor.isClient) {
    Template.appBlock.onCreated(() => { });

    Template.appBlock.helpers({ });

    Template.appBlock.events({ });
}

if (Meteor.isServer) {

}
