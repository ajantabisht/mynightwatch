module.exports ={
  "src_folders" : ["./test/scenario"],
  "output_folder" : "./test/reports",
  "custom_commands_path" : "./scripts",
  "page_objects_path" : "",
  "custom_assertions_path" : "",
  "globals_path" : "",
  "live_output" : false,
  "parallel_process_delay" : 10,
  "disable_colors": false,
  "test_workers" : false,

  "selenium" : {
    "start_process" : false,
    "server_path" : "",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities" : {
        "browserName" : "chrome",
        "javascriptEnabled" : true
      }
    }
  }
  
}


