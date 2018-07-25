WoT.fetch("file://./motion.jsonld").then( async (td) => {

        let motion = WoT.consume(td);
        console.info("=== TD ===");
        console.info(td);
        console.info("==========");

        motion.events.MotionEvent.subscribe(data => {
                console.info("MotionEvent:", data);
       });
        motion.properties.MotionState.get().then( (res) => {
                console.info("MotionState:", res);
        }).catch( (err) => {
                console.error("State get error:", err.message);
        });
}).catch( (err) => { console.error("Fetch TD error:", err.message); });
