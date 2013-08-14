module.exports = function(config) {
   config.set({

      frameworks:['jasmine'],

      // base path, that will be used to resolve files and exclude
      basePath : '..',
      
      // list of files / patterns to load in the browser
      files : [   
         'test/libs/sinon.js'
      ,  'test/libs/sinon-ie.js'
      ,  'test/libs/*.js'
      ,  'dist/oboe.js'
      
      ,  'test/specs/polyfillsTest.spec.js'
      ,  'test/specs/endToEnd.integration.spec.js'
      ],
      
      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel : config.LOG_INFO,
           
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch : false,
            
      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun : true

   });
};
