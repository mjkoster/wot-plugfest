WoT.fetch("file://./tradfri.jsonld").then( async (td) => {

        let tradfri = WoT.consume(td);
        console.info("=== TD ===");
        console.info(td);
        console.info("==========");

        tradfri.properties.state.get().then( (res) => {
                console.info("State:", res);
        }).catch( (err) => {
                console.error("State get error:", err.message);
        });

}).catch( (err) => { console.error("Fetch TD error:", err.message); });
