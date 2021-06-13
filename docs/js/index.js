(() => {
  // src/index.js
  var setScreenRes = (element) => {
    const width = screen.width;
    const height = screen.height;
    const screenRes = document.getElementById(element);
    screenRes.innerHTML += `${width}x${height}`;
  };
  var setBrowser = (element) => {
    const browser = navigator.userAgent;
    const browserElement = document.getElementById(element);
    if (browser.match(/Opera|OPR/)) {
      browserElement.innerHTML += "Opera";
      return 1;
    }
    if (browser.match(/Chrome/)) {
      browserElement.innerHTML += "Google Chrome";
      return 1;
    }
    if (browser.match(/Safari/)) {
      browserElement.innerHTML += "Safari";
      return 1;
    }
    if (browser.match(/Firefox/)) {
      browserElement.innerHTML += "Firefox";
      return 1;
    }
    browserElement.innerHTML += "Custom";
    return 0;
  };
  var setSystem = (element) => {
    const system = navigator.appVersion;
    const systemElement = document.getElementById(element);
    if (system.match(/Windows/)) {
      systemElement.innerHTML += "Windows 10";
      return 1;
    }
    if (system.match(/Mac/)) {
      systemElement.innerHTML += "Mac OS";
      return 1;
    }
    if (system.match(/Linux/)) {
      systemElement.innerHTML += "Linux";
      return 1;
    }
    if (system.match(/Android/)) {
      systemElement.innerHTML += "Android";
      return 1;
    }
    systemElement.innerHTML += "Custom";
    return 0;
  };
  var setDate = (element) => {
    const today = new Date();
    document.getElementById(element).innerHTML += `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  };
  var setLocation = (parent) => {
    const apiKey = "378e81b7081ace3dab33ee11ac16ee8b866849ad4d2b2897b94dbbca";
    const parentElement = document.getElementById(parent);
    const ip = document.createElement("p");
    const city = document.createElement("p");
    const country = document.createElement("p");
    fetch(`https://api.ipdata.co?api-key=${apiKey}`).then((res) => res.json()).then((data) => {
      ip.innerHTML = `Your IP: ${data.ip}`;
      city.innerHTML = `Your City: ${data.city}`;
      country.innerHTML = `Your Country: ${data.country_code}`;
    });
    parentElement.appendChild(ip);
    parentElement.appendChild(city);
    parentElement.appendChild(country);
  };
  setScreenRes("screenResolution");
  if (navigator.getBattery)
    createBatteryInfo(document.getElementById("root"));
  setBrowser("browser");
  setSystem("os");
  setDate("date");
  setLocation("location");
})();
