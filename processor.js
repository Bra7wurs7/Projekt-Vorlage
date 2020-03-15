/**
 * The processor is responsible for storing incoming requests and for filtering
 * those requests in order to display them in the vizualizer.
 * 
 * Do not remove any existing code in this class. Only add your own code.
 * 
 * PLEASE FIX THE COMMENTS THAT ASK FOR FIXING AND THEN REMOVE THIS NOTICE
 * REGARDING THE FIXING OF COMMENTS
 * 
 * REPLACE ALL THE //TODO: COMMENTS WITH THE REQUIRED FUNCTIONALITY AND EXPLAIN
 * YOUR SOLUTION IN A COMMENT
 */

const Processor = {

    /**
     * Dictionary to store a list of resources ordered by the domain that
     * requested them
     */
    resourcesByDomain: {},


    /**
     * Pass in the web request captured in the capturer. One request at a time.
     * If all works, there should be a console output.
     * @param {WebRequest} req 
     */
    trackRequest(req) {
        var currentDomain = new URL(req.documentUrl).hostname;
        var calledDomain = new URL(req.url).hostname;
        var isCrossDomain = currentDomain != calledDomain;
        //TODO: isCrossDomain in line 30 shall be determined differently
        //      if currentDomain == web.de and calledDomain == subdomain.web.de
        //      then this shall be false.
        //      if currentDomain == subdomain.web.de and calledDomain == web.de
        //      then this shall be true. Simular to how cookies work.
        //      thm.de is the owner of mni.thm.de but not the other way round

        //Only handle requests, that are cross domain.
        if (isCrossDomain)
        {
            // REPLACE THIS COMMENT WITH AN EXPLANATION WHAT HAPPENS HERE
            if (typeof this.resourcesByDomain[currentDomain] === 'undefined')
            {
                this.resourcesByDomain[currentDomain] = {};
            }
            // REPLACE THIS COMMENT WITH AN EXPLANATION WHAT HAPPENS HERE
            if (typeof this.resourcesByDomain[currentDomain][calledDomain] === 'undefined')
            {
                this.resourcesByDomain[currentDomain][calledDomain] = {
                    types: []
                };
            }
            // REPLACE THIS COMMENT WITH AN EXPLANATION WHAT HAPPENS HERE
            if (this.resourcesByDomain[currentDomain][calledDomain].types.indexOf(req.type) === -1)
            {
                this.resourcesByDomain[currentDomain][calledDomain].types.push(req.type);
            }
        }

        // After each request, there is this console output showing the current
        // state of the stored data.
        console.log('----------------\nresourcesByDomain:\n' + JSON.stringify(this.resourcesByDomain, null, 4));

        // Examine this data structure carefully. Feel free to change it to your
        // needs. Make sure you do not need to change the signatures of any of
        // the methods here in this object.
    },

    /**
     * This creates a listener around the trackRequest method, so it can
     * be called from within a callbak.
     */
    getTrackRequestListener() {
        return this.trackRequest.bind(this);
    },


    /**
     * Call this method either like this: Processor.getCSR('web.de')
     * or like this:                      Processor.getCSR(['web.de', 'gmx.net])
     * 
     * REPLACE THIS LINE WITH A LINE DESCRIBING THE ...-NOTATION IN THE SIGNATURE
     * 
     * This method shall be called from within the vizualizer, whenever the user
     * wants to see the data.
     * @param  {...string} domains 
     */
    getCSR(...domains) {
        var results = {};
        for (var i = 0; i < domains.length; i++) {
            if (this.resourcesByDomain[domains[i]]) {
                results[domains[i]] = this.resourcesByDomain[domains[i]];
            }
        }
        return results;
    }


};

/**
 * THIS OBJECT WAS FULLY FUNCTIONAL. IF YOU CHANGE THINGS AND IT STOPS WORKING
 * UNDO YOUR CHANGES
 */