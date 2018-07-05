WoT.fetch("file://./light.jsonld").then( async (td) => {

        let light = WoT.consume(td);
        console.info("=== TD ===");
        console.info(td);
        console.info("==========");

        light.actions.SwitchOn.run( {"on":true} ).then( (res) => {
                console.info("SwitchState:\n", res);
        }).catch( (err) => {
                console.error("State get error:", err.message);
        });
}).catch( (err) => { console.error("Fetch TD error:", err.message); });
