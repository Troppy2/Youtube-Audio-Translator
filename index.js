// --- YouTube Video Translation Button ---
document.getElementById("load_video_btn").onclick = async function () {
    const button = this;
    button.innerHTML = "Translating...";

    const urlInput = document.getElementById("user_website_enter_form").value;
    const language = document.getElementById("dropdownMenuButton1").textContent.trim();

    // Validate YouTube URL
    if (!urlInput.includes("youtube.com") && !urlInput.includes("youtu.be")) {
        alert("Please enter a valid YouTube URL.");
        button.innerHTML = "Translate Video";
        return;
    }

    // Generate embeddable YouTube URL
    let embedUrl = urlInput;
    if (urlInput.includes("watch?v=")) {
        embedUrl = urlInput.replace("watch?v=", "embed/");
    } else if (urlInput.includes("youtu.be/")) {
        embedUrl = "https://www.youtube.com/embed/" + urlInput.split("youtu.be/")[1];
    }

    document.getElementById("youtube_iframe").src = embedUrl;
/*

    // Send to backend for translation
    try {
        const response = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: urlInput, language }),
        });

        const data = await response.json();

        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert("Translation:\n" + data.translation);
            // You can render `data.translation` in a div if desired
        }
    } catch (err) {
        alert("Translation failed: " + err.message);
    }

    button.innerHTML = "Translate Video";
};

// Define language configurations with their prompt instructions
const languageConfigs = [
    { code: "fr", instructions: french_instructions },
    { code: "es", instructions: spanish_instructions },
    { code: "tl", instructions: tagalog_instructions },
    { code: "en", instructions: english_instructions },
    { code: "zh", instructions: mandarin_instructions },
    { code: "yo", instructions: yoruba_instructions },
];

// Initialize OpenAI Realtime clients for each language
const clientRefs = useRef(
    languageConfigs.reduce((acc, { code }) => {
        acc[code] = new RealtimeClient({
            apiKey: OPENAI_API_KEY,
            dangerouslyAllowAPIKeyInBrowser: true,
        });
        return acc;
    }, {})
).current;

// Add clientRef to each config
const updatedLanguageConfigs = languageConfigs.map(config => ({
    ...config,
    clientRef: { current: clientRefs[config.code] },
}));

// Function to connect and set up all clients
const connectAndSetupClients = async () => {
    for (const { clientRef } of updatedLanguageConfigs) {
        const client = clientRef.current;
        await client.realtime.connect({ model: DEFAULT_REALTIME_MODEL });
        await client.updateSession({ voice: DEFAULT_REALTIME_VOICE });
    }
};

// Start audio recording and stream to all clients
const startRecording = async () => {
    setIsRecording(true);
    const wavRecorder = wavRecorderRef.current;

    await wavRecorder.record(data => {
        updatedLanguageConfigs.forEach(({ clientRef }) => {
            clientRef.current.appendInputAudio(data.mono);
        });
    });
};

// Connect conversation (UI trigger function)
const connectConversation = useCallback(async () => {
    try {
        setIsLoading(true);
        const wavRecorder = wavRecorderRef.current;
        await wavRecorder.begin();
        await connectAndSetupClients();
        setIsConnected(true);
    } catch (error) {
        console.error("Error connecting to conversation:", error);
    } finally {
        setIsLoading(false);
    }
}, []);

// Connect to local socket server and setup event listeners
const connectServer = useCallback(async () => {
    if (socketRef.current) return;

    try {
        const socket = io("http://localhost:3001");
        socketRef.current = socket;

        await wavStreamPlayerRef.current.connect();

        socket.on("connect", () => {
            console.log("Listener connected:", socket.id);
            setIsConnected(true);
        });

        socket.on("disconnect", () => {
            console.log("Listener disconnected");
            setIsConnected(false);
        });
    } catch (error) {
        console.error("Error connecting to server:", error);
    }
}, []);
*/