define [
    "jquery"
    "backbone"
    "views/misc/app"
    "views/home/main"
    ], ($, Backbone, AppView, DefaultView) ->
  
    class Router extends Backbone.Router

        initialize: ->

            @appView = new AppView

            # Enable pushState for compatible browsers
            enablePushState = true

            # Disable for older browsers
            pushState = !!(enablePushState && window.history && window.history.pushState)

            # Tells Backbone to start watching for hashchange events
            Backbone.history.start({pushState: pushState})


        
        # All of your Backbone Routes (add more)
        routes:

            # When there is no hash bang on the url, the home method is called
            "": "home"


        home: ->

            defaultView = new DefaultView
            @appView.showView(defaultView)


        # Returns the Router class
        Router