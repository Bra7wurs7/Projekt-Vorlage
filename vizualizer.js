/**
 * In diesem Objekt implementieren sie was sie in Tutorial 3 gelernt haben.
 * Fügen sie einen Button in die Toolbar des Browsers ein.
 * Wenn der Button geklickt wird, dann rufen sie die Methode vizualize auf.
 * 
 * Falls sie Fehlermeldungen erhalten, dass 'this.getCurrentTabDomain' nicht
 * gefunden werden kann, dann fehlt eine getVizualizeListener methode. Siehe
 * Processor bzw. siehe Kommentar in Capturer.
 * 
 * Erledigen Sie die TODOs
 */

const Vizualizer = {

    /**
     * Do things here that need to be done when add-on is loaded.
     */
    init() {
        //TODO: create Toolbar Icon and register callback.
    },

    /**
     * Returns the domain name of the website loaded in the active tab
     */
    getCurrentTabDomain() {
        //TODO: Add code here, to return the Domain of the current tab.
        //When the MNI-Wesite is open, it should return 'mni.thm.de'
        //right now for testing it always returns 'web.de'

        return 'web.de';
    },

    /**
     * This method vizualizes, the current amount of CSRs on the current tab.
     * This method is called when the Toolbar Button gets clicked.
     */
    vizualize() {
        console.log('Vizualizer button clicked.');
        var currentTabDomain = this.getCurrentTabDomain();
        var csr = Processor.getCSR(currentTabDomain);

        var message = 'You are currently on ' + currentTabDomain;
        if (csr[currentTabDomain]) {
            var csrCount = Object.keys(csr[currentTabDomain]).length;
            message += '. Here are ' + csrCount + ' 3rd party domains referenced.';
        }

        var alertWindow = 'alert("' + message + '");';
        browser.tabs.executeScript({code : alertWindow});
        
        //TODO: Extend this output with more useful information.
        //What kind of resources are loaded? What else do we know?
    }

};

Vizualizer.init();

