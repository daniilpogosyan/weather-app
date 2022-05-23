const pubsub = (() => {
  // is contain arrays of handlers of each event
  // events["event name"][handlerIndex]
  const events = {};

  function publish (eventName, args) {
    if (!events.hasOwnProperty(eventName)) {
      events[eventName] = []
    }
    events[eventName].forEach((handler) => handler(args))
    console.log('publish', events)
  }

  function subscribe (eventName, handler) {
    if (
        !events.hasOwnProperty(eventName)
        || !(handler instanceof Function) 
    ) {
      events[eventName] = []
    }
    events[eventName].push(handler);
    console.log('subbscribe', events)
  }

  function unsubscribe (eventName, handler) {
    if (!events.hasOwnProperty(eventName)) {
      return
    }
    
    const unsubscribedIndex = events[eventName].indexOf(handler);
    if (unsubscribedIndex > -1) {
      events[eventName].splice(unsubscribedIndex, 1);
    }
    console.log('unsubscribe', events)
  }

  return { publish, subscribe, unsubscribe }
})();