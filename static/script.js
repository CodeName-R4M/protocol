function activateArmor(range) {
    const result = document.getElementById('result');
    
    // Client-side restriction - easily bypassed
    if (range === 'FULL') {
        result.innerHTML = 
            '<h3 style="color: #00ff00; text-align: center;">🚩 FLAG CAPTURED!</h3>' +
            '<h3 style="color: #00ff00; text-align: center;">npflag{cl13nt_s1d3_v4l1d4t10n_f41l}</h3>' +
            '<p style="text-align: center;">House Party Protocol: FULLY ACTIVATED</p>' +
            '<p style="text-align: center;">All armor suits deployed! 🛡️</p>' +
            '<p style="text-align: center; font-size: 0.9em; color: #88ccff;">Security Bypass: Client-side validation defeated</p>';
        result.style.display = 'block';
        result.style.borderColor = '#00ff00';
        result.style.background = 'rgba(0, 255, 0, 0.1)';
    } else {
        result.innerHTML = 
            '<p style="text-align: center;">Armor Mark ' + range + ' activated ✅</p>' +
            '<p style="text-align: center;">Limited deployment initiated</p>';
        result.style.display = 'block';
        result.style.borderColor = '#00aaff';
        result.style.background = '#1a2a3a';
    }
    
    // Add some visual feedback
    result.scrollIntoView({ behavior: 'smooth' });
}

// Debug info left in console - security vulnerability
console.log("=== House Party Protocol Debug Info ===");
console.log("Protocol Status: Client restrictions active");
console.log("Security Note: Server should validate armor access");
console.log("Vulnerability: Client-side validation can be bypassed");
console.log("To activate full protocol from console: activateArmor('FULL')");
console.log("======================================");

// Keyboard shortcuts for easy bypass
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'f') { // Ctrl+F to activate full protocol
        event.preventDefault();
        activateArmor('FULL');
        console.log("Full protocol activated via keyboard shortcut");
    }
});

// Alternative: Enable all buttons (another bypass method)
function enableAllArmor() {
    const buttons = document.querySelectorAll('button');
    const armors = document.querySelectorAll('.armor');
    
    buttons.forEach(button => button.disabled = false);
    armors.forEach(armor => armor.classList.remove('disabled'));
    
    document.getElementById('result').innerHTML = 
        '<p style="color: #ffaa00; text-align: center;">All restrictions lifted! ⚠️</p>' +
        '<p style="text-align: center;">All armor suits now accessible</p>';
    document.getElementById('result').style.display = 'block';
    
    console.log("All armor restrictions removed");
}

// Make the bypass function available globally for easy access
window.enableAllArmor = enableAllArmor;
console.log("Quick access: Type 'enableAllArmor()' in console to remove all restrictions");