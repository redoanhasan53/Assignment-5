Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ans: getElementbyID returns specific element from ID. 
     getElementbyClass returns html collection from class,
    querySelector returns specific element from css selector,
    querySelectorAll returns static node list from css selector

2. How do you **create and insert a new element into the DOM**?

ans: first of all I will create a element. after that i will set a content like text, html, attribute. and finally added to the DOM.

3. What is **Event Bubbling** and how does it work?

ans: event bubbling:: event bubbling is when an event is triggerd on a child element and event propagate to the parent element.

how its work:: first of all trigger on a child (button) and go to the parent (div) and finally bubble on the body. 

4. What is **Event Delegation** in JavaScript? Why is it useful?

ans:: It’s a method where instead of putting an event listener on each child element, you put one listener on their common parent. The parent 'delegates' the event handling by checking which child triggered the event.

why useful:: Uses event bubbling: events travel up from child → parent. Works for elements added dynamically. Reduces memory usage and complexity. thats why Event Delegation is usefull.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

ans::
     preventDefault():: Stops the default browser action for an event. Use it when you want to override normal behavior, e.g., prevent a form from submitting or a link from navigating.

     stopPropagation():: Stops the event from bubbling up (or capturing down) the DOM.Use it when you want the event to stay on the current element and not trigger parent handlers.





