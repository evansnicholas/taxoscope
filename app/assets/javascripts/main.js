/*global require, requirejs */

/*jshint strict:false */

requirejs.config({
  paths: {
    'typeahead': ['../lib/typeaheadjs/typeahead.bundle'],
    'd3': ['../lib/d3js/d3'],
    'underscore': ['../lib/underscorejs/underscore'],
    'highlightjs': ['../bower_components/highlightjs/highlight.pack'],
    'bootstrap' : ['../lib/bootstrap/bootstrap'],
    'jquery' : ['../lib/jquery/jquery'],
    'angular': ['../lib/angularjs/angular'],
    'angular-route': ['../lib/angularjs/angular-route'],
    'angular-ui': ['../bower_components/angular-bootstrap/ui-bootstrap-tpls'],
  },
  shim: {
    'underscore': {
      exports : 'underscore'
    },
    'jquery': {
      exports : 'jquery'
    },
    'typeahead': {
      exports : 'typeahead'
    },
    'angular': {
      exports : 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports : 'angular'
    },
    'highlightjs': {
      exports : 'hljs'
    },
    'angular-ui' : {
      exports: 'angular-ui'
    }
  }
});

require(['jquery', './controllers', 'angular', 'angular-route'],
  function($, controllers, angular) {
   
    angular.module('taxoscopeApp', ['ngRoute', 'taxoscopeControllers']).
      config(['$routeProvider', function($routeProvider) {
      $routeProvider.
        when('/concept/:view?', { 
          templateUrl: 'assets/html/concept-viewer.html',
          controller: 'ConceptCtrl'
        }).
        when('/presentation', { 
          templateUrl: 'assets/html/presentation-viewer.html',
          controller: 'PresCtrl'
        }).
        when('/dtsGraph', { 
          templateUrl: 'assets/html/dts-graph-viewer.html',
          controller: 'DtsCtrl'
        }).
        when('/taxonomyDoc', {
          templateUrl: 'assets/html/taxonomy-document-viewer.html',
          controller: 'TaxoDocCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);

    angular.bootstrap(document, ['taxoscopeApp']);
   
});
