angular
  .module("phonecatApp")
  .factory("phoneFactory", function() {
    var data = [
      {
        name: "Nexus S",
        snippet: "Fast just got faster with Nexus S."
      },
      {
        name: "Motorola XOOM™ with Wi-Fi",
        snippet: "The Next, Next Generation tablet."
      },
      {
        name: "MOTOROLA XOOM™",
        snippet: "The Next, Next Generation tablet."
      }
    ];

    function getPhones() {
      return data;
    }

    return { getPhones: getPhones };
  })
      