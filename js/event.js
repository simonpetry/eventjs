class Event {

    constructor() {

        // List of callbacks
        this.eventCallbacks = {};

    }

    /**
     * Emit an event
     * @param  {string} eventName The name of the event to emit
     * @param  {object} data      The data to pass to the callback
     */
    emit( eventName, data ) {

        // Cache the reference
        let tempCallback = this.eventCallbacks[eventName];

        if ( typeof tempCallback === 'undefined' ) {
            return;
        }

        // Call the callbacks
        tempCallback.forEach( ( v, i ) => {
            tempCallback[i]( data );
        });

    }

    /**
     * Add/or reuse an event and add the callback to an array
     * @param  {string}   eventName The name of th event to add/reuse
     * @param  {Function} callback  The function expression to call when the event is fired
     */
    on( eventName, callback ) {

        // EventName and callback are required
        if ( typeof eventName === 'undefined' || typeof callback === 'undefined' ) {
            return;
        }

        // If this is a new callback add it, otherwise use the existing
        this.eventCallbacks[eventName] = this.eventCallbacks[eventName] || [];

        // Add the callback to the array for  this type
        this.eventCallbacks[eventName].push( callback );

    }

    /**
     * Remove the event
     * @param  {string} eventName The name of the event to destroy
     */
    off( eventName ) {
        delete this.eventCallbacks[eventName];
    }

}
