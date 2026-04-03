{
  const textQueue = [
    'Character: Elira Windwhisper\nAction: Arrived in the city of Frostholme\nDate: 2023-09-08 19:54:11',
    'Character: Arion Stormseeker\nAction: Defeated a dragon in Sunfire Plains\nDate: 2023-09-08 21:10:30',
    'Character: Selene Nightshade\nAction: Discovered a hidden treasure in Darkwood Forest\nDate: 2023-09-08 21:25:47',
    'Character: Gavric Ironfist\nAction: Arrived in the city of Skyreach\nDate: 2023-09-08 21:40:12',
    'Character: Freya Lightbringer\nAction: Travelled through the region of Stormcliff Heights\nDate: 2023-09-08 22:05:19',
    'Character: Eamon Shadowcloak\nAction: Escaped from prison in Golden Fields\nDate: 2023-09-08 22:15:43',
    'Character: Lyra Moonshadow\nAction: Travelled through the region of Moonshade Vale\nDate: 2023-09-08 20:50:56',
    'Character: Thalor Swiftblade\nAction: Travelled through the region of Moonshade Vale\nDate: 2023-09-08 20:47:43',
    'Character: Seraphina Flameheart\nAction: Arrived in the city of Sundew\nDate: 2023-09-08 22:30:00',
    'Character: Orion Starweaver\nAction: Travelled through the region of Crystal Lake\nDate: 2023-09-08 22:45:21'
  ];

  let index = 0;
  let queueIndex = 0;
  const speed = 100; 
  const deleteSpeed = 10; 
  const delay = 1000; 
  let text = '';
  let timeoutId: any = null;

  const typeEffect = () => {
    const htmlTextElement = document.getElementById("htmlText-1");
    if (!htmlTextElement) return;

    if (index < textQueue[queueIndex].length) {
      text += textQueue[queueIndex].charAt(index);
      htmlTextElement.innerHTML = text.replace(/\n/g, '<br>');
      index++;
      timeoutId = setTimeout(typeEffect, speed);
    } else {
      timeoutId = setTimeout(deleteEffect, delay);
    }
  }

  const deleteEffect = () => {
    const htmlTextElement = document.getElementById("htmlText-1");
    if (!htmlTextElement) return;

    if (index > 0) {
      text = text.substring(0, index - 1);
      htmlTextElement.innerHTML = text.replace(/\n/g, '<br>');
      index--;
      timeoutId = setTimeout(deleteEffect, deleteSpeed);
    } else {
      queueIndex = (queueIndex + 1) % textQueue.length;
      setTimeout(typeEffect, delay);
    }
  }

  const start = () => {
    if (timeoutId) clearTimeout(timeoutId);
    index = 0;
    text = '';
    
    // Increased delay to ensure SPA navigation has finished morphing the DOM
    setTimeout(() => {
      if (document.getElementById("htmlText-1")) {
        typeEffect();
      }
    }, 500);
  }

  document.addEventListener("nav", start);
  
  // Register cleanup only if the function exists (SPA mode)
  if (typeof window.addCleanup === "function") {
    window.addCleanup(() => {
        if (timeoutId) clearTimeout(timeoutId);
    });
  }

  // Initial start
  if (document.readyState === "complete" || document.readyState === "interactive") {
    start();
  } else {
    window.addEventListener("DOMContentLoaded", start);
  }
}
