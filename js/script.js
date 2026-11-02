/* BETWEEN THE LINES — website interactions */
"use strict";

/* =====================================
   1. LANGUAGE TRANSLATIONS
===================================== */

const translations = {
    en: {
        navHome: "Home",
        navExplore: "Art",
        navSongs: "Music",
        navAbout: "About",

        heroEyebrow: "A PLACE FOR STORIES AND FEELINGS",
        heroTitle: "Between the Lines",
        heroDescription: "Every song has a story. Every artwork holds a feeling. Somewhere in the world, someone might feel the same way.",
        heroButton: "Explore Gallery",
        shareArtButton: "Share Your Art",
        shareMusicButton: "Share Music",

        aboutEyebrow: "ABOUT THIS PLACE",
        aboutTitle: "You are not alone.",
        aboutDescription: "This is a place where people share the stories behind their favourite songs and artworks. You may discover that someone, somewhere, understands exactly how you feel.",

        galleryEyebrow: "A COLLECTION OF FEELINGS",
        galleryTitle: "Stories Through Art",
        galleryDescription: "Share an artwork and tell us the story behind it.",

        artworkFormTitle: "Share Your Artwork",
        artworkFormDescription: "Every artwork has a story worth sharing.",
        artworkImageLabel: "Choose an Image",
        chooseFileButton: "Choose File",
        noFileSelected: "No file selected",
        artworkImageHint: "JPG, PNG or WebP. Maximum 5MB.",
        artworkTitleLabel: "Artwork Title",
        artworkStoryLabel: "The Story Behind It",
        artworkTypeLabel: "Artwork Type",
        artworkReferenceLabel: "Reference / Original Source",
        artworkIdentityLabel: "How would you like to appear?",
        penNameLabel: "Your Pen Name",
        artworkSubmit: "Share Artwork",
        artworkOriginal: "Original Artwork",
        artworkStudy: "Study / Inspired Artwork",
        artworkDetailEyebrow: "THE STORY BEHIND THE ARTWORK",
        loadingArtwork: "Loading artwork...",
        emptyArtworks: "No artwork shared yet. Your creation could be the first.",
        artworkSuccess: "Thank you for sharing your artwork!",
        artworkError: "Could not upload your artwork. Please try again.",
        artworkUploading: "Uploading your artwork...",
        artworkReferencePrefix: "Reference: ",
        artworkAuthorPrefix: "Artist: ",
        artworkTypePrefix: "Type: ",
        artworkNoImage: "Image unavailable",

        songsEyebrow: "MUSIC CONNECTS US",
        songsTitle: "Our Songs, Our Stories",
        songsDescription: "Tell us about a song that means something special to you.",
        songFormTitle: "Share Your Song",
        songFormDescription: "Tell us why this song matters to you.",
        songTitleLabel: "Song Title",
        songArtistLabel: "Artist",
        songStoryLabel: "Your Story",
        identityLabel: "How would you like to appear?",
        anonymousOption: "Anonymous",
        pennameOption: "Use a Pen Name",
        songSubmit: "Share Your Story",
        loadingSongs: "Loading stories...",
        emptySongs: "No stories yet. Your song could be the first.",
        songDetailEyebrow: "THE STORY BEHIND THE SONG",
        readStoryHint: "Select to read the full story",
        commentsTitle: "Leave a Thought",
        loadingComments: "Loading comments...",
        commentLabel: "Your Comment",
        commentNameLabel: "Your Name (Optional)",
        commentSubmit: "Post Comment",
        commentEmpty: "No comments yet. Be the first to respond.",

        footerText: "Between the Lines — A place where feelings find each other.",
        nameRequired: "Please enter your pen name.",
        requiredFields: "Please complete all required fields.",
        tooLong: "Some fields exceed the allowed length.",
        songSubmitting: "Submitting your story...",
        songSuccess: "Thank you for sharing your story.",
        songError: "Submission failed. Please try again.",
        commentSuccess: "Your message has been added. Thank you.",
        commentError: "Could not submit your comment.",
        commentTooLong: "Your comment or name is too long."
    },

    zh: {
        navHome: "首页",
        navExplore: "画作",
        navSongs: "音乐故事",
        navAbout: "关于我们",

        heroEyebrow: "一个分享故事与情感的空间",
        heroTitle: "字里行间",
        heroDescription: "每一首歌都有一个故事，每一幅画都承载着一种情感。在世界的某个角落，也许有人正与你有着相同的感受。",
        heroButton: "探索画廊",
        shareArtButton: "分享你的画作",
        shareMusicButton: "分享音乐",

        aboutEyebrow: "关于这个空间",
        aboutTitle: "你的感受并不只有你一个人懂。",
        aboutDescription: "这里是一个分享喜爱的歌曲、画作以及个人故事的地方。也许你会发现，在世界的某个角落，有人能够真正理解你的感受。",

        galleryEyebrow: "情感的收藏",
        galleryTitle: "画作里的故事",
        galleryDescription: "分享一幅作品，并告诉我们它背后的故事。",

        artworkFormTitle: "分享你的画作",
        artworkFormDescription: "每一幅作品，都有值得分享的故事。",
        artworkImageLabel: "选择图片",
        chooseFileButton: "选择文件",
        noFileSelected: "尚未选择文件",
        artworkImageHint: "支持 JPG、PNG 或 WebP，最大 5MB。",
        artworkTitleLabel: "作品标题",
        artworkStoryLabel: "作品背后的故事",
        artworkTypeLabel: "作品类型",
        artworkReferenceLabel: "参考作品／原始来源",
        artworkIdentityLabel: "你希望如何展示身份？",
        penNameLabel: "你的笔名",
        artworkSubmit: "分享画作",
        artworkOriginal: "原创作品",
        artworkStudy: "临摹／灵感作品",
        artworkDetailEyebrow: "画作背后的故事",
        loadingArtwork: "正在加载画作……",
        emptyArtworks: "目前还没有画作分享。你的作品可以成为第一幅。",
        artworkSuccess: "感谢你分享自己的画作！",
        artworkError: "画作上传失败，请稍后重试。",
        artworkUploading: "正在上传画作，请稍候……",
        artworkReferencePrefix: "参考来源：",
        artworkAuthorPrefix: "创作者：",
        artworkTypePrefix: "作品类型：",
        artworkNoImage: "图片暂时无法显示",

        songsEyebrow: "音乐连接着我们",
        songsTitle: "我们的歌，我们的故事",
        songsDescription: "分享一首对你有特别意义的歌曲，以及它背后的故事。",
        songFormTitle: "分享你的歌曲",
        songFormDescription: "告诉我们这首歌为什么对你如此特别。",
        songTitleLabel: "歌曲名称",
        songArtistLabel: "歌手",
        songStoryLabel: "你的故事",
        identityLabel: "你希望如何展示身份？",
        anonymousOption: "匿名",
        pennameOption: "使用笔名",
        songSubmit: "分享你的故事",
        loadingSongs: "正在加载歌曲故事……",
        emptySongs: "目前还没有歌曲故事。你的分享可以成为第一个。",
        songDetailEyebrow: "歌曲背后的故事",
        readStoryHint: "点击阅读完整故事",
        commentsTitle: "留下你的回应",
        loadingComments: "正在加载留言……",
        commentLabel: "你的留言",
        commentNameLabel: "你的名字（选填）",
        commentSubmit: "发布留言",
        commentEmpty: "还没有留言，留下第一条回应吧。",

        footerText: "Between the Lines——为每一份情感，留下一处相遇的空间。",
        nameRequired: "请填写你的笔名。",
        requiredFields: "请填写所有必填内容。",
        tooLong: "部分内容超过允许的长度。",
        songSubmitting: "正在分享，请稍候……",
        songSuccess: "感谢你分享自己的故事！",
        songError: "分享失败，请稍后重试。",
        commentSuccess: "留言已添加，谢谢你的回应。",
        commentError: "留言提交失败，请稍后重试。",
        commentTooLong: "留言或名字太长了。"
    }
};


/* =====================================
   2. GLOBAL VARIABLES
===================================== */

const $ = id => document.getElementById(id);

let currentLanguage = "en";

let allSongs = [];
let allArtworks = [];
let activeSongId = null;
let artworkPreviewUrl = null;

// 每次打开网页都默认英文
document.documentElement.lang = "en";

const t = key => translations[currentLanguage][key] || key;


/* =====================================
   3. GENERAL FUNCTIONS
===================================== */

function message(id, text, error = false) {
    const el = $(id);

    if (!el) return;

    el.textContent = text;
    el.classList.toggle("error-message", error);
}

function setBodyModalState() {
    const open = [
        "artworkDetailModal",
        "songDetailModal"
    ].some(id => $(id) && !$(id).hidden);

    document.body.classList.toggle("modal-open", open);
}


/* =====================================
   4. LANGUAGE SWITCH
===================================== */

function changeLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    document.documentElement.lang =
        language === "zh" ? "zh-CN" : "en";

    // 更新所有带有 data-i18n 的文字
    document.querySelectorAll("[data-i18n]").forEach(el => {

        const value = translations[language][el.dataset.i18n];

        if (value !== undefined) {
            el.textContent = value;
        }

    });

    // 更新输入框提示文字
    const placeholders = {

        artworkTitle: [
            "Give your artwork a title",
            "为你的作品取一个标题"
        ],

        artworkStory: [
            "Tell us what this artwork means to you...",
            "告诉我们这幅作品背后的故事……"
        ],

        artworkPenName: [
            "Enter your pen name",
            "填写你的笔名"
        ],

        songTitle: [
            "Enter the song title",
            "输入歌曲名称"
        ],

        songArtist: [
            "Enter the artist's name",
            "输入歌手名称"
        ],

        songStory: [
            "What does this song mean to you?",
            "告诉我们这首歌对你有什么意义……"
        ],

        songPenName: [
            "Enter your pen name",
            "填写你的笔名"
        ],

        commentText: [
            "Share your thoughts...",
            "分享你的想法……"
        ],

        commentName: [
            "Anonymous",
            "匿名"
        ],

        artworkReference: [
            "Add the original artist or source",
            "填写原作者或参考来源"
        ]

    };

    Object.entries(placeholders).forEach(([id, values]) => {

        const element = $(id);

        if (element) {
            element.placeholder =
                language === "zh" ? values[1] : values[0];
        }

    });

    // 更新语言选择按钮的选中状态
document.querySelectorAll(".language-option").forEach(button => {

    const selected = button.dataset.language === language;

    button.classList.toggle("active", selected);

    button.setAttribute("aria-pressed", String(selected));

});
    

    // 更新文件选择提示
    const selectedFile = $("artworkImage")?.files?.[0];

    if ($("selectedFileName")) {
        $("selectedFileName").textContent =
            selectedFile ? selectedFile.name : t("noFileSelected");
    }

    // 更新动态内容
    renderSongs();
    renderArtworks();

    if (activeSongId) {
        loadComments(activeSongId);
    }
}

// =====================================
// LANGUAGE BUTTON CLICK
// 中英文切换按钮
// =====================================

// 直接选择语言，不再使用每次翻转的 toggle
document.addEventListener("click", function(event) {

    const button = event.target.closest(".language-option");

    if (!button) return;

    const selectedLanguage = button.dataset.language;

    changeLanguage(selectedLanguage);

});


/* =====================================
   5. IDENTITY SETTINGS
===================================== */

function updateIdentity(selectId, groupId, inputId) {

    const useName = $(selectId).value === "penname";

    $(groupId).hidden = !useName;
    $(inputId).required = useName;

}

$("songIdentity")?.addEventListener("change", () => {
    updateIdentity(
        "songIdentity",
        "penNameGroup",
        "songPenName"
    );
});

$("artworkIdentity")?.addEventListener("change", () => {
    updateIdentity(
        "artworkIdentity",
        "artworkPenNameGroup",
        "artworkPenName"
    );
});

$("artworkType")?.addEventListener("change", () => {
    $("referenceGroup").hidden =
        $("artworkType").value !== "Study";
});


/* =====================================
   6. SONG DATA
===================================== */

async function loadSongs() {

    const list = $("songList");

    if (!list) return;

    list.textContent = t("loadingSongs");

    try {

        const { data, error } = await supabaseClient
            .from("songs")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;

        allSongs = data || [];

        renderSongs();

    } catch (e) {

        console.error("Loading songs failed:", e);

        list.textContent =
            currentLanguage === "zh"
                ? "歌曲加载失败，请检查 Supabase 设置。"
                : "Could not load songs. Check your Supabase settings.";

    }
}


function renderSongs() {

    const list = $("songList");

    if (!list) return;

    list.replaceChildren();

    if (!allSongs.length) {

        const p = document.createElement("p");

        p.className = "empty-message";
        p.textContent = t("emptySongs");

        list.append(p);

        return;
    }

    allSongs.forEach(song => {

        const card = document.createElement("article");

        card.className = "song-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        const title = document.createElement("h4");
        title.textContent = song.song_title || "";

        const artist = document.createElement("p");
        artist.className = "song-artist";
        artist.textContent = song.artist || "";

        const story = document.createElement("p");
        story.className = "song-story";

        const full = song.story || "";

        story.textContent =
            full.length > 150
                ? full.slice(0, 150) + "…"
                : full;

        const author = document.createElement("p");
        author.className = "song-author";

        author.textContent =
            song.is_anonymous
                ? t("anonymousOption")
                : (song.display_name || t("anonymousOption"));

        const hint = document.createElement("span");

        hint.className = "card-hint";
        hint.textContent = t("readStoryHint");

        const open = () => openSongDetail(song.id);

        card.addEventListener("click", open);

        card.addEventListener("keydown", e => {

            if (e.key === "Enter" || e.key === " ") {

                e.preventDefault();
                open();

            }

        });

        card.append(title, artist, story, author, hint);

        list.append(card);

    });

}


/* =====================================
   7. SONG SUBMISSION
===================================== */

$("songForm")?.addEventListener("submit", async e => {

    e.preventDefault();

    const title = $("songTitle").value.trim();
    const artist = $("songArtist").value.trim();
    const story = $("songStory").value.trim();

    const identity = $("songIdentity").value;
    const name = $("songPenName").value.trim();

    const button =
        $("songForm").querySelector('[type="submit"]');

    if (!title || !artist || !story) {

        message("songMessage", t("requiredFields"), true);

        return;
    }

    if (identity === "penname" && !name) {

        message("songMessage", t("nameRequired"), true);

        return;
    }

    if (
        title.length > 150 ||
        artist.length > 150 ||
        story.length > 2000 ||
        name.length > 40
    ) {

        message("songMessage", t("tooLong"), true);

        return;
    }

    button.disabled = true;

    message("songMessage", t("songSubmitting"));

    try {

        const { error } = await supabaseClient
            .from("songs")
            .insert({
                song_title: title,
                artist,
                story,
                display_name:
                    identity === "anonymous" ? "Anonymous" : name,
                is_anonymous: identity === "anonymous"
            });

        if (error) throw error;

        $("songForm").reset();

        updateIdentity(
            "songIdentity",
            "penNameGroup",
            "songPenName"
        );

        await loadSongs();

        message("songMessage", t("songSuccess"));

    } catch (err) {

        console.error("Song submission failed:", err);

        message(
            "songMessage",
            t("songError") + " " + (err.message || ""),
            true
        );

    } finally {

        button.disabled = false;

    }

});


/* =====================================
   8. SONG DETAILS AND COMMENTS
===================================== */

async function openSongDetail(id) {

    const song = allSongs.find(x => x.id === id);

    if (!song) return;

    activeSongId = id;

    $("detailSongTitle").textContent = song.song_title || "";
    $("detailSongArtist").textContent = song.artist || "";
    $("detailSongStory").textContent = song.story || "";

    $("detailSongAuthor").textContent =
        song.is_anonymous
            ? t("anonymousOption")
            : (song.display_name || t("anonymousOption"));

    $("songDetailModal").hidden = false;

    setBodyModalState();

    await loadComments(id);

}


function closeSongDetail() {

    $("songDetailModal").hidden = true;

    activeSongId = null;

    setBodyModalState();

}

$("closeSongModal")?.addEventListener("click", closeSongDetail);

$("songDetailModal")?.addEventListener("click", e => {

    if (e.target === $("songDetailModal")) {
        closeSongDetail();
    }

});


async function loadComments(songId) {

    const list = $("commentList");

    if (!list) return;

    list.textContent = t("loadingComments");

    try {

        const { data, error } = await supabaseClient
            .from("comments")
            .select("*")
            .eq("song_id", songId)
            .order("created_at", { ascending: true });

        if (error) throw error;

        renderComments(data || []);

    } catch (e) {

        console.error("Loading comments failed:", e);

        list.textContent =
            currentLanguage === "zh"
                ? "留言加载失败。"
                : "Could not load comments.";

    }

}


function renderComments(comments) {

    const list = $("commentList");

    list.replaceChildren();

    if (!comments.length) {

        const p = document.createElement("p");

        p.className = "empty-message";
        p.textContent = t("commentEmpty");

        list.append(p);

        return;
    }

    comments.forEach(c => {

        const item = document.createElement("article");
        item.className = "comment-item";

        const author = document.createElement("strong");
        author.textContent = c.display_name || t("anonymousOption");

        const body = document.createElement("p");
        body.textContent = c.comment || "";

        const date = document.createElement("small");

        date.textContent = c.created_at
            ? new Date(c.created_at).toLocaleString(
                currentLanguage === "zh" ? "zh-CN" : "en"
            )
            : "";

        item.append(author, body, date);

        list.append(item);

    });

}


$("commentForm")?.addEventListener("submit", async e => {

    e.preventDefault();

    if (!activeSongId) return;

    const text = $("commentText").value.trim();
    const name = $("commentName").value.trim();

    const button =
        $("commentForm").querySelector('[type="submit"]');

    if (!text) {

        message("commentMessage", t("requiredFields"), true);

        return;
    }

    if (text.length > 1000 || name.length > 40) {

        message("commentMessage", t("commentTooLong"), true);

        return;
    }

    const songId = activeSongId;

    button.disabled = true;

    try {

        const { error } = await supabaseClient
            .from("comments")
            .insert({
                song_id: songId,
                comment: text,
                display_name: name || "Anonymous"
            });

        if (error) throw error;

        $("commentForm").reset();

        await loadComments(songId);

        message("commentMessage", t("commentSuccess"));

    } catch (err) {

        console.error("Comment submission failed:", err);

        message("commentMessage", t("commentError"), true);

    } finally {

        button.disabled = false;

    }

});


/* =====================================
   9. ARTWORK DATA AND GALLERY
===================================== */

function artworkUrl(item) {

    if (!item) return "";

    if (item.image_url) return item.image_url;

    if (!item.image_path) return "";

    return supabaseClient
        .storage
        .from("artwork-images")
        .getPublicUrl(item.image_path)
        .data?.publicUrl || "";

}


async function loadArtworks() {

    const grid = $("galleryGrid");

    if (!grid) return;

    grid.textContent = t("loadingArtwork");

    try {

        const { data, error } = await supabaseClient
            .from("artworks")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;

        allArtworks = data || [];

        renderArtworks();

    } catch (e) {

        console.error("Loading artworks failed:", e);

        grid.textContent =
            currentLanguage === "zh"
                ? "画作加载失败，请检查 Supabase 设置。"
                : "Could not load artwork. Check your Supabase settings.";

    }

}


function renderArtworks() {

    const grid = $("galleryGrid");

    if (!grid) return;

    grid.replaceChildren();

    if (!allArtworks.length) {

        const p = document.createElement("p");

        p.className = "empty-message";
        p.textContent = t("emptyArtworks");

        grid.append(p);

        return;
    }

    allArtworks.forEach(item => {

        const card = document.createElement("article");

        card.className = "art-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        const img = document.createElement("img");

        img.src = artworkUrl(item);
        img.alt = item.title || "Artwork";
        img.loading = "lazy";

        img.onerror = () => {
            img.alt = t("artworkNoImage");
        };

        const info = document.createElement("div");
        info.className = "art-info";

        const title = document.createElement("h3");
        title.textContent = item.title || "";

        const type = document.createElement("span");

        type.className = "artwork-type";

        type.textContent =
            item.art_type === "Original"
                ? t("artworkOriginal")
                : t("artworkStudy");

        const story = document.createElement("p");

        const full = item.story || "";

        story.textContent =
            full.length > 150
                ? full.slice(0, 150) + "…"
                : full;

        const author = document.createElement("span");

        author.className = "artwork-author";

        author.textContent =
            item.is_anonymous
                ? t("anonymousOption")
                : (item.display_name || t("anonymousOption"));

        info.append(title, type, story, author);

        if (item.reference_source) {

            const ref = document.createElement("p");

            ref.textContent =
                t("artworkReferencePrefix") + item.reference_source;

            info.append(ref);

        }

        const open = () => openArtworkDetail(item.id);

        card.addEventListener("click", open);

        card.addEventListener("keydown", e => {

            if (e.key === "Enter" || e.key === " ") {

                e.preventDefault();
                open();

            }

        });

        card.append(img, info);

        grid.append(card);

    });

}


/* =====================================
   10. ARTWORK DETAILS
===================================== */

function openArtworkDetail(id) {

    const item = allArtworks.find(x => x.id === id);

    if (!item) return;

    const img = $("detailArtworkImage");

    img.src = artworkUrl(item);
    img.alt = item.title || "Artwork";

    img.onerror = () => {

        img.removeAttribute("src");

        img.alt = t("artworkNoImage");

    };

    $("detailArtworkTitle").textContent = item.title || "";

    $("detailArtworkType").textContent =
        t("artworkTypePrefix") +
        (
            item.art_type === "Original"
                ? t("artworkOriginal")
                : t("artworkStudy")
        );

    $("detailArtworkStory").textContent = item.story || "";

    $("detailArtworkAuthor").textContent =
        t("artworkAuthorPrefix") +
        (
            item.is_anonymous
                ? t("anonymousOption")
                : (item.display_name || t("anonymousOption"))
        );

    $("detailArtworkReference").textContent =
        item.reference_source
            ? t("artworkReferencePrefix") + item.reference_source
            : "";

    $("artworkDetailModal").hidden = false;

    setBodyModalState();

}


function closeArtworkDetail() {

    $("artworkDetailModal").hidden = true;

    setBodyModalState();

}

$("closeArtworkModal")?.addEventListener("click", closeArtworkDetail);

$("artworkDetailModal")?.addEventListener("click", e => {

    if (e.target === $("artworkDetailModal")) {
        closeArtworkDetail();
    }

});


document.addEventListener("keydown", e => {

    if (e.key !== "Escape") return;

    if ($("artworkDetailModal") && !$("artworkDetailModal").hidden) {
        closeArtworkDetail();
    }

    if ($("songDetailModal") && !$("songDetailModal").hidden) {
        closeSongDetail();
    }

});


/* =====================================
   11. ARTWORK IMAGE PREVIEW
===================================== */

function clearPreview() {

    if (artworkPreviewUrl) {

        URL.revokeObjectURL(artworkPreviewUrl);

        artworkPreviewUrl = null;

    }

    $("artworkPreview").removeAttribute("src");

    $("artworkPreviewContainer").hidden = true;

}


$("artworkImage")?.addEventListener("change", () => {

    const file = $("artworkImage").files[0];

    const fileNameDisplay = $("selectedFileName");

    if (fileNameDisplay) {
        fileNameDisplay.textContent =
            file ? file.name : t("noFileSelected");
    }

    if ($("selectedFileName")) {

        $("selectedFileName").textContent =
            file ? file.name : t("noFileSelected");

    }

    clearPreview();

    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {

        $("artworkImage").value = "";

        if ($("selectedFileName")) {
            $("selectedFileName").textContent = t("noFileSelected");
        }

        alert(
            currentLanguage === "zh"
                ? "只支持 JPG、PNG 和 WebP 图片。"
                : "Only JPG, PNG and WebP images are supported."
        );

        return;
    }

    if (file.size > 5 * 1024 * 1024) {

        $("artworkImage").value = "";

        if ($("selectedFileName")) {
            $("selectedFileName").textContent = t("noFileSelected");
        }

        alert(
            currentLanguage === "zh"
                ? "图片不能超过 5MB。"
                : "Image size cannot exceed 5MB."
        );

        return;
    }

    artworkPreviewUrl = URL.createObjectURL(file);

    $("artworkPreview").src = artworkPreviewUrl;

    $("artworkPreviewContainer").hidden = false;

});


/* =====================================
   12. ARTWORK UPLOAD
===================================== */

$("artworkForm")?.addEventListener("submit", async e => {

    e.preventDefault();

    const file = $("artworkImage").files[0];

    const title = $("artworkTitle").value.trim();

    const story = $("artworkStory").value.trim();

    const type = $("artworkType").value;

    const reference = $("artworkReference").value.trim();

    const identity = $("artworkIdentity").value;

    const name = $("artworkPenName").value.trim();

    const button = $("artworkSubmitButton");

    if (!file || !title || !story) {

        message("artworkMessage", t("requiredFields"), true);

        return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {

        message(
            "artworkMessage",
            currentLanguage === "zh"
                ? "图片格式不正确。"
                : "Unsupported image format.",
            true
        );

        return;
    }

    if (file.size > 5 * 1024 * 1024) {

        message(
            "artworkMessage",
            currentLanguage === "zh"
                ? "图片不能超过 5MB。"
                : "Image size cannot exceed 5MB.",
            true
        );

        return;
    }

    if (identity === "penname" && !name) {

        message("artworkMessage", t("nameRequired"), true);

        return;
    }

    if (
        title.length > 100 ||
        story.length > 2000 ||
        name.length > 40 ||
        reference.length > 300
    ) {

        message("artworkMessage", t("tooLong"), true);

        return;
    }

    const ext = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp"
    }[file.type];

    const path =
        `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    let uploaded = false;

    button.disabled = true;

    message("artworkMessage", t("artworkUploading"));

    try {

        const { error: uploadError } = await supabaseClient
            .storage
            .from("artwork-images")
            .upload(path, file, {
                contentType: file.type,
                upsert: false
            });

        if (uploadError) throw uploadError;

        uploaded = true;

        const { error: insertError } = await supabaseClient
            .from("artworks")
            .insert({

                title,
                story,

                display_name:
                    identity === "anonymous" ? "Anonymous" : name,

                is_anonymous: identity === "anonymous",

                art_type: type,

                reference_source:
                    type === "Study" ? (reference || null) : null,

                image_path: path

            });

        if (insertError) throw insertError;

        $("artworkForm").reset();

        clearPreview();

        if ($("selectedFileName")) {
            $("selectedFileName").textContent = t("noFileSelected");
        }

        $("referenceGroup").hidden = true;

        updateIdentity(
            "artworkIdentity",
            "artworkPenNameGroup",
            "artworkPenName"
        );

        await loadArtworks();

        message("artworkMessage", t("artworkSuccess"));

    } catch (err) {

        console.error("Artwork upload failed:", err);

        if (uploaded) {

            const { error: removeError } = await supabaseClient
                .storage
                .from("artwork-images")
                .remove([path]);

            if (removeError) {
                console.error("Image cleanup failed:", removeError);
            }

        }

        message(
            "artworkMessage",
            t("artworkError") + " " + (err.message || ""),
            true
        );

    } finally {

        button.disabled = false;

    }

});


/* =====================================
   13. INITIALIZE WEBSITE
===================================== */

function initializeWebsite() {

    updateIdentity(
        "songIdentity",
        "penNameGroup",
        "songPenName"
    );

    updateIdentity(
        "artworkIdentity",
        "artworkPenNameGroup",
        "artworkPenName"
    );

    $("referenceGroup").hidden =
        $("artworkType").value !== "Study";

    // 首次初始化为英文
    changeLanguage("en");

    if (typeof supabaseClient === "undefined") {

        console.error(
            "supabaseClient is unavailable. Check js/supabase.js."
        );

        $("songList").textContent = "Supabase is not connected.";

        $("galleryGrid").textContent = "Supabase is not connected.";

        return;
    }

    loadSongs();

    loadArtworks();

    console.log("Between the Lines initialized.");

}

initializeWebsite();