/**
 * In diese Datei kommt jeglicher Code, der sich darum kümmert,
 * Web Requests abzufangen. Wie das geht, steht im Tutorial 2 und auch in dem
 * Code den die Datenerfassunggruppe letzte Woche entwickelt hat. Ihr Job ist
 * es, dass jeder Web Requests den der Browser absendet erfasst wird und
 * an den processor übermittelt wird.
 * 
 * 1. Schauen sie sich processor.js an, um zu verstehen was sie hier tun müssen.
 * 2. Überlegen sie sich, ob sie capturer.js als Klasse, als Objekt oder als
 *    Spaghetti Code implementieren und begründen sie Ihre Entscheidung in
 *    einem Kommentar.
 * 3. Lesen sie die Aufgabenstellung nochmals genau durch. Üerprüfen sie ob der
 *    Code aus Tutorial 2 tatsächlich die Requests abfängt die der Browser auch
 *    wirklich sendet. Unter Umständen finden sie in der dazugehörigen
 *    Dokumentation weitere Callback Möglichkeiten die zu einem anderen Zeitpunkt
 *    des Requests ausgeführt werden. (Vor dem Request, nach dem Request, etc.)
 * 4. Treffen sie eine Entscheidung, welchen dieser Hooks sie verwenden möchten.
 *    Dokumentieren sie ihre Entscheidung in einem Kommentar.
 * 5. Entfernen sie diese Aufgabenstellung und schreiben sie Kommentare auf
 *    Englisch
 */


 //Somehere here you should hand over your data to Processor.trackRequest
 //do it like this:
 //
 // var trackRequestListener = Processor.getTrackRequestListener();
 // <YOUR CODE HERE>.addListener(trackRequestListener, <YOUR CODE HERE>