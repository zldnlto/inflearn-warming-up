export default function throttle(func, delay) {
  let timeoutId;
  let lastExecutedTime = 0;

  return function (...args) {
    const currentTime = new Date().getTime();

    if (!lastExecutedTime || currentTime - lastExecutedTime >= delay) {
      // 지정된 시간이 지났으므로 함수를 실행
      func.apply(this, args);
      lastExecutedTime = currentTime;
    } else {
      // 지정된 시간이 지나지 않았으므로 기다림
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecutedTime = new Date().getTime();
      }, delay - (currentTime - lastExecutedTime));
    }
  };
}
