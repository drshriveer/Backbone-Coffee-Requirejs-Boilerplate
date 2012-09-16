// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone"], function($, Backbone) {
    var DefaultView;
    return DefaultView = (function(_super) {

      __extends(DefaultView, _super);

      function DefaultView() {
        return DefaultView.__super__.constructor.apply(this, arguments);
      }

      DefaultView.prototype.initialize = function(opts) {
        return _.bindAll(this);
      };

      DefaultView.prototype.render = function() {
        return this.$el.html('HAI WORLD');
      };

      DefaultView;


      return DefaultView;

    })(Backbone.View);
  });

}).call(this);
