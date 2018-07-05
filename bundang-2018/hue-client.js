WoT.fetch("file://./hue.jsonld").then( async (td) => {

        let hue = WoT.consume(td);
        console.info("=== TD ===");
        console.info(td);
        console.info("==========");

        hue.properties.state.get().then( (res) => {
                console.info("State:", res);
        }).catch( (err) => {
                console.error("State get error:", err.message);
        });

}).catch( (err) => { console.error("Fetch TD error:", err.message); });
