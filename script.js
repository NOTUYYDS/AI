document.getElementById('degradationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // 防止表單提交刷新頁面

    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const time = parseFloat(document.getElementById('time').value);

    const degradationRate = (temperature * 0.05) + (humidity * 0.02) + (time * 0.1);
    document.getElementById('result').textContent = `預測的降解率為：${degradationRate.toFixed(2)} %`;
});
