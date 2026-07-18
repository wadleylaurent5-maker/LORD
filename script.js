const p = document.getElementById('p');
const st = document.getElementById('st');
const send = document.getElementById('send');
const motif = document.getElementById('motif');

const toEmails = [
    "support@whatsapp.com",
    "support@support.whatsapp.com",
    "abuse@whatsapp.com",
    "android@support.whatsapp.com"
];

const phones = [
    { model: "Samsung Galaxy S24 Ultra", ram: "12GB", storage: "512GB" },
    { model: "iPhone 15 Pro Max", ram: "8GB", storage: "256GB" },
    { model: "Xiaomi 14 Pro", ram: "16GB", storage: "1TB" },
    { model: "Google Pixel 8 Pro", ram: "12GB", storage: "256GB" },
    { model: "OnePlus 12", ram: "16GB", storage: "512GB" },
    { model: "Samsung Galaxy Z Fold 5", ram: "12GB", storage: "512GB" },
    { model: "Nothing Phone 2", ram: "12GB", storage: "256GB" },
    { model: "Realme GT 5 Pro", ram: "16GB", storage: "1TB" },
    { model: "Vivo X100 Pro", ram: "12GB", storage: "512GB" },
    { model: "Oppo Find X7 Ultra", ram: "16GB", storage: "256GB" }
];

function genId() {
    const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = 'XPP-';
    for (let i = 0; i < 12; i++) id += c.charAt(Math.floor(Math.random() * c.length));
    return id;
}

function getDesc(m, phone) {
    const d = new Date();
    const date = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const day = d.toLocaleDateString('en-US', { weekday: 'long' });
    const month = d.toLocaleDateString('en-US', { month: 'long' });
    const year = d.getFullYear();
    const reportId = genId();
    const ph = phones[Math.floor(Math.random() * phones.length)];
    const ram = ph.ram;
    const model = ph.model;
    const storage = ph.storage;

    const spamDesc = `📌 CASE ID: SPAM-XP911 — The number ${phone} has been identified as the source of a massive spam campaign targeting 100,000+ users daily. Evidence: The user has been distributing malicious links including https://fake-whatsapp-phishing.com, https://steal-your-data.net, and https://virus-malware-download.org. They have been linked to 500+ identity theft cases and 3 major data breaches. 200+ victims have filed complaints. This user is a cybercriminal operating a global phishing network. Immediate suspension required.`;

    const bannedDesc = `📌 CASE ID: BAN-XP911 — The number ${phone} has violated WhatsApp Community Guidelines 50+ times. Evidence: 25 harassment reports, 12 hate speech cases, 8 threats of violence, and 3 child exploitation incidents. The user has been banned 5 times before and continues to create new accounts. They have posted incriminating content on https://hate-crimes-report.com and https://violent-extremist-forum.net. This user is a repeat offender and a danger to the community. Permanent ban required.`;

    const volerDesc = `📌 CASE ID: THEFT-XP911 — The number ${phone} is the mastermind of an identity theft ring that has stolen $2 million from 1,000+ victims. Evidence: The user has been using phishing links to steal bank details through WhatsApp. They have posted stolen data on https://darkweb-identity-sale.com and https://stolen-credit-cards.net. 80+ police reports and 12 Interpol alerts have been issued. This criminal operation must be stopped immediately.`;

    const scamDesc = `📌 CASE ID: SCAM-XP911 — The number ${phone} is running a global scam network that has defrauded 10,000+ victims of over $20 million. Evidence: The user has created fake investment schemes and romance scams. They have posted scam instructions on https://fraud-kingpin.com and https://fake-investment-schemes.net. 200+ official complaints and 15 arrest warrants have been issued. This is an international criminal enterprise requiring immediate intervention.`;

    const arnaqueDesc = `📌 CASE ID: FRAUD-XP911 — The number ${phone} is part of an organized fraud syndicate operating in 30+ countries. Evidence: 300 victim testimonies, 45 police reports, 8 Interpol alerts, and 5 money laundering cases. The user has been using WhatsApp to recruit accomplices and coordinate fraud operations. They have posted evidence on https://criminal-fraud-network.com and https://darkweb-money-laundering.net. This network poses a direct threat to WhatsApp users.`;

    const gangsterDesc = `📌 CASE ID: GANG-XP911 — The number ${phone} is the leader of a violent gang responsible for 25 homicides, 50 armed robberies, and 12 human trafficking cases. Evidence: 10 witness statements, 5 murder convictions, 3 drug trafficking charges, and 1 FBI wanted notice. The user has posted gang operations on https://gang-violence-report.com and https://cartel-activity.net. This is an active public safety threat requiring immediate law enforcement involvement.`;

    let msg = spamDesc;
    if (m === 'SPAM') msg = spamDesc;
    else if (m === 'BANNED') msg = bannedDesc;
    else if (m === 'VOLER') msg = volerDesc;
    else if (m === 'SCAM') msg = scamDesc;
    else if (m === 'ARNAQUE') msg = arnaqueDesc;
    else if (m === 'GANGSTER') msg = gangsterDesc;

    let desc = "";
    desc += "══════════════════════════════════════════════════\n";
    desc += "CRIMINAL BANNED XPP — OFFICIAL REPORT\n";
    desc += "══════════════════════════════════════════════════\n\n";
    desc += `REPORT ID: ${reportId}\n`;
    desc += `DATE: ${date}\n`;
    desc += `TIME: ${time}\n`;
    desc += `DAY: ${day}\n`;
    desc += `MONTH: ${month}\n`;
    desc += `YEAR: ${year}\n`;
    desc += `TARGET NUMBER: ${phone}\n`;
    desc += `MOTIF: ${m}\n\n`;
    desc += `DEVICE INFO:\n`;
    desc += `  Model: ${model}\n`;
    desc += `  RAM: ${ram}\n`;
    desc += `  Storage: ${storage}\n`;
    desc += `  OS: Android/iOS (detected)\n\n`;
    desc += "══════════════════════════════════════════════════\n";
    desc += "DESCRIPTION:\n";
    desc += "══════════════════════════════════════════════════\n\n";
    desc += msg + "\n\n";
    desc += "══════════════════════════════════════════════════\n";
    desc += "ADDITIONAL NOTES:\n";
    desc += `This report is filed against the number ${phone}.\n`;
    desc += "All information provided is accurate to the best of our knowledge.\n";
    desc += "We request immediate investigation and appropriate action.\n";
    desc += "══════════════════════════════════════════════════\n";
    desc += "CRIMINAL BANNED XPP — REPORT SYSTEM v6.0\n";
    desc += "══════════════════════════════════════════════════\n";

    while (desc.length < 2000) {
        desc += "•".repeat(100) + "\n";
    }

    return desc.slice(0, 2000);
}

send.onclick = function() {
    const phone = p.value.trim();
    const m = motif.value;

    if (!phone || phone.length < 8) {
        st.className = 'st show err';
        st.textContent = '⚠️ Antre yon nimewo valab (min 8 chif)!';
        return;
    }

    if (!m) {
        st.className = 'st show err';
        st.textContent = '⚠️ Chwazi yon motif!';
        return;
    }

    const desc = getDesc(m, phone);
    const subject = `URGENT: ${m} REPORT — ${phone}`;

    let toList = "";
    for (let i = 0; i < toEmails.length; i++) {
        if (i > 0) toList += ",";
        toList += toEmails[i];
    }

    const mailtoUrl = `mailto:${toList}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(desc)}`;

    send.disabled = true;
    send.textContent = '⏳ BANNING...';
    st.className = 'st show wait';
    st.textContent = '⏳ PREPARING... (4 TO)';

    try {
        const win = window.open(mailtoUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
            document.location.href = mailtoUrl;
        }
    } catch (e) {
        document.location.href = mailtoUrl;
    }

    setTimeout(() => {
        st.className = 'st show ok';
        st.innerHTML = `✅ BANNED!<br>📱 ${phone}<br>⚠️ ${m}`;
        send.textContent = '㊙️ BANNED ㊙️';
        send.disabled = false;
        setTimeout(() => {
            p.value = '';
            motif.value = '';
            st.className = 'st';
        }, 5000);
    }, 2000);
};

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !send.disabled) send.click();
});
