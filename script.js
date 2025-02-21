// копировать адреса
    function copyToClipboard(value) {
        const textArea = document.createElement("textarea");
        textArea.value = value;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Address copied!');
    }

// Цвет вкладки
    :root {
        --theme-color: #ff007f;
    }
    
    @keyframes colorChange {
        0% { --theme-color: #ff007f; }
        25% { --theme-color: #1e90ff; }
        50% { --theme-color: #55f0ff; }
        75% { --theme-color: #ffcc00; }
        100% { --theme-color: #ff007f; }
    }
    
    body {
        animation: colorChange 8s infinite;
    }
</style>

<script>
    function updateThemeColor() {
        let computedColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color').trim();
        document.querySelector('meta[name="theme-color"]').setAttribute("content", computedColor);
    }
    
    setInterval(updateThemeColor, 500);
