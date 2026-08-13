export const ipCheckerFaqs = [
  {
    question: "What is my IP address and why does it keep changing?",
    answer:
      "Your public IP address is the unique identifier your internet service provider (ISP) assigns to your connection. Most home and business broadband plans around the world use dynamic IP addresses that can change whenever you restart your router or reconnect. Our IP checker shows your current public IP the moment you open the page.",
  },
  {
    question: "Can a website or app see my IP address?",
    answer:
      "Yes. Every time you visit a website, use an app, or send an email, the server you connect to logs your public IP address. That is how sites know where you are, serve regional content, enforce geo-blocks and block suspicious traffic. It is a normal part of how the internet works — your IP is essentially your device's return address online.",
  },
  {
    question: "Can someone find my exact home address from my IP?",
    answer:
      "No. IP geolocation is accurate to a city or district level, not to your street address. At best, a provider can estimate your area, ISP and timezone. Your precise home address is not exposed by your IP address alone — that level of detail is only available to your ISP and law enforcement with proper legal authority.",
  },
  {
    question: "How do I find my IP address?",
    answer:
      "The quickest way is to open our free IP checker — your public IP appears automatically with no installation. To find your local (private) IP, open Command Prompt on Windows and run ipconfig, or go to Settings > Wi-Fi/Network > Properties on your phone and check the IP address shown next to the connected network.",
  },
  {
    question: "What is the difference between IPv4 and IPv6?",
    answer:
      "IPv4 is the older, most widely used standard with addresses like 39.63.1.1. Because the world ran out of IPv4 addresses, IPv6 was introduced with a much larger format like 2400:8900::f03c:91ff:fed1. ISPs worldwide are gradually rolling out IPv6, and our tools detect and display whichever version you are currently connected through.",
  },
  {
    question: "Does a VPN change my IP address?",
    answer:
      "Yes. A VPN routes your traffic through a server in another city or country, so websites see that server's IP instead of yours. This is a common way to hide your real IP, bypass geo-restrictions and add privacy on public Wi-Fi. After connecting a VPN, refresh this page and you will see the new IP instantly.",
  },
  {
    question: "Is it safe to share my IP address?",
    answer:
      "Your IP address is shared with every website and app you use, so it is not secret by itself. The risk is low for most people, but you should be cautious about clicking suspicious links or granting access to your network. If you need extra privacy, use a VPN and keep your router's firmware updated.",
  },
  {
    question: "Why does my IP sometimes show a different location?",
    answer:
      "IP location databases are built from ISP records and are approximate, so your IP can appear in a neighbouring city or even a different region than where you are. Mobile data, VPNs, proxy servers and DNS-based CDNs can also make your apparent location differ from your physical one.",
  },
];

export const ipLookupFaqs = [
  {
    question: "What is an IP address lookup?",
    answer:
      "An IP lookup takes any IP address (or domain name) and returns the public records attached to it — such as the country, region, city, latitude and longitude, ISP, organization, ASN and timezone. It is the same data that powers 'what is my IP' tools and geo-targeting, but applied to any address you enter.",
  },
  {
    question: "Can I look up any IP address?",
    answer:
      "Yes. You can look up any public IPv4 or IPv6 address, as well as domain names like google.com. Our IP lookup resolves the domain to its IP and returns its geolocation and hosting details. Private addresses (like 192.168.x.x or 10.x.x.x on your home network) are not routable on the internet and have no public records.",
  },
  {
    question: "How accurate is IP geolocation?",
    answer:
      "IP geolocation is usually accurate to the city or district level — often within a few kilometres for fixed broadband, but less precise for mobile data and VPN traffic. Databases approximate location from ISP registration and routing data, so results should be treated as estimates rather than exact positions.",
  },
  {
    question: "Is it legal to look up an IP address?",
    answer:
      "Yes. Looking up an IP address with publicly available tools is legal and widely used by developers, network administrators, marketers and security professionals. However, using an IP to stalk, harass or access someone's private systems is illegal in most jurisdictions, including under cybercrime legislation like Pakistan's PECA 2016.",
  },
  {
    question: "Why do IP lookups show a different location than expected?",
    answer:
      "This usually happens when the address belongs to a hosting or cloud provider such as Google, Amazon or Cloudflare, which registers blocks in a central location far from the actual users. VPNs, proxies, CDNs and corporate gateways have the same effect on lookup results.",
  },
  {
    question: "How can businesses use IP lookup data?",
    answer:
      "Businesses use IP lookup data for fraud prevention, geo-targeted advertising, currency and language localisation, and blocking traffic from high-risk regions. For an e-commerce or lead-generation site, detecting the visitor's country and city helps show the right payment methods and content automatically.",
  },
];

export const whoisFaqs = [
  {
    question: "What is a WHOIS lookup?",
    answer:
      "A WHOIS lookup shows the public registration record of a domain name — who registered it, which registrar manages it, when it was registered and when it expires, its nameservers, and its current status codes. Our tool reads the same data from the modern RDAP (Registration Data Access Protocol) directory that ICANN-accredited registries use.",
  },
  {
    question: "Is the WHOIS data on this tool accurate?",
    answer:
      "Yes. We pull records live from the official RDAP directory (rdap.org), which is the same registry-grade source registrars and hosting providers use. The data comes directly from the registry that manages the domain's TLD, so registration dates, expiry dates and nameservers are authoritative at the moment you look them up.",
  },
  {
    question: "Why does WHOIS show a privacy service instead of the owner?",
    answer:
      "Most registrars now offer WHOIS privacy protection, which replaces the registrant's personal name, address, email and phone number with a privacy-forwarding service. This is legal and common worldwide — it hides personal details from public directories while keeping a valid abuse contact. Use the registrar's abuse email shown in the results to report issues.",
  },
  {
    question: "Can I check if a domain is available with WHOIS?",
    answer:
      "Not directly. A WHOIS record proves a domain is registered; when a domain is available there is usually no record for it, so a 'no record found' response suggests the domain may be available. Always confirm availability through your registrar or our domain services before registering, because results can be cached and a domain can be taken at any moment.",
  },
  {
    question: "What are domain status codes like clientTransferProhibited?",
    answer:
      "Domain status codes are flags the registry places on a domain to control what actions are allowed. clientTransferProhibited, for example, prevents the domain from being transferred to another registrar without the current registrar lifting the lock — it is a standard anti-theft protection. Common codes include active, clientTransferProhibited, clientRenewProhibited and pendingDelete.",
  },
  {
    question: "Is my WHOIS data public?",
    answer:
      "Yes. Since the introduction of modern data-protection rules such as the GDPR, ICANN has moved toward partial public data, and most registrars mask personal registrant details by default. Registry-level data — registrar, registration and expiry dates, nameservers and status — remains public for .com, .net and most other gTLDs, while access rules vary for some country-code domains. If privacy matters to you, enable WHOIS privacy on your domain at registration.",
  },
];

export const dnsFaqs = [
  {
    question: "What is a DNS lookup?",
    answer:
      "A DNS lookup resolves a domain name to the records that power its services — A and AAAA records point to servers' IP addresses, MX records route email, TXT records hold SPF and verification strings, and NS records list the authoritative nameservers. Our tool queries the public DNS-over-HTTPS resolver at dns.google and shows you the live answers with their TTLs.",
  },
  {
    question: "What do the different DNS record types mean?",
    answer:
      "A points a domain to an IPv4 address, AAAA to an IPv6 address, CNAME is an alias to another domain, MX tells email servers where to deliver mail (with a priority number), TXT stores text like SPF or domain verification, NS lists the authoritative nameservers, SOA is the record of authority and CAA declares which certificate authorities may issue SSL for the domain.",
  },
  {
    question: "How do I check if my DNS changes have propagated?",
    answer:
      "After updating records (for example, pointing your site to a new hosting server), use this DNS lookup for the record type you changed. If the old value still shows, your ISP or router may be caching the previous answer — wait a few minutes or try flushing your local DNS cache, then check again. Propagation for major DNS changes usually completes within minutes to 48 hours.",
  },
  {
    question: "What does TTL mean in DNS results?",
    answer:
      "TTL (Time To Live) is the number of seconds a resolver is allowed to cache a record before asking the authoritative nameserver again. Lower TTLs (60–300s) make changes appear faster; higher TTLs (3600s+) reduce query load. The TTL you see in our results is the value the authoritative nameserver returned for that record.",
  },
  {
    question: "Why does my domain not have an A record?",
    answer:
      "A missing A record usually means the domain is not yet pointed at any web server — common when hosting is new, DNS is still propagating, or the domain has only an AAAA or CNAME record. Check both A and CNAME: if a bare domain shows NXDOMAIN or an empty answer, confirm the records are correctly saved at your DNS provider.",
  },
  {
    question: "Can I use DNS lookup to troubleshoot email delivery?",
    answer:
      "Yes. Email failures are often caused by missing or incorrect MX records, or a missing SPF TXT record that makes receiving servers reject the mail. Look up the MX record to confirm the mail server host and priority, then check the TXT record to verify SPF (like v=spf1 ...) is present. Both show instantly in this tool.",
  },
];

export const passwordFaqs = [
  {
    question: "Are passwords generated by this tool safe?",
    answer:
      "Yes. Every password is generated inside your browser using the Web Crypto API's cryptographically secure random number generator — the same source browsers use for TLS encryption. Nothing is sent to any server, logged, or stored anywhere. Close the tab and the password is gone.",
  },
  {
    question: "How strong should my password be?",
    answer:
      "Aim for at least 12–16 characters with a mix of upper and lowercase letters, digits and symbols. Longer passwords matter more than forced special characters: each extra character multiplies the possible combinations. We show a strength rating based on the password's entropy so you can dial in the right length for your needs.",
  },
  {
    question: "Why is the strength meter showing 'Weak'?",
    answer:
      "Strength is based purely on length and the pool of characters you enabled. Short passwords or restricted character sets reduce entropy, which makes brute-force attacks easier. Increase the length or enable more character types to raise the strength — the meter updates instantly as you adjust.",
  },
  {
    question: "Should I use a password manager instead?",
    answer:
      "A password manager is the best practice for everyday life. It generates and stores unique, strong passwords for every site and fills them in automatically, so you never reuse a password. Use this generator when you need a password outside a manager, or to create a master password for the manager itself.",
  },
  {
    question: "How often should I change my passwords?",
    answer:
      "There is no fixed schedule. Change a password immediately if a service you use is breached, if you shared it with someone, or if you reused it across multiple sites. Using a unique, long password per site and enabling two-factor authentication removes the need for routine, forced password changes.",
  },
  {
    question: "What is a passphrase and is it better?",
    answer:
      "A passphrase is a sequence of random words, such as 'correct horse battery staple'. Because it is long, it carries high entropy yet is easier to type and remember. If you prefer passphrases, generate a long password here and add your own random words — length and randomness are what make either approach strong.",
  },
];

export const textCaseFaqs = [
  {
    question: "What does a text case converter do?",
    answer:
      "A text case converter instantly changes the letter casing of any text — to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE and more. It is a daily time-saver for copywriters, developers, students and marketers. Everything runs locally in your browser; your text is never uploaded.",
  },
  {
    question: "Is my text uploaded to a server?",
    answer:
      "No. The converter runs entirely in your browser using JavaScript, so your text never leaves your device. That makes it safe to use with sensitive copy, client work, code snippets or any content you do not want stored or shared.",
  },
  {
    question: "What is the difference between Title Case and Sentence case?",
    answer:
      "Title Case capitalises the first letter of every significant word — 'Top Web Design Trends 2026'. Sentence case capitalises only the first word and proper nouns — 'Top web design trends 2026'. Title case suits headlines and headings; sentence case suits paragraphs and body copy.",
  },
  {
    question: "When do developers use camelCase, snake_case and kebab-case?",
    answer:
      "JavaScript and TypeScript developers typically use camelCase for variables and functions (myUserList), PascalCase for classes and components (UserCard), snake_case in databases and Python (user_name), and kebab-case for URLs and filenames (my-user-list). Our converter lets you switch between them in one click, without retyping.",
  },
  {
    question: "Does the converter work with Urdu, Arabic and other scripts?",
    answer:
      "Yes. The converter recognises Unicode letters, so Urdu, Arabic, Cyrillic and other non-Latin scripts pass through untouched while Latin-script letters are converted normally. Mixed-script text is handled cleanly, which is useful for bilingual content workflows worldwide.",
  },
  {
    question: "Can I copy the converted text easily?",
    answer:
      "Yes. Use the Copy button next to the output box to copy the converted text to your clipboard instantly, or simply select and copy it yourself. The word and character counts also update live so you can keep your content within limits.",
  },
];

export const toolsIndexFaqs = [
  {
    question: "Are The Stockit's free tools really free?",
    answer:
      "Yes, 100%. Every tool on this page is free to use without registration, sign-up or payment. We do not require accounts, and we do not lock features behind a paywall. Tools like the password generator and text case converter run entirely in your browser, so there is no server cost to us or you.",
  },
  {
    question: "Do these tools collect or sell my data?",
    answer:
      "No. The password generator and text case converter never send your input to any server — everything runs locally in your browser. IP and DNS tools fetch results live from public, privacy-respecting APIs and we do not store, log or sell the addresses you query. See our privacy policy for full details.",
  },
  {
    question: "How accurate are the IP, WHOIS and DNS results?",
    answer:
      "IP geolocation is accurate to city or district level and comes from ipwho.is. WHOIS data is pulled live from the official RDAP registry directory, and DNS records come from the public dns.google resolver — the same infrastructure used by developers worldwide. Results reflect the live public records at the moment of each query.",
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer:
      "No. All tools are open to everyone without creating an account, logging in or installing anything. They work on any modern browser, on desktop and mobile.",
  },
  {
    question: "Will you add more free tools?",
    answer:
      "Yes. We are actively building out the collection — more lookups, generators and converters are on the way. If there is a tool you need for your business or website, contact us and we will add it to the roadmap.",
  },
  {
    question: "Who builds these tools?",
    answer:
      "The Stockit, a web design and digital marketing agency based in Islamabad, Pakistan, working with clients worldwide. The same team that designs and develops client websites builds these tools — they are our way of giving back to the developer community while showcasing what we can do.",
  },
];

export const uuidGeneratorFaqs = [
  {
    question: "What is a UUID?",
    answer:
      "A UUID (Universally Unique Identifier) is a 128-bit number formatted as five groups of hex characters, like 550e8400-e29b-41d4-a716-446655440000. Version 4 UUIDs are generated from random data, which makes collisions so unlikely that they are effectively unique across every device and database in the world.",
  },
  {
    question: "Are the UUIDs from this tool really random?",
    answer:
      "Yes. Every UUID is generated in your browser using the Web Crypto API's cryptographically secure random number generator — the same source browsers use for TLS encryption. Nothing is sent to a server, so the IDs you generate are never seen or stored by us.",
  },
  {
    question: "What is the difference between UUID v1 and v4?",
    answer:
      "UUID v1 is based on the generation time and the machine's MAC address, so it is guessable and can reveal when and where it was created. UUID v4 is generated purely from random bytes. For almost every use — database keys, API identifiers, file names — v4 is the recommended choice.",
  },
  {
    question: "Can I use UUIDs as database primary keys?",
    answer:
      "Yes. Many developers use UUIDs as primary keys because they can be generated on any client without a round trip to the database, and they never collide across tables or distributed systems. For very large tables, consider a UUIDv7 (time-ordered) key instead to keep indexes efficient.",
  },
  {
    question: "Why would I want UUIDs without hyphens?",
    answer:
      "UUIDs without hyphens are compact and easier to use in URLs, file names and logs. They are still the same 128-bit value — the hyphens are only a formatting convention. This tool lets you strip them with one toggle and also export uppercase for systems that require it.",
  },
  {
    question: "How many UUIDs can I generate at once?",
    answer:
      "You can generate between 1 and 100 UUIDs in a single click. Each one is drawn independently from the cryptographically secure random generator, so they are all unique. Copy the whole block with one button, or regenerate for a fresh set.",
  },
];

export const jsonFormatterFaqs = [
  {
    question: "What does a JSON formatter do?",
    answer:
      "A JSON formatter takes a single line of raw JSON and re-indents it into a readable, nested structure — commonly with two-space indentation. It also validates the JSON, so you instantly know if there is a syntax error and where. A minify option reverses the process by removing all whitespace.",
  },
  {
    question: "Is my JSON sent to a server?",
    answer:
      "No. All formatting, validation and minification happens in your browser with JavaScript. Your JSON never leaves your device, which makes it safe to use with API responses, configuration files and any data you do not want shared.",
  },
  {
    question: "Why does the validator say my JSON is invalid?",
    answer:
      "JSON is strict. Common mistakes are trailing commas, single quotes instead of double quotes, unquoted keys, and comments (JSON does not allow them). Our validator highlights the error position so you can find the exact spot — usually a character offset — and fix it quickly.",
  },
  {
    question: "What is the difference between format and minify?",
    answer:
      "Format (or beautify) adds indentation and line breaks so the structure is easy to read and debug. Minify removes every unnecessary space, tab and newline to produce the smallest possible payload — useful when you are shipping JSON over the network or storing it in a single field.",
  },
  {
    question: "Can I validate JSON from an API response?",
    answer:
      "Yes. Paste the raw response body into the input and press Format. If it is valid JSON it will be beautified and pretty-printed; if the API returned an error message or an empty body, the validator will tell you it is not valid JSON.",
  },
  {
    question: "Why is JSON so common in modern applications?",
    answer:
      "JSON is the standard data format for REST and GraphQL APIs because it is readable by humans, easy to parse in every programming language, and maps directly to objects in JavaScript. Formatting tools like this one are part of every developer's daily workflow.",
  },
];

export const base64ConverterFaqs = [
  {
    question: "What is Base64 encoding?",
    answer:
      "Base64 is a way of representing binary data as a safe ASCII string using 64 characters (A–Z, a–z, 0–9, + and /). It is used whenever binary data must travel through text-only channels — such as embedding images in HTML, email attachments, or sending data inside URLs and JSON.",
  },
  {
    question: "Is Base64 encryption?",
    answer:
      "No. Base64 is an encoding, not encryption. It only converts data between formats and can be decoded by anyone without a key. Never rely on Base64 to protect sensitive information — use proper encryption (like AES) for that.",
  },
  {
    question: "Does the tool handle emojis and non-Latin text correctly?",
    answer:
      "Yes. Many naive Base64 tools break on emojis and non-Latin scripts like Urdu, Arabic or Chinese because they assume one byte per character. This converter uses the UTF-8 standard, so any text — including emojis and mixed scripts — is encoded and decoded correctly.",
  },
  {
    question: "How do I decode a Base64 string that has line breaks?",
    answer:
      "Base64 output is sometimes wrapped in lines, especially when copied from email or configuration files. Most decoders, including ours, tolerate or strip these line breaks automatically — but if you see an error, remove the newlines before decoding.",
  },
  {
    question: "Why does my Base64 string end with one or two = signs?",
    answer:
      "The = padding at the end appears when the input length is not a multiple of three bytes. It simply tells the decoder how much padding was added so the original data can be restored exactly. Not all strings end with padding — it depends on the length of the input.",
  },
  {
    question: "What is base64url and how is it different?",
    answer:
      "Base64url is a variant used in URLs and JWT tokens. It replaces the + and / characters with - and _ (which are URL-safe) and removes the = padding. Standard Base64 output like ours uses + and /, which need percent-encoding in URLs.",
  },
];

export const urlEncoderFaqs = [
  {
    question: "Why do URLs need encoding?",
    answer:
      "URLs can only contain a limited set of characters. Spaces, ampersands, question marks, slashes and non-ASCII letters must be percent-encoded (for example, a space becomes %20) so the URL is valid and the server receives the exact values you intended. This is called percent-encoding.",
  },
  {
    question: "What is the difference between component and full-URL encoding?",
    answer:
      "Component encoding (encodeURIComponent) encodes every reserved character, including & and = — it is correct for encoding a single query parameter value. Full-URL encoding (encodeURI) leaves structural characters like : / ? & # alone, so it suits encoding an entire URL. Using the wrong one is a classic source of broken links.",
  },
  {
    question: "Does encoding change the actual URL?",
    answer:
      "Browsers automatically encode and decode URLs as you type them, and most frameworks decode query parameters for you. Encoding matters most when you are constructing URLs programmatically — in code, redirects, tracking links or API calls — where an unencoded & or space would break the request.",
  },
  {
    question: "Why do emojis become long strings when encoded?",
    answer:
      "Emojis are encoded in UTF-8 and percent-encoded byte by byte, so a single emoji can become a string like %F0%9F%98%80 (8 characters). This is normal and correct — the decoder restores the emoji exactly. Our tool handles this automatically.",
  },
  {
    question: "Is URL encoding reversible?",
    answer:
      "Yes. Percent-encoding is lossless: encoding then decoding returns the original text exactly. The decoder converts every %XX sequence back into its character, which is why this tool includes both directions in one place.",
  },
  {
    question: "When would I use a URL encoder in real work?",
    answer:
      "Developers use it to build safe query strings, tracking URLs and redirects. Marketers use it to sanitize UTM links and campaign URLs. Anyone sharing a link with special characters can use it to make sure the destination receives the right values.",
  },
];

export const wordCounterFaqs = [
  {
    question: "How do you count words?",
    answer:
      "A word is any sequence of characters separated by spaces. Our counter splits the text on whitespace and counts the groups, so 'the-stockit' counts as one word while 'the stockit' counts as two. Punctuation attached to a word does not create extra words.",
  },
  {
    question: "What is the difference between characters with and without spaces?",
    answer:
      "Characters with spaces is the total length of your text including every space. Characters without spaces removes the spaces, which is the count many forms and bio fields enforce. Both are shown live as you type, along with sentence and paragraph counts.",
  },
  {
    question: "How is reading time calculated?",
    answer:
      "Reading time uses the average adult reading speed of about 200–250 words per minute. The tool divides your word count by that speed and rounds up, so you get a realistic estimate like '3 min read' — the same metric you see on blogs and news sites.",
  },
  {
    question: "Does the counter handle other languages and scripts?",
    answer:
      "Yes. The counter splits on whitespace, so it works with any space-separated language, including Urdu, Arabic, Hindi and Chinese text that contains spaces. CJK languages without spaces are counted by character groups, and the character counts are always accurate.",
  },
  {
    question: "Why do I need to check word counts?",
    answer:
      "Word and character limits are everywhere: essay requirements, blog guidelines, meta descriptions (roughly 155 characters), Twitter/X posts, SMS lengths, and translation quotes. A live counter keeps you inside the limit without counting manually.",
  },
  {
    question: "Is my text stored or shared?",
    answer:
      "No. Everything is counted locally in your browser. Your text never leaves your device, so it is safe to use with drafts, client work and any sensitive copy.",
  },
];

export const qrCodeGeneratorFaqs = [
  {
    question: "How do I use the QR codes this tool generates?",
    answer:
      "Type or paste the URL, text, Wi-Fi details or any content, choose a size and colors, then generate. Anyone can scan the code with the camera app on their phone or a QR scanner — it opens the link, shows the text, or connects to the Wi-Fi network instantly.",
  },
  {
    question: "Are the QR codes really free and unlimited?",
    answer:
      "Yes. There is no account, no watermark and no limit. The codes are rendered on demand by a free public QR service, and the resulting image is yours to use anywhere — on posters, business cards, packaging, menus or your website.",
  },
  {
    question: "Do QR codes work on all phones?",
    answer:
      "Almost all modern phones — iPhone and Android — can scan QR codes with the built-in camera app without installing anything. Keep the contrast high (dark code on a light background) and the image reasonably large for the fastest scans.",
  },
  {
    question: "Can a QR code store a Wi-Fi password?",
    answer:
      "Yes. You can embed Wi-Fi network details so guests scan the code instead of typing a password. Enter the network name, password and security type in the Wi-Fi format (e.g. WIFI:T:WPA;S:MyNetwork;P:MyPassword;;) and any phone will connect on scan.",
  },
  {
    question: "Why use a QR code instead of a short link?",
    answer:
      "QR codes are scannable in the physical world — print, packaging, signage, business cards. They are also permanent: unlike a short link that can expire, the code just contains your URL. They are ideal for driving foot traffic, campaigns and offline-to-online marketing.",
  },
  {
    question: "Is my QR code data sent to a third party?",
    answer:
      "The code image is generated by a public QR rendering service, so your data passes through their API to produce the PNG. Do not encode sensitive information in a QR code you share publicly — anything encoded in a code can be read by anyone who scans it.",
  },
];

export const randomNumberGeneratorFaqs = [
  {
    question: "How do I generate a random number between 1 and 100?",
    answer:
      "Set the minimum to 1 and the maximum to 100, choose how many numbers you want, and press Generate. Each number is drawn independently from a cryptographically secure random generator, so every result is equally likely.",
  },
  {
    question: "Are the numbers truly random?",
    answer:
      "This tool uses the Web Crypto API, the same cryptographically secure source browsers use for security tokens. That means the numbers are genuinely random, not a predictable maths sequence, and every value in your range has an equal chance of appearing.",
  },
  {
    question: "Can I generate numbers without repeats?",
    answer:
      "Yes. Enable the 'unique numbers' option and the tool will never repeat a value — useful for drawing winners, allocating IDs or selecting distinct items. Note that unique numbers require the range to be large enough for the count you request.",
  },
  {
    question: "Why would I need random numbers?",
    answer:
      "Random numbers are used everywhere: drawing giveaway winners, random sampling for research, picking test data, lottery-style picks, random usernames or PINs, and simple games. A secure generator makes those picks fair and verifiable.",
  },
  {
    question: "What is the largest range I can use?",
    answer:
      "You can use any integer range you like — from negative to positive values up to the limits of JavaScript's safe integers. The generator works over the full range you specify, so even enormous ranges are handled correctly.",
  },
  {
    question: "How is this different from a coin flip or dice roll?",
    answer:
      "A coin or dice gives a fixed set of outcomes with a physical bias. This generator covers any range you define — from 1–2 (coin flip) to 1–1000 — with no physical bias and cryptographically secure randomness.",
  },
];

export const colorConverterFaqs = [
  {
    question: "What is the difference between HEX, RGB and HSL?",
    answer:
      "HEX is a six-digit code like #4f46e5 that encodes red, green and blue. RGB uses three decimal values (rgb(79, 70, 229)). HSL describes color by hue, saturation and lightness — more intuitive for designers who think in terms of shade and tone.",
  },
  {
    question: "How do I convert a HEX color to RGB?",
    answer:
      "Just paste the hex code (with or without the #) into the HEX field. The RGB and HSL values update instantly, along with a live color preview. Every field is two-way, so you can type in any format and get the other two immediately.",
  },
  {
    question: "Why is the color I picked showing different values?",
    answer:
      "Color spaces represent the same color differently: #ff0000 equals rgb(255, 0, 0) equals hsl(0, 100%, 50%) — they are the exact same red, just written in different coordinate systems. The preview swatch proves they match.",
  },
  {
    question: "Do the conversions support alpha/transparency?",
    answer:
      "Yes. The tool handles RGBA and HSLA values, so you can convert colors with opacity too. If you paste a value with an alpha channel, it is preserved across all three formats.",
  },
  {
    question: "Why do developers and designers use HSL?",
    answer:
      "HSL is easier to reason about: change the hue number to shift the color, tweak saturation for vividness, and lightness to darken or lighten. It is common in design systems and CSS because gradients and dark/light variants are trivial to compute.",
  },
  {
    question: "Where are color codes used in web design?",
    answer:
      "HEX codes appear directly in CSS like background: #4f46e5. RGB and RGBA are used for transparency and in image tools. HSL powers CSS color functions. Converting between them accurately is essential when a design file uses one format and your code needs another.",
  },
];

export const hashGeneratorFaqs = [
  {
    question: "What is a hash?",
    answer:
      "A hash is a fixed-length string produced from any input, like a fingerprint of the data. SHA-256 always returns 64 hex characters, no matter whether the input is one character or a gigabyte. The same input always produces the same hash, and changing even one character completely changes it.",
  },
  {
    question: "Are hashes reversible?",
    answer:
      "No. Hash functions are one-way — you cannot recover the original input from a hash. That is what makes them useful for password verification (store the hash, never the password) and file integrity checks (compare hashes to detect changes).",
  },
  {
    question: "Why does this tool use the Web Crypto API?",
    answer:
      "Web Crypto is the browser's built-in, standards-compliant implementation of SHA-1 and the SHA-2 family. Because it runs natively in your browser, your input never leaves your device — no upload, no logging, no third party involved.",
  },
  {
    question: "Which SHA algorithm should I use?",
    answer:
      "For almost everything modern, use SHA-256 — it is fast, widely supported and considered secure. SHA-384 and SHA-512 offer longer digests for higher-security use. SHA-1 is legacy and broken for cryptographic signatures, but still used for some file checksums.",
  },
  {
    question: "What is the difference between SHA-1 and SHA-256?",
    answer:
      "SHA-1 produces a 160-bit (40-character) digest and is considered cryptographically broken — collisions can be deliberately manufactured. SHA-256 produces a 256-bit (64-character) digest and is the current standard. Unless you have a legacy requirement, always prefer SHA-256.",
  },
  {
    question: "How do developers use hashes day to day?",
    answer:
      "Verifying downloaded files by comparing checksums, checking passwords (with a salt and slow hash like bcrypt or Argon2 rather than plain SHA), building cache keys, generating ETags, deduplicating content, and confirming data was not tampered with in transit.",
  },
];

export const currencyConverterFaqs = [
  {
    question: "Where do the exchange rates come from?",
    answer:
      "Rates are fetched live from a free, open exchange-rate API that publishes daily mid-market rates for 160+ currencies, including USD, EUR, GBP, JPY, INR, PKR and more. The result you see is the same rate banks and payment platforms reference before adding their margins.",
  },
  {
    question: "Why does the result differ from what my bank charges?",
    answer:
      "Banks and exchange services add a margin (spread) on top of the mid-market rate, plus often a flat fee. This tool shows the pure mid-market rate — the fairest number. Your actual conversion will be slightly different depending on the provider's markup.",
  },
  {
    question: "How often are the rates updated?",
    answer:
      "The open API updates its base rates once per day (daily market close), which is sufficient for most planning and budgeting. For live trading or high-value transfers, confirm the rate with your bank or broker at the moment of the transaction.",
  },
  {
    question: "Can I convert from any currency to any other?",
    answer:
      "Yes. Pick any pair from the list of 160+ currencies and the tool computes it for you, including cross-currency conversions that do not involve USD. A swap button flips the pair instantly.",
  },
  {
    question: "Is there a limit on how many conversions I can do?",
    answer:
      "The tool is free to use without limits or accounts. The underlying rate feed has a fair-use rate limit for API calls, so we fetch the rate table once and perform all your conversions locally from that snapshot.",
  },
  {
    question: "How can I use this for business planning?",
    answer:
      "Quote international projects in a stable currency, convert supplier invoices, estimate shipping and duty costs, or set pricing for overseas customers. Because rates update daily, recheck before finalizing any significant transaction.",
  },
];

export const temperatureConverterFaqs = [
  {
    question: "How do you convert Celsius to Fahrenheit?",
    answer:
      "Use the formula F = C × 9/5 + 32. For example, 25 °C × 9/5 + 32 = 77 °F. This tool computes it instantly as you type, so you never need to remember the formula.",
  },
  {
    question: "What is the difference between Celsius, Fahrenheit and Kelvin?",
    answer:
      "Celsius is the standard metric scale used worldwide. Fahrenheit is used mainly in the United States. Kelvin is the scientific scale used in physics and engineering — it starts at absolute zero (-273.15 °C) and never goes negative.",
  },
  {
    question: "At what temperature are Celsius and Fahrenheit equal?",
    answer:
      "At -40 degrees. This is the one temperature where the two scales read the same value: -40 °C = -40 °F. It happens because the scales cross at that point — a handy trivia fact and a quick sanity check.",
  },
  {
    question: "Why do recipes and weather use different scales?",
    answer:
      "The scale depends on your region and the field. Most of the world uses Celsius for weather and oven temperatures, the US uses Fahrenheit, and science uses Kelvin. Converters like this one are essential for international recipes, travel and engineering.",
  },
  {
    question: "Is there an easy mental shortcut for conversion?",
    answer:
      "For a rough estimate: double the Celsius and add 30 to get Fahrenheit (or subtract 30 and halve to go back). It is not exact, but close enough for weather — for precise values like this tool, use the exact formulas.",
  },
  {
    question: "Does the tool support very low or high temperatures?",
    answer:
      "Yes. It works over the full range of each scale, including negative values and extremes like absolute zero (-273.15 °C), so it is accurate for science, engineering and everyday use alike.",
  },
];

export const listRandomizerFaqs = [
  {
    question: "How do I use the list randomizer?",
    answer:
      "Type or paste one item per line (names, numbers, tasks, prizes), choose to shuffle the list or pick a number of winners, and press the button. Every result is produced by a cryptographically secure random shuffle, so each draw is fair.",
  },
  {
    question: "Is the shuffle truly random?",
    answer:
      "Yes. The tool uses the Fisher–Yates algorithm with the Web Crypto API's secure random number generator — the same technique and source used for shuffling cards in online games. Every possible ordering is equally likely.",
  },
  {
    question: "Can I pick winners without repeats?",
    answer:
      "Yes. When you choose to pick winners, each winner is removed from the pool after being drawn, so no person or item can win twice. This makes it perfect for giveaways, raffles and lucky draws.",
  },
  {
    question: "What is a fair way to run an online giveaway?",
    answer:
      "Collect entries as one item per line, use the 'pick winners' option, and record the result. Because the draw uses secure randomness and can be re-run for verification, it is transparent — which builds trust with your audience.",
  },
  {
    question: "Can I randomize a list without losing the original order?",
    answer:
      "Yes. Your original list stays in the input box untouched. The shuffled result appears in the output area, so you can compare, re-shuffle as many times as you like, and copy the result when you are happy.",
  },
  {
    question: "What other ways can I use a randomizer?",
    answer:
      "Shuffle meeting order or presentation slots, randomize quiz questions, pick a random task from a to-do list, draw a random country or dish for dinner, or randomly assign team members to groups.",
  },
];

export const fbrTaxCalculatorFaqs = [
  {
    question: "How is income tax calculated in Pakistan?",
    answer:
      "Pakistan uses a progressive slab system for individuals. For Tax Year 2025, the first Rs. 600,000 of taxable income is exempt. Income above that is taxed at rates ranging from 5% to 35% depending on the bracket. Companies pay a flat 29%. The FBR also deducts withholding tax at source, which is adjusted against your final liability when you file your annual return.",
  },
  {
    question: "What is the tax slab for salaried employees in Pakistan 2025?",
    answer:
      "For Tax Year 2025, salaried individuals pay: 0% on income up to Rs. 600,000; 5% on income from Rs. 600,001 to Rs. 1,200,000; 15% on income from Rs. 1,200,001 to Rs. 2,200,000; 25% on income from Rs. 2,200,001 to Rs. 3,200,000; 30% on income from Rs. 3,200,001 to Rs. 4,100,000; and 35% on income above Rs. 4,100,000.",
  },
  {
    question: "Do freelancers in Pakistan have to pay tax?",
    answer:
      "Yes. Freelancers are classified as non-salaried taxpayers and must file annual returns if their income exceeds Rs. 600,000. Banks deduct withholding tax on foreign remittances — 0.75% for filers and 1.5% for non-filers (for income up to Rs. 20 million). Freelancers can also claim business expenses like internet, equipment and software subscriptions to reduce their taxable income.",
  },
  {
    question: "How do I register for FBR tax as a freelancer?",
    answer:
      "Visit the FBR Iris portal (iris.fbr.gov.pk) and register for an NTN (National Tax Number) as a non-salaried individual. You will need your CNIC, bank account details and proof of income. Once registered, you can file your annual return and monthly withholding statements. Many freelancers also register for sales tax if their turnover exceeds Rs. 3 million.",
  },
  {
    question: "What is the difference between filer and non-filer in Pakistan?",
    answer:
      "A filer is someone who regularly files their income tax returns with FBR. Non-filers face higher withholding tax rates on nearly every financial transaction — banking, property, vehicles, dividends and services. For example, the withholding tax on services for filers is 0.75%, while non-filers pay 1.5%. Being a filer also improves your credit profile and makes visa applications easier.",
  },
  {
    question: "What is the company tax rate in Pakistan?",
    answer:
      "Companies in Pakistan pay a flat 29% on their taxable income under Section 100C of the Income Tax Ordinance, 2001. This applies to private limited companies, public limited companies and single-member companies. There is no slab system for companies — the flat rate applies regardless of income level.",
  },
  {
    question: "Can I reduce my tax liability legally in Pakistan?",
    answer:
      "Yes. Pakistan's tax code offers several legal deductions: investment in listed shares (Section 62), life insurance premiums (Section 63), pension fund contributions (Section 64), donations to approved charities (Section 61), and depreciation on business assets. Consult a registered tax advisor to optimize your deductions based on your specific situation.",
  },
  {
    question: "When is the tax filing deadline in Pakistan?",
    answer:
      "The deadline for individual taxpayers (salaried and non-salaried) is typically September 30 each year. Company returns are due by December 31. Late filing attracts penalties starting at Rs. 1,000 per day for individuals, plus additional surcharges. It is best to file early to avoid last-minute issues.",
  },
  {
    question: "Is this FBR tax calculator accurate?",
    answer:
      "This calculator provides estimates based on the officially published FBR tax slabs for Tax Year 2025. While we strive for accuracy, your actual tax liability may vary based on surcharges, credits, exemptions, minimum tax provisions and other specific circumstances. Always consult a registered tax practitioner and refer to fbr.gov.pk for official filing.",
  },
  {
    question: "What is withholding tax and how does it work?",
    answer:
      "Withholding tax is tax deducted at the source of income — your employer, bank or client deducts it before paying you. In Pakistan, salaries, services, bank withdrawals and foreign remittances all attract withholding tax. The deducted amount is adjusted against your final annual tax liability when you file your return. If you are over-withheld, you receive a refund; if under-withheld, you pay the balance.",
  },
];

export const aiImageDetectorFaqs = [
  {
    question: "How does the AI image detector work?",
    answer:
      "The tool analyses your image using six independent detection methods — metadata scanning, frequency-domain (FFT) analysis, colour distribution, noise patterns, edge coherence and texture complexity. Each method produces a score, and the results are combined into a single AI-probability rating. Everything runs in your browser; the image is never uploaded to any server.",
  },
  {
    question: "Which AI generators can this tool detect?",
    answer:
      "The detector is trained to recognise patterns from ChatGPT (DALL-E), Midjourney, Stable Diffusion, Adobe Firefly, Gemini (Imagen), Flux and Leonardo AI. It looks for metadata signatures, spectral artefacts and statistical fingerprints that each generator leaves behind. Detection accuracy varies by generator and image complexity.",
  },
  {
    question: "Is my uploaded image stored or shared?",
    answer:
      "No. Your image never leaves your browser. The entire analysis runs locally using the Canvas API and JavaScript — no data is sent to a server, logged or stored. Close the tab and the image is gone.",
  },
  {
    question: "How accurate is the detector?",
    answer:
      "Accuracy depends on image size, quality and the generator used. For large, high-quality images from major generators the tool achieves strong detection rates. Low-resolution, heavily compressed or heavily edited images are harder to classify. Always use the result as a guide alongside human judgement.",
  },
  {
    question: "Can the tool detect AI images that have been edited or filtered?",
    answer:
      "Light editing (cropping, resizing, basic colour correction) usually preserves the underlying AI signatures the tool looks for. Heavy edits — such as significant inpainting,风格transfer or extensive Photoshop work — can mask or alter those signatures, reducing accuracy.",
  },
  {
    question: "Why does the tool show different scores for different generators?",
    answer:
      "Each AI generator leaves slightly different artefacts. Some generators embed metadata (making detection easy), while others rely on diffusion-based synthesis that creates specific frequency patterns. The tool weighs each detection method differently based on which generator's fingerprints it finds.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes. The AI image detector is completely free with no usage limits, no sign-up required and no watermarks. You can analyse as many images as you need.",
  },
  {
    question: "Does the tool work with all image formats?",
    answer:
      "The tool supports all major image formats including JPEG, PNG, WebP, GIF and BMP. For best results use the original high-quality image rather than a heavily compressed screenshot. Larger images provide more data for the analysis engine to work with.",
  },
];
