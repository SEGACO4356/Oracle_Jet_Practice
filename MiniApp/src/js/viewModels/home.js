define(["accUtils"],
    function (accUtils) {
        function HomeViewModel() {
            const self = this;

            self.connected = function () {
                accUtils.announce("Home page loaded")
                document.title = "About"
            }
            self.disconnected = function() {

            };
            self.transitionCompleted = function() {

            }
        }
        return HomeViewModel;
    }
)