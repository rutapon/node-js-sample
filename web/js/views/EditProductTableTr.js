﻿/// <reference path="../../lib/jquery/jquery-2.1.1.js" />
/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || { models: {}, collections: {}, views: {} };

(function ($) {
    'use strict';

    function areYouSure(text1, text2, button, callback) {
        console.log('areYouSure');
        $("#sure .sure-1").text(text1);
        $("#sure .sure-2").text(text2);
        $("#sure .sure-do").text(button).on("click", function () {
            callback();
            $(this).off("click");
        });
        $("#sure").popup('open');
    }

    $(function () {
        app.views.EditProductTableTr = Backbone.View.extend({

            tagName: 'tr',
            className: 'EditProductTableTr',

            events: {
                'change  input': 'inputChange',
                'click .editButton': 'editClick',
                'click .cancelEditButton': 'cancelEditClick',
                'click .saveButton': 'saveClick',
                'click .deleteButton': 'deleteEditClick'
            },

            initialize: function () {
                //this.model.on('change', this.render, this);
                this.model.on('destroy', this.remove, this);
                //this.model.on('removeUi', this.remove, this);
                this.model.on('remove', this.remove, this);

                this.ShowStockTableTrTemplate = _.template($('#ShowStockTable-tr-template').html());
                this.EditStockTableTrTemplate = _.template($('#EditStockTable-tr-template').html());

            },

            // Re-rendering the App just means refreshing the statistics -- the rest
            // of the app doesn't change.
            render: function () {
                this.$el.html(this.ShowStockTableTrTemplate(this.model.toJSON()));
                this.$el.enhanceWithin();
                //this.$el.find('input').button();
                return this;
            },
            remove: function () {
                var self = this;
                areYouSure("Are you sure?", "Delete data from server?", "Ok", function () {

                    self.$el.remove();
                });
            },
            removeProduct: function () {
                this.model.destroy();
            },

            editClick: function () {
                this.editingModel = this.model.clone();

                this.$el.html(this.EditStockTableTrTemplate(this.model.toJSON()));
                this.$el.enhanceWithin();
            },
            cancelEditClick: function () {
                this.render();
            },
            saveClick: function () {
                var self = this;

                areYouSure("Are you sure?", "Save data to server?", "Ok", function () {

                    if (self.editingModel.isValid()) {
                        self.editingModel.update(function (result) {
                            self.model.set(self.editingModel.toJSON());
                            self.render();
                        });
                    } else {

                    }
                });
            },
            deleteEditClick: function () {
                //this.model.isEmty();
                var self = this;
                this.model.destroy(function (result) {
                    //this.model.remove();
                    if (result) { self.model.collection.remove(self.model) }
                    else {
                        alert('errror result=' + result)
                    }

                });
            },
            inputChange: function (ev) {
                var targetElem = $(ev.target);
                var dataType = targetElem.attr('data-type');
                var value = targetElem.val();

                this.editingModel.set(dataType, value);
            }
        });
    });
})(jQuery);
