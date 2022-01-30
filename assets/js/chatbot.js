! function(e) {
    var t, i, n;
    e.$_Tawk_AccountKey = "5f95a8362915ea4ba0968cb8", e.$_Tawk_WidgetId = "default", e.$_Tawk_Unstable = !1, e.$_Tawk = e.$_Tawk || {}, e.$_Tawk.widgetSettings = {
            t: "inline",
            h: 380,
            w: 320,
            minh: 60,
            minw: 126,
            pos: "br",
            woc: "max",
            dsw: !1,
            lc: "en",
            hwol: !1,
            hwof: !1,
            hab: !1,
            dws: !1,
            hwt: !0,
            thm: {
                hbg: "#3b4a4b",
                htx: "#ffffff",
                topc: 5,
                btmc: 0,
                aBblBg: "#039746",
                aBblTx: "#ffffff",
                vBblBg: "#e5e5e5",
                vBblTx: "#333333"
            },
            bbl: "",
            mw: "round",
            dw: "min",
            wv: 10,
            ws: null,
            offlineForm: {
                shortMessage: "Send message",
                text: "Please fill out the form below and we will get back to you as soon as possible.",
                fields: [{
                    label: "Name",
                    isRequired: !0,
                    type: "name"
                }, {
                    label: "Email",
                    isRequired: !0,
                    type: "email"
                }, {
                    label: "Message",
                    isRequired: !0,
                    type: "message"
                }]
            },
            prechatForm: null,
            onlineGreeting: {
                actionMessage: "Write a reply..",
                shortMessage: "Online",
                longMessage: "We are live and ready to chat with you now. Say something to start a live chat."
            },
            awayGreeting: {
                shortMessage: "Away",
                longMessage: ""
            },
            cf: null,
            emoji: !0,
            uploads: !0,
            rating: !0,
            mprvw: !0,
            atyping: !0,
            vtyping: !0,
            tbi: !0
        }, t = void 0 === e ? window : e, (i = {
            pluralFormFunction: function(e) {
                return 1 === e ? "one" : "other"
            },
            form: {}
        }).form.SaveButton = {
            message: "Save"
        }, i.form.SubmitButton = {
            message: "Submit"
        }, i.form.StartChatButton = {
            message: "Start Chat"
        }, i.form.CancelButton = {
            message: "Cancel"
        }, i.form.CloseButton = {
            message: "Close"
        }, i.form.SendButton = {
            message: "Send"
        }, i.form.EmailPlaceholder = {
            message: "Email Address"
        }, i.form.QuestionPlaceholder = {
            message: "your query.."
        }, i.form.DepartmentsPlaceholder = {
            message: "select department.."
        }, i.form.MessagePlaceholder = {
            message: "your message.."
        }, i.form.NameErrorMessage = {
            message: "Name must be provided."
        }, i.form.EmailErrorMessage = {
            message: "Invalid email address."
        }, i.form.DepartmentsErrorMessage = {
            message: "Department is required."
        }, i.form.QuestionErrorMessage = {
            message: "Question is required and must not be longer then 500 characters."
        }, i.form.MessageErrorMessage = {
            message: "Message is required and must not be longer then 500 characters."
        }, i.form.NameFormMessage = {
            message: "Please change your name so we can recognize you the next time."
        }, i.form.EmailTranscriptFormMessage = {
            message: "Please fill out the form below to have this conversation sent to your email address."
        }, i.form.PreChatFormMessage = {
            message: "Please fill out the form below to start chatting with the next available agent."
        }, i.form.OfflineFormMessage = {
            message: "Please fill out the form below and we will get back to you as soon as possible."
        }, i.form.PreChatFormMessageProfile = {
            message: "Please fill out the form below to start chatting with me."
        }, i.form.OfflineMessageSent = {
            message: "Your message was sent successfully!"
        }, i.form.OfflineMessageNotSent = {
            message: "Your message was not delivered, please retry"
        }, i.form.EndChatTitle = {
            message: "Are you sure you want to end this chat?"
        }, i.form.RequiredErrorMessage = {
            message: "This field is required"
        }, i.form.PhoneErrorMessage = {
            message: "Invalid phone number"
        }, i.form.saved = {
            message: "Saved"
        }, i.form.errorSaving = {
            message: "Unable to save. Please try again"
        }, i.form.visitButton = {
            message: "Visit tawk.to"
        }, i.form.SubmittingProcess = {
            message: "Submitting"
        }, i.form.EndingProcess = {
            message: "Ending"
        }, i.form.SendingProcess = {
            message: "Sending"
        }, i.form.SavingProcess = {
            message: "Saving"
        }, i.form.EmailTranscriptTo = {
            message: "Email transcript to"
        }, i.form.name = {
            message: "Name"
        }, i.form.email = {
            message: "Email"
        }, i.form.department = {
            message: "Department"
        }, i.form.message = {
            message: "Message"
        }, i.form.any = {
            message: "Any"
        }, i.form.phone = {
            message: "Phone"
        }, i.form.question = {
            message: "Question"
        }, i.form.saving = {
            message: "Saving.."
        }, i.form.SubmittedFrom = {
            message: "Submitted From"
        }, i.form.SendMessage = {
            message: "Send message"
        }, i.form.sendAgain = {
            message: "Send Again"
        }, i.form.ChangeUsername = {
            message: "Change username"
        }, i.form.HelloAndWelcome = {
            message: "Hello and Welcome"
        }, i.form.EndChatMessage = {
            message: "Thank you for chatting with us. Feel free to start new chat session or enter your email and send a transcript of this conversation to your inbox."
        }, i.form.TranscriptMessage = {
            message: "Feel free to enter your email and send a transcript of this conversation to your inbox."
        }, i.form.chatEnded = {
            message: "Your chat has ended"
        }, i.form.skip = {
            message: "Skip"
        }, i.rollover = {}, i.rollover.popOut = {
            message: "Pop out"
        }, i.rollover.minimize = {
            message: "Minimize"
        }, i.rollover.resize = {
            message: "Resize"
        }, i.rollover.resendMessage = {
            message: "Resend message"
        }, i.rollover.emailTranscriptOption = {
            message: "Email Transcript"
        }, i.rollover.positiveRating = {
            message: "Rate this conversation with +1"
        }, i.rollover.negativeRating = {
            message: "Rate this conversation with -1"
        }, i.rollover.maximize = {
            message: "Maximize"
        }, i.rollover.end = {
            message: "End Chat"
        }, i.rollover.uploadFile = {
            message: "Upload File"
        }, i.rollover.videoCall = {
            message: "Video Call"
        }, i.rollover.voiceCall = {
            message: "Voice Call"
        }, i.rollover.screenShare = {
            message: "Screen Share"
        }, i.rollover.chatMenu = {
            message: "Menu"
        }, i.rollover.knowledgeBase = {
            message: "knowledge Base"
        }, i.transcript = {}, i.transcript.transcriptSubject = {
            message: "Chat email transcript on #host started on #startedOn",
            vars: ["host", "startedOn"]
        }, i.transcript.transcriptStartedOn = {
            message: "#dateString, at #time",
            vars: ["dateString", "time"]
        }, i.transcript.me = {
            message: "Me"
        }, i.transcript.CONVERSATION_STARTED_ON = {
            message: "Conversation started on"
        }, i.overlay = {}, i.overlay.inactive = {
            message: "Click here to reinitiate the chat"
        }, i.overlay.maintenance = {
            message: "Chat is in maintenance"
        }, i.overlay.cookiesOff = {
            message: "You can't use this chat because your browser's cookie functionality is turned off. Please turn it on and refresh your browser."
        }, i.overlay.tawkContent = {
            message: "This widget is powered by tawk.to - a free messaging application that lets you monitor and engage with the visitors on your website."
        }, i.chat = {}, i.chat.visitor_name = {
            message: "Visitor name"
        }, i.chat.like = {
            message: "You liked this conversation"
        }, i.chat.dislike = {
            message: "You disliked this conversation"
        }, i.chat.remove_rate = {
            message: "You removed your rating for this conversation"
        }, i.chat.sayButton = {
            message: "Say"
        }, i.chat.hideButton = {
            message: "Hide Chat"
        }, i.chat.send_mail = {
            message: "Send Mail"
        }, i.chat.AGENT_JOIN_CONVERSATION = {
            message: "#n has joined the conversation",
            vars: ["n"]
        }, i.chat.AGENT_LEFT_CONVERSATION = {
            message: "#n has left the conversation",
            vars: ["n"]
        }, i.chat.defaultName = {
            message: "You (change name)"
        }, i.chat.messageQueuedTitile = {
            message: "message queued"
        }, i.chat.live_chat = {
            message: "Live Chat"
        }, i.chat.notificationTitle = {
            message: "notification"
        }, i.chat.departmentIsOffline = {
            message: "Department #strongStart #departmentName #strongEnd is currently offline. You might be served by another department.",
            vars: ["departmentName", "strongStart", "strongEnd"]
        }, i.chat.departmentIsAway = {
            message: "Department #strongStart #departmentName #strongEnd is currently away.",
            vars: ["departmentName", "strongStart", "strongEnd"]
        }, i.chat.mobileName = {
            message: "You"
        }, i.chat.chatEnded = {
            message: "Your chat has ended"
        }, i.chat.newChat = {
            message: "Start New Chat"
        }, i.chat.newMessages = {
            message: "New messages"
        }, i.chat.say_something = {
            message: "Write a reply.."
        }, i.chat.downloadFile = {
            message: "Download File"
        }, i.chat.download = {
            message: "Download"
        }, i.chat.limit50 = {
            message: "The maximum file size is 50MB, please upload a smaller file."
        }, i.chat.limit2 = {
            message: "The maximum file size is 2MB for mobile browsers, please upload a smaller file."
        }, i.chat.generalUploadError = {
            message: '"#fileName", please try again.',
            vars: ["fileName"]
        }, i.chat.generalUploadErrorLabel = {
            message: "Unable to upload file"
        }, i.chat.retry = {
            message: "Retry."
        }, i.chat.tryAgain = {
            message: "Try again."
        }, i.chat.dragDropText = {
            message: "Drop files here to upload"
        }, i.chat.pasted_image_title = {
            message: "Pasted image at #dateTime",
            vars: ["dateTime"]
        }, i.chat.chat_qm = {
            message: "Chat?"
        }, i.chat.we_are_live = {
            message: "We are live and ready to chat with you now. Say something to start a live chat."
        }, i.chat.profile_prechat_text = {
            message: "Please fill out the form below to start chatting with me."
        }, i.chat.incoming_call_message = {
            message: "Incoming call from #name",
            vars: ["name"]
        }, i.chat.accept_call = {
            message: "Accept"
        }, i.chat.decline_call = {
            message: "Decline"
        }, i.chat.video_call_error = {
            message: "Video call is not available."
        }, i.chat.voice_call_error = {
            message: "Voice call is not available."
        }, i.chat.screen_share_error = {
            message: "Screen share is not available."
        }, i.chat.message_too_long = {
            message: "Message cannot exceed 5000 characters"
        }, i.chat.message_not_delivered = {
            message: "Message not delivered, click here to resend."
        }, i.chat.visitor_ringing = {
            message: "Calling..."
        }, i.chat.agent_ringing = {
            message: "Incoming Call"
        }, i.chat.ongoing_call = {
            message: "Ongoing Call"
        }, i.chat.completed_call = {
            message: "Call ended"
        }, i.chat.missed_agent = {
            message: "Your call was missed"
        }, i.chat.missed_visitor = {
            message: "You missed a call"
        }, i.chat.missed_visitor_messagePreview = {
            message: "You missed a call from"
        }, i.chat.rejected_call = {
            message: "You rejected this call"
        }, i.chat.call_end_details = {
            message: "Started at #startedOn and lasted #duration",
            vars: ["startedOn", "duration"]
        }, i.chat.call_started_on = {
            message: "Started at #startedOn",
            vars: ["startedOn"]
        }, i.chat.error_title = {
            message: "Error"
        }, i.chat.call_error_load = {
            message: "Unable to load call details."
        }, i.chat.insert_emoji = {
            message: "Insert emoji"
        }, i.chat.uploading = {
            message: "Uploading..."
        }, i.chat.failed = {
            message: "Failed"
        }, i.chat.resend = {
            message: "Resend"
        }, i.chat.justNow = {
            message: "just now"
        }, i.chat.Warning = {
            message: "Warning"
        }, i.chat.chat_text = {
            message: "Chat"
        }, i.chat.message_text = {
            message: "Message"
        }, i.chat.mail_text = {
            message: "Mail"
        }, i.chat.emoji_error_load = {
            message: "Unable to load emojis"
        }, i.status = {}, i.status.online = {
            message: "Online"
        }, i.status.away = {
            message: "Away"
        }, i.status.offline = {
            message: "Offline"
        }, i.months = {}, i.months[0] = {
            message: "January"
        }, i.months[1] = {
            message: "February"
        }, i.months[2] = {
            message: "March"
        }, i.months[3] = {
            message: "April"
        }, i.months[4] = {
            message: "May"
        }, i.months[5] = {
            message: "June"
        }, i.months[6] = {
            message: "July"
        }, i.months[7] = {
            message: "August"
        }, i.months[8] = {
            message: "September"
        }, i.months[9] = {
            message: "October"
        }, i.months[10] = {
            message: "November"
        }, i.months[11] = {
            message: "December"
        }, i.days = {}, i.days[0] = {
            message: "Sunday"
        }, i.days[1] = {
            message: "Monday"
        }, i.days[2] = {
            message: "Tuesday"
        }, i.days[3] = {
            message: "Wednesday"
        }, i.days[4] = {
            message: "Thursday"
        }, i.days[5] = {
            message: "Friday"
        }, i.days[6] = {
            message: "Saturday"
        }, i.menu = {}, i.menu.change_name = {
            message: "Change Name"
        }, i.menu.sound_on = {
            message: "Sound On"
        }, i.menu.sound_off = {
            message: "Sound Off"
        }, i.menu.email_transcript = {
            message: "Email transcript"
        }, i.menu.popout_widget = {
            message: "Pop out widget"
        }, i.menu.end_chat_session = {
            message: "End this chat session"
        }, i.notifications = {}, i.notifications.maximum_file_upload_warning = {
            message: "Sorry, file transfer is limited to #limitFileNumber files at a time. Please try the following file(s) again :",
            vars: ["limitFileNumber"]
        }, i.notifications.maximum_size_upload_warning = {
            message: "Sorry, file transfer is limited to #limitFileSize per file. Please compress the following file(s) and try again.",
            vars: ["limitFileSize"]
        }, i.notifications.retry = {
            message: "Retry"
        }, i.chat = i.chat || {}, i.chat.messageQueuedText = {
            vars: ["strongStart", "strongEnd"],
            pluralVars: ["t"],
            message: {
                one: "Estimated wait time is #strongStart #t minute #strongEnd",
                other: "Estimated wait time is #strongStart #t minutes #strongEnd"
            }
        }, i.chat.newMessage = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num new message",
                other: "#num new messages"
            }
        }, i.chat.seconds = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num second",
                other: "#num seconds"
            }
        }, i.chat.minutes = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num minute",
                other: "#num minutes"
            }
        }, i.chat.hours = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num hour",
                other: "#num hours"
            }
        }, t.$_Tawk.language = i, t.$_Tawk.languageUpdater && t.$_Tawk.languageUpdater(), "undefined" != typeof window ? n = window : void 0 !== e ? n = e : "undefined" != typeof self && (n = self), n.$__TawkEngine = function n(a, o, r) {
            function s(i, e) {
                if (!o[i]) {
                    if (!a[i]) {
                        var t = "function" == typeof require && require;
                        if (!e && t) return t(i, !0);
                        if (l) return l(i, !0);
                        throw Error("Cannot find module '" + i + "'")
                    }
                    t = o[i] = {
                        exports: {}
                    }, a[i][0].call(t.exports, function(e) {
                        var t = a[i][1][e];
                        return s(t || e)
                    }, t, t.exports, n, a, o, r)
                }
                return o[i].exports
            }
            for (var l = "function" == typeof require && require, e = 0; e < r.length; e++) s(r[e]);
            return s
        }({
            debug: [function(e, t, i) {
                t.exports = e("n9i2g6")
            }, {}],
            n9i2g6: [function(e, t, i) {
                t.exports = function() {
                    return function() {}
                }
            }, {}],
            3: [function(e, t, i) {
                function r() {}
                t.exports = function(e, i, n) {
                    function a(e, t) {
                        if (a.count <= 0) throw Error("after called too many times");
                        --a.count, e ? (o = !0, i(e), i = n) : 0 !== a.count || o || i(null, t)
                    }
                    var o = !1;
                    return n = n || r, 0 === (a.count = e) ? i() : a
                }
            }, {}],
            4: [function(e, t, i) {
                t.exports = function(e, t, i) {
                    var n = e.byteLength;
                    if (t = t || 0, i = i || n, e.slice) return e.slice(t, i);
                    if (t < 0 && (t += n), i < 0 && (i += n), n < i && (i = n), n <= t || i <= t || 0 === n) return new ArrayBuffer(0);
                    e = new Uint8Array(e);
                    for (var n = new Uint8Array(i - t), a = 0; t < i; t++, a++) n[a] = e[t];
                    return n.buffer
                }
            }, {}],
            5: [function(e, t, i) {
                ! function(c) {
                    i.encode = function(e) {
                        var t, i = (e = new Uint8Array(e)).length,
                            n = "";
                        for (t = 0; t < i; t += 3) n += c[e[t] >> 2], n += c[(3 & e[t]) << 4 | e[t + 1] >> 4], n += c[(15 & e[t + 1]) << 2 | e[t + 2] >> 6], n += c[63 & e[t + 2]];
                        return 2 == i % 3 ? n = n.substring(0, n.length - 1) + "=" : 1 == i % 3 && (n = n.substring(0, n.length - 2) + "=="), n
                    }, i.decode = function(e) {
                        var t, i, n, a, o = .75 * e.length,
                            r = e.length,
                            s = 0;
                        "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
                        for (var l = new ArrayBuffer(o), d = new Uint8Array(l), o = 0; o < r; o += 4) t = c.indexOf(e[o]), i = c.indexOf(e[o + 1]), n = c.indexOf(e[o + 2]), a = c.indexOf(e[o + 3]), d[s++] = t << 2 | i >> 4, d[s++] = (15 & i) << 4 | n >> 2, d[s++] = (3 & n) << 6 | 63 & a;
                        return l
                    }
                }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
            }, {}],
            6: [function(e, r, t) {
                (function(e) {
                    function a(e) {
                        for (var t = 0; t < e.length; t++) {
                            var i, n, a = e[t];
                            a.buffer instanceof ArrayBuffer && (i = a.buffer, a.byteLength !== i.byteLength && ((n = new Uint8Array(a.byteLength)).set(new Uint8Array(i, a.byteOffset, a.byteLength)), i = n.buffer), e[t] = i)
                        }
                    }
                    var t, i, o = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder;
                    try {
                        t = 2 === new Blob(["hi"]).size
                    } catch (e) {
                        t = !1
                    }
                    if (i = t) try {
                        i = 2 === new Blob([new Uint8Array([1, 2])]).size
                    } catch (e) {
                        i = !1
                    }
                    var n = o && o.prototype.append && o.prototype.getBlob;
                    e = t ? i ? e.Blob : function(e, t) {
                        return a(e), new Blob(e, t || {})
                    } : n ? function(e, t) {
                        t = t || {};
                        var i = new o;
                        a(e);
                        for (var n = 0; n < e.length; n++) i.append(e[n]);
                        return t.type ? i.getBlob(t.type) : i.getBlob()
                    } : void 0, r.exports = e
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            7: [function(e, t, i) {}, {}],
            8: [function(e, t, i) {
                function n(e) {
                    if (e) {
                        for (var t in n.prototype) e[t] = n.prototype[t];
                        return e
                    }
                }(t.exports = n).prototype.on = n.prototype.addEventListener = function(e, t) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
                }, n.prototype.once = function(e, t) {
                    function i() {
                        n.off(e, i), t.apply(this, arguments)
                    }
                    var n = this;
                    return this._callbacks = this._callbacks || {}, i.fn = t, this.on(e, i), this
                }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                    var i = this._callbacks[e];
                    if (!i) return this;
                    if (1 == arguments.length) return delete this._callbacks[e], this;
                    for (var n, a = 0; a < i.length; a++)
                        if ((n = i[a]) === t || n.fn === t) {
                            i.splice(a, 1);
                            break
                        } return this
                }, n.prototype.emit = function(e) {
                    this._callbacks = this._callbacks || {};
                    var t = [].slice.call(arguments, 1),
                        i = this._callbacks[e];
                    if (i)
                        for (var i = i.slice(0), n = 0, a = i.length; n < a; ++n) i[n].apply(this, t);
                    return this
                }, n.prototype.listeners = function(e) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
                }, n.prototype.hasListeners = function(e) {
                    return !!this.listeners(e).length
                }
            }, {}],
            9: [function(e, t, i) {
                t.exports = function(e, t) {
                    var i = function() {};
                    i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
                }
            }, {}],
            10: [function(e, t, i) {
                t.exports = e("./lib/")
            }, {
                "./lib/": 11
            }],
            11: [function(e, t, i) {
                t.exports = e("./socket"), t.exports.parser = e("engine.io-parser")
            }, {
                "./socket": 12,
                "engine.io-parser": 20
            }],
            12: [function(t, d, e) {
                (function(n) {
                    function p(e, t) {
                        if (!(this instanceof p)) return new p(e, t);
                        t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = s(e), t.hostname = e.host, t.secure = "https" == e.protocol || "wss" == e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = s(t.host).host), this.secure = null != t.secure ? t.secure : n.location && "https:" == location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || (n.location ? location.hostname : "localhost"), this.port = t.port || (n.location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = l.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized;
                        var i = "object" == typeof n && n;
                        i.global === i && t.extraHeaders && 0 < Object.keys(t.extraHeaders).length && (this.extraHeaders = t.extraHeaders), this.open()
                    }
                    var a = t("./transports"),
                        e = t("component-emitter"),
                        h = t("debug")("engine.io-client:socket"),
                        o = t("indexof"),
                        r = t("engine.io-parser"),
                        s = t("parseuri"),
                        i = t("parsejson"),
                        l = t("parseqs");
                    (d.exports = p).priorWebsocketSuccess = !1, e(p.prototype), p.protocol = r.protocol, (p.Socket = p).Transport = t("./transport"), p.transports = t("./transports"), p.parser = t("engine.io-parser"), p.prototype.createTransport = function(e) {
                        h('creating transport "%s"', e);
                        var t, i = this.query,
                            n = {};
                        for (t in i) i.hasOwnProperty(t) && (n[t] = i[t]);
                        return n.EIO = r.protocol, n.transport = e, this.id && (n.sid = this.id), new a[e]({
                            agent: this.agent,
                            hostname: this.hostname,
                            port: this.port,
                            secure: this.secure,
                            path: this.path,
                            query: n,
                            forceJSONP: this.forceJSONP,
                            jsonp: this.jsonp,
                            forceBase64: this.forceBase64,
                            enablesXDR: this.enablesXDR,
                            timestampRequests: this.timestampRequests,
                            timestampParam: this.timestampParam,
                            policyPort: this.policyPort,
                            socket: this,
                            pfx: this.pfx,
                            key: this.key,
                            passphrase: this.passphrase,
                            cert: this.cert,
                            ca: this.ca,
                            ciphers: this.ciphers,
                            rejectUnauthorized: this.rejectUnauthorized,
                            perMessageDeflate: this.perMessageDeflate,
                            extraHeaders: this.extraHeaders
                        })
                    }, p.prototype.open = function() {
                        var e;
                        if (this.rememberUpgrade && p.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) e = "websocket";
                        else {
                            if (0 === this.transports.length) {
                                var t = this;
                                return void setTimeout(function() {
                                    t.emit("error", "No transports available")
                                }, 0)
                            }
                            e = this.transports[0]
                        }
                        this.readyState = "opening";
                        try {
                            e = this.createTransport(e)
                        } catch (e) {
                            return this.transports.shift(), void this.open()
                        }
                        e.open(), this.setTransport(e)
                    }, p.prototype.setTransport = function(e) {
                        h("setting transport %s", e.name);
                        var t = this;
                        this.transport && (h("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), (this.transport = e).on("drain", function() {
                            t.onDrain()
                        }).on("packet", function(e) {
                            t.onPacket(e)
                        }).on("error", function(e) {
                            t.onError(e)
                        }).on("close", function() {
                            t.onClose("transport close")
                        })
                    }, p.prototype.probe = function(i) {
                        function e() {
                            var e;
                            c.onlyBinaryUpgrades && (e = !this.supportsBinary && c.transport.supportsBinary, d = d || e), d || (h('probe transport "%s" opened', i), l.send([{
                                type: "ping",
                                data: "probe"
                            }]), l.once("packet", function(e) {
                                d || ("pong" == e.type && "probe" == e.data ? (h('probe transport "%s" pong', i), c.upgrading = !0, c.emit("upgrading", l), l && (p.priorWebsocketSuccess = "websocket" == l.name, h('pausing current transport "%s"', c.transport.name), c.transport.pause(function() {
                                    d || "closed" == c.readyState || (h("changing transport and sending upgrade packet"), s(), c.setTransport(l), l.send([{
                                        type: "upgrade"
                                    }]), c.emit("upgrade", l), l = null, c.upgrading = !1, c.flush())
                                }))) : (h('probe transport "%s" failed', i), (e = Error("probe error")).transport = l.name, c.emit("upgradeError", e)))
                            }))
                        }

                        function n() {
                            d || (d = !0, s(), l.close(), l = null)
                        }

                        function t(e) {
                            var t = Error("probe error: " + e);
                            t.transport = l.name, n(), h('probe transport "%s" failed because of error: %s', i, e), c.emit("upgradeError", t)
                        }

                        function a() {
                            t("transport closed")
                        }

                        function o() {
                            t("socket closed")
                        }

                        function r(e) {
                            l && e.name != l.name && (h('"%s" works - aborting "%s"', e.name, l.name), n())
                        }

                        function s() {
                            l.removeListener("open", e), l.removeListener("error", t), l.removeListener("close", a), c.removeListener("close", o), c.removeListener("upgrading", r)
                        }
                        h('probing transport "%s"', i);
                        var l = this.createTransport(i, {
                                probe: 1
                            }),
                            d = !1,
                            c = this;
                        p.priorWebsocketSuccess = !1, l.once("open", e), l.once("error", t), l.once("close", a), this.once("close", o), this.once("upgrading", r), l.open()
                    }, p.prototype.onOpen = function() {
                        if (h("socket open"), this.readyState = "open", p.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                            h("starting upgrade probes");
                            for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                        }
                    }, p.prototype.onPacket = function(e) {
                        if ("opening" == this.readyState || "open" == this.readyState) switch (h('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                            case "open":
                                this.onHandshake(i(e.data));
                                break;
                            case "pong":
                                this.setPing(), this.emit("pong");
                                break;
                            case "error":
                                var t = Error("server error");
                                t.code = e.data, this.onError(t);
                                break;
                            case "message":
                                this.emit("data", e.data), this.emit("message", e.data)
                        } else h('packet received with socket readyState "%s"', this.readyState)
                    }, p.prototype.onHandshake = function(e) {
                        this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                    }, p.prototype.onHeartbeat = function(e) {
                        clearTimeout(this.pingTimeoutTimer);
                        var t = this;
                        t.pingTimeoutTimer = setTimeout(function() {
                            "closed" != t.readyState && t.onClose("ping timeout")
                        }, e || t.pingInterval + t.pingTimeout)
                    }, p.prototype.setPing = function() {
                        var e = this;
                        clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
                            h("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
                        }, e.pingInterval)
                    }, p.prototype.ping = function() {
                        var e = this;
                        this.sendPacket("ping", function() {
                            e.emit("ping")
                        })
                    }, p.prototype.onDrain = function() {
                        this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emit("drain") : this.flush()
                    }, p.prototype.flush = function() {
                        "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                    }, p.prototype.write = p.prototype.send = function(e, t, i) {
                        return this.sendPacket("message", e, t, i), this
                    }, p.prototype.sendPacket = function(e, t, i, n) {
                        "function" == typeof t && (n = t, t = void 0), "function" == typeof i && (n = i, i = null), "closing" != this.readyState && "closed" != this.readyState && ((i = i || {}).compress = !1 !== i.compress, e = {
                            type: e,
                            data: t,
                            options: i
                        }, this.emit("packetCreate", e), this.writeBuffer.push(e), n && this.once("flush", n), this.flush())
                    }, p.prototype.close = function() {
                        function e() {
                            n.onClose("forced close"), h("socket closing - telling transport to close"), n.transport.close()
                        }

                        function t() {
                            n.removeListener("upgrade", t), n.removeListener("upgradeError", t), e()
                        }

                        function i() {
                            n.once("upgrade", t), n.once("upgradeError", t)
                        }
                        var n;
                        return "opening" != this.readyState && "open" != this.readyState || (this.readyState = "closing", (n = this).writeBuffer.length ? this.once("drain", function() {
                            (this.upgrading ? i : e)()
                        }) : (this.upgrading ? i : e)()), this
                    }, p.prototype.onError = function(e) {
                        h("socket error %j", e), p.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
                    }, p.prototype.onClose = function(e, t) {
                        "opening" != this.readyState && "open" != this.readyState && "closing" != this.readyState || (h('socket close with reason: "%s"', e), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
                    }, p.prototype.filterUpgrades = function(e) {
                        for (var t = [], i = 0, n = e.length; i < n; i++) ~o(this.transports, e[i]) && t.push(e[i]);
                        return t
                    }
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./transport": 13,
                "./transports": 14,
                "component-emitter": 8,
                debug: "n9i2g6",
                "engine.io-parser": 20,
                indexof: 24,
                parsejson: 26,
                parseqs: 27,
                parseuri: 28
            }],
            13: [function(e, t, i) {
                function n(e) {
                    this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders
                }
                var a = e("engine.io-parser");
                e = e("component-emitter"), t.exports = n, e(n.prototype), n.prototype.onError = function(e, t) {
                    var i = Error(e);
                    return i.type = "TransportError", i.description = t, this.emit("error", i), this
                }, n.prototype.open = function() {
                    return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()), this
                }, n.prototype.close = function() {
                    return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()), this
                }, n.prototype.send = function(e) {
                    if ("open" != this.readyState) throw Error("Transport not open");
                    this.write(e)
                }, n.prototype.onOpen = function() {
                    this.readyState = "open", this.writable = !0, this.emit("open")
                }, n.prototype.onData = function(e) {
                    e = a.decodePacket(e, this.socket.binaryType), this.onPacket(e)
                }, n.prototype.onPacket = function(e) {
                    this.emit("packet", e)
                }, n.prototype.onClose = function() {
                    this.readyState = "closed", this.emit("close")
                }
            }, {
                "component-emitter": 8,
                "engine.io-parser": 20
            }],
            14: [function(t, e, i) {
                (function(a) {
                    var o = t("xmlhttprequest-ssl"),
                        r = t("./polling-xhr"),
                        s = t("./polling-jsonp"),
                        e = t("./websocket");
                    i.polling = function(e) {
                        var t = !1,
                            i = !1,
                            n = !1 !== e.jsonp;
                        if (a.location && (i = "https:" == location.protocol, (t = location.port) || (t = i ? 443 : 80), t = e.hostname != location.hostname || t != e.port, i = e.secure != i), e.xdomain = t, e.xscheme = i, "open" in new o(e) && !e.forceJSONP) return new r(e);
                        if (!n) throw Error("JSONP disabled");
                        return new s(e)
                    }, i.websocket = e
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./polling-jsonp": 15,
                "./polling-xhr": 16,
                "./websocket": 18,
                "xmlhttprequest-ssl": 19
            }],
            15: [function(r, s, e) {
                (function(i) {
                    function n() {}

                    function e(e) {
                        a.call(this, e), this.query = this.query || {}, o || (i.___eio || (i.___eio = []), o = i.___eio), this.index = o.length;
                        var t = this;
                        o.push(function(e) {
                            t.onData(e)
                        }), this.query.j = this.index, i.document && i.addEventListener && i.addEventListener("beforeunload", function() {
                            t.script && (t.script.onerror = n)
                        }, !1)
                    }
                    var a = r("./polling"),
                        t = r("component-inherit");
                    s.exports = e;
                    var o, d = /\n/g,
                        c = /\\n/g;
                    t(e, a), e.prototype.supportsBinary = !1, e.prototype.doClose = function() {
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.iframe = this.form = null), a.prototype.doClose.call(this)
                    }, e.prototype.doPoll = function() {
                        var t = this,
                            e = document.createElement("script");
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
                            t.onError("jsonp poll error", e)
                        };
                        var i = document.getElementsByTagName("script")[0];
                        i ? i.parentNode.insertBefore(e, i) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                            var e = document.createElement("iframe");
                            document.body.appendChild(e), document.body.removeChild(e)
                        }, 100)
                    }, e.prototype.doWrite = function(e, t) {
                        function i() {
                            n(), t()
                        }

                        function n() {
                            if (l.iframe) try {
                                l.form.removeChild(l.iframe)
                            } catch (e) {
                                l.onError("jsonp polling iframe removal error", e)
                            }
                            try {
                                s = document.createElement('<iframe src="javascript:0" name="' + l.iframeId + '">')
                            } catch (e) {
                                (s = document.createElement("iframe")).name = l.iframeId, s.src = "javascript:0"
                            }
                            s.id = l.iframeId, l.form.appendChild(s), l.iframe = s
                        }
                        var a, o, r, s, l = this;
                        this.form || (a = document.createElement("form"), o = document.createElement("textarea"), r = this.iframeId = "eio_iframe_" + this.index, a.className = "socketio", a.style.position = "absolute", a.style.top = "-1000px", a.style.left = "-1000px", a.target = r, a.method = "POST", a.setAttribute("accept-charset", "utf-8"), o.name = "d", a.appendChild(o), document.body.appendChild(a), this.form = a, this.area = o), this.form.action = this.uri(), n(), e = e.replace(c, "\\\n"), this.area.value = e.replace(d, "\\n");
                        try {
                            this.form.submit()
                        } catch (e) {}
                        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                            "complete" == l.iframe.readyState && i()
                        } : this.iframe.onload = i
                    }
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./polling": 17,
                "component-inherit": 9
            }],
            16: [function(c, p, e) {
                (function(a) {
                    function t() {}

                    function e(e) {
                        var t, i;
                        n.call(this, e), a.location ? (t = "https:" == location.protocol, i = (i = location.port) || (t ? 443 : 80), this.xd = e.hostname != a.location.hostname || i != e.port, this.xs = e.secure != t) : this.extraHeaders = e.extraHeaders
                    }

                    function o(e) {
                        this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = null != e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
                    }

                    function i() {
                        for (var e in o.requests) o.requests.hasOwnProperty(e) && o.requests[e].abort()
                    }
                    var r = c("xmlhttprequest-ssl"),
                        n = c("./polling"),
                        s = c("component-emitter"),
                        l = c("component-inherit"),
                        d = c("debug")("engine.io-client:polling-xhr");
                    p.exports = e, p.exports.Request = o, l(e, n), e.prototype.supportsBinary = !0, e.prototype.request = function(e) {
                        return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.extraHeaders = this.extraHeaders, new o(e)
                    }, e.prototype.doWrite = function(e, t) {
                        var i = this.request({
                                method: "POST",
                                data: e,
                                isBinary: "string" != typeof e && void 0 !== e
                            }),
                            n = this;
                        i.on("success", t), i.on("error", function(e) {
                            n.onError("xhr post error", e)
                        }), this.sendXhr = i
                    }, e.prototype.doPoll = function() {
                        d("xhr poll");
                        var e = this.request(),
                            t = this;
                        e.on("data", function(e) {
                            t.onData(e)
                        }), e.on("error", function(e) {
                            t.onError("xhr poll error", e)
                        }), this.pollXhr = e
                    }, s(o.prototype), o.prototype.create = function() {
                        var e = {
                            agent: this.agent,
                            xdomain: this.xd,
                            xscheme: this.xs,
                            enablesXDR: this.enablesXDR
                        };
                        e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                        var t = this.xhr = new r(e),
                            i = this;
                        try {
                            d("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                            try {
                                if (this.extraHeaders)
                                    for (var n in t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(n) && t.setRequestHeader(n, this.extraHeaders[n])
                            } catch (e) {}
                            if (this.supportsBinary && (t.responseType = "arraybuffer"), "POST" == this.method) try {
                                this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                            } catch (e) {}
                            "withCredentials" in t && (t.withCredentials = !0), this.hasXDR() ? (t.onload = function() {
                                i.onLoad()
                            }, t.onerror = function() {
                                i.onError(t.responseText)
                            }) : t.onreadystatechange = function() {
                                4 == t.readyState && (200 == t.status || 1223 == t.status ? i.onLoad() : setTimeout(function() {
                                    i.onError(t.status)
                                }, 0))
                            }, d("xhr data %s", this.data), t.send(this.data)
                        } catch (e) {
                            return void setTimeout(function() {
                                i.onError(e)
                            }, 0)
                        }
                        a.document && (this.index = o.requestsCount++, o.requests[this.index] = this)
                    }, o.prototype.onSuccess = function() {
                        this.emit("success"), this.cleanup()
                    }, o.prototype.onData = function(e) {
                        this.emit("data", e), this.onSuccess()
                    }, o.prototype.onError = function(e) {
                        this.emit("error", e), this.cleanup(!0)
                    }, o.prototype.cleanup = function(e) {
                        if (void 0 !== this.xhr && null !== this.xhr) {
                            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = t : this.xhr.onreadystatechange = t, e) try {
                                this.xhr.abort()
                            } catch (e) {}
                            a.document && delete o.requests[this.index], this.xhr = null
                        }
                    }, o.prototype.onLoad = function() {
                        var t, i;
                        try {
                            try {
                                i = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                            } catch (e) {}
                            if ("application/octet-stream" === i) t = this.xhr.response;
                            else if (this.supportsBinary) try {
                                t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                            } catch (e) {
                                var n = new Uint8Array(this.xhr.response);
                                i = [];
                                for (var a = 0, o = n.length; a < o; a++) i.push(n[a]);
                                t = String.fromCharCode.apply(null, i)
                            } else t = this.xhr.responseText
                        } catch (e) {
                            this.onError(e)
                        }
                        null != t && this.onData(t)
                    }, o.prototype.hasXDR = function() {
                        return void 0 !== a.XDomainRequest && !this.xs && this.enablesXDR
                    }, o.prototype.abort = function() {
                        this.cleanup()
                    }, a.document && (o.requestsCount = 0, o.requests = {}, a.attachEvent ? a.attachEvent("onunload", i) : a.addEventListener && a.addEventListener("beforeunload", i, !1))
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./polling": 17,
                "component-emitter": 8,
                "component-inherit": 9,
                debug: "n9i2g6",
                "xmlhttprequest-ssl": 19
            }],
            17: [function(e, t, i) {
                function n(e) {
                    var t = e && e.forceBase64;
                    d && !t || (this.supportsBinary = !1), a.call(this, e)
                }
                var a = e("../transport"),
                    o = e("parseqs"),
                    r = e("engine.io-parser");
                i = e("component-inherit");
                var s = e("yeast"),
                    l = e("debug")("engine.io-client:polling");
                t.exports = n;
                var d = null != new(e("xmlhttprequest-ssl"))({
                    xdomain: !1
                }).responseType;
                i(n, a), n.prototype.name = "polling", n.prototype.doOpen = function() {
                    this.poll()
                }, n.prototype.pause = function(e) {
                    function t() {
                        l("paused"), n.readyState = "paused", e()
                    }
                    var i, n = this;
                    this.readyState = "pausing", this.polling || !this.writable ? (i = 0, this.polling && (l("we are currently polling - waiting to pause"), i++, this.once("pollComplete", function() {
                        l("pre-pause polling complete"), --i || t()
                    })), this.writable || (l("we are currently writing - waiting to pause"), i++, this.once("drain", function() {
                        l("pre-pause writing complete"), --i || t()
                    }))) : t()
                }, n.prototype.poll = function() {
                    l("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
                }, n.prototype.onData = function(e) {
                    var n = this;
                    l("polling got data %s", e), r.decodePayload(e, this.socket.binaryType, function(e, t, i) {
                        return "opening" == n.readyState && n.onOpen(), "close" == e.type ? (n.onClose(), !1) : void n.onPacket(e)
                    }), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
                }, n.prototype.doClose = function() {
                    function e() {
                        l("writing close packet"), t.write([{
                            type: "close"
                        }])
                    }
                    var t = this;
                    "open" == this.readyState ? (l("transport open - closing"), e()) : (l("transport not open - deferring close"), this.once("open", e))
                }, n.prototype.write = function(e) {
                    var t = this;
                    this.writable = !1;
                    var i = function() {
                            t.writable = !0, t.emit("drain")
                        },
                        t = this;
                    r.encodePayload(e, this.supportsBinary, function(e) {
                        t.doWrite(e, i)
                    })
                }, n.prototype.uri = function() {
                    var e = this.query || {},
                        t = this.secure ? "https" : "http",
                        i = "";
                    !1 !== this.timestampRequests && (e[this.timestampParam] = s()), this.supportsBinary || e.sid || (e.b64 = 1), e = o.encode(e), this.port && ("https" == t && 443 != this.port || "http" == t && 80 != this.port) && (i = ":" + this.port), e.length && (e = "?" + e);
                    var n = -1 !== this.hostname.indexOf(":");
                    return t + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
                }
            }, {
                "../transport": 13,
                "component-inherit": 9,
                debug: "n9i2g6",
                "engine.io-parser": 20,
                parseqs: 27,
                "xmlhttprequest-ssl": 19,
                yeast: 30
            }],
            18: [function(c, p, e) {
                (function(o) {
                    function e(e) {
                        e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, i.call(this, e)
                    }
                    var i = c("../transport"),
                        r = c("engine.io-parser"),
                        a = c("parseqs"),
                        t = c("component-inherit"),
                        s = c("yeast"),
                        l = c("debug")("engine.io-client:websocket"),
                        d = o.WebSocket || o.MozWebSocket,
                        n = d;
                    if (!n && "undefined" == typeof window) try {
                        n = c("ws")
                    } catch (e) {}
                    p.exports = e, t(e, i), e.prototype.name = "websocket", e.prototype.supportsBinary = !0, e.prototype.doOpen = function() {
                        var e, t;
                        this.check() && (e = this.uri(), (t = {
                            agent: this.agent,
                            perMessageDeflate: this.perMessageDeflate
                        }).pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (t.headers = this.extraHeaders), this.ws = d ? new n(e) : new n(e, void 0, t), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners())
                    }, e.prototype.addEventListeners = function() {
                        var t = this;
                        this.ws.onopen = function() {
                            t.onOpen()
                        }, this.ws.onclose = function() {
                            t.onClose()
                        }, this.ws.onmessage = function(e) {
                            t.onData(e.data)
                        }, this.ws.onerror = function(e) {
                            t.onError("websocket error", e)
                        }
                    }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (e.prototype.onData = function(e) {
                        var t = this;
                        setTimeout(function() {
                            i.prototype.onData.call(t, e)
                        }, 0)
                    }), e.prototype.write = function(e) {
                        var n = this;
                        this.writable = !1;
                        for (var a = e.length, t = 0, i = a; t < i; t++) ! function(i) {
                            r.encodePacket(i, n.supportsBinary, function(e) {
                                var t;
                                d || (t = {}, i.options && (t.compress = i.options.compress), n.perMessageDeflate && ("string" == typeof e ? o.Buffer.byteLength(e) : e.length) < n.perMessageDeflate.threshold && (t.compress = !1));
                                try {
                                    d ? n.ws.send(e) : n.ws.send(e, t)
                                } catch (e) {
                                    l("websocket closed before onclose event")
                                }--a || (n.emit("flush"), setTimeout(function() {
                                    n.writable = !0, n.emit("drain")
                                }, 0))
                            })
                        }(e[t])
                    }, e.prototype.onClose = function() {
                        i.prototype.onClose.call(this)
                    }, e.prototype.doClose = function() {
                        void 0 !== this.ws && this.ws.close()
                    }, e.prototype.uri = function() {
                        var e = this.query || {},
                            t = this.secure ? "wss" : "ws",
                            i = "";
                        this.port && ("wss" == t && 443 != this.port || "ws" == t && 80 != this.port) && (i = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = s()), this.supportsBinary || (e.b64 = 1), (e = a.encode(e)).length && (e = "?" + e);
                        var n = -1 !== this.hostname.indexOf(":");
                        return t + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
                    }, e.prototype.check = function() {
                        return !(!n || "__initialize" in n && this.name === e.prototype.name)
                    }
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../transport": 13,
                "component-inherit": 9,
                debug: "n9i2g6",
                "engine.io-parser": 20,
                parseqs: 27,
                ws: 7,
                yeast: 30
            }],
            19: [function(e, t, i) {
                var n = e("has-cors");
                t.exports = function(e) {
                    var t = e.xdomain,
                        i = e.xscheme;
                    e = e.enablesXDR;
                    try {
                        if ("undefined" != typeof XMLHttpRequest && (!t || n)) return new XMLHttpRequest
                    } catch (e) {}
                    try {
                        if ("undefined" != typeof XDomainRequest && !i && e) return new XDomainRequest
                    } catch (e) {}
                    if (!t) try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                }
            }, {
                "has-cors": 23
            }],
            20: [function(u, e, f) {
                (function(l) {
                    function t(e, t, i) {
                        var a = Array(e.length);
                        i = r(e.length, i);
                        for (var n = 0; n < e.length; n++) ! function(i, e, n) {
                            t(e, function(e, t) {
                                a[i] = t;
                                n(e, a)
                            })
                        }(n, e[n], i)
                    }
                    var e = u("./keys"),
                        o = u("has-binary"),
                        c = u("arraybuffer.slice"),
                        a = u("base64-arraybuffer"),
                        r = u("after"),
                        s = u("utf8"),
                        i = navigator.userAgent.match(/Android/i),
                        n = /PhantomJS/i.test(navigator.userAgent),
                        d = i || n;
                    f.protocol = 3;
                    var p = f.packets = {
                            open: 0,
                            close: 1,
                            ping: 2,
                            pong: 3,
                            message: 4,
                            upgrade: 5,
                            noop: 6
                        },
                        h = e(p),
                        m = {
                            type: "error",
                            data: "parser error"
                        },
                        g = u("blob");
                    f.encodePacket = function(e, t, i, n) {
                        "function" == typeof t && (n = t, t = !1), "function" == typeof i && (n = i, i = null);
                        var a = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                        if (l.ArrayBuffer && a instanceof ArrayBuffer) {
                            if (t) {
                                for (i = e.data, t = new Uint8Array(i), (i = new Uint8Array(1 + i.byteLength))[0] = p[e.type], e = 0; e < t.length; e++) i[e + 1] = t[e];
                                e = n(i.buffer)
                            } else e = f.encodeBase64Packet(e, n);
                            return e
                        }
                        return g && a instanceof l.Blob ? e = t ? d ? function(e, t, i) {
                            if (!t) return f.encodeBase64Packet(e, i);
                            var n = new FileReader;
                            return n.onload = function() {
                                e.data = n.result, f.encodePacket(e, t, !0, i)
                            }, n.readAsArrayBuffer(e.data)
                        }(e, t, n) : ((t = new Uint8Array(1))[0] = p[e.type], e = new g([t.buffer, e.data]), n(e)) : f.encodeBase64Packet(e, n) : a && a.base64 ? n("b" + f.packets[e.type] + e.data.data) : (t = p[e.type], void 0 !== e.data && (t += i ? s.encode(String(e.data)) : String(e.data)), n("" + t))
                    }, f.encodeBase64Packet = function(t, i) {
                        var n, a = "b" + f.packets[t.type];
                        if (g && t.data instanceof l.Blob) {
                            var o = new FileReader;
                            return o.onload = function() {
                                var e = o.result.split(",")[1];
                                i(a + e)
                            }, o.readAsDataURL(t.data)
                        }
                        try {
                            n = String.fromCharCode.apply(null, new Uint8Array(t.data))
                        } catch (e) {
                            n = new Uint8Array(t.data);
                            for (var r = Array(n.length), s = 0; s < n.length; s++) r[s] = n[s];
                            n = String.fromCharCode.apply(null, r)
                        }
                        return a += l.btoa(n), i(a)
                    }, f.decodePacket = function(e, t, i) {
                        if ("string" != typeof e && void 0 !== e) return i = new Uint8Array(e)[0], e = c(e, 1), g && "blob" === t && (e = new g([e])), {
                            type: h[i],
                            data: e
                        };
                        if ("b" == e.charAt(0)) return f.decodeBase64Packet(e.substr(1), t);
                        if (i) try {
                            e = s.decode(e)
                        } catch (e) {
                            return m
                        }
                        return i = e.charAt(0), Number(i) == i && h[i] ? 1 < e.length ? {
                            type: h[i],
                            data: e.substring(1)
                        } : {
                            type: h[i]
                        } : m
                    }, f.decodeBase64Packet = function(e, t) {
                        var i = h[e.charAt(0)];
                        if (!l.ArrayBuffer) return {
                            type: i,
                            data: {
                                base64: !0,
                                data: e.substr(1)
                            }
                        };
                        var n = a.decode(e.substr(1));
                        return "blob" === t && g && (n = new g([n])), {
                            type: i,
                            data: n
                        }
                    }, f.encodePayload = function(e, i, n) {
                        "function" == typeof i && (n = i, i = null);
                        var a = o(e);
                        return i && a ? g && !d ? f.encodePayloadAsBlob(e, n) : f.encodePayloadAsArrayBuffer(e, n) : e.length ? void t(e, function(e, t) {
                            f.encodePacket(e, !!a && i, !0, function(e) {
                                t(null, e.length + ":" + e)
                            })
                        }, function(e, t) {
                            return n(t.join(""))
                        }) : n("0:")
                    }, f.decodePayload = function(e, t, i) {
                        if ("string" != typeof e) return f.decodePayloadAsBinary(e, t, i);
                        var n;
                        if ("function" == typeof t && (i = t, t = null), "" == e) return i(m, 0, 1);
                        n = "";
                        for (var a, o, r = 0, s = e.length; r < s; r++)
                            if (":" != (o = e.charAt(r))) n += o;
                            else {
                                if ("" == n || n != (a = Number(n))) return i(m, 0, 1);
                                if (o = e.substr(r + 1, a), n != o.length) return i(m, 0, 1);
                                if (o.length) {
                                    if (n = f.decodePacket(o, t, !0), m.type == n.type && m.data == n.data) return i(m, 0, 1);
                                    if (!1 === i(n, r + a, s)) return
                                }
                                r += a, n = ""
                            } return "" != n ? i(m, 0, 1) : void 0
                    }, f.encodePayloadAsArrayBuffer = function(e, n) {
                        if (!e.length) return n(new ArrayBuffer(0));
                        t(e, function(e, t) {
                            f.encodePacket(e, !0, !0, function(e) {
                                return t(null, e)
                            })
                        }, function(e, t) {
                            var i = t.reduce(function(e, t) {
                                    var i;
                                    return i = "string" == typeof t ? t.length : t.byteLength, e + i.toString().length + i + 2
                                }, 0),
                                a = new Uint8Array(i),
                                o = 0;
                            return t.forEach(function(e) {
                                var t = "string" == typeof e,
                                    i = e;
                                if (t) {
                                    for (var i = new Uint8Array(e.length), n = 0; n < e.length; n++) i[n] = e.charCodeAt(n);
                                    i = i.buffer
                                }
                                for (a[o++] = t ? 0 : 1, e = i.byteLength.toString(), n = 0; n < e.length; n++) a[o++] = parseInt(e[n]);
                                for (a[o++] = 255, i = new Uint8Array(i), n = 0; n < i.length; n++) a[o++] = i[n]
                            }), n(a.buffer)
                        })
                    }, f.encodePayloadAsBlob = function(e, i) {
                        t(e, function(e, o) {
                            f.encodePacket(e, !0, !0, function(e) {
                                var t = new Uint8Array(1);
                                if (t[0] = 1, "string" == typeof e) {
                                    for (var i = new Uint8Array(e.length), n = 0; n < e.length; n++) i[n] = e.charCodeAt(n);
                                    e = i.buffer, t[0] = 0
                                }
                                for (var i = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(), a = new Uint8Array(i.length + 1), n = 0; n < i.length; n++) a[n] = parseInt(i[n]);
                                a[i.length] = 255, g && (e = new g([t.buffer, a.buffer, e]), o(null, e))
                            })
                        }, function(e, t) {
                            return i(new g(t))
                        })
                    }, f.decodePayloadAsBinary = function(e, i, n) {
                        "function" == typeof i && (n = i, i = null);
                        for (var t = [], a = !1; 0 < e.byteLength;) {
                            for (var o = new Uint8Array(e), r = 0 === o[0], s = "", l = 1; 255 != o[l]; l++) {
                                if (310 < s.length) {
                                    a = !0;
                                    break
                                }
                                s += o[l]
                            }
                            if (a) return n(m, 0, 1);
                            if (e = c(e, 2 + s.length), s = parseInt(s), o = c(e, 0, s), r) try {
                                o = String.fromCharCode.apply(null, new Uint8Array(o))
                            } catch (e) {
                                for (r = new Uint8Array(o), o = "", l = 0; l < r.length; l++) o += String.fromCharCode(r[l])
                            }
                            t.push(o), e = c(e, s)
                        }
                        var d = t.length;
                        t.forEach(function(e, t) {
                            n(f.decodePacket(e, i, !0), t, d)
                        })
                    }
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./keys": 21,
                after: 3,
                "arraybuffer.slice": 4,
                "base64-arraybuffer": 5,
                blob: 6,
                "has-binary": 22,
                utf8: 29
            }],
            21: [function(e, t, i) {
                t.exports = Object.keys || function(e) {
                    var t, i = [],
                        n = Object.prototype.hasOwnProperty;
                    for (t in e) n.call(e, t) && i.push(t);
                    return i
                }
            }, {}],
            22: [function(e, t, i) {
                (function(n) {
                    var a = e("isarray");
                    t.exports = function(e) {
                        return function e(t) {
                            if (!t) return !1;
                            if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;
                            if (a(t)) {
                                for (var i = 0; i < t.length; i++)
                                    if (e(t[i])) return !0
                            } else if (t && "object" == typeof t)
                                for (i in t.toJSON && (t = t.toJSON()), t)
                                    if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0;
                            return !1
                        }(e)
                    }
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                isarray: 25
            }],
            23: [function(e, t, i) {
                try {
                    t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                } catch (e) {
                    t.exports = !1
                }
            }, {}],
            24: [function(e, t, i) {
                var n = [].indexOf;
                t.exports = function(e, t) {
                    if (n) return e.indexOf(t);
                    for (var i = 0; i < e.length; ++i)
                        if (e[i] === t) return i;
                    return -1
                }
            }, {}],
            25: [function(e, t, i) {
                t.exports = Array.isArray || function(e) {
                    return "[object Array]" == Object.prototype.toString.call(e)
                }
            }, {}],
            26: [function(e, l, t) {
                (function(t) {
                    var i = /^[\],:{}\s]*$/,
                        n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                        a = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        o = /(?:^|:|,)(?:\s*\[)+/g,
                        r = /^\s+/,
                        s = /\s+$/;
                    l.exports = function(e) {
                        return "string" == typeof e && e ? (e = e.replace(r, "").replace(s, ""), t.JSON && JSON.parse ? JSON.parse(e) : i.test(e.replace(n, "@").replace(a, "]").replace(o, "")) ? new Function("return " + e)() : void 0) : null
                    }
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            27: [function(e, t, i) {
                i.encode = function(e) {
                    var t, i = "";
                    for (t in e) e.hasOwnProperty(t) && (i.length && (i += "&"), i += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                    return i
                }, i.decode = function(e) {
                    var t = {};
                    e = e.split("&");
                    for (var i = 0, n = e.length; i < n; i++) {
                        var a = e[i].split("=");
                        t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                    }
                    return t
                }
            }, {}],
            28: [function(e, t, i) {
                var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    s = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");
                t.exports = function(e) {
                    var t = e,
                        i = e.indexOf("["),
                        n = e.indexOf("]"); - 1 != i && -1 != n && (e = e.substring(0, i) + e.substring(i, n).replace(/:/g, ";") + e.substring(n, e.length)), e = r.exec(e || "");
                    for (var a = {}, o = 14; o--;) a[s[o]] = e[o] || "";
                    return -1 != i && -1 != n && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
                }
            }, {}],
            29: [function(e, m, g) {
                (function(h) {
                    ! function(e) {
                        function r(e) {
                            for (var t, i, n = [], a = 0, o = e.length; a < o;) 55296 <= (t = e.charCodeAt(a++)) && t <= 56319 && a < o ? 56320 == (64512 & (i = e.charCodeAt(a++))) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), a--) : n.push(t);
                            return n
                        }

                        function s(e) {
                            if (55296 <= e && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
                        }

                        function o() {
                            if (d <= c) throw Error("Invalid byte index");
                            var e = 255 & l[c];
                            if (c++, 128 == (192 & e)) return 63 & e;
                            throw Error("Invalid continuation byte")
                        }
                        var t = "object" == typeof g && g,
                            i = "object" == typeof m && m && m.exports == t && m,
                            n = "object" == typeof h && h;
                        n.global !== n && n.window !== n || (e = n);
                        var l, d, c, p = String.fromCharCode,
                            n = {
                                version: "2.0.0",
                                encode: function(e) {
                                    for (var t, i, n = (e = r(e)).length, a = -1, o = ""; ++a < n;) {
                                        t = 0 == (4294967168 & (t = e[a])) ? p(t) : (i = "", 0 == (4294965248 & t) ? i = p(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (s(t), i = p(t >> 12 & 15 | 224), i += p(t >> 6 & 63 | 128)) : 0 == (4292870144 & t) && (i = p(t >> 18 & 7 | 240), i += p(t >> 12 & 63 | 128), i += p(t >> 6 & 63 | 128)), i += p(63 & t | 128)), o += t
                                    }
                                    return o
                                },
                                decode: function(e) {
                                    l = r(e), d = l.length, c = 0, e = [];
                                    for (var t; !1 !== (t = function() {
                                            var e, t, i, n;
                                            if (d < c) throw Error("Invalid byte index");
                                            if (c == d) return !1;
                                            if (e = 255 & l[c], c++, 0 == (128 & e)) return e;
                                            if (192 == (224 & e)) {
                                                if (t = o(), 128 <= (e = (31 & e) << 6 | t)) return e;
                                                throw Error("Invalid continuation byte")
                                            }
                                            if (224 == (240 & e)) {
                                                if (t = o(), i = o(), 2048 <= (e = (15 & e) << 12 | t << 6 | i)) return s(e), e;
                                                throw Error("Invalid continuation byte")
                                            }
                                            if (240 == (248 & e) && (t = o(), i = o(), n = o(), 65536 <= (e = (15 & e) << 18 | t << 12 | i << 6 | n) && e <= 1114111)) return e;
                                            throw Error("Invalid UTF-8 detected")
                                        }());) e.push(t);
                                    t = e.length;
                                    for (var i, n = -1, a = ""; ++n < t;) 65535 < (i = e[n]) && (a += p((i -= 65536) >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), a += p(i);
                                    return a
                                }
                            };
                        if (t && !t.nodeType)
                            if (i) i.exports = n;
                            else
                                for (var a in e = {}.hasOwnProperty, n) e.call(n, a) && (t[a] = n[a]);
                        else e.utf8 = n
                    }(this)
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            30: [function(e, t, i) {
                function n(e) {
                    for (var t = ""; t = r[e % s] + t, 0 < (e = Math.floor(e / s)););
                    return t
                }

                function a() {
                    var e = n(+new Date);
                    return e !== o ? (d = 0, o = e) : e + "." + n(d++)
                }
                for (var o, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, l = {}, d = 0, c = 0; c < s; c++) l[r[c]] = c;
                a.encode = n, a.decode = function(e) {
                    var t = 0;
                    for (c = 0; c < e.length; c++) t = t * s + l[e.charAt(c)];
                    return t
                }, t.exports = a
            }, {}]
        }, {}, [10])(10),
        function(e) {
            "function" != typeof Array.isArray && (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (this[t] === e) return t;
                return -1
            }), e = e.EventEmitter = function() {};
            var o = Array.isArray;
            e.prototype.emit = function(e) {
                var t;
                if ("error" === e && (!this._events || !this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if (arguments[1] instanceof Error) throw arguments[1];
                    throw Error("Uncaught, unspecified 'error' event.")
                }
                if (!this._events) return !1;
                if (!(i = this._events[e])) return !1;
                if ("function" == typeof i) {
                    switch (arguments.length) {
                        case 1:
                            i.call(this);
                            break;
                        case 2:
                            i.call(this, arguments[1]);
                            break;
                        case 3:
                            i.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            t = Array.prototype.slice.call(arguments, 1), i.apply(this, t)
                    }
                    return !0
                }
                if (o(i)) {
                    t = Array.prototype.slice.call(arguments, 1);
                    for (var i, n = 0, a = (i = i.slice()).length; n < a; n++) i[n].apply(this, t);
                    return !0
                }
                return !1
            }, e.prototype.addListener = function(e, t) {
                if ("function" != typeof t) throw Error("addListener only takes instances of Function");
                return this._events || (this._events = {}), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, this
            }, e.prototype.on = e.prototype.addListener, e.prototype.once = function(t, i) {
                var n = this;
                n.on(t, function e() {
                    n.removeListener(t, e), i.apply(this, arguments)
                })
            }, e.prototype.removeListener = function(e, t) {
                if ("function" != typeof t) throw Error("removeListener only takes instances of Function");
                if (!this._events || !this._events[e]) return this;
                var i = this._events[e];
                if (o(i)) {
                    var n = i.indexOf(t);
                    if (n < 0) return this;
                    i.splice(n, 1), 0 === i.length && delete this._events[e]
                } else this._events[e] === t && delete this._events[e];
                return this
            }, e.prototype.removeAllListeners = function(e) {
                return e ? e && this._events && this._events[e] && (this._events[e] = null) : this._events = {}, this
            }, e.prototype.listeners = function(e) {
                return this._events || (this._events = {}), this._events[e] || (this._events[e] = []), o(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
            }
        }(window),
        function(n) {
            function e(e, t) {
                if (!t.engineIo) throw Error("You must specify engineIo");
                var i;
                t.timestampRequests = !0, t.timestampParam = "__t", this.__callbackIndex = 0, this.__callbacks = {}, this.state = a.OPENING, this.socket = new t.engineIo(e, t), this.debug = !1, document.getElementById("tawk__dmz") && (i = this, n.getSocketTransport = function() {
                    if (i.socket.transport) return i.socket.transport.name
                }), document.location && "#!tawk-debug" === document.location.hash && (this.debug = !0), EventEmitter.call(this), this.attachListeners()
            }
            var t, a = {
                OPENING: "opening",
                OPEN: "open",
                CLOSING: "closing",
                CLOSED: "closed"
            };
            for (t in EventEmitter.prototype) "function" == typeof EventEmitter.prototype[t] && Object.prototype.hasOwnProperty.call(EventEmitter.prototype, t) && (e.prototype[t] = EventEmitter.prototype[t]);
            e.prototype.attachListeners = function() {
                var i = this;
                this.socket.on("open", function() {
                    i.state = a.OPEN, i.emit("connect")
                }), this.socket.on("close", function(e, t) {
                    i.emit("disconnect", e, t), i.doClose()
                }), this.socket.on("error", function(e) {
                    i.emit("error", e)
                }), this.socket.on("message", function(e) {
                    i.onMessage(e)
                })
            }, e.prototype.close = e.prototype.disconnect = function() {
                var e = this;
                this.state === a.OPENING && setTimeout(function() {
                    e.close()
                }, 1e3), this.state === a.OPEN && (this.state = a.CLOSING, this.clearCallbacks(), this.socket.close())
            }, e.prototype.doClose = function() {
                this.clearCallbacks(), this.state = a.CLOSED, this.socket.removeAllListeners(), this.removeAllListeners(), this.socket = null
            }, e.prototype.clearCallbacks = function() {
                this.__callbacks = {}
            }, e.prototype.onMessage = function(e) {
                (e = this.decode(e)) && ("__callback__" === e.c ? this.executeCallback(e) : this.emit.apply(this, [e.c].concat(e.p)))
            }, e.prototype.executeCallback = function(e) {
                var t = this.__callbacks[e.cb];
                delete this.__callbacks[e.cb], t.apply(null, e.p)
            }, e.prototype.decode = function(e) {
                var t;
                this.debug && console && console.log && (data = new Date, console.log("received " + data.toUTCString() + " : " + e));
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return void this.emit("error", e)
                }
                if (t.c)
                    if ("error" === t.c || "connect" === t.c || "disconnect" === t.c) this.emit("error", Error("server returned reserved command : `" + t.cmd + "`"));
                    else if (t.p && "[object Array]" !== Object.prototype.toString.call(t.p)) this.emit("error", Error("data is expected to be an array"));
                else {
                    if ("__callback__" !== t.c) return t;
                    if (e = parseInt(t.cb, 10), isNaN(e)) this.emit("error", Error("received callback command but there was no valid callback id(`" + e + "`"));
                    else {
                        if (this.__callbacks[e]) return t.cb = e, t;
                        this.emit("error", Error("received callback command but callback isnt present (`" + t.cb + "`)"))
                    }
                } else this.emit("error", Error("no command was sent by the server"))
            }, e.prototype.send = function() {
                var e = this.encode(arguments);
                this.debug && console && console.log && (data = new Date, console.log("send " + data.toUTCString() + " : " + e)), this.state !== a.OPEN ? this.emit("error", Error("Socket isnt open its state is `" + this.state + "` tried to send `" + e + "`")) : e && this.socket.send(e)
            }, e.prototype.encode = function(e) {
                var t, i = {};
                if ((e = Array.prototype.slice.call(e))[0]) {
                    i.c = e[0], "function" == typeof e[e.length - 1] && (i.cb = this.enqueuCallback(e.pop())), i.p = e.slice(1);
                    try {
                        t = JSON.stringify(i)
                    } catch (e) {
                        return void this.emit("error", e)
                    }
                    return t
                }
                this.emit("error", Error("now command specified"))
            }, e.prototype.enqueuCallback = function(e) {
                return this.__callbacks[this.__callbackIndex] = e, this.__callbackIndex++
            }, n.$__TawkSocket = e
        }(window),
        function(s) {
            var m, o, g, a, r, u, t, l, f, v, b, n, d = {},
                h = this,
                e = (new Date).getTime(),
                p = h.navigator,
                y = {
                    viewHandler: null
                };
            s.startTime = e.toString(), s.loaded = !1, s.connected = !1, s.ready = !1, "undefined" != typeof Tawk_LoadStart && ($_Tawk_LoadStart = Tawk_LoadStart);
            try {
                y.ResetStyle = "html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}html,body{height:100%;width:100%}body{background:transparent;height:100%;width:100%;font:13px Helvetica,Arial,sans-serif;position:relative}.clear{clear:both}.clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}", y.MaximizedStyle = "body{font-weight:normal;outline:0;font-size:15px;font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}::-webkit-input-placeholder{white-space:normal}::-moz-placeholder{white-space:normal}:-ms-input-placeholder{white-space:normal}:-moz-placeholder{white-space:normal}.rtl-direction{direction:rtl !important}#tawkchat-maximized-wrapper{width:100%;height:100%;position:relative}#tawkchat-maximized-wrapper.noMenu .headerBoxLink{display:none !important}#tawkchat-maximized-wrapper.noMenu #minimizeChat.headerBoxLink{display:block !important}#tawkchat-maximized-wrapper .notShown{display:none !important}#borderWrapper{position:absolute;top:0;bottom:0;z-index:-10;background-color:#e1e1e1;width:100%;height:100%}#innerWrapper{background:#fff;left:0;position:absolute;right:0;top:0;bottom:0;border:1px solid #e9e9e9}#headerBoxWrapper{height:60px}#expandableLink{height:5px;width:100%;font-size:0;cursor:s-resize;visibility:hidden;position:absolute;top:56px;z-index:30}#expandableIcon{width:30px;height:4px;margin:0 auto;background:#a1a1a1}#expandableLink.expanded{cursor:n-resize}#headerBox{height:60px;position:relative;z-index:30;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#agentBar{height:100px;display:none}#headerBoxControlsContainer{height:60px;position:relative;float:none;display:grid;grid-auto-columns:1fr;padding:0 8px;display:-ms-grid;-ms-grid-columns:1fr}#headerBoxControlsContainer #screenShare{-ms-grid-row:1;-ms-grid-column:2;float:left;width:30px;height:60px}#headerBoxControlsContainer #voiceCall{-ms-grid-row:1;-ms-grid-column:3;float:left;width:30px;height:60px}#headerBoxControlsContainer #videoCall{-ms-grid-row:1;-ms-grid-column:4;float:left;width:30px;height:60px}#headerBoxControlsContainer .headerBoxLink{-ms-grid-row:1;-ms-grid-column:5;float:left;width:30px;height:60px}#headerBoxControlsContainer #minimizeChat{-ms-grid-row:1;-ms-grid-column:6;float:left;width:30px;height:60px}#headerAccountStateContainer{width:fit-content;height:60px;display:grid;grid-template-columns:auto 1fr;-ms-flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;-ms-flex-shrink:1;-webkit-flex-shrink:1;-moz-flex-shrink:1;flex-shrink:1;-ms-flex:1;display:-ms-grid;-ms-grid-columns:auto 1fr}#headerAccountStateContainer #headerAccountState{-ms-grid-row:1;-ms-grid-column:1;float:left}#headerAccountStateContainer #agentProfileContainer{-ms-grid-row:1;-ms-grid-column:2;float:left;width:auto}.rtl-direction #headerAccountStateContainer #agentProfileContainer{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#headerAccountStateContainer #agentProfileContainer.show{display:-ms-grid;display:grid;-ms-grid-columns:auto auto 1fr;grid-template-columns:auto auto 1fr}.agent-profile-detailed{-ms-grid-row:1;-ms-grid-column:3}#headerAccountState{padding:0 5px 0 14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:0;height:100%;box-sizing:border-box;line-height:60px}#shortMessage{font-weight:500}#chatContainerWrapper{position:absolute;bottom:78px;top:0;width:100%;background-color:white}#greetingsText{white-space:pre-wrap}#chatContainerWrapper.chat-ended{bottom:118px}.no-branding #chatContainerWrapper{bottom:48px}.form-opened #bottomContainer{bottom:0;z-index:1}#chatContainer{overflow:scroll;position:absolute;font-size:14px;color:#6c6c6c;min-width:270px;height:auto;overflow-x:hidden;top:0;bottom:0;width:100%;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#fff #fff;-ms-overflow-style:-ms-autohiding-scrollbar}#chatContainer::-webkit-scrollbar,#formFieldsContainer::-webkit-scrollbar{width:7px}#chatContainer::-webkit-scrollbar-thumb,#formFieldsContainer::-webkit-scrollbar-thumb{-webkit-border-radius:3px;border-radius:3px;background:transparent}#tawkchat-maximized-wrapper:hover #chatContainer::-webkit-scrollbar-thumb,#formFieldsContainer:hover::-webkit-scrollbar-thumb{background:#aaa}#tawkchat-maximized-wrapper:hover #chatContainer,#tawkchat-maximized-wrapper:hover #formFieldsContainer{scrollbar-color:#aaa #fff}.uploadFailedNotifContainer,#maxFileNotificationContainer,#maxSizeNotificationContainer{color:black;background-color:white;border:1px solid #ddd;margin:5px 10px;padding:9px 10px 18px 10px;border-radius:6px;font-size:13px;position:relative}.uploadFailedNotifContainer{margin-bottom:25px}#maxFileNotificationContainer #maxFileNumberList,#maxSizeNotificationContainer #maxFileSizeList{margin:0;margin-top:10px;font-weight:600}#maxFileNotificationContainer #maxFileNumberList ul,#maxSizeNotificationContainer #maxFileSizeList ul{list-style:none}.uploadFailedNotifMessage,#maxFileNotificationMessage,#maxSizeNotificationMessage{margin-top:13px}.uploadFailedNotifIconContainer,#maxFileNotifIconContainer,#maxSizeNotifIconContainer{height:30px;width:30px;background-color:#e52f48;border-radius:5px;display:inline-block;position:relative;text-align:center;vertical-align:middle;line-height:30px}.uploadFailedNotifIconWrapper,#maxFileNotifIconWrapper,#maxSizeNotifIconWrapper{height:0;width:0;border-width:0 10px 17px 10px;border-style:solid;border-color:transparent transparent white transparent;display:inline-block;position:absolute;left:50%;top:50%;-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uploadFailedSizeNotifIcon,#maxFileNotifIcon,#maxSizeNotifIcon{color:#e52f48;font-weight:900;font-size:11px;display:inline-block;z-index:9999;position:relative;padding-top:2px}.uploadFailedNotifLabel,#maxFileNotifLabel,#maxSizeNotifLabel{display:inline-block;line-height:30px;vertical-align:top;margin-left:10px;font-weight:600}.uploadFailedRetryContainer{position:absolute;bottom:-18px;right:2px}.rtl-direction .uploadFailedRetryContainer{right:auto;left:2px}.uploadFailedRetryContainer a{font-size:12px;color:#e52f48;font-weight:600}.closeButtonContainer{margin:5px auto auto auto;display:inline-block;float:right;font-size:18px;cursor:pointer}.closeNotification{cursor:pointer;text-transform:uppercase}#maxFileSizeList,#maxFileNumberList{margin:10px}#maxFileSizeList li,#maxFileNumberList li{word-wrap:break-word}#maxFileSizeList a,#maxFileNumberList a{color:#00E}#maxFileNumberList a{display:none}#chatContainer .hidden{display:none}.actionRetry{cursor:pointer;float:right}#actionsContainer{z-index:99998;background-color:#fff;border-top:2px solid #e1e1e1;position:absolute;bottom:0;width:100%;height:46px}#status-message{font-weight:bold;font-style:normal}#resizeBox{width:52px;height:52px;position:absolute;top:0;background-color:#000;z-index:5}body.right #resizeBox{left:0;float:left;-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px}body.left #resizeBox{right:0;float:right;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px}#resizeInnerBox{background-color:#fefefe;width:47px;height:47px}body.right #resizeInnerBox{-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;margin:5px 0 0 5px}body.left #resizeInnerBox{-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px;margin:5px 5px 0 0}#pluginsBar{height:23px;background-color:#c2c2c2;min-width:278px}#rateMainWrapper{float:left;position:relative}#ratePositive{background-position:-145px 0}#rateNegative{background-position:-126px 0}#rateNegative:hover,#rateNegative.selected{background-position:-183px 0}#rateNegative:hover,#ratePositive:hover{transform:scale(1.2,1.2)}.activeSound{background-position:0 0;background-repeat:no-repeat}.disabledSound{background-position:-21px 0;background-repeat:no-repeat}#textareaWrapper{display:block;background-color:#fff;position:relative;height:100%;z-index:2}#textareaContainer{height:100%;padding:16px 14px 13px 14px;box-sizing:border-box}#textareaContainer.with-emoji{padding-right:44px;padding-left:14px}.rtl-direction #textareaContainer.with-emoji{padding-left:44px;padding-right:14px}#chatTextarea{padding:0;margin:0;height:100%;width:100%;overflow:hidden;resize:none;border:0;font-size:14px !important;background-color:#fff;color:#000;font-family:inherit}#chatTextarea:active,#chatTextarea:focus{outline:0}#textareaContainer textarea::-webkit-input-placeholder{color:#bdbdbd}#textareaContainer textarea::-moz-placeholder{color:#bdbdbd}#textareaContainer textarea:-ms-input-placeholder{color:#bdbdbd}#chatTextarea::placeholder{color:#bdbdbd !important}#greetingsContainer{margin:7px 45px 0 45px;margin:14px 0;padding:10px 15px;text-align:center;white-space:pre-wrap;word-wrap:break-word;color:black;font-weight:400;margin-top:0}#greetingsText a{color:inherit}#greetingsWaitTime{margin:14px 0 0;display:none}#formContainer #greetingsContainer{margin:0 !important}#agentBar.expanded{height:auto;overflow-y:auto;display:block;max-height:153px}#agentList{position:absolute;left:50%;top:0;-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap;overflow-x:hidden;max-width:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#agentList::-webkit-scrollbar{display:none}#agentList .agentWrapper{border-radius:0;min-width:0;display:inline-block;margin:10px 10px;text-align:center;flex-grow:1}#profileDetail .agentContainer{margin-left:50px}.agentContainer{height:50px}.rtl-direction #profileDetail .agentContainer{margin-right:50px;margin-left:0}#agentBar .agentContainer{height:auto;width:100%;margin-top:5px}.agentContainerNoImage{height:45px}.agentWrapper{width:100%;min-width:280px;clear:both;position:relative;-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-topright:10px;border-top-left-radius:10px;border-top-right-radius:10px}#headerBox .agentInformationContainer{padding:10px 0}.rtl-direction #agentBar .agentInformationContainer{margin-right:auto;margin-left:auto}.rtl-direction #agentBar .agentContainer{clear:both}.agentInformationContainerNoImage{padding-top:13px;padding-bottom:13px;font-size:16px}.agentInformationContainer{font-size:14px}.position-label{font-size:12px}.agentNameCentered{font-weight:400;font-size:16px;text-transform:capitalize;margin-top:5px}.rtl-direction .noImageAgentProfileDetail{padding:0 5px 0 0}.agentInformationContainer p{white-space:nowrap;overflow:hidden;box-sizing:border-box;text-overflow:ellipsis}@-ms-keyframes profileShow{0%{-ms-transform:scale(0)}6.25%{-ms-transform:scale(0.1)}12.5%{-ms-transform:scale(0.2)}18.75%{-ms-transform:scale(0.3)}25%{-ms-transform:scale(0.4)}31.25%{-ms-transform:scale(0.5)}37.5%{-ms-transform:scale(0.6)}43.75%{-ms-transform:scale(0.7)}50%{-ms-transform:scale(0.8)}56.25%{-ms-transform:scale(0.9)}62.5%{-ms-transform:scale(1)}68.75%{-ms-transform:scale(1.1)}75%{-ms-transform:scale(1.2)}81.25%{-ms-transform:scale(1.3)}87.5%{-ms-transform:scale(1.2)}93.75%{-ms-transform:scale(1.1)}100%{-ms-transform:scale(1)}}@-webkit-keyframes profileShow{0%{-webkit-transform:scale(0)}6.25%{-webkit-transform:scale(0.1)}12.5%{-webkit-transform:scale(0.2)}18.75%{-webkit-transform:scale(0.3)}25%{-webkit-transform:scale(0.4)}31.25%{-webkit-transform:scale(0.5)}37.5%{-webkit-transform:scale(0.6)}43.75%{-webkit-transform:scale(0.7)}50%{-webkit-transform:scale(0.8)}56.25%{-webkit-transform:scale(0.9)}62.5%{-webkit-transform:scale(1)}68.75%{-webkit-transform:scale(1.1)}75%{-webkit-transform:scale(1.2)}81.25%{-webkit-transform:scale(1.3)}87.5%{-webkit-transform:scale(1.2)}93.75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@-moz-keyframes profileShow{0%{-moz-transform:scale(0)}6.25%{-moz-transform:scale(0.1)}12.5%{-moz-transform:scale(0.2)}18.75%{-moz-transform:scale(0.3)}25%{-moz-transform:scale(0.4)}31.25%{-moz-transform:scale(0.5)}37.5%{-moz-transform:scale(0.6)}43.75%{-moz-transform:scale(0.7)}50%{-moz-transform:scale(0.8)}56.25%{-moz-transform:scale(0.9)}62.5%{-moz-transform:scale(1)}68.75%{-moz-transform:scale(1.1)}75%{-moz-transform:scale(1.2)}81.25%{-moz-transform:scale(1.3)}87.5%{-moz-transform:scale(1.2)}93.75%{-moz-transform:scale(1.1)}100%{-moz-transform:scale(1)}}@-o-keyframes profileShow{0%{-o-transform:scale(0)}6.25%{-o-transform:scale(0.1)}12.5%{-o-transform:scale(0.2)}18.75%{-o-transform:scale(0.3)}25%{-o-transform:scale(0.4)}31.25%{-o-transform:scale(0.5)}37.5%{-o-transform:scale(0.6)}43.75%{-o-transform:scale(0.7)}50%{-o-transform:scale(0.8)}56.25%{-o-transform:scale(0.9)}62.5%{-o-transform:scale(1)}68.75%{-o-transform:scale(1.1)}75%{-o-transform:scale(1.2)}81.25%{-o-transform:scale(1.3)}87.5%{-o-transform:scale(1.2)}93.75%{-o-transform:scale(1.1)}100%{-o-transform:scale(1)}}@keyframes profileShow{0%{transform:scale(0)}6.25%{transform:scale(0.1)}12.5%{transform:scale(0.2)}18.75%{transform:scale(0.3)}25%{transform:scale(0.4)}31.25%{transform:scale(0.5)}37.5%{transform:scale(0.6)}43.75%{transform:scale(0.7)}50%{transform:scale(0.8)}56.25%{transform:scale(0.9)}62.5%{transform:scale(1)}68.75%{transform:scale(1.1)}75%{transform:scale(1.2)}81.25%{transform:scale(1.3)}87.5%{transform:scale(1.2)}93.75%{transform:scale(1.1)}100%{transform:scale(1)}}#agentBar .alias-image,#headerBox .alias-image{width:40px;height:40px;margin:0;background-repeat:no-repeat;border-radius:50%;margin:5px 0;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:40px 40px;float:left;margin-left:-100%;animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s}#headerBox .alias-image{width:30px;height:30px;position:relative;margin-left:-10px;display:inline-block;margin-top:14px;box-shadow:0 0 0 1px #eee;background-size:30px 30px}#agentBar .alias-image{float:none;margin:0 auto;width:53px;height:53px;background-size:53px 53px}.agentChatContainer .messageBody{margin:-12px 0 0 0;max-width:calc(100% - 30px)}.rtl-direction .agentChatContainer .messageBody{float:right;margin:-12px 00px 0 0;padding-right:40px}.agentChatContainer .message{background:#eee;color:#333;margin-left:0;padding:5px 10px;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.1)}.ie9.rtl-direction .agentChatContainer .message{border-radius:0 15px 15px 15px !important}.agentChatContainer .messageStatusContainer{margin-left:-40px;position:absolute;top:5px;left:100%}.rtl-direction .agentChatContainer .messageStatusContainer{margin:0 -40px 0 0;left:auto;right:100%}.messageContainer.agentChatContainer{margin:15px 40px 12px 11px}.rtl-direction .messageContainer.agentChatContainer{margin:30px 8px 10px 23px}.messageContainer.visitorChatContainer{margin:15px 15px 12px 74px}.rtl-direction .messageContainer.visitorChatContainer{margin:10px 0 10px 12px}.visitorChatContainer .messageBody{margin:0;float:right;max-width:100%;min-height:62px}.rtl-direction .visitorChatContainer .messageBody{float:left}.visitorChatContainer .messageWrapper .message{color:#333;text-align:left;background:#e5e5e5}.rtl-direction .visitorChatContainer .messageWrapper .message{text-align:left;margin:0 30px 0 0;border-radius:0 15px 15px 15px;border-radius:3px}.ie9.rtl-direction .visitorChatContainer .messageWrapper .message{border-radius:15px 0 15px 15px !important;border-radius:3px}.message.agentTypingIndicator,.messageContainer .messageWrapper .message{position:relative}.message.agentTypingIndicator::after,.message.agentTypingIndicator::before,.upload-data::after,.upload-data::before,.messageContainer .messageWrapper .message::after,.messageContainer .messageWrapper .message::before{content:'';display:block;position:absolute;width:0;height:0;border-style:solid;top:6px;border-width:7px}.message.agentTypingIndicator::after,.message.agentTypingIndicator::before,.messageContainer.agentChatContainer .messageWrapper .message::after,.messageContainer.agentChatContainer .messageWrapper .message::before{right:100%}.message.agentTypingIndicator::before,.messageContainer.agentChatContainer .messageWrapper .message::before{border-color:transparent #f9f9f9 transparent transparent;border-width:7px;top:6px}.upload-data::after,.upload-data::before,.messageContainer.visitorChatContainer .messageWrapper .message::after,.messageContainer.visitorChatContainer .messageWrapper .message::before{left:100%}.upload-data::before,.messageContainer.visitorChatContainer .messageWrapper .message::before{border-color:transparent transparent transparent #f9f9f9;border-width:7px;top:5px}.message.agentTypingIndicator::after,.messageContainer.agentChatContainer .messageWrapper .message::after{top:7px;border-width:6px}.upload-data::after,.messageContainer.visitorChatContainer .messageWrapper .message::after{top:6px;border-width:6px}.visitorChatContainer .messageStatusContainer.errorInMessage{width:100%;position:relative;right:auto;text-align:right;font-size:12px;color:#ec6368;font-weight:600;line-height:1;top:3px;float:right}.visitorChatContainer .messageStatusContainer.errorInMessage a{float:right;display:inline-block;font-size:12px;text-decoration:underline;color:#ec6368;width:auto;background:0;text-align:right;top:0;margin:0 0 0 15px;font-weight:900}.messageStatusContainer.pending .failed-label,.messageStatusContainer.pending .icon-alert{display:none}.time-div{visibility:hidden}.mobile .time-div{visibility:visible}.one-agent .agent-div.agent{display:none}.messageBody:hover .time-div{visibility:visible}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage a{float:left;text-align:left}.visitorChatContainer .messageStatusContainer{position:absolute;right:100%;top:0;left:auto}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage{left:auto;margin:0}.rtl-direction .visitorChatContainer .messageStatusContainer{right:auto;left:100%;margin:0 0 0 -40px}.messageHead{position:absolute;z-index:10001}.messageHeadLine{position:relative;top:10px;z-index:1}.messageContainer .messageHead .messageTitle{text-align:center;width:100%}.messageBody{line-height:1.5em;margin:5px 0 0 42px;float:left;position:relative}.notification{margin-left:0;width:100%}.ownerNameContainer,.notificationContainer{float:left}.rtl-direction .notificationContainer{direction:rtl !important;float:right}.notificationContainer .message{margin-right:40px;font-size:14px !important;font-style:italic}.rtl-direction .notificationContainer .message{margin:0 0 0 40px}.message{white-space:pre-wrap;word-wrap:break-word}.messageContainer .messageHead.agent .messageTime,.notificationTime{color:#b3b3b3}.messageContainer .chat-agent-name{position:absolute;bottom:-18px;left:40px;font-size:11px}.rtl-direction .messageContainer .chat-agent-name{left:auto;right:40px}.notificationTime{width:40px;float:left;margin-left:-40px;text-align:right;font-size:12px !important}.rtl-direction .notificationTime{float:right;margin:0 -40px 0 0;text-align:left}.messageStatusContainer{position:relative;z-index:2;width:40px}.messageTime{padding:0 2px 0 8px;font-size:11px !important;color:#777;display:none}.rtl-direction .messageTime{padding:0 8px 0 2px}.messageTime.visitor{padding:0 8px 0 2px}.messageTime.agent,.messageTime.visitor{display:inline-block;margin:0;padding:0;line-height:1;top:auto;bottom:auto;vertical-align:bottom}.rtl-direction .messageTime.visitor{padding:0 2px 0 8px}.messageWrapper{background:0;position:relative;width:auto}.rtl-direction .messageWrapper{float:right;max-width:100%}.messageStatus:active,.messageStatus:focus{outline:0}.messageStatusContainer.pending .lds-spinner{transform:scale(0.3);margin-left:-5px;margin-top:-25%}.messageWrapper.pending{font-style:italic}.messageWrapper.error{font-style:italic;color:red;cursor:pointer;float:right;width:auto;max-width:100%}.rtl-direction .messageWrapper.error{max-width:100%;float:left}.messageWrapper.error .message{background-color:#ec6368 !important;color:#fff !important}.messageWrapper .message{font-size:14px !important;padding:10px 13px;font-weight:400;border-radius:5px;box-shadow:0 0 1px 0 rgba(0,0,0,0.1)}.messageTitle span{text-transform:uppercase;font-weight:bold;padding:0 10px;color:#ccc;background-color:#fff;z-index:1;position:relative}#formContainer::-webkit-scrollbar{display:none}.formMessageField{padding:10px 20px;line-height:1.2em;color:#616161;font-size:15px;text-align:left;word-wrap:break-word}.form{font-size:13px;color:#a1a1a1;height:auto;position:absolute;top:0;bottom:30px;left:6px;right:6px;overflow:hidden;max-width:400px;margin:0 auto;width:calc(100% - 16px)}.rtl-direction .form{left:0;right:6px}#changeNameForm.form,#emailTranscriptForm.form,#endChatForm.form{max-width:284px}.no-branding .form{bottom:14px}.form::-webkit-scrollbar{display:none}.form fieldset{padding:0}.form textarea{resize:none;display:block;height:40px;width:100%;overflow:auto;padding:0 15px;color:#707070;font-size:13px;font-weight:bold;border:0;background-color:#fff;margin:13px 0;-webkit-appearance:none}.form textarea:active,.form textarea:focus,.inputContainer select:active,.inputContainer select:focus{outline:0}.inputContainer{padding:0 15px;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;margin:0 0 7px 0;position:relative}.inputContainer input,.inputContainer select{width:100%;margin:0;border:0;display:block;line-height:1.2em;padding:10px 0;color:#707070;font-size:13px;font-weight:bold;font-family:inherit;-webkit-appearance:none}.inputContainer input{padding:11px 0}.inputContainer.other-fix{padding:0}.inputContainer select{background-color:#fff;outline:0}#departmentFieldFieldset.safari-fix .inputContainer{position:relative}#departmentFieldFieldset.safari-fix .inputContainer:after{position:absolute;right:24px;top:12px;cursor:pointer;width:10px;height:10px;font-size:10px;padding:0;background:#fff;color:#000;content:'▼';pointer-events:none;cursor:pointer}.inputContainer.error,.form .textareaFieldset.error{border-color:#ef5656;color:#ef5656;margin-bottom:0 !important}.inputContainer.error input,.form .textareaFieldset.error textarea,.inputContainer.error select,.error .form-field-label{color:#ef5656;padding-right:30px}.inputContainer.error input::-webkit-input-placeholder,.form .textareaFieldset.error textarea::-webkit-input-placeholder{color:#ef5656}.inputContainer.valid,.form .textareaFieldset.valid{border-color:#92ed9d}.inputContainer.valid{padding-right:30px}.inputContainer.selection.valid{padding:0}.inputContainer input:active,.inputContainer input:focus{margin:0;border:0;outline:0}.inputContainer input:active+.form-field-label,.inputContainer input:focus+.form-field-label,.textareaFieldset textarea:active+.form-field-label,.textareaFieldset textarea:focus+.form-field-label{display:block}.inputContainer input:active::-webkit-input-placeholder,.inputContainer input:focus::-webkit-input-placeholder,.textareaFieldset textarea:active::-webkit-input-placeholder,.textareaFieldset textarea:focus::-webkit-input-placeholder{color:transparent !important}.inputContainer input:focus::-moz-placeholder,.inputContainer input:active::-moz-placeholder,.textareaFieldset textarea:focus::-moz-placeholder,.textareaFieldset textarea:active::-moz-placeholder{color:transparent !important;opacity:0 !important}.formErrorContainer{display:none;margin:0 0 7px 15px;color:#e52f48}.formErrorIcon{display:none;position:absolute;top:50%;right:10px;-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);white-space:nowrap}.form-icon{color:white;font-weight:900;position:absolute;right:-2.5px;font-size:11px;top:1.5px}.rtl-direction .formErrorContainer{margin:0 15px 7px 0}.rtl-direction #preChatForm .formErrorContainer,.rtl-direction #offlineForm .formErrorContainer{margin:-6px 0 7px 15px}#formSavingStatus.errorMessage{color:#ef5656;border:0;visibility:visible}#formSavingStatus{font-size:13px;visibility:hidden;margin:0 auto;max-width:260px}#formSavingStatus img{margin:0 0 0 5px}.formButtonContainer{margin:20px 0 0 0}button{display:inline;zoom:1;vertical-align:baseline;outline:0 none;cursor:pointer;text-align:center;text-decoration:none;overflow:visible;margin:0;padding:7px 15px 8px 15px;font-family:inherit;background-color:#c1c1c1;color:#3d3d3d;border:0;float:left;font-weight:bold;font-size:14px}button::-moz-focus-inner{border:0}button:focus{outline:0}button:active{background-color:#ddd}button:hover{background-color:#a9a9a9}.formButton{width:100%;height:50px}#agentTypingContainer .messageBody{font-size:16px !important;font-weight:bold;min-width:auto;line-height:normal}#offlineOverlay,#inactivityOverlay,#maintenanceOverlay{text-align:center;margin-top:100px;font-size:40px;font-weight:bold;height:auto}#formInnerHeight{margin:0 auto}#tawktoLink{color:#4f4f4f;font-size:12px;font-weight:400;text-decoration:none;padding:5px}#tawktoLink:hover{background:#eee;border-radius:3px}#tawktoLink .emojione{margin-left:-5px;margin-right:-5px;height:3ex;width:auto;min-height:20px;min-width:20px;display:inline-block;vertical-align:middle}#tawktoLink b{font-weight:700}#bottomContainer{text-align:center;width:100%;position:absolute;bottom:48px;height:30px;background:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:30px}.headerBoxLink{width:30px;height:60px;margin:0;display:inline-block;position:relative;grid-row:1;text-decoration:none}#chatMenu{text-decoration:none}.headerBoxLink .headerBoxIcon{font-size:18px;margin:0 auto;display:block;width:18px;line-height:60px;vertical-align:middle}.headerBoxLink#faq{display:none}.headerBoxLink.active::before,#chatMenu.active::before{content:\"\";height:25px;width:25px;background-color:#00000030;position:absolute;border-radius:3px;top:17px;right:3px}#chatMenuControls{background-color:white;width:calc(100vw - 50px);max-width:200px;position:absolute;z-index:9999;border-radius:3px;top:45px;right:0;display:none;border:1px solid #e2e2e2;animation:slideDown .2s;-webkit-animation:slideDown .2s;-moz-animation:slideDown .2s;-o-animation:slideDown .2s}@keyframes slideDown{0%{transform:translateY(-2%)}50%{transform:translateY(-1%)}100%{transform:translateY(0%)}}@-webkit-keyframes slideDown{0%{-webkit-transform:translateY(-2%)}50%{-webkit-transform:translateY(-1%)}100%{-webkit-transform:translateY(0%)}}#chatMenuControls::after{content:\"\";width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid white;position:absolute;top:-6px;right:8px}#chatMenuControlsOverlay{position:fixed;top:50px;left:0;height:calc(100vh - 50px);width:100vw}.rtl-direction #chatMenuControls{right:auto;left:0}.rtl-direction #chatMenuControls::after{right:auto;left:8px}#chatMenuControls ul{padding:0;margin:0;list-style:none;text-align:left;padding:10px;position:relative}#chatMenuControls li{padding:10px;cursor:pointer;font-size:14px;color:#434343}#chatMenuControls li:hover{background-color:#53ce3c;color:white;border-radius:3px}.rtl-direction #endChat{margin-right:5px}#endChat .icon{width:11px;height:11px;float:right;margin:2.5px}.black #endChat .icon{background-position:0 0}.white #endChat .icon{background-position:-63px 0}#minimizeChat .icon{width:11px;height:7px;margin:4.5px 2.5px}.black #minimizeChat .icon{background-position:-32px 0}.white #minimizeChat .icon{background-position:-95px 0}#popoutChat .icon{width:10px;height:10px;margin:3px}.isPopout #popoutChat{display:none}.black #popoutChat .icon{background-position:-48px 0}.white #popoutChat .icon{background-position:-111px 0}#openMenu{position:absolute;left:10px;bottom:0;color:#bdbdbd;font-size:13px;font-weight:700;text-decoration:none;line-height:28px;z-index:100001;cursor:pointer;text-transform:lowercase}.rtl-direction #openMenu{right:10px;left:auto}#options{height:32px;margin-left:110px;text-overflow:ellipsis}.rtl-direction #options{margin:0 110px 0 0}.profileImageContainer .agentProfileImage{background-position:0 0;width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;top:-9px}#tawkToContent{display:none;position:absolute;top:60px;bottom:0;width:100%;background:#fff;z-index:3}#tawkToContent #formFieldsContainer{left:8px;right:8px;margin:14px 0}#tawkToContent .formFrame{position:absolute;overflow:hidden;top:0;bottom:0;left:0;right:0;height:auto;width:auto}#tawkToContent .contentContainer{position:relative;height:100%;overflow:auto}#tawkToContent .buttonContainer{position:absolute;height:50px;bottom:0;width:100%}#tawkToContent .buttonContainer button{width:50%;height:50px}#tawkHeader{font-size:22px;font-weight:bold;text-align:center;padding:20px 0 12px 0;color:#343434;border-bottom:2px solid #ddd;width:150px;margin:0 auto}#tawkContent{font-size:15px;text-align:center;color:#6c6c6c;margin:12px 0 0}#tawkImage{background-image:url('https://static-v.tawk.to/a-v3/images/tawky.png');background-position:-235px 0;width:78px;height:83px;margin:0 auto}#cancelTawkRedirect{float:left}#tawkRedirect{float:right}#optionsContainer{position:absolute;left:0;width:155px;bottom:0;z-index:1000001;padding:3px;text-align:left}.rtl-direction #optionsContainer{left:auto;right:0}#optionsContainer .item{padding:0 3px;color:#696969;cursor:pointer;font-size:12px;font-weight:bold;line-height:30px;display:inline-block;vertical-align:middle;position:relative;height:30px}.rtl-direction #optionsContainer .item{float:right}#optionsContainer .tooltip{position:absolute;top:0;left:0;background:#333;color:#fff;padding:2px;-ms-transform:translate(-50%,-100%);-webkit-transform:translate(-50%,-100%);-moz-transform:translate(-50%,-100%);-o-transform:translate(-50%,-100%);transform:translate(-50%,-100%);min-width:100px;border-radius:3px;display:none;line-height:20px;position:absolute;left:50%;text-align:center}#soundOption .tooltip{left:0;-ms-transform:translate(0%,-100%);-webkit-transform:translate(0%,-100%);-moz-transform:translate(0%,-100%);-o-transform:translate(0%,-100%);transform:translate(0%,-100%)}#emailTranscriptOption .tooltip{left:-26px;-ms-transform:translate(0%,-100%);-webkit-transform:translate(0%,-100%);-moz-transform:translate(0%,-100%);-o-transform:translate(0%,-100%);transform:translate(0%,-100%)}#optionsContainer .item:hover .tooltip{display:block}#emailTranscriptForm .inputContainer,#changeNameForm .inputContainer,#endChatForm .inputContainer{border:0;margin:0}#offlineForm #messageField{height:85px}#offlineFormContainer.success #offlineForm #overlayOfflineForm{display:block}#overlayOfflineForm{position:absolute;top:50%;-ms-transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);transform:translate(0%,-50%);bottom:0;left:0;right:0;display:none;z-index:1;background-color:#fff;color:#000;text-align:center;padding:20px 15px;font-size:15px}#overlayOfflineForm #resendButton{margin-top:15px;padding:7px 12px;width:100%;font-weight:700;cursor:pointer;height:40px}#overlayOfflineForm p{font-size:17px}.innerTittle{margin:0;padding:15px 0;text-align:left;font-size:14px}.rtl-direction #formInnerHeight .innerTittle{text-align:right}.rtl-direction #emailTranscriptFormMessageContainer,.rtl-direction #changeNameFormMessageContainer{text-align:right}.rtl-direction .longFormBottomContainer #formCancel,.rtl-direction .longFormBottomContainer #formDecline{float:right;margin-left:6px;order:1}.rtl-direction .longFormBottomContainer #newChat{float:right;margin-left:6px}.rtl-direction .longFormBottomContainer #formSubmit{float:right;order:2}#submitWrapper{position:absolute;bottom:0;height:0;width:auto;right:16px;background:#000;border-radius:4px 4px 0 0;color:#fff;-webkit-transition:height .25s ease;-moz-transition:height .25s ease;-ms-transition:height .25s ease;-o-transition:height .25s ease;transition:height .25s ease;z-index:5}#submitWrapper.visible{height:30px}#submitWrapper p{line-height:30px;padding:0 10px;float:left}.rtl-direction #submitWrapper p{float:right}#submitWrapper .loader{transform:scale(0.3);margin-top:-17px;margin-left:-13px;margin-right:-13px}#submitWrapper .spin:after{background:#fff !important}#agentProfileContainer{width:100%;margin-left:10px;display:none}#agentProfileContainer.show{display:block;animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}#profileDetail{height:50px;position:static;width:100%;float:left}#profileDetailNoImage{height:45px;position:static;margin-left:0}#agentWrapper{height:0;display:none;float:left;width:100%;height:45px}.messageStatusContainer.pending .messageTime{display:none}#chatEnded{position:absolute;left:0;bottom:32px;height:87px;width:100%;background:#fff;display:none;z-index:10}#chatEnded .title{text-align:center;font-size:14px;margin:10px 0}#chatEnded .buttonContainer{width:100%;height:50px}#offlineButtonContainer,#prechatButtonContainer{top:auto}#newMessageDivider{margin-top:4px;font-size:.7rem;line-height:.6rem}#newMessageDividerLine{border-top:2px solid #e4c0b6;border-bottom:0;margin:0 0 -1px}#newMessageDividerLabel{background:#fcfcfc;margin:-0.3rem 0;float:right;padding:0 .5rem;color:#e4c0b6}.offlineMessageSuccess{color:#6db626}#newMessageContainer{position:relative;left:-50%;cursor:pointer;display:none}#newMessagesBar{position:absolute;bottom:33px;height:0;width:auto;left:50%;color:#fff;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;visibility:hidden;cursor:pointer;z-index:0}#newMessagesBar.theme-background-color{background-color:transparent !important}#notificationMessageText{font-weight:700}#newMessageArrowDown{width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #81bd1d;transform:translate(-50%);position:absolute;left:50%;bottom:-5px}#newMessagesNotificationLink{float:left;margin:6px 6px auto auto;font-weight:bold}.rtl-direction #newMessagesNotificationLink{float:right;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);transform:rotateY(180deg);margin:7px auto auto 7px}#newMessagesBar.visible{height:27px;bottom:90px;visibility:visible}#newMessagesBar.visible #newMessageContainer{display:block}#newMessagesBar p{line-height:27px;padding:0 10px;text-align:center;background-color:#81bd1d;border-radius:5px}.uploaded-image{max-width:100%;max-height:220px;display:block}.download-file{color:inherit;text-decoration:underline;display:block;margin-top:3px}.progress{height:14px;position:relative;background:#eee;box-shadow:0 1px 0 transparent,0 0 0 1px #e3e3e3 inset;width:200px;margin:5px 0;display:inline-block;vertical-align:middle}.progress-bar{display:block;height:100%;background-color:#71a06a;box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.upload-data{margin:7px 12px 0 20px;min-width:250px}.upload-data span{font-style:italic}#uploadFileIcon{font-size:18px;vertical-align:middle;width:20px;height:21px;margin-top:5px}.image-loader{display:block;position:relative;width:64px;height:64px;margin:0 auto}.upload-error{margin:5px}.upload-error span{font-size:16px;color:red;font-weight:bold;vertical-align:middle}.drag-over #textareaWrapper:before{text-align:center;margin:0;font-size:25px;height:auto;line-height:68px;color:#ccc;background:#fff;position:absolute;top:0;bottom:0;right:0;left:0;border:3px dashed #ccc;content:'';white-space:pre-line}#drop-text{text-align:center;font-size:25px;height:auto;color:#ccc;position:absolute;top:2px;bottom:2px;right:2px;left:2px;white-space:pre-line;display:none}.drag-over #drop-text{display:block}#drop-text span{display:block;vertical-align:middle;line-height:normal;top:50%;margin-top:-15px;position:relative}.drag-over .drop-text{display:block}.drag-over #chatTextarea{opacity:0}#upload-form{position:absolute;top:-100000px}#uploadFileOption label{display:block;cursor:pointer}.form-field-label.small{color:#b3b3b3;padding:1px 0 0 0;display:none;font-size:10px;position:absolute;top:0;left:4px;font-weight:bold}.rtl-direction .form-field-label.small{left:auto;right:4px}.form-field-label{color:#707070;font-size:13px;font-weight:bold}.selection-label{vertical-align:middle;cursor:pointer}.selection-container{position:relative}.selections-container.error{border:2px solid #e52f48;border-radius:3px;padding:11px 0 11px 11px;position:relative}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.messageContainer{position:relative;margin:10px 12px}#agentTypingContainer{position:relative;margin:24px 12px;display:none}.messageContainer{clear:both}.profileImageContainer{height:28px;width:28px;position:absolute}.ownerNameContainer{float:right}.multi-agent .agentChatContainer .ownerNameContainer{float:left;width:100%;position:absolute;bottom:-13px;left:0}.messageOwnerName{color:#757575;font-weight:400;text-decoration:none;font-size:11px !important;margin:0;padding:0;line-height:1;display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:40px;vertical-align:bottom}.rtl-direction .messageOwnerName{margin-left:0;margin-right:30px}.messageOwnerName.visitor{text-align:right;margin-right:0;margin-left:0;margin-bottom:3px}.messageOwnerName.agent{display:none}.multi-agent .messageOwnerName.agent{display:inline-block}.rtl-direction .messageOwnerName.visitor{text-align:left}#chatTableWrapper{display:table;height:100%;width:100%;table-layout:fixed}#chatRowWrapper{display:table-row;vertical-align:bottom}#chatCellWrapper{position:relative;display:table-cell;vertical-align:bottom;overflow:hidden}.single-agent .profileImageContainer{display:block;margin-top:8px}.rtl-direction .single-agent .profileImageContainer{margin-top:-3px}.single-agent .agentChatContainer .ownerNameContainer.trigger{display:block}.ownerNameContainer.trigger .messageOwnerName{margin-left:0;margin-right:0}.multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-left:30px;margin-right:0}.rtl-direction .multi-agent .agentChatContainer .message{margin-right:30px;margin-left:40px}.rtl-direction .multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-right:30px;margin-left:0}.single-agent .visitorChatContainer .messageBody,.single-agent .messageOwnerName.visitor{margin-right:0;margin-left:0}.agentChatContainer .messageBody,.agentChatContainer .ownerNameContainer{margin-left:0;margin-right:0;margin-top:0}.agentChatContainer .messageBody{padding-left:38px}.visitorChatContainer .pending .message,.rtl-direction .agentChatContainer .message{animation:slideFromRight .1s;-webkit-animation:slideFromRight .1s;-moz-animation:slideFromRight .1s;-o-animation:slideFromRight .1s;max-width:229px}.visitorChatContainer[style] .message{animation:none}.agentChatContainer .message,.visitorChatContainer .pending .message{animation:slideFromLeft .1s;-webkit-animation:slideFromLeft .1s;-moz-animation:slideFromLeft .1s;-o-animation:slideFromLeft .1s}.agentChatContainer .message.agentTypingIndicator{animation:none;padding-top:20px}@keyframes slideFromLeft{0%{margin-left:-50px;opacity:0}100%{margin-left:0;opacity:1}}@-webkit-keyframes slideFromLeft{0%{margin-left:-50px;opacity:0}100%{margin-left:0;opacity:1}}@keyframes slideFromRight{0%{margin-right:-100px;opacity:0}100%{margin-right:0;opacity:1}}@-webkit-keyframes slideFromRight{0%{margin-right:-100px;opacity:0}100%{margin-right:0;opacity:1}}#agentTypingContainer .agentChatContainer{margin-bottom:5px}.has-profile-image #headerBoxWrapper,.has-profile-image #headerBox,.has-profile-image #agentWrapper,.has-profile-image #headerBoxControlsContainer{height:60px}.has-profile-image #agentListLabel{margin-top:17px}.selection-container input{margin:0 3px 0 5px}.agentTypingIndicator{position:relative;text-align:center;margin-left:auto;margin-right:auto}.agentTypingIndicator .dot{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:3px;background:#303131;animation:typing 1.3s linear infinite}.agentTypingIndicator .dot:nth-child(2){animation-delay:-1.1s;-webkit-animation-delay:-1.1s;-moz-animation-delay:-1.1s;-ms-animation-delay:-1.1s;-o-animation-delay:-1.1s}.agentTypingIndicator .dot:nth-child(3){animation-delay:-0.9s;-webkit-animation-delay:-0.9s;-moz-animation-delay:-0.9s;-ms-animation-delay:-0.9s;-o-animation-delay:-0.9s}@keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-ms-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-webkit-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-moz-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}@-o-keyframes typing{0%,60%,100%{transform:initial}30%{transform:translateY(-10px)}}.message a{color:inherit}#formContainer .inputContainer.selection:before{content:\"\";position:absolute;right:14px;top:17px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #707070;z-index:0}.rtl-direction #formContainer .inputContainer.selection:before{right:auto;left:14px}#formContainer .inputContainer{background-color:#fff;overflow:hidden;position:relative;height:33px}#formContainer .inputContainer select{position:absolute;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:90%;background:transparent;font-size:13px;font-weight:600;line-height:1;-webkit-appearance:none;-moz-appearance:none;text-indent:.01px;text-overflow:'';-ms-appearance:none}#formContainer .inputContainer select::-ms-expand{display:none}#endChatOption{display:none}#actionButtonsContainer{position:absolute;right:14px;top:11px}.rtl-direction #actionButtonsContainer{left:0;right:auto}#rateContainer{padding:6px 8px;border-radius:5px;box-shadow:0 3px 15px #cbcbcb;display:none;position:absolute;width:50px;background:#fff;left:-100%;top:-8px;animation:fadeIn .5s;-webkit-animation:fadeIn .5s;-moz-animation:fadeIn .5s;-o-animation:fadeIn .5s}.rtl-direction #rateContainer{left:5px}.rtl-direction #rateNegative{float:right;margin-left:11px !important}.rtl-direction #ratePositive{float:right;margin-left:0}#actionButtonsContainer a{font-size:19px;color:#bdbdbd;text-decoration:none;float:left;margin-left:11px}#actionButtonsContainer a:hover{color:#464646}#rateNegative{margin-left:0 !important;color:#f99 !important}#ratePositive{color:#b4deab !important}#uploadFileOption{margin-left:6px}#viewEmoji{margin-left:12px}.drag-over #viewEmoji{display:none}#emoji-selection-container{position:absolute;bottom:48px;height:185px;background:#f0f0f0;display:none;z-index:2;width:100%;background-color:#f3f3f3}.header-title{text-align:center;margin:5px 0;font-weight:bold;font-size:14px}#tooLongMsgNotification{position:absolute;bottom:20px;z-index:100000;width:100%;text-align:center;display:none;color:red;font-size:12px;background-color:white}#tooLongMsgNotification.visible{display:block}.chatNotifInfoContainer,.callInfoContainer,.callErrorContainer{border:1px solid #ddd;border-radius:5px;padding:10px 8px 10px 8px;display:none;background:#fff}.chatNotifInfoContainer{display:block}.chatNotifIconContainer,.callIconContainer{display:table-cell;width:35px;vertical-align:middle}.chatNotifIconWrapper,.callIconWrapper{width:35px;height:35px;border-radius:50%;vertical-align:middle;display:inline-block}.callDetailsContainer{display:table-cell;vertical-align:middle;padding-left:5px}.rtl-direction .callDetailsContainer{padding-right:5px}.chatNotifDetailsContainer{display:inline-block;vertical-align:middle;margin-left:5px}.chatNotifTitle,.callTitle{font-size:15px;font-weight:bold;color:black}.callEndDetails{display:none;margin-top:5px;color:black}.callEndDetails,.callTitle{color:#3e3e3e}.callErrorContainer .callEndDetails{display:block}.callInfoWrapper{display:table}.callRetryContainer{display:inline-block;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.callLoader .loader{transform:scale(0.3);margin-left:-10px}.rtl-direction .callRetryContainer{right:auto;left:10px}.retry-load{float:none;background:#fafafa;color:#717171;border:1px solid #d3d3d3}#chatEnded{width:100%;height:auto}.longFormContainer{position:relative;display:block;background-color:white;width:100%;z-index:4;margin:0 auto;box-sizing:border-box;border-radius:3px;font-weight:400;font-size:15px;color:#464646;overflow:hidden;height:auto}.rtl-direction #formContainer>#emailTranscriptForm .form-header-text,.rtl-direction #changeNameForm .form-header-text,.rtl-direction #chatEndedForm .form-header-text,.rtl-direction #offlineForm .longFormContainer .form-header-text,.rtl-direction #preChatForm .longFormContainer .form-header-text{padding-right:5px}.rtl-direction #formContainer>#emailTranscriptForm .formMessageField,.rtl-direction #offlineForm .formMessageField,.rtl-direction #preChatForm .formMessageField{text-align:unset}#offlineFormContainer,#prechatFormContainer{height:calc(100% - 250px);display:none;position:relative}#chatEndedForm #emailTranscriptForm{position:relative;height:auto}#offlineForm #formInnerHeight,#preChatForm #formInnerHeight{max-width:100%}#form-container::-webkit-scrollbar,#form-container.longFormContainer::-webkit-scrollbar,#tawkToContent .contentContainer::-webkit-scrollbar{display:none}.form-header-icon{background-color:#53ce3c;display:inline-block;height:30px;width:30px;margin-right:10px;line-height:34px;border-radius:5px;box-sizing:border-box;color:white;font-size:22px;text-align:center}.rtl-direction .form-header-icon{margin-left:10px;margin-right:0}.form-header-text{display:inline-block;line-height:30px;height:30px;vertical-align:top;font-weight:600;font-size:15px}#endChatForm #endChatFormMessageContainer{display:block;font-weight:600;font-size:15px;height:auto;color:#464646;padding:0}#formContainer>#emailTranscriptForm::before,#changeNameForm::before,#chatEndedForm::before,#endChatForm::before{content:\"\";height:100%;width:2px;background-color:#4ac735;position:absolute;left:0;top:0;border:1px solid #53ce3c;border-top-left-radius:3px;border-bottom-left-radius:3px;z-index:9;display:none}#controlsWrapper{position:relative}#offlineForm .formMessageField,#preChatForm .formMessageField{padding:10px 15px;text-align:center;margin-bottom:14px;font-size:14px;-webkit-transition:height .16s ease-out;transition:height .16s ease-out}#formContainer .inputContainer{border:0;padding:0;border-radius:5px;margin:0 0 11px 0;height:42px}#formContainer .textareaFieldset>.inputContainer,#formContainer>#emailTranscriptForm input,#formContainer .inputContainer input,#formContainer .inputContainer select,#formContainer .inputContainer input{box-shadow:none;height:100%;border-style:solid;border-color:#d0d0d0;box-sizing:border-box;display:inline-block;padding-left:11px;width:100%;border-width:2px;color:#656565;font-weight:700;border-radius:5px;width:100%}.rtl-direction #offlineForm .textareaFieldset>.inputContainer,.rtl-direction #preChatForm .textareaFieldset>.inputContainer,.rtl-direction #formContainer>#emailTranscriptForm input,.rtl-direction #changeNameForm .inputContainer input,.rtl-direction #chatEndedForm .inputContainer select,.rtl-direction #chatEndedForm .inputContainer input,.rtl-direction #offlineForm .inputContainer select,.rtl-direction #offlineForm .inputContainer input,.rtl-direction #preChatForm .inputContainer select,.rtl-direction #preChatForm .inputContainer input{padding-left:5px;padding-right:11px}.rtl-direction #changeNameForm .formErrorIcon,.rtl-direction #emailTranscriptForm .formErrorIcon,.rtl-direction #offlineForm .formErrorIcon,.rtl-direction #preChatForm .formErrorIcon{left:15px;right:auto}.rtl-direction #offlineForm .selection-container .selection-input-css-placeholder,.rtl-direction #preChatForm .selection-container .selection-input-css-placeholder{left:auto;right:0}.rtl-direction #offlineForm .selection-label,.rtl-direction #preChatForm .selection-label{padding-right:27px}#offlineForm .textareaFieldset>.error.inputContainer,#preChatForm .textareaFieldset>.error.inputContainer,#chatEndedForm .inputContainer.error select,#offlineForm .inputContainer.error select,#preChatForm .inputContainer.error select,.error.inputContainer input{border-color:#e52f48 !important}.inputContainer.error textarea::placeholder{color:#e52f48 !important}#offlineForm .textareaFieldset>.inputContainer,#preChatForm .textareaFieldset>.inputContainer{height:70px;padding:11px 0 11px 11px}#offlineForm .textareaFieldset .inputContainer textarea,#preChatForm .textareaFieldset .inputContainer textarea{margin:0;padding:0;height:100%;padding-right:11px;box-sizing:border-box}#changeNameForm fieldset,#emailTranscriptForm fieldset,#offlineForm fieldset,#preChatForm fieldset{position:relative}#chatEndedForm .inputContainer select option:disabled,#offlineForm .inputContainer select option:disabled,#preChatForm .inputContainer select option:disabled{display:none}#chatEndedForm .inputContainer.error select,#offlineForm .inputContainer.error select,#preChatForm .inputContainer.error select{color:#ef5656}#chatEndedForm .inputContainer.error select option,#offlineForm .inputContainer.error select option,#preChatForm .inputContainer.error select option{color:#656565}.longFormBottomContainer{width:100%;float:none;box-sizing:border-box;min-height:42px;margin-bottom:15px;grid-template-columns:1fr 1fr;grid-gap:12px;display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr}.longFormBottomContainer .clear{grid-column:span 2;-ms-grid-column-span:2}.has-required .longFormBottomContainer{display:block}#formCancel,#formDecline{-ms-grid-row:1;-ms-grid-column:1}#formSubmit{-ms-grid-row:1;-ms-grid-column:2}.formButton{height:100%;border-radius:5px;background-color:#d6d6d6;min-height:42px}#formSubmit-pc,#formSubmit{float:right}#changeNameForm .formErrorContainer,#emailTranscriptForm .formErrorContainer,#offlineForm .formErrorContainer,#preChatForm .formErrorContainer{margin:7px 0;text-align:right;font-size:13px;font-weight:600}#formContainer>#emailTranscriptForm #emailTranscriptFormMessageContainer,#changeNameForm #changeNameFormMessageContainer,#chatEndedForm #emailTranscriptFormMessageContainer{background-color:white;padding:15px 0}#formContainer>#emailTranscriptForm #formSavingStatus,#changeNameForm #formSavingStatus,#endChatForm #formSavingStatus,#chatEndedForm #formSavingStatus{display:none}#chatEndedForm #submitWrapper{bottom:32px;right:5px;display:none}#chatEndedForm #form-header{padding-top:12px}#changeNameForm #nameFieldError,#emailTranscriptForm #transcriptEmailFieldError,#chatEndedForm #transcriptEmailFieldError{color:#ef5656;font-size:13px}#circle-progress-bar-border{height:34px;width:34px;display:inline-block;padding:7px;border-radius:3px;border-width:1px;border-style:solid;border-color:#f4f4f4 !important;background:#fff}#circle-progress-bar-container{height:100%;width:100%;display:inline-block}#circle-progress-bar{height:100%;width:100%;overflow:hidden;border-radius:50%;position:relative;background-color:#e3e3e3;display:inline-block}#circle-progress-bar .inner-content{background-color:white;height:calc(100% - 5px);width:calc(100% - 5px);border-radius:50%;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;z-index:9999}#circle-progress-bar .circle-progress-clip{height:100%;width:50%;position:absolute;top:0;z-index:11;left:0;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#e3e3e3}#circle-progress-bar .circle-progress-right,#circle-progress-bar .circle-progress-left{left:0;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#4f4f4f;transform-origin:right center;transform:rotate(0deg);height:100%;width:50%;z-index:10;position:absolute}#circle-progress-bar .circle-progress-right{display:none;transform:rotate(180deg)}#upload-info-container .file-name{display:block;margin:0 0 0 5px;font-weight:700;font-size:14px;font-style:normal}#upload-info-container .file-status{display:block;margin:0 0 0 5px;font-weight:400;font-size:13px;font-style:normal}#upload-info-container{display:inline-block;height:100%;vertical-align:top;text-align:left;width:calc(100% - 60px);margin-left:10px}#upload-info-container #upload-info{display:table;height:100%}#upload-info-container #upload-info .wrapper{display:table-cell;vertical-align:middle}#upload-info-container .upload-icon{display:none}#circle-progress-bar .inner-content .icon{font-style:normal;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:25px;color:#4f4f4f}.upload-data{margin:24px 15px 12px 16px;display:inline-block;text-align:right;height:72px;padding:11px;border-radius:3px;border-width:1px;border-style:solid;border-color:#f4f4f4 !important;float:right;min-width:auto;position:relative;box-sizing:border-box}.visitorChatContainer .messageStatusContainer.messageTimeContainer,.agentChatContainer .messageStatusContainer.messageTimeContainer{position:absolute;top:auto;bottom:-13px;left:0;right:auto;width:auto;margin:0;padding:0}.agentChatContainer .messageStatusContainer.messageTimeContainer{right:0;left:auto}#offlineForm .selection-container,#preChatForm .selection-container{position:relative;margin:11px 0;width:calc(100% - 30px);display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#offlineForm .selection-container .selection-input-css-placeholder,#preChatForm .selection-container .selection-input-css-placeholder{width:14px;height:14px;position:absolute;border-radius:4px;border-color:#d4d4d4;border-width:2px;border-style:solid}#offlineForm .selection-container.radio .selection-input-css-placeholder,#preChatForm .selection-container.radio .selection-input-css-placeholder{border-radius:50%}#offlineForm .selection-container.checkbox .selection-input-css-placeholder::after,#preChatForm .selection-container.checkbox .selection-input-css-placeholder::after{content:'';width:8px;height:3px;position:absolute;top:4px;left:2px;border:2px solid #53ce3c;border-top:0;border-right:0;background:transparent;opacity:0;transform:rotate(-55deg)}#offlineForm .selection-container.radio .selection-input-css-placeholder::after,#preChatForm .selection-container.radio .selection-input-css-placeholder::after{content:'';display:inline-block;width:calc(100% - 6px);height:calc(100% - 6px);top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;border-radius:50%;background:#53ce3c;opacity:0}#offlineForm .selection-container.radio input[type=radio],#offlineForm .selection-container.checkbox input[type=checkbox],#preChatForm .selection-container.radio input[type=radio],#preChatForm .selection-container.checkbox input[type=checkbox]{display:none}.rtl-direction #offlineForm .selection-container.radio input[type=radio],.rtl-direction #offlineForm .selection-container.checkbox input[type=checkbox],.rtl-direction #preChatForm .selection-container.radio input[type=radio],.rtl-direction #preChatForm .selection-container.checkbox input[type=checkbox]{margin-right:-20px}#offlineForm .selection-container.radio input[type=radio]:checked+.selection-input-css-placeholder::after,#offlineForm .selection-container.checkbox input[type=checkbox]:checked+.selection-input-css-placeholder::after,#preChatForm .selection-container.radio input[type=radio]:checked+.selection-input-css-placeholder::after,#preChatForm .selection-container.checkbox input[type=checkbox]:checked+.selection-input-css-placeholder::after{opacity:1}#offlineForm .selection-label,#preChatForm .selection-label{color:#707070;font-size:13px;font-weight:bold;padding-left:27px;position:relative}.uploaded-file-name{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uploaded-file-info{display:grid;grid-template-columns:auto auto 1fr;grid-gap:5px;font-size:12px;align-content:normal;justify-content:center;vertical-align:middle;display:-ms-grid;-ms-grid-columns:auto auto 1fr}.uploaded-file-info .uploaded-file-name{-ms-grid-row:1;-ms-grid-column:1}.uploaded-file-info .uploaded-file-size{-ms-grid-row:1;-ms-grid-column:2}.uploaded-file-info .download-file{-ms-grid-row:1;-ms-grid-column:3}.download-file{text-transform:capitalize}.uploaded-file-size{margin-top:4px;font-size:11px}.file-upload-not-img-vid-audio .uploaded-file-name{margin-top:0}.file-upload-not-img-vid-audio .file-size{text-transform:lowercase;margin-top:3px}.file-upload-not-img-vid-audio .separator{margin-top:3px}#incoming-call{background-color:#f8f8f8;padding:13px 13px 12px 13px;box-sizing:border-box;border:#e6e6e6 1px solid;position:absolute;top:0;width:100%;z-index:5}#incoming-call-container{text-align:center}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:5px;color:#3e3e3e}.rtl-direction #incoming-call-container .header-label{margin-right:5px}#incoming-call .profileImageContainer{position:relative;display:inline-block}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;display:block;border-radius:50%}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer;padding:0;margin:0}.rtl-direction #incoming-call-buttons{direction:ltr}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}.rtl-direction #decline-call{float:left}.rtl-direction #accept-call{float:right}.visitorChatContainer .ownerNameContainer{display:none}#file-upload-drop-container{display:none;background-color:#fff;box-sizing:border-box;position:absolute;bottom:0;height:80px;width:100%;z-index:10}#fileUploadWrapper{border:#e4e4e4 solid 1px;border-radius:5px;background-color:#f1f1f1;height:calc(100% - 15px);width:90%;margin:10px auto 0;position:relative}#file-upload-drop-icon-label-container{transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;width:100%}#file-upload-drop-icon{font-size:30px;display:block;font-weight:600;text-align:center}#file-upload-drop-label{font-size:15px;display:block;font-weight:600;text-align:center;color:#464646;margin-top:5px}.drag-over #actionsContainer{display:none}.drag-over #file-upload-drop-container{display:block}#tooLongMsgNotification{height:42px;position:absolute;width:calc(100% - 30px);left:15px;margin-top:10px;border-radius:5px;line-height:42px;text-align:center}#notifMessageText{margin-left:5px}.chatNotifIconContainer,.callIconContainer{display:inline-block;height:30px;width:30px;border-radius:5px;color:white;position:relative;background-color:#919191}.rtcIcon,.callIcon{display:inline-block;position:relative;top:8px}.chatNotifInfoWrapper,.callInfoWrapper{height:30px}.callInfo{vertical-align:top;line-height:32px;margin-left:10px;font-weight:600;font-size:15px}.chatNotifIconWrapper,.callIconWrapper{display:inline-block;font-size:17px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}.callInfoElapsedTime{position:absolute;bottom:8px;right:13px;font-size:13px;color:#bdbdbd}.embedded #consentForm #formCancel{display:none !important}.popup #consentForm #formCancel{display:block !important}.popup #consentForm #formSubmit{width:50% !important}#consentForm .innerTittle,#tawkToContent .innerTittle{text-align:center}#consentForm .formCell,#tawkToContent .formCell{vertical-align:middle}.rtl-direction .uploadFailedNotifLabel,.rtl-direction #maxFileNotifLabel,.rtl-direction #maxSizeNotifLabel{margin-right:10px}#contentContainer{position:absolute;top:59px;bottom:0;width:100%;height:auto;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;display:-ms-flexbox;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}#chatPanel,#formContainer{-ms-flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;flex-shrink:1;position:relative;-ms-flex:1}#formContainer{display:none;background:#fff}.chatEndVisible #chatPanel{display:block !important}.chatEndVisible #formContainer{position:fixed;bottom:5px;z-index:99999;background:#fff;left:1px;right:1px;width:auto}.chatEndVisible #formFieldsContainer,.chatEndVisible .form{position:static}#greetingsMainContainer{transition:max-height .25s ease-out,opacity .5s ease;-webkit-transition:max-height .25s ease-out,opacity .5s ease;-moz-transition:max-height .25s ease-out,opacity .5s ease;-ms-transition:max-height .25s ease-out,opacity .5s ease;height:auto;max-height:100%}#greetingsMainContainer.minimize{max-height:0;opacity:0}#greetingsContent{padding:5px 15px 20px;text-align:center;font-size:14px;font-weight:400;display:none}#formFieldsContainer{margin:14px 0 0;position:absolute;width:auto;left:7px;right:0;bottom:0;top:0;height:auto;overflow:scroll;overflow-x:auto;animation:slideFadeIn .25s ease;-webkit-animation:slideFadeIn .25s ease;scrollbar-width:thin;scrollbar-color:#fff #fff;-ms-overflow-style:-ms-autohiding-scrollbar;box-sizing:border-box}#formContainer.has-required #formCancel,#formContainer.has-required #formDecline{display:none}#formContainer.has-required #formSubmit{float:none !important;width:100% !important}.formTable{display:table;width:100%;table-layout:fixed;height:100%}.formRow{display:table-row}.formCell{display:table-cell;vertical-align:bottom}.formFrame{border:1px solid #e4e4e4;border-radius:3px;padding:16px 15px 0}.field-error{font-size:17px;color:#ef5656}.rtl-direction .message.agentTypingIndicator::after,.rtl-direction .message.agentTypingIndicator::before,.rtl-direction .upload-data::after,.rtl-direction .upload-data::before,.rtl-direction .messageContainer .messageWrapper .message::after,.rtl-direction .messageContainer .messageWrapper .message::before{transform:rotate(180deg)}.rtl-direction .upload-data::after,.rtl-direction .upload-data::before,.rtl-direction .messageContainer.visitorChatContainer .messageWrapper .message::after,.rtl-direction .messageContainer.visitorChatContainer .messageWrapper .message::before{left:auto;right:100%}.rtl-direction .message.agentTypingIndicator::after,.rtl-direction .message.agentTypingIndicator::before,.rtl-direction .messageContainer.agentChatContainer .messageWrapper .message::after,.rtl-direction .messageContainer.agentChatContainer .messageWrapper .message::before{right:auto;left:100%}.border-corner{border-radius:5px 5px 0 0}.roundWidget #innerWrapper.border-corner{border-radius:5px}.embedded .border-corner{border-radius:0 !important}.embedded #innerWrapper{border:0}.time-agent-display{display:grid;grid-template-columns:1fr auto;grid-gap:5px;font-size:12px;display:-ms-grid;-ms-grid-columns:1fr}.time-agent-display .agent-div{-ms-grid-row:1;-ms-grid-column:1;float:left}.time-agent-display .time-div{-ms-grid-row:1;-ms-grid-column:2;font-size:11px;float:left}@keyframes slideFadeIn{0%{opacity:0;transform:translate(0,30px)}to{opacity:1;transform:translate(0,0px)}}#textareaSubmitContainer{width:45px;height:40px;position:absolute;right:0;display:none;top:0}.rtl-direction #textareaSubmitContainer{left:0;right:auto}.icon-mobile-submit{text-align:center;position:relative;top:0;padding-top:11px;font-size:21px;height:40px}#actionsContainer.mobile-typing #textareaSubmitContainer{display:block}#actionsContainer.mobile-typing #actionButtonsContainer{right:45px}.rtl-direction #actionsContainer.mobile-typing #actionButtonsContainer{left:45px}#actionsContainer.mobile-typing #rateMainWrapper,#actionsContainer.mobile-typing #uploadFileOption{display:none}.rtl-direction #rateMainWrapper,.rtl-direction #uploadFileOption,.rtl-direction #viewEmoji{float:right}.agent-profile-detailed{float:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:5px}.agent-profile-detailed strong{font-weight:bold}.multiple-agent .agent-profile-detailed{display:none}#headerAccountStateContainer.multiple-agent #agentProfileContainer.show{display:block}.rtl-direction .agent-profile-detailed{margin-left:auto;margin-right:20px}.rtl-direction #shortMessage{margin-left:auto;margin-right:10px}.agentDetailedInfo{position:relative;top:50%;-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}.agentDetailedInfo,.agentDetailedInfo p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mobile .headerBoxLink .headerBoxIcon{width:21px}.mobile .headerBoxLink .headerBoxIcon,.mobile #actionButtonsContainer a{font-size:21px}.mobile #rateContainer{width:53px}.mobile #changeNameForm.form,.mobile #emailTranscriptForm.form,.mobile #endChatForm.form,.mobile #formInnerHeight{max-width:350px}.mobile button{font-size:15px}.mobile .longFormBottomContainer{height:auto}.mobile .longFormContainer{padding-bottom:15px}.mobile .formMessageField.innerTittle,.mobile .formMessageField,.mobile .form-header-text{font-size:15px}.mobile #endChatForm .longFormContainer{padding-bottom:0}.mobile .form-header-icon{font-size:24px;width:31px;height:31px}#hidableActionsWrapper{float:left}", y.MinifiedStyle = "body{font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}.rtl-direction{direction:rtl}#tawkchat-minified-box{height:100%;width:100%;overflow:hidden}#tawkchat-minified-wrapper{z-index:999997;cursor:pointer;height:100%;width:100%}#tawkchat-minified-box.round{width:60px;height:60px}#tawkchat-status-container{height:100%;width:auto;display:inline-block;position:absolute}#tawkchat-status-agent-container{height:100%;width:100%;display:none;margin-right:5px;position:relative}#tawkchat-status-icon-container{margin-right:5px}#tawkchat-status-icon-container,#tawkchat-status-text-container{display:inline-block;vertical-align:top}.round #tawkchat-status-text-container{width:60px;height:60px;display:block;border-radius:50%}.round #tawkchat-status-agent-container{height:60px;width:60px;display:none;margin:0;position:relative}.round.open #tawkchat-status-agent-container{display:none !important}.center #tawkchat-minified-wrapper{position:absolute}#tawkchat-status-agent-container #agent-profile-image{background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:32px 32px;height:32px;width:32px;display:inline-block;position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);border-radius:50%}.round #tawkchat-status-agent-container #agent-profile-image{height:60px;width:60px;background-size:60px 60px;position:static;transform:translate(0)}#tawkchat-minified-border{margin:0;border:0 none;padding:0;background-color:#000;filter:alpha(opacity=40);opacity:.4;position:absolute;z-index:999998;border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;width:100%;height:100%;right:0;bottom:0}#tawkchat-minified-container{margin:0;border:0 none;padding:0;cursor:pointer;z-index:999999;position:absolute;top:0;bottom:0;width:auto;height:auto;left:0;right:0;border-bottom:0}#tawkchat-status-middle{border:0 none;margin:0 auto;font-size:17px;vertical-align:middle;position:absolute;top:50%;left:15px;right:15px;transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%)}#tawkchat-status-message{border:0 none;margin:0 26px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px}.rtl-direction #tawkchat-status-message{margin:0 0 0 26px;text-align:right}#tawkchat-chat-bubble{border:0 none;padding:0;margin:0;width:190px;height:65px;position:absolute;top:0;display:none;right:32px}.left #tawkchat-chat-bubble{right:2px}#tawkchat-chat-bubble-text-container{border:0 none;padding:0;margin:0 0 0 -58px;width:111px;height:65px;position:absolute;z-index:10;font-style:italic;font-size:15px;top:5px;left:50%;right:auto;text-align:center;overflow:hidden;text-overflow:ellipsis;display:table}.rtl-direction #tawkchat-chat-bubble-text-container{right:50%;left:auto;margin:0 -58px 0 0}#tawkchat-chat-bubble-text{margin:0;display:table-cell;vertical-align:middle}#tawkchat-chat-bubble-graphics-container{border:0 none;padding:0;margin:0;width:146px;height:85px}#tawkchat-chat-bubble-canvas{width:146px;height:85px;border:0 none;padding:0;margin:0}#tawkchat-minified-agent-container{float:left;width:100%;display:none}#tawkchat-minified-agent-information-wrapper{border:0 none;margin:0 88px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px}.hasImage #tawkchat-minified-agent-information-wrapper{margin-left:60px}#tawkchat-minified-agent-name{border:0 none;padding:0;margin:0;font-weight:bold}.agentNameCentered{margin-top:17px}.agentContainerNoImage{margin-right:26px;margin-left:0}.rtl-direction .agentContainerNoImage{margin-left:19px;margin-right:0}.agentContainer{margin:6px 20px 5px 45px}.rtl-direction .agentContainer{margin-right:45px;margin-left:20px}#tawkchat-minified-agent-position{border:0 none;padding:0;margin:0;font-style:italic}#tawkchat-chat-indicator{text-align:center;border-radius:50%;width:100%;height:100%;border:0 none;margin:0;position:absolute;top:0;right:auto;z-index:1000000;display:none;background:#e52f48}#tawkchat-chat-indicator-text{border:0 none;padding:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:13px;text-align:center;color:white;z-index:1000001;display:block;line-height:21px;width:100%;height:100%}#maximizeChat,#popoutChat{width:16px;height:16px;margin:0;z-index:100001}#maximizeChat,#minimizeChatMinifiedBtn{display:inline-block;font-size:32px;height:100%;width:auto;text-align:center;cursor:pointer}#short-message{display:inline-block;width:auto;cursor:pointer;font-size:15px}#profileDetail{position:static;width:100%;float:left}.agentInformationContainer p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.position-label{font-size:12px}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.image-bubble-close{width:15px;height:15px;float:right;margin:0 2.5px;cursor:pointer;display:block;visibility:hidden}.image-bubble-close:before,.image-bubble-close:after{position:absolute;right:5px;content:' ';height:15px;width:2px;background-color:#333}.image-bubble-close:before{transform:rotate(45deg)}.image-bubble-close:after{transform:rotate(-45deg)}#bubble-image{cursor:pointer}#bubble-image.gallery-bubble{position:absolute;top:11px;bottom:0;left:0;right:0}.image-canvas-close{border:0 none;padding:0;margin:0;width:10px;height:13px;position:absolute;right:6px;top:3px;font-size:12px;cursor:pointer;z-index:20}.image-loader{display:block;position:relative;width:64px;height:64px;margin:0 auto}.uploaded-image{width:100%;height:auto;display:block;max-width:220px;margin:0 auto}.uploaded-file-name{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uploaded-file-info{display:grid;grid-template-columns:auto auto 1fr;grid-gap:5px;font-size:12px;align-content:normal;justify-content:center;vertical-align:middle;display:-ms-grid;-ms-grid-columns:auto auto 1fr}.uploaded-file-info .uploaded-file-name{-ms-grid-row:1;-ms-grid-column:1}.uploaded-file-info .uploaded-file-size{-ms-grid-row:1;-ms-grid-column:2}.uploaded-file-info .download-file{-ms-grid-row:1;-ms-grid-column:3}.download-file{text-transform:capitalize}.uploaded-file-size{margin-top:4px;font-size:11px}.file-upload-not-img-vid-audio .uploaded-file-name{margin-top:0}.file-upload-not-img-vid-audio .file-size{text-transform:lowercase;margin-top:3px}.file-upload-not-img-vid-audio .separator{margin-top:3px}.download-file{color:inherit;text-decoration:underline;display:block;margin-top:3px}.imageMessageBody{padding-right:13px !important}.rtl-direction .image-canvas-close{left:6px !important;right:auto !important}.no-border #tawkchat-minified-container{border:none !important;top:0 !important;left:0 !important;right:0 !important}.top #tawkchat-chat-bubble-text-container{margin-top:10px !important}.top #tawkchat-chat-bubble-close{bottom:0 !important;right:0 !important;position:absolute !important}.default.top #tawkchat-chat-bubble-close{bottom:3px !important;right:6px !important;top:auto !important}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:-38px;display:block;background-color:#fff;background-position:0 0}.center-right #tawkchat-chat-bubble-close{float:left}.center.right .profileImageContainer .agentProfileImage,.top.right .profileImageContainer .agentProfileImage,.bottom.right .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.right .profileImageContainer .agentProfileImage,.rtl-direction.top.right .profileImageContainer .agentProfileImage,.rtl-direction.bottom.right .profileImageContainer .agentProfileImage{left:auto;right:-38px}.center.left .profileImageContainer .agentProfileImage,.top.left .profileImageContainer .agentProfileImage,.bottom.left .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.left .profileImageContainer .agentProfileImage,.rtl-direction.top.left .profileImageContainer .agentProfileImage,.rtl-direction.bottom.left .profileImageContainer .agentProfileImage{left:auto;right:-38px}#incoming-call .profileImageContainer{position:relative}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:28px 28px;position:absolute;left:0;display:block;border-radius:50%;background-position:0 0}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:33px;color:#3e3e3e}#tawkchat-message-preview-container{height:100%;box-sizing:border-box}.bottom#tawkchat-message-preview-container{position:absolute;bottom:0;top:auto;width:100%;height:auto}.top#tawkchat-message-preview-container{top:0;bottom:auto;width:100%;height:auto;position:absolute}.center#tawkchat-message-preview-container{top:0;bottom:auto;position:absolute;width:100%;height:auto}#tawkchat-message-preview-messages-container{max-height:calc(100vh - 110px);margin-bottom:10px;overflow:auto}#tawkchat-message-preview-messages-container *{cursor:pointer}#tawkchat-message-preview-messages-container::-webkit-scrollbar{display:none}#tawkchat-message-preview-messages-container .message-preview-item{position:relative;opacity:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;margin-bottom:10px}#tawkchat-message-preview-messages-container .message-preview-item.animate-fade-object{opacity:1}#tawkchat-message-preview-messages-container .messageBody{position:relative;height:auto;padding:15px 25px 15px 13px;box-sizing:border-box;border-width:1px;border-style:solid;border-radius:5px;border-color:#e9e9e9}#tawkchat-message-preview-messages-container .message-preview-item:last-child{margin-bottom:0}#tawkchat-message-preview-messages-container .messageBody:after,#tawkchat-message-preview-messages-container .messageBody:before{right:100%;top:15px;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}#tawkchat-message-preview-messages-container .messageBody:after{border-color:rgba(255,255,255,0);border-right-color:#fff;border-width:6px;margin-top:-6px}#tawkchat-message-preview-messages-container .messageBody:before{border-color:rgba(170,170,170,0);border-right-color:#ddd;border-width:7px;margin-top:-7px}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:after,.rtl-direction #tawkchat-message-preview-messages-container .messageBody:before{left:100%;right:unset}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:after{border-right-color:transparent;border-left-color:#fff}.rtl-direction #tawkchat-message-preview-messages-container .messageBody:before{border-right-color:transparent;border-left-color:#ddd}#tawkchat-message-preview-messages-container .message{color:#464646;font-weight:400;font-size:14px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}#tawkchat-message-preview-messages-container .messageTimeContainer,#tawkchat-message-preview-messages-container .messageNameContainer{display:inline-block;font-size:13px;color:#bdbdbd}#tawkchat-message-preview-messages-container .messageInformation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-top:5px}#tawkchat-message-preview-messages-container .messageNameContainer{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}#tawkchat-message-preview-messages-container .message-preview-close-button{top:8px;right:8px;z-index:5;position:absolute;color:#bdbdbd;font-size:14px;cursor:pointer;display:none}#tawkchat-message-preview-messages-container .hidden-profile .profileImageContainer,#tawkchat-message-preview-messages-container .hidden-profile .messageBody::after,#tawkchat-message-preview-messages-container .hidden-profile .messageBody::before{display:none}#tawkchat-message-preview-quick-reply-container{position:relative;float:right;width:340px;height:auto;overflow:hidden !important}.center.right #tawkchat-message-preview-messages-container,.center.right #tawkchat-message-preview-quick-reply-container,.bottom.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-quick-reply-container,.bottom.right #tawkchat-message-preview-quick-reply-container{padding-left:38px}.rtl-direction.center.right #tawkchat-message-preview-messages-container,.rtl-direction.center.right #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.right #tawkchat-message-preview-messages-container,.rtl-direction.top.right #tawkchat-message-preview-messages-container,.rtl-direction.top.right #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.right #tawkchat-message-preview-quick-reply-container{padding-left:0;padding-right:38px}.center.left #tawkchat-message-preview-messages-container,.center.left #tawkchat-message-preview-quick-reply-container,.bottom.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-quick-reply-container,.bottom.left #tawkchat-message-preview-quick-reply-container{padding-left:38px;padding-right:0}.rtl-direction.center.left #tawkchat-message-preview-messages-container,.rtl-direction.center.left #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.left #tawkchat-message-preview-messages-container,.rtl-direction.top.left #tawkchat-message-preview-messages-container,.rtl-direction.top.left #tawkchat-message-preview-quick-reply-container,.rtl-direction.bottom.left #tawkchat-message-preview-quick-reply-container{padding-left:0;padding-right:38px}#actionsContainer{z-index:99998;background-color:#fff;width:100%;height:50px;border-radius:5px}.drag-over#actionsContainer{height:155px !important;padding:8px 8px 35px 8px;box-sizing:border-box}#file-upload-drop-container{display:none;background-color:#f1f1f1;height:100%;width:100%;border:#e4e4e4 solid 1px;border-radius:5px;box-sizing:border-box;position:relative}#file-upload-drop-icon-label-container{transform:translate(-50%,-50%);position:absolute;top:50%;left:50%}#file-upload-drop-label{font-size:15px;display:block;font-weight:600;text-align:center;color:#464646;margin-top:5px}#file-upload-drop-icon{font-size:30px;display:block;font-weight:600;text-align:center}#textareaWrapper{display:block;background-color:transparent;position:relative;height:100%;box-shadow:inset 1px 1px 0 #e9e9e9,inset -1px 0 0 #e9e9e9,inset 0 -1px 0 #e9e9e9;border-radius:5px;max-height:180px}.drag-over #textareaWrapper{display:none}.drag-over #file-upload-drop-container{display:block}#textareaContainer{height:100%;padding:15px 14px 15px 14px;box-sizing:border-box;position:relative}#textareaContainer.with-emoji{padding-right:44px;padding-left:14px}.rtl-direction #textareaContainer.with-emoji{padding-right:14px;padding-left:44px}#chatTextarea{padding:0;margin:0;height:100%;width:100%;overflow:hidden;resize:none;border:0;vertical-align:top;font-size:14px !important;background-color:transparent;color:#000;font-family:inherit}#chatTextarea:active,#chatTextarea:focus{outline:0}#chatTextarea::placeholder{color:#bdbdbd !important}#actionButtonsContainer{position:absolute;right:14px;top:15px}.rtl-direction #actionButtonsContainer{right:auto;left:0}.rtl-direction #rateMainWrapper,.rtl-direction #uploadFileOption,.rtl-direction #viewEmoji{float:right}#rateContainer{padding:6px 8px;border-radius:5px;box-shadow:0 3px 15px #cbcbcb;display:none;position:absolute;width:51px;background:#fff;left:-100%;top:-6px}.rtl-direction #rateContainer{right:-40px}#rateMainWrapper{float:left;position:relative}#rateNegative{margin-left:0 !important;color:#f99 !important}#ratePositive{color:#b4deab !important}#rateNegative:hover,#ratePositive:hover{transform:scale(1.2,1.2)}#actionButtonsContainer a{font-size:19px;color:#bdbdbd;text-decoration:none;float:left;margin-left:13px}#actionButtonsContainer a:hover{color:#464646}#uploadFileOption label{display:block;cursor:pointer}#upload-form{position:absolute;top:-100000px}#emoji-selection-container{height:200px;background:#fff;display:none;z-index:10001;width:340px;background-color:#f3f3f3;position:relative}#tawktoLink{color:#000;font-size:11px;font-weight:400;text-decoration:none}#tawktoLink b{font-weight:700}#tawktoLink .thin{font-size:11px;font-weight:100}#bottomContainer{text-align:center;width:calc(100% - 38px);position:absolute;bottom:0;height:20px;background:transparent;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#incoming-call{background-color:#fff;border-radius:5px;padding:13px 13px 12px 13px;box-sizing:border-box;margin-bottom:10px;box-shadow:inset 0 0 1px #aaa}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}.mp-callIconContainer{display:inline-block;height:30px;width:30px;border-radius:5px;color:white;position:relative}#mp-callIcon{display:inline-block;position:relative}.mp-callInfoWrapper{height:30px}#mp-callInfo{vertical-align:top;line-height:32px;margin-left:10px;font-weight:600;font-size:15px;color:#3e3e3e}#mp-callIconWrapper{display:inline-block;font-size:17px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.mp-callInfoElapsedTime{position:absolute;bottom:8px;right:13px;font-size:13px;color:#bdbdbd}.mp-callInfoContainer.messageBody{height:80px !important}#tawkchat-message-preview-close{color:#bdbdbd;font-size:19px;margin:2.5px;cursor:pointer}.icon-close{font-weight:900}.left #tawkchat-message-preview-close{text-align:right}.right #tawkchat-message-preview-close{text-align:right}.top.left #tawkchat-message-preview-close{right:38px;left:auto}.top.right #tawkchat-message-preview-close{left:38px;right:auto}.rtl-direction.right #tawkchat-message-preview-close{text-align:left}.rtl-direction.left #tawkchat-message-preview-close{text-align:left}#tooLongMsgNotification{height:42px;position:absolute;width:calc(100% - 30px);left:15px;margin-top:10px;border-radius:5px;line-height:42px;text-align:center}#notifMessageText{margin-left:5px}.appear{animation:icon-appear .25s ease;display:block !important}.hide{display:none !important}#min-agent-profile-details{position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block;left:40px;max-width:calc(100% - 37px)}.rtl-direction #min-agent-profile-details{left:auto;right:40px}#min-agent-profile-details .name{font-size:90%;font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}#min-agent-profile-details .position{font-size:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.rtl-direction #mp-callInfo{padding-right:7px}.rtl-direction #tawkchat-message-preview-messages-container .messageNameContainer{left:initial;right:13px}.rtl-direction #tawkchat-message-preview-messages-container .messageTimeContainer,.rtl-direction .mp-callInfoElapsedTime{right:initial;left:13px}.rtl-direction #accept-call{float:right}.rtl-direction #decline-call{float:left}.rtl-direction .profileImageContainer .incomingCallAgentProfileImage{right:0}.rtl-direction #incoming-call-container .header-label{margin-right:33px;margin-left:0}@keyframes icon-appear{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}#hidableActionsWrapper{float:left}", y.MinifiedMobileStyle = "body{position:relative;margin:0;font-size:16px;z-index:1000001;font-family:Helvetica,Arial,sans-serif}body.font-lato{font-family:'Lato','Open Sans',sans-serif !important}*{font-family:inherit}#tawkchat-minified-box{border:0 none;padding:0;margin:0;position:relative;width:100%;height:100%;z-index:999995;text-align:left;font-size:16px}.rectangle #tawkchat-minified-wrapper{width:107px;height:42px;bottom:0}.round #tawkchat-minified-wrapper{bottom:6px;width:60px;height:60px;border-radius:50%;box-shadow:rgba(0,0,0,0.16) 0 2px 10px 0 !important}#tawkchat-minified-wrapper{border:0 none;margin:0;z-index:999997;position:absolute;cursor:pointer}.bottom.rectangle #tawkchat-minified-wrapper{bottom:15px}.round #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:50%;border:0 none}.rectangle #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:3px;border:0 none;text-align:center}#incoming-call{background-color:#fff;border-radius:5px;padding:13px 13px 12px 13px;box-sizing:border-box;margin-bottom:10px;box-shadow:inset 0 0 1px #aaa}#incoming-call-buttons{margin-top:16px}#incoming-call-buttons button{width:calc(50% - 5px);border-radius:5px;border:0;display:inline-block;color:#fff;height:42px;cursor:pointer}#incoming-call-buttons button .btn-icon{font-size:17px;color:white;display:inline-block;line-height:41px;vertical-align:top}#incoming-call-buttons button .btn-label{display:inline-block;margin-left:10px;line-height:41px;font-weight:600}#decline-call .btn-icon{transform:rotate(135deg)}#decline-call{background-color:#e52f48;float:right}#accept-call{background-color:#48c82e;float:left}#incoming-call .profileImageContainer{position:relative}.profileImageContainer .incomingCallAgentProfileImage{width:28px;height:28px;background-repeat:no-repeat;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:cover;position:absolute;left:0;display:block}#incoming-call-container .header-label{display:inline-block;line-height:28px;vertical-align:top;font-weight:600;font-size:15px;margin-left:33px}#tawkchat-status-message{border:0 none;padding:0;text-decoration:none;height:30px;text-align:center;position:absolute;left:21px;right:21px;width:auto}.rtl-direction{direction:rtl}.rtl-direction #mp-callInfo{padding-right:7px}.rtl-direction #tawkchat-message-preview-messages-container .messageNameContainer{left:initial;right:13px}.rtl-direction #tawkchat-message-preview-messages-container .messageTimeContainer,.rtl-direction .mp-callInfoElapsedTime{right:initial;left:13px}.rtl-direction #accept-call{float:right}.rtl-direction #decline-call{float:left}.rtl-direction .profileImageContainer .incomingCallAgentProfileImage{right:0}.rtl-direction #incoming-call-container .header-label{margin-right:33px;margin-left:0}#tawkchat-chat-indicator{border:0 none;margin:0;padding:0;line-height:1em;position:absolute;z-index:1000000;display:none;left:0;width:21px;height:21px;background-color:#e52f48;border-radius:50%}.bottom #tawkchat-chat-indicator,.center #tawkchat-chat-indicator{top:auto}.center.rectangle #tawkchat-chat-indicator{bottom:27px;left:95px}.center.right.rectangle #tawkchat-chat-indicator{left:95px}.bottom.rectangle #tawkchat-chat-indicator{bottom:42px}.round #tawkchat-chat-indicator{bottom:45px}.top #tawkchat-chat-indicator{top:auto}.top.rectangle #tawkchat-chat-indicator{bottom:27px}.left #tawkchat-chat-indicator{left:42px;right:auto}.left.rectangle #tawkchat-chat-indicator{left:93px}.left.rectangle .rtl-direction #tawkchat-chat-indicator{left:inherit;right:93px}.right #tawkchat-chat-indicator{left:95px;right:auto}.right .rtl-direction #tawkchat-chat-indicator{left:auto;right:93px}.round.right #tawkchat-chat-indicator{left:50px}.round.left #tawkchat-chat-indicator{left:42px}.round.left .rtl-direction #tawkchat-chat-indicator,.round.left .rtl-direction #tawkchat-chat-indicator{left:auto}#tawkchat-chat-indicator-text{border:0 none;padding:0;margin:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:13px;font-family:Arial;text-align:center;color:white;height:100%;width:100%;z-index:1000001;display:block;line-height:21px}#status-message{color:inherit;text-decoration:none;font-weight:bold;font-size:16px;vertical-align:middle;display:block;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 5px}#bottomContainer{text-align:center;width:calc(100% - 38px);position:absolute;bottom:0;height:20px;background:transparent;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rectangle #tawkchat-status-icon{margin:8px;font-size:24px;line-height:1em;text-align:left}.rectangle .rtl-direction #tawkchat-status-icon{text-align:right}#tawkchat-status-icon{speak:none;font-style:normal;font-weight:bold;font-variant:normal;text-transform:none;line-height:60px;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:32px;text-align:center}#tawkchat-status-icon .text{display:inline-block;overflow:hidden;padding:0 0 0 7px;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap;word-wrap:break-word;word-break:break-all}.rectangle #tawkchat-status-icon:before{position:absolute}.rectangle #tawkchat-status-icon.offline:before{top:11px}.rectangle .rtl-direction #tawkchat-status-icon .text{padding:0 7px 0 0}#chat-icon svg{width:24px !important;height:24px !important;margin:0 !important}#tawkchat-status-agent-container{position:absolute;top:0;right:0;left:0;bottom:0;z-index:999999;display:none}#agent-profile-image{background-repeat:no-repeat;background-size:cover;background-position:center;border-radius:50%;width:60px;height:60px}#agent-profile-image.round{width:100%;height:100%;margin-top:0;margin-left:0}.rectangle #agent-profile-image{width:32px;height:32px;margin:5px}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3/images/default-profile.svg');background-size:cover;position:absolute;left:-38px;display:block}.center-right #tawkchat-chat-bubble-close{float:left}.center.right .profileImageContainer .agentProfileImage,.top.right .profileImageContainer .agentProfileImage,.bottom.right .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.right .profileImageContainer .agentProfileImage,.rtl-direction.top.right .profileImageContainer .agentProfileImage,.rtl-direction.bottom.right .profileImageContainer .agentProfileImage{left:auto;right:-38px}.center.left .profileImageContainer .agentProfileImage,.top.left .profileImageContainer .agentProfileImage,.bottom.left .profileImageContainer .agentProfileImage{left:-38px;right:auto}.rtl-direction.center.left .profileImageContainer .agentProfileImage,.rtl-direction.top.left .profileImageContainer .agentProfileImage,.rtl-direction.bottom.left .profileImageContainer .agentProfileImage{left:auto;right:-38px}#tawkchat-message-preview-container{height:100%;box-sizing:border-box}.bottom#tawkchat-message-preview-container{position:absolute;bottom:0;top:auto;width:100%;height:auto}.top#tawkchat-message-preview-container{top:0;bottom:auto}#tawkchat-message-preview-messages-container{overflow-y:scroll;max-height:calc(100vh - 110px);margin-bottom:10px}#tawkchat-message-preview-messages-container::-webkit-scrollbar{display:none}#tawkchat-message-preview-messages-container .message-preview-close-button{top:8px;right:8px;z-index:5;position:absolute;color:#bdbdbd;font-size:14px;cursor:pointer;display:none}#tawkchat-message-preview-messages-container .hidden-profile .profileImageContainer{display:none}.center.right #tawkchat-message-preview-messages-container,.bottom.right #tawkchat-message-preview-messages-container,.top.right #tawkchat-message-preview-messages-container{padding-left:38px}.center.left #tawkchat-message-preview-messages-container,.bottom.left #tawkchat-message-preview-messages-container,.top.left #tawkchat-message-preview-messages-container{padding-left:38px;padding-right:0}#tawkchat-message-preview-close{color:#bdbdbd;font-size:19px;margin:2.5px;cursor:pointer}.left #tawkchat-message-preview-close{text-align:right}.right #tawkchat-message-preview-close{text-align:right}.top.left #tawkchat-message-preview-close{right:38px;left:auto}.top.right #tawkchat-message-preview-close{left:38px;right:auto}.rtl-direction.right #tawkchat-message-preview-close{text-align:left}.rtl-direction.left #tawkchat-message-preview-close{text-align:left}", y.CommonStyle = '@font-face{font-family:\'tawk-widget\';src:local(\'tawk-widget\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.woff2?yh9epr\') format(\'woff2\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.woff?yh9epr\') format(\'woff\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.ttf?yh9epr\') format(\'truetype\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.eot?yh9epr#iefix\') format(\'embedded-opentype\'),url(\'https://static-v.tawk.to/a-v3/fonts/tawk-widget.svg?yh9epr#tawk-widget\') format(\'svg\');font-weight:normal;font-style:normal}[class^="icon-"],[class*=" icon-"]{font-family:\'tawk-widget\' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-menu:before{content:"\\e902"}.icon-mobile-submit:before{content:"\\e900";color:#aaa}.icon-desktop-sharing:before{content:"\\e903"}.icon-close:before{content:"\\e909"}.icon-phone-incoming:before{content:"\\e911"}.icon-chat:before{content:"\\e901"}.icon-upload:before{content:"\\e904"}.icon-voice-chat:before{content:"\\e905"}.icon-vote-down:before{content:"\\e906"}.icon-vote-up:before{content:"\\e907"}.icon-video-chat:before{content:"\\e908"}.icon-mail:before{content:"\\e914"}.icon-alert:before{content:"\\e915"}.icon-arrow-up:before{content:"\\e916"}.icon-user:before{content:"\\e917"}.icon-happy:before{content:"\\e91a"}.icon-error:before{content:\'\\e810\'}.icon-message:before{content:\'\\e811\'}.lds-spinner{display:inline-block;position:relative;width:64px;height:64px}.lds-spinner .spin{transform-origin:32px 32px;animation:lds-spinner 1.2s linear infinite}.lds-spinner .spin:after{content:" ";display:block;position:absolute;top:3px;left:29px;width:5px;height:14px;border-radius:20%;background:rgba(0,0,0,0.4)}.lds-spinner .spin-1{transform:rotate(0deg);animation-delay:-1.1s}.lds-spinner .spin-2{transform:rotate(30deg);animation-delay:-1s}.lds-spinner .spin-3{transform:rotate(60deg);animation-delay:-0.9s}.lds-spinner .spin-4{transform:rotate(90deg);animation-delay:-0.8s}.lds-spinner .spin-5{transform:rotate(120deg);animation-delay:-0.7s}.lds-spinner .spin-6{transform:rotate(150deg);animation-delay:-0.6s}.lds-spinner .spin-7{transform:rotate(180deg);animation-delay:-0.5s}.lds-spinner .spin-8{transform:rotate(210deg);animation-delay:-0.4s}.lds-spinner .spin-9{transform:rotate(240deg);animation-delay:-0.3s}.lds-spinner .spin-10{transform:rotate(270deg);animation-delay:-0.2s}.lds-spinner .spin-11{transform:rotate(300deg);animation-delay:-0.1s}.lds-spinner .spin-12{transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}.emoji-select{display:inline-block;margin:8px}.emoji-select:hover .emojione{transform:scale(2);-ms-transform:scale(2);-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2)}.emoji-header{display:block;cursor:pointer}.open-tab{opacity:1;float:left;position:relative;display:block;cursor:pointer;width:11%;text-align:center;height:100%;padding:8px 0;box-sizing:border-box;line-height:24px}.open-tab.active::after{content:"";position:absolute;height:5px;width:calc(100% - 5px);transform:translateX(-50%);left:50%;bottom:0;background-color:#4f4f4f}#people.open-tab.active .emoji-header{border-left:0}.open-tab.active .emoji-header:hover{background:#fff}#tabs-selection{height:40px;background-color:white;list-style:none;box-shadow:inset 0 2px 0 0 rgba(128,128,128,0.14)}#emoji-selection-container .loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#emoji-selection-container .emojione{min-width:auto;min-height:auto;height:3.2ex}.emojione{min-width:auto;min-height:auto;height:3.2ex;vertical-align:middle}.emojionly .emojione{height:4.5ex !important;width:auto}#viewEmoji.active{color:#464646}#emoji-selection-container .inputContainer{padding:0 6px}#emoji-selection-container .textInput{padding:6px 0}#tab-content{position:absolute;top:40px;bottom:0;overflow:auto;left:0;right:0;padding:10px 5px;border:1px solid #e3e3e3}.showWithFade{display:block !important;animation:slideFadeIn .25s ease;-webkit-animation:slideFadeIn .25s ease}#chat-icon{display:inline-block;vertical-align:middle}#tawkchat-status-text-container svg{width:32px;height:32px;margin-top:14px}';
                var w = {
                        "chat-notification-container": '<div id="__MESSAGE_ID__" class="messageBody notification clearfix"><div class="notificationContainer"><div class="message">__MESSAGE__</div></div><div class="notificationTime">__TIME__</div><div class="clear"></div></div>',
                        "chat-resend-link": '<a id="resendMessage-__MESSAGE_ID__" href="javascript:void(0);" class="messageStatus" title="Resend">__NOT_DELIVERED__</a><span class="icon-alert"></span> <span class="failed-label">__FAILED__</span>',
                        "tawk-survey-wrapper": '<div class="surveyContainer"><div class="surveyQuestion">__QUESTION__</div><div class="survey-options-wrapper">__OPTIONS__</div></div>',
                        departmentOfflineNotification: '<div class="messageBody notification"><div class="messageWrapper"><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
                        "survey-option": '<input type="radio" id="__RADIO_ID__" name="__RADIO_NAME__" value="__RADIO_VALUE__" /><label for="__RADIO_ID__">__RADIO_VALUE__</label><br />',
                        "file-upload": '<div>__FILE_DISPLAY__<div class="uploaded-file-info"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><div class="uploaded-file-size">&#x25CF; __FILE_SIZE__</div><a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank">__DOWNLOAD_LABEL__</a></div></div>',
                        "file-upload-not-img-vid-audio": '<div class="file-upload-not-img-vid-audio"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><div class="uploaded-file-info"><span class="file-size">__FILE_SIZE__</span><span class="separator">&#x25CF; __FILE_TYPE__</span><a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank">__DOWNLOAD_LABEL__</a></div></div>',
                        "chat-divider": '    <hr id="newMessageDividerLine">    <span id="newMessageDividerLabel">__NEW_MESSAGES__</span>',
                        fileUploadProgress: '    <div id="upload-__HANDLE__" class="upload-data">    <div id="circle-progress-bar-border">        <div id="circle-progress-bar-container">        <div id="circle-progress-bar">        <div class="inner-content"><span class="icon-arrow-up icon"></span>        </div><div class="circle-progress-clip"></div><div class="circle-progress-left"></div><div class="circle-progress-right"></div></div>        </div>        </div><div id="upload-info-container"><div id="upload-info"><div class="wrapper"><span class="file-name">__FILE_NAME__</span><span class="file-status">__FILE_STATUS__</span></div></div></div><span class="upload-icon"></span>    </div>    <div class="clearfix"></div>',
                        incomingCallRequest: '<div id="incoming-call-container"><div class="profileImageContainer"><div class="incomingCallAgentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="incomingCallAgentProfileImage"></div></div><div class="header-label">__INCOMING_CALL__</div><div id="incoming-call-buttons"><button id="decline-call"><span class="btn-icon icon-voice-chat"></span><span class="btn-label">__DECLINE_CALL__</span></button><button id="accept-call"><span class="btn-icon icon-voice-chat"></span><span class="btn-label">__ACCEPT_CALL__</span></button></div><div class="clear"></div></div>',
                        callInfo: '<div class="callLoader">__LOADER__</div><div class="callInfoContainer"><div class="callInfoWrapper"><div class="callIconContainer"><div class="callIconWrapper"></div></div><div class="callDetailsContainer"><p class="callTitle"></p></div></div><p class="callEndDetails"></p></div>',
                        callError: '<div class="callInfoWrapper"><div class="callDetailsContainer"><p class="callTitle missed">__HEADER__</p><p class="callEndDetails">__MESSAGE__</p></div><div class="callRetryContainer"><button class="retry-load">__ACTION__</button></div></div>',
                        loader: '<div class="lds-spinner loader"><div class="spin spin-1"></div><div class="spin spin-2"></div><div class="spin spin-3"></div><div class="spin spin-4"></div><div class="spin spin-5"></div><div class="spin spin-6"></div><div class="spin spin-7"></div><div class="spin spin-8"></div><div class="spin spin-9"></div><div class="spin spin-10"></div><div class="spin spin-11"></div><div class="spin spin-12"></div></div>',
                        noWebrtc: '<div class="uploadFailedNotifContainer"><div class="uploadFailedNotifHeader"><div class="uploadFailedNotifIconContainer"><div class="uploadFailedNotifIconWrapper"></div><span class="uploadFailedSizeNotifIcon">!</span></div><span class="uploadFailedNotifLabel">__HEADER__</span></div><div class="uploadFailedNotifMessage">__MESSAGE__</div><div class="uploadFailedRetryContainer"></div></div>',
                        "emoji-selection": '<ul id="tabs-selection">__TAB_LIST__<li id="search" class="open-tab"><a href="javascript:void(0);" class="emoji-header"><img class="emojione only-emoji" alt="search" title=":mag:" src="https://cdn.jsdelivr.net/emojione/assets/png/1f50d.png?v=2.2.7" /></a></li><div class="clearfix"></div></ul><div id="tab-content"></div>',
                        "emoji-tab-pane": '<div class="tab-pane"><div class="emoji-list">__EMOJIS__</div></div>',
                        "emoji-search-pane": '<div class="tab-pane"><div class="inputContainer"><input id="search-emoji" type="text" class="textInput" placeholder="Search Emoji" /></div><div id="search-list"></div></div>',
                        "emoji-tab-select": '<li class="open-tab" id="__ID__"><a href="javascript:void(0);" class="emoji-header">__IMAGE__</a></li>',
                        "emoji-list": '<a href="javascript:void(0);" class="emoji-select" id="__SHORTNAME__" title="__SHORTNAME__">__IMAGE__</a>',
                        changeNameForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header"><span class="form-header-icon"><span class="icon-user"></span></span><div class="form-header-text"><span>__CHANGE_NAME__</span></div>        </div><div id="changeNameFormMessageContainer" class="formMessageField">__TITLE__</div><fieldset><div class="inputContainer"><input type="text" id="nameField" value="__NAME__" title="__NAME_PLACEHOLDER__" class="textInput" maxlength="40" placeholder="__NAME_PLACEHOLDER__" /></div><div id="nameFieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="nameFieldError" class="formErrorContainer"></div></div></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton  theme-background-color theme-text-color">__SAVE_BUTTON__</button><div class="clear"></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
                        emailTranscriptForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header" class="email-transcript-form-header"><span class="form-header-icon"><span class="icon-mail"></span></span><div class="form-header-text"><span>__EMAIL_TRANSCRIPT_TO__:</span></div>        </div>        <div id="changeNameFormMessageContainer" class="formMessageField"></div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /></div><div id="transcriptEmailFieldErrorIcon" class="formErrorIcon"><span class="icon-error field-error"></span></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SEND_BUTTON__</button></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
                        offlineForm: '<div id="overlayOfflineForm"><p>__OFFLINE_MESSAGE_SUCCESSFULY_SENT__</p></br><button id="resendButton" class="approveButton formButton theme-background-color theme-text-color">__SEND_AGAIN__</button></div><div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight">__FIELDS__</div></div><div id="offlineButtonContainer" class="longFormBottomContainer"><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SUBMIT_BUTTON__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
                        preChatForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight">__FIELDS__</div></div><div id="prechatButtonContainer" class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__START_CHAT_BUTTON__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
                        departmentSelection: '<fieldset><div class="inputContainer selection "><select id="__ID__Field" title="__LABEL__">__VALUE__</select></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"></div>',
                        inputTextFieldType: '<fieldset><div class="inputContainer"><input type="__INPUT_TYPE__" id="__ID__Field" title="__LABEL__" value="__VALUE__" class="textInput" maxlength="__MAXLENGTH__"placeholder="__REQUIRED__ __LABEL__" /><label class="form-field-label small">__REQUIRED__ __LABEL__</label></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
                        textAreaFieldType: '<fieldset class="textareaFieldset"><div class="inputContainer"><textarea id="__ID__Field" title="__LABEL__" maxlength="__MAXLENGTH__" placeholder="__REQUIRED__ __LABEL__"></textarea><label class="form-field-label small">__REQUIRED__ __LABEL__</label></div><div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
                        selectionsType: '<fieldset><label class="form-field-label">__REQUIRED__ __LABEL__</label><div><div class="selections-container" id="__ID__Container">__VALUE__<div id="__ID__FieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
                        checkboxSelectionType: '<div class="selection-container checkbox"><input type="checkbox" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><span class="selection-input-css-placeholder"></span><label class="selection-label" for="__ID__">__VALUE__</label></div>',
                        radioSelectionType: '<div class="selection-container radio"><input type="radio" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><span class="selection-input-css-placeholder"></span><label class="selection-label" for="__ID__">__VALUE__</label></div>',
                        "close-form-button": '<button id="formCloseChat" class="declineButton formButton">__CLOSE_BUTTON__</button>',
                        inactivityOverlay: "<div>__OVERLAY__</div>",
                        maintenanceOverlay: "<div>__OVERLAY__</div>",
                        endChatForm: '<div id="formFieldsContainer"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div class="formMessageField innerTittle">__TITLE__</div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__END_CHAT_BUTTON__</button></div></div></div></div></div><div id="submitWrapper"></div>',
                        restartChatForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div id="form-header"><span class="form-header-icon"><span class="icon-chat"></span></span><div class="form-header-text"><span>__TITLE__</span></div></div><div class="formMessageField innerTittle">__END_CHAT_MESSAGE__</div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /><div id="transcriptEmailFieldErrorIcon" class="formErrorIcon"><div class="icon-error field-error"></div></div></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div></div></div><div class="longFormBottomContainer"><button id="newChat" class="declineButton formButton">__START_CHAT__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__EMAIL_TRANCRIPT__</button></div></div></div></div></div></div><div id="submitWrapper"></div>',
                        consentForm: '<div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="longFormContainer"><div id="formInnerHeight"><div class="formMessageField innerTittle">__TITLE__</div><div class="longFormBottomContainer"><button id="formDecline" class="declineButton formButton">__CUSTOM_CLOSE_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__CUSTOM_SUBMIT_BUTTON__</button></div></div></div></div></div></div></div></div><div id="submitWrapper"></div>',
                        "tawkchat-minified-iframe-element-rectangle": '<div id="tawkchat-minified-wrapper"><div id="tawkchat-minified-container" class="theme-background-color"><div id="tawkchat-status-middle"><div id="tawkchat-status-agent-container" class="theme-text-color"><div id="agent-profile-image" class="agent-profile">&nbsp;</div><div id="min-agent-profile-details" class="theme-text-color"></div></div><div id="tawkchat-status-text-container" class="theme-text-color"><div id="tawkchat-status-message"><span id="short-message"></span></div></div></div></div></div>',
                        "tawkchat-minified-iframe-element-round": '<div id="tawkchat-minified-box" class="round"><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><span id="maximizeChat" title="__MAXIMIZE__"><svg id="chat-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg></span><span id="minimizeChatMinifiedBtn" class="icon-close" title="__MINIMIZE__"></span></div></div></div>',
                        "tawkchat-chat-bubble-canvas": '<div id="tawkchat-chat-bubble-graphics-container"><canvas id="tawkchat-chat-bubble-canvas"></canvas></div><div id="tawkchat-chat-bubble-close" class="image-canvas-close"></div><div id="tawkchat-chat-bubble-text-container"><p id="tawkchat-chat-bubble-text" class="bubble-text-color"></p></div>',
                        "tawkchat-chat-indicator": '<div id="tawkchat-chat-indicator"><p id="tawkchat-chat-indicator-text"></p></div>',
                        "tawkchat-chat-bubble-gallery": '<span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img src="__IMAGE_SRC__" style="__IMAGE_SIZE__" /><a id="bubble-image" class="gallery-bubble" href="javascript:void(0);"></a>',
                        "tawkchat-chat-bubble-upload": '<span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img id="bubble-image" src="__IMAGE_SRC__" />',
                        "tawkchat-message-preview": '<div id="tawkchat-message-preview-container"><div id="tawkchat-message-preview-close"><div class="icon-close"></div></div><div id="tawkchat-message-preview-messages-container"></div><div id="tawkchat-message-preview-quick-reply-container"><div id="emoji-selection-container"></div><div id="actionsContainer"><div id="file-upload-drop-container"><div id="file-upload-drop-icon-label-container"><span id="file-upload-drop-icon" class="icon-upload"></span><span id="file-upload-drop-label"></span></div></div><fieldset id="textareaWrapper"><div id="textareaContainer" class="additionalPadding"><div id="tooLongMsgNotification"><span class="icon-alert"></span><span id="notifMessageText"></span></div></div><div id="actionButtonsContainer"><div id="hidableActionsWrapper"><div id="rateMainWrapper"><a id="rateChat" href="javascript:void(0);"><span class="icon-vote-up"></span></a><div id="rateContainer"><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"><span class="icon-vote-down"></span></a><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"><span class="icon-vote-up"></span></a></div></div><a id="uploadFileOption" href="javascript:void(0);" title="__UPLOAD_FILE__"><label for="fileInput"><span class="icon-upload"></span></label></a></div><a id="viewEmoji" href="javascript:void(0);" title="__VIEW_EMOJI__"><span class="icon-happy"></span></a></div></fieldset></div><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div></div>',
                        "message-preview-item": '<span class="message-preview-close-button icon-close"></span><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="messageBody"><div class="message">__MESSAGE__</div><div class="messageInformation"><div class="messageNameContainer"><div class="messageName">__NAME__</div></div><div class="messageTimeContainer"><div class="messageTime">__TIME__</div></div></div></div>',
                        "messagePreview-callInfo": '<div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="mp-callInfoContainer messageBody"><div class="mp-callInfoWrapper"><div class="mp-callIconContainer"><div id="mp-callIconWrapper"><span id="mp-callIcon" class="btn-icon icon-voice-chat"></span></div></div><span id="mp-callInfo">__CALL_INFO__ __CALLER_NAME__</span></div><div class="mp-callInfoElapsedTime">__ELAPSED_TIME__</div></div>',
                        "tawkchat-maximized-wrapper": '<div id="innerWrapper" class="border-corner"><div id="headerBoxWrapper" class="border-corner"><div id="headerBox" class="theme-background-color theme-text-color border-corner"><div id="headerAccountStateContainer"><p id="headerAccountState"><span id="shortMessage"></span></p><div id="agentProfileContainer">&nbsp;</div></div><div id="headerBoxControlsContainer"><a id="screenShare" class="headerBoxLink" href="javascript:void(0);" title="__SCREENSHARE__"><span class="icon-desktop-sharing headerBoxIcon"></span></a><a id="voiceCall" class="headerBoxLink" href="javascript:void(0);" title="__VOICECALL__"><span class="icon-voice-chat headerBoxIcon"></span></a><a id="videoCall" class="headerBoxLink" href="javascript:void(0);" title="__VIDEOCALL__"><span class="icon-video-chat headerBoxIcon"></span></a><div class="headerBoxLink"><a id="chatMenu"  href="javascript:void(0);" title="__CHATMENU__"><span class="icon-menu headerBoxIcon"></span></a><div id="chatMenuControls"><div id="chatMenuControlsOverlay"></div><ul><li id="changeName" style="display: none;">__CHANGE_NAME__</li><li id="emailTranscriptOption" style="display: none;"></li><li id="soundOn"></li><li id="soundOff"></li><li id="endChat"></li></ul></div></div><a id="minimizeChat" class="headerBoxLink" href="javascript:void(0);" title="__END__"><span class="icon-close headerBoxIcon"></span></a></div></div></div><div id="contentContainer"><div id="greetingsMainContainer" class="theme-background-color theme-text-color"><div id="greetingsContent"><p id="greetingsText"></p><p id="greetingsWaitTime"></p></div><div id="agentBar"><div id="agentList"></div></div></div><div id="chatPanel"><div id="chatContainerWrapper"><div id="chatContainer"><div id="chatTableWrapper"><div id="chatRowWrapper"><div id="chatCellWrapper"><div id="chatWrapper" class="single-agent"><div id="agentTypingContainer"></div></div></div></div></div><div id="maxFileNotificationContainer" class="hidden"><div id="maxFileNotifHeader"><div id="maxFileNotifIconContainer"><div id="maxFileNotifIconWrapper"></div><span id="maxFileNotifIcon">!</span></div><span id="maxFileNotifLabel"></span><div class="closeButtonContainer"><span class="icon-close" id="closeNumberNotification"></span></div></div><div id="maxFileNotificationMessage"></div><div id="maxFileNumberList"></div></div><div id="maxSizeNotificationContainer" class="hidden"><div id="maxSizeNotifHeader"><div id="maxSizeNotifIconContainer"><div id="maxSizeNotifIconWrapper"></div><span id="maxSizeNotifIcon">!</span></div><span id="maxSizeNotifLabel"></span><div class="closeButtonContainer"><span class="icon-close" id="closeSizeNotification"></span></div></div><div id="maxSizeNotificationMessage"></div><div id="maxFileSizeList"></div></div></div></div><div id="actionsContainer"><fieldset id="textareaWrapper"><div id="textareaContainer" class="additionalPadding"><div id="tooLongMsgNotification"><span class="icon-alert"></span><span id="notifMessageText">__TOO_LONG_MESSAGE__</span></div></div><div id="actionButtonsContainer"><div id="hidableActionsWrapper"><div id="rateMainWrapper"><a id="rateChat" href="javascript:void(0);"><span class="icon-vote-up"></span></a><div id="rateContainer"><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"><span class="icon-vote-down"></span></a><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"><span class="icon-vote-up"></span></a></div></div><a id="uploadFileOption" href="javascript:void(0);" title="__UPLOAD_FILE__"><label for="fileInput"><span class="icon-upload"></span></label></a></div><a id="viewEmoji" href="javascript:void(0);" title="__VIEW_EMOJI__"><span class="icon-happy"></span></a></div><div id="textareaSubmitContainer"><div class="icon-mobile-submit" id="textareaSubmitButton"></div></div></fieldset></div><div id="file-upload-drop-container"><div id="fileUploadWrapper"><div id="file-upload-drop-icon-label-container"><span id="file-upload-drop-icon" class="icon-upload"></span><span id="file-upload-drop-label"></span></div></div></div><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div><div id="newMessagesBar"><div id="newMessageContainer"><p id="newMessagesNotification"><a id="newMessagesNotificationLink" title="" class="icon-message"></a><span id="notificationMessageText"></span></p><div id="newMessageArrowDown"></div></div></div><div id="formContainer"></div></div><div id="emoji-selection-container"></div><div id="tawkToContent"><div id="formFieldsContainer"><div class="formTable"><div class="formRow"><div class="formCell"><div class="formFrame"><div class="contentContainer"><div class="longFormContainer"><div id="formInnerHeight"><div id="tawkImage"></div><p id="tawkHeader">TAWK.TO</p><div id="tawkContent" class="formMessageField innerTittle"></div></div></div><div class="longFormBottomContainer"><button id="cancelTawkRedirect" class="formButton"></button><button id="tawkRedirect" class="theme-background-color theme-text-color formButton"></button><div class="clear"></div></div></div></div></div></div></div></div></div></div>',
                        uploadFailedNotification: '<div class="uploadFailedNotifContainer"><div class="uploadFailedNotifHeader"><div class="uploadFailedNotifIconContainer"><div class="uploadFailedNotifIconWrapper"></div><span class="uploadFailedSizeNotifIcon">!</span></div><span class="uploadFailedNotifLabel">__UPLOAD_FAILED_LABEL__</span></div><div class="uploadFailedNotifMessage">__UPLOAD_FAILED_MESSAGE__</div><div class="uploadFailedRetryContainer"></div></div>',
                        "mobile-bottom-round": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"><svg id="chat-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z" fill-rule="evenodd" clip-rule="evenodd" /></svg></div></div></div></div>',
                        "mobile-bottom-rectangle": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-agent-container"><div id="agent-profile-image" class="agent-profile theme-background-color">&nbsp;</div></div><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"><span id="chat-icon"><svg id="chat-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg></span><span id="tawk-minified-mobile-text" class="text"></span></div></div></div></div>',
                        "chat-message-container": '__OWNER_TPL__<div class="clearfix"></div><div class="messageBody clearfix">__CONTENT__</div>',
                        "chat-message-owner-agent": '<div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div>',
                        "chat-message-owner-visitor": '<div class="ownerNameContainer"><a class="messageOwnerName visitor" href="#">__NAME__</a></div>',
                        "agent-typing": '<div id="agentTyping-__MESSAGE_ID__" class="agentChatContainer clearfix"><div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div style="background-image : __IMAGE_URL__;" class="agentProfileImage"></div></div><div class="clearfix"></div><div class="messageBody clearfix"><div class="message agentTypingIndicator"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div></div>',
                        "agent-profile": "__AGENT_PROFILE_IMAGE____AGENT_PROFILE_DETAIL__",
                        "agent-profile-image": '<div class="alias-image theme-background-color" style="__IMAGE_URL__;"></div>',
                        "agent-profile-detailed": '<div class="agentDetailedInfo"><strong>__NAME__</strong><p>__POSITION__</p></div>',
                        "agent-profile-description": '<div class="agentContainer"><div class="agentInformationContainer"><p class="__POSITION_CLASS__">__NAME__</p><p class="position-label" style="display: none;">__POSITION__</p></div></div>',
                        "agent-profile-description-noimage": '<div class="agentContainerNoImage"><div class="agentInformationContainerNoImage"><p class="agentInfoNoImage"><b>__NAME__</b><i>__POSITION__</i></p></div></div>',
                        "chat-message-row": '<div class="messageWrapper __PENDING__"><div class="message">__MESSAGE__</div></div>__MESSAGE_STATUS_ROW__<div class="clear"></div>',
                        "chat-message-status-row": '<div class="clear"></div><div class="time-agent-display"><div class="agent-div __TIME_CLASS__">__NAME__</div><div class="time-div __TIME_CLASS__">__TIME__</div></div>',
                        "chat-message-pending-row": '<div class="messageStatusContainer pending"><div class="lds-spinner loader"><div class="spin spin-1"></div><div class="spin spin-2"></div><div class="spin spin-3"></div><div class="spin spin-4"></div><div class="spin spin-5"></div><div class="spin spin-6"></div><div class="spin spin-7"></div><div class="spin spin-8"></div><div class="spin spin-9"></div><div class="spin spin-10"></div><div class="spin spin-11"></div><div class="spin spin-12"></div></div></div>'
                    },
                    i = {
                        undefined: 1,
                        boolean: 1,
                        number: 1,
                        string: 1
                    },
                    c = {
                        exportProperty: function(e, t, i) {
                            e[t] = i
                        }
                    };
                c.dependencyDetection = (n = [], {
                    begin: function(e) {
                        n.push(e && {
                            callback: e,
                            distinctDependencies: []
                        })
                    },
                    end: function() {
                        n.pop()
                    },
                    registerDependency: function(e) {
                        if (!c.isSubscribable(e)) throw Error("Only subscribable things can act as dependencies");
                        var t;
                        0 < n.length && (!(t = n[n.length - 1]) || 0 <= c.utils.arrayIndexOf(t.distinctDependencies, e) || (t.distinctDependencies.push(e), t.callback(e)))
                    },
                    ignore: function(e, t, i) {
                        try {
                            return n.push(null), e.apply(t, i || [])
                        } finally {
                            n.pop()
                        }
                    }
                }), c.observable = function(e) {
                    function t() {
                        return 0 < arguments.length ? (t.equalityComparer && t.equalityComparer(i, arguments[0]) || (t.valueWillMutate(), i = arguments[0], t.valueHasMutated()), this) : (c.dependencyDetection.registerDependency(t), i)
                    }
                    var i = e;
                    return c.subscribable.call(t), t.peek = function() {
                        return i
                    }, t.valueHasMutated = function() {
                        t.notifySubscribers(i)
                    }, t.valueWillMutate = function() {
                        t.notifySubscribers(i, "beforeChange")
                    }, c.utils.extend(t, c.observable.fn), c.exportProperty(t, "peek", t.peek), c.exportProperty(t, "valueHasMutated", t.valueHasMutated), c.exportProperty(t, "valueWillMutate", t.valueWillMutate), t
                }, c.subscribable = function() {
                    this._subscriptions = {}, c.utils.extend(this, c.subscribable.fn), c.exportProperty(this, "subscribe", this.subscribe), c.exportProperty(this, "getSubscriptionsCount", this.getSubscriptionsCount)
                }, c.subscribable.fn = {
                    subscribe: function(e, t, i) {
                        i = i || "change", e = t ? e.bind(t) : e;
                        var n = new c.subscription(this, e, function() {
                            c.utils && c.utils.arrayRemoveItem && c.utils.arrayRemoveItem(this._subscriptions[i], n)
                        }.bind(this));
                        return this._subscriptions[i] || (this._subscriptions[i] = []), this._subscriptions[i].push(n), n
                    },
                    notifySubscribers: function(e, t) {
                        if (t = t || "change", this.hasSubscriptionsForEvent(t))
                            for (var i = this._subscriptions[t], n = 0, a = this._subscriptions[t].length; n < a; ++n)(i = (i = this._subscriptions[t].slice(0))[n]) && !0 !== i.isDisposed && i.callback(e)
                    },
                    hasSubscriptionsForEvent: function(e) {
                        return this._subscriptions[e] && this._subscriptions[e].length
                    },
                    getSubscriptionsCount: function() {
                        var i = 0;
                        return c.utils.objectForEach(this._subscriptions, function(e, t) {
                            i += t.length
                        }), i
                    },
                    unsubscribe: function(e, t) {
                        c.utils.arrayRemoveItem(this._subscriptions[t || "change"], e)
                    }
                }, c.isSubscribable = function(e) {
                    return null !== e && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers
                }, c.subscription = function(e, t, i) {
                    this.target = e, this.callback = t, this.disposeCallback = i, c.exportProperty(this, "dispose", this.dispose)
                }, c.subscription.prototype.dispose = function() {
                    this.isDisposed = !0, this.disposeCallback()
                }, c.observable.fn = {
                    equalityComparer: function(e, t) {
                        return (null === e || typeof e in i) && e === t
                    }
                };
                var _, x = c.observable.protoProperty = "__tw_proto__";
                if (c.observable.fn[x] = c.observable, c.hasPrototype = function(e, t) {
                        return null != e && void 0 !== e[x] && (e[x] === t || c.hasPrototype(e[x], t))
                    }, c.isObservable = function(e) {
                        return c.hasPrototype(e, c.observable)
                    }, c.utils = {
                        arrayIndexOf: function(e, t) {
                            if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(e, t);
                            for (var i = 0, n = e.length; i < n; i++)
                                if (e[i] === t) return i;
                            return -1
                        },
                        extend: function(e, t) {
                            if (t)
                                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                            return e
                        },
                        arrayRemoveItem: function(e, t) {
                            var i = c.utils.arrayIndexOf(e, t);
                            0 <= i && e.splice(i, 1)
                        },
                        objectForEach: function(e, t) {
                            for (var i in e) e.hasOwnProperty(i) && t(i, e[i])
                        }
                    }, u = 2147483647, t = /[^\x20-\x7E]/, l = /[\x2E\u3002\uFF0E\uFF61]/g, f = "Overflow: input needs wider integers to process", v = Math.floor, b = String.fromCharCode, y.punycode = {
                        version: "1.4.1",
                        ucs2: {
                            decode: Je
                        },
                        encode: Ze,
                        toASCII: function(e) {
                            return function(e, t) {
                                var i = e.split("@"),
                                    n = "";
                                1 < i.length && (n = i[0] + "@", e = i[1]);
                                for (var a = (i = (e = e.replace(l, ".")).split(".")).length, o = []; a--;) o[a] = t(i[a]);
                                return n + (i = o.join("."))
                            }(e, function(e) {
                                return t.test(e) ? "xn--" + Ze(e) : e
                            })
                        }
                    }, d = {}, h.$_Tawk = h.$_Tawk || {}, h.Tawk_API = h.Tawk_API || {}, "object" == typeof h.$_Tawk_API)
                    for (var C in h.$_Tawk_API) h.$_Tawk_API.hasOwnProperty(C) && (h.Tawk_API[C] = h.$_Tawk_API[C]);
                "function" != typeof h.CustomEvent && ((_ = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                }).prototype = h.Event.prototype, y.CustomEventIE = _), s.begin = function(e) {
                    y.main.begin(e)
                }, s.init = function(e) {
                    y.main.init(e)
                };
                s.maximize = Tawk_API.maximize = function() {
                    s.ready && y.sessionHandler.notifyWindowState("max")
                }, s.minimize = Tawk_API.minimize = function() {
                    s.ready && y.sessionHandler.notifyWindowState("min")
                }, s.toggle = Tawk_API.toggle = function() {
                    s.ready && y.viewHandler.toggleWidget()
                }, s.popup = Tawk_API.popup = function() {
                    s.ready && y.viewHandler.popoutWidget()
                }, s.getWindowType = Tawk_API.getWindowType = function() {
                    if (s.ready) return E.isEmbedded ? "embed" : E.isPopup ? "popup" : "inline"
                }, s.showWidget = Tawk_API.showWidget = function() {
                    s.ready && y.viewHandler.showWidget()
                }, s.hideWidget = Tawk_API.hideWidget = function() {
                    s.ready && y.viewHandler.hideWidget()
                }, s.toggleVisibility = Tawk_API.toggleVisibility = function() {
                    s.ready && y.viewHandler.toggleVisibility()
                }, s.getStatus = Tawk_API.getStatus = function() {
                    if (s.ready) return B.pageStatus()
                }, s.isChatMaximized = Tawk_API.isChatMaximized = function() {
                    if (s.ready) return "max" === B.chatWindowState()
                }, s.isChatMinimized = Tawk_API.isChatMinimized = function() {
                    if (s.ready) return "min" === B.chatWindowState()
                }, s.isChatHidden = Tawk_API.isChatHidden = function() {
                    if (s.ready) return y.viewHandler.isWidgetHidden()
                }, s.isChatOngoing = Tawk_API.isChatOngoing = function() {
                    if (s.ready) return y.chatHandler.isChatOngoing()
                }, s.isVisitorEngaged = Tawk_API.isVisitorEngaged = function() {
                    if (s.ready) return y.chatHandler.isVisitorEngaged()
                }, s.endChat = Tawk_API.endChat = function() {
                    s.ready && y.chatHandler.triggerEndChat()
                }, s.addEvent = Tawk_API.addEvent = function(e, t, i) {
                    y.sessionHandler.addEvent(e, t, i)
                }, s.setAttributes = Tawk_API.setAttributes = function(e, t) {
                    y.sessionHandler.setAttributes(e, !0, t)
                }, s.addTags = Tawk_API.addTags = function(e, t) {
                    y.sessionHandler.addTags(e, t)
                }, s.removeTags = Tawk_API.removeTags = function(e, t) {
                    y.sessionHandler.removeTags(e, t)
                }, s.widgetPosition = Tawk_API.widgetPosition = function() {
                    if (s.ready) return E.chatPosition()
                };
                var k = {
                        vendor: "",
                        version: 0,
                        isIE: !(s.setMobilePosition = Tawk_API.setMobilePosition = function(e) {
                            var t = "br bl cr cl tr tl".split(" ");
                            s.ready && -1 !== t.indexOf(e) && k && k.mobileBrowserName && E.chatPosition(e)
                        }),
                        isIE6: !1,
                        isIE8: !1,
                        windowId: null,
                        mobileBrowserName: null,
                        html5audio: {},
                        isPlaceholderSupported: !0
                    },
                    E = {
                        widgetId: "default",
                        isPopup: !1,
                        isEmbedded: !1,
                        soundOn: c.observable(!0),
                        showAgentBar: !0,
                        showWaitTime: !0,
                        showPreChatForm: !1,
                        showOfflineForm: !0,
                        hideWidget: !1,
                        hideWidgetOnLoad: !1,
                        hideWidgetOnOffline: !1,
                        greetings: {},
                        prechatOptions: {},
                        headerBgColor: null,
                        headerTxtColor: null,
                        isLegacyLayout: !1,
                        mobileWidget: c.observable("round"),
                        desktopWidget: c.observable("full"),
                        chatBubble: c.observable(),
                        chatPosition: c.observable("br"),
                        maximizedDimensions: c.observable({
                            width: 0,
                            height: 0
                        }),
                        minimizedDimensions: c.observable({
                            width: 0,
                            height: 0,
                            position: "br"
                        }),
                        showMessagePreview: c.observable(!0),
                        showUploads: c.observable(!0),
                        showRating: c.observable(!0),
                        showAgentTyping: !0,
                        showVisitorTyping: c.observable(!0),
                        showEmoji: c.observable(!0),
                        showUnreadInTab: c.observable(!0),
                        onClickAction: "max",
                        widgetVersion: 0,
                        locale: "en",
                        schedule: null,
                        scheduleTimezone: null,
                        isTopPositioned: function() {
                            return "tr" === this.chatPosition() || "tl" === this.chatPosition()
                        },
                        isBottomPositioned: function() {
                            return "br" === this.chatPosition() || "bl" === this.chatPosition()
                        },
                        isCenterPositioned: function() {
                            return "cr" === this.chatPosition() || "cl" === this.chatPosition()
                        },
                        isRightPositioned: function() {
                            return "cr" === this.chatPosition() || "tr" === this.chatPosition() || "br" === this.chatPosition()
                        },
                        isLeftPositioned: function() {
                            return "cl" === this.chatPosition() || "tl" === this.chatPosition() || "bl" === this.chatPosition()
                        },
                        isDesktopRectangle: function() {
                            return "min" !== this.desktopWidget()
                        },
                        agentTextBgColor: null,
                        agentTextColor: null,
                        visitorTextBgColor: null,
                        visitorTextColor: null,
                        agentTextBorderColor: null,
                        topCorner: null,
                        bottomCorner: null,
                        widgetOffsetX: 0,
                        widgetOffsetY: 0,
                        isHeaderCompact: null,
                        maxStyle: c.observable(),
                        minStyle: c.observable(),
                        mobMaxStyle: c.observable(),
                        mobMinStyle: c.observable(),
                        isRTL: c.observable(!1),
                        webRTCSettings: c.observable(),
                        brandingRedirect: c.observable(),
                        key: -1987780763
                    },
                    T = {
                        uuid: null,
                        uuidVer: 0,
                        visitorId: "",
                        name: c.observable(),
                        displayName: c.observable(),
                        email: c.observable(),
                        transcriptEmail: "",
                        uuids: []
                    },
                    I = {
                        pageId: null,
                        tawkId: "",
                        pageName: c.observable(),
                        isStable: !0
                    },
                    S = {
                        chatSynced: !1,
                        chatBuffer: [],
                        chatVersion: 0,
                        chatDepartment: "any",
                        agents: {},
                        agentProfiles: {},
                        profiles: {},
                        rating: c.observable(),
                        chatHistory: [],
                        chatOrder: 0,
                        chatEndVersion: 1,
                        chatId: null
                    },
                    B = {
                        transferKey: "",
                        sessionKey: "",
                        transferedSession: !1,
                        currentVersion: 694,
                        criticalVersion: 0,
                        serverVersion: 0,
                        agentImgUrl: "https://s3.amazonaws.com/tawk-to-pi",
                        visitorAppServer: "https://va.tawk.to",
                        visitorSocketServer: "",
                        chatWindowState: c.observable("min"),
                        pageStatus: c.observable(),
                        pageStatusVersion: 0,
                        prechatFormSubmitted: c.observable(!1),
                        waitTime: 6e4,
                        chatBubbleClosed: c.observable(!1),
                        restarted: !1,
                        departments: []
                    },
                    N = {
                        chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.mp3"
                    },
                    R = {
                        chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.ogg"
                    },
                    H = {
                        chat_sound: "https://static-v.tawk.to/a-v3/audio/chat_sound.wav"
                    };
                ! function() {
                    var o = !1,
                        r = /xyz/.test(function() {
                            xyz
                        }) ? /\b_super\b/ : /.*/;
                    this.TawkClass = function() {}, TawkClass.extend = function(e) {
                        function t() {
                            !o && this.init && this.init.apply(this, arguments)
                        }
                        var a = this.prototype;
                        o = !0;
                        var i = new this;
                        for (var n in o = !1, e) i[n] = "function" == typeof e[n] && "function" == typeof a[n] && r.test(e[n]) ? function(i, n) {
                            return function() {
                                var e = this._super;
                                this._super = a[i];
                                var t = n.apply(this, arguments);
                                return this._super = e, t
                            }
                        }(n, e[n]) : e[n];
                        return ((t.prototype = i).constructor = t).extend = arguments.callee, t
                    }
                }();

                function P() {
                    this.br = "<br/>", this.regAlphaNumeric = /^[a-z0-9\-]{1,50}$/i, this.regNameMach = /^V[0-9]{16}$/, this.regTrim = /^\s+|\s+$/g, this.regDate = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/, this.regEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/i, this.regSurvey = /\[option\](.*?)(<br\/>|$)/g, this.regSurveyQuestion = /^(.*?)\[option\]/g, this.regOption = /\[option\]/g, this.regBr = /<br\/>/, this.regMatchUrl = RegExp('(?:^(?:(?:[a-z]+:)?//)?(?:\\S+(?::\\S*)?@)?(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)', "i"), this.regMatchIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\/\?#]+)+)\b/gi, this.regEmailMatch = /^((mailto:){0,1}[a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)$/, this.regLineBreaks = /(\r\n|\n|\r)/gm, this.decodedAmp = "&", this.decodedQuote = '"', this.decodedApos = "'", this.decodedLess = "<", this.decodedGreat = ">", this.encodedQuote = "&quot;", this.encodedApos = "&#39;", this.encodedLess = "&lt;", this.encodedGreat = "&gt;", this.encodedAmp = "&amp;", this.rtlLangTab = ["ar", "he", "fa"], this.decodedAmpRegex = RegExp(this.decodedAmp, "g"), this.decodedQuoteRegex = RegExp(this.decodedQuote, "g"), this.decodedAposRegex = RegExp(this.decodedApos, "g"), this.decodedLessRegex = RegExp(this.decodedLess, "g"), this.decodedGreatRegex = RegExp(this.decodedGreat, "g"), this.encodedQuoteRegex = RegExp(this.encodedQuote, "g"), this.encodedAposRegex = RegExp(this.encodedApos, "g"), this.encodedLessRegex = RegExp(this.encodedLess, "g"), this.encodedGreatRegex = RegExp(this.encodedGreat, "g"), this.encodedAmpRegex = RegExp(this.encodedAmp, "g"), this.connectionUrl = "https://video.tawk.to"
                }
                P.prototype.createElement = function(e, t, i, n, a) {
                    var o;
                    for (o in e = e.createElement(t), i = i || {}) e[o] = i[o];
                    return a && "iframe" !== t && (e.innerHTML = a), n && (e.style.cssText = n), e
                }, P.prototype.getDocument = function(e) {
                    return e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document ? e.document : null
                }, P.prototype.parseQueryString = function(e) {
                    var t, i, n = {},
                        a = (e ? e.replace(/(.*)\?/, "") : h.location.search.substring(1)).split("&");
                    for (e = 0, t = a.length; e < t; e += 1) n[(i = a[e].split("="))[0]] = i[1];
                    return n
                }, P.prototype.createQueryString = function(e) {
                    var t, i = [];
                    for (t in e) e.hasOwnProperty(t) && i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                    return i.join("&")
                }, P.prototype.getReloadedScript = function() {
                    for (var e = document.getElementsByTagName("script"), t = null, i = 0, n = e.length; i < n; i++) e[i].id && -1 !== e[i].id.indexOf("TawkScript") && (t = e[i]);
                    return t
                }, P.prototype.trim = function(e) {
                    return this.isString(e) ? String.prototype.trim ? e.trim().toString() : e.replace(this.regTrim, "") : null
                }, P.prototype.isString = function(e) {
                    return void 0 !== e && "string" == typeof e
                }, P.prototype.isEmail = function(e) {
                    return this.regEmail.test(e)
                }, P.prototype.isArray = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, P.prototype.parseVisitorName = function(e) {
                    return this.isGeneratedName(e) ? y.languageParser.translate("chat", "defaultName") : e
                }, P.prototype.generateRandomString = function(e) {
                    var t, i = [];
                    for (e = e || 6, t = 0; t < e; t++) i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random())));
                    return i.join("")
                }, P.prototype.computedStyle = function(e, t) {
                    var i;
                    if (!e || !t) return null;
                    if (e.currentStyle) i = e.currentStyle[t];
                    else try {
                        i = getComputedStyle(e, null).getPropertyValue(t)
                    } catch (e) {
                        i = "none"
                    }
                    return "width" === t && "auto" === i && (i = e.clientWidth), "" + i
                }, P.prototype.parseChatTime = function(e) {
                    var t = this.getDateFromUTC(e);
                    return (e = t.getHours()) < 10 && (e = "0" + e), (t = t.getMinutes()) < 10 && (t = "0" + t), e + ":" + t
                }, P.prototype.getDateFromUTC = function(e) {
                    return e instanceof Date ? e : (e = this.regDate.exec(e), new Date(Date.UTC(e[1], e[2] - 1, e[3], e[4], e[5], e[6], e[7])))
                }, P.prototype.rawEncode = function(e) {
                    return e.replace(this.decodedAmpRegex, this.encodedAmp).replace(this.decodedQuoteRegex, this.encodedQuote).replace(this.decodedAposRegex, this.encodedApos).replace(this.decodedLessRegex, this.encodedLess).replace(this.decodedGreatRegex, this.encodedGreat)
                }, P.prototype.rawDecode = function(e) {
                    return e.replace(this.encodedQuoteRegex, this.decodedQuote).replace(this.encodedAposRegex, this.decodedApos).replace(this.encodedLessRegex, this.decodedLess).replace(this.encodedGreatRegex, this.decodedGreat).replace(this.encodedAmpRegex, this.decodedAmp)
                }, P.prototype.getMilliseconds = function(e) {
                    return e instanceof Date || (e = this.regDate.exec(e), e = new Date(Date.UTC(e[1], e[2] - 1, e[3], e[4], e[5], e[6], e[7]))), e.getTime()
                }, P.prototype.capitalize = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
                }, P.prototype.getDepartmentStatus = function(e) {
                    var t, i, n = B.departments,
                        a = "",
                        o = !0,
                        r = "";
                    if ("any" === e) return {
                        status: "",
                        isOnline: !0,
                        name: ""
                    };
                    for (t = 0, i = n.length; t < i; t++)
                        if (n[t].did === e) {
                            o = "online" === n[t].st, a = n[t].st, r = n[t].n;
                            break
                        } return {
                        status: a,
                        isOnline: o,
                        name: r
                    }
                }, P.prototype.getElementsByClassName = function(e, t) {
                    var i, n, a, o;
                    if (e.getElementsByClassName) return e.getElementsByClassName(t);
                    for (o = [], i = 0, n = (a = e.getElementsByTagName("*")).length; i < n; i++) - 1 !== a[i].className.indexOf(t) && o.push(a[i]);
                    return o
                }, P.prototype.insertScript = function(e, t, i) {
                    var n = document.getElementsByTagName("script")[0],
                        a = document.createElement("script");
                    a.async = !0, a.src = e, a.charset = "UTF-8", a.setAttribute("crossorigin", "*"), t && (a.id = t), i ? n.parentNode.insertBefore(a, n) : n.parentNode.appendChild(a)
                }, P.prototype.isPlaceholderSupported = function() {
                    return "placeholder" in document.createElement("input")
                }, P.prototype.togglePlaceholderText = function(e, t, i) {
                    y.eventHandler.listen(e, "focus", function(e) {
                        this.value === t && (this.value = "")
                    }, i + "inputfocus"), y.eventHandler.listen(e, "blur", function() {
                        "" === this.value && (this.value = t)
                    }, i + "inputblur")
                }, P.prototype.redraw = function(e) {
                    var t = e.style.display;
                    e.style.display = "none !important", e.style.display = t + " !important"
                }, P.prototype.isTouchDevice = function() {
                    try {
                        return document.createEvent("TouchEvent"), !0
                    } catch (e) {
                        return !1
                    }
                }, P.prototype.shadeColor = function(e, t) {
                    var i, n, a = "#";
                    for ((e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), t = t || 0, n = 0; n < 6; n += 2) i = parseInt(e[n] + "" + e[n + 1], 16), a += ("00" + (i = Math.round(Math.min(Math.max(0, i + i * t), 255)).toString(16))).substring(i.length);
                    return a
                }, P.prototype.getContrast = function(e) {
                    return (e = e.replace("#", "")).length < 6 && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), 8388607.5 < parseInt(e, 16) ? "white" : "black"
                }, P.prototype.getElementsByTagName = function(e, t) {
                    for (var i = [], n = e.getElementsByTagName(t), a = 0; a < n.length; a++) i.push(n[a]);
                    return i
                }, P.prototype.chatElementInView = function(e) {
                    var t = y.viewHandler.chatContainer.getElementById("chatContainer");
                    return !!(e.offsetTop >= t.scrollTop && e.offsetTop <= t.scrollTop + t.offsetHeight && 0 !== e.clientWidth && 0 !== e.clientHeight)
                }, P.prototype.formatFileSize = function(e) {
                    var t = "Bytes KB MB GB TB PB EB ZB YB".split(" ");
                    if (!(e = parseInt(e, 10))) return "0Bytes";
                    for (var i = 1; i < t.length; i++)
                        if (e < Math.pow(1024, i)) return Math.round(e / Math.pow(1024, i - 1) * 100) / 100 + t[i - 1];
                    return e
                }, P.prototype.isFileInputSupported = function() {
                    if (p.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
                    var e = document.createElement("input");
                    return e.type = "file", !e.disabled
                }, P.prototype.escapeTemplateReplacement = function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i],
                            a = n.textReplace;
                        "string" == typeof a && (a = a.replace(/\$/g, "$$$")), e = e.replace(n.placeholder, a)
                    }
                    return e
                }, P.prototype.getGenericStyle = function(e) {
                    return ["outline                     : " + (e.outline ? e.outline : "none") + " !important; ", "visibility                  : " + (e.visibility ? e.visibility : "visible") + " !important; ", "resize                      : " + (e.resize ? e.resize : "none") + " !important; ", "box-shadow                  : " + (e.boxshadow ? e.boxshadow : "none") + " !important; ", "overflow                    : " + (e.overflow ? e.overflow : "visible") + " !important; ", "background                  : " + (e.background ? e.background : "none") + " !important; ", "opacity                     : " + (e.opacity ? e.opacity : "1") + " !important; ", "filter                      : alpha(opacity=" + (e.opacity ? 100 * e.opacity : "100") + ") !important; ", "-ms-filter                  : progid:DXImageTransform.Microsoft.Alpha(Opacity" + (e.opacity ? e.opacity : "1") + ") !important; ", "-moz-opacity                : " + (e.opacity ? e.opacity : "1") + " !important; ", "-khtml-opacity              : " + (e.opacity ? e.opacity : "1") + " !important; ", "top                         : " + (e.top ? e.top : "auto") + " !important; ", "right                       : " + (e.right ? e.right : "auto") + " !important; ", "bottom                      : " + (e.bottom ? e.bottom : "auto") + " !important; ", "left                        : " + (e.left ? e.left : "auto") + " !important; ", "position                    : " + (e.position ? e.position : "absolute") + " !important; ", "border                      : " + (e.border ? e.border : "0") + " !important; ", "min-height                  : " + (e.minheight ? e.minheight : "auto") + " !important; ", "min-width                   : " + (e.minwidth ? e.minwidth : "auto") + " !important; ", "max-height                  : " + (e.maxheight ? e.maxheight : "none") + " !important; ", "max-width                   : " + (e.maxwidth ? e.maxwidth : "none") + " !important; ", "padding                     : " + (e.padding ? e.padding : "0") + " !important; ", "margin                      : " + (e.margin ? e.margin : "0") + " !important; ", "-moz-transition-property    : " + (e.transition ? e.transition : "none") + " !important; ", "-webkit-transition-property : " + (e.transition ? e.transition : "none") + " !important; ", "-o-transition-property      : " + (e.transition ? e.transition : "none") + " !important; ", "transition-property         : " + (e.transition ? e.transition : "none") + " !important; ", "transform                   : " + (e.transform ? e.transform : "none") + " !important; ", "-webkit-transform           : " + (e.transform ? e.transform : "none") + " !important; ", "-ms-transform               : " + (e.transform ? e.transform : "none") + " !important; ", "width                       : " + (e.width ? e.width : "auto") + " !important; ", "height                      : " + (e.height ? e.height : "auto") + " !important; ", "display                     : " + (e.display ? e.display : "block") + " !important; ", "z-index                     : " + (e.zindex ? e.zindex : "none") + " !important; ", "background-color            : " + (e.backgroundcolor ? e.backgroundcolor : "transparent") + " !important; ", "cursor                      : " + (e.cursor ? e.cursor : "auto") + " !important; ", "float                       : " + (e.float ? e.float : "none") + " !important; ", "border-radius               : " + (e.borderRadius ? e.borderRadius : "unset") + " !important; ", "pointer-events              : auto !important"].join("").replace(/\s/gm, "")
                }, P.prototype.isGeneratedName = function(e) {
                    return this.regNameMach.test(e)
                }, P.prototype.getRotateStyling = function(e, t) {
                    var i = "rotate(" + e + "deg) translateZ(0px)";
                    return {
                        transform: i,
                        "-moz-transform": i,
                        "-webkit-transform": i,
                        "-o-transform": i,
                        "-ms-transform": i,
                        "transform-origin": t,
                        "-moz-transform-origin": t,
                        "-webkit-transform-origin": t,
                        "-o-transform-origin": t,
                        "-ms-transform-origin": t
                    }
                }, P.prototype.blurElements = function(e) {
                    for (var t = 0; t < e.length; t++) e[t].blur()
                }, P.prototype.transformGreetings = function(e) {
                    for (var t, i, n = /\[([^)]+)\]/, a = /\(([^)]+)\)/, o = /\[[^\]\(\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b){1}[^\]\(\)]+\)/i, r = "_blank", s = e; null !== (t = o.exec(s)) && (i = n.exec(t[0]), (t = a.exec(t[0]))[0].indexOf("(mailto:") || (r = "_top"), (s = s.replace(i[0] + t[0], '<a target="' + r + '" href="' + t[1] + '" class="link">' + i[1] + "</a>")) !== e););
                    return s
                }, P.prototype.transformLabel = function(n) {
                    var e;
                    return (e = n.match(/_[^_]+_/gi)) && 0 < e.length && e.forEach(function(e) {
                        var t = e.indexOf("_"),
                            i = e.lastIndexOf("_");
                        t = e.substring(0, t) + "<i>" + e.substring(t + 1, i) + "</i>" + e.substring(i + 1, e.length), n = n.replace(e, t)
                    }), (e = n.match(/\*[^*]+\*/gi)) && 0 < e.length && e.forEach(function(e) {
                        var t = e.indexOf("*"),
                            i = e.lastIndexOf("*");
                        t = e.substring(0, t) + "<b>" + e.substring(t + 1, i) + "</b>" + e.substring(i + 1, e.length), n = n.replace(e, t)
                    }), n
                }, P.prototype.getRandomName = function() {
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(52 * Math.random()) + this.generateRandomString() + "-" + (new Date).getTime()
                }, P.prototype.insertRandomTagsBeforeAndAfter = function(e, t, i) {
                    for (var n = Math.floor(3 * Math.random() + 1), a = 0; a < n; a++) {
                        var o = document.createElement(i);
                        o.id = M.getRandomName(), t.insertBefore(o, e)
                    }
                    for (n = Math.floor(3 * Math.random() + 1), a = 0; a < n; a++)(e = document.createElement(i)).id = M.getRandomName(), t.appendChild(e)
                }, P.prototype.getWebRTCToken = function(e, t, i) {
                    if (!this.hasWebRTC()) return i(!0);
                    var n = this;
                    e = {
                        video: e,
                        screen: t
                    }, i = i || function() {}, this.webrtcWin = h.open("", ""), y.socketManager.sendToConnector("getWebRTCToken", e, function(e, t) {
                        return e ? (n.webrtcWin.close(), i(!0, e)) : (n.webrtcWin.location.href = n.connectionUrl + "/v2/call?token=" + t.data.token, void i())
                    })
                }, P.prototype.rejectCall = function(e, t) {
                    var i = {
                        callId: e
                    };
                    t = t || function() {}, y.socketManager.sendToConnector("declineCall", i, function() {
                        t()
                    })
                }, P.prototype.disconnectWebRTC = function() {
                    this.webrtcWin && this.webrtcWin.close()
                }, P.prototype.debounce = function(n, a, o) {
                    var r;
                    return function() {
                        var e = this,
                            t = arguments,
                            i = o && !r;
                        clearTimeout(r), r = setTimeout(function() {
                            r = null, o || n.apply(e, t)
                        }, a), i && n.apply(e, t)
                    }
                }, P.prototype.isDescendent = function(e, t) {
                    for (var i = t.parentNode; null !== i;) {
                        if (i === e) return !0;
                        i = i.parentNode || null
                    }
                    return !1
                }, P.prototype.getTimeDifference = function(e, t) {
                    var i, n = new Date(e);
                    return endTimeFmt = new Date(t), diff = endTimeFmt.getTime() - n.getTime(), i = 36e5 <= diff ? (n = Math.round(diff / 36e5), "hours") : 6e4 <= diff ? (n = Math.round(diff / 6e4), "minutes") : (n = Math.round(diff / 1e3), "seconds"), y.languageParser.translate("chat", i, {
                        num: n
                    })
                }, P.prototype.hasClass = function(e, t) {
                    return e.classList ? e.classList.contains(t) : !!e.className.match(RegExp("(\\s|^)" + t + "(\\s|$)"))
                }, P.prototype.addClass = function(e, t) {
                    e.classList ? e.classList.add(t) : this.hasClass(e, t) || (e.className += " " + t)
                }, P.prototype.removeClass = function(e, t) {
                    e.classList ? e.classList.remove(t) : this.hasClass(e, t) && (e.className = e.className.replace(RegExp("(\\s|^)" + t + "(\\s|$)"), " "))
                }, P.prototype.updateFontStylesheet = function(e) {
                    var t, i;
                    e && (e !== document || E.isPopup) && (t = e.getElementById("lato-fonts"), i = e.body, M.supportsLatin(E.locale) && !t ? (e.querySelector("head").innerHTML += '<link id="lato-fonts" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext" rel="stylesheet"/>', this.addClass(i, "font-lato")) : !M.supportsLatin(E.locale) && t && (t.parentNode.removeChild(t), this.removeClass(i, "font-lato")))
                }, P.prototype.updateFonts = function() {
                    if (y.viewHandler && y.viewHandler.iframeContainer && y.viewHandler.iframeContainer.childViews)
                        for (var e = y.viewHandler.iframeContainer.childViews, t = 0; t < e.length; t++) {
                            var i = e[t];
                            i.isIframe && this.updateFontStylesheet(i.documentRef)
                        }
                }, P.prototype.supportsLatin = function(e) {
                    return -1 < "cat cs da de en et es fi fil fr hr hu id it lv lt ms nl no pl pt pt_br ro sk sl sr_cs sq sv tr vi".split(" ").indexOf(e)
                }, P.prototype.hasWebRTC = function() {
                    var e = !0;
                    return k.isIE && (e = !1), e
                }, P.prototype.h = function(e) {
                    var t = 0;
                    if (0 === e.length) return t;
                    for (var i = 0; i < e.length; i++) t = (t = (t << 5) - t + e.charCodeAt(i)) & t;
                    return t
                }, Inheritance_Manager = {
                    extend: function(e, t) {
                        function i() {}
                        i.prototype = t.prototype, e.prototype = new i, (e.prototype.constructor = e).prototype.parent = t.prototype, e.baseConstructor = t, e.superClass = t.prototype
                    }
                };
                var M = new P;
                "undefined" != typeof module && module.exports && (module.exports.Utils = P);

                function A() {
                    this.versionSearchString = this.browserObj = null, this.init()
                }
                var F = [{
                        string: p.userAgent,
                        subString: "Edge",
                        identity: "explorer",
                        versionSearch: "Edge"
                    }, {
                        string: p.userAgent,
                        subString: "Trident/7.0",
                        identity: "explorer",
                        versionSearch: "rv"
                    }, {
                        string: p.userAgent,
                        subString: "(Opera|OPR)",
                        identity: "opera",
                        versionSearch: "Version"
                    }, {
                        string: p.userAgent,
                        subString: "Chrome",
                        identity: "chrome",
                        versionSearch: "Chrome"
                    }, {
                        string: p.userAgent,
                        subString: "Mobile Safari",
                        identity: "android",
                        versionSearch: "Version"
                    }, {
                        string: p.userAgent,
                        subString: "Firefox",
                        identity: "firefox",
                        versionSearch: "Firefox"
                    }, {
                        string: p.userAgent,
                        subString: "MSIE",
                        identity: "explorer",
                        versionSearch: "MSIE"
                    }, {
                        string: p.userAgent,
                        subString: "IEMobile",
                        identity: "explorer",
                        versionSearch: "IEMobile"
                    }, {
                        string: p.userAgent,
                        subString: "Safari",
                        identity: "safari",
                        versionSearch: "Version"
                    }, {
                        string: p.userAgent,
                        subString: "Gecko",
                        identity: "mozilla",
                        versionSearch: "rv"
                    }],
                    z = [{
                        string: p.userAgent,
                        subString: "Windows Phone",
                        identity: "windows_phone"
                    }, {
                        string: p.platform,
                        subString: "Win",
                        identity: "windows"
                    }, {
                        string: p.platform,
                        subString: "Mac",
                        identity: "mac"
                    }, {
                        string: p.userAgent,
                        subString: "iPhone",
                        identity: "iphone"
                    }, {
                        string: p.userAgent,
                        subString: "Android",
                        identity: "android"
                    }, {
                        string: p.platform,
                        subString: "Linux",
                        identity: "linux"
                    }, {
                        string: p.userAgent,
                        subString: "iPad",
                        identity: "ipad"
                    }],
                    L = {
                        google: "q",
                        yahoo: "p",
                        baidu: "wd",
                        yandex: "text",
                        bing: "q",
                        soso: "w",
                        ask: "q",
                        aol: "q",
                        sogou: "query",
                        mywebsearch: "searchfor",
                        youdao: "q",
                        lycos: "q",
                        infospace: "q",
                        blekko: "q",
                        info: "q",
                        dogpile: "q",
                        duckduckgo: "q",
                        webcrawler: "q"
                    },
                    O = {
                        src: "about:blank",
                        border: "0",
                        cellspacing: "0",
                        frameBorder: "0",
                        scrolling: "no",
                        horizontalscrolling: "no",
                        verticalscrolling: "no",
                        allowTransparency: "true",
                        title: "chat widget"
                    },
                    D = {
                        nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
                        blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
                        chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
                        ie: [/(IEMobile)[ \/](\d+)\.(\d+)/],
                        firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
                        operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
                        opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/],
                        safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
                        uc: [/(UCBrowser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
                        "android2.3": [/(Android) 2\.3(?:[.\-]([a-z0-9]+))?/],
                        android2: [/(Android) 2\.(\d+)(?:[.\-]([a-z0-9]+))?/],
                        android: [/Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; WOWMobile (.+) Build/, /Android[\- ][\d]+\.[\d]+\-update1; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}\-[A-Za-z]{0,2};(.+) Build/, /Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[\- ][\d]+\.[\d]+; (.+) Build/]
                    };
                A.prototype.init = function() {
                    var e = this.getBrowserVersion();
                    k.mobileBrowserName = this.getMobileBrowser(), k.version = e.version, k.vendor = e.vendor, k.os = e.os, k.plugins = e.plugins, k.html5audio = {
                        mp3: this.hasHtmlAudio("mp3"),
                        ogg: this.hasHtmlAudio("ogg"),
                        wav: this.hasHtmlAudio("wav")
                    }, k.html5audio.supported = k.html5audio.mp3 || k.html5audio.ogg || k.html5audio.wav || k.html5audio.aac, k.isPlaceholderSupported = M.isPlaceholderSupported(), "explorer" === k.vendor && (k.isIE = !0, 6 === k.version ? k.isIE6 = !0 : 8 <= k.version && k.version < 9 && (k.isIE8 = !0))
                }, A.prototype.getBrowserVersion = function() {
                    return this.browserObj ? this.browserObj : this.browserObj = {
                        vendor: this.searchString(F) || "other",
                        version: this.searchVersion(p.userAgent) || this.searchVersion(p.appVersion) || "other",
                        os: this.searchString(z) || "other",
                        plugins: this.getPlugins()
                    }
                }, A.prototype.getPlugins = function() {
                    for (var e = [], t = 0, i = p.plugins.length; t < i; t++) p.plugins[t].name && e.push(p.plugins[t].name);
                    return e
                }, A.prototype.searchString = function(e) {
                    for (var t, i, n = 0; n < e.length; n++)
                        if (t = e[n].string, i = RegExp(e[n].subString), this.versionSearchString = e[n].versionSearch || e[n].identity, i.test(t)) return e[n].identity
                }, A.prototype.searchVersion = function(e) {
                    var t = e.indexOf(this.versionSearchString);
                    if (-1 !== t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
                }, A.prototype.getMobileBrowser = function() {
                    for (var e = !1, t = p.userAgent, i = Object.keys(D), n = 0; !e && n < i.length;) {
                        for (var a = i[n], o = 0; o < D[a].length; o++)
                            if (t.match(D[a][o])) {
                                e = a;
                                break
                            } n++
                    }
                    return e
                }, A.prototype.getReferredSearchEngine = function() {
                    var e, t, i = "";
                    if (document.referrer && (t = this.getHostname(document.referrer)))
                        for (e in t = t.toLowerCase(), L)
                            if (0 <= t.indexOf(e)) {
                                queryString = this.getQuerystring(document.referrer, L[e]), "blekko" === e && "" === queryString && (queryString = this.getQuerystring(document.referrer.replace("/ws/", "/?q="), "q")), i = e;
                                break
                            } return i
                }, A.prototype.getQuerystring = function(e, t) {
                    var i;
                    return t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), null !== (i = RegExp("[\\?&]" + t + "=([^&#]*)").exec(e)) && M.isArray(i) && !(i.length < 2) && i[1] ? unescape(i[1].replace(/\+/g, " ")) : null
                }, A.prototype.getHostname = function(e) {
                    return null !== (e = e.match(/^(?:f|ht)tp(?:s)?:\/\/([^/]+)/im)) && M.isArray(e) && !(e.length < 2) && e[1] ? e[1].toString() : null
                }, A.prototype.hasHtmlAudio = function(e) {
                    var t = document.createElement("audio");
                    try {
                        if (!t.canPlayType || "no" === t.canPlayType("audio/" + e) || "" === t.canPlayType("audio/" + e)) return !1
                    } catch (e) {
                        return !1
                    }
                    return !0
                }, y.browserData = new A;

                function W() {
                    this.unloading = !1
                }
                W.prototype.logIncident = function(e, t) {
                    var i = g.getBrowserData();
                    i.visitorId = T.visitorId || "", i.message = e, i.data = t, this.log("warning", i)
                }, W.prototype.log = function(e, t) {
                    var i;
                    t && e && (t.uiVersion = "v3", t.buildVersion = "694", t.buildCommit = "a933348f4b50eb52d7799ae7c30e9cfd6a1b30e2", i = {
                        type: e,
                        data: t
                    }, this.postForm("log", JSON.stringify(i)))
                }, W.prototype.postForm = function(e, t) {
                    var i, n, a = document.createElement("iframe");
                    if (!document.body) return !1;
                    a.src = "about:blank", a.style.cssText = ";display:none !important;", a.title = "chat widget logging", document.body.appendChild(a);
                    try {
                        i = M.getDocument(a)
                    } catch (e) {
                        return !1
                    }
                    k.isIE && (i.open(), i.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><iframe name="form-receiver" id="form-receiver"></iframe></body></html>'), i.close()), (a = i.createElement("form")).method = "POST", a.action = "https://va.tawk.to/" + e, a.enctype = "application/x-www-form-urlencoded", a.acceptCharset = "UTF-8", (n = i.createElement("input")).type = "text", n.name = "logData", n.value = t, a.appendChild(n), k.isIE && (a.target = "form-receiver"), i.body.appendChild(a), a.submit(), a.parentNode.removeChild(a)
                }, h.onbeforeunload = function() {
                    this.unloading = !0
                }, h.onunload = function() {
                    this.unloading = !0
                };

                function U() {
                    this.originalErrorHandlerFn = h.onerror
                }
                U.prototype.getBrowserData = function() {
                    var e = y.browserData.getBrowserVersion();
                    return {
                        site: h.location.href,
                        browser: e.vendor || "",
                        version: e.version || "",
                        os: e.os || "",
                        plugins: e.plugins || ""
                    }
                }, U.prototype.handleError = function(e, t, i, n, a) {
                    var o;
                    return !(!(t && i || "Script error." !== e && "Script error" !== e) || "string" != typeof t || -1 === t.indexOf("tawk.to") && -1 === t.indexOf("tawk.js")) && ((o = this.getBrowserData()).visitorId = T.visitorId || "", o.message = e || "", o.file = t || "", o.line = i || "", o.column = n || "", o.stack = a ? JSON.stringify(a) : "", o.stack = o.stack.replace(M.regLineBreaks, ""), y.loggingHandler.log("error", o), !0)
                }, g = new U, h.onerror = function() {
                    var e;
                    return !!g && (e = g.handleError.apply(this, arguments), "function" == typeof g.originalErrorHandlerFn ? g.originalErrorHandlerFn.apply(this, arguments) : e)
                };

                function V() {
                    var t = this;
                    if (this.events = {}, this.supportsPassive = !1, h.addEventListener) try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t.supportsPassive = !0
                            }
                        });
                        h.addEventListener("testPassive", null, e), h.removeEventListener("testPassive", null, e)
                    } catch (e) {
                        t.supportsPassive = !1
                    }
                }
                V.prototype.attachEvent = function(t, e, i) {
                    function n(e) {
                        i.call(t, a.getEvent(e))
                    }
                    var a = this;
                    return t.attachEvent("on" + e, n), n
                }, V.prototype.listen = function(e, t, i, n) {
                    var a;
                    if (n) {
                        if (this.events[n] && (a = this.events[n], this.events[n] = null, this.removeEventHandler(a.element, a.eventName, a.eventListener)), e.addEventListener) e.addEventListener(t, i, !!this.supportsPassive && {
                            passive: !1
                        });
                        else {
                            if (!document.attachEvent) return null;
                            i = this.attachEvent(e, t, i)
                        }
                        return this.events[n] = {
                            element: e,
                            eventName: t,
                            eventListener: i
                        }, i
                    }
                }, V.prototype.cancelEvent = function(e) {
                    document.attachEvent && (e = this.getEvent(e)), e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }, V.prototype.removeEventHandler = function(e, t, i) {
                    document.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i)
                }, V.prototype.getEvent = function(e) {
                    var t = e || h.event;
                    if (!t)
                        for (e = this.getEvent.caller; e && (!(t = e.arguments[0]) || Event != t.constructor);) e = e.caller;
                    return t
                }, V.prototype.clearEvents = function() {
                    var t = this;
                    Object.keys(this.events).forEach(function(e) {
                        e = t.events[e], t.removeEventHandler(e.element, e.eventName, e.eventListener)
                    }), this.events = {}
                }, V.prototype.getTargetElement = function(e) {
                    return document.attachEvent && (e = this.getEvent(e)), 3 === (e = e.target || e.srcElement).nodeType && (e = e.parentNode), e
                };

                function j() {}
                var q = {
                    keypressTimer: 0,
                    previousValue: 0,
                    initElement: function(t, i) {
                        var n = this;
                        this.previousValue = "", y.eventHandler.listen(t, "focus", function(e) {
                            n.startWatching(e, t, i)
                        }, t.id + "focus"), y.eventHandler.listen(t, "blur", function(e) {
                            n.stopWatching()
                        }, t.id + "blur"), y.eventHandler.listen(t, "keyup", function(e) {
                            n.detectChange(e, t, i)
                        }, t.id + "keyup")
                    },
                    startWatching: function(e, t, i) {
                        var n = this;
                        this.stopWatching(), this.keypressTimer = setInterval(function() {
                            n.detectChange(e, t, i)
                        }, 100)
                    },
                    stopWatching: function() {
                        0 != this.keypressTimer && (clearInterval(this.keypressTimer), this.keypressTimer = 0)
                    },
                    detectChange: function(e, t, i) {
                        if (t = t.value || "", this.previousValue === t) return !1;
                        i(e, t), this.previousValue = t
                    }
                };
                j.prototype.xhrRequest = function(e, t, i) {
                    var n = new XMLHttpRequest;
                    return t = t || {}, n.onerror = i, n.open("POST", e, !0), n.withCredentials = !0, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
                        n.passed || 4 !== n.readyState || (n.passed = !0, i(null, n.responseText))
                    }, n.send(M.createQueryString(t)), {
                        type: "xhr",
                        req: n
                    }
                }, j.prototype.abort = function(e) {
                    e && "xhr" === e.type && e.req.abort()
                };

                function G() {
                    this.isCookieEnabled = this.checkCookieEnabled(), this.alphaNumericReg = /[^0-9a-zA-Z]/g, this.hasSessionStorage = this.isCookieEnabled && !!h.sessionStorage, this.checkLocalStorageUsage(), this.clearOldCookies("TawkCookie")
                }
                var Y = new j;
                G.prototype.checkLocalStorageUsage = function() {
                    try {
                        localStorage.setItem("exist_test", "yes"), localStorage.removeItem("exist_test"), this.hasLocalStorage = !0
                    } catch (e) {
                        this.hasLocalStorage = !1
                    }
                }, G.prototype.setHTTPCookie = function(e, t, i, n) {
                    var a = "";
                    i || ((i = new Date).setTime(i.getTime() + 15552e6), a = "; expires=" + i.toGMTString()), document.cookie = e + "=" + t + a + "; path=/" + (n ? ";domain=" + n : "")
                }, G.prototype.getHTTPCookie = function(e) {
                    var t, i, n = [],
                        a = e + "=",
                        o = document.cookie.split(";");
                    for (e = 0, t = o.length; e < t; e++) {
                        for (i = o[e];
                            " " === i.charAt(0);) i = i.substring(1, i.length);
                        0 === i.indexOf(a) && n.push(i.substring(a.length, i.length))
                    }
                    return n
                }, G.prototype.setSessionStorage = function(e, t) {
                    if (this.hasSessionStorage && sessionStorage.setItem) try {
                        sessionStorage.setItem(e, t)
                    } catch (e) {}
                }, G.prototype.getSessionStorage = function(e) {
                    return this.hasSessionStorage && sessionStorage.getItem ? sessionStorage.getItem(e) : null
                }, G.prototype.setLocalStorage = function(e, t) {
                    h.localStorage.setItem(e, t)
                }, G.prototype.getLocalStorage = function(e) {
                    return h.localStorage.getItem(e)
                }, G.prototype.setWindowName = function(e) {
                    h.name && 0 !== h.name.indexOf("TawkWindowName-") || (h.name = "TawkWindowName-" + e)
                }, G.prototype.getWindowName = function() {
                    var e, t, i;
                    if (!h.name) return null;
                    if (0 === h.name.indexOf("TawkWindowName-")) return h.name.substring(15, 21);
                    if ((t = (i = h.name.substring(0, 5)).length) < 6)
                        for (e = 0, t = 6 - t; e < t; e++) i += "0";
                    return i.replace(/[^0-9a-zA-Z]/g, "0").replace(" ", "0")
                }, G.prototype.handleWindowId = function() {
                    var e = this.getSessionStorage("TawkWindowName");
                    "null" === e && (e = null), e || this.hasSessionStorage || (e = this.getWindowName()), "null" === e && (e = null), e || (e = M.generateRandomString(), this.hasSessionStorage ? this.setSessionStorage("TawkWindowName", e) : this.setWindowName(e)), k.windowId = e
                }, G.prototype.storeUUID = function() {
                    var i = this;
                    B.transferedSession || T.uuids && 0 < T.uuids.length && T.uuids.forEach(function(e) {
                        var t = (e.isExact ? "e::" : "p::") + e.domain + "::" + e.uuid + "::" + T.uuidVer;
                        i.isCookieEnabled && i.setHTTPCookie("__tawkuuid", t, !1, e.domain)
                    }), this.handleWindowId(), this.storeSessionInformation()
                }, G.prototype.getSessionInformation = function() {
                    var e;
                    return this.sessionInformation && (e = this.sessionInformation), this.hasLocalStorage && (e = this.getLocalStorage("twk_" + I.pageId)), e = e || this.getHTTPCookie("Tawk_" + I.pageId)[0], this.parseSessionInformation(e)
                }, G.prototype.storeSessionInformation = function(e, t) {
                    var i, n = this.getSessionInformation();
                    e && !B.visitorSocketServer || (i = e ? B.visitorSocketServer + "::" + y.viewHandler.indicator.unansweredMessages : (i = n[1] || 0, y.main.previousSessionKey !== B.sessionKey && (i = 0), B.visitorSocketServer + "::" + i), t ? i += "::cf" : 3 === n.length && (i += "::" + n[2]), this.hasLocalStorage ? (this.setLocalStorage("twk_" + I.pageId, i), this.clearOldCookies("Tawk_" + I.pageId)) : this.setHTTPCookie("Tawk_" + I.pageId, i, !1), this.sessionInformation = i)
                }, G.prototype.parseSessionInformation = function(e) {
                    var t = [];
                    return e && ((t = e.split("::")).length <= 1 && (t = e.split("||"))), t
                }, G.prototype.clearOldCookies = function(e) {
                    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                }, G.prototype.checkCookieEnabled = function() {
                    var e = !!p.cookieEnabled;
                    return void 0 !== p.cookieEnabled || e || (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie")), e
                }, G.prototype.getStoredUUID = function() {
                    var e;
                    return this.isCookieEnabled && (e = this.getHTTPCookie("__tawkuuid")), e && 0 < e.length ? e : []
                };

                function X(e) {
                    var t;
                    "symbian" === k.mobileBrowserName ? this.play = function() {} : ("safari" === k.mobileBrowserName ? ((t = document.createElement("audio")).src = e, t.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;", document.body.appendChild(t)) : t = new Audio(e), t.addEventListener("timeupdate", function() {
                        .2 <= t.currentTime && t.pause()
                    }, !1), t.load(), this.soundEl = t, this.play = function() {
                        try {
                            t.currentTime = 0, t.autoplay = !0, t.load(), t.play()
                        } catch (e) {}
                    })
                }

                function Q(e, t, i) {
                    this.sourcePath = e, this.buffer = null, this.name = t, this.audioPlayer = i, this.source = null, this.volume = 1, this.play = function() {
                        var e;
                        this.buffer && ((e = this.audioPlayer.audioContext.createGain()).gain.value = this.volume, this.source = this.audioPlayer.audioContext.createBufferSource(), this.source.buffer = this.buffer, this.source.connect(e), e.connect(this.audioPlayer.audioContext.destination), this.source.start(0))
                    }, this.loadBuffer = function() {
                        var e = new XMLHttpRequest,
                            t = this;
                        e.open("GET", t.sourcePath, !0), e.responseType = "arraybuffer", e.onload = function() {
                            t.audioPlayer.audioContext.decodeAudioData(e.response, function(e) {
                                e && (t.buffer = e, t.audioPlayer.isReadyForInit || (t.audioPlayer.eventUsedForInit = t.name, t.audioPlayer.isReadyForInit = !0))
                            }, function(e) {
                                throw Error(e)
                            })
                        }, e.onerror = function(e) {
                            throw Error("BufferLoader: XHR error for " + t.sourcePath)
                        }, e.send()
                    }, this.loadBuffer()
                }

                function K() {
                    this.sounds = {}, this.audioContext = null, this.isReadyForInit = !1, this.eventUsedForInit = null
                }
                var $ = new G;
                K.prototype.initAudioPlayer = function() {
                    var e, t, i, n = {},
                        a = this;
                    if (k.html5audio.supported) {
                        for (e in this.audioContext || /Firefox/.test(p.userAgent) || "undefined" == typeof AudioBuffer || void 0 === h.AudioContext && void 0 === h.webkitAudioContext || (h.AudioContext = h.AudioContext || h.webkitAudioContext, this.audioContext = new h.AudioContext), k.html5audio.mp3 ? n = N : k.html5audio.wav ? n = H : k.html5audio.ogg && (n = R), n) this.sounds[e] = this.audioContext ? new Q(n[e], e, this) : new X(n[e]);
                        this.audioContext && (i = function() {
                            a.isReadyForInit && a.eventUsedForInit && !a.touchstartInited && (a.sounds[a.eventUsedForInit].volume = 0, a.sounds[a.eventUsedForInit].play(), a.sounds[a.eventUsedForInit].source.stop(0), a.sounds[a.eventUsedForInit].volume = 1, h && "function" == typeof h.removeEventListener && h.removeEventListener("touchstart", i, !1), t && "function" == typeof t.removeEventListener && t.removeEventListener("touchstart", i, !1), a.touchstartInited = !0)
                        }, k.mobileBrowserName && "ontouchstart" in h && (e = y.viewHandler.chatContainer.elementReferrer, E.isPopup || (t = e.contentWindow ? e.contentWindow : e.contentDocument.defaultView), t ? t.addEventListener("touchstart", i, !1) : e.addEventListener("touchstart", i, !1), h.addEventListener("touchstart", i, !1)))
                    }
                }, K.prototype.play = function(e) {
                    d.disableSound || E.soundOn() && this.sounds[e] && this.sounds[e].play()
                };

                function J() {
                    var i = this;
                    this.uploads = {}, y.eventEmitter.on("fileUploadProgress", function(e) {
                        y.viewHandler.updateFileProgress(e)
                    }), y.eventEmitter.on("fileUploadFinished", function(e) {
                        i.uploads[e.handle] && (delete i.uploads[e.handle], y.viewHandler.fileUploaded(e.handle), y.chatHandler.sendFileMessage(e))
                    }), y.eventEmitter.on("fileUploadError", function(e) {
                        var t = i.uploads[e.handle];
                        t && y.viewHandler.handleUploadError(null, t, e.handle)
                    })
                }
                J.prototype.getUploadHandler = function(e) {
                    var t = "https://upload.tawk.to/upload/handle?_t=" + (new Date).getTime(),
                        i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        4 === this.readyState && (200 <= this.status && this.status < 400 ? e(JSON.parse(this.responseText)) : e(!0))
                    }, i.open("GET", t), i.onerror = function() {
                        e(!0)
                    }, i.send(), i = null
                }, J.prototype.uploadFile = function(e, t, i, n) {
                    var a = "https://upload.tawk.to/upload/visitor-chat/visitor?handle=" + e + "&visitorSessionId=" + B.sessionKey;
                    if (this.uploads[e] = i, 52428800 < t.size) return n(!0, "limit50");
                    (e = new FormData).append("upload", t, t.name || t.filename), (t = new XMLHttpRequest).open("POST", a), t.onload = function() {
                        return n(JSON.parse(this.responseText))
                    }, t.onerror = function() {
                        return n(!0)
                    }, t.send(e)
                };

                function Z(e) {
                    var t = e.getElementsByTagName("head")[0],
                        i = e.createElement("script");
                    e = e.createElement("link"), i.type = "text/javascript", i.src = "https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js", i.async = !0, e.type = "text/css", e.rel = "stylesheet", e.href = "https://cdn.jsdelivr.net/emojione/2.2.7/assets/css/emojione.min.css", t.appendChild(e), t.appendChild(i), se()
                }

                function ee() {
                    this.chatWindowStates = {
                        min: !0,
                        max: !0
                    }, this.selfOrigin = this.socket = null, this.forceDisconnected = this.banned = this.ready = this.disconnect = !1, this.clearRegisterRetryTimeout = null
                }
                var te, ie, ne, ae, oe = 0,
                    re = {
                        people: {
                            header: ":smiley:",
                            content: ":grinning: :grin: :joy: :rofl: :smiley: :smile: :sweat_smile: :laughing: :wink: :blush: :yum: :sunglasses: :heart_eyes: :kissing_heart: :kissing: :kissing_smiling_eyes: :kissing_closed_eyes: :relaxed: :slight_smile: :hugging: :thinking: :neutral_face: :expressionless: :no_mouth: :rolling_eyes: :smirk: :persevere: :disappointed_relieved: :open_mouth: :zipper_mouth: :hushed: :sleepy: :tired_face: :sleeping: :relieved: :nerd: :stuck_out_tongue: :stuck_out_tongue_winking_eye: :stuck_out_tongue_closed_eyes: :drooling_face: :unamused: :sweat: :pensive: :confused: :upside_down: :money_mouth: :astonished: :frowning2: :slight_frown: :confounded: :disappointed: :worried: :triumph: :cry: :sob: :frowning: :anguished: :fearful: :weary: :grimacing: :cold_sweat: :scream: :flushed: :dizzy_face: :rage: :angry: :innocent: :cowboy: :clown: :lying_face: :mask: :thermometer_face: :head_bandage: :nauseated_face: :sneezing_face: :smiling_imp: :imp: :japanese_ogre: :japanese_goblin: :skull: :ghost: :alien: :robot: :poop: :smiley_cat: :smile_cat: :joy_cat: :heart_eyes_cat: :smirk_cat: :kissing_cat: :scream_cat: :crying_cat_face: :pouting_cat: :boy: :boy_tone1: :boy_tone2: :boy_tone3: :boy_tone4: :boy_tone5: :girl: :girl_tone1: :girl_tone2: :girl_tone3: :girl_tone4: :girl_tone5: :man: :man_tone1: :man_tone2: :man_tone3: :man_tone4: :man_tone5: :woman: :woman_tone1: :woman_tone2: :woman_tone3: :woman_tone4: :woman_tone5: :older_man: :older_man_tone1: :older_man_tone2: :older_man_tone3: :older_man_tone4: :older_man_tone5: :older_woman: :older_woman_tone1: :older_woman_tone2: :older_woman_tone3: :older_woman_tone4: :older_woman_tone5: :baby: :baby_tone1: :baby_tone2: :baby_tone3: :baby_tone4: :baby_tone5: :angel: :angel_tone1: :angel_tone2: :angel_tone3: :angel_tone4: :angel_tone5: :cop: :cop_tone1: :cop_tone2: :cop_tone3: :cop_tone4: :cop_tone5: :spy: :spy_tone1: :spy_tone2: :spy_tone3: :spy_tone4: :spy_tone5: :guardsman: :guardsman_tone1: :guardsman_tone2: :guardsman_tone3: :guardsman_tone4: :guardsman_tone5: :construction_worker: :construction_worker_tone1: :construction_worker_tone2: :construction_worker_tone3: :construction_worker_tone4: :construction_worker_tone5: :man_with_turban: :man_with_turban_tone1: :man_with_turban_tone2: :man_with_turban_tone3: :man_with_turban_tone4: :man_with_turban_tone5: :person_with_blond_hair: :person_with_blond_hair_tone1: :person_with_blond_hair_tone2: :person_with_blond_hair_tone3: :person_with_blond_hair_tone4: :person_with_blond_hair_tone5: :santa: :santa_tone1: :santa_tone2: :santa_tone3: :santa_tone4: :santa_tone5: :mrs_claus: :mrs_claus_tone1: :mrs_claus_tone2: :mrs_claus_tone3: :mrs_claus_tone4: :mrs_claus_tone5: :princess: :princess_tone1: :princess_tone2: :princess_tone3: :princess_tone4: :princess_tone5: :prince: :prince_tone1: :prince_tone2: :prince_tone3: :prince_tone4: :prince_tone5: :bride_with_veil: :bride_with_veil_tone1: :bride_with_veil_tone2: :bride_with_veil_tone3: :bride_with_veil_tone4: :bride_with_veil_tone5: :man_in_tuxedo: :man_in_tuxedo_tone1: :man_in_tuxedo_tone2: :man_in_tuxedo_tone3: :man_in_tuxedo_tone4: :man_in_tuxedo_tone5: :pregnant_woman: :pregnant_woman_tone1: :pregnant_woman_tone2: :pregnant_woman_tone3: :pregnant_woman_tone4: :pregnant_woman_tone5: :man_with_gua_pi_mao: :man_with_gua_pi_mao_tone1: :man_with_gua_pi_mao_tone2: :man_with_gua_pi_mao_tone3: :man_with_gua_pi_mao_tone4: :man_with_gua_pi_mao_tone5: :person_frowning: :person_frowning_tone1: :person_frowning_tone2: :person_frowning_tone3: :person_frowning_tone4: :person_frowning_tone5: :person_with_pouting_face: :person_with_pouting_face_tone1: :person_with_pouting_face_tone2: :person_with_pouting_face_tone3: :person_with_pouting_face_tone4: :person_with_pouting_face_tone5: :no_good: :no_good_tone1: :no_good_tone2: :no_good_tone3: :no_good_tone4: :no_good_tone5: :ok_woman: :ok_woman_tone1: :ok_woman_tone2: :ok_woman_tone3: :ok_woman_tone4: :ok_woman_tone5: :information_desk_person: :information_desk_person_tone1: :information_desk_person_tone2: :information_desk_person_tone3: :information_desk_person_tone4: :information_desk_person_tone5: :raising_hand: :raising_hand_tone1: :raising_hand_tone2: :raising_hand_tone3: :raising_hand_tone4: :raising_hand_tone5: :bow: :bow_tone1: :bow_tone2: :bow_tone3: :bow_tone4: :bow_tone5: :face_palm: :face_palm_tone1: :face_palm_tone2: :face_palm_tone3: :face_palm_tone4: :face_palm_tone5: :shrug: :shrug_tone1: :shrug_tone2: :shrug_tone3: :shrug_tone4: :shrug_tone5: :massage: :massage_tone1: :massage_tone2: :massage_tone3: :massage_tone4: :massage_tone5: :haircut: :haircut_tone1: :haircut_tone2: :haircut_tone3: :haircut_tone4: :haircut_tone5: :walking: :walking_tone1: :walking_tone2: :walking_tone3: :walking_tone4: :walking_tone5: :runner: :runner_tone1: :runner_tone2: :runner_tone3: :runner_tone4: :runner_tone5: :dancer: :dancer_tone1: :dancer_tone2: :dancer_tone3: :dancer_tone4: :dancer_tone5: :man_dancing: :man_dancing_tone1: :man_dancing_tone2: :man_dancing_tone3: :man_dancing_tone4: :man_dancing_tone5: :dancers: :speaking_head: :bust_in_silhouette: :busts_in_silhouette: :couple: :two_men_holding_hands: :two_women_holding_hands: :couplekiss: :kiss_mm: :kiss_ww: :couple_with_heart: :couple_mm: :couple_ww: :family: :family_mwg: :family_mwgb: :family_mwbb: :family_mwgg: :family_mmb: :family_mmg: :family_mmgb: :family_mmbb: :family_mmgg: :family_wwb: :family_wwg: :family_wwgb: :family_wwbb: :family_wwgg: :muscle: :muscle_tone1: :muscle_tone2: :muscle_tone3: :muscle_tone4: :muscle_tone5: :selfie: :selfie_tone1: :selfie_tone2: :selfie_tone3: :selfie_tone4: :selfie_tone5: :point_left: :point_left_tone1: :point_left_tone2: :point_left_tone3: :point_left_tone4: :point_left_tone5: :point_right: :point_right_tone1: :point_right_tone2: :point_right_tone3: :point_right_tone4: :point_right_tone5: :point_up: :point_up_tone1: :point_up_tone2: :point_up_tone3: :point_up_tone4: :point_up_tone5: :point_up_2: :point_up_2_tone1: :point_up_2_tone2: :point_up_2_tone3: :point_up_2_tone4: :point_up_2_tone5: :middle_finger: :middle_finger_tone1: :middle_finger_tone2: :middle_finger_tone3: :middle_finger_tone4: :middle_finger_tone5: :point_down: :point_down_tone1: :point_down_tone2: :point_down_tone3: :point_down_tone4: :point_down_tone5: :v: :v_tone1: :v_tone2: :v_tone3: :v_tone4: :v_tone5: :fingers_crossed: :fingers_crossed_tone1: :fingers_crossed_tone2: :fingers_crossed_tone3: :fingers_crossed_tone4: :fingers_crossed_tone5: :vulcan: :vulcan_tone1: :vulcan_tone2: :vulcan_tone3: :vulcan_tone4: :vulcan_tone5: :metal: :metal_tone1: :metal_tone2: :metal_tone3: :metal_tone4: :metal_tone5: :call_me: :call_me_tone1: :call_me_tone2: :call_me_tone3: :call_me_tone4: :call_me_tone5: :hand_splayed: :hand_splayed_tone1: :hand_splayed_tone2: :hand_splayed_tone3: :hand_splayed_tone4: :hand_splayed_tone5: :raised_hand: :raised_hand_tone1: :raised_hand_tone2: :raised_hand_tone3: :raised_hand_tone4: :raised_hand_tone5: :ok_hand: :ok_hand_tone1: :ok_hand_tone2: :ok_hand_tone3: :ok_hand_tone4: :ok_hand_tone5: :thumbsup: :thumbsup_tone1: :thumbsup_tone2: :thumbsup_tone3: :thumbsup_tone4: :thumbsup_tone5: :thumbsdown: :thumbsdown_tone1: :thumbsdown_tone2: :thumbsdown_tone3: :thumbsdown_tone4: :thumbsdown_tone5: :fist: :fist_tone1: :fist_tone2: :fist_tone3: :fist_tone4: :fist_tone5: :punch: :punch_tone1: :punch_tone2: :punch_tone3: :punch_tone4: :punch_tone5: :left_facing_fist: :left_facing_fist_tone1: :left_facing_fist_tone2: :left_facing_fist_tone3: :left_facing_fist_tone4: :left_facing_fist_tone5: :right_facing_fist: :right_facing_fist_tone1: :right_facing_fist_tone2: :right_facing_fist_tone3: :right_facing_fist_tone4: :right_facing_fist_tone5: :raised_back_of_hand: :raised_back_of_hand_tone1: :raised_back_of_hand_tone2: :raised_back_of_hand_tone3: :raised_back_of_hand_tone4: :raised_back_of_hand_tone5: :wave: :wave_tone1: :wave_tone2: :wave_tone3: :wave_tone4: :wave_tone5: :clap: :clap_tone1: :clap_tone2: :clap_tone3: :clap_tone4: :clap_tone5: :writing_hand: :writing_hand_tone1: :writing_hand_tone2: :writing_hand_tone3: :writing_hand_tone4: :writing_hand_tone5: :open_hands: :open_hands_tone1: :open_hands_tone2: :open_hands_tone3: :open_hands_tone4: :open_hands_tone5: :raised_hands: :raised_hands_tone1: :raised_hands_tone2: :raised_hands_tone3: :raised_hands_tone4: :raised_hands_tone5: :pray: :pray_tone1: :pray_tone2: :pray_tone3: :pray_tone4: :pray_tone5: :handshake: :handshake_tone1: :handshake_tone2: :handshake_tone3: :handshake_tone4: :handshake_tone5: :nail_care: :nail_care_tone1: :nail_care_tone2: :nail_care_tone3: :nail_care_tone4: :nail_care_tone5: :ear: :ear_tone1: :ear_tone2: :ear_tone3: :ear_tone4: :ear_tone5: :nose: :nose_tone1: :nose_tone2: :nose_tone3: :nose_tone4: :nose_tone5: :footprints: :eyes: :eye: :tongue: :lips: :kiss: :zzz: :eyeglasses: :dark_sunglasses: :necktie: :shirt: :jeans: :dress: :kimono: :bikini: :womans_clothes: :purse: :handbag: :pouch: :school_satchel: :mans_shoe: :athletic_shoe: :high_heel: :sandal: :boot: :crown: :womans_hat: :tophat: :mortar_board: :helmet_with_cross: :lipstick: :ring: :closed_umbrella: :briefcase:".split(" ")
                        },
                        nature: {
                            header: ":four_leaf_clover:",
                            content: ":see_no_evil: :hear_no_evil: :speak_no_evil: :sweat_drops: :dash: :monkey_face: :monkey: :gorilla: :dog: :dog2: :poodle: :wolf: :fox: :cat: :cat2: :lion_face: :tiger: :tiger2: :leopard: :horse: :racehorse: :deer: :unicorn: :cow: :ox: :water_buffalo: :cow2: :pig: :pig2: :boar: :pig_nose: :ram: :sheep: :goat: :dromedary_camel: :camel: :elephant: :rhino: :mouse: :mouse2: :rat: :hamster: :rabbit: :rabbit2: :chipmunk: :bat: :bear: :koala: :panda_face: :feet: :turkey: :chicken: :rooster: :hatching_chick: :baby_chick: :hatched_chick: :bird: :penguin: :dove: :eagle: :duck: :owl: :frog: :crocodile: :turtle: :lizard: :snake: :dragon_face: :dragon: :whale: :whale2: :dolphin: :fish: :tropical_fish: :blowfish: :shark: :octopus: :shell: :crab: :shrimp: :squid: :butterfly: :snail: :bug: :ant: :bee: :beetle: :spider: :spider_web: :scorpion: :bouquet: :cherry_blossom: :rosette: :rose: :wilted_rose: :hibiscus: :sunflower: :blossom: :tulip: :seedling: :evergreen_tree: :deciduous_tree: :palm_tree: :cactus: :ear_of_rice: :herb: :shamrock: :four_leaf_clover: :maple_leaf: :fallen_leaf: :leaves: :mushroom: :chestnut: :earth_africa: :earth_americas: :earth_asia: :new_moon: :waxing_crescent_moon: :first_quarter_moon: :waxing_gibbous_moon: :full_moon: :waning_gibbous_moon: :last_quarter_moon: :waning_crescent_moon: :crescent_moon: :new_moon_with_face: :first_quarter_moon_with_face: :last_quarter_moon_with_face: :sunny: :full_moon_with_face: :sun_with_face: :star: :star2: :cloud: :partly_sunny: :thunder_cloud_rain: :white_sun_small_cloud: :white_sun_cloud: :white_sun_rain_cloud: :cloud_rain: :cloud_snow: :cloud_lightning: :cloud_tornado: :fog: :wind_blowing_face: :umbrella2: :umbrella: :zap: :snowflake: :snowman2: :snowman: :comet: :fire: :droplet: :ocean: :jack_o_lantern: :christmas_tree: :sparkles: :tanabata_tree: :bamboo:".split(" ")
                        },
                        food: {
                            header: ":hamburger:",
                            content: ":grapes: :melon: :watermelon: :tangerine: :lemon: :banana: :pineapple: :apple: :green_apple: :pear: :peach: :cherries: :strawberry: :kiwi: :tomato: :avocado: :eggplant: :potato: :carrot: :corn: :hot_pepper: :cucumber: :peanuts: :bread: :croissant: :french_bread: :pancakes: :cheese: :meat_on_bone: :poultry_leg: :bacon: :hamburger: :fries: :pizza: :hotdog: :taco: :burrito: :stuffed_flatbread: :egg: :cooking: :shallow_pan_of_food: :stew: :salad: :popcorn: :bento: :rice_cracker: :rice_ball: :rice: :curry: :ramen: :spaghetti: :sweet_potato: :oden: :sushi: :fried_shrimp: :fish_cake: :dango: :icecream: :shaved_ice: :ice_cream: :doughnut: :cookie: :birthday: :cake: :chocolate_bar: :candy: :lollipop: :custard: :honey_pot: :baby_bottle: :milk: :coffee: :tea: :sake: :champagne: :wine_glass: :cocktail: :tropical_drink: :beer: :beers: :champagne_glass: :tumbler_glass: :fork_knife_plate: :fork_and_knife: :spoon:".split(" ")
                        },
                        objects: {
                            header: ":bulb:",
                            content: ":skull_crossbones: :love_letter: :bomb: :hole: :shopping_bags: :prayer_beads: :gem: :knife: :amphora: :map: :barber: :frame_photo: :bellhop: :door: :sleeping_accommodation: :bed: :couch: :toilet: :shower: :bathtub: :hourglass: :hourglass_flowing_sand: :watch: :alarm_clock: :stopwatch: :timer: :clock: :thermometer: :beach_umbrella: :balloon: :tada: :confetti_ball: :dolls: :flags: :wind_chime: :ribbon: :gift: :joystick: :postal_horn: :microphone2: :level_slider: :control_knobs: :radio: :iphone: :calling: :telephone: :telephone_receiver: :pager: :fax: :battery: :electric_plug: :computer: :desktop: :printer: :keyboard: :mouse_three_button: :trackball: :minidisc: :floppy_disk: :cd: :dvd: :movie_camera: :film_frames: :projector: :tv: :camera: :camera_with_flash: :video_camera: :vhs: :mag: :mag_right: :microscope: :telescope: :satellite: :candle: :bulb: :flashlight: :izakaya_lantern: :notebook_with_decorative_cover: :closed_book: :book: :green_book: :blue_book: :orange_book: :books: :notebook: :ledger: :page_with_curl: :scroll: :page_facing_up: :newspaper: :newspaper2: :bookmark_tabs: :bookmark: :label: :moneybag: :yen: :dollar: :euro: :pound: :money_with_wings: :credit_card: :envelope: :e-mail: :incoming_envelope: :envelope_with_arrow: :outbox_tray: :inbox_tray: :package: :mailbox: :mailbox_closed: :mailbox_with_mail: :mailbox_with_no_mail: :postbox: :ballot_box: :pencil2: :black_nib: :pen_fountain: :pen_ballpoint: :paintbrush: :crayon: :pencil: :file_folder: :open_file_folder: :dividers: :date: :calendar: :notepad_spiral: :calendar_spiral: :card_index: :chart_with_upwards_trend: :chart_with_downwards_trend: :bar_chart: :clipboard: :pushpin: :round_pushpin: :paperclip: :paperclips: :straight_ruler: :triangular_ruler: :scissors: :card_box: :file_cabinet: :wastebasket: :lock: :unlock: :lock_with_ink_pen: :closed_lock_with_key: :key: :key2: :hammer: :pick: :hammer_pick: :tools: :dagger: :crossed_swords: :gun: :shield: :wrench: :nut_and_bolt: :gear: :compression: :alembic: :scales: :link: :chains: :syringe: :pill: :smoking: :coffin: :urn: :moyai: :oil: :crystal_ball: :shopping_cart: :triangular_flag_on_post: :crossed_flags: :flag_black: :flag_white: :rainbow_flag:".split(" ")
                        },
                        activity: {
                            header: ":football:",
                            content: ":space_invader: :levitate: :fencer: :horse_racing: :horse_racing_tone1: :horse_racing_tone2: :horse_racing_tone3: :horse_racing_tone4: :horse_racing_tone5: :skier: :snowboarder: :golfer: :surfer: :surfer_tone1: :surfer_tone2: :surfer_tone3: :surfer_tone4: :surfer_tone5: :rowboat: :rowboat_tone1: :rowboat_tone2: :rowboat_tone3: :rowboat_tone4: :rowboat_tone5: :swimmer: :swimmer_tone1: :swimmer_tone2: :swimmer_tone3: :swimmer_tone4: :swimmer_tone5: :basketball_player: :basketball_player_tone1: :basketball_player_tone2: :basketball_player_tone3: :basketball_player_tone4: :basketball_player_tone5: :lifter: :lifter_tone1: :lifter_tone2: :lifter_tone3: :lifter_tone4: :lifter_tone5: :bicyclist: :bicyclist_tone1: :bicyclist_tone2: :bicyclist_tone3: :bicyclist_tone4: :bicyclist_tone5: :mountain_bicyclist: :mountain_bicyclist_tone1: :mountain_bicyclist_tone2: :mountain_bicyclist_tone3: :mountain_bicyclist_tone4: :mountain_bicyclist_tone5: :cartwheel: :cartwheel_tone1: :cartwheel_tone2: :cartwheel_tone3: :cartwheel_tone4: :cartwheel_tone5: :wrestlers: :wrestlers_tone1: :wrestlers_tone2: :wrestlers_tone3: :wrestlers_tone4: :wrestlers_tone5: :water_polo: :water_polo_tone1: :water_polo_tone2: :water_polo_tone3: :water_polo_tone4: :water_polo_tone5: :handball: :handball_tone1: :handball_tone2: :handball_tone3: :handball_tone4: :handball_tone5: :juggling: :juggling_tone1: :juggling_tone2: :juggling_tone3: :juggling_tone4: :juggling_tone5: :circus_tent: :performing_arts: :art: :slot_machine: :bath: :bath_tone1: :bath_tone2: :bath_tone3: :bath_tone4: :bath_tone5: :reminder_ribbon: :tickets: :ticket: :military_medal: :trophy: :medal: :first_place: :second_place: :third_place: :soccer: :baseball: :basketball: :volleyball: :football: :rugby_football: :tennis: :8ball: :bowling: :cricket: :field_hockey: :hockey: :ping_pong: :badminton: :boxing_glove: :martial_arts_uniform: :goal: :dart: :golf: :ice_skate: :fishing_pole_and_fish: :running_shirt_with_sash: :ski: :video_game: :game_die: :musical_score: :microphone: :headphones: :saxophone: :guitar: :musical_keyboard: :trumpet: :violin: :drum: :clapper: :bow_and_arrow:".split(" ")
                        },
                        travel: {
                            header: ":red_car:",
                            content: ":race_car: :motorcycle: :japan: :mountain_snow: :mountain: :volcano: :mount_fuji: :camping: :beach: :desert: :island: :park: :stadium: :classical_building: :construction_site: :homes: :cityscape: :house_abandoned: :house: :house_with_garden: :office: :post_office: :european_post_office: :hospital: :bank: :hotel: :love_hotel: :convenience_store: :school: :department_store: :factory: :japanese_castle: :european_castle: :wedding: :tokyo_tower: :statue_of_liberty: :church: :mosque: :synagogue: :shinto_shrine: :kaaba: :fountain: :tent: :foggy: :night_with_stars: :sunrise_over_mountains: :sunrise: :city_dusk: :city_sunset: :bridge_at_night: :milky_way: :carousel_horse: :ferris_wheel: :roller_coaster: :steam_locomotive: :railway_car: :bullettrain_side: :bullettrain_front: :train2: :metro: :light_rail: :station: :tram: :monorail: :mountain_railway: :train: :bus: :oncoming_bus: :trolleybus: :minibus: :ambulance: :fire_engine: :police_car: :oncoming_police_car: :taxi: :oncoming_taxi: :red_car: :oncoming_automobile: :blue_car: :truck: :articulated_lorry: :tractor: :bike: :scooter: :motor_scooter: :busstop: :motorway: :railway_track: :fuelpump: :rotating_light: :traffic_light: :vertical_traffic_light: :construction: :anchor: :sailboat: :canoe: :speedboat: :cruise_ship: :ferry: :motorboat: :ship: :airplane: :airplane_small: :airplane_departure: :airplane_arriving: :seat: :helicopter: :suspension_railway: :mountain_cableway: :aerial_tramway: :rocket: :satellite_orbital: :stars: :rainbow: :fireworks: :sparkler: :rice_scene: :checkered_flag:".split(" ")
                        },
                        symbols: {
                            header: ":hash:",
                            content: ":100: :1234: :eye_in_speech_bubble: :cupid: :heart: :heartbeat: :broken_heart: :two_hearts: :sparkling_heart: :heartpulse: :blue_heart: :green_heart: :yellow_heart: :purple_heart: :black_heart: :gift_heart: :revolving_hearts: :heart_decoration: :heart_exclamation: :anger: :boom: :dizzy: :speech_balloon: :speech_left: :anger_right: :thought_balloon: :white_flower: :globe_with_meridians: :hotsprings: :octagonal_sign: :clock12: :clock1230: :clock1: :clock130: :clock2: :clock230: :clock3: :clock330: :clock4: :clock430: :clock5: :clock530: :clock6: :clock630: :clock7: :clock730: :clock8: :clock830: :clock9: :clock930: :clock10: :clock1030: :clock11: :clock1130: :cyclone: :spades: :hearts: :diamonds: :clubs: :black_joker: :mahjong: :flower_playing_cards: :mute: :speaker: :sound: :loud_sound: :loudspeaker: :mega: :bell: :no_bell: :musical_note: :notes: :chart: :currency_exchange: :heavy_dollar_sign: :atm: :put_litter_in_its_place: :potable_water: :wheelchair: :mens: :womens: :restroom: :baby_symbol: :wc: :passport_control: :customs: :baggage_claim: :left_luggage: :warning: :children_crossing: :no_entry: :no_entry_sign: :no_bicycles: :no_smoking: :do_not_litter: :non-potable_water: :no_pedestrians: :no_mobile_phones: :underage: :radioactive: :biohazard: :arrow_up: :arrow_upper_right: :arrow_right: :arrow_lower_right: :arrow_down: :arrow_lower_left: :arrow_left: :arrow_upper_left: :arrow_up_down: :left_right_arrow: :leftwards_arrow_with_hook: :arrow_right_hook: :arrow_heading_up: :arrow_heading_down: :arrows_clockwise: :arrows_counterclockwise: :back: :end: :on: :soon: :top: :place_of_worship: :atom: :om_symbol: :star_of_david: :wheel_of_dharma: :yin_yang: :cross: :orthodox_cross: :star_and_crescent: :peace: :menorah: :six_pointed_star: :aries: :taurus: :gemini: :cancer: :leo: :virgo: :libra: :scorpius: :sagittarius: :capricorn: :aquarius: :pisces: :ophiuchus: :twisted_rightwards_arrows: :repeat: :repeat_one: :arrow_forward: :fast_forward: :track_next: :play_pause: :arrow_backward: :rewind: :track_previous: :arrow_up_small: :arrow_double_up: :arrow_down_small: :arrow_double_down: :pause_button: :stop_button: :record_button: :eject: :cinema: :low_brightness: :high_brightness: :signal_strength: :vibration_mode: :mobile_phone_off: :recycle: :name_badge: :fleur-de-lis: :beginner: :trident: :o: :white_check_mark: :ballot_box_with_check: :heavy_check_mark: :heavy_multiplication_x: :x: :negative_squared_cross_mark: :heavy_plus_sign: :heavy_minus_sign: :heavy_division_sign: :curly_loop: :loop: :part_alternation_mark: :eight_spoked_asterisk: :eight_pointed_black_star: :sparkle: :bangbang: :interrobang: :question: :grey_question: :grey_exclamation: :exclamation: :wavy_dash: :copyright: :registered: :tm: :hash: :asterisk: :zero: :one: :two: :three: :four: :five: :six: :seven: :eight: :nine: :keycap_ten: :capital_abcd: :abcd: :symbols: :abc: :a: :ab: :b: :cl: :cool: :free: :information_source: :id: :m: :new: :ng: :o2: :ok: :parking: :sos: :up: :vs: :koko: :sa: :u6708: :u6709: :u6307: :ideograph_advantage: :u5272: :u7121: :u7981: :accept: :u7533: :u5408: :u7a7a: :congratulations: :secret: :u55b6: :u6e80: :black_small_square: :white_small_square: :white_medium_square: :black_medium_square: :white_medium_small_square: :black_medium_small_square: :black_large_square: :white_large_square: :large_orange_diamond: :large_blue_diamond: :small_orange_diamond: :small_blue_diamond: :small_red_triangle: :small_red_triangle_down: :diamond_shape_with_a_dot_inside: :radio_button: :black_square_button: :white_square_button: :white_circle: :black_circle: :red_circle: :blue_circle: :regional_indicator_z: :regional_indicator_y: :regional_indicator_x: :regional_indicator_w: :regional_indicator_v: :regional_indicator_u: :regional_indicator_t: :regional_indicator_s: :regional_indicator_r: :regional_indicator_q: :regional_indicator_p: :regional_indicator_o: :regional_indicator_n: :regional_indicator_m: :regional_indicator_l: :regional_indicator_k: :regional_indicator_j: :regional_indicator_i: :regional_indicator_h: :regional_indicator_g: :regional_indicator_f: :regional_indicator_e: :regional_indicator_d: :regional_indicator_c: :regional_indicator_b: :regional_indicator_a:".split(" ")
                        },
                        flags: {
                            header: ":flag_black:",
                            content: ":flag_ac: :flag_ad: :flag_ae: :flag_af: :flag_ag: :flag_ai: :flag_al: :flag_am: :flag_ao: :flag_aq: :flag_ar: :flag_as: :flag_at: :flag_au: :flag_aw: :flag_ax: :flag_az: :flag_ba: :flag_bb: :flag_bd: :flag_be: :flag_bf: :flag_bg: :flag_bh: :flag_bi: :flag_bj: :flag_bl: :flag_bm: :flag_bn: :flag_bo: :flag_bq: :flag_br: :flag_bs: :flag_bt: :flag_bv: :flag_bw: :flag_by: :flag_bz: :flag_ca: :flag_cc: :flag_cd: :flag_cf: :flag_cg: :flag_ch: :flag_ci: :flag_ck: :flag_cl: :flag_cm: :flag_cn: :flag_co: :flag_cp: :flag_cr: :flag_cu: :flag_cv: :flag_cw: :flag_cx: :flag_cy: :flag_cz: :flag_de: :flag_dg: :flag_dj: :flag_dk: :flag_dm: :flag_do: :flag_dz: :flag_ea: :flag_ec: :flag_ee: :flag_eg: :flag_eh: :flag_er: :flag_es: :flag_et: :flag_eu: :flag_fi: :flag_fj: :flag_fk: :flag_fm: :flag_fo: :flag_fr: :flag_ga: :flag_gb: :flag_gd: :flag_ge: :flag_gf: :flag_gg: :flag_gh: :flag_gi: :flag_gl: :flag_gm: :flag_gn: :flag_gp: :flag_gq: :flag_gr: :flag_gs: :flag_gt: :flag_gu: :flag_gw: :flag_gy: :flag_hk: :flag_hm: :flag_hn: :flag_hr: :flag_ht: :flag_hu: :flag_ic: :flag_id: :flag_ie: :flag_il: :flag_im: :flag_in: :flag_io: :flag_iq: :flag_ir: :flag_is: :flag_it: :flag_je: :flag_jm: :flag_jo: :flag_jp: :flag_ke: :flag_kg: :flag_kh: :flag_ki: :flag_km: :flag_kn: :flag_kp: :flag_kr: :flag_kw: :flag_ky: :flag_kz: :flag_la: :flag_lb: :flag_lc: :flag_li: :flag_lk: :flag_lr: :flag_ls: :flag_lt: :flag_lu: :flag_lv: :flag_ly: :flag_ma: :flag_mc: :flag_md: :flag_me: :flag_mf: :flag_mg: :flag_mh: :flag_mk: :flag_ml: :flag_mm: :flag_mn: :flag_mo: :flag_mp: :flag_mq: :flag_mr: :flag_ms: :flag_mt: :flag_mu: :flag_mv: :flag_mw: :flag_mx: :flag_my: :flag_mz: :flag_na: :flag_nc: :flag_ne: :flag_nf: :flag_ng: :flag_ni: :flag_nl: :flag_no: :flag_np: :flag_nr: :flag_nu: :flag_nz: :flag_om: :flag_pa: :flag_pe: :flag_pf: :flag_pg: :flag_ph: :flag_pk: :flag_pl: :flag_pm: :flag_pn: :flag_pr: :flag_ps: :flag_pt: :flag_pw: :flag_py: :flag_qa: :flag_re: :flag_ro: :flag_rs: :flag_ru: :flag_rw: :flag_sa: :flag_sb: :flag_sc: :flag_sd: :flag_se: :flag_sg: :flag_sh: :flag_si: :flag_sj: :flag_sk: :flag_sl: :flag_sm: :flag_sn: :flag_so: :flag_sr: :flag_ss: :flag_st: :flag_sv: :flag_sx: :flag_sy: :flag_sz: :flag_ta: :flag_tc: :flag_td: :flag_tf: :flag_tg: :flag_th: :flag_tj: :flag_tk: :flag_tl: :flag_tm: :flag_tn: :flag_to: :flag_tr: :flag_tt: :flag_tv: :flag_tw: :flag_tz: :flag_ua: :flag_ug: :flag_um: :flag_us: :flag_uy: :flag_uz: :flag_va: :flag_vc: :flag_ve: :flag_vg: :flag_vi: :flag_vn: :flag_vu: :flag_wf: :flag_ws: :flag_xk: :flag_ye: :flag_yt: :flag_za: :flag_zm: :flag_zw:".split(" ")
                        }
                    },
                    se = function() {
                        var e;
                        clearTimeout(ne), void 0 === (e = E.isPopup ? h : (e = k.mobileBrowserName && E.isPopup ? y.viewHandler.chatContainer.elementId : m.container.elementId, (e = document.getElementById(e)).contentWindow || e.contentDocument || e)).emojione ? 20 === ++oe ? (clearTimeout(ne), oe = 0) : ne = setTimeout(function() {
                            se()
                        }, 20) : (clearTimeout(ne), oe = 0, (ie = e.emojione).ascii = !0, ae = ie.shortnames.replace(/\\\+/g, "+").split("|"))
                    },
                    le = function(t) {
                        var i, n = "",
                            a = w["emoji-selection"],
                            o = w["emoji-tab-select"];
                        te && te === t ? M.addClass(t, "showWithFade") : (M.addClass(t, "showWithFade"), void 0 === ie ? 20 === oe ? t.innerHTML = y.languageParser.translate("chat", "emoji_error_load") : (0 === oe && se(), setTimeout(function() {
                            le(t)
                        }, 20)) : (clearTimeout(ne), te = t, setTimeout(function() {
                            Object.keys(re).forEach(function(e) {
                                n += o.replace(/__ID__/, e).replace(/__IMAGE__/, ie.shortnameToImage(re[e].header)).replace(/__IS_ACTIVE__/, "")
                            }), a = a.replace(/__TAB_LIST__/, n), t.innerHTML = a, i = M.getElementsByClassName(t, "open-tab"), de(t, {
                                target: i[0]
                            });
                            for (var e = 0; e < i.length; e++) y.eventHandler.listen(i[e], y.viewHandler.clickEvent, function(e) {
                                e.stopPropagation(), de(t, e)
                            }, i[e].id + "OpenTab")
                        })))
                    },
                    de = function(e, t) {
                        var i, n, a = "",
                            o = w["emoji-tab-pane"],
                            r = w["emoji-list"],
                            s = M.getElementsByClassName(e, "open-tab");
                        if (n = "max" !== B.chatWindowState() && y.viewHandler.messagePreview ? y.viewHandler.messagePreview.container.getElementById("tab-content") : k.mobileBrowserName && E.isPopup ? y.viewHandler.chatContainer.getElementById("tab-content") : m.container.getElementById("tab-content")) {
                            i = (i = "open-tab" === t.target.className ? t.target : t.target.offsetParent).id;
                            for (var l = 0; l < s.length; l++) s[l].className = s[l].id === i ? "open-tab active" : "open-tab";
                            "search" === i ? (n.innerHTML = w["emoji-search-pane"], n = k.mobileBrowserName && E.isPopup ? y.viewHandler.chatContainer.getElementById("search-emoji") : m.container.getElementById("search-emoji"), y.eventHandler.listen(n, "keyup", function(e) {
                                var t = y.eventHandler.getTargetElement(e).value.trim().toLowerCase(),
                                    i = w["emoji-list"],
                                    n = "";
                                if ((e = k.mobileBrowserName && E.isPopup ? y.viewHandler.chatContainer.getElementById("search-list") : m.container.getElementById("search-list")) && ae) {
                                    if (t)
                                        for (var a = 0; a < ae.length; a++) {
                                            var o = ae[a]; - 1 !== o.indexOf(t) && (n += i.replace(/__IMAGE__/, ie.shortnameToImage(o)).replace(/__SHORTNAME__/g, o))
                                        }
                                    e.innerHTML = n, ce()
                                }
                            }, "searchEmojiKeyup")) : (s = re[i]) && (s.content.forEach(function(e) {
                                a += r.replace(/__IMAGE__/, ie.shortnameToImage(e)).replace(/__SHORTNAME__/g, e)
                            }), n.innerHTML = o.replace(/__EMOJIS__/, a).replace(/__ID__/, "people"), ce())
                        }
                    },
                    ce = function() {
                        for (var e = M.getElementsByClassName(te, "emoji-select"), t = 0; t < e.length; t++) "touchend" === y.viewHandler.clickEvent ? pe(e[t]) : y.eventHandler.listen(e[t], y.viewHandler.clickEvent, function(e) {
                            e = y.eventHandler.getTargetElement(e), he(e)
                        }, e[t].id + "SelectEmoji")
                    },
                    pe = function(e) {
                        y.eventHandler.listen(e, "touchstart", function(e) {
                            y.eventHandler.getTargetElement(e).setAttribute("data-moved", "0")
                        }, e.id + "TouchEmoji"), y.eventHandler.listen(e, "touchmove", function(e) {
                            y.eventHandler.getTargetElement(e).setAttribute("data-moved", "1")
                        }, e.id + "MoveEmoji"), y.eventHandler.listen(e, "touchend", function(e) {
                            "0" === (e = y.eventHandler.getTargetElement(e)).getAttribute("data-moved") && he(e), e.removeAttribute("data-moved")
                        }, e.id + "TapEmoji")
                    },
                    he = function(e) {
                        e = ie.shortnameToUnicode(e.title), k.mobileBrowserName && E.isPopup ? y.viewHandler.addEmojiToInput(e) : "max" === B.chatWindowState() || E.isPopup || E.isEmbedded ? m.addEmojiToInput(e) : y.viewHandler.messagePreview && y.viewHandler.messagePreview.addEmojiToInput(e)
                    };
                (ee.prototype = new EventEmitter).init = function() {
                    var e, n = this;
                    (new Date).getTime();
                    this.forceDisconnected = this.disconnect = s.connected = !1, this.removeAllListeners(), this.socket && (this.socket.removeAllListeners(), this.socket.disconnect()), null === k.windowId && $.handleWindowId(), null !== k.windowId && "null" !== k.windowId || y.loggingHandler.logIncident("windowId is null", {
                        windowId: k.windowId,
                        type: typeof k.windowId
                    }), (e = {
                        k: B.sessionKey,
                        u: T.uuid,
                        uv: T.uuidVer,
                        a: I.pageId,
                        cver: S.chatVersion,
                        pop: E.isPopup,
                        jv: B.currentVersion,
                        asver: B.pageStatusVersion,
                        ust: $_Tawk_Unstable
                    }).p && 255 < e.p.length && (e.p = e.p.substring(0, 255)), this.socket = new $__TawkSocket("wss://" + B.visitorSocketServer + "/", {
                        engineIo: $__TawkEngine,
                        path: "/s",
                        query: e
                    }), this.socket.on("disconnect", function() {
                        n.disconnectHandler()
                    }), this.socket.on("error", function(e) {
                        var t, i = "socket on error";
                        if (e instanceof Error) {
                            if (t = {
                                    toString: e.toString(),
                                    stack: e.stack,
                                    lineNumber: e.lineNumber,
                                    fileName: e.fileName
                                }, y.loggingHandler.unloading && -1 === t.toString.indexOf("post")) return;
                            "TransportError" === e.type && (t.description = e.description), -1 !== t.toString.indexOf("post") && (i = "socket post error")
                        } else t = e;
                        y.loggingHandler.logIncident(i, t), n.socket.disconnect(), n.disconnectHandler()
                    }), this.socket.on("connect", function() {
                        n.disconnect = !1
                    }), this.socket.on("ready", function(e, t, i) {
                        if (!y) return n.disconnectSocket();
                        n.selfOrigin = e, s.connected = !0, n.ready || (s.loaded = !0), n.ready = !0;
                        try {
                            y.eventEmitter.emit("syncConversation", t)
                        } catch (e) {
                            g.handleError("Unable to emit syncConversation", e.fileName, e.lineNumber, e.stack)
                        }
                        try {
                            y.eventEmitter.emit("pageStatusUpdated", i)
                        } catch (e) {
                            g.handleError("Unable to emit pageStatusUpdated", e.fileName, e.lineNumber, e.stack)
                        }
                        try {
                            y.eventEmitter.emit("socketReady")
                        } catch (e) {
                            g.handleError("Unable to emit socketReady", e.fileName, e.lineNumber, e.stack)
                        }
                        clearTimeout(n.clearRegisterRetryTimeout), n.clearRegisterRetryTimeout = setTimeout(function() {
                            n.disconnect || a.resetRetryCount(), n.clearRegisterRetryTimeout = null
                        }, 5e3)
                    }), this.socket.on("remoteDisconnect", function(e) {
                        if ("BANNED" === (e = e || {}).msg) {
                            n.banned = !0;
                            try {
                                n.socket.disconnect()
                            } catch (e) {
                                g.handleError("Unable to emit disconnect socket on ban", e.fileName, e.lineNumber, e.stack)
                            }
                            y.main.hideWidget()
                        } else n.socket.disconnect(), n.disconnectHandler()
                    }), this.addEventListeners()
                }, ee.prototype.addEventListeners = function() {
                    function t(t, i) {
                        try {
                            y.eventEmitter.emit(t, i)
                        } catch (e) {
                            g.handleError("Unable to emit socket event : " + t + " with data : " + JSON.stringify(i), e.fileName, e.lineNumber, e.stack)
                        }
                    }
                    var i = this;
                    this.socket.on("visitorChatWindowState", function(e) {
                        i.selfOrigin !== e.origin && t("windowStateUpdated", e)
                    }), this.socket.on("visitorDataUpdate", function(e) {
                        i.selfOrigin !== e.origin && t("visitorDataUpdate", e)
                    }), this.socket.on("visitorSound", function(e) {
                        e.origin !== i.selfOrigin && y.chatHandler.toggleSound(!!e.sdo)
                    }), this.socket.on("visitorMessage", function(e) {
                        i.selfOrigin !== e.origin && t("incomingMessage", e)
                    }), this.socket.on("visitorConversationPresenceUpdate", function(e) {
                        t("incomingMessage", e)
                    }), this.socket.on("pageStatus", function(e) {
                        t("pageStatusUpdated", e)
                    	
                    	}),
                    	this.socket.on("newCriticalUpdate", function(e) {
                        (e = e || 0) != B.criticalVersion && y.main.criticalRefresh(e, !0)
                    }), this.socket.on("newUnstableCriticalUpdate", function(e) {
                        e = e || 0, $_Tawk_Unstable && e != B.criticalVersion && y.main.criticalRefresh(e, !0)
                    }), 
                    this.socket.on("visitorPopupFocus", function(e) {
                        t("visitorPopupFocus", !!(e = e || {}).hasFocus)
                    }), this.socket.on("chatBubbleClosed", function(e) {
                        e.origin !== i.selfOrigin && t("chatBubbleClosed", !0)
                    }), this.socket.on("agentIsTyping", function(e) {
                        t("agentIsTyping", e)
                    }), this.socket.on("agentStopedTyping", function(e) {
                        t("agentStopedTyping", e)
                    }), this.socket.on("pageDisable", function() {
                        t("removeWidget")
                    }), this.socket.on("widgetScheduleUpdate", function(e) {
                        t("scheduleUpdate", e)
                    }), this.socket.on("uploadProgress", function(e) {
                        t("fileUploadProgress", e)
                    }), this.socket.on("uploadFinished", function(e) {
                        t("fileUploadFinished", e)
                    }), this.socket.on("uploadError", function(e) {
                        t("fileUploadError", e)
                    }), this.socket.on("vCallStatus", function(e) {
                        t("webrtcCallStatus", e)
                    }), this.socket.on("visitorChatSeen", function(e) {
                        t("visitorChatSeen", e)
                    }), this.socket.on("visitorChatDismiss", function(e) {
                        t("visitorChatDismiss", e)
                    }), this.socket.on("visitorTagsUpdate", function(e) {
                        t("visitorTagsUpdate", e)
                    }), this.on("notifyWindowState", function(e) {
                        i.chatWindowStates[e] && i.socket.send("chatWindowState", e)
                    }), this.on("notifyChatBubbleClosed", function() {
                        i.socket.send("chatBubbleClose")
                    }), this.on("notifyMessagePreview", function(e) {
                        i.socket.send("messagePreview", e, (new Date).getTime())
                    }), this.on("sendChatMessage", function(e, t) {
                        i.socket.send("chatMessage", e, t)
                    }), this.on("notifyNameChange", function(e, t) {
                        i.socket.send("saveNameChangeForm", e, t)
                    }), this.on("notifyEmailTranscript", function(e, t) {
                        i.socket.send("saveTranscriptEmailForm", e, t)
                    }), this.on("notifyEndChatTranscript", function(e, t) {
                        i.socket.send("sendTranscript", e, t)
                    }), this.on("notifyOfflineMessage", function(e, t) {
                        i.socket.send("service", "visitor-chat", "/v1/visitor/offline-form", e, t)
                    }), this.on("visitorChatSeen", function(e, t) {
                        this.socket.send("service", "visitor-chat", "/v1/visitor/messages-seen", e, t)
                    }), this.on("visitorChatDismiss", function(e, t) {
                        this.socket.send("service", "visitor-chat", "/v1/visitor/dismiss-preview", e, t)
                    }), this.on("notifyPrechat", function(e, t) {
                        i.socket.send("savePrechatForm", e, t)
                    }), this.on("setRating", function(e) {
                        i.socket.send("visitorRating", e)
                    }), this.on("toggleSound", function(e) {
                        i.socket.send("visitorSound", e)
                    }), this.on("notifyWidgetResized", function() {
                        i.socket.send("chatWindowResize")
                    }), this.on("popupOnFocus", function(e) {
                        i.socket.send("visitorPopupFocus", e)
                    }), this.on("notifySocketStatusUpdate", function(e) {
                        i.socket.send("socketStatusUpdate", e)
                    }), this.on("saveForeignKey", function(e, t) {
                        i.socket.send("saveForeignKey", e, t)
                    }), this.on("saveConversion", function(e, t) {
                        i.socket.send("saveConversion", e, t)
                    }), this.on("submitMultipleOptions", function(e, t) {
                        i.socket.send("saveMultipleOptions", e, t)
                    }), this.on("endVisitorChat", function(e, t) {
                        i.socket.send("endChat", t)
                    }), this.on("fileUploadMessage", function(e, t) {
                        i.socket.send("fileUploadMessage", e, t)
                    }), this.on("addEvent", function(e, t) {
                        i.socket.send("addEvent", e, t)
                    }), this.on("setAttributes", function(e, t) {
                        i.socket.send("setAttributes", e, t)
                    }), this.on("addTags", function(e, t) {
                        i.socket.send("addTags", e, t)
                    }), this.on("removeTags", function(e, t) {
                        i.socket.send("removeTags", e, t)
                    }), this.on("getWebRTCToken", function(e, t) {
                        this.socket.send("service", "webrtc", "/v1/vcall/init/visitor", e, t)
                    }), this.on("getCallStatus", function(e, t) {
                        this.socket.send("service", "webrtc", "/v1/vcall/status/visitor", e, t)
                    }), this.on("declineCall", function(e, t) {
                        this.socket.send("service", "webrtc", "/v1/vcall/reject/visitor", e, t)
                    }), this.on("nav", function(e, t) {
                        this.socket.send("nav", e, t)
                    })
                }, ee.prototype.disconnectSocket = function() {
                    this.forceDisconnected = !0, this.socket && (this.socket.disconnect(), this.disconnectHandler())
                }, ee.prototype.disconnectHandler = function() {
                    s.connected = !1, this.socket.removeAllListeners(), this.removeAllListeners(), y.scheduler.cleanUp(), this.banned || this.forceDisconnected || this.disconnect || (this.disconnect = !0, a.retryRegister())
                };

                function me(e, t, i, n, a) {
                    var o = this;
                    this.elementId = e || "", this.style = t || "", this.tagName = n || "div", this.childViews = [], this.template = e && w[e] ? w[e] : "", this.elementReferrer = null, this.documentRef = a || document, this.attributes = {}, this.isVisible = !1, this.classNames = [], "iframe" === n && (this.isIframe = !0), this.elementId && (this.attributes.id = this.elementId), i && Object.keys(i).forEach(function(e) {
                        o.attributes[e] = i[e]
                    })
                }
                me.prototype.addChildViews = function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        t.childViews.push(e)
                    })
                }, me.prototype.buildView = function(e) {
                    return this.documentRef = e || this.documentRef, this.elementReferrer = M.createElement(this.documentRef, this.tagName, this.attributes, this.style, this.template), this.elementReferrer.className += this.classNames.join(" "), this.isIframe || this.buildChildViews(), this.elementReferrer
                }, me.prototype.buildChildViews = function(e) {
                    var t = this;
                    this.childViews.length && (this.documentRef = e || this.documentRef, this.childViews.forEach(function(e) {
                        t.elementReferrer.appendChild(e.buildView(t.documentRef))
                    }))
                }, me.prototype.restyle = function(e, t) {
                    t && (-1 === t.indexOf("!important") && (t += " !important"), this.elementReferrer ? this.elementReferrer.style.cssText += ";" + e + ":" + t : this.style += ";" + e + ":" + t)
                }, me.prototype.attachUserEventListener = function(e, t, i, n) {
                    var a;
                    (a = i ? this.getElementById(i) : this.elementReferrer) && (1 < (i = e.split(" ")).length ? i.forEach(function(e) {
                        y.eventHandler.listen(a, e, t, e + n)
                    }) : y.eventHandler.listen(a, e, t, n))
                }, me.prototype.toggle = function() {
                    this.isVisible ? (this.restyle("display", "none !important"), this.isVisible = !1) : (this.restyle("display", "block !important"), this.isVisible = !0)
                }, me.prototype.getElementById = function(e) {
                    return this.elementReferrer ? this.documentRef.getElementById(e) : null
                }, me.prototype.insertHtml = function(e) {
                    this.elementReferrer.innerHTML = e
                }, me.prototype.clear = function() {
                    this.elementReferrer && (this.elementReferrer.outerHTML = "", this.elementReferrer = null)
                }, me.prototype.addClass = function(e) {
                    -1 === this.classNames.indexOf(e) && (this.classNames.push(e), this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" ")))
                }, me.prototype.removeClass = function(e) {
                    for (; - 1 !== this.classNames.indexOf(e);) this.classNames.splice(this.classNames.indexOf(e), 1);
                    this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
                }, me.prototype.hide = function() {
                    this.restyle("display", "none !important"), this.isVisible = !1
                }, me.prototype.show = function() {
                    this.restyle("display", "block !important"), this.isVisible = !0
                }, me.prototype.insertCssFile = function(e, t) {
                    var i = this.documentRef.getElementsByTagName("head")[0],
                        n = this.documentRef.createDocumentFragment(),
                        a = M.createElement(this.documentRef, "style", {
                            type: "text/css"
                        }),
                        o = this.documentRef.createTextNode(t ? e : y.ResetStyle + "" + e);
                    n.appendChild(a), i.appendChild(n), a.styleSheet ? a.styleSheet.cssText = o.nodeValue : a.appendChild(o)
                }, me.prototype.massRestyle = function(e) {
                    for (var t in e) e.hasOwnProperty(t) && this.restyle(t, e[t])
                };

                function ge() {
                    me.apply(this, arguments)
                }((ge.prototype = new me).constructor = ge).prototype.parent = me.prototype, ge.prototype.buildIframe = function(e, t) {
                    var i;
                    this.documentRef = M.getDocument(this.elementReferrer), k.isIE ? (this.documentRef.open(), this.documentRef.writeln('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head><body></body></html>'), this.documentRef.close()) : (this.documentRef.open(), this.documentRef.close(), i = document.implementation.createDocumentType("html", "", ""), this.documentRef.insertBefore(i, this.documentRef.childNodes[0]), this.documentRef.head.innerHTML = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head>'), t || M.updateFontStylesheet(this.documentRef), this.insertCssFile(e), this.insertContent(), this.buildChildViews()
                }, ge.prototype.insertContent = function() {
                    this.documentRef.body.innerHTML = this.template
                }, ge.prototype.buildChildViews = function() {
                    var t = this;
                    this.childViews.forEach(function(e) {
                        t.documentRef.body.appendChild(e.buildView(t.documentRef))
                    })
                };

                function ue(e) {
                    this.template = (this.elementId = (this.formData = e) ? e.id : null) && w[this.elementId] ? w[this.elementId] : "", this.elementReferrer = null, this.documentRef = document, this.attributes = {
                        className: "form"
                    }, this.elementId && (this.attributes.id = this.elementId)
                }
                ue.prototype.buildForm = function() {
                    this.formData.additionalFields = [], this.insertTranslatedTexts()
                }, ue.prototype.buildView = function(e) {
                    return this.documentRef = e || this.documentRef, this.elementReferrer = M.createElement(this.documentRef, "div", this.attributes, null, this.template)
                }, ue.prototype.addPlaceholderText = function(e, t, i, n, a) {
                    a = RegExp("__" + e.toUpperCase() + "_PLACEHOLDER__", "gm"), e.toUpperCase(), e = RegExp("__" + e.toUpperCase() + "__", "gm");
                    var o = y.languageParser.translate("form", i + "Placeholder");
                    if (k.isPlaceholderSupported || t || (t = o), o && o !== i + "Placeholder" || (o = t, t = ""), n) return M.escapeTemplateReplacement(n, [{
                        placeholder: a,
                        textReplace: o
                    }, {
                        placeholder: e,
                        textReplace: t
                    }]);
                    this.template = M.escapeTemplateReplacement(this.template, [{
                        placeholder: a,
                        textReplace: o
                    }, {
                        placeholder: e,
                        textReplace: t
                    }])
                }, ue.prototype.addPlaceholderHandler = function() {
                    var e, o = this;
                    k.isPlaceholderSupported || (e = this.formData.fields) && e.forEach(function(i) {
                        var n, a, e;
                        "input" !== i.type || i.isEnabled && !i.isEnabled() || (e = i.getValue ? i.getValue() : "", "input" === i.type && M.isArray(e) ? e.forEach(function(e, t) {
                            n = o.documentRef.getElementById(i.fieldName + t), a = e, M.togglePlaceholderText(n, a, i.fieldName + t), "textarea" !== n.tagName.toLowerCase() || M.trim(n.value) || (n.value = a)
                        }) : i.hiddenIE8 || (n = o.documentRef.getElementById(i.fieldName + "Field"), a = y.languageParser.translate("form", i.languageKey + "Placeholder"), M.togglePlaceholderText(n, a, i.fieldName + "Field"), "textarea" !== n.tagName.toLowerCase() || M.trim(n.value) || (n.value = a)))
                    })
                }, ue.prototype.insertTranslatedTexts = function() {
                    var i = this,
                        e = "";
                    (this.formData.fields || []).forEach(function(e) {
                        var t = e.getValue ? e.getValue() : "";
                        i.addPlaceholderText(e.fieldName, t, e.languageKey, null, e.labelText)
                    }), this.template = M.escapeTemplateReplacement(this.template, [{
                        placeholder: "__TITLE__",
                        textReplace: this.formData.getTitle ? this.formData.getTitle() : y.languageParser.translate("form", this.formData.title)
                    }, {
                        placeholder: "__OVERLAY__",
                        textReplace: y.languageParser.translate("overlay", this.formData.overlayMessage)
                    }, {
                        placeholder: "__CANCEL_BUTTON__",
                        textReplace: y.languageParser.translate("form", "CancelButton")
                    }, {
                        placeholder: "__CLOSE_BUTTON__",
                        textReplace: y.languageParser.translate("form", "CloseButton")
                    }, {
                        placeholder: "__SAVE_BUTTON__",
                        textReplace: y.languageParser.translate("form", "SaveButton")
                    }, {
                        placeholder: "__SEND_BUTTON__",
                        textReplace: y.languageParser.translate("form", "SendButton")
                    }, {
                        placeholder: "__SUBMIT_BUTTON__",
                        textReplace: y.languageParser.translate("form", "SubmitButton")
                    }, {
                        placeholder: "__START_CHAT_BUTTON__",
                        textReplace: y.languageParser.translate("form", "StartChatButton")
                    }, {
                        placeholder: "__END_CHAT_BUTTON__",
                        textReplace: y.languageParser.translate("rollover", "end")
                    }, {
                        placeholder: "__SUBMITTING_INDICATOR__",
                        textReplace: y.languageParser.translate("form", "SubmittingProcess")
                    }, {
                        placeholder: "__ENDING_INDICATOR__",
                        textReplace: y.languageParser.translate("form", "EndingProcess")
                    }, {
                        placeholder: "__SENDING_INDICATOR__",
                        textReplace: y.languageParser.translate("form", "SendingProcess")
                    }, {
                        placeholder: "__SAVING_INDICATOR__",
                        textReplace: y.languageParser.translate("form", "SavingProcess")
                    }, {
                        placeholder: "__EMAIL_TRANSCRIPT_TO__",
                        textReplace: y.languageParser.translate("form", "EmailTranscriptTo")
                    }, {
                        placeholder: "__OFFLINE_MESSAGE_SUCCESSFULY_SENT__",
                        textReplace: y.languageParser.translate("form", "OfflineMessageSent")
                    }, {
                        placeholder: "__SEND_AGAIN__",
                        textReplace: y.languageParser.translate("form", "sendAgain")
                    }, {
                        placeholder: /__STATUS__/gm,
                        textReplace: y.languageParser.translate("form", "saving")
                    }, {
                        placeholder: "__CHANGE_NAME__",
                        textReplace: y.languageParser.translate("menu", "change_name")
                    }, {
                        placeholder: /__SAFARI__/gm,
                        textReplace: "safari" === k.vendor ? "safari-fix" : ""
                    }, {
                        placeholder: /__SKIP_BUTTON__/,
                        textReplace: y.languageParser.translate("chat", "skip")
                    }, {
                        placeholder: "__START_CHAT__",
                        textReplace: y.languageParser.translate("chat", "newChat")
                    }, {
                        placeholder: "__EMAIL_TRANCRIPT__",
                        textReplace: y.languageParser.translate("rollover", "emailTranscriptOption")
                    }, {
                        placeholder: "__END_CHAT_MESSAGE__",
                        textReplace: y.languageParser.translate("form", "EndChatMessage")
                    }]), this.template = "safari" === k.vendor || "chrome" === k.vendor || "firefox" === k.vendor || "mozilla" === k.vendor || k.isIE && 8 <= k.version ? this.template.replace("__NON_MODERN__", "") : this.template.replace("__NON_MODERN__", "other-fix"), k.mobileBrowserName && (e = M.escapeTemplateReplacement(w["close-form-button"], [{
                        placeholder: "__CLOSE_BUTTON__",
                        textReplace: y.languageParser.translate("form", "CloseButton")
                    }])), this.template = M.escapeTemplateReplacement(this.template, [{
                        placeholder: "__CLOSE_BUTTON_CONTAINER__",
                        textReplace: e
                    }]), this.formData.customButtons && (this.template = M.escapeTemplateReplacement(this.template, this.formData.customButtons()))
                };

                function fe(e, t) {
                    ue.apply(this, [e]), this.formName = t, this.isFormRequired = !1
                }((fe.prototype = new ue).constructor = fe).prototype.parent = ue.prototype, fe.prototype.buildForm = function() {
                    var e = [],
                        t = "preChatForm" == this.formName ? "prechat" : "offline";
                    if (this.formData.additionalFields = [], this.insertTranslatedTexts(), null === this.formData.dynamicFields) {
                        for (var i = 0, n = E[t + "Options"].fields.length; i < n; i++) {
                            var a = {},
                                o = E[t + "Options"].fields[i];
                            o.id = t + i, a.label = o.label, a.instantValidation = !1, a.isRequired = o.isRequired, a.fieldName = t + i, a.fieldType = o.type, a.validation = "isValidString", "name" === o.type ? (a.valueMaxLength = 40, a.getValue = y.visitorHandler.getNameValue, a.languageKey = "Name") : "email" === o.type ? (a.valueMaxLength = 150, a.getValue = y.visitorHandler.getEmailValue, a.validation = "isValidEmail", a.languageKey = "Email") : "message" === o.type || "textArea" === o.type ? a.valueMaxLength = 500 : "inputText" === o.type ? a.valueMaxLength = 150 : "department" === o.type ? a.getValue = y.sessionHandler.getDeparmentOptions : "choice" === o.type || "option" === o.type ? (a.type = "options", a.selections = o.selections) : "phone" === o.type && (a.valueMaxLength = 20, a.validation = "isValidPhone", a.languageKey = "Phone"), a.isRequired && !a.languageKey && (a.languageKey = "Required"), e.push(a)
                        }
                        this.formData.dynamicFields = e
                    }
                    this.generateDynamicFields()
                }, fe.prototype.generateDynamicFields = function() {
                    for (var e = "", t = RegExp("__LABEL__", "gm"), i = RegExp("__ID__", "gm"), n = RegExp("__MAXLENGTH__", "gm"), a = 0, o = this.formData.dynamicFields.length; a < o; a++) {
                        var r, s = "",
                            l = this.formData.dynamicFields[a];
                        "name" === l.fieldType || "email" === l.fieldType || "phone" === l.fieldType || "inputText" === l.fieldType ? (r = w.inputTextFieldType, r = "email" === l.fieldType ? r.replace("__INPUT_TYPE__", "email") : r.replace("__INPUT_TYPE__", "text")) : "message" === l.fieldType || "textArea" === l.fieldType ? r = w.textAreaFieldType : "department" === l.fieldType ? r = w.departmentSelection : "choice" !== l.fieldType && "option" !== l.fieldType || (r = w.selectionsType, s = "choice" === l.fieldType ? this.generateCheckboxOptions(l.fieldName, l.selections) : this.generateRadioOptions(l.fieldName, l.selections)), r && (r = (r = (r = r.replace(t, l.label || "")).replace(i, l.fieldName || "")).replace(n, l.valueMaxLength || ""), l.isRequired ? (r = r.replace(/__REQUIRED__/gm, "*"), this.isFormRequired || (this.isFormRequired = !0)) : r = r.replace(/__REQUIRED__/gm, ""), l.getValue && ("department" === l.fieldType ? (s = this.generateDropDownOptions(l.getValue(), l.isRequired, l.label)) || (r = "") : s = l.getValue()), e += r = r.replace("__VALUE__", s))
                    }
                    this.template = this.template.replace("__FIELDS__", e)
                }, fe.prototype.generateDropDownOptions = function(e, t, i) {
                    var n = "";
                    if (0 === e.length) return !1;
                    for ("preChatForm" === this.formData.id || "offlineForm" === this.formData.id ? n += '<option id="department-default" value="" disabled selected>' + (t ? "* " : "") + (i || y.languageParser.translate("form", "department")) + "</option>" : t || (n += '<option value="0"></option>'), t = 0, i = e.length; t < i; t++) n += '<option value="' + e[t].value + '"' + (e[t].selected ? 'selected="selected"' : "") + ">" + e[t].text + "</option>";
                    return n
                }, fe.prototype.generateRadioOptions = function(e, t) {
                    for (var i = "", n = w.radioSelectionType, a = 0, o = t.length; a < o; a++) i += n.replace(/__ID__/gm, e + "radio" + a).replace(/__FIELD_ID__/gm, e).replace(/__VALUE__/gm, t[a]);
                    return i
                }, fe.prototype.generateCheckboxOptions = function(e, t) {
                    for (var i = "", n = w.checkboxSelectionType, a = 0, o = t.length; a < o; a++) i += n.replace(/__ID__/gm, e + "check" + a).replace(/__FIELD_ID__/gm, e).replace(/__VALUE__/gm, t[a]);
                    return i
                }, fe.prototype.updateName = function(e) {
                    for (var t, i = 0, n = this.formData.dynamicFields.length; i < n; i++) {
                        var a = this.formData.dynamicFields[i];
                        if ("name" === a.fieldType) {
                            t = y.viewHandler.chatContainer.getElementById(a.fieldName + "Field");
                            break
                        }
                    }
                    t && (t.value = e)
                }, fe.prototype.updateEmail = function(e) {
                    for (var t, i = 0, n = this.formData.dynamicFields.length; i < n; i++) {
                        var a = this.formData.dynamicFields[i];
                        if ("email" === a.fieldType) {
                            t = y.viewHandler.chatContainer.getElementById(a.fieldName + "Field");
                            break
                        }
                    }
                    t && (t.value = e)
                }, fe.prototype.addPlaceholderHandler = function() {
                    var e, t;
                    if (!k.isPlaceholderSupported)
                        for (var i = 0, n = this.formData.dynamicFields.length; i < n; i++) "department" !== (t = this.formData.dynamicFields[i]).fieldType && "choice" !== t.fieldType && "option" !== t.fieldType && (this.formData.dynamicFields[i].placeholderText = (t.isRequired ? "* " : "") + t.label, e = this.documentRef.getElementById(t.fieldName + "Field"), M.togglePlaceholderText(e, this.formData.dynamicFields[i].placeholderText, t.fieldName + "Field"), M.trim(e.value) || (e.value = this.formData.dynamicFields[i].placeholderText))
                };

                function ve(e) {
                    var t = this;
                    this.container = e, this.unansweredMessages = 0, y.eventEmitter.on("visitorPopupFocus", function(e) {
                        t.isPopupFocused = e, t.hide()
                    }), B.chatWindowState.subscribe(function(e) {
                        "max" === e && t.hide()
                    }), this.originalPageTitle = document.title, this.pageTitleNotification = {
                        interval: null,
                        on: function() {
                            !this.interval && E.showUnreadInTab() && (this.interval = setInterval(function() {
                                document.title = t.originalPageTitle === document.title ? y.languageParser.translate("chat", "newMessage", {
                                    num: t.unansweredMessages
                                }) : t.originalPageTitle
                            }, 1e3))
                        },
                        off: function() {
                            clearInterval(this.interval), this.interval = null, document.title = t.originalPageTitle
                        }
                    }
                }
                ve.prototype.initIndicator = function() {
                    y.viewHandler.totalUnseenMessages && this.updateUnseenMessages(y.viewHandler.totalUnseenMessages)
                }, ve.prototype.show = function() {
                    var e, t;
                    "max" === B.chatWindowState() && !E.isPopup || this.isPopupFocused && !y.viewHandler.popoutWin.closed || E.hideWidgetOnLoad || "restartChatForm" === y.formHandler.currentForm || "offlineForm" === y.formHandler.currentForm || !this.container || !this.container.elementReferrer || (e = this.container.getElementById("tawkchat-chat-indicator"), (t = this.container.getElementById("tawkchat-chat-indicator-text")) && (t.innerHTML = this.unansweredMessages), e && "block" !== e.style.display && (e.style.display = "block", e.style.visibility = "hidden", y.viewHandler.handleIndicatorToggle(!0), y.viewHandler.showWidget(), this.container.show()), E.showMessagePreview() && y.viewHandler.messagePreview && y.viewHandler.messagePreview.isShown && !document.hidden || this.pageTitleNotification.on())
                }, ve.prototype.hide = function() {
                    var e, t;
                    this.container && this.container.elementReferrer && (e = this.container.getElementById("tawkchat-chat-indicator"), t = this.container.getElementById("tawkchat-chat-indicator-text"), e && "block" === e.style.display && (e.style.display = "none", y.viewHandler.handleIndicatorToggle(), k.mobileBrowserName || this.container.hide()), t && (t.innerHTML = ""))
                }, ve.prototype.updateUnseenMessages = function(e) {
                    this.unansweredMessages = e, d.triggerApiHandlers("onUnreadCountChanged", this.unansweredMessages), 0 === this.unansweredMessages ? this.pageTitleNotification.off() : "min" === B.chatWindowState() ? this.show() : this.pageTitleNotification.on()
                };

                function be(e) {
                    this.container = e, this.documentRef = this.container.documentRef, this.quickReplyContainer = this.messagePreviewContainer = null, this.prevSenderUid = "", this.messagePreviewCount = 0, this.timeIntervalsArr = [], this.isQuickReplyInitialized = !1, this.maxNumberFileUpload = 5, this.chatTextarea = new me("chatTextarea", null, null, "textarea"), this.incomingCallContainer = null, this.offsetX = E.widgetOffsetX, this.offsetY = E.widgetOffsetY, this.wrapper = null, this.isActionsContainerNotifShown = !1, this.lastRadioButton = null, this.resizeThrottle = 0
                }
                be.prototype.init = function() {
                    var e = this;
                    this.container && (this.wrapper || (this.wrapper = this.container.getElementById("tawkchat-message-preview-container"), E.isRTL() && (this.wrapper.className += "rtl-direction ")), k.mobileBrowserName ? this.updateMobilePositions() : this.updatePositions(), E.chatPosition.subscribe(function() {
                        e.updatePositions()
                    }))
                }, be.prototype.show = function(e, t, i) {
                    var n = this;
                    0 !== e && this.container && (t || i) && (1 === e ? this.messagePreviewCount = 1 : this.messagePreviewCount++, this.messagePreviewContainer || (this.messagePreviewContainer = this.container.getElementById("tawkchat-message-preview-messages-container"), E.isCenterPositioned() ? this.messagePreviewContainer.style.maxHeight = document.documentElement.clientHeight - (document.documentElement.clientHeight / 2 - 180) - 210 + "px" : this.messagePreviewContainer.style.maxHeight = document.documentElement.clientHeight - (E.minimizedDimensions().height + E.widgetOffsetY + 300) + "px", this.toggleUploadsAction(), this.toggleRatingAction(), this.toggleEmojiAction()), this.quickReplyContainer || (this.quickReplyContainer = this.container.getElementById("tawkchat-message-preview-quick-reply-container")), this.isShown = !0, this.container.restyle("display", "block"), o && o.hideBubble(), t && !k.mobileBrowserName ? this.appendMessage(t) : i && (i.isMissed ? this.appendCallInfo(i) : (this.messagePreviewCount--, this.appendCallRequest(i))), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                        y.sessionHandler.notifyWindowState("max"), y.viewHandler.scrollToBottom()
                    }, "tawkchat-message-preview-messages-container", "mp-maximizeClick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                        y.sessionHandler.visitorChatDismiss(function() {}), n.removeAllElements()
                    }, "tawkchat-message-preview-close", "mp-closeitemsclick"), this.isQuickReplyInitialized || this.initQuickReply(), this.showQuickReply(), 0 === this.messagePreviewCount ? this.hideQuickReply() : (E.showPreChatForm && !B.prechatFormSubmitted() && E.prechatOptions.fields.forEach(function(e) {
                        e.isRequired && n.hideQuickReply()
                    }), this.hideActionsContainerNotif(), this.resizeTextArea(), setTimeout(function() {
                        n.container && n.container.restyle("height", n.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")
                    }, 50), E.showEmoji.subscribe(function() {
                        n.toggleEmojiAction()
                    }), E.showUploads.subscribe(function() {
                        n.toggleUploadsAction()
                    }), E.showRating.subscribe(function() {
                        n.toggleRatingAction()
                    })))
                }, be.prototype.toggleUploadsAction = function() {
                    var a = this,
                        e = this.container.documentRef.getElementById("uploadFileOption"),
                        o = this.container.documentRef.getElementById("actionsContainer");
                    e && (E.showUploads() ? (e.style.display = "block", this.container.attachUserEventListener("change", function(e) {
                        y.eventHandler.cancelEvent(e);
                        var t = [],
                            i = [];
                        if ((e = y.eventHandler.getTargetElement(e).files) && e.length) {
                            for (var n = 0; n < e.length; n++) e[n].size > a.maxSizeFileUpload ? t.push(e[n]) : n >= a.maxNumberFileUpload ? i.push(e[n]) : y.viewHandler.startUpload(e[n]);
                            y.viewHandler.checkUploadFileWarning(t, i), y.viewHandler.userAction = !1, y.sessionHandler.notifyWindowState("max")
                        }
                    }, "fileInput", "mp-fileInputChanged"), this.chatTextarea.attachUserEventListener("paste", function(e) {
                        var t, i;
                        if ((t = (e.originalEvent || e).clipboardData) && (t = t.items) && t.length) {
                            for (var n = 0; n < t.length; n++)
                                if (-1 !== t[n].type.indexOf("image")) {
                                    var a = t[n].getAsFile();
                                    if (null !== a) {
                                        (i = a).name = y.languageParser.translate("chat", "pasted_image_title", {
                                            dateTime: M.parseChatTime(new Date)
                                        });
                                        break
                                    }
                                } i && (y.viewHandler.startUpload(i), e.preventDefault())
                        }
                    }, null, "mp-chatTextareaPaste"), this.container.attachUserEventListener("dragover", function(e) {
                        e.preventDefault(), e.stopPropagation && e.stopPropagation(), -1 === o.className.indexOf(" drag-over") && M.addClass(o, "drag-over")
                    }, "actionsContainer", "mp-textareaContainerDragOver"), this.container.attachUserEventListener("dragleave", function(e) {
                        var t = a.container.getElementById("tawkchat-message-preview-container").getBoundingClientRect();
                        (e.clientY < t.top || e.clientY >= t.bottom || e.clientX < t.left || e.clientX >= t.right) && (e.preventDefault(), e.stopPropagation && e.stopPropagation(), M.removeClass(o, "drag-over"))
                    }, "actionsContainer", "mp-textareaContainerDragLeave"), this.container.attachUserEventListener("drop", function(e) {
                        e.preventDefault(), e.stopPropagation && e.stopPropagation(), o.className = o.className.replace(/ drag-over/g, "");
                        var t = [],
                            i = [];
                        if ((e = e.target.files || e.dataTransfer.files) && 0 !== e.length) {
                            for (var n = 0; n < e.length; n++) e[n].size > a.maxSizeFileUpload ? t.push(e[n]) : n >= a.maxNumberFileUpload ? i.push(e[n]) : y.viewHandler.startUpload(e[n]);
                            a.chatTextarea.elementReferrer.value = "", a.resizeTextArea(), a.chatTextarea.elementReferrer.value ? a.toggleActionsContentOnTyping(!1) : a.toggleActionsContentOnTyping(!0), y.viewHandler.checkUploadFileWarning(t, i), y.viewHandler.userAction = !1, y.sessionHandler.notifyWindowState("max")
                        }
                    }, "actionsContainer", "mp-textareaContainerDrop")) : e.style.display = "none")
                }, be.prototype.toggleRatingAction = function() {
                    var e = this.container.getElementById("rateMainWrapper"),
                        t = this.container.getElementById("rateContainer");
                    e && t && (E.showRating() ? (e.style.display = "block", this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                        y.chatHandler.changeRating(1), y.viewHandler.userAction = !1, y.sessionHandler.notifyWindowState("max"), y.eventHandler.cancelEvent(e)
                    }, "ratePositive", "mp-ratepveclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                        y.chatHandler.changeRating(-1), y.viewHandler.userAction = !1, y.sessionHandler.notifyWindowState("max"), y.eventHandler.cancelEvent(e)
                    }, "rateNegative", "mp-ratenveclick"), this.container.attachUserEventListener("mouseover", function() {
                        t.style.display = "block"
                    }, "rateMainWrapper", "rateMainWrapperOverQR"), this.container.attachUserEventListener("mouseout", function() {
                        t.style.display = "none"
                    }, "rateMainWrapper", "rateMainWrapperOutQR")) : e.style.display = "none")
                }, be.prototype.updateMobilePositions = function() {
                    var e = {},
                        t = E.minimizedDimensions().width,
                        i = E.minimizedDimensions().height;
                    E.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") && (this.wrapper.className += "center"), e.top = "calc(50% - " + (.5 * t + 20) + "px) !important", e.bottom = "auto !important", E.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), e.right = this.offsetX + i + 15 + 100 + "px !important", e.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"), e.left = this.offsetX + i + 15 + 100 + "px !important", e.right = "auto !important")) : (i = y.viewHandler.minifiedBoxHeight * y.viewHandler.zoom + 30, E.isTopPositioned() ? (e.bottom = "auto !important", e.top = i + 30 + "px !important", -1 === this.wrapper.className.indexOf("top") && (this.wrapper.className += " top")) : (e.bottom = i + 30 + "px !important", e.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") && (this.wrapper.className += " bottom")), E.isRightPositioned() ? (e.right = "10px !important", e.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right")) : (e.right = "auto !important", e.left = "10px !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"))), this.container.massRestyle(e)
                }, be.prototype.updatePositions = function() {
                    var e = {},
                        t = E.minimizedDimensions().width,
                        i = E.minimizedDimensions().height;
                    E.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") && (this.wrapper.className += "center"), e.top = "calc(50% - " + (.5 * t + 40) + "px) !important", e.bottom = "auto !important", E.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), e.right = this.offsetX + i + 15 + "px !important", e.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"), e.left = this.offsetX + i + 15 + "px !important", e.right = "auto !important")) : (E.isTopPositioned() ? (e.top = E.minimizedDimensions().height + this.offsetY + "px !important", e.bottom = "auto !important", -1 === this.wrapper.className.indexOf("top") && (this.wrapper.className += " top")) : (E.isDesktopRectangle() ? e.bottom = E.minimizedDimensions().height + this.offsetY + 10 + "px !important" : e.bottom = 80 + this.offsetY + "px !important", e.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") && (this.wrapper.className += " bottom")), E.isRightPositioned() ? (e.right = this.offsetX + "px !important", e.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right")) : (e.left = this.offsetX + "px !important", e.right = "auto !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"))), this.container.massRestyle(e)
                }, be.prototype.setStyleToSingleAgent = function() {
                    var e, t, i;
                    if (this.messagePreviewContainer && this.container)
                        for (e = this.messagePreviewContainer.getElementsByClassName("messageBody"), t = this.container.documentRef.getElementById("actionsContainer"), i = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop = "10px", t.setAttribute("style", "border-radius:5px 5px 5px 5px !important; background-color: #fff"), i.setAttribute("style", "border-radius:5px 5px 5px 5px !important"), t = 0; t < e.length; t++) i = 10, e[t].setAttribute("style", "border-bottom-width:1px !important; border-radius:5px 5px 5px 5px !important"), 0 === t && (i = 0), e[t].parentElement.setAttribute("style", "margin-top:" + i + "px !important")
                }, be.prototype.setStyleToMultipleAgent = function() {
                    var e, t, i;
                    if (this.messagePreviewContainer && this.container)
                        for (e = this.messagePreviewContainer.getElementsByClassName("messageBody"), t = this.container.documentRef.getElementById("actionsContainer"), i = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop = "0px", t.setAttribute("style", "border-radius:0px 0px 5px 5px !important; background-color: #f8f8f8"), i.setAttribute("style", "border-radius:0px 0px 5px 5px !important"), t = 0; t < e.length; t++) 0 === t ? 1 === this.messagePreviewCount ? e[t].setAttribute("style", "border-bottom-width: 3px !important; border-radius:5px 5px 0px 0px !important") : e[t].setAttribute("style", "border-bottom-width:1px !important; border-radius:5px 5px 0px 0px !important") : (t === e.length - 1 ? e[t].setAttribute("style", "border-bottom-width:3px !important; border-radius:0px 0px 0px 0px !important") : e[t].setAttribute("style", "border-bottom-width:1px !important; border-radius:0px 0px 0px 0px !important"), e[t].parentElement.setAttribute("style", "margin-top:0px !important"))
                }, be.prototype.hide = function() {
                    if (this.isShown = !1, this.container.restyle("display", "none !important"), this.messagePreviewContainer) {
                        this.messagePreviewContainer.innerHTML = "";
                        for (var e = 0; e < this.timeIntervalsArr.length; e++) clearInterval(this.timeIntervalsArr[e].timeInterval);
                        this.timeIntervalsArr = [], this.prevSenderUid = "", this.closeEmojiSelection(), o && o.showBubble()
                    }
                }, be.prototype.removeCallRequest = function() {
                    this.incomingCallContainer && (this.incomingCallContainer.elementReferrer.parentElement && (this.incomingCallContainer.elementReferrer.outerHTML = ""), this.incomingCallContainer = null), k.mobileBrowserName && this.hide()
                }, be.prototype.appendCallRequest = function(e) {
                    var t = w.incomingCallRequest,
                        i = e.callId,
                        n = (n = (e = S.agentProfiles[S.profiles[e.caller.urid]]) && e.pi ? B.agentImgUrl + "/" + e.pi : "") ? "url('" + n + "');" : "transparent;";
                    y.chatHandler.webrtcWin && !y.chatHandler.webrtcWin.closed ? y.chatHandler.webrtcWin.focus() : (t = (t = (t = t.replace(/__IMAGE_URL__/, n)).replace(/__INCOMING_CALL__/, y.languageParser.translate("chat", "incoming_call_message", {
                        name: e.n
                    }))).replace(/__ACCEPT_CALL__/, y.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, y.languageParser.translate("chat", "decline_call")), (e = new me("incoming-call")).template = t, e.buildView(), this.messagePreviewContainer.insertBefore(e.elementReferrer, this.messagePreviewContainer.firstElementChild), e.elementReferrer.style.marginBottom = 0 === this.messagePreviewCount ? "0px" : "10px", this.incomingCallContainer = e, t = this.container.getElementById("accept-call"), e = this.container.getElementById("decline-call"), t && y.eventHandler.listen(t, "click", function() {
                        clearTimeout(y.viewHandler.incomingCallTimeout), M.getWebRTCToken(!1, !1, function() {
                            y.viewHandler.removeCallRequest()
                        }), y.viewHandler.userAction = !0, y.sessionHandler.notifyWindowState("max")
                    }, "mp-acceptVideoCall"), e && y.eventHandler.listen(e, "click", function() {
                        clearTimeout(y.viewHandler.incomingCallTimeout), M.rejectCall(i, function() {
                            y.viewHandler.removeCallRequest()
                        }), y.viewHandler.userAction = !0, y.sessionHandler.notifyWindowState("max")
                    }, "mp-declineVideoCall"), y.audioPlayer.play("chat_sound"), 0 === this.messagePreviewCount ? (this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px"), this.messagePreviewContainer.style.maxHeight = this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px", this.hideQuickReply()) : (this.messagePreviewContainer.style.maxHeight = this.container.elementReferrer.offsetHeight + "px", this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + this.messagePreviewContainer.offsetHeight + "px")))
                }, be.prototype.appendCallInfo = function(e) {
                    var t, i, n, a, o, r, s, l, d, c, p;
                    k.mobileBrowserName || (n = w["messagePreview-callInfo"], l = e.callId, a = e.caller, e = e.isMissed, r = o = null, s = Date.now(), d = o = t = null, l = "callInfo-" + l, c = "", p = d = null, this.container && this.messagePreviewContainer && e && (d = y.languageParser.translate("chat", "missed_visitor_messagePreview"), "transparent" !== (i = (t = (o = S.agentProfiles[S.profiles[a.urid]]) && o.pi ? B.agentImgUrl + "/" + o.pi : "") ? "url('" + t + "');" : "transparent;") && (i += "background-position:0 0;background-size:28px 28px"), (t = new me(l, null, {
                        className: "message-preview-item"
                    }, null, this.documentRef)).template = M.escapeTemplateReplacement(n, [{
                        placeholder: "__CALL_INFO__",
                        textReplace: d
                    }, {
                        placeholder: "__CALLER_NAME__",
                        textReplace: o.n
                    }, {
                        placeholder: "__IMAGE_URL__",
                        textReplace: i
                    }, {
                        placeholder: "__ELAPSED_TIME__",
                        textReplace: y.languageParser.translate("chat", "justNow")
                    }]), t.buildView(), E.isTopPositioned() ? this.messagePreviewContainer.insertBefore(t.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) : this.messagePreviewContainer.appendChild(t.elementReferrer), o = t.elementReferrer.getElementsByClassName("btn-icon")[0], d = t.elementReferrer.getElementsByClassName("mp-callIconContainer")[0], e && (o.style.transform = "rotate(135deg)", o.style.top = "1px", d.style.backgroundColor = "#e52f48"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "10px"), this.prevSenderUid === S.profiles[a.urid] && (c += " hidden-profile"), t.elementReferrer.className += c, t.elementReferrer.setAttribute("data-uid", S.profiles[a.urid]), p = t.elementReferrer.getElementsByClassName("mp-callInfoElapsedTime")[0], this.timeIntervalsArr.push({
                        messageId: l,
                        timeInterval: setInterval(function() {
                            r = Math.floor((Date.now() - s) / 1e3), p.innerHTML = r < 60 ? y.languageParser.translate("chat", "justNow") : y.languageParser.translate("chat", "minutes", {
                                num: Math.floor(r / 60)
                            }) + " ago"
                        }, 6e4)
                    }), this.prevSenderUid = S.profiles[a.urid], 3 < this.messagePreviewCount && (E.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) : this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])), this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px"), t.elementReferrer.className += " animate-fade-object"))
                }, be.prototype.scrollToBottom = function() {
                    this.messagePreviewContainer && (this.messagePreviewContainer.scrollTop = 1e8)
                }, be.prototype.parseSurvey = function(e, t) {
                    var i, n, a, o, r, s, l = e.match(M.regSurvey),
                        d = "";
                    if (!l) return {
                        message: e,
                        isSurvey: !1
                    };
                    for (o = e.match(M.regSurveyQuestion), r = "survey-" + (new Date).getTime(), i = 0, n = l.length; i < n; i++) a = (a = l[i].replace(M.regOption, "")).replace(M.regBr, ""), a = M.trim(a), s = r + i, d += M.escapeTemplateReplacement(w["survey-option"], [{
                        placeholder: /__RADIO_ID__/gm,
                        textReplace: s
                    }, {
                        placeholder: "__RADIO_NAME__",
                        textReplace: t
                    }, {
                        placeholder: /__RADIO_VALUE__/gm,
                        textReplace: a
                    }]);
                    return {
                        message: M.escapeTemplateReplacement(w["tawk-survey-wrapper"], [{
                            placeholder: "__QUESTION__",
                            textReplace: o[0].replace(M.regOption, "")
                        }, {
                            placeholder: "__OPTIONS__",
                            textReplace: d
                        }]),
                        isSurvey: !0
                    }
                }, be.prototype.appendMessage = function(e) {
                    var t = this,
                        i = null,
                        n = w["message-preview-item"],
                        a = null,
                        o = null,
                        r = o = null,
                        s = r = null,
                        l = "",
                        d = null,
                        d = !1,
                        c = Date.now(),
                        p = "msgPreview-messageId-" + (new Date).getTime().toString() + Object.keys(y.chatHandler.messages).length,
                        h = new Date(e.time).getTime();
                    e && this.container && (o = e.message, r = (r = e.profileImg ? e.profileImg ? "https://tawk.link/" + e.profileImg : "" : (r = S.agentProfiles[e.ownerId]) && r.pi ? B.agentImgUrl + "/" + r.pi : "") ? "url('" + r + "');" : "transparent;", this.messagePreviewContainer && (void 0 !== ie && (0 === (o = ie.unifyUnicode(o)).replace(ie.regUnicode, "").trim().length && (l += " emojionly"), o = ie.toImage(o)), o = "s" === e.senderType ? this.limitMessageLength(o, 500) : this.limitMessageLength(o, 150), e.data && e.data.file && (o = y.viewHandler.parseUploadedFile(e.data.file)), o = (d = this.parseSurvey(o, p)).message, d = d.isSurvey, (i = new me(p, null, {
                        className: "message-preview-item"
                    }, null, this.documentRef)).template = M.escapeTemplateReplacement(n, [{
                        placeholder: "__MESSAGE__",
                        textReplace: o
                    }, {
                        placeholder: "__NAME__",
                        textReplace: e.name
                    }, {
                        placeholder: "__IMAGE_URL__",
                        textReplace: r
                    }, {
                        placeholder: "__TIME__",
                        textReplace: y.languageParser.translate("chat", "justNow")
                    }]), i.buildView(), E.isTopPositioned() ? this.messagePreviewContainer.insertBefore(i.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) : this.messagePreviewContainer.appendChild(i.elementReferrer), e.data && e.data.file && (i.elementReferrer.getElementsByClassName("messageBody")[0].className += " imageMessageBody"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "10px"), e.ownerId && this.prevSenderUid === e.ownerId && (l += " hidden-profile"), i.elementReferrer.className += l, i.elementReferrer.setAttribute("data-uid", e.ownerId), a = i.elementReferrer.getElementsByClassName("messageTime")[0], this.timeIntervalsArr.push({
                        messageId: p,
                        timeInterval: setInterval(function() {
                            s = Math.floor((Date.now() - c) / 1e3), a.innerHTML = s < 60 ? y.languageParser.translate("chat", "justNow") : y.languageParser.translate("chat", "minutes", {
                                num: Math.floor(s / 60)
                            }) + " ago"
                        }, 1e3),
                        timestamp: h
                    }), this.prevSenderUid = e.ownerId, o = i.elementReferrer.firstElementChild, y.eventHandler.listen(o, y.viewHandler.clickEvent, function() {
                        t.removeElement(i.elementReferrer)
                    }, "close-" + i.elementReferrer.id), 3 < this.messagePreviewCount && (E.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) : this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])), t.scrollToBottom(), d && this.addSurveyHandlers(p), this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"), i.elementReferrer.className += " animate-fade-object"))
                }, be.prototype.addSurveyHandlers = function(i) {
                    var e, n = this;
                    this.container && (e = this.container.getElementById(i), (e = M.getElementsByTagName(e, "input")).forEach(function(e, t) {
                        e.id && n.container.attachUserEventListener("click", function() {
                            n.lastRadioButton !== e.id && (n.lastRadioButton = e.id, y.chatHandler.sendMessage(e.value), y.sessionHandler.notifyWindowState("max"), y.viewHandler.scrollToBottom())
                        }, e.id, "survey" + i + t + "click")
                    }))
                }, be.prototype.limitMessageLength = function(e, t) {
                    var i = 0;
                    if (e.length > t)
                        for (i = 0; i < t;)
                            if ('<img class="emojione"' === e.substring(i, i + 21) || '<a target="_blank"' === e.substring(i, i + 18)) {
                                for (var n = i; n < e.length; n++)
                                    if (i++, t++, ">" === e.substring(n, n + 1)) {
                                        --t;
                                        break
                                    }
                            } else i++;
                    return e.substring(0, t) + (e.length > t ? "[...]" : "")
                }, be.prototype.removeAllElements = function() {
                    for (var e = null, t = 0, i = E.minimizedDimensions().width, n = 0; n < this.timeIntervalsArr.length; n++) clearInterval(this.timeIntervalsArr[n].timeInterval), this.timeIntervalsArr.splice(n, 1);
                    if (this.messagePreviewContainer) {
                        for (t = (e = this.messagePreviewContainer.getElementsByClassName("message-preview-item")).length, n = 0; n < t; n++) e[0].parentElement && (e[0].outerHTML = "");
                        this.messagePreviewCount = 0, this.removeCallRequest(), this.prevSenderUid = "", E.isCenterPositioned() && this.container.restyle("top", "calc(50% - " + .5 * i + "px) !important"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "0px"), this.hide()
                    }
                }, be.prototype.removeElement = function(e) {
                    for (var t, i = null, n = 0; n < this.timeIntervalsArr.length; n++)
                        if (this.timeIntervalsArr[n].messageId === e.id) {
                            clearInterval(this.timeIntervalsArr[n].timeInterval), this.timeIntervalsArr.splice(n, 1);
                            break
                        } if (t = this.messagePreviewContainer.getElementsByClassName("message-preview-item"), -1 === e.className.indexOf("hidden-profile"))
                        if (E.isTopPositioned()) {
                            for (n = t.length - 2; n < t.length; n--)
                                if ((i = t[n]).getAttribute("data-uid") === e.getAttribute("data-uid")) {
                                    i.className = i.className.replace(/hidden-profile/gi, "");
                                    break
                                }
                        } else
                            for (n = 1; n < t.length; n++)
                                if ((i = t[n]).getAttribute("data-uid") === e.getAttribute("data-uid")) {
                                    i.className = i.className.replace(/hidden-profile/gi, "");
                                    break
                                } e.parentElement && (e.outerHTML = ""), this.messagePreviewCount--, 0 === this.messagePreviewCount && this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "0px")
                }, be.prototype.initQuickReply = function() {
                    var e, t;
                    k.mobileBrowserName || (t = this.container.documentRef.getElementById("tooLongMsgNotification"), this.container.documentRef.getElementById("textareaContainer").insertBefore(this.chatTextarea.buildView(this.container.documentRef), t), e = this.container.getElementById("tawkchat-message-preview-quick-reply-container"), t = this.container.getElementById("file-upload-drop-label"), B.pageStatus() && e && (e = M.rawDecode(E.onlineGreeting.actionMessage), k.isPlaceholderSupported ? this.chatTextarea.elementReferrer.placeholder = e : (this.chatTextarea.elementReferrer.value = e, M.togglePlaceholderText(this.chatTextarea.elementReferrer, e, "chatTextarea")), t.innerHTML = y.languageParser.translate("rollover", "uploadFile"), this.container.getElementById("viewEmoji").setAttribute("title", y.languageParser.translate("chat", "insert_emoji")), this.container.getElementById("uploadFileOption").setAttribute("title", y.languageParser.translate("rollover", "uploadFile")), this.container.getElementById("ratePositive").setAttribute("title", y.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title", y.languageParser.translate("rollover", "negativeRating")), this.attachEventListenerQuickReply(), this.isQuickReplyInitialized = !0))
                }, be.prototype.showQuickReply = function() {
                    k.mobileBrowserName || (this.quickReplyContainer.style.display = "block", this.toggleActionsContentOnTyping(!0))
                }, be.prototype.hideQuickReply = function() {
                    this.quickReplyContainer && (this.quickReplyContainer.style.display = "none")
                }, be.prototype.attachEventListenerQuickReply = function() {
                    var t = this;
                    this.container.documentRef.getElementById("notifMessageText").innerHTML = y.languageParser.translate("chat", "message_too_long"), this.hideActionsContainerNotif(), this.chatTextarea.attachUserEventListener("keydown", function(e) {
                        if (t.resizeTextArea(), 13 === e.keyCode && !e.shiftKey) {
                            if (5e3 < this.value.length) return void e.preventDefault();
                            y.viewHandler.userAction = !1, y.sessionHandler.notifyWindowState("max"), y.viewHandler.scrollToBottom()
                        }
                        this.value ? t.toggleActionsContentOnTyping(!1) : t.toggleActionsContentOnTyping(!0), y.chatHandler.sendTextPreview(e)
                    }, null, "mp-chatinputkeyupresize"), this.chatTextarea.attachUserEventListener("keyup", function() {
                        this.value.length <= 5e3 ? t.hideActionsContainerNotif() : t.showActionsContainerNotif(), this.value ? t.toggleActionsContentOnTyping(!1) : t.toggleActionsContentOnTyping(!0), t.resizeTextArea()
                    }, null, "mp-chatinputkeyup")
                }, be.prototype.toggleActionsContentOnTyping = function(e) {
                    var t = this.container.getElementById("hidableActionsWrapper"),
                        i = this.container.getElementById("textareaContainer");
                    e ? (t.style.display = "block", M.addClass(i, "additionalPadding")) : (t.style.display = "none", M.removeClass(i, "additionalPadding"))
                }, be.prototype.toggleEmojiAction = function() {
                    var t = this,
                        e = this.container.getElementById("viewEmoji"),
                        i = this.container.documentRef.getElementById("emoji-selection-container"),
                        n = this.container.getElementById("textareaContainer");
                    E.showEmoji() ? (e.style.display = "block", M.addClass(n, "with-emoji"), i.innerHTML = w.loader, this.container.attachUserEventListener("click", function(e) {
                        e.stopPropagation(), "active" === t.container.getElementById("viewEmoji").className ? t.closeEmojiSelection() : (t.container.getElementById("viewEmoji").className = "active", le(i), t.container.restyle("height", t.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"))
                    }, "viewEmoji", "mp-viewEmojiClick")) : (e.style.display = "none", M.removeClass(n, "with-emoji"))
                }, be.prototype.closeEmojiSelection = function() {
                    var e, t;
                    k.mobileBrowserName || (e = this.container.documentRef.getElementById("actionsContainer"), t = this.container.documentRef.getElementById("emoji-selection-container"), this.container.getElementById("viewEmoji").className = "", e.style.height = "50px", M.removeClass(t, "showWithFade"), this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"))
                }, be.prototype.resizeTextArea = function() {
                    var o = this;
                    clearTimeout(this.resizeThrottle), k.mobileBrowserName || (this.resizeThrottle = setTimeout(function() {
                        var e = o.chatTextarea.elementReferrer.value,
                            t = o.container.documentRef.getElementById("actionsContainer"),
                            i = o.container.documentRef.getElementById("textareaContainer"),
                            n = e.split(/\r\n|\r|\n/).length || 1,
                            a = 20 * n;
                        1 === n && o.chatTextarea.elementReferrer.scrollHeight >= o.chatTextarea.elementReferrer.clientHeight && (a = o.chatTextarea.elementReferrer.scrollHeight), e && 20 <= a ? (a = 150 < a ? 150 : a, o.isActionsContainerNotifShown ? (a += 52, i.style.paddingBottom = "67px") : i.style.paddingBottom = "15px", t.style.height = a - 20 + 50 + "px", o.container.getElementById("tawkchat-message-preview-container").offsetHeight > o.container.elementReferrer.offsetHeight && o.container.restyle("height", o.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")) : (t.style.height = "50px", i.style.paddingBottom = "15px")
                    }, 100))
                }, be.prototype.addEmojiToInput = function(e) {
                    k.isPlaceholderSupported || this.chatTextarea.elementReferrer.value !== M.rawDecode(E.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = ""), this.chatTextarea.elementReferrer.value += e, this.chatTextarea.elementReferrer.focus(), this.closeEmojiSelection()
                }, be.prototype.showActionsContainerNotif = function() {
                    k.mobileBrowserName || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display = "block", this.isActionsContainerNotifShown = !0)
                }, be.prototype.hideActionsContainerNotif = function() {
                    k.mobileBrowserName || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display = "none", this.isActionsContainerNotifShown = !1)
                };
                var ye = TawkClass.extend({
                    init: function() {
                        this.chatContainer = null, this.removeAgentNotification = !1, this.lastRadioButton = null, this.clickEvent = "click", this.isPopupFocused = !1, this.indicator = null, this.newMessageNotSeen = !1, this.unseenMessages = [], this.lastMessageTime = null, this.totalUnseenMessages = 0, this.retryUploadList = this.removeDividerTimeout = null, this.tawktoLinkName = M.getRandomName(), this.bottomContainerName = M.getRandomName(), this.currentScrollY = this.incomingCallTimeout = null, this.callData = {}, this.mainAgent = null
                    },
                    show: function() {
                        var e = this,
                            t = "visibilitychange";
                        "webkitvisibilitychange" in document ? t = "webkitvisibilitychange" : "mozvisibilitychange" in document ? t = "mozvisibilitychange" : "msvisibilitychange\ufeff" in document && (t = "msvisibilitychange\ufeff"), y.eventHandler.listen(h, "focus", function() {
                            y.viewHandler.messagePreview && y.viewHandler.indicator.pageTitleNotification.off(), e.checkSeenMessageViewport()
                        }, "windowOnFocus"), y.eventHandler.listen(document, t, function() {
                            document.hidden || (y.viewHandler.messagePreview && y.viewHandler.indicator.pageTitleNotification.off(), e.checkSeenMessageViewport())
                        }, "documentVisibilityChange"), y.eventHandler.listen(h, "popstate", function() {
                            y && y.visitorHandler && y.visitorHandler.sendNavigationEvent()
                        }, "windowOnPopstate"), y.eventHandler.listen(h, "hashchange", function() {
                            h.location && h.location.hash && "#" === h.location.hash || y && y.visitorHandler && y.visitorHandler.sendNavigationEvent()
                        }, "windowOnHashchange")
                    },
                    appendAgent: function(e) {
                        var t = "",
                            i = this.chatContainer,
                            n = i.getElementById("agentProfileContainer"),
                            a = i.getElementById("agentList"),
                            o = i.getElementById("chatWrapper"),
                            r = i.getElementById("headerAccountStateContainer"),
                            s = i.getElementById("shortMessage");
                        i && n && a && (-1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && (s.style.display = "none", n.className = "show"), y.agents.agentsCount++, 1 < y.agents.agentsCount || 1 === y.agents.agentsCount && this.mainAgent && this.mainAgent.pid !== e.pid ? o.classList.remove("one-agent") : o.classList.add("one-agent"), 1 === y.agents.agentsCount ? (this.mainAgent = e, y.viewHandler.renderAgentHeader(e.pid), this.renderAgentMinimizedWidget(e.pid)) : (y.viewHandler.renderAgentHeader(e.pid), r.classList.add("multiple-agent")), y.viewHandler.openAgentList(), n = w["agent-profile"], o = w["agent-profile-image"], r = w["agent-profile-description"], i = new me("agentProfile-" + e.pid, null, {
                            className: "agentWrapper clearfix"
                        }, null, i.documentRef), (s = e.pi ? B.agentImgUrl + "/" + e.pi : "") && (t = "background-image : url('" + s + "'); background-position : 0px 0px;"), t += "box-shadow: 0px 0px 0px 1px " + E.headerTxtColor + ";", r = M.escapeTemplateReplacement(r, [{
                            placeholder: "__POSITION_CLASS__",
                            textReplace: "agentName"
                        }, {
                            placeholder: "__POSITION__",
                            textReplace: e.pst
                        }, {
                            placeholder: "__NAME__",
                            textReplace: e.n
                        }]), o = o.replace("__PROFILE_ID__", e.pid).replace("__IMAGE_URL__", t), i.template = M.escapeTemplateReplacement(n, [{
                            placeholder: "__AGENT_PROFILE_DETAIL__",
                            textReplace: r
                        }, {
                            placeholder: "__AGENT_PROFILE_IMAGE__",
                            textReplace: o
                        }, {
                            placeholder: "__ID__",
                            textReplace: ""
                        }]), a.appendChild(i.buildView()), a.style.left = "50%")
                    },
                    removeAgent: function(e) {
                        var t, i, n, a, o = m.container.elementReferrer ? m.container : null,
                            r = o.getElementById("chatWrapper");
                        o && (y.agents.agentsCount--, t = o.getElementById("agentProfileContainer"), i = o.getElementById("agentProfile-" + e), n = o.getElementById("profileImage-" + e), a = o.getElementById("profileDetail" + e), 0 === y.agents.agentsCount ? (y.viewHandler.clearAgentHeader(), this.clearAgentFooter()) : 1 === y.agents.agentsCount && (y.eventHandler.removeEventHandler(t, "click", this.expandAgentList), o.getElementById("headerAccountStateContainer").classList.remove("multiple-agent")), 0 < y.agents.agentsCount && this.mainAgent.pid === e && (this.mainAgent = S.agentProfiles[Object.keys(S.agentProfiles)[0]], this.renderAgentMinimizedWidget(this.mainAgent.pid)), i && i.parentNode.removeChild(i), n && (n.parentNode && n.parentNode.removeChild(n), t.style.width = y.agents.agentsCount <= 1 ? "" : 30 * y.agents.agentsCount - 10 * (y.agents.agentsCount - 1) + "px"), a && a.parentNode && a.parentNode.removeChild(a), 1 === y.agents.agentsCount && (this.renderAgentMinimizedWidget(this.mainAgent.pid), r.className = "single-agent", y.viewHandler.calculateOwnerNameAndMessageTimeSizeAll(), y.viewHandler.messagePreview && y.viewHandler.messagePreview.setStyleToSingleAgent())), 0 === y.agents.agentsCount && (y.viewHandler.clearAgentHeader(), this.clearAgentFooter(), y.viewHandler.closeAgentList())
                    },
                    clearAgentFooter: function() {
                        var e, t, i, n = o && o.container && o.container.elementReferrer ? o.container : null;
                        k.mobileBrowserName && this.minifiedWidget && this.minifiedWidget.container && (n = this.minifiedWidget.container), n && this.chatContainer && (t = n.getElementById("tawkchat-status-text-container"), i = n.getElementById("min-agent-profile-details"), e = n.getElementById("agent-profile-image"), (n = n.getElementById("tawkchat-status-agent-container")) || n) && (t && (t.style.display = "block"), i && (i.innerHTML = ""), e.innerHTML = "", n.style = "", n.className = "")
                    },
                    renderAgentMinimizedWidget: function(e) {
                        var t, i, n, a = o && o.container && o.container.elementReferrer ? o.container : null;
                        k.mobileBrowserName && this.minifiedWidget && this.minifiedWidget.container && (a = this.minifiedWidget.container), a && this.chatContainer && e && (t = S.agentProfiles[e], e = a.getElementById("tawkchat-status-agent-container"), iconContainer = a.getElementById("tawkchat-status-icon-container"), n = a.getElementById("agent-profile-image"), tawkStatusMessage = a.getElementById("tawkchat-status-text-container"), profileDetails = a.getElementById("min-agent-profile-details"), i = a.getElementById("tawkchat-chat-indicator"), e && (this.clearAgentFooter(), a = t.pi ? B.agentImgUrl + "/" + t.pi : "", n.style.backgroundImage = a ? "url('" + a + "')" : "", n.style.boxShadow = "0px 0px 0px 1px " + E.headerTxtColor, e.className += "appear", profileDetails && (profileDetails.innerHTML = '<p class="name">' + t.n + '</p><p class="position">' + t.pst + "</p>"), tawkStatusMessage && E.isDesktopRectangle() && (tawkStatusMessage.style.display = "none"), i && "block" === i.style.display && y.viewHandler.handleIndicatorToggle(!0)))
                    },
                    clearAgentHeader: function() {},
                    handleAcknowledgment: function(t) {
                        var i, e, n, a, o, r, s, l = this.chatContainer;
                        if (l && t.messageId && (a = l.getElementById(t.messageId))) {
                            n = a.parentNode, e = 0;
                            for (var d = a.childNodes.length; e < d; e++) {
                                var c = a.childNodes[e]; - 1 !== c.className.indexOf("messageBody") && (i = M.getElementsByClassName(c, "messageWrapper"), s = M.getElementsByClassName(c, "messageStatusContainer"))
                            }
                            i && i.length && s && s.length && (s = s[0], i = i[0], t.error ? s && (n = w["chat-resend-link"].replace("__MESSAGE_ID__", t.messageId).replace("__NOT_DELIVERED__", y.languageParser.translate("chat", "resend")).replace("__FAILED__", y.languageParser.translate("chat", "failed")), i.className = "messageWrapper error", s.className = "messageStatusContainer errorInMessage", s.innerHTML = n, o = M.rawDecode(i.childNodes[0].textContent || i.childNodes[0].innerText), this.scrollToBottom(), r = y.eventHandler.listen(s, y.viewHandler.clickEvent, function(e) {
                                y.eventHandler.cancelEvent(e), y.chatHandler.sendMessageToServer(o, t.messageId), l.getElementById("errorFor" + t.messageId) && (i.className = "messageWrapper pending"), s.className = "messageStatusContainer pending", s.childNodes[0].className = "", s.childNodes[0].innerHTML = w.loader, y.eventHandler.removeEventHandler(i, "click", r)
                            }, "resend" + t.messageId + "click")) : (e = y.chatHandler.messages[t.order], y.viewHandler.addWaitTime(), n.removeChild(a), y.chatHandler.prepareMessage(e, !0, !1, !0)))
                        }
                    },
                    handleEndChat: function() {},
                    clearAgents: function() {},
                    handleRestartChat: function() {},
                    appendMessage: function(t) {
                        var e, i, n, a = !1,
                            o = null,
                            r = t.message,
                            s = t.time,
                            l = t.senderType,
                            d = this.chatContainer.documentRef,
                            c = this.ifScrollbarDown(),
                            p = d.getElementById("chatWrapper"),
                            h = "messageId-" + (new Date).getTime().toString() + Object.keys(y.chatHandler.messages).length,
                            o = "messageContainer clearfix",
                            m = {
                                "chat-message-row": w["chat-message-row"],
                                "chat-resend-link": w["chat-resend-link"],
                                "chat-message-owner-agent": w["chat-message-owner-agent"],
                                "chat-message-owner-visitor": w["chat-message-owner-visitor"],
                                "chat-message-container": w["chat-message-container"],
                                "chat-notification-container": w["chat-notification-container"],
                                "chat-message-status-row": w["chat-message-status-row"],
                                "chat-divider": w["chat-divider"]
                            },
                            s = M.parseChatTime(s);
                        y.chatHandler.noRedraw || y.viewHandler.isMaximized || E.isEmbedded || E.isPopup || k.mobileBrowserName || "v" === l || "c" !== t.type || (E.hideWidgetOnLoad && "max" === E.onClickAction ? (y.viewHandler.userAction = !1, y.sessionHandler.notifyWindowState("max")) : y.viewHandler.messagePreview && y.viewHandler.messagePreview.show ? y.viewHandler.messagePreview.show(y.viewHandler.indicator.unansweredMessages + 1, t) : y.viewHandler.messagePreview || this.hasBeenMaximizedOnce || "max" !== E.onClickAction || y.chatHandler.agentHasMessaged || (y.viewHandler.userAction = !1, y.sessionHandler.notifyWindowState("max"), this.hasBeenMaximizedOnce = !0)), n = (n = t.profileImg ? t.profileImg ? "https://tawk.link/" + t.profileImg : "" : (n = S.agentProfiles[t.ownerId]) && n.pi ? B.agentImgUrl + "/" + n.pi : "") ? "url('" + n + "');" : "transparent;", "a" !== t.senderType && "s" !== t.senderType || (m["chat-message-owner-agent"] = m["chat-message-owner-agent"].replace("__IMAGE_URL__", n)), m["chat-message-status-row"] = t.isPending ? w["chat-message-pending-row"] : m["chat-message-status-row"].replace("__TIME__", s).replace("__TIME_CLASS__", "v" === t.senderType ? "visitor" : "agent").replace("__NAME__", "v" === t.senderType ? "" : t.name), void 0 !== ie && (0 === (r = ie.unifyUnicode(r)).replace(ie.regUnicode, "").trim().length && (o += " emojionly"), r = ie.toImage(r)), S.chatOrder <= 1 && (y.viewHandler.chatContainer.getElementById("changeName").style.display = "block", y.viewHandler.chatContainer.getElementById("emailTranscriptOption").style.display = "block"), "a" === l ? (r = (a = this.parseSurvey(r, h)).message, a = a.isSurvey, y.chatHandler.handleAgentStoppedTyping(t.data.rsc)) : y.chatHandler.visitorHasMessaged || "s" === l || (y.chatHandler.visitorHasMessaged = !0), t.data && t.data.file && (r = this.parseUploadedFile(t.data.file)), "c" === t.type && (e = M.escapeTemplateReplacement(m["chat-message-row"], [{
                            placeholder: "__MESSAGE_STATUS_ROW__",
                            textReplace: m["chat-message-status-row"]
                        }, {
                            placeholder: /__MESSAGE_ID__/gm,
                            textReplace: h
                        }, {
                            placeholder: "__MESSAGE__",
                            textReplace: r
                        }, {
                            placeholder: "__PENDING__",
                            textReplace: t.isPending ? "pending" : ""
                        }]), o = "v" === l ? o + " visitorChatContainer " : o + " agentChatContainer "), o = new me(h, null, {
                            className: o
                        }, null, d), this.lastMessageTime = t.isPending ? this.lastMessageTime : s, "c" === t.type ? (y.chatHandler.lastMessageOwner = "s" === l ? "server" : t.isPending ? y.chatHandler.lastMessageOwner : t.ownerId, r = "a" === l || "s" === l ? ("a" === l && (y.chatHandler.agentHasMessaged = !0, this.removeWaitTime()), M.escapeTemplateReplacement(m["chat-message-owner-agent"], [{
                            placeholder: "__NAME__",
                            textReplace: t.name
                        }])) : M.isGeneratedName(T.name()) && m["chat-message-owner-visitor"] ? M.escapeTemplateReplacement(m["chat-message-owner-visitor"], [{
                            placeholder: "__NAME__",
                            textReplace: t.name
                        }]) : "", i = M.escapeTemplateReplacement(m["chat-message-container"], [{
                            placeholder: "__OWNER_TPL__",
                            textReplace: r
                        }, {
                            placeholder: "__CONTENT__",
                            textReplace: e
                        }]), t.data && "v" === l && (i = i.replace("messageBody", "messageBody file")), "s" === l && (i = (i = i.replace("ownerNameContainer", "ownerNameContainer trigger")).replace("messageBody", "messageBody trigger"))) : "n" === t.type && (y.chatHandler.lastMessageOwner = "notif", i = t.isRtcError ? (e = "video" === t.rtcType ? y.languageParser.translate("chat", "video_call_error") : "screen" === t.rtcType ? y.languageParser.translate("chat", "screen_share_error") : y.languageParser.translate("chat", "voice_call_error"), M.escapeTemplateReplacement(w.noWebrtc, [{
                            placeholder: "__MESSAGE__",
                            textReplace: r
                        }, {
                            placeholder: "__HEADER__",
                            textReplace: e
                        }])) : M.escapeTemplateReplacement(m["chat-notification-container"], [{
                            placeholder: "__MESSAGE_ID__",
                            textReplace: h
                        }, {
                            placeholder: "__MESSAGE__",
                            textReplace: r
                        }, {
                            placeholder: "__TIME__",
                            textReplace: s
                        }])), o.template = i, o.buildView();
                        try {
                            p.insertBefore(o.elementReferrer, d.getElementById("agentTypingContainer"))
                        } catch (e) {
                            g.handleError("Chat wrapper is null to append message : " + JSON.stringify(t), e.fileName, e.lineNumber, e.stack)
                        }
                        return t.dontPlaySound || "v" === l || t.isPending || this.popoutWin && !this.popoutWin.closed || y.audioPlayer.play("chat_sound"), t.timeStamp > B.lastMessageTimestamp && ("v" === l ? B.lastMessageTimestamp = t.timeStamp : !document.hidden && M.chatElementInView(o.elementReferrer) && y.viewHandler.isMaximized ? this.updateLastTimestamp(t.timeStamp) : (this.unseenMessages.push(h), this.updateTotalUnseenMessages(), 0 < this.totalUnseenMessages && (this.setDivider(o.elementReferrer, m["chat-divider"], o), t = this.chatContainer.documentRef.getElementById("newMessagesBar")) && (this.chatContainer.getElementById("notificationMessageText").innerHTML = y.languageParser.translate("chat", "newMessage", {
                            num: this.totalUnseenMessages
                        })))), !c || y.formHandler.currentForm && !y.viewHandler.isMaximized || this.scrollToBottom(), a && this.addSurveyHandlers(h), h
                    },
                    parseSurvey: function(e, t) {
                        var i, n, a, o, r, s, l = e.match(M.regSurvey),
                            d = "";
                        if (!l) return {
                            message: e,
                            isSurvey: !1
                        };
                        for (o = e.match(M.regSurveyQuestion), r = "survey-" + (new Date).getTime(), i = 0, n = l.length; i < n; i++) a = (a = l[i].replace(M.regOption, "")).replace(M.regBr, ""), a = M.trim(a), s = r + i, d += M.escapeTemplateReplacement(w["survey-option"], [{
                            placeholder: /__RADIO_ID__/gm,
                            textReplace: s
                        }, {
                            placeholder: "__RADIO_NAME__",
                            textReplace: t
                        }, {
                            placeholder: /__RADIO_VALUE__/gm,
                            textReplace: a
                        }]);
                        return {
                            message: M.escapeTemplateReplacement(w["tawk-survey-wrapper"], [{
                                placeholder: "__QUESTION__",
                                textReplace: o[0].replace(M.regOption, "")
                            }, {
                                placeholder: "__OPTIONS__",
                                textReplace: d
                            }]),
                            isSurvey: !0
                        }
                    },
                    updateViewByStatus: function(e) {
                        var t;
                        "emailTranscriptFormOnChatEnded" !== y.formHandler.currentForm && "restartChatForm" !== y.formHandler.currentForm && y.formHandler.closeForm(), E.isPopup && (t = r.getShortMessage(e), document.title = t ? I.pageName() + " - " + M.rawDecode(t) : I.pageName()), "online" === e || "away" === e ? (E.showConsentForm ? y.formHandler.openForm("consentForm") : E.showPreChatForm && !B.prechatFormSubmitted() && y.formHandler.openForm("preChatForm"), this.showWidget(), o && (y.viewHandler.isMaximized || o.showBubble())) : "offline" === e && (E.hideWidgetOnOffline ? this.hideWidget() : (y.formHandler.openForm(E.showConsentForm ? "consentForm" : "offlineForm"), this.showWidget()), o && (o.hideBubble(), this.messagePreview && this.messagePreview.removeAllElements()))
                    }
                });
                ye.prototype.openAgentList = function() {
                    var e = this.chatContainer.getElementById("agentBar");
                    "preChatForm" !== y.formHandler.currentForm && (this.scrollToBottom(), this.chatContainer.getElementById("greetingsContent") && (this.chatContainer.getElementById("greetingsContent").style.display = "none"), e.style.display = "block")
                }, ye.prototype.addProfileDetail = function(e) {
                    var t, i, n, a = this.chatContainer.getElementById("agentProfileContainer");
                    e.pi || 1 < y.agents.agentsCount ? (t = new me("profileDetail", null, null, null, this.chatContainer.documentRef), n = w["agent-profile-description"], t.template = M.escapeTemplateReplacement(n, [{
                        placeholder: "__POSITION_CLASS__",
                        textReplace: e.pst ? "agentName" : "agentNameCentered"
                    }, {
                        placeholder: "__POSITION__",
                        textReplace: e.pst
                    }, {
                        placeholder: "__NAME__",
                        textReplace: e.n
                    }])) : (t = new me("profileDetailNoImage", null, {
                        className: "noImageAgentProfileDetail"
                    }, null, this.chatContainer.documentRef), i = e.pst ? "&nbsp-&nbsp" + e.pst : "", n = w["agent-profile-description-noimage"], t.template = M.escapeTemplateReplacement(n, [{
                        placeholder: "__POSITION__",
                        textReplace: i
                    }, {
                        placeholder: "__NAME__",
                        textReplace: e.n
                    }])), a.appendChild(t.buildView())
                }, ye.prototype.renderAgentWithPosition = function(e) {
                    var t, i, n = this.chatContainer,
                        a = n.getElementById("agentProfileContainer");
                    n && a && e && (e = S.agentProfiles[e], n = new me("profileDetail" + e.pid, null, {
                        className: "agent-profile-detailed theme-background-color"
                    }, null, n.documentRef), t = e.pst ? e.pst : "", i = w["agent-profile-detailed"], n.template = M.escapeTemplateReplacement(i, [{
                        placeholder: "__POSITION__",
                        textReplace: t
                    }, {
                        placeholder: "__NAME__",
                        textReplace: e.n
                    }]), a.appendChild(n.buildView()))
                }, ye.prototype.renderAgentHeader = function(e) {
                    var t, i, n = "",
                        a = this.chatContainer,
                        o = a.getElementById("agentProfileContainer");
                    a && o && e && ((i = (t = S.agentProfiles[e]).pi ? B.agentImgUrl + "/" + t.pi : "") && (n = "background-image : url('" + i + "'); background-position : 0px 0px;z-index: " + (7 - y.agents.agentsCount) + ";"), n += "box-shadow: 0px 0px 0px 1px " + E.headerTxtColor + ";", t = new me("profileImage-" + t.pid, n, {
                        className: "alias-image theme-background-color"
                    }, null, a.documentRef), o.appendChild(t.buildView()), this.renderAgentWithPosition(e), 1 < y.agents.agentsCount && (o.style.width = 30 * y.agents.agentsCount - 10 * (y.agents.agentsCount - 1) + "px"), -1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && (1 === y.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "none"))
                }, ye.prototype.clearAgentHeader = function() {
                    var e = this.chatContainer;
                    e.getElementById("agentProfileContainer").innerHTML = "", e.getElementById("innerWrapper").className = "border-corner", e.getElementById("shortMessage").style.display = "block"
                }, ye.prototype.closeAgentList = function() {
                    var e = this.chatContainer.getElementById("greetingsContent");
                    this.chatContainer.getElementById("agentBar").style.display = "none", e && (M.hasClass(e, "no-content") ? this.chatContainer.getElementById("greetingsContent").style.display = "none" : this.chatContainer.getElementById("greetingsContent").style.display = "block")
                }, ye.prototype.calculateOwnerNameAndMessageTimeSizeAll = function() {
                    var e = this.chatContainer.getElementById("chatWrapper"),
                        t = null,
                        i = null,
                        n = null,
                        a = null;
                    [].forEach.call(e.getElementsByClassName("agentChatContainer"), function(e) {
                        t = e.getElementsByClassName("messageOwnerName")[0], i = e.getElementsByClassName("messageTime")[0], a = e.getElementsByClassName("message")[0], n = e.getElementsByClassName("messageTimeContainer")[0], t && i && a && n && (1 < y.agents.agentsCount && a.offsetWidth < i.offsetWidth + t.offsetWidth ? (n.style.left = 45 + t.offsetWidth + "px", n.style.right = "auto") : (n.style.right = "0", n.style.left = "auto"))
                    })
                }, ye.prototype.resetView = function() {}, ye.prototype.styleAgentBar = function() {}, ye.prototype.expandAgentList = function() {}, ye.prototype.hideWidget = function() {}, ye.prototype.showWidget = function() {}, ye.prototype.toggleWidget = function() {
                    k.mobileBrowserName && y.viewHandler.maximize()
                }, ye.prototype.popoutWidget = function() {
                    k.mobileBrowserName && y.viewHandler.popup()
                }, ye.prototype.handleIndicatorToggle = function() {}, ye.prototype.begin = function() {}, ye.prototype.getViewportDimensions = function(e) {
                    var t = {},
                        i = e ? (e = h, document) : (e = m.container.elementReferrer, m.container.documentRef);
                    return void 0 !== e.innerWidth ? (t.height = e.innerHeight, t.width = e.innerWidth) : void 0 !== i.documentElement && void 0 !== i.documentElement.clientWidth && 0 !== i.documentElement.clientWidth ? (t.height = i.documentElement.clientHeight, t.width = i.documentElement.clientWidth) : (t.height = i.getElementsByTagName("body")[0].clientHeight, t.width = i.getElementsByTagName("body")[0].clientWidth), t
                }, ye.prototype.getActualViewportDimensions = function() {
                    var e = this.getViewportDimensions(!0);
                    return {
                        width: this.isVerticalScrollbar() ? e.width - this.getScrollerWidth() : e.width,
                        height: this.isHorizontalScrollbar() ? e.height - this.getScrollerWidth() : e.height
                    }
                }, ye.prototype.isVerticalScrollbar = function() {
                    return this.getViewportDimensions(!0).height < document.body.scrollHeight
                }, ye.prototype.isHorizontalScrollbar = function() {
                    var e = this.getViewportDimensions(!0).width;
                    return document.documentElement && e < document.documentElement.scrollWidth || e < document.body.scrollWidth
                }, ye.prototype.getScrollerWidth = function() {
                    var e, t = null,
                        i = null,
                        t = 0;
                    return (t = document.createElement("div")).style.cssText = "position: absolute; top: -10000px; left: -10000px; width: 100px; height: 50px; overflow: hidden", (i = document.createElement("div")).style.cssText = "width: 100%; height: 200px", t.appendChild(i), document.body.appendChild(t), e = i.offsetWidth, t.style.overflow = "auto", t = i.offsetWidth, document.body.removeChild(document.body.lastChild), e - t
                }, ye.prototype.addSurveyHandlers = function(i) {
                    var e, n = this;
                    this.chatContainer && (e = this.chatContainer.getElementById(i), (e = M.getElementsByTagName(e, "input")).forEach(function(e, t) {
                        e.id && n.chatContainer.attachUserEventListener("click", function() {
                            n.lastRadioButton !== e.id && (n.lastRadioButton = e.id, y.chatHandler.sendMessage(e.value))
                        }, e.id, "survey" + i + t + "click")
                    }))
                }, ye.prototype.ifScrollbarDown = function() {
                    var e, t, i;
                    return !(!this.chatContainer || !this.chatContainer.elementReferrer) && (e = this.chatContainer.getElementById("chatContainer"), i = this.chatContainer.getElementById("chatPanel"), e && i ? y.formHandler.currentForm ? (i.style.display = "block", t = e.offsetHeight + 10, e = e.scrollHeight - (e.scrollTop + t) < 30, i.style.display = "none", e) : (t = e.offsetHeight + 10, e.scrollHeight - (e.scrollTop + t) < 30) : void 0)
                }, ye.prototype.scrollToBottom = function() {
                    var e, t, i, n;
                    this.chatContainer && this.chatContainer.elementReferrer && (e = this.chatContainer.getElementById("chatContainer"), t = this.chatContainer.getElementById("chatPanel"), e && (i = e.style.display, n = t.style.display, "none" === i && (e.style.display = "block"), "none" === n && (t.style.display = "block"), e.scrollTop = 1e8, "none" === i && (e.style.display = i), "none" === n && (t.style.display = n), -1 === this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && 0 !== e.scrollTop && this.toggleGreetingsView(e.scrollHeight < this.chatContainer.getElementById("chatWrapper").offsetHeight)))
                }, ye.prototype.isChatScrollbar = function() {
                    var e;
                    if (this.chatContainer && this.chatContainer.elementReferrer && (e = this.chatContainer.getElementById("chatContainer"))) return e.scrollHeight > this.getViewportDimensions(E.isPopup).height - 139
                }, ye.prototype.addWaitTime = function() {
                    var e, t, i;
                    !y.chatHandler.agentHasMessaged && E.showWaitTime && (t = this.chatContainer.getElementById("greetingsContent"), (e = this.chatContainer.getElementById("greetingsWaitTime")) && t && (i = Math.ceil(B.waitTime / 6e4), i = y.languageParser.translate("chat", "messageQueuedText", {
                        t: i,
                        strongStart: "<b>",
                        strongEnd: "</b>"
                    }), e.innerHTML = i, e.style.display = "block", t.style.display = "block", this.waitTimeUpdater(!0)))
                }, ye.prototype.removeWaitTime = function() {
                    var e, t;
                    this.chatContainer && this.chatContainer.elementReferrer && (e = this.chatContainer.getElementById("greetingsWaitTime"), t = this.chatContainer.getElementById("greetingsContent"), e && t && (e.innerHTML = "", e.style.display = "none", M.hasClass(t, "no-content") && (t.style.display = "none")))
                }, ye.prototype.waitTimeUpdater = function(e) {
                    var t, i, n = this;
                    if (this.chatContainer && this.chatContainer.elementReferrer && (i = this.chatContainer.getElementById("greetingsWaitTime")) && !(B.waitTime <= 6e4)) {
                        if (t = B.waitTime % 6e4 || 6e4, e) return setTimeout(function() {
                            n.waitTimeUpdater()
                        }, t);
                        B.waitTime -= t, e = Math.ceil(B.waitTime / 6e4), e = y.languageParser.translate("chat", "messageQueuedText", {
                            t: e,
                            strongStart: "<b>",
                            strongEnd: "</b>"
                        }), i.innerHTML = e, setTimeout(function() {
                            n.waitTimeUpdater()
                        }, 6e4)
                    }
                }, ye.prototype.appendAgentIsTypingElement = function(e) {
                    var t, i, n = this.ifScrollbarDown(),
                        a = S.agentProfiles[e];
                    this.chatContainer && (i = a && a.pi ? B.agentImgUrl + "/" + a.pi : "", a.strongStart = "<b>", a.strongEnd = "</b>", t = w["agent-typing"], t = M.escapeTemplateReplacement(t, [{
                        placeholder: "__MESSAGE_ID__",
                        textReplace: e
                    }, {
                        placeholder: /__NAME__/gm,
                        textReplace: a.n
                    }, {
                        placeholder: "__IMAGE_URL__",
                        textReplace: i ? "url('" + i + "');" : "transparent;"
                    }]), this.chatContainer.getElementById("agentTypingContainer").innerHTML += t, this.chatContainer.getElementById("agentTypingContainer").style.display = "block", n && this.scrollToBottom())
                }, ye.prototype.removeAgentTypingElement = function(e) {
                    this.chatContainer && ((e = this.chatContainer.getElementById("agentTyping-" + e)) && e.parentNode.removeChild(e), this.chatContainer.getElementById("agentTypingContainer").style.display = "none")
                }, ye.prototype.changeRating = function(e) {
                    var t = "c";
                    this.chatContainer && (e < 0 ? e = E.showEmoji() && void 0 !== ie ? ":thumbsdown_tone2:" : "&#128078;" : 0 < e ? e = E.showEmoji() && void 0 !== ie ? ":thumbsup_tone2:" : "&#128077;" : (e = y.languageParser.translate("chat", "remove_rate"), t = "n"), y.viewHandler.appendMessage({
                        message: e,
                        type: t,
                        time: new Date,
                        senderType: "v",
                        ownerId: T.visitorId
                    }))
                }, ye.prototype.notifiyDepartmentIsNotOnline = function(e, t) {
                    var i, n, a = this.chatContainer;
                    a && (i = a.getElementById("chatWrapper")) && (n = M.escapeTemplateReplacement(w.departmentOfflineNotification, [{
                        placeholder: "__TITLE__",
                        textReplace: k.isIE6 ? "<span>" + y.languageParser.translate("chat", "notificationTitle") + "</span>" : "<center><span>" + y.languageParser.translate("chat", "notificationTitle") + "</span></center>"
                    }, {
                        placeholder: "__MESSAGE__",
                        textReplace: y.languageParser.translate("chat", "offline" === t ? "departmentIsOffline" : "departmentIsAway", {
                            departmentName: e,
                            strongStart: "<b>",
                            strongEnd: "</b>"
                        })
                    }]), n = M.createElement(a.documentRef, "div", {
                        id: "departmentOfflineNotification",
                        className: "messageContainer"
                    }, null, n), i.insertBefore(n, i.firstChild))
                }, ye.prototype.setDivider = function(e, t, i) {
                    var n, a, o, r = this;
                    !this.chatContainer.documentRef.getElementById("newMessageDivider") && (o = this.chatContainer.documentRef.getElementById("chatWrapper"), (a = new me("newMessageDivider")).template = M.escapeTemplateReplacement(t, [{
                        placeholder: /__NEW_MESSAGES__/gm,
                        textReplace: y.languageParser.translate("chat", "newMessages").toUpperCase()
                    }]), a.buildView(), o.insertBefore(a.elementReferrer, i.elementReferrer), !M.chatElementInView(a.elementReferrer) && (y.viewHandler.isMaximized || E.isPopup || E.isEmbedded) && (n = this.chatContainer.documentRef.getElementById("newMessagesBar"))) && (n.className = "visible", y.eventHandler.listen(n, this.clickEvent, function() {
                        r.scrollToSeeMessage(e), n.className = ""
                    }, "newmessagedivider"))
                }, ye.prototype.removeDivider = function() {
                    var e, t = this;
                    clearTimeout(this.removeDividerTimeout), this.removeDividerTimeout = setTimeout(function() {
                        (e = t.chatContainer.documentRef.getElementById("newMessageDivider")) && e.parentNode.removeChild(e)
                    }, 1e3)
                }, ye.prototype.scrollToSeeMessage = function(e) {
                    var t = this.chatContainer.documentRef.getElementById("chatContainer");
                    e && t && (t.scrollTop = e.offsetTop - t.offsetHeight + 50, this.checkSeenMessageViewport())
                }, ye.prototype.checkUnseenMessages = function() {
                    var e;
                    if (!this.newMessageNotSeen && !this.unseenMessages.length) return !1;
                    for (var t = 0; t < this.unseenMessages.length; t++) M.chatElementInView(this.unseenMessages[t]) && (this.unseenMessages.splice(t, 1), t--);
                    (!this.unseenMessages.length || k.mobileBrowserName && this.ifScrollbarDown()) && (this.newMessageNotSeen = !1, (e = this.chatContainer.documentRef.getElementById("newMessagesBar")) && setTimeout(function() {
                        e.className = ""
                    }, 250), this.removeDivider())
                }, ye.prototype.parseUploadedFile = function(a) {
                    var o, r = "https://tawk.link/" + a.name,
                        s = this,
                        e = w["file-upload"],
                        l = this.ifScrollbarDown(),
                        e = -1 !== ["jpeg", "png", "gif"].indexOf(a.type) && a.size <= 2e6 ? ((o = new Image).onload = function() {
                            var e = M.createElement(s.chatContainer.documentRef, "a", {
                                    href: r,
                                    target: "_blank"
                                }),
                                t = s.chatContainer.getElementById("placeholder-" + a.name),
                                i = null,
                                n = null;
                            t && (e.appendChild(o), e.className = "clearfix", t.parentNode.insertBefore(e, t), t.parentNode.removeChild(t), !y.viewHandler.isMaximized && s.messagePreview && (i = M.createElement(s.messagePreview.container.documentRef, "a", {
                                href: r,
                                target: "_blank"
                            }), (n = s.messagePreview.container.getElementById("placeholder-" + a.name)) && (i.appendChild(o), i.className = "clearfix", n.parentNode.insertBefore(i, n), n.parentNode.removeChild(n)), s.messagePreview.scrollToBottom()), setTimeout(function() {
                                h.requestAnimationFrame(function() {
                                    l && s.scrollToBottom()
                                })
                            }, 1e3 / 6))
                        }, o.setAttribute("src", r), o.setAttribute("class", "uploaded-image"), M.escapeTemplateReplacement(e, [{
                            placeholder: "__FILE_DISPLAY__",
                            textReplace: '<div class="image-loader" id="placeholder-' + a.name + '">' + w.loader + "</div>"
                        }])) : -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(a.mimeType) ? M.escapeTemplateReplacement(e, [{
                            placeholder: "__FILE_DISPLAY__",
                            textReplace: '<video width="auto" height="auto" controls style="display: block; max-width: 420px; width: 100%;"><source src="' + r + '" type="' + a.mimeType + '"></source></video>'
                        }]) : -1 !== ["audio/mp3", "audio/ogg"].indexOf(a.mimeType) ? M.escapeTemplateReplacement(e, [{
                            placeholder: "__FILE_DISPLAY__",
                            textReplace: '<audio controls style="display: block; max-width : 220px;"><source src="' + r + '" type="' + a.mimeType + '"></source></audio>'
                        }]) : w["file-upload-not-img-vid-audio"];
                    return M.escapeTemplateReplacement(e, [{
                        placeholder: "__FILE_NAME__",
                        textReplace: a.fileName
                    }, {
                        placeholder: "__DOWNLOAD_URL__",
                        textReplace: r
                    }, {
                        placeholder: "__DOWNLOAD_TEXT__",
                        textReplace: y.languageParser.translate("chat", "downloadFile")
                    }, {
                        placeholder: "__FILE_SIZE__",
                        textReplace: M.formatFileSize(a.size)
                    }, {
                        placeholder: "__FILE_TYPE__",
                        textReplace: a.type
                    }, {
                        placeholder: "__DOWNLOAD_LABEL__",
                        textReplace: y.languageParser.translate("chat", "download")
                    }])
                }, ye.prototype.startUpload = function(n) {
                    var a = this,
                        t = w.fileUploadProgress,
                        o = this.ifScrollbarDown(),
                        r = this.chatContainer.getElementById("fileInput"),
                        s = n.name || n.fileName,
                        e = M.getElementsByClassName(a.chatContainer.elementReferrer, "upload-error");
                    if (e.length)
                        for (var i = 0; i < e.length; i++) e[i].parentNode.removeChild(e[i]);
                    y.fileUploadHandler.getUploadHandler(function(e) {
                        var i;
                        e.handle ? (i = e.handle, t = M.escapeTemplateReplacement(t, [{
                            placeholder: "__HANDLE__",
                            textReplace: i
                        }, {
                            placeholder: "__FILE_NAME__",
                            textReplace: M.rawEncode(s)
                        }, {
                            placeholder: "__FILE_STATUS__",
                            textReplace: y.languageParser.translate("chat", "uploading")
                        }]), a.chatContainer.getElementById("chatWrapper").innerHTML += t, o && a.scrollToBottom(), y.fileUploadHandler.uploadFile(i, n, s, function(e, t) {
                            r.value = "", e.success || a.handleUploadError(n, s, i, t)
                        })) : (a.handleUploadError(n, s, i), r.value = "")
                    })
                }, ye.prototype.handleUploadError = function(e, t, i, n) {
                    var a, o = this.ifScrollbarDown(),
                        r = this,
                        s = document.createElement("a"),
                        l = new me("uploadFailedNotification"),
                        d = (d = (d = w.uploadFailedNotification).replace(/__UPLOAD_FAILED_LABEL__/, y.languageParser.translate("chat", "generalUploadErrorLabel"))).replace(/__UPLOAD_FAILED_MESSAGE__/, y.languageParser.translate("chat", "generalUploadError", {
                            fileName: M.rawEncode(t)
                        }));
                    if (l.template = d, l.buildView(), e) {
                        if (i) {
                            if (!(t = this.chatContainer.getElementById("upload-" + i))) return;
                            t.parentNode.removeChild(t), !e || n && "generalUploadError" !== n || (s.innerHTML = y.languageParser.translate("chat", "tryAgain"), s.setAttribute("href", "javascript:void(0);"), s.setAttribute("id", "retry-" + i), l.elementReferrer.getElementsByClassName("uploadFailedRetryContainer")[0].appendChild(s), a = y.eventHandler.listen(s, this.clickEvent, function() {
                                y.eventHandler.removeEventHandler(s, this.clickEvent, a), l.elementReferrer.parentNode.removeChild(l.elementReferrer), r.startUpload(e)
                            }, "retry-" + i))
                        }
                        this.chatContainer.getElementById("chatContainer").appendChild(l.elementReferrer), o && this.scrollToBottom()
                    }
                }, ye.prototype.updateFileProgress = function(e) {
                    var t = this.chatContainer.getElementById("upload-" + e.handle);
                    e = e.progress / 100 * 360, t && (e <= 180 ? (t.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(" + e + "deg)", t.getElementsByClassName("circle-progress-right")[0].style.display = "none", t.getElementsByClassName("circle-progress-clip")[0].style.display = "block") : (t.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(180deg)", t.getElementsByClassName("circle-progress-right")[0].style.transform = "rotate(" + e + "deg)", t.getElementsByClassName("circle-progress-right")[0].style.display = "block", t.getElementsByClassName("circle-progress-clip")[0].style.display = "none"))
                }, ye.prototype.fileUploaded = function(e) {
                    (e = this.chatContainer.getElementById("upload-" + e)) && e.parentNode.removeChild(e)
                }, ye.prototype.retryUploadFile = function(e) {
                    var t, i, n = this;
                    this.retryUploadList[e] && this.startUpload(this.retryUploadList[e], function() {
                        t = n.chatContainer.getElementById(e), (i = t.parentNode).removeChild(t), i.parentNode.removeChild(i), delete n.retryUploadList[e], Object.keys(n.retryUploadList).length || n.chatContainer.getElementById("maxFileNotificationContainer").classList.add("hidden"), t = null
                    })
                }, ye.prototype.checkUploadFileWarning = function(e, t) {
                    var i, n = this.chatContainer.getElementById("maxFileNotificationContainer"),
                        a = this.chatContainer.getElementById("maxSizeNotificationContainer"),
                        o = this.chatContainer.getElementById("maxFileSizeList"),
                        r = this.chatContainer.getElementById("maxFileNumberList"),
                        s = this;
                    if (t.length) {
                        i = "<ul>", this.retryUploadList = {};
                        for (var l = 0; l < t.length; l++) this.retryUploadList["retry_upload_" + l] = t[l], i += "<li>" + t[l].name + ' <a id="retry_upload_' + l + '" class="actionRetry">' + y.languageParser.translate("notifications", "retry") + "</a></li>";
                        for (r.innerHTML = i + "</ul>", i = M.getElementsByClassName(r, "actionRetry"), r = 0; r < i.length; r++) i[r].addEventListener(s.clickEvent, function() {
                            this.classList.add("hidden"), s.retryUploadFile(this.id)
                        });
                        n.classList.remove("hidden")
                    }
                    if (e.length) {
                        for (i = "<ul>", n = 0; n < e.length; n++) i += "<li>" + e[n].name + "</li>";
                        o.innerHTML = i + "</ul>", a.classList.remove("hidden")
                    }
                    i && this.scrollToBottom()
                }, ye.prototype.showCallRequest = function(e, t, i, n) {
                    var a = this,
                        o = w.incomingCallRequest,
                        r = (new Date).getTime(),
                        s = new Date(i).getTime(),
                        r = t - (r - s);
                    i = {
                        callId: e,
                        ringTimeout: t,
                        startedOn: i,
                        caller: n,
                        isMissed: null
                    }, (s = this.chatContainer.getElementById("incoming-call")) || (t = this.ifScrollbarDown(), y.chatHandler.webrtcWin && !y.chatHandler.webrtcWin.closed ? y.chatHandler.webrtcWin.focus() : (s = (n = S.agentProfiles[S.profiles[n.urid]]) && n.pi ? B.agentImgUrl + "/" + n.pi : "default", o = (o = (o = o.replace(/__IMAGE_URL__/, s ? "url('" + s + "');" : "transparent;")).replace(/__INCOMING_CALL__/, y.languageParser.translate("chat", "incoming_call_message", {
                        name: n.n
                    }))).replace(/__ACCEPT_CALL__/, y.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, y.languageParser.translate("chat", "decline_call")), clearTimeout(this.incomingCallTimeout), (s = new me("incoming-call")).template = o, s.buildView(), n = (o = this.chatContainer.getElementById("chatContainer")).parentNode, o && n && (n.insertBefore(s.elementReferrer, o), o = this.chatContainer.getElementById("accept-call"), n = this.chatContainer.getElementById("decline-call"), t && this.scrollToBottom(), y.eventHandler.listen(o, this.clickEvent, function() {
                        clearTimeout(a.incomingCallTimeout), M.getWebRTCToken(!1, !1, function() {
                            a.removeCallRequest()
                        })
                    }, "acceptVideoCall"), y.eventHandler.listen(n, this.clickEvent, function() {
                        clearTimeout(a.incomingCallTimeout), M.rejectCall(e, function() {
                            a.removeCallRequest()
                        })
                    }, "declineVideoCall"), this.incomingCallTimeout = setTimeout(function() {
                        a.removeCallRequest()
                    }, r), E.isPopup || y.viewHandler.isMaximized || E.isEmbedded || (y.viewHandler.indicator.show(), y.viewHandler.messagePreview && y.viewHandler.messagePreview.show(y.viewHandler.indicator.unansweredMessages, null, i)), y.audioPlayer.play("chat_sound"))))
                }, ye.prototype.removeCallRequest = function() {
                    var e = this.chatContainer.getElementById("incoming-call");
                    e && e.parentNode.removeChild(e), this.messagePreview && this.messagePreview.incomingCallContainer && this.messagePreview.removeCallRequest()
                }, ye.prototype.subscribeCallUpdate = function(i, n) {
                    var a, o, r, s, l, d, c, p = this,
                        e = this.chatContainer.documentRef,
                        t = this.callData[i],
                        h = this.ifScrollbarDown();
                    t ? a = t.callView : ((a = new me(i, null, {
                        className: "webrtcCallContainer messageContainer clearfix"
                    }, null, e)).template = M.escapeTemplateReplacement(w.callInfo, [{
                        placeholder: "__LOADER__",
                        textReplace: w.loader
                    }]), a.buildView(), e.getElementById("chatWrapper").insertBefore(a.elementReferrer, e.getElementById("agentTypingContainer")), this.callData[i] = {
                        callView: a
                    }), o = M.getElementsByClassName(a.elementReferrer, "callLoader"), r = M.getElementsByClassName(a.elementReferrer, "callInfoContainer"), s = M.getElementsByClassName(a.elementReferrer, "callIconWrapper"), l = M.getElementsByClassName(a.elementReferrer, "callErrorContainer"), o && o.length && (o[0].style.display = "block"), l && l.length && (l[0].style.display = "none"), y.socketManager.sendToConnector("getCallStatus", {
                        callId: i
                    }, function(e, t) {
                        o && o.length && (o[0].style.display = "none"), e ? (r && r.length && (r[0].style.display = "none"), l && l.length ? l[0].style.display = "block" : (c = w.callError.replace("__HEADER__", y.languageParser.translate("chat", "error_title")).replace("__MESSAGE__", y.languageParser.translate("chat", "call_error_load")).replace("__ACTION__", y.languageParser.translate("notifications", "retry")), (l = M.createElement(p.chatContainer.documentRef, "div", null, null, c)).className = "callErrorContainer", l.style.display = "block", a.elementReferrer.appendChild(l)), (d = M.getElementsByClassName(a.elementReferrer, "retry-load")) && d.length && y.eventHandler.listen(d[0], p.clickEvent, function() {
                            p.subscribeCallUpdate(i, n)
                        }, "retryCallLoad" + i)) : t.data.call.f && (r && r.length && (r[0].style.display = "block"), callIcon = t.data.call.f.vid ? '<span class="callIcon btn-icon icon-video-chat"></span>' : t.data.call.f.scrn ? '<span class="callIcon btn-icon icon-desktop-sharing"></span>' : '<span class="callIcon btn-icon icon-voice-chat"></span>', s && s.length && (s[0].innerHTML = callIcon), p.callData[i].ver = t.data.call.ver, h && p.scrollToBottom(), p.updateCallView(t.data.call, n))
                    })
                }, ye.prototype.updateCallView = function(e, t) {
                    var i, n, a, o = !!e.mssd,
                        r = !!e.rjctd,
                        s = this.callData[e.clid],
                        l = {},
                        l = null;
                    if (!s) return this.subscribeCallUpdate(e.clid);
                    s.ver > e.ver || (a = this.ifScrollbarDown(), l = (s = s.callView).elementReferrer.getElementsByClassName("btn-icon")[0], callIconContainerEl = s.elementReferrer.getElementsByClassName("callIconContainer")[0], callIconContainerEl.style.backgroundColor = "#47ca2b", "ringing" === e.stts ? ("v" !== e.cllr.t && this.showCallRequest(e.clid, e.rt, e.so, e.cllr), i = y.languageParser.translate("chat", ("v" === e.cllr.t ? "visitor_" : "agent_") + "ringing")) : "in-progress" === e.stts ? (this.removeCallRequest(), i = y.languageParser.translate("chat", "ongoing_call")) : "completed" === e.stts && (n = M.parseChatTime(e.so), this.removeCallRequest(), e.f.vid || e.f.scrn || (l.style.transform = "rotate(135deg)"), callIconContainerEl.style.backgroundColor = "#e52f48", l = {
                        callId: e.clid,
                        ringTimeout: e.rt,
                        startedOn: e.so,
                        caller: e.cllr,
                        isMissed: o
                    }, t || !y.viewHandler.messagePreview || k.mobileBrowserName || y.viewHandler.messagePreview.show(y.viewHandler.indicator.unansweredMessages, null, l), r = o || r ? (i = r ? y.languageParser.translate("chat", "rejected_call") : y.languageParser.translate("chat", "missed_" + ("v" === e.cllr.t ? "agent" : "visitor")), y.languageParser.translate("chat", "call_started_on", {
                        startedOn: n
                    })) : (r = M.getTimeDifference(e.so, e.eo), i = y.languageParser.translate("chat", "completed_call"), y.languageParser.translate("chat", "call_end_details", {
                        startedOn: n,
                        duration: r
                    })), (n = M.getElementsByClassName(s.elementReferrer, "callEndDetails")) && n.length && (n[0].innerHTML = r, n[0].style.display = "block")), (s = M.getElementsByClassName(s.elementReferrer, "callTitle")) && s.length && (s[0].innerHTML = i, o && (s[0].className += " missed")), this.callData[e.clid].ver = e.ver, a && this.scrollToBottom())
                }, ye.prototype.closeMessagePreview = function(e) {
                    e.ts && this.messagePreview && this.messagePreview.removeAllElements(e.ts)
                }, ye.prototype.toggleGreetingsView = function(e) {
                    var t = this.chatContainer.getElementById("chatContainer"),
                        i = this.chatContainer.getElementById("greetingsMainContainer"),
                        n = Math.floor(t.scrollHeight),
                        a = Math.floor(t.clientHeight);
                    e || n === a || n - a <= 5 ? 0 === t.scrollTop && -1 !== i.className.indexOf("minimize") && (i.className = i.className.replace(" minimize", ""), this.chatContainer.getElementById("agentProfileContainer").className = "", 1 === y.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "block") : -1 === i.className.indexOf("minimize") && (i.className += " minimize", this.chatContainer.getElementById("agentProfileContainer").className = "show", 1 < y.agents.agentsCount ? this.chatContainer.getElementById("headerAccountStateContainer").classList.add("multiple-agent") : this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), 0 < y.agents.agentsCount && (this.chatContainer.getElementById("shortMessage").style.display = "none"))
                }, ye.prototype.checkSeenMessageViewport = function() {
                    var e, t, i = -1;
                    if (0 !== this.unseenMessages.length) {
                        for (var n = 0; n < this.unseenMessages.length; n++) {
                            t = this.unseenMessages[n];
                            var a = this.chatContainer.getElementById(t);
                            if (a && M.chatElementInView(a) && (e = y.chatHandler.getMessageObjectById(t)), e && e.timeStamp > B.lastMessageTimestamp) {
                                i = n;
                                break
                            }
                        } - 1 !== i && (t = this.unseenMessages[this.unseenMessages.length - 1]) && (e = y.chatHandler.getMessageObjectById(t)) && this.updateLastTimestamp(e.timeStamp)
                    }
                }, ye.prototype.updateLastTimestamp = function(e) {
                    this.lastUpdateTimeout && clearTimeout(this.lastUpdateTimeout), this.clearUnseenNotification(), this.lastUpdateTimeout = setTimeout(function() {
                        !(document.hidden || document.msHidden || document.webkitHidden) && e > B.lastMessageTimestamp && (B.lastMessageTimestamp = e, y.socketManager.sendToConnector("visitorChatSeen", {
                            timestamp: e
                        }, function() {}))
                    }, 1e3)
                }, ye.prototype.clearUnseenNotification = function() {
                    var e = this.chatContainer.documentRef.getElementById("newMessagesBar");
                    this.unseenMessages = [], e && (e.className = ""), this.updateTotalUnseenMessages(), this.removeDivider()
                }, ye.prototype.updateTotalUnseenMessages = function() {
                    this.totalUnseenMessages = this.unseenMessages.length, y.viewHandler.indicator && y.viewHandler.indicator.updateUnseenMessages(this.totalUnseenMessages)
                }, ye.prototype.scrollToFirstUnseen = function() {
                    var e = this.chatContainer.documentRef.getElementById("newMessageDivider");
                    e ? this.scrollToSeeMessage(e) : this.scrollToBottom()
                };

                function we() {
                    var t = this;
                    this.currentForm = "", this.formView = null, this.forms = {
                        nameForm: {
                            id: "changeNameForm",
                            title: "NameFormMessage",
                            fields: [{
                                fieldName: "name",
                                valueMaxLength: 40,
                                languageKey: "Name",
                                getValue: y.visitorHandler.getNameValue,
                                validation: "isValidString",
                                type: "input",
                                isRequired: !0
                            }],
                            publish: "notifyNameChange",
                            afterSave: y.visitorHandler.setNameFromForm,
                            resize: "auto"
                        },
                        emailTranscriptForm: {
                            id: "emailTranscriptForm",
                            title: "EmailTranscriptFormMessage",
                            fields: [{
                                fieldName: "name",
                                valueMaxLength: 40,
                                languageKey: "Name",
                                getValue: y.visitorHandler.getNameValue,
                                validation: "isValidString",
                                type: "input",
                                hiddenIE8: !0,
                                isRequired: !0
                            }, {
                                fieldName: "transcriptEmail",
                                valueMaxLength: 150,
                                languageKey: "Email",
                                getValue: y.visitorHandler.getTranscriptEmailValue,
                                validation: "isValidEmail",
                                type: "input",
                                instantValidation: !1,
                                isRequired: !0
                            }],
                            saveFunc: "requestEmailTranscript",
                            afterSave: y.visitorHandler.setTranscriptValue,
                            resize: "auto"
                        },
                        offlineForm: {
                            id: "offlineForm",
                            getTitle: function() {
                                return M.transformGreetings(E.offlineOptions.text)
                            },
                            dynamicFields: null,
                            saveFunc: "submitOfflineForm",
                            dontCloseForm: !0,
                            afterSave: t.showOfflineOverlay
                        },
                        preChatForm: {
                            id: "preChatForm",
                            getTitle: function() {
                                return E.prechatOptions.text ? M.transformGreetings(E.prechatOptions.text) : E.isEmbedded && "page" === $_Tawk_WidgetId && pageType && "profile" === pageType ? y.languageParser.translate("form", "PreChatFormMessageProfile") : y.languageParser.translate("form", "PreChatFormMessage")
                            },
                            dynamicFields: null,
                            saveFunc: "submitPrechatForm",
                            afterSave: t.handlePrechatForm,
                            dontCloseForm: !1
                        },
                        inactivityOverlay: {
                            id: "inactivityOverlay",
                            overlayMessage: "inactive",
                            otherEvent: {
                                eventName: "click",
                                elementName: "inactivityOverlay",
                                executedFunc: y.main.criticalRefresh
                            }
                        },
                        maintenanceOverlay: {
                            id: "maintenanceOverlay",
                            overlayMessage: "maintenance"
                        },
                        endChatForm: {
                            id: "endChatForm",
                            publish: "endVisitorChat",
                            afterSave: t.handleChatEnded,
                            dontCloseForm: !1,
                            resize: "auto",
                            title: "EndChatTitle"
                        },
                        consentForm: {
                            id: "consentForm",
                            saveFunc: "submitConsent",
                            getTitle: function() {
                                return M.transformGreetings(E.consentOption.text).replace(M.regLineBreaks, M.br)
                            },
                            dynamicFields: null,
                            dontCloseForm: !0,
                            otherEvent: {
                                eventName: "click",
                                elementName: "formDecline",
                                executedFunc: function() {
                                    E.isPopup ? h.close() : B.chatWindowState("min")
                                }
                            },
                            customButtons: function() {
                                return E.consentOption.buttons
                            }
                        },
                        restartChatForm: {
                            id: "restartChatForm",
                            dontCloseForm: !0,
                            resize: "auto",
                            title: "chatEnded",
                            fields: [{
                                fieldName: "transcriptEmail",
                                valueMaxLength: 150,
                                languageKey: "Email",
                                getValue: y.visitorHandler.getTranscriptEmailValue,
                                validation: "isValidEmail",
                                type: "input",
                                instantValidation: !1,
                                isRequired: !0
                            }],
                            saveFunc: "requestEmailTranscript",
                            afterSave: y.visitorHandler.setTranscriptValue
                        }
                    }, y.eventEmitter.on("localeChanged", function() {
                        var e = t.currentForm;
                        e && (t.closeForm(), t.openForm(e))
                    }), T.displayName.subscribe(function(e) {
                        !t.currentForm || "preChatForm" !== t.currentForm && "offlineForm" !== t.currentForm || t.formView.updateName(e)
                    }), T.email.subscribe(function(e) {
                        !t.currentForm || "preChatForm" !== t.currentForm && "offlineForm" !== t.currentForm || t.formView.updateEmail(e)
                    }), B.prechatFormSubmitted.subscribe(function() {
                        "preChatForm" === t.currentForm && t.closeForm()
                    })
                }
                we.prototype.openForm = function(e) {
                    var t, a, o, r, s, l, d, i = this,
                        n = y.viewHandler.chatContainer.getElementById("formContainer"),
                        c = this.forms[e];
                    c && this.currentForm !== e && n && (this.formView = null, "preChatForm" === e || "offlineForm" === e ? ((t = y.viewHandler.chatContainer.getElementById("contentContainer")) && (t.className += " form-opened "), this.formView = new fe(c, e), "offlineForm" === e && y.viewHandler.indicator && (y.viewHandler.indicator.pageTitleNotification.off(), y.viewHandler.indicator.hide()), m && m.clearTextareaResize()) : this.formView = new ue(c), this.currentForm = e, this.formView.buildForm(), this.formView.buildView(y.viewHandler.chatContainer.documentRef), o = y.viewHandler.chatContainer.getElementById("greetingsMainContainer"), t = y.viewHandler.chatContainer.getElementById("greetingsText"), y.viewHandler.chatContainer.getElementById("chatPanel").style.display = "none", n.innerHTML = "", n.appendChild(this.formView.elementReferrer), n.style.display = "block", this.forms[e].getTitle && "consentForm" !== e && this.forms[e].getTitle() ? (t.innerHTML = this.forms[e].getTitle(), o.style.display = "block") : o.style.display = "none", "endChatForm" === e && (o.style.display = "block", y.viewHandler.chatContainer.getElementById("contentContainer").className = "chatEndVisible"), this.attachEventListeners(), this.formView.addPlaceholderHandler(), n.className = this.formView.isFormRequired ? "has-required" : "", y.eventHandler.listen(h, "resize", function() {
                        i.resize()
                    }, "windowresizeform"), M.redraw(n), "preChatForm" !== e && "offlineForm" !== e || y.eventEmitter.emit("formOpened"), d = l = s = 0, e = /Firefox/i.test(p.userAgent) ? "DOMMouseScroll" : "mousewheel", k.mobileBrowserName && (e = "touchstart touchmove touchend"), a = y.viewHandler.chatContainer.getElementById("formFieldsContainer"), y.viewHandler.chatContainer.attachUserEventListener(e, function(e) {
                        var t, i = Math.ceil(a.scrollHeight),
                            n = Math.ceil(a.clientHeight);
                        if (r = e.originalEvent ? e.originalEvent : e, t = 0 < (d = r.detail ? -40 * r.detail : r.wheelDelta), "touchmove" === e.type ? l = e.changedTouches[0].clientY : "touchstart" === e.type ? s = e.touches[0].clientY : "touchend" === e.type && (t = s < l), 0 === a.scrollTop && -1 !== o.className.indexOf("minimize")) {
                            if (d < 0 || l < s) return
                        } else if (-1 === o.className.indexOf("minimize") && (s < l || 0 < d)) return;
                        t || i === n || i - n <= 5 ? 0 === a.scrollTop && -1 !== o.className.indexOf("minimize") && (o.className = o.className.replace(" minimize", "")) : -1 === o.className.indexOf("minimize") && (o.className += " minimize")
                    }, "formFieldsContainer", "formContainerScroll"), this.handleResizeofForm())
                }, we.prototype.handleResizeofForm = function(e) {
                    var t, i;
                    k.mobileBrowserName || E.isPopup || E.isEmbedded || (!y.formHandler.currentForm || e ? y.viewHandler.chatContainer.restyle("height", E.maximizedDimensions().height + "px !important") : (t = y.viewHandler.chatContainer.getElementById("formContainer"), e = y.viewHandler.chatContainer.getElementById("greetingsMainContainer"), i = 120, "offlineForm" === y.formHandler.currentForm && "block" === y.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display ? t = y.viewHandler.chatContainer.getElementById("offlineForm") : M.getElementsByClassName(t, "formFrame") ? t = M.getElementsByClassName(t, "formFrame")[0] : (t = M.getElementsByClassName(t, "formTable")[0], i = 60), e && (i += e.offsetHeight), (e = t.offsetHeight + i) >= E.maximizedDimensions().height && (e = E.maximizedDimensions().height), y.viewHandler.chatContainer.restyle("height", e + "px !important")))
                }, we.prototype.showOfflineOverlay = function() {
                    y.viewHandler.chatContainer.getElementById("formContainer").className += " success"
                }, we.prototype.resize = function() {
                    var e, t, i, n, a;
                    null !== this.formView && k.mobileBrowserName && (n = y.viewHandler.chatContainer.getElementById("formContainer"), i = y.viewHandler.chatContainer.getElementById("formInnerHeight"), a = y.viewHandler.chatContainer.getElementById("headerBoxWrapper"), n && (e = M.getElementsByClassName(n, "formMessageField"), t = M.getElementsByClassName(n, "longFormContainer"), e && e.length && t && t.length && (e = M.getElementsByClassName(n, "longFormBottomContainer")[0].clientHeight, t[0].style.height = y.viewHandler.iframeContainer.clientHeight - a.clientHeight - e + "px"), !i || "android" !== k.mobileBrowserName && "android2" !== k.mobileBrowserName && "android2.3" !== k.mobileBrowserName || (i.style.overflow = "hidden", y.viewHandler.addOverflowScroll(i))))
                }, we.prototype.closeForm = function() {
                    var e = y.viewHandler.chatContainer.getElementById("formContainer"),
                        t = y.viewHandler.chatContainer.getElementById("submitWrapper"),
                        i = y.viewHandler.chatContainer.getElementById("contentContainer"),
                        n = "endChatForm" === this.currentForm,
                        a = this.formView ? "preChatForm" === this.formView.elementId : null;
                    (this.currentForm || a) && (i && (i.className = i.className.replace(/form-opened/g, "")), e && this.formView && (this.formView = null, this.currentForm = "", e.innerHTML = "", e.style.display = "none", e.className = "", e = y.viewHandler.chatContainer.getElementById("greetingsMainContainer"), i = y.viewHandler.chatContainer.getElementById("greetingsText"), e && (e.style.display = "block", i.innerHTML = ""), t && (t.className = "", t.innerHTML = ""), y.eventEmitter.emit("formClosed"), n && (y.viewHandler.chatContainer.getElementById("contentContainer").className = "", y.formHandler.openForm("emailTranscriptFormOnChatEnded")), this.handleResizeofForm()))
                }, we.prototype.attachEventListeners = function() {
                    var e, t, i, a = this,
                        n = this.formView.formData,
                        o = y.viewHandler.chatContainer.getElementById("formCancel"),
                        r = y.viewHandler.chatContainer.getElementById("formSubmit"),
                        s = y.viewHandler.chatContainer.getElementById("formCloseChat"),
                        l = this.formView.formData.fields || [],
                        d = "preChatForm" === a.formView.elementId,
                        c = "offlineForm" === a.formView.elementId,
                        p = "formcancelclick",
                        h = "formsubmitclick";
                    this.formView.formData.dynamicFields && (l = this.formView.formData.dynamicFields), d ? (o = y.viewHandler.chatContainer.getElementById("formCancel"), r = y.viewHandler.chatContainer.getElementById("formSubmit"), p = "formcancelclick-pc", h = "formsubmitclick-pc") : c && (r = y.viewHandler.chatContainer.getElementById("formSubmit"), e = y.viewHandler.chatContainer.getElementById("resendButton"), h = "formsubmitclick-ol"), t = y.viewHandler.chatContainer.getElementById("newChat"), o && y.eventHandler.listen(o, y.viewHandler.clickEvent, function(e) {
                        return d ? y.eventEmitter.emit(a.formView.formData.saveFunc, {}, function(e, t) {
                            a.handleAfterSave(e, {
                                serverData: t
                            })
                        }) : (a.closeForm(), void y.eventHandler.cancelEvent(e))
                    }, p), r && y.eventHandler.listen(r, y.viewHandler.clickEvent, function() {
                        a.submitForm()
                    }, h), s && y.eventHandler.listen(s, y.viewHandler.clickEvent, function(e) {
                        m ? (m.container.hide(), y.viewHandler.isMaximized = !1, y.viewHandler.show()) : y.main.hideWidget(), y.eventHandler.cancelEvent(e)
                    }, "formcloseclick"), e && y.eventHandler.listen(e, y.viewHandler.clickEvent, function() {
                        c && (y.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display = "none", y.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display = "block"), y.viewHandler.chatContainer.getElementById("submitWrapper").className = y.viewHandler.chatContainer.getElementById("submitWrapper").className.replace("visible", ""), y.viewHandler.chatContainer.getElementById("formContainer").className = y.viewHandler.chatContainer.getElementById("formContainer").className.replace("success", "")
                    }, "resendButtonClick"), t && y.eventHandler.listen(t, y.viewHandler.clickEvent, function(e) {
                        m.chatStarted(), y.chatHandler.startNewChat(), y.eventHandler.cancelEvent(e)
                    }, "newChat", "newChat"), l.forEach(function(e) {
                        var t, i, n;
                        e.disabled || (t = y.viewHandler.chatContainer.getElementById(e.fieldName + "Field"), i = y.viewHandler.chatContainer.getElementById(e.fieldName + "FieldError"), n = y.viewHandler.chatContainer.getElementById(e.fieldName + "FieldErrorIcon"), t && ("textarea" !== t.nodeName.toLowerCase() && y.eventHandler.listen(t, "keypress", function(e) {
                            13 === e.keyCode && a.submitForm()
                        }, "formkeypress" + e.fieldName), y.eventHandler.listen(t, "keydown", function(e) {
                            13 !== e.keyCode && setTimeout(function() {
                                "" !== i.innerHTML && (i.innerHTML = "", i.style.display = "none", n.style.display = "none", t.parentNode.className = t.parentNode.className.replace(" error", ""))
                            }, 1)
                        }, "formkeydown" + e.fieldName)))
                    }), n.otherEvent && (i = n.otherEvent, (e = y.viewHandler.chatContainer.getElementById(i.elementName)) && y.eventHandler.listen(e, i.eventName, function() {
                        i.executedFunc()
                    }, "formother"))
                }, we.prototype.submitForm = function() {
                    var i = this,
                        e = y.viewHandler.chatContainer.getElementById("formSubmit"),
                        t = y.viewHandler.chatContainer.getElementById("formCancel"),
                        n = y.viewHandler.chatContainer.getElementById("formCloseChat"),
                        a = y.viewHandler.chatContainer.getElementById("submitWrapper"),
                        o = this.validateForm();
                    if (null === o) a.className = "";
                    else {
                        if (a.innerHTML = '<p id="submitWrapperMessage">' + y.languageParser.translate("form", "SubmittingProcess") + "</p>" + w.loader, a.className = "visible", e && e.setAttribute("disabled", "disabled"), t && t.setAttribute("disabled", "disabled"), n && n.setAttribute("disabled", "disabled"), i.handleResizeofForm(!0), this.formView.formData.publish) return y.socketManager.sendToConnector(this.formView.formData.publish, o, function(e, t) {
                            o.serverData = t, i.handleAfterSave(e, o)
                        });
                        if (this.formView.formData.saveFunc) try {
                            y.eventEmitter.emit(this.formView.formData.saveFunc, o, function(e, t) {
                                o.serverData = t, i.handleAfterSave(e, o)
                            })
                        } catch (e) {
                            i.handleAfterSave(!0), g.handleError("Unable to emit form handler save func : " + this.formView.formData.saveFunc + " with data : " + JSON.stringify(o), e.fileName, e.lineNumber, e.stack)
                        }
                    }
                }, we.prototype.handleAfterSave = function(e, t) {
                    var i, n, a, o, r, s, l, d;
                    if (y && y.formHandler.formView && y.formHandler.formView.formData) {
                        if (i = y.formHandler.formView.formData.afterSave, n = y.viewHandler.chatContainer.getElementById("formSubmit"), a = y.viewHandler.chatContainer.getElementById("formCancel"), o = y.viewHandler.chatContainer.getElementById("formCloseChat"), r = y.viewHandler.chatContainer.getElementById("submitWrapper"), l = y.viewHandler.chatContainer.getElementById("transcriptEmailField"), s = "emailTranscriptFormOnChatEnded" === this.currentForm, d = "offlineForm" === y.formHandler.formView.elementId, r.className = "", r.innerHTML = "", n && n.removeAttribute("disabled"), a && a.removeAttribute("disabled"), o && o.removeAttribute("disabled"), e) return this.updateFormStatus(e);
                        i && i(t), s ? l.value = "" : (d && (y.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display = "block", y.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display = "none"), this.formView.formData.dontCloseForm ? this.updateFormStatus() : this.closeForm())
                    }
                }, we.prototype.updateFormStatus = function(e) {
                    var t, i, n;
                    y.viewHandler.chatContainer && (t = y.viewHandler.chatContainer.getElementById("formSavingStatus"), i = y.viewHandler.chatContainer.getElementById("savingStatus"), n = y.viewHandler.chatContainer.getElementById("submitWrapper"), t && i ? e ? (t.className = "errorMessage", i.innerHTML = y.languageParser.translate("form", "errorSaving"), (e = M.getElementsByClassName(y.viewHandler.chatContainer.documentRef, "longFormContainer")).length && (e[0].scrollTop = 999999999999)) : (t.className = "", i.innerHTML = y.languageParser.translate("form", "saved")) : this.currentForm && "offlineForm" === this.currentForm ? e ? (n.className = "visible", n.innerHTML = "<p>" + y.languageParser.translate("form", "OfflineMessageNotSent") + "</p>", setTimeout(function() {
                        n.className = ""
                    }, 3e3)) : (n.className = "", this.clearForm()) : n.className = "")
                }, we.prototype.validateForm = function() {
                    var e, r, s = {},
                        l = 0,
                        d = this;
                    if (this.formView) return e = this.formView.formData.fields || [], this.formView.formData.dynamicFields && (e = this.formView.formData.dynamicFields), e.forEach(function(i) {
                        var e, n, t, a, o;
                        if ("additionalQuestion" === i.fieldName && i.getValue && M.isArray(i.getValue())) s.additionalQuestion = {}, i.getValue().forEach(function(e, t) {
                            (n = y.viewHandler.chatContainer.getElementById(i.fieldName + t)) && (s.additionalQuestion[t] = e === n.value ? null : M.trim(n.value))
                        });
                        else if ("choice" === i.fieldType || "option" === i.fieldType) o = y.viewHandler.chatContainer.documentRef.getElementsByName(i.fieldName + "group"), t = y.viewHandler.chatContainer.getElementById(i.fieldName + "FieldError"), e = y.viewHandler.chatContainer.getElementById(i.fieldName + "Container"), formLabelEl = e.parentElement.parentElement.getElementsByClassName("form-field-label")[0], errorIconEl = y.viewHandler.chatContainer.getElementById(i.fieldName + "FieldErrorIcon"), o = "choice" === i.fieldType ? d.getSelectedCheckbox(o, i.isRequired) : d.getSelectedRadio(o, i.isRequired), t.innerHTML = "", t.style.display = "none", errorIconEl.style.display = "none", e.className = e.className.replace("error", ""), null === o ? (l++, a = !1, t.innerHTML = y.languageParser.translate("form", i.languageKey + "ErrorMessage"), t.style.display = "block", errorIconEl.style.display = "block", e.className += " error", formLabelEl.style.color = "#e52f48") : (formLabelEl.style.color = "#707070", s[i.fieldName] = o);
                        else {
                            if (n = y.viewHandler.chatContainer.getElementById(i.fieldName + "Field"), t = y.viewHandler.chatContainer.getElementById(i.fieldName + "FieldError"), errorIconEl = y.viewHandler.chatContainer.getElementById(i.fieldName + "FieldErrorIcon"), !n) return;
                            e = i.placeholderText === n.value ? null : M.trim(n.value), a = d[i.validation](e, i.valueMaxLength, i.isRequired), t.innerHTML = "", t.style.display = "none", errorIconEl.style.display = "none", n.parentNode.className = n.parentNode.className.replace("error", ""), a ? s[i.fieldName] = e : (l++, t.innerHTML = y.languageParser.translate("form", i.languageKey + "ErrorMessage"), t.style.display = "block", errorIconEl.style.display = "block", n.parentNode.className += " error")
                        }
                        r || a || (r = n)
                    }), 0 < l ? (r && ((e = y.viewHandler.chatContainer.getElementById("formContainer")).scrollTop = r.offsetTop), null) : s
                }, we.prototype.isValidString = function(e, t, i) {
                    return !i && !e || !(!e || !M.isString(e) || t && !(t && e.length <= t))
                }, we.prototype.isValidEmail = function(e, t, i) {
                    return !i && !e || !!(e && M.isEmail(e) && M.isString(e) && e.length <= t)
                }, we.prototype.isValidDepartment = function(e, t, i) {
                    var n;
                    if (t = B.departments, !(i || e && "0" !== e)) return !0;
                    for (n in t)
                        if (t[n].did === e) return !0;
                    return !1
                }, we.prototype.getSelectedCheckbox = function(e, t) {
                    for (var i = [], n = 0, a = e.length; n < a; n++) e[n].checked && i.push(e[n].value);
                    return !i.length && t ? null : i
                }, we.prototype.getSelectedRadio = function(e, t) {
                    for (var i = "", n = 0, a = e.length; n < a; n++)
                        if (e[n].checked) {
                            i = e[n].value;
                            break
                        } return !i && t ? null : i
                }, we.prototype.isValidPhone = function(e, t, i) {
                    return !i && !e || ("+" === e.charAt(0) && (e = e.replace("+", "")), !!(e.length && 7 <= e.length && e.match(/[0-9]/im)))
                }, we.prototype.handlePrechatForm = function(e) {
                    (e = M.getDepartmentStatus(e.department)).isOnline || y.viewHandler.notifiyDepartmentIsNotOnline(e.name, e.status), y.formHandler.formView.formData.dontCloseForm = !1
                }, we.prototype.handleChatEnded = function(e) {
                    y.formHandler.formView.formData.dontCloseForm = !1, S.chatId = e.serverData.nextChatId, y.chatHandler.endChat(e.serverData.chatEndVersion), y.viewHandler.resetView()
                }, we.prototype.clearForm = function() {
                    var e = this.formView.formData.fields || [];
                    this.formView.formData.dynamicFields && (e = this.formView.formData.dynamicFields), e.forEach(function(e, t) {
                        var i;
                        if ("name" !== e.fieldType && "email" !== e.fieldType && "department" !== e.fieldType)
                            if ("choice" === e.fieldType || "option" === e.fieldType)
                                for (var n = 0, a = (i = y.viewHandler.chatContainer.documentRef.getElementsByName(e.fieldName + "group")).length; n < a; n++) i[n].checked = !1;
                            else(i = y.viewHandler.chatContainer.getElementById(e.fieldName + "Field")) && (i.value = "", "choice" === e.fieldType || "option" === e.fieldType || k.isPlaceholderSupported || (i.value = e.placeholderText))
                    })
                };
                var _e = TawkClass.extend({
                    init: function() {
                        var t = this,
                            e = E.minimizedDimensions().width,
                            i = E.minimizedDimensions().height;
                        this.shown = this.inDocument = !1, this.indicatorWidth = this.indicatorHeight = 21, this.frameHeight = i + "px", this.frameWidth = e + "px", this.offsetX = E.widgetOffsetX, this.offsetY = E.widgetOffsetY, this.messagePreviewHeight = null, this.messagePreviewOffset = 25, E.isDesktopRectangle() ? (this.container = new ge(M.getRandomName(), M.getGenericStyle({
                            zindex: "1000001",
                            position: "fixed",
                            bottom: this.offsetY,
                            display: "none",
                            height: this.frameHeight,
                            width: this.frameWidth,
                            maxheight: this.frameHeight,
                            maxwidth: this.frameWidth,
                            minheight: "40px",
                            minwidth: "126px"
                        }), O, "iframe"), this.container.template = w["tawkchat-minified-iframe-element-rectangle"], this.chatIndicator = new ge(M.getRandomName(), M.getGenericStyle({
                            zindex: "1000003",
                            margin: "0px",
                            width: this.frameWidth,
                            height: "37px",
                            position: "fixed",
                            display: "none",
                            bottom: i + "px",
                            left: "100%",
                            maxheight: "37px",
                            maxwidth: this.frameWidth,
                            minheight: "37px",
                            minwidth: this.frameWidth
                        }), O, "iframe")) : (this.frameWidth = this.frameHeight = "60px", this.container = new ge(M.getRandomName(), M.getGenericStyle({
                            zindex: "1000001",
                            position: "fixed",
                            bottom: this.offsetY,
                            display: "none",
                            height: this.frameHeight,
                            width: this.frameWidth,
                            maxheight: this.frameHeight,
                            maxwidth: this.frameWidth,
                            minheight: this.frameHeight,
                            minwidth: this.frameWidth,
                            borderRadius: "50%"
                        }), O, "iframe"), this.container.restyle("box-shadow", "rgba(0, 0, 0, 0.16) 0px 2px 10px 0px !important"), this.container.template = w["tawkchat-minified-iframe-element-round"], this.chatIndicator = new ge(M.getRandomName(), M.getGenericStyle({
                            zindex: "1000003",
                            margin: "0px",
                            width: "60px",
                            height: "22px",
                            position: "fixed",
                            display: "none",
                            bottom: "57px",
                            left: "100%",
                            maxheight: "22px",
                            maxwidth: "60px",
                            minheight: "22px",
                            minwidth: "60px"
                        }), O, "iframe")), E.isCenterPositioned() ? this.messagePreviewHeight = .5 * Math.max(document.documentElement.clientHeight, h.innerHeight || 0) + .5 * E.minimizedDimensions().width + 20 - this.messagePreviewOffset + "px" : this.messagePreviewHeight = Math.max(document.documentElement.clientHeight, h.innerHeight || 0) - (E.minimizedDimensions().height + this.offsetY) - this.messagePreviewOffset + "px", this.messagePreview = new ge(M.getRandomName(), M.getGenericStyle({
                            zindex: "999999",
                            width: "378px",
                            height: this.messagePreviewHeight,
                            position: "fixed",
                            display: "none",
                            bottom: E.minimizedDimensions().height + this.offsetY + 10 + "px",
                            right: this.offsetX + "px"
                        }), O, "iframe"), this.bubbleContainer = new ge(M.getRandomName(), M.getGenericStyle({
                            zindex: "1000000",
                            width: "146px",
                            height: "85px",
                            position: "fixed",
                            display: "none",
                            bottom: i + 2 + "px",
                            right: "20px",
                            maxheight: "85px",
                            maxwidth: "146px",
                            minheight: "85px",
                            minwidth: "146px"
                        }), O, "iframe"), E.minimizedDimensions.subscribe(function(e) {
                            t.frameHeight = e.height + "px", t.frameWidth = e.width + "px", t.widgetDimensionsUpdated()
                        }), B.pageStatus.subscribe(function(e) {
                            t.updateGreetings(e), t.updateStatus(e)
                        }), B.chatBubbleClosed.subscribe(function(e) {
                            e && t.bubbleContainer && t.bubbleContainer.clear()
                        }), E.chatBubble.subscribe(function() {
                            t.bubbleSettingsChanged()
                        }), E.isRTL.subscribe(function() {
                            t.bubbleSettingsChanged()
                        }), E.desktopWidget.subscribe(function() {
                            e = E.minimizedDimensions().width, i = E.minimizedDimensions().height, t.offsetX = E.widgetOffsetX, t.offsetY = E.widgetOffsetY, E.isDesktopRectangle() ? (t.container.template = w["tawkchat-minified-iframe-element-rectangle"], t.chatIndicator.massRestyle(M.getGenericStyle({
                                zindex: "1000003",
                                margin: "0px",
                                width: t.indicatorWidth + "px",
                                height: t.indicatorHeight + "px",
                                position: "fixed",
                                display: "none",
                                bottom: t.offsetY + "px",
                                left: t.offsetY + "px",
                                maxheight: t.indicatorHeight + "px",
                                maxwidth: t.indicatorWidth + "px",
                                minheight: t.indicatorHeight + "px",
                                minwidth: t.indicatorWidth + "px"
                            }))) : (t.container.template = w["tawkchat-minified-iframe-element-round"], t.chatIndicator.massRestyle(M.getGenericStyle({
                                zindex: "1000003",
                                margin: "0px",
                                width: "60px",
                                height: "22px",
                                position: "fixed",
                                display: "none",
                                bottom: "57px",
                                left: "100%",
                                maxheight: "22px",
                                maxwidth: "60px",
                                minheight: "22px",
                                minwidth: "60px"
                            }))), t.container.massRestyle(M.getGenericStyle({
                                zindex: "1000001",
                                position: "fixed",
                                bottom: E.isDesktopRectangle() ? "0px" : t.offsetY,
                                display: "none",
                                height: t.frameHeight,
                                width: t.frameWidth,
                                maxheight: t.frameHeight,
                                maxwidth: t.frameWidth,
                                minheight: t.frameHeight,
                                minwidth: t.frameWidth
                            })), t.bubbleContainer && t.bubbleContainer.elementReferrer && t.bubbleContainer.clear(), t.buildView(), t.updateStatus()
                        }), E.showMessagePreview.subscribe(function() {
                            E.showMessagePreview() ? t.initMessagePreviewContainer() : t.destroyMessagePreviewContainer()
                        })
                    },
                    buildView: function() {
                        var e, t, i;
                        this.container && (y.MinifiedStyle = y.MinifiedStyle.replace(/#tawktoLink/g, "#" + y.viewHandler.tawktoLinkName), y.MinifiedStyle = y.MinifiedStyle.replace(/#bottomContainer/g, "#" + y.viewHandler.bottomContainerName), E.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer(), this.chatIndicator.buildIframe(y.MinifiedStyle + E.minStyle(), !0), (e = M.getElementsByTagName(this.chatIndicator.documentRef, "body")[0]).innerHTML = w["tawkchat-chat-indicator"], this.container.buildIframe(y.MinifiedStyle + E.minStyle()), this.bubbleContainer && (E.chatBubble() && this.bubbleContainer.elementReferrer ? this.bubbleContainer.buildIframe(y.MinifiedStyle + E.minStyle(), !0) : this.bubbleContainer.clear()), this.widgetDimensionsUpdated(), this.updateGreetings(), this.attachEvents(), this.inDocument = !0, E.isDesktopRectangle()) && (e = this.container.getElementById("tawkchat-minified-container"), t = E.topCorner + "px ", i = E.bottomCorner + "px ", e.style.borderRadius = t + t + i + i)
                    },
                    attachEvents: function() {
                        this.container && (this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            "max" === B.chatWindowState() ? (y.viewHandler.userAction = !0, y.sessionHandler.notifyWindowState("min")) : "max" === E.onClickAction ? (y.viewHandler.userAction = !0, y.sessionHandler.notifyWindowState("max")) : y.viewHandler.popoutWidget(), y.eventHandler.cancelEvent(e)
                        }, "tawkchat-minified-wrapper", "minifiedclick"), this.container.attachUserEventListener("mousedown", function(e) {
                            y.viewHandler.lastFocusedElement = h.document.activeElement
                        }, "tawkchat-minified-wrapper", "minifiedWidgetMouseDown"), this.attachBubbleEvents())
                    },
                    createCanvasChatBubble: function() {}
                });
                _e.prototype.updateStatus = function(e) {
                    var t;
                    if (e = e || B.pageStatus(), this.container && e) {
                        (t = this.container.getElementById("tawkchat-status-icon")) && (t.className = e), (t = this.container.getElementById("tawk-minified-mobile-text")) && (t.innerHTML = "online" === e || "away" === e ? y.languageParser.translate("chat", "chat_text") : y.languageParser.translate("chat", "mail_text"));
                        try {
                            y.eventEmitter.emit("resizeIframeHeight")
                        } catch (e) {
                            g.handleError("Unable to emit resizeIframeHeight", e.fileName, e.lineNumber, e.stack)
                        }
                    }
                }, _e.prototype.attachBubbleEvents = function() {
                    this.bubbleContainer && this.bubbleContainer.attachUserEventListener(y.viewHandler.clickEvent, y.sessionHandler.closeBubble, "tawkchat-chat-bubble-close", "bubblecloseclick")
                }, _e.prototype.hide = function() {
                    this.container && (this.shown = !1, this.container.restyle("display", "none !important"), this.hideBubble())
                }, _e.prototype.show = function() {
                    this.container && (this.shown = !0, this.container.restyle("display", "block !important"), this.showBubble())
                }, _e.prototype.widgetDimensionsUpdated = function() {
                    this.container && (minHeight = E.isDesktopRectangle() ? (minWidth = E.minimizedDimensions().width, E.minimizedDimensions().height) : minWidth = 60, this.container.massRestyle({
                        height: minHeight + "px !important",
                        "min-height": minHeight + "px !important",
                        "max-height": minHeight + "px !important",
                        width: minWidth + "px !important",
                        "min-width": minWidth + "px !important",
                        "max-width": minWidth + "px !important",
                        "border-radius": E.isDesktopRectangle() ? "0 !important" : "50% !important"
                    }), this.widgetPositonChanged(), this.bubbleSettingsChanged(), this.calculateIndicatorPositioning())
                }, _e.prototype.bubbleSettingsChanged = function() {
                    var e = E.chatBubble();
                    if (!e && this.bubbleContainer || E.hideWidgetOnLoad) return this.bubbleContainer.clear();
                    y && y.viewHandler && y.viewHandler.iframeContainer && y.viewHandler.iframeContainer.elementReferrer && (e && (e.type && "default" !== e.type || this.bubbleContainer.elementReferrer && this.bubbleContainer.insertCssFile(".bubble-text-color{color:" + (E.chatBubble() ? E.chatBubble().fgc : "#ffffff") + ";}", !0), e && (this.bubbleContainer || (this.bubbleContainer = new ge(M.getRandomName(), M.getGenericStyle({
                        zindex: "1000000",
                        width: "146px",
                        height: "85px",
                        position: "fixed",
                        display: "none",
                        bottom: minHeight + 2 + "px",
                        right: "20px",
                        maxheight: "85px",
                        maxwidth: "146px",
                        minheight: "85px",
                        minwidth: "146px"
                    }), O, "iframe")), this.bubbleContainer.elementReferrer || (y.viewHandler.iframeContainer.elementReferrer.appendChild(this.bubbleContainer.buildView(), !0), this.bubbleContainer.buildIframe(y.MinifiedStyle + E.minStyle(), !0)))), this.createBubble(), this.attachBubbleEvents())
                }, _e.prototype.updateGreetings = function(e) {
                    var t;
                    e = e || B.pageStatus(), this.container && e && (t = this.container.getElementById("short-message")) && (null !== (e = r.getShortMessage(e)) && (t.innerHTML = e))
                }, _e.prototype.clear = function() {
                    this.container.clear(), this.container = null
                }, _e.prototype.widgetPositonChanged = function() {
                    var e = {},
                        t = this.offsetX,
                        i = this.offsetY,
                        n = t + "px";
                    E.isCenterPositioned() ? (E.isDesktopRectangle() && (n = .5 * E.minimizedDimensions().height - .5 * E.minimizedDimensions().width + "px"), E.isRightPositioned() ? (bodyClassName = "center right", (e = E.isDesktopRectangle() ? M.getRotateStyling("-90", "49%") : M.getRotateStyling("0", "0")).right = n, e.left = "auto !important") : (bodyClassName = "center left", (e = E.isDesktopRectangle() ? M.getRotateStyling("90", "49%") : M.getRotateStyling("0", "0")).left = n, e.right = "auto !important"), E.isDesktopRectangle() || (e.transform = "unset"), e.top = "calc(50% - " + .5 * E.minimizedDimensions().height + "px) !important", e.bottom = "auto !important") : ((e = M.getRotateStyling("0", "0")).margin = "0px !important", bodyClassName = E.isTopPositioned() ? (e.top = i + "px !important", e.bottom = "auto !important", " top ") : (e.top = "auto !important", e.bottom = i + "px !important", " bottom "), E.isRightPositioned() ? (bodyClassName += " right ", e.right = "5px !important", e.left = "auto !important") : (bodyClassName += " left ", e.left = t + "px !important", e.right = "auto !important")), this.container.massRestyle(e)
                }, _e.prototype.createBubble = function() {
                    var e;
                    this.bubbleContainer && this.bubbleContainer.elementReferrer && !E.hideWidget && E.chatBubble && !B.chatBubbleClosed() && (E.chatBubble().type && "default" !== E.chatBubble().type ? this.createImageBubble() : this.createDefaultBubble(), e = this.bubbleContainer.getElementById("tawkchat-chat-bubble-close"), this.bubbleContainer.attachUserEventListener("mouseover", function() {
                        e && (e.style.visibility = "visible")
                    }, null, "bubbleHover"), this.bubbleContainer.attachUserEventListener("mouseout", function() {
                        e && (e.style.visibility = "hidden")
                    }, null, "bubbleOut"), this.bubbleContainer.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                        "max" === E.onClickAction ? (y.viewHandler.userAction = !0, y.sessionHandler.notifyWindowState("max")) : y.viewHandler.popoutWidget(), y.eventHandler.cancelEvent(e)
                    }, "bubble-image", "bubbleContainerClick"), y.viewHandler.isMaximized || this.showBubble())
                }, _e.prototype.calculateBubblePositioning = function(e, t, i, n, a, o, r) {
                    var s, l, d = E.minimizedDimensions().width,
                        c = {};
                    E.isCenterPositioned() ? (s = -.5 * t, l = n, 0 === o ? (d = "gallery" === E.chatBubble().type ? 0 : .5 * (d - t), i += "px !important") : i = "gallery" === E.chatBubble().type ? (l = d = 0, -1 * (.5 * (e - t) - n) + "px !important") : (d = .5 * (d - e), -1 * (.5 * (e - t) - i) + "px !important"), c = M.getRotateStyling(o, "49%"), E.isRightPositioned() ? (c.right = i, c.left = "auto !important") : (c.left = i, c.right = "auto !important"), c.top = "50% !important", c.bottom = "auto !important", o = s - d + l) : (c = M.getRotateStyling("0", "0"), o = "0", E.isTopPositioned() ? (c.top = n + "px !important", c.bottom = "auto !important", r += " top ") : (c.bottom = n + "px !important", c.top = "auto !important", r += " bottom "), E.isRightPositioned() ? (c.right = i + "px !important", c.left = "auto !important", r += " right ") : (c.left = i + "px !important", c.right = "auto !important", r += " left ")), c.width = e + "px !important", c["max-width"] = e + "px !important", c["min-width"] = e + "px !important", c.height = t + "px !important", c["max-height"] = t + "px !important", c["min-height"] = t + "px !important", c["z-index"] = (0 === a ? "1000000" : "1000002") + " !important", c.margin = o + "px 0 0 0 !important", this.bubbleContainer.massRestyle(c), this.bubbleContainer.documentRef.body.className += r
                }, _e.prototype.createDefaultBubble = function() {
                    var e, t = 0,
                        i = 0;
                    i = !!document.createElement("canvas").getContext;
                    var n = " default ",
                        a = k.isIE && k.version < 9;
                    (i || a) && ((a = M.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0]).innerHTML = w["tawkchat-chat-bubble-canvas"], i && this.createCanvasChatBubble(), (i = this.bubbleContainer.getElementById("tawkchat-chat-bubble-text")).innerHTML = E.chatBubble().txt, i.style.color = E.chatBubble().fgc, i = E.isCenterPositioned() ? (E.isRightPositioned() ? (e = -90, t -= 10, E.isRTL() && (t = E.minimizedDimensions().width - 146)) : (e = 90, t = E.isDesktopRectangle() ? E.minimizedDimensions().width - 146 + 10 : 10, E.isRTL() && (t = 0)), E.minimizedDimensions().height + this.offsetX + 2) : (t = E.minimizedDimensions().height + this.offsetY + 2, !E.isRightPositioned() && !E.isRTL() || E.isRightPositioned() && E.isRTL() ? E.isDesktopRectangle() ? E.minimizedDimensions().width - 146 + 16 : 10 : 0), E.isRTL() && (n += " rtl-direction"), this.calculateBubblePositioning(146, 85, i, t, 0, e, n))
                }, _e.prototype.createImageBubble = function() {
                    var e, t, i, n = M.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0],
                        a = E.chatBubble(),
                        o = a.height + 16,
                        r = 0;
                    "gallery" === a.type ? (i = 22 === (t = parseInt(a.name, 10)), E.isDesktopRectangle() || (t += "-r"), E.isCenterPositioned() ? (t += E.isRightPositioned() ? "-cr" : "-cl", E.isDesktopRectangle()) : t = E.isTopPositioned() ? t + (E.isRightPositioned() ? "-tr" : "-tl") : t + (E.isRightPositioned() ? "-br" : "-bl"), e = " gallery ", t = "https://static-v.tawk.to/a-v3/images/bubbles/" + t + (i ? ".png" : ".svg"), E.isCenterPositioned() && 0 === a.rotate && (e += " center-right"), n.innerHTML = M.escapeTemplateReplacement(w["tawkchat-chat-bubble-gallery"], [{
                        placeholder: "__IMAGE_SRC__",
                        textReplace: t
                    }, {
                        placeholder: "__IMAGE_SIZE__",
                        textReplace: "width:" + a.width + "px; height:" + a.height + "px;"
                    }])) : (e = " upload ", t = "https://tawk.link/" + E.chatBubble().name, n.innerHTML = M.escapeTemplateReplacement(w["tawkchat-chat-bubble-upload"], [{
                        placeholder: "__IMAGE_SRC__",
                        textReplace: t
                    }])), E.isTopPositioned() || E.isCenterPositioned() ? (r += a.topOffset, E.isCenterPositioned() && 0 === a.rotate && (r -= 16)) : r += a.bottomOffset, n = E.isRightPositioned() ? a.rightOffset : a.leftOffset, E.isCenterPositioned() && 0 !== a.rotate && (n = "gallery" === a.type ? n - 3 : n + 2), this.calculateBubblePositioning(a.width, o, n, r, a.zIndex, a.rotate, e)
                }, _e.prototype.toggleBubble = function() {
                    E.chatBubble && this.bubbleContainer && this.bubbleContainer.elementReferrer && (this.shown && "offline" !== B.pageStatus() ? this.bubbleContainer.restyle("display", "block !important") : this.bubbleContainer.restyle("display", "none !important"))
                }, _e.prototype.agentBarChanged = function(e) {
                    var t, i, n, a, o, r, s, l = {};
                    E.hideWidget || (this.container.massRestyle({
                        height: e + "px !important",
                        "min-height": e + "px !important",
                        "max-height": e + "px !important"
                    }), r = k.isIE && k.version < 10, closeIconWidth = 16, minWidth = E.minimizedDimensions().width, minHeight = E.minimizedDimensions().height, t = E.chatBubble(), i = e - minHeight, s = t.rotate, t.type && "default" !== t.type ? (n = t.topOffset, a = t.bottomOffset, bubbleWidth = t.width, bubbleContainerHeight = t.height + closeIconWidth, o = E.isRightPositioned() ? t.rightOffset : t.leftOffset) : (bubbleWidth = 146, bubbleContainerHeight = 85, E.isCenterPositioned() ? (o = minHeight + 2, s = E.isRightPositioned() ? -90 : 90) : (n = minHeight + 2, a = minHeight + 2, o = E.isRightPositioned() ? 0 : minWidth - bubbleWidth + closeIconWidth)), E.isCenterPositioned() ? (n = -.5 * minWidth + .5 * e + "px !important", o += i, i = 0 === s ? o + "px !important" : -1 * (.5 * (bubbleWidth - bubbleContainerHeight) - o) + "px !important", E.isRightPositioned() ? (this.container.restyle("right", n), l.right = i, r && (this.container.restyle("right", e - minWidth + "px !important"), 0 !== s && (l.right = o - (bubbleWidth - bubbleContainerHeight) + "px !important"))) : E.isCenterPositioned() || (this.container.restyle("left", n), l.left = i, r && (this.container.restyle("left", "0px !important"), 0 !== t.rotate && (l.left = o + "px !important"))), r ? this.container.restyle("margin", -.5 * minWidth + "px 0 0 0 !important") : this.container.restyle("margin", -.5 * e + "px 0 0 0 !important")) : E.isCenterPositioned() || (E.isTopPositioned() ? l.top = n + i + "px !important" : l.bottom = a + i + "px !important"), this.bubbleContainer && this.bubbleContainer.elementReferrer && E.chatBubble && !B.chatBubbleClosed() && this.bubbleContainer.massRestyle(l))
                }, _e.prototype.calculateIndicatorPositioning = function() {
                    var e = {},
                        t = this.indicatorWidth,
                        i = this.indicatorHeight,
                        n = E.minimizedDimensions().width,
                        a = E.minimizedDimensions().height,
                        o = "";
                    Math.max(document.documentElement.clientHeight, h.innerHeight || 0);
                    var r, s = this.offsetX,
                        l = this.offsetY;
                    E.isCenterPositioned() ? (E.isRightPositioned() ? (e.right = l + a - i + 5 + "px !important", e.top = "calc(50% - " + .5 * n + "px) !important", e.left = "auto !important", r = "right", e.bottom = "auto !important", E.isDesktopRectangle() ? (e.right = l + a - i + 5 + "px !important", E.isRTL() && (e.bottom = "calc(50% - " + (.5 * n + 5) + "px) !important", e.top = "auto !important")) : (E.isRTL() ? e.right = a + "px !important" : e.right = s - 5 + "px !important", e.left = "auto !important")) : (e.right = "auto !important", r = "left", e.bottom = "auto !important", E.isDesktopRectangle() ? (e.top = "calc(50% - " + (.5 * n + 5) + "px) !important", e.left = l + a - i + 5 + "px !important", E.isRTL() || (e.top = "calc(50% + " + (.5 * n - .5 * i) + "px) !important")) : (e.top = "calc(50% - " + .5 * n + "px) !important", E.isRTL() ? e.left = s - 5 + "px !important" : e.left = s + n - t + 5 + "px !important", e.right = "auto !important")), o += " bottom " + r) : (E.isTopPositioned() ? (o += " top ", e.top = l + "px !important", e.bottom = "auto !important") : (o += " bottom ", e.top = "auto !important", E.isDesktopRectangle() ? e.bottom = a - s - 5 + "px !important" : e.bottom = a + l - E.widgetOffsetY + "px !important"), E.isRightPositioned() ? (o += " right ", E.isRTL() ? E.isDesktopRectangle() ? e.right = n - 5 + "px !important" : e.right = n + "px !important" : E.isDesktopRectangle() ? e.right = "1px !important" : e.right = s - 5 + "px !important", e.left = "auto !important") : (o += " left ", E.isRTL() ? e.left = s - 5 + "px !important" : e.left = s + n - t + 5 + "px !important", e.right = "auto !important")), e.width = t + "px !important", e["max-width"] = t + "px !important", e["min-width"] = t + "px !important", e.height = i + "px !important", e["max-height"] = i + "px !important", e["min-height"] = i + "px !important", this.chatIndicator.documentRef.body.className += " " + o + " round", this.chatIndicator.massRestyle(e)
                }, _e.prototype.showBubble = function() {
                    this.bubbleContainer && "offline" !== B.pageStatus() && (!y.viewHandler.messagePreview || y.viewHandler.messagePreview && y.viewHandler.messagePreview.messagePreviewCount < 1) && this.bubbleContainer.show()
                }, _e.prototype.hideBubble = function() {
                    this.bubbleContainer && this.bubbleContainer.hide()
                }, _e.prototype.initMessagePreviewContainer = function() {
                    var e, t = y.viewHandler.iframeContainer;
                    this.messagePreview = new ge(M.getRandomName(), M.getGenericStyle({
                        zindex: "999999",
                        width: "378px",
                        height: this.messagePreviewHeight,
                        position: "fixed",
                        display: "none",
                        bottom: E.minimizedDimensions().height + this.offsetY + 10 + "px",
                        right: this.offsetX + "px"
                    }), O, "iframe"), y.viewHandler.messagePreview = new be(this.messagePreview), this.messagePreview.elementReferrer || t.elementReferrer.appendChild(this.messagePreview.buildView(t.documentRef)), this.messagePreview.buildIframe(y.MinifiedStyle + E.minStyle()), t = M.getElementsByTagName(this.messagePreview.documentRef, "body")[0], e = (e = (e = w["tawkchat-message-preview"]).replace(/__TAWK_TO_LINK__/gm, y.viewHandler.tawktoLinkName)).replace(/__BOTTOM_CONTAINER__/gm, y.viewHandler.bottomContainerName), t.innerHTML = e, y.viewHandler.messagePreview.init()
                }, _e.prototype.destroyMessagePreviewContainer = function() {
                    this.messagePreview && this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode && this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef), this.messagePreview = null, y.viewHandler.messagePreview = null
                };
                var xe = _e.extend({
                    init: function() {
                        var e = this;
                        this._super(this), y.eventEmitter.on("localeChanged", function() {
                            e.setLinkTitle()
                        }), E.isRTL.subscribe(function() {
                            e.addClassName()
                        })
                    },
                    buildView: function() {
                        this._super(this), this.addClassName(), this.setLinkTitle()
                    },
                    attachEvents: function() {
                        this.container && this._super()
                    },
                    createCanvasChatBubble: function() {
                        var e, t, i, n, a, o, r, s, l, d, c, p, h, m, g, u, f, v = 5,
                            b = E.chatBubble().bgc;
                        (e = this.bubbleContainer.getElementById("tawkchat-chat-bubble-canvas")) && (E.chatPosition(), e.width = "146", e.height = "85", (a = e.getContext("2d")).clearRect(0, 0, 134, 63), a.fillStyle = b, n = E.isTopPositioned() ? (o = 68, h = (v = 16) + 3, p = 81, g = !(m = 6), e = 1.1, t = 1.9, i = 1.6, .85) : (o = v = 6, h = v + 63 - 3, p = 55, m = 79, g = !0, e = .9, t = .1, i = .4, 1.15), E.isRTL() ? (closeContainerStart = (f = 10) - 4, r = f + 2, d = l = f - 2, c = s = f + 5, p = 81, n = E.isTopPositioned() ? (u = g, i = .2, 1.45) : (u = !g, i = .6, 1.85)) : (closeContainerStart = (f = 2) + 134 + 4, r = f + 134 - 2, d = l = f + 134 + 2, c = s = f + 134 - 5, u = g), a.beginPath(), a.moveTo(f + 8, v), a.lineTo(68, v), a.lineTo(f + 134 - 8, v), a.quadraticCurveTo(f + 134, v, f + 134, v + 8), a.lineTo(f + 134, v + 63 - 8), a.quadraticCurveTo(f + 134, v + 63, f + 134 - 8, v + 63), a.lineTo(f + 8, v + 63), a.quadraticCurveTo(f, v + 63, f, v + 63 - 8), a.lineTo(f, v + 8), a.quadraticCurveTo(f, v, f + 8, v), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.closePath(), a.fill(), a.beginPath(), a.arc(68, h, 10, Math.PI * e, Math.PI * t, g), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.fill(), E.isDesktopRectangle() || (E.isTopPositioned() && E.isLeftPositioned() ? p -= 30 : (E.isBottomPositioned() && E.isRightPositioned() || E.isCenterPositioned() && E.isRightPositioned()) && (p += 30)), a.beginPath(), a.arc(p, m, 5, 0, 2 * Math.PI, !1), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.closePath(), a.fill(), a.beginPath(), a.arc(r, o + 5, 10, Math.PI * i, Math.PI * n, u), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.closePath(), a.fillStyle = b, a.fill(), a.beginPath(), a.moveTo(s, o + 1.5), a.lineTo(l, o + 8), a.closePath(), a.lineWidth = 2, a.strokeStyle = E.chatBubble().fgc, a.stroke(), a.beginPath(), a.moveTo(d, o + 1.5), a.lineTo(c, o + 8), a.closePath(), a.lineWidth = 2, a.strokeStyle = E.chatBubble().fgc, a.stroke())
                    }
                });
                xe.prototype.setLinkTitle = function() {
                    var e = this.container.getElementById("minimizeChatMinifiedBtn"),
                        t = this.container.getElementById("maximizeChat");
                    this.container && (t && t.setAttribute("title", y.languageParser.translate("rollover", "maximize")), e && e.setAttribute("title", y.languageParser.translate("rollover", "minimize")))
                }, xe.prototype.chatEnded = function() {
                    var e = this.container.getElementById("tawkchat-minified-agent-container"),
                        t = this.container.getElementById("tawkchat-status-text-container"),
                        i = this.container.getElementById("tawkchat-minified-link-container");
                    e && t && (e.innerHTML = "", e.style.display = "none", t.style.display = "block", i.style.marginTop = "0px")
                }, xe.prototype.addClassName = function() {
                    var e = E.isRTL() ? " rtl-direction" : " ltr-direction";
                    this.container && this.container.elementReferrer && (this.container.getElementById("tawkchat-minified-wrapper").className = M.getContrast(E.headerTxtColor) + e), this.chatIndicator && this.chatIndicator.elementReferrer && (this.chatIndicator.getElementById("tawkchat-chat-indicator").className = e)
                };
                var Ce = TawkClass.extend({
                    init: function(e, t) {
                        var i = this;
                        this.inDocument = !1, this.maxNumberFileUpload = 5, this.maxSizeFileUpload = 52428800, this.frameWidth = k.mobileBrowserName ? "100%" : E.maximizedDimensions().width + "px", this.frameHeight = k.mobileBrowserName ? "100%" : E.maximizedDimensions().height + "px", this.isActionsContainerNotifShown = this.isChatMenuOpen = !1, this.resizeThrottle = 0, this.container = E.isPopup ? new me(M.getRandomName(), "display: none;") : new ge(M.getRandomName(), M.getGenericStyle({
                            zindex: "999999",
                            position: "static",
                            display: "none",
                            height: this.frameHeight,
                            width: this.frameWidth
                        }), O, "iframe"), this.wrapper = new me("tawkchat-maximized-wrapper"), y.MaximizedStyle = y.MaximizedStyle.replace(/#tawktoLink/g, "#" + e), y.MaximizedStyle = y.MaximizedStyle.replace(/#bottomContainer/g, "#" + t), this.wrapper.template = this.wrapper.template.replace(/__TAWK_TO_LINK__/gm, e), this.wrapper.template = this.wrapper.template.replace(/__BOTTOM_CONTAINER__/gm, t), this.wrapper.template = this.wrapper.template.replace("__TOO_LONG_MESSAGE__", y.languageParser.translate("chat", "message_too_long")), E.isDesktopRectangle() || this.wrapper.addClass("roundWidget"), this.chatTextarea = new me("chatTextarea", null, null, "textarea"), this.container.addChildViews([this.wrapper]), E.maximizedDimensions.subscribe(function(e) {
                            E.isEmbedded || E.isPopup || k.mobileBrowserName || (i.frameHeight = e.height + "px", i.frameWidth = e.width + "px", i.container.restyle("height", i.frameHeight + " !important"), i.container.restyle("width", i.frameWidth + " !important"))
                        }), B.pageStatus.subscribe(function(e) {
                            i.updateGreetings(e)
                        }), E.soundOn.subscribe(function() {
                            i.toggleSound()
                        }), y.eventEmitter.on("localeChanged", function() {
                            i.container && i.updateGreetings()
                        }), E.isRTL.subscribe(function() {
                            i.addClassName()
                        }), T.name.subscribe(function() {
                            if (!M.isGeneratedName(T.name()))
                                for (var e = M.getElementsByClassName(i.container.documentRef, "messageOwnerName visitor"), t = 0; t < e.length; t++) e[t].style.display = "none"
                        }), E.webRTCSettings.subscribe(function() {
                            i.toggleWebRTCActions()
                        }), E.desktopWidget.subscribe(function() {
                            E.isDesktopRectangle() ? (i.wrapper.removeClass("roundWidget"), i.container.documentRef.getElementById("minimizeChat").className = "headerBoxLink", "br" === E.chatPosition() ? i.container.documentRef.body.className = "right" : i.container.documentRef.body.className = "left") : (i.wrapper.addClass("roundWidget"), i.container.documentRef.getElementById("minimizeChat").className = "notShown")
                        }), E.showEmoji.subscribe(function() {
                            i.toggleEmojiAction()
                        }), E.showUploads.subscribe(function() {
                            i.toggleUploadsAction()
                        }), E.showRating.subscribe(function() {
                            i.toggleRatingAction()
                        })
                    },
                    buildView: function() {
                        E.isPopup || this.container.buildIframe(y.MaximizedStyle + E.maxStyle()), this.container.documentRef.getElementById("textareaContainer").appendChild(this.chatTextarea.buildView(this.container.documentRef)), E.isEmbedded || E.isPopup || k.mobileBrowserName ? this.restyleEmbed() : "br" == E.chatPosition() ? (M.removeClass(this.container.documentRef.body, "left"), M.addClass(this.container.documentRef.body, "right")) : (M.removeClass(this.container.documentRef.body, "right"), M.addClass(this.container.documentRef.body, "left")), this.addClassName(), this.updateGreetings(), this.toggleSound(), this.attachEvents(), this.toggleUploadsAction(), this.toggleRatingAction(), this.toggleEmojiAction(), void 0 === ie && Z(this.container.documentRef), M.redraw(this.container.elementReferrer), this.inDocument = !0, this.toggleWebRTCActions();
                        var e = this.container.documentRef.getElementById("minimizeChat");
                        E.isEmbedded || !E.isDesktopRectangle() || E.isPopup ? e.className = "notShown" : e.className = "headerBoxLink"
                    },
                    toggleUploadsAction: function() {
                        var a = this,
                            e = this.container.getElementById("uploadFileOption");
                        e && (E.showUploads() ? (e.style.display = "block", this.container.attachUserEventListener("change", function(e) {
                            y.eventHandler.cancelEvent(e), a.closeMenu();
                            var t = [],
                                i = [];
                            if ((e = y.eventHandler.getTargetElement(e).files) && e.length) {
                                for (var n = 0; n < e.length; n++) e[n].size > a.maxSizeFileUpload ? t.push(e[n]) : n >= a.maxNumberFileUpload ? i.push(e[n]) : y.viewHandler.startUpload(e[n]);
                                y.viewHandler.checkUploadFileWarning(t, i)
                            }
                        }, "fileInput", "fileInputChanged"), this.container.attachUserEventListener("dragover", function(e) {
                            e.preventDefault(), e.stopPropagation && e.stopPropagation(), a.wrapper.addClass("drag-over")
                        }, "innerWrapper", "textareaContainerDragOver"), e = function(e) {
                            var t = a.container.getElementById("tawkchat-maximized-wrapper").getBoundingClientRect();
                            (e.clientY < t.top || e.clientY >= t.bottom || e.clientX < t.left || e.clientX >= t.right) && (e.preventDefault(), e.stopPropagation && e.stopPropagation(), a.wrapper.removeClass("drag-over"))
                        }, this.container.attachUserEventListener("dragleave", e, "innerWrapper", "textareaContainerDragLeave"), this.container.attachUserEventListener("dragend", e, "innerWrapper", "textareaContainerDragEnd"), this.container.attachUserEventListener("drop", function(e) {
                            e.preventDefault(), e.stopPropagation && e.stopPropagation(), a.wrapper.removeClass("drag-over");
                            var t = [],
                                i = [];
                            if ((e = e.target.files || e.dataTransfer.files) && 0 !== e.length) {
                                for (var n = 0; n < e.length; n++) e[n].size > a.maxSizeFileUpload ? t.push(e[n]) : n >= a.maxNumberFileUpload ? i.push(e[n]) : y.viewHandler.startUpload(e[n]);
                                y.viewHandler.checkUploadFileWarning(t, i)
                            }
                        }, "innerWrapper", "textareaContainerDrop"), this.container.attachUserEventListener("paste", function(e) {
                            var t, i;
                            if ((t = (e.originalEvent || e).clipboardData) && (t = t.items) && t.length) {
                                for (var n = 0; n < t.length; n++)
                                    if (-1 !== t[n].type.indexOf("image")) {
                                        var a = t[n].getAsFile();
                                        if (null !== a) {
                                            (i = a).name = y.languageParser.translate("chat", "pasted_image_title", {
                                                dateTime: M.parseChatTime(new Date)
                                            });
                                            break
                                        }
                                    } i && (y.viewHandler.startUpload(i), e.preventDefault())
                            }
                        }, "chatTextarea", "chatTextareaPaste")) : e.style.display = "none")
                    },
                    toggleRatingAction: function() {
                        var e = this.container.getElementById("rateMainWrapper"),
                            t = this.container.getElementById("rateContainer");
                        e && t && (E.showRating() ? (e.style.display = "block", this.container.attachUserEventListener("mouseover", function() {
                            t.style.display = "block"
                        }, "rateMainWrapper", "rateMainWrapperOver"), this.container.attachUserEventListener("mouseout", function() {
                            t.style.display = "none"
                        }, "rateMainWrapper", "rateMainWrapperOut"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.chatHandler.changeRating(1), y.eventHandler.cancelEvent(e)
                        }, "ratePositive", "ratepveclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.chatHandler.changeRating(-1), y.eventHandler.cancelEvent(e)
                        }, "rateNegative", "ratenveclick")) : e.style.display = "none")
                    },
                    toggleEmojiAction: function() {
                        var t = this,
                            e = this.container.getElementById("textareaContainer"),
                            i = this.container.getElementById("viewEmoji"),
                            n = this.container.documentRef.getElementById("emoji-selection-container");
                        E.showEmoji() ? (n.innerHTML = w.loader, i.style.display = "block", M.addClass(e, "with-emoji"), void 0 === ie && Z(this.container.documentRef), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, "active" === t.container.getElementById("viewEmoji").className ? t.closeEmojiSelection() : (t.container.getElementById("viewEmoji").className = "active", le(n), y.viewHandler.adjustEmojiContainerHeight())
                        }, "viewEmoji", "viewEmojiClick"), this.wrapper.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            e = y.eventHandler.getTargetElement(e), n && ("function" == typeof n.contains ? n.contains(e) || t.closeEmojiSelection() : M.isDescendent(n, e) && t.closeEmojiSelection())
                        }, null, "maxWidgetClick")) : (i.style.display = "none", M.removeClass(e, "with-emoji"))
                    },
                    attachEvents: function() {
                        var t, a = this,
                            o = this.container.documentRef.getElementById("tooLongMsgNotification"),
                            i = M.hasWebRTC() ? null : "Browser not supported.";
                        this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            E.isPopup ? h.close() : (y.eventHandler.cancelEvent(e), y.sessionHandler.notifyWindowState("min"), a.closeMenu())
                        }, "minimizeChat", "minlinkclick"), k.mobileBrowserName ? (t = this.container.getElementById("chatTextarea")) && (q.initElement(t, function(e, t) {
                            t.length <= 5e3 ? (o.className = "", a.isActionsContainerNotifShown = !1) : (o.className = "visible", a.isActionsContainerNotifShown = !0), a.toggleMobileSubmitButton(t), y.chatHandler.sendTextPreview(e)
                        }), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.eventHandler.cancelEvent(e), y.chatHandler.sendMessage(t.value), t.value = "", a.toggleMobileSubmitButton(""), a.resizeTextArea()
                        }, "textareaSubmitButton", "submitclick")) : (this.chatTextarea.attachUserEventListener("keyup", function(e) {
                            this.value.length <= 5e3 ? (o.className = "", a.isActionsContainerNotifShown = !1) : (o.className = "visible", a.isActionsContainerNotifShown = !0), E.isEmbedded && y.browserData.getMobileBrowser() && a.toggleMobileSubmitButton(this.value), a.resizeTextArea()
                        }, null, "chatinputkeyup"), this.chatTextarea.attachUserEventListener("keydown", function(e) {
                            var t, i = a.container.getElementById("hidableActionsWrapper"),
                                n = a.container.getElementById("textareaContainer");
                            if (a.resizeTextArea(), 13 === e.keyCode) {
                                if (5e3 < this.value.length) return void e.preventDefault();
                                o.className = "", a.isActionsContainerNotifShown = !1, y.viewHandler.scrollToBottom()
                            }
                            t = y.eventHandler.getTargetElement(e), setTimeout(function() {
                                t.value ? (i.style.display = "none", n.className = n.className.replace("additionalPadding", ""), M.removeClass(n, "additionalPadding")) : (i.style.display = "block", n.className += " additionalPadding ", M.addClass(n, "additionalPadding"))
                            }, 0), y.chatHandler.sendTextPreview(e)
                        }, null, "chatinputkeydown"), this.chatTextarea.attachUserEventListener("blur", function(e) {
                            e = y.eventHandler.getTargetElement(e);
                            var t = a.container.getElementById("hidableActionsWrapper");
                            e.value || (t.style.display = "block", M.addClass(a.container.getElementById("textareaContainer"), "additionalPadding"))
                        }, null, "chatinputblur"), E.isEmbedded && y.browserData.getMobileBrowser() && this.chatTextarea.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.eventHandler.cancelEvent(e), y.chatHandler.sendMessage(a.chatTextarea.elementReferrer.value), a.chatTextarea.elementReferrer.value = "", a.toggleMobileSubmitButton(""), a.resizeTextArea(), y.viewHandler.scrollToBottom()
                        }, "textareaSubmitButton", "submitclick")), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            var t = y.eventHandler.getTargetElement(e); - 1 !== t.className.indexOf("messageOwnerName") && -1 !== t.className.indexOf("visitor") && (y.formHandler.openForm("nameForm"), y.eventHandler.cancelEvent(e))
                        }, "chatWrapper", "chatWrapperclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.formHandler.openForm("nameForm"), a.closeMenu(), y.eventHandler.cancelEvent(e)
                        }, "changeName", "changenameclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.formHandler.openForm("emailTranscriptForm"), a.closeMenu(), y.eventHandler.cancelEvent(e)
                        }, "emailTranscriptOption", "emailclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.eventHandler.cancelEvent(e), y.chatHandler.toggleSound()
                        }, "soundOn", "soundonclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.eventHandler.cancelEvent(e), y.chatHandler.toggleSound()
                        }, "soundOff", "soundoffclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.eventHandler.cancelEvent(e), y.viewHandler.expandAgentList(e)
                        }, "expandableIcon", "expandclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                            var t = y.languageParser.translate("chat", "video_call_error");
                            M.getWebRTCToken(!0, !1, function(e) {
                                e && y.viewHandler.appendMessage({
                                    senderType: "s",
                                    message: i || t,
                                    time: new Date,
                                    type: "n",
                                    isRtcError: !0,
                                    rtcType: "video"
                                })
                            })
                        }, "videoCall", "videoCallClick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                            var t = y.languageParser.translate("chat", "voice_call_error");
                            M.getWebRTCToken(!1, !1, function(e) {
                                e && y.viewHandler.appendMessage({
                                    senderType: "s",
                                    message: i || t,
                                    time: new Date,
                                    type: "n",
                                    isRtcError: !0,
                                    rtcType: "voice"
                                })
                            })
                        }, "voiceCall", "voiceCallClick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                            var e = a.container.getElementById("chatMenu"),
                                t = a.container.getElementById("chatMenuControls");
                            a.chatMenuOpen ? (a.chatMenuOpen = !1, e.className = "", t.style.display = "none") : (a.chatMenuOpen = !0, e.className = "active", t.style.display = "block")
                        }, "chatMenu", "chatMenuClick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                            a.container.getElementById("chatMenu").className = "", a.closeMenu()
                        }, "chatMenuControlsOverlay", "chatMenuControlsOverlayClick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                            var t = y.languageParser.translate("chat", "screen_share_error");
                            M.getWebRTCToken(!1, !0, function(e) {
                                e && y.viewHandler.appendMessage({
                                    senderType: "s",
                                    message: i || t,
                                    time: new Date,
                                    type: "n",
                                    isRtcError: !0,
                                    rtcType: "screen"
                                })
                            })
                        }, "screenShare", "screenShareClick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                            a.container.getElementById("maxFileNotificationContainer").classList.add("hidden")
                        }, "closeNumberNotification", "closeNumberNotification"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function() {
                            a.container.getElementById("maxSizeNotificationContainer").classList.add("hidden")
                        }, "closeSizeNotification", "closeSizeNotification"), this.container.attachUserEventListener("mousedown", function() {
                            var e = h.document.activeElement;
                            !e || "input" !== e.tagName.toLowerCase() && "textarea" !== e.tagName.toLowerCase() || (y.viewHandler.lastFocusedElement = e)
                        }, "innerWrapper", "maximizedWidgetMouseDown"), this.container.attachUserEventListener("click", function(e) {
                            e.preventDefault(), a.chatTextarea && a.chatTextarea.elementReferrer && a.chatTextarea.elementReferrer.focus()
                        }, "textareaContainer", "textareaContainerClick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.formHandler.openForm("nameForm"), y.eventHandler.cancelEvent(e)
                        }, "changeNameOption", "changenameclick"), this.wrapper.attachUserEventListener("keydown", function(e) {
                            27 === e.keyCode && a.closeEmojiSelection()
                        }, null, "maxWidgetKeydown");
                        var e = function(e) {
                            "cut" !== e.type && "paste" !== e.type || y.chatHandler.sendTextPreview(e), a.resizeTextArea()
                        };
                        this.chatTextarea.attachUserEventListener("keydown", e, null, "chatinputkeyupresize"), this.chatTextarea.attachUserEventListener("change", e, null, "chatinputchangeresize"), this.chatTextarea.attachUserEventListener("input", e, null, "chatinputinputresize"), this.chatTextarea.attachUserEventListener("paste", e, null, "chatinputpasteresize"), this.chatTextarea.attachUserEventListener("cut", e, null, "chatinputcutresize");
                        var n, r, s, l, d = this.container.getElementById("greetingsMainContainer"),
                            e = /Firefox/i.test(p.userAgent) ? "DOMMouseScroll" : "mousewheel",
                            c = this.container.getElementById("chatContainer");
                        k.mobileBrowserName && (e = "touchstart touchmove touchend"), k.mobileBrowserName && this.container.attachUserEventListener("scroll", a.chatViewScroll.bind(a), "chatContainer", "chatContainerScroll"), this.container.attachUserEventListener(e, function(e) {
                            n = e.originalEvent ? e.originalEvent : e;
                            var t = 0 < (l = n.detail ? -40 * n.detail : n.wheelDelta);
                            if ("touchmove" === e.type ? s = e.changedTouches[0].clientY : "touchstart" === e.type ? r = e.touches[0].clientY : "touchend" === e.type ? t = r < s : k.mobileBrowserName || a.chatViewScroll(e), 0 === c.scrollTop && -1 !== d.className.indexOf("minimize")) {
                                if (l < 0 || s < r) return
                            } else if (-1 === c.className.indexOf("minimize") && (r < s || 0 < l)) return;
                            y.viewHandler.toggleGreetingsView(t)
                        }, "chatPanel", "chatPanelScroll")
                    },
                    toggleSound: function() {
                        var e = this.container.getElementById("soundOn"),
                            t = this.container.getElementById("soundOff");
                        e && t && (E.soundOn() ? (e.style.display = "block", t.style.display = "none") : (e.style.display = "none", t.style.display = "block"))
                    }
                });
                Ce.prototype.chatViewScroll = function() {
                    this.isScrolling && clearTimeout(this.isScrolling), this.isScrolling = setTimeout(function() {
                        "max" === B.chatWindowState() && y.viewHandler.checkSeenMessageViewport()
                    }, 1e3 / 66)
                }, Ce.prototype.hide = function() {
                    this.container.restyle("display", "none !important")
                }, Ce.prototype.show = function() {
                    this.container.restyle("display", "block !important"), y.viewHandler.checkSeenMessageViewport(), "consentForm" === y.formHandler.currentForm && this.wrapper.addClass("noMenu"), y.formHandler.handleResizeofForm()
                }, Ce.prototype.restyleEmbed = function() {
                    var e = document.getElementById(d.embedded);
                    if (this.wrapper.addClass("embedded"), E.isEmbedded) return e ? y.viewHandler.onEmbeddedWindowResize() : void 0;
                    E.isPopup && (this.wrapper.addClass("popout"), M.updateFontStylesheet(document)), this.container.restyle("width", "100% !important"), this.container.restyle("height", "100% !important")
                }, Ce.prototype.updateGreetings = function(e) {
                    var t;
                    this.container.elementReferrer && ((t = this.container.getElementById("file-upload-drop-label")) && (t.innerHTML = y.languageParser.translate("chat", "dragDropText")), (e = e || B.pageStatus()) && (t = this.container.getElementById("shortMessage"), this.setChatGreetings(), t && this.chatTextarea && (null !== (e = r.getShortMessage(e)) && (t.innerHTML = e, E.onlineGreeting && (e = M.rawDecode(E.onlineGreeting.actionMessage), k.isPlaceholderSupported ? this.chatTextarea.elementReferrer.placeholder = e : (this.chatTextarea.elementReferrer.value = e, M.togglePlaceholderText(this.chatTextarea.elementReferrer, e, "chatTextarea")))))))
                }, Ce.prototype.addClassName = function() {
                    this.wrapper && this.wrapper.elementReferrer && (E.isRTL() ? (this.wrapper.addClass("rtl-direction"), this.wrapper.removeClass("ltr-direction")) : (this.wrapper.addClass("ltr-direction"), this.wrapper.removeClass("rtl-direction")))
                }, Ce.prototype.toggleEndChatOption = function(e) {
                    var t = this.container.getElementById("endChatOption");
                    t && (endChatEl = this.container.getElementById("endChat"), chatMenuEl = this.container.getElementById("chatMenuControls"), E.isEmbedded ? e ? (t.style.width = "220px", t.style.marginLeft = "-220px", chatMenuEl.style.right = "34px", endChatEl.style.display = "inline-block") : (t.style.width = "194px", t.style.marginLeft = "-194px", chatMenuEl.style.right = "10px", endChatEl.style.display = "none") : t.style.display = e ? "block" : "none")
                }, Ce.prototype.addEmojiToInput = function(e) {
                    k.isPlaceholderSupported || this.chatTextarea.elementReferrer.value !== M.rawDecode(E.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = ""), this.chatTextarea.elementReferrer.value += e, this.chatTextarea.elementReferrer.focus(), this.closeEmojiSelection()
                }, Ce.prototype.closeEmojiSelection = function() {
                    this.container.getElementById("viewEmoji").className = "", M.removeClass(this.container.getElementById("emoji-selection-container"), "showWithFade")
                }, Ce.prototype.resizeTextArea = function() {
                    var d = this;
                    clearTimeout(this.resizeThrottle), this.resizeThrottle = setTimeout(function() {
                        var e = d.chatTextarea.elementReferrer.value,
                            t = d.container.documentRef.getElementById("textareaContainer"),
                            i = d.container.documentRef.getElementById("actionsContainer"),
                            n = d.container.documentRef.getElementById("emoji-selection-container"),
                            a = y.viewHandler.ifScrollbarDown(),
                            o = k.mobileBrowserName ? 18 : 20,
                            r = d.container.documentRef.getElementById(y.viewHandler.bottomContainerName),
                            s = e.split(/\r\n|\r|\n/).length || 1,
                            l = s * o;
                        1 === s && d.chatTextarea.elementReferrer.scrollHeight > d.chatTextarea.elementReferrer.clientHeight && (l = d.chatTextarea.elementReferrer.scrollHeight), e && o <= l ? (l = 150 < l ? 150 : l, this.isActionsContainerNotifShown && (l += 42, t.style.paddingBottom = "42px"), i.style.height = l - o + 46 + "px", a && y.viewHandler.scrollToBottom()) : i.style.height = "46px", n && (n.style.bottom = i.clientHeight + 2 + "px"), r && (r.style.bottom = i.clientHeight + 2 + "px"), clearTimeout(d.resizeThrottle)
                    }, 100)
                }, Ce.prototype.clearTextareaResize = function() {
                    var e = this.container.documentRef.getElementById("actionsContainer"),
                        t = this.container.documentRef.getElementById("emoji-selection-container"),
                        i = this.container.documentRef.getElementById(y.viewHandler.bottomContainerName);
                    e && (e.style.height = "46px"), t && (t.style.bottom = "48px"), i && (i.style.bottom = "")
                }, Ce.prototype.toggleWebRTCActions = function() {
                    var e, t, i;
                    this.inDocument && (i = t = e = "none", E.webRTCSettings() && E.webRTCSettings().en && (e = E.webRTCSettings().v ? "inline-block" : "none", t = "inline-block", i = E.webRTCSettings().s ? "inline-block" : "none"), this.container.documentRef.getElementById("videoCall").style.display = e, this.container.documentRef.getElementById("voiceCall").style.display = t, this.container.documentRef.getElementById("screenShare").style.display = i)
                }, Ce.prototype.setChatGreetings = function(e) {
                    var t, i = this.container.getElementById("greetingsText"),
                        n = this.container.getElementById("greetingsContent");
                    (t = B.pageStatus()) && n && i && (t = r.getLongMessage(t), e && !t ? (n.className += " no-content", n.style.display = "none") : (i.innerHTML = t.replace(M.regLineBreaks, M.br), y.agents.agentsCount < 1 && (n.style.display = "block"), e || (n.className = n.className.replace(" minimize", ""))))
                }, Ce.prototype.toggleMobileSubmitButton = function(e) {
                    var t = this.container.getElementById("actionsContainer");
                    e && "mobile-typing" !== t.className ? t.className = "mobile-typing" : e || "mobile-typing" !== t.className || (t.className = "")
                };
                var ke = Ce.extend({
                    init: function() {
                        var i = this;
                        this._super.apply(this, arguments), y.eventEmitter.on("formClosed", function() {
                            var e = i.container.getElementById("chatPanel");
                            if (e)
                                if (E.showPreChatForm && !B.prechatFormSubmitted()) y.formHandler.openForm("preChatForm");
                                else if (i.setChatGreetings(!0), e.style.display = "block", i.wrapper.removeClass("noMenu"), y.viewHandler.checkSeenMessageViewport(), !k.mobileBrowserName && i.container.getElementById("chatTextarea") && "max" === B.chatWindowState() && y.viewHandler.userAction) {
                                var t = M.getDocument(M.getDocument(h).getElementById(i.container.elementId));
                                if (t && t.getElementById("chatTextarea")) try {
                                    setTimeout(function() {
                                        t.getElementById("chatTextarea").focus()
                                    }, 0)
                                } catch (e) {}
                            }
                        }), y.eventEmitter.on("formOpened", function() {
                            i.container && i.container.getElementById("chatPanel") && ("preChatForm" !== y.formHandler.currentForm && "offlineForm" !== y.formHandler.currentForm && "consentForm" !== y.formHandler.currentForm || i.wrapper.addClass("noMenu"), i.container.getElementById("chatPanel").style.display = "none")
                        }), y.eventEmitter.on("localeChanged", function() {
                            i.insertText(), i.setLinkTitle(), i.toggleSound()
                        })
                    },
                    buildView: function() {
                        this._super(this), this.setLinkTitle(), this.insertText(), this.wrapper && this.wrapper.addClass(M.getContrast(E.headerTxtColor)), this.attachEvents()
                    },
                    insertText: function() {
                        var e;
                        if (this.container) {
                            this.container.getElementById("tawkContent").innerHTML = y.languageParser.translate("overlay", "tawkContent"), this.container.getElementById("cancelTawkRedirect").innerHTML = y.languageParser.translate("form", "CancelButton"), this.container.getElementById("tawkRedirect").innerHTML = y.languageParser.translate("form", "visitButton"), this.container.getElementById("maxFileNotificationMessage").innerHTML = y.languageParser.translate("notifications", "maximum_file_upload_warning", {
                                strongStart: "<strong>",
                                strongEnd: "</strong>",
                                limitFileNumber: "5"
                            }), this.container.getElementById("maxSizeNotificationMessage").innerHTML = y.languageParser.translate("notifications", "maximum_size_upload_warning", {
                                strongStart: "<strong>",
                                strongEnd: "</strong>",
                                limitFileSize: "50mb"
                            }), this.container.getElementById("emailTranscriptOption").innerHTML = y.languageParser.translate("menu", "email_transcript"), this.container.getElementById("changeName").innerHTML = y.languageParser.translate("menu", "change_name"), this.container.getElementById("soundOn").innerHTML = y.languageParser.translate("menu", "sound_on"), this.container.getElementById("soundOff").innerHTML = y.languageParser.translate("menu", "sound_off"), this.container.getElementById("maxSizeNotifLabel").innerHTML = y.languageParser.translate("chat", "Warning"), this.container.getElementById("maxFileNotifLabel").innerHTML = y.languageParser.translate("chat", "Warning"), this.container.getElementById("endChat").innerHTML = y.languageParser.translate("menu", "end_chat_session"), e = M.getElementsByClassName(this.container.getElementById("chatContainer"), "closeNotification");
                            for (var t = 0; t < e.length; t++) e[t].innerHTML = y.languageParser.translate("form", "CloseButton");
                            (e = this.container.getElementById("uploadFileOption")) && (M.isFileInputSupported ? e.setAttribute("title", y.languageParser.translate("rollover", "uploadFile")) : e.parentNode.removeChild(e))
                        }
                    },
                    attachEvents: function() {
                        var t = this,
                            i = t.container.getElementById("tawkToContent");
                        this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            i.style.display = "none"
                        }, "cancelTawkRedirect", "cancelTawkRedirectclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            i.style.display = "none", h.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + I.pageId)
                        }, "tawkRedirect", "tawkRedirectClicn"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            y.formHandler.openForm("emailTranscriptForm"), y.eventHandler.cancelEvent(e)
                        }, "emailTranscriptOption", "emailclick"), this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                            "preChatForm" !== y.formHandler.currentForm && "offlineForm" !== y.formHandler.currentForm && "consentForm" !== y.formHandler.currentForm && y.chatHandler.isVisitorEngaged() ? (y.formHandler.openForm("endChatForm"), y.eventHandler.cancelEvent(e)) : (y.eventHandler.cancelEvent(e), y.sessionHandler.notifyWindowState("min")), t.closeMenu()
                        }, "endChat", "endChatclick"), this._super(this)
                    }
                });
                ke.prototype.closeMenu = function() {
                    this.chatMenuOpen && (this.chatMenuOpen = !1, this.container.getElementById("chatMenuControls").style.display = "none", this.container.getElementById("chatMenu").className = "")
                }, ke.prototype.setLinkTitle = function() {
                    this.container && (this.container.getElementById("ratePositive").setAttribute("title", y.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title", y.languageParser.translate("rollover", "negativeRating")), this.container.getElementById("screenShare").setAttribute("title", y.languageParser.translate("rollover", "screenShare")), this.container.getElementById("voiceCall").setAttribute("title", y.languageParser.translate("rollover", "voiceCall")), this.container.getElementById("videoCall").setAttribute("title", y.languageParser.translate("rollover", "videoCall")), this.container.getElementById("chatMenu").setAttribute("title", y.languageParser.translate("rollover", "chatMenu")), this.container.getElementById("viewEmoji").setAttribute("title", y.languageParser.translate("chat", "insert_emoji")), E.isEmbedded || this.container.getElementById("minimizeChat").setAttribute("title", y.languageParser.translate("form", "CloseButton")))
                }, ke.prototype.chatEnded = function() {
                    y.formHandler.openForm("restartChatForm")
                }, ke.prototype.chatStarted = function() {
                    var e = this.container.getElementById("chatEnded"),
                        t = this.container.getElementById("chatContainerWrapper"),
                        i = this.container.getElementById("agentList"),
                        n = this.container.getElementById("options");
                    e && e.parentNode.removeChild(e), i && (i.innerHTML = ""), t && (t.className = t.className.replace("chat-ended", "")), n && (n.style.display = "block")
                };
                var Ee = ye.extend({
                    init: function() {
                        var e, t, i = this;
                        this._super(this), this.startY = this.startX = 0, this.iframeXOffsetPosition = E.widgetOffsetX, this.iframeYOffsetPosition = E.widgetOffsetY, this.isMaximized = this.isWidgetAnimating = this.userAction = this.isWidgetPositionsUpdated = !1, this.overlayElement = new me(null, M.getGenericStyle({
                            left: "0px",
                            top: "0px",
                            zindex: "1000001",
                            cursor: "move",
                            width: "100%",
                            height: "100%",
                            display: "none",
                            float: "left"
                        })), this.iframeContainerName = M.getRandomName(), this.iframeContainer = new me(this.iframeContainerName), this.resizeFromLeft = new me(M.getRandomName(), M.getGenericStyle({
                            height: "100%",
                            left: "0px",
                            top: "0px",
                            zindex: "999998",
                            cursor: "w-resize",
                            width: "6px"
                        })), this.resizeFromRight = new me(M.getRandomName(), M.getGenericStyle({
                            height: "100%",
                            width: "6px",
                            right: "0px",
                            top: "0px",
                            zindex: "999998",
                            cursor: "e-resize"
                        })), this.resizeFromTop = new me(M.getRandomName(), M.getGenericStyle({
                            height: "6px",
                            width: "100%",
                            right: "0px",
                            top: "0px",
                            zindex: "999998",
                            cursor: "n-resize"
                        })), this.resizeFromBottom = new me(M.getRandomName(), M.getGenericStyle({
                            height: "6px",
                            width: "100%",
                            right: "0px",
                            bottom: "0px",
                            zindex: "999998",
                            cursor: "s-resize"
                        })), this.resizeTopLeft = new me(M.getRandomName(), M.getGenericStyle({
                            height: "12px",
                            width: "12px",
                            left: "0px",
                            top: "0px",
                            zindex: "999998",
                            cursor: "nw-resize"
                        })), this.resizeTopRight = new me(M.getRandomName(), M.getGenericStyle({
                            height: "12px",
                            width: "12px",
                            right: "0px",
                            top: "0px",
                            zindex: "999998",
                            cursor: "ne-resize"
                        })), this.resizeBottomLeft = new me(M.getRandomName(), M.getGenericStyle({
                            height: "12px",
                            width: "12px",
                            bottom: "0px",
                            left: "0px",
                            zindex: "999998",
                            cursor: "sw-resize"
                        })), this.resizeBottomRight = new me(M.getRandomName(), M.getGenericStyle({
                            height: "12px",
                            width: "12px",
                            bottom: "0px",
                            right: "0px",
                            zindex: "999999",
                            cursor: "se-resize"
                        })), m = new ke(this.tawktoLinkName, this.bottomContainerName), this.iframeContainer.addChildViews([m.container]), E.isPopup || E.isEmbedded || (e = [(o = new xe).container, o.chatIndicator, o.bubbleContainer, this.overlayElement], E.isDesktopRectangle() ? t = [this.resizeFromLeft, this.resizeFromRight, this.resizeFromTop, this.resizeFromBottom, this.resizeTopLeft, this.resizeTopRight, this.resizeBottomLeft, this.resizeBottomRight] : (t = [], E.isRightPositioned() ? t.push(this.resizeFromLeft) : t.push(this.resizeFromRight), E.isCenterPositioned() ? (t = t.concat([this.resizeFromBottom, this.resizeFromTop]), t = E.isRightPositioned() ? t.concat([this.resizeTopLeft, this.resizeBottomLeft]) : t.concat([this.resizeTopRight, this.resizeBottomRight])) : E.isTopPositioned() ? (t.push(this.resizeFromBottom), E.isRightPositioned() ? t.push(this.resizeBottomLeft) : t.push(this.resizeBottomRight)) : (t.push(this.resizeFromTop), E.isRightPositioned() ? t.push(this.resizeTopLeft) : t.push(this.resizeTopRight))), this.iframeContainer.addChildViews(e.concat(t))), this.indicator = new ve(o ? o.chatIndicator : null), this.chatContainer = m.container, this.iframeContainer.buildView(), this.insertFrameStyle(), B.pageStatus.subscribe(function(e) {
                            i.updateViewByStatus(e)
                        }), S.rating.subscribe(function(e) {
                            i.changeRating(e)
                        }), E.isPopup || E.isEmbedded || B.chatWindowState.subscribe(function(e) {
                            "max" === e ? i.maximizeWidget() : i.minimizeWidget()
                        }), E.minStyle.subscribe(function() {
                            o && o.container.elementReferrer && (o.container.insertCssFile(E.minStyle(), !0), o.container.documentRef.getElementById("tawkchat-minified-wrapper").className = M.getContrast(E.headerTxtColor))
                        }), E.maxStyle.subscribe(function() {
                            m && m.container.elementReferrer && (m.container.insertCssFile(E.maxStyle(), !0), m.wrapper.removeClass("black"), m.wrapper.removeClass("white"), m.wrapper.addClass(M.getContrast(E.headerTxtColor)))
                        }), E.minimizedDimensions.subscribe(function() {
                            var e = i.calculateWidgetPosition();
                            i.iframeContainer.restyle("top", e.top), i.iframeContainer.restyle("bottom", e.bottom), i.iframeContainer.restyle("right", e.right), i.iframeContainer.restyle("left", e.left)
                        }), this.initialDocumentClick = y.eventHandler.listen(document, "click", function() {
                            y.audioPlayer.initAudioPlayer(), y.eventHandler.removeEventHandler(document, "click", i.initialDocumentClick)
                        }, "documentinitialclick")
                    },
                    insertFrameStyle: function() {
                        var e, t, i = "",
                            n = this.calculateWidgetPosition();
                        n = M.getGenericStyle({
                            display: "none",
                            bottom: n.bottom,
                            top: n.top,
                            right: n.right,
                            left: n.left,
                            minwidth: "0",
                            minheight: "0",
                            zindex: k.isIE && k.version < 9 ? "none" : "2000000000",
                            position: "fixed"
                        }), t = E.isTopPositioned() ? (e = "transform:translate(0, -30px);", "transform:translate(0, 0px);") : E.isCenterPositioned() ? (e = E.isRightPositioned() ? "transform:translate(30px,0);" : "transform:translate(-30px,0);", "transform:translate(0px,0);") : (e = "transform:translate(0, 30px);", "transform:translate(0, 0px);"), i = i + "@keyframes tawkMaxOpen" + (e = "{0%{opacity:0;" + e + ";}to{opacity:1;" + t + "}}") + "@-moz-keyframes tawkMaxOpen" + e, i += "@-webkit-keyframes tawkMaxOpen" + e, i += "#" + this.iframeContainerName + "{" + n + "}", i += "#" + m.container.elementId + ".open{animation : tawkMaxOpen .25s ease!important;}", this.iframeContainer.insertCssFile(i, !0)
                    },
                    show: function() {
                        m.hide(), E.isEmbedded || E.isPopup ? (this.iframeContainer.restyle("position", "static"), this.iframeContainer.restyle("right", ""), this.iframeContainer.restyle("left", ""), this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%"), m.show()) : (this.isWidgetPositionsUpdated = !0, this.indicator.initIndicator(), y.main.maximize ? this.maximizeWidget() : this.minimizeWidget()), this.updateViewByStatus(B.pageStatus()), this._super()
                    }
                });
                Ee.prototype.calculateWidgetPosition = function() {
                    var e, t = Math.max((document.documentElement.clientHeight, (h.innerHeight || 0) / 2)) - E.maximizedDimensions().height / 2,
                        i = {},
                        n = E.isDesktopRectangle() ? (e = 0, E.widgetOffsetX) : (n = 10, e = E.minimizedDimensions().height + E.widgetOffsetX + 10, E.isCenterPositioned() ? E.minimizedDimensions().width + E.widgetOffsetX + n : n);
                    return E.isTopPositioned() ? (i.bottom = "auto", i.top = e + "px") : (E.isCenterPositioned() ? i.bottom = E.isDesktopRectangle() ? "0px" : t + "px" : i.bottom = e + "px", i.top = "auto"), E.isRightPositioned() ? (i.right = n + "px", i.left = "auto") : (i.right = "auto", i.left = n + "px"), i
                }, Ee.prototype.maximizeWidget = function() {
                    var e = null,
                        t = null;
                    if (o && (e = o.container.getElementById("minimizeChatMinifiedBtn"), t = o.container.getElementById("maximizeChat")), this.messagePreview && this.messagePreview.hide(), "max" !== E.onClickAction) return this.popoutWidget();
                    if (E.hideWidgetOnOffline && "offline" === B.pageStatus() && y.formHandler.openForm(E.showConsentForm ? "consentForm" : "offlineForm"), (E.hideWidgetOnLoad || E.hideWidgetOnOffline) && this.showWidget(), m.show(), o && o.container && (E.isDesktopRectangle() ? o.hide() : (o.shown || o.show(), e && t && (M.removeClass(t, "appear"), M.addClass(t, "hide"), M.removeClass(e, "hide"), M.addClass(e, "appear")), o.hideBubble(), M.addClass(o.container.getElementById("tawkchat-minified-box"), "open"))), this.isMaximized = !0, d.triggerApiHandlers("onChatMaximized"), y.viewHandler.scrollToFirstUnseen(), !k.mobileBrowserName && this.chatContainer.getElementById("chatTextarea") && "max" === B.chatWindowState() && !y.formHandler.currentForm && y.viewHandler.userAction) {
                        var i = M.getDocument(M.getDocument(h).getElementById(m.container.elementId));
                        if (i && i.getElementById("chatTextarea")) try {
                            setTimeout(function() {
                                i.getElementById("chatTextarea").focus(), y.viewHandler.userAction = !1
                            }, 0)
                        } catch (e) {}
                    }
                    m.container.addClass("open")
                }, Ee.prototype.minimizeWidget = function() {
                    var e, t = null,
                        i = null;
                    if (!E.isPopup && !E.isEmbedded) {
                        if (m.hide(), this.isMaximized = !1, E.hideWidgetOnLoad) return this.hideWidget();
                        o && (t = o.container.getElementById("minimizeChatMinifiedBtn"), i = o.container.getElementById("maximizeChat"), e = o.container.getElementById("tawkchat-minified-box")), t && i && (M.removeClass(i, "hide"), M.addClass(i, "appear"), M.removeClass(t, "appear"), M.addClass(t, "hide"), M.removeClass(e, "open")), o.show(), d.triggerApiHandlers("onChatMinimized"), this.indicator.initIndicator()
                    }
                }, Ee.prototype.toggleWidget = function() {
                    var e = B.chatWindowState();
                    B.chatWindowState("min" === e ? "max" : "min")
                }, Ee.prototype.removeBubble = function() {
                    try {
                        y.eventEmitter.emit("notifyBubbleClosed")
                    } catch (e) {
                        g.handleError("Unable to emit notifyBubbleClosed", e.fileName, e.lineNumber, e.stack)
                    }
                }, Ee.prototype.insertPopupStyle = function() {
                    var e = document.getElementsByTagName("head")[0],
                        t = document.createDocumentFragment(),
                        i = M.createElement(document, "style", {
                            type: "text/css"
                        }),
                        n = document.createTextNode(y.ResetStyle + "" + y.MaximizedStyle + E.maxStyle());
                    i.styleSheet ? i.styleSheet.cssText = n.nodeValue : i.appendChild(n), t.appendChild(i), e.appendChild(t), document.body.className = "popup"
                }, Ee.prototype.begin = function() {
                    var e, t = this,
                        i = document.getElementById(d.embedded);
                    y.main.started || (this.iframeContainer && (e = document.getElementById(this.iframeContainer.elementId)), e && e.parentNode.removeChild(e), E.isEmbedded && i ? (i.appendChild(this.iframeContainer.elementReferrer), y.eventHandler.listen(h, "resize", function() {
                        t.onEmbeddedWindowResize()
                    }, "windowresize")) : (document.body.appendChild(this.iframeContainer.elementReferrer), E.isPopup ? this.insertPopupStyle() : (o.buildView(), this.resizeFromLeft.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, "left")
                    }, null, "resizeLeftfocus"), this.resizeFromRight.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, "right")
                    }, null, "resizeRightfocus"), this.resizeFromTop.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, null, "top")
                    }, null, "resizeTopfocus"), this.resizeFromBottom.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, null, "bottom")
                    }, null, "resizeBottomfocus"), this.resizeTopLeft.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, "left", "top")
                    }, null, "resizeTopLeftfocus"), this.resizeTopRight.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, "right", "top")
                    }, null, "resizeTopRightfocus"), this.resizeBottomLeft.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, "left", "bottom")
                    }, null, "resizeBottomLeftfocus"), this.resizeBottomRight.attachUserEventListener("mousedown", function(e) {
                        t.onHeaderMouseDown(e, "right", "bottom")
                    }, null, "resizeBottomRightfocus"), y.eventHandler.listen(h, "resize", function() {
                        t.onWindowResize()
                    }, "windowresize"))), m.buildView())
                }, Ee.prototype.hideWidget = function() {
                    this.iframeContainer.hide(), d.triggerApiHandlers("onChatHidden")
                }, Ee.prototype.adjustEmojiContainerHeight = function() {
                    var e = this.chatContainer.documentRef.getElementById("emoji-selection-container"),
                        t = this.chatContainer.documentRef.getElementById("innerWrapper"),
                        i = this.chatContainer.documentRef.getElementById("textareaWrapper"),
                        n = this.chatContainer.documentRef.getElementById("headerBoxWrapper");
                    (t = t.clientHeight - i.clientHeight - n.clientHeight) < 185 && (e.style.height = t + "px")
                }, Ee.prototype.showWidget = function() {
                    this.iframeContainer.isVisible || this.iframeContainer.show()
                }, Ee.prototype.toggleVisibility = function() {
                    this.iframeContainer.toggle()
                }, Ee.prototype.isWidgetHidden = function() {
                    return !this.iframeContainer.isVisible
                }, Ee.prototype.onHeaderMouseUp = function() {
                    this.overlayElement.restyle("display", "none !important"), this.resetFrameDimensions(), this.isResized && (this.isResized = !1, y.socketManager.sendToConnector("notifyWidgetResized")), y.eventHandler.removeEventHandler(document, "mousemove", this.mouseMovehandler), y.eventHandler.removeEventHandler(document, "mouseup", this.mouseUpHandler)
                }, Ee.prototype.onHeaderMouseDown = function(e, t, i) {
                    var n = this,
                        a = y.eventHandler.getTargetElement(e);
                    a.id !== this.resizeFromLeft.elementId && a.id !== this.resizeFromRight.elementId && a.id !== this.resizeFromTop.elementId && a.id !== this.resizeFromBottom.elementId && a.id !== this.resizeTopLeft.elementId && a.id !== this.resizeBottomLeft.elementId && a.id !== this.resizeTopRight.elementId && a.id !== this.resizeBottomRight.elementId || 1 === e.button && !h.event && !m.documentRef.event || 1 < e.button || (y.eventHandler.cancelEvent(e), this.overlayElement.restyle("display", "block !important"), e = this.getActualViewportDimensions(), this.actualViewPortWidth = e.width, this.actualViewPortHeight = e.height, this.startOffsetY = this.startOffsetX = 0, this.mouseMovehandler = y.eventHandler.listen(document, "mousemove", function(e) {
                        n.setResizedDimensions(e, t, i), n.isResized = !0, n.redrawIE()
                    }, "dragmove"), this.mouseUpHandler = y.eventHandler.listen(document, "mouseup", function(e) {
                        n.onHeaderMouseUp(e)
                    }, "dragleave"))
                }, Ee.prototype.redrawIE = function() {
                    "explorer" === k.vendor && (this.iframeContainer.restyle("visibility", "hidden !important"), this.iframeContainer.restyle("visibility", "visible !important"))
                }, Ee.prototype.setResizedDimensions = function(e, t, i) {
                    var n, a, o, r, s = this.iframeContainer.elementReferrer,
                        l = this.ifScrollbarDown();
                    this.isRight && void 0 !== this.isRight || (this.isRight = E.isRightPositioned()), this.startX = e.clientX, this.startY = e.clientY, t && (n = this.isRight ? "right" : "left", a = parseInt(M.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10), o = parseInt(M.computedStyle(s, n).replace("px", ""), 10), r = (r = this.isRight ? this.actualViewPortWidth - e.clientX : e.clientX) < 0 ? 0 : r, this.isRight && "right" === t || !this.isRight && "left" === t ? (t = a - (r - o)) < 280 ? t = 280 : (r > this.actualViewPortWidth - t - 1 && (r = this.actualViewPortWidth - t - 1), s.style.cssText += ";" + n + ":" + r + "px !important", this.startOffsetX = t) : this.startOffsetX = t = this.isRight ? this.actualViewPortWidth - e.clientX - o : e.clientX - o, 280 <= t && 0 < this.actualViewPortWidth - (t + parseInt(M.computedStyle(s, n).replace("px", ""), 10)) && this.setWidth(t)), i && ("bottom" === i ? (i = parseInt(s.style.bottom.replace("px", "")), (e = this.actualViewPortHeight - e.clientY) < 0 && (e = 0), (i = parseInt(M.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10) - (e - i)) < 330 ? i = 330 : (e > this.actualViewPortHeight - i - 1 && (e = this.actualViewPortHeight - i - 1), s.style.cssText += ";bottom:" + e + "px !important", this.startOffsetY = i)) : (startOffsetY = parseInt(M.computedStyle(s, "bottom").replace("px", ""), 10), i = this.actualViewPortHeight - e.clientY - startOffsetY, this.startOffsetY = this.startY - startOffsetY), 330 <= i && 0 < this.actualViewPortHeight - (i + parseInt(M.computedStyle(s, "bottom").replace("px", ""), 10)) && this.setHeight(i), y.viewHandler.adjustEmojiContainerHeight()), l && this.scrollToBottom(), y && y.formHandler && y.formHandler.resize()
                }, Ee.prototype.setChatWindowXPosition = function(e) {
                    var t, i, n = parseInt(m.frameWidth.replace("px", ""), 10);
                    void 0 === this.isRight && (this.isRight = E.isRightPositioned()), i = this.isRight ? (t = "right", parseInt(this.iframeContainer.elementReferrer.style.right, 10)) : (t = "left", -parseInt(this.iframeContainer.elementReferrer.style.left, 10)), this.startOffsetX || (this.startOffsetX = e + i), (e = this.isRight ? this.startOffsetX - e : e - this.startOffsetX) < 20 ? e = 0 : this.actualViewPortWidth - (e + n) < 20 && (e = this.actualViewPortWidth - n), this.iframeContainer.restyle(t, e + "px !important")
                }, Ee.prototype.setChatWindowYPosition = function(e) {
                    var t, i = parseInt(m.frameHeight.replace("px", ""), 10),
                        n = "auto" === this.iframeContainer.elementReferrer.style.bottom ? (styleKey = "top", t = -parseInt(this.iframeContainer.elementReferrer.style.top, 10), !1) : (styleKey = "bottom", t = parseInt(this.iframeContainer.elementReferrer.style.bottom, 10), !0);
                    this.startOffsetY || (this.startOffsetY = e + t), (e = n ? this.startOffsetY - e : e - this.startOffsetY) < 20 ? e = 0 : this.actualViewPortHeight - (e + i) < 20 && (e = this.actualViewPortHeight - i), this.iframeContainer.restyle(styleKey, e + "px !important")
                }, Ee.prototype.onWindowResize = function() {
                    var e = this;
                    clearTimeout(this.resizeTimeout), this.wasScrollbarDown = this.ifScrollbarDown(), this.resizeTimeout = setTimeout(function() {
                        e.onWindowResizeTimeout()
                    }, 100)
                }, Ee.prototype.onWindowResizeTimeout = function() {
                    var e = (t = this.getActualViewportDimensions()).width,
                        t = t.height,
                        i = this.iframeContainer.elementReferrer,
                        n = this.isBottom ? parseInt(i.style.bottom.replace("px", ""), 10) : parseInt(i.style.top.replace("px", ""), 10),
                        a = this.isRight ? parseInt(i.style.right.replace("px", ""), 10) : parseInt(i.style.left.replace("px", ""), 10),
                        o = parseInt(m.frameWidth.replace("px", ""), 10),
                        r = parseInt(m.frameHeight.replace("px", ""), 10);
                    e < o + a && ((a = e - o) < 0 && (o += a, a = 0, this.setWidth(o)), this.isRight ? i.style.right = a + "px" : i.style.left = a + "px"), t < r + n && ((n = t - r) < 0 && (r += n, n = 0, this.setHeight(r)), this.isBottom ? i.style.bottom = n + "px" : i.style.top = n + "px"), this.wasScrollbarDown && this.scrollToBottom(), this.resetFrameDimensions()
                }, Ee.prototype.setWidth = function(e) {
                    (!e || e < 300) && (e = 300), this.chatContainer.restyle("width", e + "px !important")
                }, Ee.prototype.setHeight = function(e) {
                    (!e || e < 350) && (e = 350), this.chatContainer.restyle("height", e + "px !important")
                }, Ee.prototype.onEmbeddedWindowResize = function() {
                    null === this.isWidgetElementDimensionsNull && this.setWidgetElementDimensions(), this.isWidgetElementDimensionsNull ? (this.setWidth(E.maximizedDimensions().width), this.setHeight(E.maximizedDimensions().height)) : (this.chatContainer.restyle("width", "100%"), this.chatContainer.restyle("height", "100%"))
                }, Ee.prototype.setWidgetElementDimensions = function() {
                    var e = document.getElementById(d.embedded);
                    this.isWidgetElementDimensionsNull = e.clientWidth < 280 || e.clientHeight < 330
                }, Ee.prototype.resetFrameDimensions = function() {
                    var e = parseInt(M.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
                        t = parseInt(M.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10);
                    m.frameWidth = e + "px", m.frameHeight = t + "px"
                }, Ee.prototype.isWidgetElementDimensionsNull = null, Ee.prototype.styleAgentBar = function() {
                    var e, t = this.chatContainer;
                    if (t) {
                        e = t.getElementById("agentWrapper");
                        try {
                            0 < y.agents.agentsCount ? (t.getElementById("headerAccountStateContainer").style.display = "none", e.style.display = "block") : (t.getElementById("headerAccountStateContainer").style.display = "block", e.style.display = "none")
                        } catch (e) {
                            g.handleError("headerAccountStateContainer is null", e.fileName, e.lineNumber, e.stack)
                        }
                    }
                }, Ee.prototype.expandAgentList = function(e) {
                    var t, i;
                    (i = this.chatContainer) && (t = i.getElementById("agentBar"), i = i.getElementById("expandableLink"), 1 === e.button && !h.event || 1 < e.button || (-1 === t.className.indexOf("expanded") ? (t.className += " expanded", i.className = "expanded") : (t.className = t.className.replace("expanded", ""), i.className = ""), this.styleAgentBar()))
                }, Ee.prototype.resetView = function() {
                    var e, t, i, n, a;
                    (n = this.chatContainer) && (e = n.getElementById("chatWrapper"), i = n.getElementById("agentList"), a = n.getElementById("agentBar"), n = n.getElementById("expandableLink"), e && (t = e.lastChild, e.innerHTML = "", e.appendChild(t)), i && (i.innerHTML = ""), a && (e = a.parentNode.childNodes[0], a.className = "", e && -1 !== e.className.indexOf("agentWrapper") && e.parentNode.removeChild(e)), n && (n.style.visibility = "hidden", n.className = ""), this.show())
                }, Ee.prototype.handleIndicatorToggle = function() {
                    o && o.container && o.chatIndicator && (o.chatIndicator.getElementById("tawkchat-chat-indicator").style.visibility = "visible")
                };

                function Te() {
                    var t = this,
                        e = {
                            width: t.minifiedBoxWidth + "px",
                            height: t.minifiedBoxHeight + "px",
                            minwidth: t.minifiedBoxWidth + "px",
                            minheight: t.minifiedBoxHeight + "px",
                            maxwidth: t.minifiedBoxWidth + "px",
                            maxheight: t.minifiedBoxHeight + "px",
                            zindex: "1000000",
                            display: "none"
                        };
                    this.setDimensions(), this.clickToPopout = this.setPopoutHref = this.isMoving = !1, this.offsetY = E.widgetOffsetY, this.clickEvent = "touchend", E.isCenterPositioned() && "rectangle" === E.mobileWidget() && (E.isRightPositioned() ? (e.transform = "rotate(-90deg)", e.right = "0px") : (e.left = "0px", e.transform = "rotate(90deg)")), this.container = new ge(M.getRandomName(), M.getGenericStyle(e), O, "iframe"), B.pageStatus.subscribe(function(e) {
                        t.updateStatus(e)
                    }), E.chatPosition.subscribe(function() {
                        t.updateWidgetPosition()
                    }), E.mobMinStyle.subscribe(function() {
                        t.container && t.container.elementReferrer && t.container.insertCssFile(E.mobMinStyle(), !0)
                    }), E.showMessagePreview.subscribe(function() {
                        E.showMessagePreview() ? t.initMessagePreviewContainer() : t.destroyMessagePreviewContainer()
                    }), y.eventEmitter.on("localeChanged", function() {
                        t.updateStatus()
                    })
                }
                var Ie = Ee.extend({
                    init: function() {
                        this._super(this)
                    },
                    changeDragElementSize: function(e) {
                        this.dragElement.restyle(E.isRTL() ? "right" : "left", e + "px !important")
                    },
                    handleEndChat: function() {
                        o && o.container && o.chatEnded(), y.viewHandler.clearAgentHeader(), E.isEmbedded || (E.isPopup ? (y.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function() {
                            1 < h.history.length ? h.history.back() : h.close()
                        }, 200)) : (y.sessionHandler.notifyWindowState("min"), m.chatEnded()))
                    },
                    handleRestartChat: function() {
                        y.formHandler.closeForm(), m.chatStarted()
                    }
                });
                Te.prototype.setDimensions = function() {
                    "rectangle" === E.mobileWidget() ? (this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68) : this.minifiedBoxHeight = this.minifiedBoxWidth = 60
                }, Te.prototype.buildView = function() {
                    this.container.buildIframe(y.MinifiedMobileStyle + E.mobMinStyle()), y.MinifiedMobileStyle = y.MinifiedMobileStyle.replace(/#tawktoLink/g, "#" + y.viewHandler.tawktoLinkName), y.MinifiedMobileStyle = y.MinifiedMobileStyle.replace(/#bottomContainer/g, "#" + y.viewHandler.bottomContainerName), E.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer(), E.isRTL() && (this.container.getElementById("tawkchat-minified-box").className += " rtl-direction "), this.updateStatus(), this.attachEvents(), this.updateWidgetPosition()
                }, Te.prototype.updateStatus = function(e) {
                    var t;
                    if (e = e || B.pageStatus(), this.container && e) {
                        (t = this.container.getElementById("tawkchat-status-icon")) && (t.className = e), (t = this.container.getElementById("tawk-minified-mobile-text")) && (t.innerHTML = "online" === e || "away" === e ? y.languageParser.translate("chat", "chat_text") : y.languageParser.translate("form", "message"));
                        try {
                            y.eventEmitter.emit("resizeIframeHeight")
                        } catch (e) {
                            g.handleError("Unable to emit resizeIframeHeight", e.fileName, e.lineNumber, e.stack)
                        }
                    }
                }, Te.prototype.attachEvents = function() {
                    var t = this;
                    this.container.attachUserEventListener(y.viewHandler.clickEvent, function(e) {
                        y.eventHandler.cancelEvent(e), t.isMoving || (y.sessionHandler.notifyWindowState("max"), y.viewHandler.checkSeenMessageViewport()), t.isMoving = !1
                    }, "tawkchat-minified-box", "mobpclick"), this.container.attachUserEventListener("touchmove", function() {
                        t.isMoving = !0
                    }, "tawkchat-minified-box", "mobpmove")
                }, Te.prototype.show = function() {
                    this.container.restyle("display", "block")
                }, Te.prototype.updateWidgetPosition = function() {
                    var e = "";
                    this.container && this.container.elementReferrer && (e = E.isCenterPositioned() ? e + " center " : E.isTopPositioned() ? e + " top " : e + " bottom ", e = E.isRightPositioned() ? e + " right " : e + " left ", e += " " + E.mobileWidget() + " ", this.container.documentRef.body.className = e)
                }, Te.prototype.initMessagePreviewContainer = function() {
                    var e, t = y.viewHandler.iframeContainer;
                    this.messagePreview = new ge(M.getRandomName(), M.getGenericStyle({
                        zindex: "999999",
                        width: "100%",
                        height: "0px",
                        minwidth: "auto",
                        maxwidth: "378px",
                        minheight: "auto",
                        left: "auto",
                        right: "auto",
                        position: "fixed",
                        display: "none",
                        top: "auto",
                        bottom: "auto"
                    }), O, "iframe"), y.viewHandler.messagePreview = new be(this.messagePreview), this.messagePreview.elementReferrer || t.elementReferrer.appendChild(this.messagePreview.buildView(t.documentRef)), this.messagePreview.buildIframe(y.MinifiedStyle + E.minStyle()), t = M.getElementsByTagName(this.messagePreview.documentRef, "body")[0], e = (e = (e = w["tawkchat-message-preview"]).replace(/__TAWK_TO_LINK__/gm, y.viewHandler.tawktoLinkName)).replace(/__BOTTOM_CONTAINER__/gm, y.viewHandler.bottomContainerName), t.innerHTML = e
                }, Te.prototype.destroyMessagePreviewContainer = function() {
                    this.messagePreview && this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode && this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef), this.messagePreview = null, y.viewHandler.messagePreview = null
                };

                function Se(e) {
                    var t = this;
                    arguments.length && (this.browser = e, this.metaContent = this.getMetaContent(), this.landscape = !1, this.zoom = 1, this.resizeTimeout = this.hasKeyboard = this.minAndMaxScalesAreEqual = this.hasViewportHeightWidth = this.hasInitialScale = !1, this.removeAgentNotification = !0, this.clickEvent = "touchend", this.hasChatStarted = this.isMaximized = this.isBottomWidget = !1, this.originalDocumentStyle = null, this.isTherePreChat = E.showPreChatForm, this.noZoomMetaTag = null, this.isIndicatorOn = !1, this.scrollTop = this.scrollLeft = 0, this.mainAgent = null, this.shapeChanged(), this.minifiedWidget = new Te, (m = new ke(this.tawktoLinkName, this.bottomContainerName)).wrapper.addClass("mobile"), this.iframeContainer = new me(M.getRandomName(), "border: 0 none !important; padding: 0 !important; margin: 0 !important; z-index: 999999999 !important; overflow : visible !important; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important; width : auto !important; height : auto !important;"), this.indicator = new ve(this.minifiedWidget.container), this.iframeContainer.addChildViews([this.minifiedWidget.container, m.container]), "#max-widget" === h.location.hash && (h.history ? h.history.replaceState({}, document.title, ".") : h.location.hash = ""), this.iframeContainer.buildView(), this.chatContainer = m.container, y.eventEmitter.on("resizeIframeHeight", function() {
                        t.resizeIframeHeight()
                    }), y.eventEmitter.on("visitorPopupFocus", function(e) {
                        t.isPopupFocused = e
                    }), y.eventHandler.listen(h, "popstate", function(e) {
                        !E.isPopup && t.isMaximized && "#max-widget" !== h.location.hash && B.chatWindowState("min")
                    }, "popstateFn"), B.chatWindowState.subscribe(function(e) {
                        E.isPopup || (t.hideWidget(), "max" === e ? (d.disableMobileBackHistory || h.location.hash && "#max-widget" !== h.location.hash || (h.history.pushState ? h.history.pushState(null, null, h.location.href + "#max-widget") : h.location.hash = "max-widget"), t.maximize()) : (d.disableMobileBackHistory || "#max-widget" === h.location.hash && h.history.back(), t.isMaximized = !1, t.show()))
                    }), B.pageStatus.subscribe(function(e) {
                        t.updateViewByStatus(e)
                    }), E.mobileWidget.subscribe(function() {
                        t.renderBottomWidget(), t.minifiedWidget.buildView()
                    }), E.chatPosition.subscribe(function() {
                        t.updateWidgetPosition()
                    }), S.rating.subscribe(function(e) {
                        t.changeRating(e)
                    }), E.maxStyle.subscribe(function() {
                        t.chatContainer && t.chatContainer.elementReferrer && t.chatContainer.insertCssFile(E.maxStyle(), !0)
                    }), E.mobileWidget.subscribe(function(e) {
                        t.shapeChanged(), t.minifiedWidget.container.massRestyle({
                            width: t.minifiedBoxWidth + "px !important",
                            height: t.minifiedBoxHeight + "px !important",
                            "min-width": t.minifiedBoxWidth + "px !important",
                            "min-height": t.minifiedBoxHeight + "px !important",
                            "max-width": t.minifiedBoxWidth + "px !important",
                            "max-height": t.minifiedBoxHeight + "px !important"
                        })
                    }), y.chatHandler.hasChatStarted.subscribe(function(e) {
                        m.toggleEndChatOption(e)
                    }))
                }((Se.prototype = new ye).constructor = Se).prototype.parent = ye.prototype, Se.prototype.begin = function() {
                    var e, t;
                    document.body.appendChild(this.iframeContainer.elementReferrer), "symbian" !== this.browser && "ie" !== this.browser && "opera" !== this.browser && "android2.3" !== this.browser || (this.clickEvent = "click"), this.minifiedWidget.buildView(), m.buildView(), this.chatContainer = m.container, this.noZoomMetaTag = document.createElement("meta"), this.noZoomMetaTag.name = "viewport", this.parent.begin.call(this), !M.isTouchDevice() || "android" !== k.mobileBrowserName && "android2" !== k.mobileBrowserName && "android2.3" !== k.mobileBrowserName || (e = this.chatContainer.getElementById("chatContainer"), t = this.chatContainer.getElementById("menuScrollable"), this.addOverflowScroll(e), this.addOverflowScroll(t), e.style.overflow = "hidden", t.style.overflow = "hidden"), y.audioPlayer.initAudioPlayer()
                }, Se.prototype.shapeChanged = function() {
                    (this.isMinifiedRound = "round" === E.mobileWidget()) ? this.minifiedBoxHeight = this.minifiedBoxWidth = this.defaultHeight = this.defaultWidth = 60: (this.defaultWidth = 110, this.defaultHeight = 68, this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68)
                }, Se.prototype.handleEndChat = function() {
                    m.chatEnded(), this.chatContainer.hide(), this.isMaximized = !1, this.iframeContainer.restyle("right", "0px"), this.show()
                }, Se.prototype.show = function() {
                    var e = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
                    this.isMaximized ? (this.iframeContainer.massRestyle({
                        left: "0px",
                        top: "0px",
                        right: "0px",
                        bottom: "0px"
                    }), this.isMobileOptimizedWebsite() || null === this.noZoomMetaTag || (this.metaContent || "" !== this.noZoomMetaTag.content ? this.metaContent && !this.hasNoScale && e && e.setAttribute("content", this.metaContent + ", user-scalable=no") : (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no", this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag))), this.isVisibilityToggled || (this.iframeContainer.show(), this.chatContainer.show()), this.minifiedWidget.container.hide(), "max" !== B.chatWindowState() && y.sessionHandler.notifyWindowState("max"), y.viewHandler.newMessageNotSeen && setTimeout(function() {
                        y.viewHandler.checkUnseenMessages()
                    }, 0)) : (this.isMobileOptimizedWebsite() ? (this.getZoom(), this.renderMinifiedBox()) : this.metaContent && !this.hasNoScale ? e && e.setAttribute("content", this.metaContent) : this.noZoomMetaTag.parentNode && (this.noZoomMetaTag.content = "", document.getElementsByTagName("head")[0].removeChild(this.noZoomMetaTag)), M.blurElements(m.container.documentRef.body.getElementsByTagName("input")), M.blurElements(m.container.documentRef.body.getElementsByTagName("textarea")), this.isVisibilityToggled || (this.minifiedWidget.container.show(), this.showWidget()), this.resetOriginalStyle(), this.indicator.initIndicator(), "min" !== B.chatWindowState() && y.sessionHandler.notifyWindowState("min"), this.resizeHandler(), d.triggerApiHandlers("onChatMinimized")), this.isVisibilityToggled || (this.updateViewByStatus(B.pageStatus()), this.parent.show.call(this))
                }, Se.prototype.hideWidget = function() {
                    this.isMaximized ? (this.isPopupFocused && y.socketManager.sendToConnector("popupOnFocus", !1), this.chatContainer.hide()) : (null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle), this.minifiedWidget.container.hide()), this.iframeContainer.hide(), d.triggerApiHandlers("onChatHidden")
                }, Se.prototype.showWidget = function() {
                    if (this.iframeContainer.show(), null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle, this.originalDocumentStyle = null, h.scrollTo(this.scrollLeft, this.scrollTop)), this.isMaximized) {
                        this.scrollLeft = void 0 !== h.pageXOffset ? h.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, this.scrollTop = void 0 !== h.pageYOffset ? h.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, this.scrollToBottom(), this.originalDocumentStyle = this.iframeContainer.documentRef.body.style.cssText;
                        for (var e = "height min-height max-height width min-width max-width".split(" "), t = 0; t < e.length; t++) this.iframeContainer.documentRef.body.style.setProperty(e[t], "100%", "important");
                        this.iframeContainer.documentRef.body.style.setProperty("overflow", "hidden", "important"), this.iframeContainer.documentRef.body.style.setProperty("position", "fixed", "important"), m.container.show()
                    } else {
                        if (E.hideWidgetOnLoad) return void this.hideWidget();
                        this.minifiedWidget.container.show(), this.resizeIframeHeight()
                    }
                    this.iframeContainer.show()
                }, Se.prototype.init = function() {
                    this.checkMetaContent(), this.addResizeEvents(), this.resizeHandler()
                }, Se.prototype.getZoom = function() {
                    this.zoom = screen.width / h.innerWidth
                }, Se.prototype.addResizeEvents = function(e) {
                    var t = this,
                        i = function(e) {
                            t.resizeHandler()
                        };
                    y.eventHandler.listen(h, "resize", i, "mobileresize"), y.eventHandler.listen(h, "scroll", i, "mobilescroll"), e && y.eventHandler.listen(h, "touchmove", i)
                }, Se.prototype.checkMetaContent = function() {
                    var e, t = {};
                    if (i = this.metaContent) {
                        for (var i, n = 0, a = (i = (i = i.replace(/ /g, "")).split(",")).length; n < a; n++) t[(e = i[n].split("="))[0]] = e[1];
                        this.hasInitialScale = "1.0" === t["initial-scale"], this.hasViewportHeightWidth = !(!t.width && !t.height), this.minAndMaxScalesAreEqual = t["minimum-scale"] && t["maximum-scale"] && t["minimum-scale"] === t["maximum-scale"], this.initialAndMaxScalesAreEqual = t["initial-scale"] && t["maximum-scale"] && t["initial-scale"] === t["maximum-scale"], this.hasNoScale = "no" === t["user-scalable"] || "0" === t["user-scalable"]
                    }
                }, Se.prototype.ifScrollbarDown = function() {
                    return this.isMaximized ? this.parent.ifScrollbarDown.call(this) : !!document && ((e = document.body) ? (t = document.documentElement.clientHeight + 10, i = e.scrollTop || document.documentElement.scrollTop, e.scrollHeight - (i + t) < 80) : void 0);
                    var e, t, i
                }, Se.prototype.resizeHandler = function() {
                    var i = this;
                    "offline" === B.pageStatus() && E.hideWidgetOnOffline || this.isMaximized || (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                        var e = i.isLandscape(),
                            t = i.ifScrollbarDown();
                        "offline" === B.pageStatus() && E.hideWidgetOnOffline || (i.landscape !== e && t && setTimeout(function() {
                            i.scrollToBottom()
                        }, 200), i.landscape = e, i.isMobileOptimizedWebsite() && "opera" !== k.mobileBrowserName && "android2.3" !== k.mobileBrowserName || (i.getZoom(), i.renderMinifiedBox()))
                    }, 100))
                }, Se.prototype.getMetaContent = function() {
                    for (var e = document.getElementsByTagName("meta"), t = "", i = 0, n = e.length; i < n; i++) e[i].getAttribute("name") && "viewport" === e[i].getAttribute("name").toLowerCase() && (t = e[i].getAttribute("content"));
                    return t
                }, Se.prototype.isLandscape = function() {
                    return screen.height < screen.width || h.innerHeight < h.innerWidth
                }, Se.prototype.isMobileOptimizedWebsite = function() {
                    return this.checkMetaContent(), this.minAndMaxScalesAreEqual && (this.hasViewportHeightWidth || this.hasNoScale) || this.initialAndMaxScalesAreEqual
                }, Se.prototype.resizeMobileRectangleWidget = function() {
                    var e = this.minifiedWidget.container.getElementById("tawk-minified-mobile-text"),
                        t = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
                        i = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper"),
                        n = "safari" !== k.mobileBrowserName ? screen.width : screen.height;
                    "rectangle" === E.mobileWidget() && (e.style.width = "", this.minifiedBoxWidth = e.offsetWidth + 41, this.minifiedBoxWidth < 110 ? this.minifiedBoxWidth = 110 : !this.isLandscape() && this.minifiedBoxWidth > screen.width ? (this.minifiedBoxWidth = screen.width - 41, e.style.width = "calc(100% - 41px)") : this.isLandscape() && this.minifiedBoxWidth > n && (this.minifiedBoxWidth = n - 41, e.style.width = "calc(100% - 41px)"), !this.isLandscape() && this.minifiedBoxWidth > screen.width - 41 ? this.minifiedBoxWidth = screen.width - 41 : this.isLandscape() && this.minifiedBoxWidth > n - 41 && (this.minifiedBoxWidth = n - 41 - 10), i.style.width = this.minifiedBoxWidth + "px", E.isRTL() ? t.style.right = this.minifiedBoxWidth - 17 + "px" : t.style.left = this.minifiedBoxWidth - 17 + "px")
                }, Se.prototype.scaleContent = function(e) {
                    var t, i, n, a, o;
                    this.isMaximized || (o = E.isRTL() ? "right" : "left", this.resizeMobileRectangleWidget(), t = this.minifiedBoxHeight, i = this.minifiedBoxWidth, n = this.minifiedWidget.container.getElementById("tawkchat-minified-box"), a = "-moz-transform : " + (a = "scale(" + e + ")") + "; -webkit-transform : " + a + "; -o-transform : " + a + "; -ms-transform : " + a + "; transform : " + a + ";", o = "-moz-transform-origin : bottom " + o + "; -webkit-transform-origin : bottom " + o + "; -o-transform-origin : bottom " + o + "; -ms-transform-origin : bottom " + o + "; transform-origin : bottom" + o, e && n && (t = Math.ceil(t * e) + 15 * e, i = Math.ceil(i * e) + 15 * e, this.minifiedWidget.container.massRestyle({
                        height: t + "px !important",
                        width: i + "px !important",
                        "min-height": t + "px !important",
                        "min-width": i + "px !important",
                        "max-height": t + "px !important",
                        "max-width": i + "px !important"
                    }), n.style.cssText += a + o, E.isRTL() && !n.classList.contains("rtl-direction") ? n.classList.add("rtl-direction") : !E.isRTL() && n.classList.contains("rtl-direction") && n.classList.remove("rtl-direction")), this.updateWidgetPosition(t))
                }, Se.prototype.maximize = function() {
                    "firefox" === k.mobileBrowserName && !this.isMobileOptimizedWebsite() || "pop" === E.onClickAction ? this.popup() : (this.messagePreview && this.messagePreview.hide(), this.hasChatStarted || (E.showPreChatForm = this.isTherePreChat), this.indicator.hide(), this.minifiedWidget.container.hide(), this.originalIframeContainerStyle || (this.originalIframeContainerStyle = this.iframeContainer.elementReferrer.style.cssText), this.iframeContainer.restyle("margin", "0px !important"), this.isMaximized = !0, this.show())
                }, Se.prototype.resetOriginalStyle = function() {
                    this.originalIframeContainerStyle && (this.iframeContainer.elementReferrer.style.cssText = this.originalIframeContainerStyle)
                }, Se.prototype.resizeIframeHeight = function() {
                    var e;
                    !this.isMaximized && this.iframeContainer && this.minifiedWidget.container.elementReferrer && this.isIEWidget && (e = this.minifiedWidget.container.getElementById("tawkchat-status-text-container").offsetHeight, this.minifiedWidget.container.restyle("height", e + "px"), this.iframeContainer.restyle("marginTop", "-" + e / 2 + "px"), this.iframeContainer.restyle("height", e + "px"))
                }, Se.prototype.renderBottomWidget = function() {
                    this.isMaximized || (this.isBottomWidget = !0, this.minifiedWidget.container.template = w["mobile-bottom-" + E.mobileWidget()], this.iframeContainer.restyle("position", "fixed"), this.updateWidgetPosition())
                }, Se.prototype.handleIndicatorToggle = function(e) {
                    var t = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
                        i = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper");
                    this.isIndicatorOn = e, i.className = e ? i.className + " indicator-on " : i.className.replace("indicator-on", ""), this.isMobileOptimizedWebsite() ? this.scaleContent(1) : this.renderMinifiedBox(), t.style.visibility = "visible"
                }, Se.prototype.updateViewByStatus = function(e, t) {
                    this.isMaximized ? this.parent.updateViewByStatus.call(this, e) : this.iframeContainer.elementReferrer && ("offline" === e && E.hideWidgetOnOffline ? this.hideWidget() : this.showWidget(), this.resizeHandler())
                }, Se.prototype.updateWidgetPosition = function(e) {
                    var t = {},
                        i = {};
                    e = e || this.minifiedBoxHeight, this.iframeContainer && (E.isCenterPositioned() ? (t.top = "50% !important", t.bottom = "auto !important", t.margin = this.isMinifiedRound ? -.5 * e + "px 0 0 0 !important" : -.5 * e - (this.defaultHeight - 37) / 2 + "px 0 0 0 !important", i.bottom = "auto !important") : (t.margin = "0 !important", E.isTopPositioned() ? (t.top = "0px !important", t.bottom = "auto !important", i.top = this.isMinifiedRound ? "5px !important" : "-26px !important") : (t.bottom = "0px !important", t.top = "auto !important", i.bottom = this.isMinifiedRound ? "14px !important" : "0px !important")), E.isRightPositioned() ? (t.right = "0px !important", t.left = "auto !important", i.right = this.isMinifiedRound ? "5px !important" : "0px !important") : (t.left = "0px !important", t.right = "auto !important", i.left = this.isMinifiedRound ? "20px !important" : "15px !important"), this.iframeContainer.massRestyle(t), this.minifiedWidget.container.massRestyle(i))
                }, Se.prototype.addOverflowScroll = function(t) {
                    var i = 0,
                        n = this;
                    y.eventHandler.listen(t, "touchstart", function(e) {
                        i = t.scrollTop + e.touches[0].pageY
                    }, "mobiletouchstart" + t.id), y.eventHandler.listen(t, "touchmove", function(e) {
                        y.eventHandler.cancelEvent(e), e.touches[0].pageY <= 20 || i - e.touches[0].pageY < 0 || (t.scrollTop = i - e.touches[0].pageY, m.isScrollbarDown = n.ifScrollbarDown())
                    }, "mobiletouchmove" + t.id)
                }, Se.prototype.resetView = function() {
                    var e, t;
                    (e = this.chatContainer) && ((e = e.getElementById("chatWrapper")) && (t = e.lastChild, e.innerHTML = "", e.appendChild(t)), this.show())
                }, Se.prototype.renderAgentMinimizedWidget = function(e) {
                    var t = this.minifiedWidget.container.getElementById("agent-profile-image"),
                        i = this.minifiedWidget.container.getElementById("tawkchat-status-text-container"),
                        n = this.minifiedWidget.container.getElementById("tawkchat-status-agent-container");
                    e ? (e = (e = S.agentProfiles[e]).pi ? B.agentImgUrl + "/" + e.pi : "") && ("round" === E.mobileWidget() && (i.style.display = "none"), t.style.backgroundImage = "url('" + e + "')", n.style.display = "block") : (i.style.display = "inherit", t.style.backgroundImage = null, n.style.display = "none")
                }, Se.prototype.handleRestartChat = function() {
                    y.formHandler.closeForm(), m.chatStarted()
                }, Se.prototype.toggleWidget = function() {
                    y.sessionHandler.notifyWindowState(this.isMaximized ? "min" : "max")
                }, Se.prototype.toggleVisibility = function() {
                    this.scrollToBottom(), (this.isVisibilityToggled = !this.isVisibilityToggled) ? this.hideWidget() : this.showWidget()
                }, Se.prototype.isWidgetHidden = function() {
                    return !this.iframeContainer.isVisible
                };

                function Be(e) {
                    Se.call(this, e)
                }(Be.prototype = new Se).init = function() {
                    this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
                }, Be.prototype.renderMinifiedBox = function() {
                    var e = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(e < .2 ? .2 : e)
                };

                function Ne(e) {
                    Se.call(this, e)
                }(Ne.prototype = new Se).init = function() {
                    this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
                }, Ne.prototype.isLandscape = function() {
                    return 0 !== h.orientation
                }, Ne.prototype.getZoom = function() {
                    this.zoom = (this.isLandscape() ? screen.height : screen.width) / h.innerWidth
                }, Ne.prototype.renderMinifiedBox = function() {
                    var e = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(e, !1)
                };

                function Re(e) {
                    Se.call(this, e)
                }(Re.prototype = new Se).init = function() {
                    this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
                }, Re.prototype.renderMinifiedBox = function() {
                    var e = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(e, !0)
                };

                function He(e) {
                    Se.call(this, e), this.screenWidth = 0
                }(He.prototype = new Se).init = function() {
                    this.renderBottomWidget(), this.addResizeEvents(!0), this.resizeHandler()
                }, He.prototype.isLandscape = function() {
                    return 0 !== h.orientation
                }, He.prototype.getZoom = function() {
                    this.isLandscape() ? this.screenWidth = screen.height : this.screenWidth = screen.width, this.zoom = this.screenWidth / h.innerWidth
                }, He.prototype.renderMinifiedBox = function() {
                    var e = this.isMobileOptimizedWebsite() ? (.2 * this.screenWidth / this.minifiedBoxWidth).toFixed(2) : (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(e, !0)
                };

                function Pe(e) {
                    Se.call(this, e)
                }(Pe.prototype = new Se).init = function() {
                    this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
                }, Pe.prototype.renderMinifiedBox = function() {
                    this.scaleContent()
                };

                function Me(e) {
                    Se.call(this, e)
                }(Me.prototype = new Se).init = function() {
                    this.renderBottomWidget(), this.checkMetaContent(), this.addResizeEvents(), this.resizeHandler()
                }, Me.prototype.renderMinifiedBox = function() {
                    var e = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(e, !0)
                };

                function Ae(e) {
                    Se.call(this, e)
                }(Ae.prototype = new Se).init = function() {
                    var e;
                    "ie" === this.browser && ((e = document.createElement("meta")).httpEquiv = "X-UA-Compatible", e.setAttribute("content", "IE=edge"), document.getElementsByTagName("head")[0].appendChild(e)), this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
                }, Ae.prototype.renderMinifiedBox = function() {
                    var e = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(e < .2 ? .2 : e)
                };

                function Fe(e) {
                    Se.call(this, e)
                }(Fe.prototype = new Se).init = function() {
                    this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
                }, Fe.prototype.renderMinifiedBox = function() {
                    var e = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(e < .2 ? .2 : e)
                };
                var ze = ye.extend({
                    init: function() {
                        var e, t, i, n, a = this;
                        this._super(this), this.clickEvent = "touchend", this.iframeContainer = new me(M.getRandomName(), "border: 0 none; padding: 0; margin: 0; z-index: 9999999; width: 100%; height: 100%; display: none; position : fixed; top :0; bottom : 0; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important;"), m = new ke(this.tawktoLinkName, this.bottomContainerName), this.indicator = new ve, this.iframeContainer.addChildViews([m.container]), this.iframeContainer.buildView(), e = document.getElementsByTagName("head")[0], t = document.createDocumentFragment(), i = M.createElement(document, "style", {
                            type: "text/css"
                        }), n = document.createTextNode(y.ResetStyle + "" + y.MaximizedStyle + E.maxStyle()), i.styleSheet ? i.styleSheet.cssText = n.nodeValue : i.appendChild(n), t.appendChild(i), e.appendChild(t), this.chatContainer = m.container, m.wrapper.addClass("mobile"), S.rating.subscribe(function(e) {
                            a.changeRating(e)
                        }), B.pageStatus.subscribe(function(e) {
                            a.updateViewByStatus(e)
                        }), E.maxStyle.subscribe(function() {
                            m && m.container.elementReferrer && m.container.insertCssFile(E.maxStyle(), !0)
                        }), y.chatHandler.hasChatStarted.subscribe(function(e) {
                            m.toggleEndChatOption(e)
                        })
                    },
                    show: function() {
                        m.show(), this.updateViewByStatus(B.pageStatus()), this._super(), y.socketManager.sendToConnector("popupOnFocus", !0)
                    },
                    updateViewByStatus: function(e) {
                        this._super(e), m && "preChatForm" !== y.formHandler.currentForm && "offlineForm" !== y.formHandler.currentForm && E.isPopup && (e = r.getShortMessage(e), document.title = e ? I.pageName() + " - " + M.rawDecode(e) : I.pageName())
                    },
                    handleEndChat: function() {
                        m.chatEnded(), this.hideWidget()
                    },
                    handleRestartChat: function() {
                        m.chatStarted()
                    }
                });
                ze.prototype.begin = function() {
                    var e, t = k.mobileBrowserName;
                    document.body.appendChild(this.iframeContainer.elementReferrer), "symbian" !== t && "ie" !== t && "opera" !== t && "android2.3" !== t || (this.clickEvent = "click"), m.buildView(), !M.isTouchDevice() || "android" !== k.mobileBrowserName && "android2" !== k.mobileBrowserName && "android2.3" !== k.mobileBrowserName || (t = this.chatContainer.getElementById("chatContainer"), e = this.chatContainer.getElementById("menuScrollable"), this.addOverflowScroll(t), this.addOverflowScroll(e), t.style.overflow = "hidden", e.style.overflow = "hidden"), y.audioPlayer.initAudioPlayer()
                }, ze.prototype.hideWidget = function() {
                    y.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function() {
                        1 < h.history.length ? h.history.back() : h.close()
                    }, 200)
                }, ze.prototype.showWidget = function() {
                    this.scrollToBottom(), this.iframeContainer.show()
                }, ze.prototype.resetView = function() {
                    var e, t;
                    (e = this.chatContainer) && ((e = e.getElementById("chatWrapper")) && (t = e.lastChild, e.innerHTML = "", e.appendChild(t)), this.show())
                }, ze.prototype.addOverflowScroll = function(t) {
                    var i = 0,
                        n = this;
                    y.eventHandler.listen(t, "touchstart", function(e) {
                        i = t.scrollTop + e.touches[0].pageY
                    }, "mobiletouchstart" + t.id), y.eventHandler.listen(t, "touchmove", function(e) {
                        y.eventHandler.cancelEvent(e), e.touches[0].pageY <= 20 || i - e.touches[0].pageY < 0 || (t.scrollTop = i - e.touches[0].pageY, m.isScrollbarDown = n.ifScrollbarDown())
                    }, "mobiletouchmove" + t.id)
                }, ze.prototype.addEmojiToInput = function(e) {
                    m.addEmojiToInput(e)
                }, ze.prototype.closeEmojiSelection = function() {
                    m.closeEmojiSelection()
                };

                function Le() {
                    var e = this,
                        t = !1;
                    this.onActivityHandler = function() {
                        y && (e.away && s.connected && y.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), e.active = !0, e.away = !1)
                    }, this.popupOnFocusHandler = function() {
                        y && (!s.connected && y.socketManager.isForcedDisconnect() ? y.main.criticalRefresh(B.serverVersion, !1, !0) : (e.hasFocus || (e.active = !0, e.hasFocus = !0, s.connected && y.socketManager.sendToConnector("popupOnFocus", !0)), e.away && s.connected && y.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), e.away = !1))
                    }, this.popupOnBlurHandler = function() {
                        y && (e.hasFocus = !1, s.connected && y.socketManager.sendToConnector("popupOnFocus", !1))
                    }, this.reconnectOnActivity = function() {
                        y && !t && (t = !0, y.main.criticalRefresh(B.serverVersion))
                    }, this.away = this.active = this.hasFocus = !1, this.interval = this.awayTimeout = this.inactivityTimeout = null, this.initActivityReset = function() {
                        e.resetTimeout(), e.setupListeners(), e.interval = setInterval(function() {
                            e.active && (e.resetTimeout(), e.active = !1)
                        }, 1e4)
                    }
                }
                Le.prototype.resetTimeout = function() {
                    var e = this;
                    clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout), this.awayTimeout = setTimeout(function() {
                        !e.away && y && (e.away = !0, y && y.socketManager && s.connected && y.socketManager.sendToConnector("notifySocketStatusUpdate", "away"))
                    }, 6e5), y && !y.socketManager.isForcedDisconnect() && (this.inactivityTimeout = setTimeout(function() {
                        e.inactivityTimeoutHandler()
                    }, 12e5))
                }, Le.prototype.inactivityTimeoutHandler = function() {
                    y && (y.socketManager.disconnectConnector(), E.isEmbedded ? y.formHandler.openForm("inactivityOverlay") : B.chatWindowState("min"), k.mobileBrowserName ? (y.eventHandler.listen(y.viewHandler.chatContainer.documentRef, "touchmove", this.reconnectOnActivity, "acitmmousemove"), y.eventHandler.listen(y.viewHandler.chatContainer.documentRef, y.viewHandler.clickEvent, this.reconnectOnActivity, "acitmclick"), y.eventHandler.listen(y.viewHandler.chatContainer.documentRef, "keydown", this.reconnectOnActivity, "acitmkeydown"), y.eventHandler.listen(document, "touchmove", this.reconnectOnActivity, "acitmousemove"), y.eventHandler.listen(document, y.viewHandler.clickEvent, this.reconnectOnActivity, "acitclick"), y.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown")) : (y.eventHandler.listen(document, "mousemove", this.reconnectOnActivity, "acitmousemove"), y.eventHandler.listen(document, "click", this.reconnectOnActivity, "acitclick"), y.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown"), document.onfocusin ? y.eventHandler.listen(document, "focusin", this.reconnectOnActivity, "acitfocus") : y.eventHandler.listen(h, "focus", this.reconnectOnActivity, "acitfocus")), y.viewHandler.indicator.pageTitleNotification.off())
                }, Le.prototype.cleanUp = function() {
                    clearInterval(this.interval), clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout)
                }, Le.prototype.setupListeners = function() {
                    k.mobileBrowserName ? (y.eventHandler.listen(y.viewHandler.chatContainer.documentRef, "touchmove", this.onActivityHandler, "acmmousemove"), y.eventHandler.listen(y.viewHandler.chatContainer.documentRef, y.viewHandler.clickEvent, this.onActivityHandler, "acmclick"), y.eventHandler.listen(y.viewHandler.chatContainer.documentRef, "keydown", this.onActivityHandler, "acmkeydown"), y.eventHandler.listen(document, "touchmove", this.onActivityHandler, "acmousemove"), y.eventHandler.listen(document, y.viewHandler.clickEvent, this.onActivityHandler, "acclick"), y.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown")) : E.isPopup ? (document.onfocusin ? (y.eventHandler.listen(document, "focusin", this.popupOnFocusHandler, "acfocus"), y.eventHandler.listen(document, "focusout", this.popupOnBlurHandler, "acblur")) : (y.eventHandler.listen(h, "focus", this.popupOnFocusHandler, "acfocus"), y.eventHandler.listen(h, "blur", this.popupOnBlurHandler, "acblur")), y.eventHandler.listen(document, "click", this.popupOnFocusHandler, "acphclick"), y.eventHandler.listen(document, "keydown", this.popupOnFocusHandler, "acphkeydown")) : (y.eventHandler.listen(document, "mousemove", this.onActivityHandler, "acmousemove"), y.eventHandler.listen(document, "click", this.onActivityHandler, "acclick"), y.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown"))
                };

                function Oe() {
                    var t = this;
                    this.originalPageStatus = this.agentCountSubscription = this.setupTimeout = null, this.utcOffset = 0, y.eventEmitter.on("scheduleUpdate", function(e) {
                        E.widgetId === e.wdgt && (E.schedule = e.ws ? t.convertOldScheduleFormat(e.ws.sch) : null, E.scheduleTimezone = null === e.wstz ? {} : {
                            utc: e.wstz.utc,
                            tzo: e.wstz.offset
                        }, t.setup())
                    })
                }
                Oe.prototype.setup = function() {
                    this.clear(), null === this.originalPageStatus && (this.originalPageStatus = B.pageStatus()), E.schedule ? (this.utcOffset = -1 * ((new Date).getTime() - E.scheduleTimezone.utc), this.calculate()) : B.pageStatus(this.originalPageStatus)
                }, Oe.prototype.calculate = function() {
                    var e, t, i, n, a, o = this;
                    if (this.clear(), E.schedule)
                        if (0 === E.schedule.length) this.goOffline();
                        else {
                            t = -6e4 * (e = new Date).getTimezoneOffset(), t = E.scheduleTimezone.tzo - t, e = (i = new Date(e.getTime() + this.utcOffset + t)).getDay(), i = 60 * (t = 60 * i.getHours() + i.getMinutes()) + i.getSeconds();
                            for (var r = 0; r < E.schedule.length; r++) {
                                var s = E.schedule[r];
                                if (s.day === e) {
                                    if (t >= s.start && t < s.end) {
                                        n = s;
                                        break
                                    }
                                    if (t < s.start) {
                                        a = s;
                                        break
                                    }
                                }
                            }
                            void 0 !== (n = void 0 !== n ? (this.goOnline(), 60 * n.end - i) : (this.goOffline(), void 0 !== a ? 60 * a.start - i : 86400 - i + 1)) && (this.setupTimeout = setTimeout(function() {
                                o.calculate()
                            }, 1e3 * n))
                        }
                }, Oe.prototype.goOnline = function() {
                    null !== this.agentCountSubscription && (y.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null), "offline" !== this.originalPageStatus && B.pageStatus(this.originalPageStatus)
                }, Oe.prototype.goOffline = function() {
                    0 !== y.agents.totalAgents() ? (null !== this.agentCountSubscription && y.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = y.agents.totalAgents.subscribe(function(e) {
                        0 === e && B.pageStatus("offline")
                    })) : B.pageStatus("offline")
                }, Oe.prototype.clear = function() {
                    clearTimeout(this.setupTimeout), (this.setupTimeout = null) !== this.agentCountSubscription && (y.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null)
                }, Oe.prototype.cleanUp = function() {
                    this.clear(), this.originalPageStatus = null
                }, Oe.prototype.convertOldScheduleFormat = function(i) {
                    var n = [];
                    return !i || Array.isArray(i) ? i : (Object.keys(i).forEach(function(e) {
                        var t = i[e];
                        0 === t.start && 0 === t.end || n.push({
                            day: parseInt(e, 10),
                            start: Math.floor(t.start / 6e4),
                            end: Math.floor(t.end / 6e4)
                        })
                    }), n)
                };

                function De() {
                    this.registerTime = 0, this.registerStart = null, this.maxRetrycount = 3, this.retryCount = 0, this.registerData = this.registerDelayTimeout = this.connectionCookieInterval = this.requestCancelTimeout = this.previousRegisterCall = null, this.registerStarted = !1, this.retryDelay = null, this.retryInitialDelay = 30, this.retryMultiplier = 1.5, this.minRandom = .5, this.maxRandom = 1.5, this.maxDelay = 120, this.retryRegisterTimeout = null
                }
                De.prototype.register = function() {
                    this.registerStarted = !0, this.clearTimers(), this.prepareData()
                }, De.prototype.prepareData = function() {
                    var e, t, i, n = "",
                        a = "";
                    y && (e = $.getSessionInformation(), t = B.sessionKey || void 0, e.length && (a = e[0]), ((i = (new Date).getTimezoneOffset()) < -900 || 900 < i) && (i = 0), this.registerData ? (this.registerData.k = t, this.registerData.d = a) : (n = y.browserData.getReferredSearchEngine(), this.registerData = {
                        a: I.pageId || "",
                        k: t,
                        w: E.widgetId,
                        d: a,
                        mb: k.mobileBrowserName ? 1 : 0,
                        m: i,
                        s: n,
                        q: "",
                        r: document.referrer,
                        p: document.location.href
                    }), this.registerData.cf = 3 === e.length && "cf" === e[2] ? 1 : 0, y.main.maximize && (this.registerData.h = "max"), this.registerData.wv = E.widgetVersion, E.isPopup && B.transferKey && B.sessionKey && (this.registerData.tk = B.transferKey), y.main.previousSessionKey = this.registerData.k, this.getUUID())
                }, De.prototype.getUUID = function() {
                    var e, t, i, n = !1,
                        a = 1 / 0,
                        o = y.punycode.toASCII(h.location.hostname);
                    "www." === o.substring(0, 4) && (o = o.replace("www.", ""));
                    for (var r = 0, s = (e = $.getStoredUUID()).length; r < s; r++) {
                        var l, d, c, p = $.parseSessionInformation(e[r]);
                        if (4 === p.length)
                            if (l = p[0], d = p[1], c = p[2], p = p[3], "e" === l) {
                                if (o === d) {
                                    t = c, i = p;
                                    break
                                }
                            } else "p" === l && (l = o.match(d)) && o.substr(l.index) === d && l.index < a && (a = l.index, t = c, i = p, n = !0)
                    }
                    this.registerData && (this.registerData.u = t, this.registerData.uv = i, n && (this.registerData.uw = !0)), this.startRegister()
                }, De.prototype.abort = function() {
                    null !== this.previousRegisterCall && (Y.abort(this.previousRegisterCall), this.previousRegisterCall = null)
                }, De.prototype.setupRegisterTimeout = function() {
                    var e = this;
                    clearTimeout(this.requestCancelTimeout), this.requestCancelTimeout = setTimeout(function() {
                        e.abort(), e.retryRegister()
                    }, 9e4)
                }, De.prototype.startRegister = function() {
                    var e = $.getHTTPCookie("TawkConnectionTime");
                    !(e = parseInt(e.length ? e[0] : null, 10)) || 1e3 < (new Date).getTime() - new Date(e).getTime() ? ($.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0), this.connectionCookieInterval = setInterval(function() {
                        $.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0)
                    }, 100), this.doRegister()) : this.delayRegister()
                }, De.prototype.delayRegister = function() {
                    var e = this;
                    clearTimeout(this.registerDelayTimeout), this.registerDelayTimeout = setTimeout(function() {
                        e.register()
                    }, 1e3)
                }, De.prototype.doRegister = function() {
                    var e = B.visitorAppServer + "/register/",
                        i = this;
                    this.registerStart = (new Date).getTime(), this.setupRegisterTimeout(), e += this.registerStart, this.previousRegisterCall = Y.xhrRequest(e, this.registerData, function(e, t) {
                        return e || t ? void(y && y.main.begin(JSON.parse(M.trim(t)))) : (i.clearTimers(), i.retryRegister())
                    })
                }, De.prototype.retryRegister = function() {
                    var e, t = this;
                    null === this.retryRegisterTimeout && (this.retryCount >= this.maxRetrycount ? (this.clearTimers(), y && y.main.hideWidget()) : (this.retryCount++, e = this.getRetryWaitDelay(), this.retryRegisterTimeout = setTimeout(function() {
                        t.register()
                    }, e)))
                }, De.prototype.resetRetryCount = function() {
                    this.retryCount = 0, this.retryDelay = 10
                }, De.prototype.getRetryWaitDelay = function() {
                    var e, t = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
                    return null === this.retryDelay ? this.retryDelay = this.retryInitialDelay : (e = this.retryDelay * this.retryMultiplier, this.retryDelay = this.retryDelay > this.maxDelay || e > this.maxDelay ? this.maxDelay : e), 1e3 * Math.round(this.retryDelay * t)
                }, De.prototype.clearTimers = function() {
                    this.abort(), clearTimeout(this.requestCancelTimeout), clearTimeout(this.registerDelayTimeout), clearTimeout(this.retryRegisterTimeout), clearInterval(this.connectionCookieInterval), $.setHTTPCookie("TawkConnectionTime", 0, !0), this.connectionCookieInterval = this.requestCancelTimeout = this.registerDelayTimeout = this.retryRegisterTimeout = null
                };

                function We() {}
                We.prototype.processSettings = function(e) {
                    var t, i, n = 14,
                        a = "",
                        o = "",
                        r = "",
                        s = t = 60;
                    e.wv < E.widgetVersion || (Tawk_API.embedded && (E.isEmbedded = !0), E.isHeaderCompact = !1, E.isLegacyLayout = e.isLegacyLayout || !0, E.widgetVersion = e.wv, E.onClickAction = e.woc, E.hideWidgetOnLoad = e.hwol, E.hideWidgetOnOffline = e.hwof, E.hideWidget = !!e.dsw, E.showAgentBar = !e.hab, E.showWaitTime = !e.hwt, E.locale = e.lc, E.onlineGreeting = e.onlineGreeting, E.awayGreeting = e.awayGreeting, E.schedule = y.scheduler.convertOldScheduleFormat(e.ws), E.soundOn(!e.dws), E.showAgentTyping = e.atyping, E.showUploads(e.uploads), E.showRating(e.rating), E.showVisitorTyping(e.vtyping), E.showEmoji(e.emoji), E.showMessagePreview(e.mprvw), E.showUnreadInTab(e.tbi), E.isRTL(0 <= M.rtlLangTab.indexOf(E.locale)), E.chatPosition(e.pos), "page" !== $_Tawk_WidgetId || k.mobileBrowserName || (e.dw = "min"), "full" === e.dw ? (E.widgetOffsetX = 10, E.widgetOffsetY = 0) : (E.widgetOffsetX = 20, E.widgetOffsetY = 20), k.mobileBrowserName ? E.mobileWidget(e.mw || "round") : E.desktopWidget(e.dw || "min"), E.maximizedDimensions({
                        width: parseInt(e.w, 10) || 350,
                        height: parseInt(e.h, 10) || 520
                    }), E.isDesktopRectangle() && (t = parseInt(e.minw, 10) || 320, s = parseInt(e.minh, 10) || 40), E.chatBubble(e.bbl), E.headerBgColor = e.thm.hbg || "#03a84e", E.headerTxtColor = e.thm.htx || "#ffffff", E.agentTextBgColor = e.thm.aBblBg || M.shadeColor(E.headerBgColor, -.1), E.agentTextColor = e.thm.aBblTx || "#ffffff", E.visitorTextBgColor = e.thm.vBblBg || "#e5e5e5", E.visitorTextColor = e.thm.vBblTx || "#33333", E.minimizedDimensions({
                        width: t,
                        height: s,
                        position: e.pos
                    }), E.topCorner = void 0 !== e.thm.topc ? e.thm.topc : E.isTopPositioned() ? 0 : 8, E.bottomCorner = void 0 !== e.thm.btmc ? e.thm.btmc : E.isTopPositioned() ? 8 : 0, (E.isEmbedded || E.isPopup) && (E.topCorner = 0, E.bottomCorner = 0), this.processPrechatForm(e), this.processOfflineForm(e, e.grt), y && (t = ".theme-background-color{background-color: " + E.headerBgColor + ";}", s = ".theme-text-color{color: " + E.headerTxtColor + ";}", E.showEmoji() && (n += 30), E.showRating() && (n += 30), E.showUploads() && (n += 30), y.MinifiedStyle && (i = E.topCorner + "px " + E.topCorner + "px " + E.bottomCorner + "px " + E.bottomCorner + "px !important;", messagePreviewRadius = E.topCorner + "px " + E.topCorner + "px " + E.topCorner + "px " + E.topCorner + "px !important;", bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" + E.bottomCorner + "px !important; border-bottom-right-radius:" + E.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + E.topCorner + "px !important; border-top-right-radius:" + E.topCorner + "px !important;}", o = o + t + s, o += ".border-corner{border-radius : " + i + "-moz-border-radius : " + i + "-webkit-border-radius : " + i + "}", o += topBorderRadius, o += bottomBorderRadius, o += "#tooLongMsgNotification {background-color: " + E.headerBgColor + "; color : " + E.headerTxtColor + "}", o += "#file-upload-drop-icon {color:" + E.headerBgColor + ";}", o += "#tawkchat-status-container{left: 10px;}", o += "#short-message, #maximizeChat, #minimizeChatMinifiedBtn{line-height: " + E.minimizedDimensions().height + "px;}", o += ".bubble-text-color{color:" + (E.chatBubble() ? E.chatBubble().fgc : "#ffffff") + ";}", o += "#tawkchat-message-preview-messages-container .messageBody {background-color: #fff !important; color : #333 !important;}", o += "#textareaContainer.additionalPadding{padding-right: " + n + "px;}", o += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " + n + "px;padding-right: 14px;}", o += "#chat-icon-svg { fill:" + E.headerTxtColor + "};", E.minStyle(o), y.MinifiedStyle += " " + y.CommonStyle), y.MaximizedStyle && (a = a + (t = ".theme-background-color{background-color: " + E.headerBgColor + ";}") + (s = ".theme-text-color{color: " + E.headerTxtColor + ";}"), a += "#tooLongMsgNotification {background-color: " + E.headerBgColor + "; color : " + E.headerTxtColor + "}", a += "#file-upload-drop-icon {color:" + E.headerBgColor + ";}", a += "#chatMenuControls li:hover {background-color: " + E.headerBgColor + ";color: " + E.headerTxtColor + "}", a += "#formContainer>#emailTranscriptForm .form-header-icon, #changeNameForm .form-header-icon, #chatEndedForm .form-header-icon, #preChatForm .longFormContainer .form-header-icon {background-color:" + E.headerBgColor + ";}", a += "#formContainer>#emailTranscriptForm::before, #changeNameForm::before, #chatEndedForm::before, #endChatForm::before {background-color:" + E.headerBgColor + "; border-color: " + E.headerBgColor + ";}", a += "#formSubmit, #formSubmit-pc {background-color:" + E.headerBgColor + ";}", a = E.isDesktopRectangle() ? a + ("#textareaWrapper, #actionsContainer{border-radius : 0px 0px " + E.bottomCorner + "px " + E.bottomCorner) + "px !important ;}" : a + "#textareaWrapper, #actionsContainer{border-radius : 0px 0px 5px 5px !important ;}", a += "button.theme-background-color:hover{background-color: " + M.shadeColor(E.headerBgColor, -.3) + "!important;}", a += ".agentChatContainer .message{background-color: " + E.agentTextBgColor + " !important; color : " + E.agentTextColor + " !important;}", a += ".agentTypingIndicator .dot{background-color: " + E.agentTextColor + " !important;}", a += ".visitorChatContainer .message, .visitorChatContainer .messageWrapper.error .message {background-color: " + E.visitorTextBgColor + " !important; color : " + E.visitorTextColor + " !important;}", a += ".upload-data {background-color: " + E.visitorTextBgColor + " !important; color : " + E.visitorTextColor + " !important;}", a += ".headerBoxLink .headerBoxIcon{color:" + E.headerTxtColor + ";}", a += ".message.agentTypingIndicator::before,.message.agentTypingIndicator::after {border-color: transparent " + E.agentTextBgColor + " transparent transparent;}", a += ".visitorChatContainer .messageWrapper .message::after {border-color: transparent transparent transparent " + E.visitorTextBgColor + ";}", a += ".agentChatContainer .messageWrapper .message::before,.agentChatContainer .messageWrapper .message::after {border-color: transparent " + E.agentTextBgColor + " transparent transparent;}", a += ".upload-data::before, .upload-data::after {border-color: transparent transparent transparent " + E.visitorTextBgColor + ";}", a += ".agentNameCentered{color:" + E.headerTxtColor + ";}", a += "#textareaContainer.additionalPadding{padding-right: " + n + "px;}", a += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " + n + "px;padding-right: 14px;}", a += "#actionsContainer.mobile-typing #textareaContainer{padding-right: " + (n + 27) + "px;}", a += ".rtl-direction #actionsContainer.mobile-typing #textareaContainer{padding-left: " + (n + 27) + "px;}", E.maxStyle(a), y.MaximizedStyle += " " + y.CommonStyle), y.MinifiedMobileStyle && (r = r + t + s, bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" + E.bottomCorner + "px !important; border-bottom-right-radius:" + E.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + E.topCorner + "px !important; border-top-right-radius:" + E.topCorner + "px !important;}", r += topBorderRadius, r += bottomBorderRadius, r += "#chat-icon-svg { fill:" + E.headerTxtColor + "};", E.mobMinStyle(r), y.MinifiedMobileStyle += " " + y.CommonStyle)), e.cf && (E.consentOption = {
                        text: e.cf.msg,
                        buttons: [{
                            textReplace: e.cf.btnAccpt,
                            placeholder: "__CUSTOM_SUBMIT_BUTTON__"
                        }, {
                            textReplace: e.cf.btnRjct,
                            placeholder: "__CUSTOM_CLOSE_BUTTON__"
                        }]
                    }, e.cf.plcyUrl && (E.consentOption.text += "\n[" + (e.cf.plcyUrlTxt || e.cf.plcyUrlTxt) + "](" + e.cf.plcyUrl + ")")), M.updateFonts())
                }, We.prototype.processPrechatForm = function(e) {
                    E.showPreChatForm = void 0 !== e.prechatForm && null !== e.prechatForm, E.showPreChatForm && (E.prechatOptions = e.prechatForm)
                }, We.prototype.processOfflineForm = function(e) {
                    e = e.offlineForm ? e.offlineForm : {
                        text: y.languageParser.translate("form", "OfflineFormMessage"),
                        shortMessage: y.languageParser.translate("form", "SendMessage"),
                        fields: [{
                            label: y.languageParser.translate("form", "name"),
                            isRequired: !0,
                            type: "name"
                        }, {
                            label: y.languageParser.translate("form", "email"),
                            isRequired: !0,
                            type: "email"
                        }, {
                            label: y.languageParser.translate("form", "message"),
                            isRequired: !0,
                            type: "message"
                        }]
                    }, E.offlineOptions = e
                }, We.prototype.getPrechatFields = function() {
                    return E.prechatOptions.fields
                }, We.prototype.getOfflineFields = function() {
                    return E.offlineOptions.fields
                }, We.prototype.getShortMessage = function(e) {
                    var t = null;
                    return "online" === e && E.onlineGreeting ? t = E.onlineGreeting.shortMessage : "away" === e && E.awayGreeting ? t = E.awayGreeting.shortMessage : "offline" === e && E.offlineOptions && (t = E.offlineOptions.shortMessage), t
                }, We.prototype.getLongMessage = function(e) {
                    var t = null;
                    return "online" === e && E.onlineGreeting ? t = E.onlineGreeting.longMessage : "away" === e && E.awayGreeting ? t = E.awayGreeting.longMessage : E.offlineOptions && (t = E.offlineOptions.text), M.transformGreetings(t)
                }, r = new We;

                function Ue() {
                    var t = this;
                    this.referrer = null, T.name.subscribe(function(e) {
                        T.displayName(M.parseVisitorName(e))
                    }), y.eventEmitter.on("localeChanged", function() {
                        T.displayName(M.parseVisitorName(T.name()))
                    }), y.eventEmitter.on("visitorDataUpdate", function(e) {
                        t.updateVisitorInformation(e)
                    }), y.eventEmitter.on("requestEmailTranscript", function(e, t) {
                        e.chatEndVersion = S.chatEndVersion, y.chatHandler.hasChatEnded ? y.socketManager.sendToConnector("notifyEndChatTranscript", e, t) : y.socketManager.sendToConnector("notifyEmailTranscript", e, t)
                    })
                }
                Ue.prototype.updateVisitorUUID = function(e) {
                    var t = JSON.parse(e.uuids);
                    T.uuid = e.uuid, T.uuidVer = e.uver || 0, t && (Object.keys(t.e).forEach(function(e) {
                        T.uuids.push({
                            isExact: !0,
                            domain: e,
                            uuid: t.e[e]
                        })
                    }), Object.keys(t.p).forEach(function(e) {
                        T.uuids.push({
                            isExact: !1,
                            domain: e,
                            uuid: t.p[e]
                        })
                    })), $.storeUUID()
                }, Ue.prototype.updateVisitorInformation = function(e) {
                    e.n && M.isString(e.n) && T.name(e.n), e.te && M.isString(e.te) && (T.transcriptEmail = e.te), e.e && M.isString(e.e) && T.email(e.e), e.vid && (T.visitorId = e.vid), e.dpt && M.isString(e.dpt) && (S.chatDepartment = e.dpt), e.pcfs && B.prechatFormSubmitted(!0)
                }, Ue.prototype.setNameFromForm = function(e) {
                    y.visitorHandler.setNameValue(e), d.triggerApiHandlers("onVisitorNameChanged", e.name)
                }, Ue.prototype.getNameValue = function() {
                    return T.name() === T.displayName() ? T.name() : ""
                }, Ue.prototype.setNameValue = function(e) {
                    T.name(M.rawEncode(e.name))
                }, Ue.prototype.getTranscriptEmailValue = function() {
                    return T.transcriptEmail
                }, Ue.prototype.getEmailValue = function() {
                    return T.email() || T.transcriptEmail
                }, Ue.prototype.setEmailValue = function(e) {
                    T.email(e.email)
                }, Ue.prototype.setTranscriptValue = function(e) {
                    e.name && T.name(M.rawEncode(e.name)), T.transcriptEmail = e.transcriptEmail
                }, Ue.prototype.sendNavigationEvent = function() {
                    var t = this;
                    setTimeout(function() {
                        var e = {
                            u: h.location.href,
                            t: document.title
                        };
                        y && (y.viewHandler && y.viewHandler.indicator && 0 < y.viewHandler.indicator.unansweredMessages && (e.t = y.viewHandler.indicator.originalPageTitle), document.referrer && t.referrer !== document.referrer && (t.referrer = document.referrer, e.r = document.referrer), y.socketManager.sendToConnector("nav", e))
                    }, 500)
                };

                function Ve() {
                    var i = this;
                    y.eventEmitter.on("chatBubbleClosed", function() {
                        B.chatBubbleClosed(!0)
                    }), y.eventEmitter.on("windowStateUpdated", function(e) {
                        B.chatWindowState(e.cw)
                    }), y.eventEmitter.on("pageStatusUpdated", function(e) {
                        var t;
                        e && (t = e.ast) && M.isString(t) && M.isArray(e.dptst) && e.asver > B.pageStatusVersion && (y.scheduler.originalPageStatus = e.ast, B.pageStatusVersion = e.asver, B.departments = e.dptst, B.pageStatus(e.ast), y.scheduler.calculate())
                    }), y.eventEmitter.on("submitPrechatForm", function(e, t) {
                        i.formatPrechatData(e, t)
                    }), y.eventEmitter.on("submitOfflineForm", function(e, t) {
                        i.formatOfflineData(e, t)
                    }), B.pageStatus.subscribe(function(e) {
                        d.triggerApiHandlers("onStatusChange", e)
                    }), y.eventEmitter.on("visitorTagsUpdate", function(e) {
                        d.triggerApiHandlers("onTagsUpdated", e)
                    })
                }
                Ve.prototype.closeBubble = function() {
                    B.chatBubbleClosed(!0), y.socketManager.sendToConnector("notifyChatBubbleClosed")
                }, Ve.prototype.getDeparmentOptions = function() {
                    var e, t, i, n = [],
                        a = B.departments;
                    for (a.sort(function(e, t) {
                            var i = M.rawDecode(e.n).toLowerCase(),
                                n = M.rawDecode(t.n).toLowerCase();
                            return i < n ? -1 : n < i ? 1 : 0
                        }), e = 0, t = a.length; e < t; e++) i = a[e], n.push({
                        text: i.n + " (" + y.languageParser.translate("status", i.st) + ")",
                        value: i.did,
                        selected: S.chatDepartment === i.did
                    });
                    return n
                }, Ve.prototype.getDeparmentName = function(e) {
                    for (var t = B.departments, i = 0, n = t.length; i < n; i++)
                        if (t[i].did === e) return M.rawDecode(t[i].n);
                    return e
                }, Ve.prototype.formatFormData = function(e, t) {
                    for (var i, n = {
                            questions: []
                        }, a = 0, o = t.length; a < o; a++) {
                        if ("name" === (i = t[a]).type && (n.name = e[i.id]), "email" === i.type && (n.email = e[i.id]), "department" === i.type) {
                            if (!e[i.id] || "0" == e[i.id]) continue;
                            n.department = e[i.id], e[i.id] = this.getDeparmentName(e[i.id])
                        }
                        e[i.id] && 0 !== e[i.id].length && (M.isArray(e[i.id]) ? n.questions.push({
                            label: M.rawDecode(i.label),
                            answer: e[i.id].join(", ")
                        }) : n.questions.push({
                            label: M.rawDecode(i.label),
                            answer: e[i.id]
                        }))
                    }
                    return n
                }, Ve.prototype.formatPrechatData = function(e, t) {
                    var i = this,
                        n = this.formatFormData(e, r.getPrechatFields());
                    y.socketManager.sendToConnector("notifyPrechat", n, function(e) {
                        return e ? t(e, n) : (d.triggerApiHandlers("onPrechatSubmit", n.questions), y.viewHandler.indicator.pageTitleNotification.off(), void i.handlePrechatSave(n, t))
                    })
                }, Ve.prototype.handlePrechatSave = function(t, i) {
                    var e, n, a = "";
                    if (t.name && y.visitorHandler.setNameValue(t), t.email && y.visitorHandler.setEmailValue(t), B.prechatFormSubmitted(!0), 0 === t.questions.length) return i(null, t);
                    if (0 < t.questions.length)
                        for (e = 0, n = t.questions.length; e < n; e++) a += M.rawDecode(t.questions[e].label) + " : " + t.questions[e].answer, e !== n - 1 && (a += "\r\n");
                    y.chatHandler.sendMessageToServer(a, null, function(e) {
                        e.error || (y.chatHandler.prepareMessage({
                            ut: "v",
                            t: "c",
                            m: M.rawEncode(a),
                            co: new Date,
                            uid: T.visitorId
                        }, !1, !1, !0), y.viewHandler.addWaitTime()), i(e.error, t)
                    })
                }, Ve.prototype.formatOfflineData = function(e, t) {
                    var i = this.formatFormData(e, r.getOfflineFields());
                    i.questions.unshift({
                        label: y.languageParser.translate("form", "SubmittedFrom"),
                        answer: h.location.href
                    }), y.socketManager.sendToConnector("notifyOfflineMessage", i, function(e) {
                        return e ? t(e, i) : (d.triggerApiHandlers("onOfflineSubmit", i), void t(null, i))
                    })
                }, Ve.prototype.visitorChatDismiss = function(t) {
                    var e;
                    y.chatHandler.messages && (e = (e = Object.keys(y.chatHandler.messages))[e.length - 1], (e = y.chatHandler.messages[e]) && e.co && (e = new Date(e.co).getTime(), y.socketManager.sendToConnector("visitorChatDismiss", {
                        timestamp: e
                    }, function(e) {
                        return e ? t(e) : void t(null)
                    })))
                }, Ve.prototype.notifyWindowState = function(e) {
                    B.chatWindowState(e), y.socketManager.sendToConnector("notifyWindowState", e)
                }, Ve.prototype.addEvent = function(e, t, i) {
                    var n;
                    "function" == typeof t && (i = t, t = null), i = i || function() {}, (n = this.secureWrapper({})).name = e, n.data = t, y.socketManager.sendToConnector("addEvent", n, i)
                }, Ve.prototype.setAttributes = function(t, e, i) {
                    i = i || function() {}, e ? (d.visitor = d.visitor || {}, t.name && (d.visitor.name = t.name), t.email && (d.visitor.email = t.email), t.hash && (d.visitor.hash = t.hash)) : t = this.secureWrapper(t), y.socketManager.sendToConnector("setAttributes", t, function(e) {
                        e || (t.name && y.visitorHandler.setNameValue(t), t.email && y.visitorHandler.setEmailValue(t)), i(e)
                    })
                }, Ve.prototype.addTags = function(e, t) {
                    var i;
                    t = t || function() {}, (i = this.secureWrapper({})).tags = e, y.socketManager.sendToConnector("addTags", i, t)
                }, Ve.prototype.removeTags = function(e, t) {
                    var i;
                    t = t || function() {}, (i = this.secureWrapper({})).tags = e, y.socketManager.sendToConnector("removeTags", i, t)
                }, Ve.prototype.secureWrapper = function(e) {
                    return "undefined" === e && (e = {}), d && d.visitor && (d.visitor.email && (e.email = d.visitor.email), d.visitor.hash && (e.hash = d.visitor.hash)), e
                }, Ve.prototype.setVisitorAttributes = function() {
                    var e = {};
                    d && d.visitor && (d.visitor.name && (e.name = d.visitor.name), d.visitor.email && (e.email = d.visitor.email), this.setAttributes(e, !1))
                };

                function je() {
                    var t = this;
                    this.agentHasMessaged = this.visitorHasMessaged = !1, this.messageBuffer = [], this.messages = {}, this.agentsTyping = [], this.agentProfilesTyping = [], this.previousTextTime = this.previousText = this.lastMessageOwner = null, this.hasChatEnded = !1, this.hasChatStarted = c.observable(!1), this.hasWebRTCall = !1, y.eventEmitter.on("syncConversation", function(e) {
                        t.conversationUpdate(e)
                    }), y.eventEmitter.on("incomingMessage", function(e) {
                        t.handleMessageFromServer(e)
                    }), y.eventEmitter.on("agentIsTyping", function(e) {
                        E.showAgentTyping && t.handleAgentTyping(e.rsc)
                    }), y.eventEmitter.on("agentStopedTyping", function(e) {
                        t.handleAgentStoppedTyping(e.rsc)
                    }), y.eventEmitter.on("newChatRating", function(e) {
                        t.changeRating(e.rsc, !0)
                    }), y.eventEmitter.on("webrtcCallStatus", function(e) {
                        y.viewHandler.subscribeCallUpdate(e.clid)
                    }), y.eventEmitter.on("visitorChatDismiss", function(e) {
                        y.viewHandler.closeMessagePreview(e)
                    }), y.eventEmitter.on("visitorChatSeen", function(e) {
                        B.lastMessageTimestamp = e.lmst, y.viewHandler.clearUnseenNotification()
                    })
                }
                je.prototype.parseHistory = function(e) {
                    var t, i, n, a;
                    (new Date).getTime();
                    var o = n = 0;
                    for (this.noRedraw = !0, S.chatEndVersion = 1, t = 0, i = S.chatHistory.length; t < i; t++) "CHAT_ENDED" === S.chatHistory[t].m && (n = t + 1, S.chatEndVersion++);
                    for (a = 0 < S.chatOrder ? this.messages[S.chatOrder] : null, t = n, i = S.chatHistory.length; t < i; t++)(n = S.chatHistory[t]).md && (!n.md || n.md.ao) || e && a && a.timeStamp > new Date(n.co).getTime() || ("v" !== n.ut || this.visitorHasMessaged || "c" !== n.t || (o = (new Date).getTime() - M.getMilliseconds(n.co)), "WEBRTC_CALL" === n.m && n.md && n.md.webrtc ? (this.hasWebRTCall = !0, y.viewHandler.subscribeCallUpdate(n.md.clid, !0)) : this.prepareMessage(n, !0, !1, !1));
                    this.noRedraw = !1, this.visitorHasMessaged && !this.agentHasMessaged && E.showWaitTime && (B.waitTime = B.waitTime < o ? 6e4 : B.waitTime - o, y.viewHandler.addWaitTime()), this.hasChatStarted(this.visitorHasMessaged || this.agentHasMessaged)
                }, je.prototype.handleIndicator = function() {
                    y.viewHandler.indicator.show(), k.mobileBrowserName && (y.viewHandler.hasChatStarted = !0)
                }, je.prototype.handleMessageFromServer = function(e) {
                    var t = null;
                    if (e.md && e.md.ao) return S.chatVersion = e.cver;
                    if ("offline" === B.pageStatus()) {
                        if ("a" !== e.ut) return;
                        B.pageStatus("online")
                    }
                    if (!S.chatSynced) return S.chatBuffer.push(e);
                    this.hasChatEnded && this.startNewChat(), "WEBRTC_CALL" === e.m && e.md && e.md.webrtc ? this.hasWebRTCall = !0 : "CHAT_ENDED" !== e.m || this.hasChatEnded ? ("v" === e.ut && "c" === e.t && y.viewHandler.addWaitTime(), E.isPopup || "c" !== e.t || y.viewHandler.isMaximized || "v" === e.ut || E.isEmbedded || !k.mobileBrowserName || (y.viewHandler.hasChatStarted = !0), S.chatVersion = e.cver, "s" === e.ut || "c" !== e.t || this.hasChatStarted() || (this.hasChatStarted(!0), d.triggerApiHandlers("onChatStarted", {
                        chatId: S.chatId
                    })), "c" === e.t ? "a" === e.ut ? e.md && e.md.file ? d.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + e.md.file.name) : d.triggerApiHandlers("onChatMessageAgent", e.m) : "s" === e.ut && d.triggerApiHandlers("onChatMessageSystem", e.m) : "n" === e.t && ("AGENT_JOIN_CONVERSATION" === e.m ? (e.md && e.md.pi && e.md.pi.length && (t = "https://s3.amazonaws.com/talk-pi/" + e.md.pi), d.triggerApiHandlers("onAgentJoinChat", {
                        name: e.n,
                        position: e.md.pst,
                        image: t,
                        id: e.uid
                    })) : "AGENT_LEFT_CONVERSATION" === e.m && d.triggerApiHandlers("onAgentLeaveChat", {
                        name: e.n,
                        id: e.uid
                    })), this.prepareMessage(e, !1), y.scheduler.calculate()) : (S.chatId = e.md.nchid, this.endChat(e.md.cev))
                }, je.prototype.prepareMessage = function(e, t, i, n) {
                    var a, o, r, s, l = !0;
                    "n" === e.t && "v" === e.ut ? "VISITOR_RATING" === e.m && this.changeRating(e.md.rt, !0) : ("v" === e.ut ? (a = T.displayName(), o = e.uid) : (a = e.n, "a" === e.ut ? o = S.profiles[e.md.rsc] : "s" === e.ut && e.md && (s = e.md.pi)), "n" !== e.t || "AGENT_JOIN_CONVERSATION" !== e.m && "AGENT_LEFT_CONVERSATION" !== e.m || (l = !1, y.agents.updateAgentPresence(e.m, e.md, e.n, e.md.rsc, !i)), l && (r = r || this.parseText(e.m), void 0 === t && (t = !0), e.timeStamp = new Date(e.co).getTime(), e.messageId = y.viewHandler.appendMessage({
                        message: r,
                        name: a,
                        type: e.t,
                        time: e.co,
                        data: e.md,
                        isPending: !1,
                        senderType: e.ut,
                        ownerId: o,
                        dontPlaySound: t,
                        profileImg: s,
                        reDisplay: n,
                        timeStamp: e.timeStamp
                    }), n || S.chatOrder++, this.messages[S.chatOrder] = e))
                }, je.prototype.parseText = function(e) {
                    if (e) return e = e.replace(M.regLineBreaks, M.br), this.createUrl(e.split(/\s/), " ")
                }, je.prototype.createUrl = function(e, t) {
                    function i(e) {
                        return y.chatHandler.parseUrl(e)
                    }

                    function n(e) {
                        return y.chatHandler.parseEmail(e)
                    }
                    for (var a, o = 0, r = e.length; o < r; o++) - 1 !== e[o].indexOf(M.br) ? (a = e[o].split(M.regBr), e[o] = this.createUrl(a, M.br)) : e[o].match(M.regEmailMatch) ? e[o] = e[o].replace(M.regEmailMatch, n) : (e[o] = e[o].replace(M.regMatchUrl, i), e[o] = e[o].replace(M.regMatchIp, i));
                    return e.join(t)
                }, je.prototype.parseUrl = function(e) {
                    var t, i = "";
                    return void 0 !== ie && ie.unifyUnicode(e) !== e ? e : (e.match(M.regEmailMatch) && (i = "mailto:"), "mailto:" === i ? (-1 !== (t = e.match(M.regEmailMatch)[0]).indexOf("mailto") && (i = ""), e.replace(M.regEmailMatch, '<a href="' + (i + t) + '" title="' + (i + t) + '" style="word-wrap:break-word; white-space:normal;>' + t + "</a> ")) : (0 !== e.toLowerCase().indexOf("http") && 0 !== e.toLowerCase().indexOf("ftp") && (i = "http://"), '<a target="_blank" href="' + (i + e) + '" title="' + (i + e) + '" style="word-wrap:break-word; white-space:normal;">' + e + "</a> "))
                }, je.prototype.parseEmail = function(e) {
                    var t = "";
                    return void 0 !== ie && ie.unifyUnicode(e) !== e ? e : (-1 === e.indexOf("mailto") && (t = "mailto:"), '<a href="' + (t + e) + '" title="' + (t + e) + '">' + e + "</a> ")
                }, je.prototype.sendTextPreview = function(e) {
                    var t, i = this,
                        n = y.eventHandler.getTargetElement(e);
                    if (13 === e.keyCode && !e.shiftKey && !k.mobileBrowserName) return y.eventHandler.cancelEvent(e), t = M.trim(n.value), n.value = "", this.sendMessage(t);
                    !this.keyDownTimeout && E.showVisitorTyping() && (this.keyDownTimeout = setTimeout(function() {
                        t = M.trim(n.value), void 0 !== ie && (t = ie.toShort(t)), y.socketManager.sendToConnector("notifyMessagePreview", t), clearTimeout(i.keyDownTimeout), i.keyDownTimeout = 0
                    }, 1e3))
                }, je.prototype.sendMessage = function(e, t, i) {
                    var n = (new Date).getTime();
                    if (e = M.trim(e), clearTimeout(this.keyDownTimeout), this.keyDownTimeout = 0, !e) return !!i && i();
                    void 0 !== ie && (e = ie.toShort(e)), this.previousText && this.previousTextTime && this.previousText === e && n - this.previousTextTime < 500 && y.loggingHandler.logIncident("Double message occured", {
                        previousText: this.previousText,
                        currentText: e,
                        currentT: n,
                        previousT: this.previousTextTime
                    }), this.previousTextTime = n, this.previousText = e, t = !!t, t = y.viewHandler.appendMessage({
                        message: this.parseText(M.rawEncode(e)),
                        name: T.displayName(),
                        type: "c",
                        time: new Date,
                        isPending: !0,
                        senderType: "v",
                        ownerId: T.visitorId,
                        dontPlaySound: t
                    }), this.sendMessageToServer(e, t, i)
                }, je.prototype.sendMessageToServer = function(n, a, o) {
                    var r, s = this;
                    o = o || function(e) {
                        y.viewHandler.handleAcknowledgment(e)
                    }, y.socketManager.sendToConnector("sendChatMessage", n, function(e, t, i) {
                        e || (r = ++S.chatOrder, s.messages[r] = {
                            ut: "v",
                            t: "c",
                            m: M.rawEncode(n),
                            co: t,
                            messageId: a,
                            uid: T.visitorId
                        }, S.chatVersion = i, s.hasChatStarted() || "offline" === B.pageStatus() || (s.hasChatStarted(!0), d.triggerApiHandlers("onChatStarted", {
                            chatId: S.chatId
                        })), d.triggerApiHandlers("onChatMessageVisitor", n)), o({
                            error: e,
                            messageId: a,
                            order: r
                        })
                    })
                }, je.prototype.conversationUpdate = function(e) {
                    var t, i = (e = e || {}).cver || 0,
                        n = e.c || [],
                        a = S.chatBuffer;
                    if (S.chatSynced = !0, !(S.chatVersion >= i)) {
                        for (e = 0, t = a.length; e < t; e++) a[e].cver > i && n.push(a[e]);
                        for (e = 0, t = n.length; e < t; e++)(a = n[e]).md && a.md.ao || this.prepareMessage(a, !1);
                        this.visitorHasMessaged && !this.agentHasMessaged && E.showWaitTime && y.viewHandler.addWaitTime(), S.chatVersion = i, this.isScrollbar = y.viewHandler.isChatScrollbar(), y.viewHandler.scrollToBottom()
                    }
                }, je.prototype.handleAgentTyping = function(e) {
                    var t = S.profiles[e];
                    t && S.agentProfiles[t] && !this.agentsTyping[e] && (this.agentsTyping[e] = !0, this.agentProfilesTyping[t] ? this.agentProfilesTyping[t]++ : (this.agentProfilesTyping[t] = 1, y.viewHandler.appendAgentIsTypingElement(t)))
                }, je.prototype.handleAgentStoppedTyping = function(e) {
                    var t = S.profiles[e];
                    this.agentsTyping[e] && delete this.agentsTyping[e], !this.agentProfilesTyping[t] || 0 < --this.agentProfilesTyping[t] || (delete this.agentProfilesTyping[t], y.viewHandler.removeAgentTypingElement(t))
                }, je.prototype.changeRating = function(e, t) {
                    S.rating() === e && (e = 0), S.rating(e), t || (y.socketManager.sendToConnector("setRating", e), d.triggerApiHandlers("onChatSatisfaction", S.rating()))
                }, je.prototype.toggleSound = function(e) {
                    var t = !E.soundOn();
                    void 0 !== e && (t = e), E.soundOn(t), void 0 === e && y.socketManager.sendToConnector("toggleSound", t)
                }, je.prototype.clearChatMessages = function() {
                    this.agentHasMessaged = this.visitorHasMessaged = !1, this.messageBuffer = [], this.messages = {}, this.agentsTyping = [], this.agentProfilesTyping = [], this.lastMessageOwner = null, S.chatOrder = 0, S.chatSynced = !1, S.chatBuffer = []
                }, je.prototype.startNewChat = function() {
                    this.clearChatMessages(), y.viewHandler.removeWaitTime(), y.viewHandler.resetView(), y.viewHandler.handleRestartChat(), S.chatSynced = !0, k.mobileBrowserName || ("max" === B.chatWindowState() ? y.viewHandler.maximizeWidget() : y.viewHandler.minimizeWidget()), this.hasChatEnded = !1
                }, je.prototype.endChat = function(e) {
                    y.viewHandler.handleEndChat(), y.agents.clearAgents(), this.hasChatEnded = !0, this.hasChatStarted(!1), S.chatEndVersion = e, d.triggerApiHandlers("onChatEnded")
                }, je.prototype.sendFileMessage = function(n) {
                    var a = this,
                        o = {
                            fileName: n.filename,
                            name: n.name,
                            type: n.extension,
                            mimeType: n.mimeType,
                            size: n.size
                        };
                    y.socketManager.sendToConnector("fileUploadMessage", o, function(e, t, i) {
                        e || (y.viewHandler.fileUploaded(n.handle), o.fileName = M.rawEncode(o.fileName), messageId = y.viewHandler.appendMessage({
                            message: "FILE",
                            name: T.displayName(),
                            type: "c",
                            time: t,
                            isPending: !1,
                            senderType: "v",
                            ownerId: T.visitorId,
                            dontPlaySound: !0,
                            data: {
                                file: o
                            }
                        }), chatOrder = ++S.chatOrder, a.messages[chatOrder] = {
                            ut: "v",
                            t: "c",
                            m: "FILE",
                            co: t,
                            messageId: messageId,
                            uid: T.visitorId,
                            md: {
                                file: o
                            }
                        }, S.chatVersion = i, d.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + o.name))
                    })
                }, je.prototype.isChatOngoing = function() {
                    return !this.hasChatEnded && this.visitorHasMessaged && 0 < y.agents.totalAgents()
                }, je.prototype.isVisitorEngaged = function() {
                    return !this.hasChatEnded && this.visitorHasMessaged
                }, je.prototype.triggerEndChat = function() {
                    var i = this;
                    y.socketManager.sendToConnector("endVisitorChat", {}, function(e, t) {
                        e || (S.chatId = t.nextChatId, i.endChat(t.chatEndVersion))
                    })
                }, je.prototype.getMessageObjectById = function(e) {
                    var t, i = null;
                    for (t in this.messages)
                        if (this.messages[t].messageId === e) {
                            i = this.messages[t];
                            break
                        } return i
                };

                function qe() {
                    this.agentsCount = 0, this.totalAgents = c.observable(0)
                }
                qe.prototype.updateAgentPresence = function(e, t, i, n, a) {
                    if (!E.showAgentBar) return !0;
                    if ("AGENT_JOIN_CONVERSATION" !== e && "AGENT_LEFT_CONVERSATION" !== e) return !1;
                    switch (e) {
                        case "AGENT_JOIN_CONVERSATION":
                            return this.addAgentToList(t, i, n, a);
                        case "AGENT_LEFT_CONVERSATION":
                            return this.removeAgentFromList(t, n, a)
                    }
                }, qe.prototype.addAgentToList = function(e, t, i, n) {
                    var a = S.agents[i];
                    if (a) {
                        if (!(a.seq.time < e.seq.time || a.seq.time === e.seq.time && a.seq.inc < e.seq.inc)) return !1;
                        if (a.seq = e.seq, a.pid === e.pid) return !1;
                        this.changeAgentProfile(a.pid, n), a.pid = e.pid, S.profiles[i] = e.pid
                    } else S.agents[i] = e, S.profiles[i] = e.pid;
                    return !!e.pid && (this.totalAgents(this.totalAgents() + 1), void 0 !== S.agentProfiles[e.pid] ? (S.agentProfiles[e.pid].pi = e.pi, S.agentProfiles[e.pid].count++, !1) : (t = {
                        pi: e.pi,
                        pst: e.pst || "",
                        pid: e.pid,
                        n: t,
                        count: 1
                    }, S.agentProfiles[e.pid] = t, n && y.viewHandler.appendAgent(t), !0))
                }, qe.prototype.changeAgentProfile = function(e, t) {
                    var i = S.agentProfiles[e];
                    this.decrementProfileCount(e, t) && t && (i = {
                        message: y.languageParser.translate("chat", "AGENT_LEFT_CONVERSATION", {
                            n: "<b>" + i.n + "</b>"
                        }),
                        name: "",
                        type: "n",
                        time: new Date,
                        isPending: !1,
                        senderType: "a",
                        ownerId: "",
                        dontPlaySound: !0
                    }, S.chatOrder++, y.chatHandler.messages[S.chatOrder] = i, y.viewHandler.appendMessage(i))
                }, qe.prototype.removeAgentFromList = function(e, t, i) {
                    var n = S.agents[t];
                    return n ? (t = n.pid, (n.seq.time < e.seq.time || n.seq.time === e.seq.time && n.seq.inc < e.seq.inc) && (n.seq = e.seq, n.pid = null, this.totalAgents(this.totalAgents() - 1), this.decrementProfileCount(t, i))) : (S.agents[t] = e, !1)
                }, qe.prototype.decrementProfileCount = function(e, t) {
                    var i = S.agentProfiles[e];
                    if (i) return i.count--, i.count < 1 && (delete S.agentProfiles[e], t && y.viewHandler.removeAgent(e), !0)
                }, qe.prototype.clearAgents = function() {
                    this.agentsCount = 0, this.totalAgents(0), S.agentProfiles = {}, S.agents = {}, S.profiles = {}, y.viewHandler.clearAgentFooter(), y.viewHandler.clearAgentHeader(), y.viewHandler.closeAgentList()
                };

                function Ge() {
                    var e = this;
                    this.stack = [], this.socketConnector = new ee, this.events = {}, y.eventEmitter.on("socketReady", function() {
                        e.clearStack(), y.viewHandler && y.visitorHandler.sendNavigationEvent()
                    })
                }
                Ge.prototype.initConnector = function() {
                    this.socketConnector.init()
                }, Ge.prototype.sendToConnector = function(t, i, e) {
                    if (s.connected)
                        if (void 0 !== e || "function" == typeof i) this.safeCallback(t, i, e);
                        else try {
                            this.socketConnector.emit(t, i, e)
                        } catch (e) {
                            g.handleError("Unable to emit to socket connector in sendToConnector for command : " + t + " with data :" + JSON.stringify(i), e.fileName, e.lineNumber, e.stack)
                        } else this.addToStack(t, i, e)
                }, Ge.prototype.addToStack = function(e, t, i) {
                    "sendChatMessage" === e && delete this.events.notifyMessagePreview, "notifyMessagePreview" === e ? this.events[e] = {
                        command: e,
                        data: t,
                        callback: i
                    } : this.stack.push({
                        command: e,
                        data: t,
                        callback: i
                    })
                }, Ge.prototype.clearStack = function() {
                    var t = this;
                    for (var e in this.stack.forEach(function(e) {
                            t.sendToConnector(e.command, e.data, e.callback)
                        }), this.events) t.sendToConnector(t.events[e].command, t.events[e].data, t.events[e].callback);
                    this.stack = [], this.events = {}
                }, Ge.prototype.safeCallback = function(t, i, e) {
                    var n, a;
                    "function" == typeof i && (e = i, i = null), n = setTimeout(function() {
                        throw e(!0), Error("Socket server did not execute the callback for " + t + " with data : " + JSON.stringify(i))
                    }, 35e3), a = function() {
                        clearTimeout(n), a = function() {}, e.apply(null, arguments)
                    };
                    try {
                        null === i ? this.socketConnector.emit(t, a) : this.socketConnector.emit(t, i, a)
                    } catch (e) {
                        g.handleError("Unable to emit to socket connector in safeCallback for command : " + t + " with data :" + JSON.stringify(i), e.fileName, e.lineNumber, e.stack)
                    }
                }, Ge.prototype.disconnectConnector = function() {
                    this.socketConnector.disconnectSocket()
                }, Ge.prototype.connectorListeningOn = function(e) {
                    return 0 !== this.socketConnector.listeners(e).length
                }, Ge.prototype.isForcedDisconnect = function() {
                    return this.socketConnector.forceDisconnected
                };

                function Ye() {
                    this.started = this.maximize = this.isDocumentReady = !1, this.previousSessionKey = null, this.waitingForLanguage = !1, this.startTime = s.startTime, this.versionReloadTimeout = null, this.dataIsReady = this.viewIsReady = !1
                }
                Ye.prototype.load = function() {
                    var t = this;
                    I.pageId = $_Tawk_AccountKey, E.widgetId = $_Tawk_WidgetId, void 0 !== I.pageId && void 0 !== E.widgetId && (r.processSettings(s.widgetSettings), this.init(), this.isDocumentReady || (y.eventHandler.listen(document, "DOMContentLoaded", function() {
                        t.init()
                    }, "domloaded"), y.eventHandler.listen(document, "readystatechange", function() {
                        ("complete" === document.readyState || "interactive" === document.readyState && document.body) && t.init()
                    }, "domstatechange"), y.eventHandler.listen(h, "load", function() {
                        t.init()
                    }, "windowload")), y.eventEmitter.on("removeWidget", function(e) {
                        t.removeWidget()
                    }), y.eventEmitter.on("submitConsent", function(e) {
                        t.registerWithConsent()
                    }))
                }, Ye.prototype.init = function() {
                    var e, t;
                    "XMLHttpRequest" in h && "withCredentials" in new XMLHttpRequest && p.cookieEnabled && !this.isDocumentReady && (this.isDocumentReady = !0, !(t = M.parseQueryString()).$_tawk_beacon && "operamini" !== k.mobileBrowserName) && ((e = M.getReloadedScript()) && (e = M.parseQueryString(e.src), B.restarted = e.restarted, this.maximize = e.maximized), (d = {
                        disableSound: !!Tawk_API.disableSound,
                        embedded: Tawk_API.embedded || null,
                        visitor: Tawk_API.visitor || null,
                        disableMobileBackHistory: !!Tawk_API.disableMobileBackHistory,
                        isPopup: !!Tawk_API.isPopup,
                        onBeforeLoad: {
                            eventName: "tawkBeforeLoad",
                            func: Tawk_API.onBeforeLoad
                        },
                        onLoad: {
                            eventName: "tawkLoad",
                            func: Tawk_API.onLoad
                        },
                        onStatusChange: {
                            eventName: "tawkStatusChange",
                            func: Tawk_API.onStatusChange
                        },
                        onChatMaximized: {
                            eventName: "tawkChatMaximized",
                            func: Tawk_API.onChatMaximized
                        },
                        onChatMinimized: {
                            eventName: "tawkChatMinimized",
                            func: Tawk_API.onChatMinimized
                        },
                        onChatHidden: {
                            eventName: "tawkChatHidden",
                            func: Tawk_API.onChatHidden
                        },
                        onChatStarted: {
                            eventName: "tawkChatStarted",
                            func: Tawk_API.onChatStarted
                        },
                        onChatEnded: {
                            eventName: "tawkChatEnded",
                            func: Tawk_API.onChatEnded
                        },
                        onPrechatSubmit: {
                            eventName: "tawkPrechatSubmit",
                            func: Tawk_API.onPrechatSubmit
                        },
                        onOfflineSubmit: {
                            eventName: "tawkOfflineSubmit",
                            func: Tawk_API.onOfflineSubmit
                        },
                        onChatMessageVisitor: {
                            eventName: "tawkChatMessageVisitor",
                            func: Tawk_API.onChatMessageVisitor
                        },
                        onChatMessageAgent: {
                            eventName: "tawkChatMessageAgent",
                            func: Tawk_API.onChatMessageAgent
                        },
                        onChatMessageSystem: {
                            eventName: "tawkChatMessageSystem",
                            func: Tawk_API.onChatMessageSystem
                        },
                        onAgentJoinChat: {
                            eventName: "tawkAgentJoinChat",
                            func: Tawk_API.onAgentJoinChat
                        },
                        onAgentLeaveChat: {
                            eventName: "tawkAgentLeaveChat",
                            func: Tawk_API.onAgentLeaveChat
                        },
                        onChatSatisfaction: {
                            eventName: "tawkChatSatisfaction",
                            func: Tawk_API.onChatSatisfaction
                        },
                        onVisitorNameChanged: {
                            eventName: "tawkVisitorNameChanged",
                            func: Tawk_API.onVisitorNameChanged
                        },
                        onFileUpload: {
                            eventName: "tawkFileUpload",
                            func: Tawk_API.onFileUpload
                        },
                        onTagsUpdated: {
                            eventName: "tawkTagsUpdated",
                            func: Tawk_API.onTagsUpdated
                        },
                        onUnreadCountChanged: {
                            eventName: "tawkUnreadCountChanged"
                        },
                        triggerApiHandlers: function(e, t) {
                            var i = d[e];
                            if (void 0 !== i) {
                                if ("onBeforeLoad" === e) {
                                    if (Tawk_API.onBeforeLoaded) return;
                                    Tawk_API.onBeforeLoaded = !0
                                } else if ("onLoad" === e) {
                                    if (Tawk_API.onLoaded) return;
                                    Tawk_API.onLoaded = !0
                                }
                                if (this.dispatch(i.eventName, t), "function" == typeof i.func) try {
                                    i.func(t)
                                } catch (e) {}
                            }
                        },
                        dispatch: function(e, t) {
                            var i;
                            e && (i = "function" == typeof h.CustomEvent ? new CustomEvent(e, {
                                detail: t
                            }) : new y.CustomEventIE(e, {
                                detail: t
                            }), h.dispatchEvent(i))
                        }
                    }).isPopup && (B.transferKey = t.$_tawk_tk, B.sessionKey = t.$_tawk_sk, E.isPopup = !0), d.embedded && (E.isEmbedded = !0, k.mobileBrowserName = null), k.mobileBrowserName ? (E.isPopup ? y.viewHandler = new ze : this.initRenderer(k.mobileBrowserName), y.formHandler = new we) : (y.formHandler = new we, y.viewHandler = new Ie), y.viewHandler && (y.sessionHandler.setVisitorAttributes(), d.triggerApiHandlers("onBeforeLoad"), this.bootStrap()))
                }, Ye.prototype.bootStrap = function() {
                    var e = this;
                    this.dataIsReady = this.viewIsReady = !1, setTimeout(function() {
                        y.viewHandler.begin(), e.viewIsReady = !0, e.setupDone()
                    }, 0), setTimeout(function() {
                        a.register()
                    }, 0)
                }, Ye.prototype.initRenderer = function(e) {
                    switch (e) {
                        case "chrome":
                            y.viewHandler = new Be(e);
                            break;
                        case "safari":
                            y.viewHandler = new Ne(e);
                            break;
                        case "opera":
                            y.viewHandler = new Re(e);
                            break;
                        case "android":
                            y.viewHandler = new He(e);
                            break;
                        case "android2.3":
                            y.viewHandler = new Pe(e);
                            break;
                        case "android2":
                            y.viewHandler = new Ae(e);
                            break;
                        case "firefox":
                            y.viewHandler = new Me(e);
                            break;
                        case "ie":
                            y.viewHandler = new(k.version < 10 ? Ae : Fe)(e);
                            break;
                        case "blackberry":
                        case "nokia":
                            y.viewHandler = new Ae(e);
                            break;
                        case "uc":
                            y.viewHandler = new He(e)
                    }
                    y.viewHandler && y.viewHandler.init()
                }, Ye.prototype.begin = function(e) {
                    a.registerStarted = !1, a.clearTimers(), a.registerTime = (new Date).getTime() - a.registerStart, a.registerStart = null, e.error ? "USER_ERROR" === e.error || "SERVER_DOWN" === e.error ? this.hideWidget() : a.retryRegister() : (y.activityManager.initActivityReset(), this.started ? this.reinited(e) : (this.started = !0, this.extractRegisterData(e), this.dataIsReady = !0, this.setupDone()))
                }, Ye.prototype.extractRegisterData = function(e) {
                    e.wdgt && (e.wdgt.lc !== s.widgetSettings.lc && (this.waitingForLanguage = !0, M.insertScript("https://static-v.tawk.to/694/languages/" + e.wdgt.lc + ".js")), r.processSettings(e.wdgt)), e.rcf && E.consentOption ? (this.needConsent = !0, E.showConsentForm = !0) : (this.needConsent = !1, E.showConsentForm = !1), "max" !== E.onClickAction || k.mobileBrowserName || (this.maximize = "max" === e.cw, B.chatWindowState(e.cw)), B.criticalVersion = e.cjsv || 0, B.visitorSocketServer = e.vss, B.sessionKey = e.sk, B.transferKey = e.tk, B.transferedSession = !!e.ts, B.serverVersion = e.jsv || 0, this.needConsent || (y.visitorHandler.updateVisitorUUID(e), y.visitorHandler.updateVisitorInformation(e)), E.soundOn() && E.soundOn(e.sdo), e.wl && (E.key = M.h(e.wl.label)), E.scheduleTimezone = e.wstz, B.prechatFormSubmitted(!!e.pcfs), B.departments = M.isArray(e.dptst) ? e.dptst.reverse() : [], B.pageStatusVersion = e.asver || 0, B.waitTime = e.ewt ? 1e3 * e.ewt : 6e4, I.tawkId = e.twid, I.pageName(M.rawDecode(e.pgn)), B.pageStatus(e.ast || "offline"), B.chatBubbleClosed(!!e.bblc), S.chatVersion = e.cver || 0, S.chatDepartment = e.dpt || "any", S.chatHistory = e.c || [], S.chatId = e.chid, E.webRTCSettings(e.webrtc), B.lastMessageTimestamp = e.lmst
                }, Ye.prototype.initBuildChat = function() {
                    y.chatHandler.parseHistory(), this.showWidget(), this.needConsent || (y.socketManager.initConnector(), delete s.init), s.ready = !0, d.triggerApiHandlers("onLoad")
                }, Ye.prototype.reinited = function(e) {
                    var t = B.sessionKey;
                    this.extractRegisterData(e), t !== e.sk ? (y.chatHandler.clearChatMessages(), y.viewHandler.resetView(), y.agents.clearAgents()) : (B.visitorSocketServer = e.vss, B.sessionKey = e.sk, B.transferKey = e.tk, B.transferedSession = !!e.ts, B.serverVersion = e.jsv || 0, y.visitorHandler.updateVisitorUUID(e)), y.scheduler.setup(), y.viewHandler.updateViewByStatus(B.pageStatus()), y.chatHandler.parseHistory(!0), y.socketManager.initConnector()
                }
                //ckzt
                , Ye.prototype.criticalRefresh = function(e, t, i) {
                    // var n = this,
                    //     a = (new Date).getTime(),
                    //     o = "https://embed.tawk.to/" + I.pageId + "/" + $_Tawk_WidgetId + "?refresh=true&";
                    // if (E.isPopup) return h.location.reload(!!t);
                    // this.dataIsReady = this.viewIsReady = !1, this.removeWidget(), t && (o += "restarted=true&"), i && (o += "maximized=true&"), o += "v=" + e || B.serverVersion || B.currentVersion, delete s.downloaded, M.insertScript(o, "TawkScript-" + a);
                    // var r = setInterval(function() {
                    //     h.$_Tawk.startTime !== n.startTime && (y = null, clearInterval(r), clearTimeout(n.versionReloadTimeout))
                    // }, 200)
                }
                , Ye.prototype.removeWidget = function() {
                    var e;
                    y && y.viewHandler && y.viewHandler.iframeContainer && (e = document.getElementById(y.viewHandler.iframeContainer.elementId)), a.clearTimers(), y.eventHandler.clearEvents(), y.activityManager.cleanUp(), y.socketManager.disconnectConnector(), y.eventEmitter.removeAllListeners(), y.scheduler.cleanUp(), y.viewHandler.messagePreview && y.viewHandler.messagePreview.hide(), e && e.parentNode.removeChild(e)
                }, Ye.prototype.setupDone = function(e) {
                    e && (y.languageParser.language = s.language, this.waitingForLanguage = !1), this.viewIsReady && this.dataIsReady && !this.waitingForLanguage && this.initBuildChat()
                }, Ye.prototype.showWidget = function() {
                    y.scheduler.setup(), !E.isPopup && E.hideWidgetOnLoad || y.viewHandler.show()
                }, Ye.prototype.hideWidget = function() {
                    y && y.viewHandler && y.viewHandler.hideWidget()
                }, Ye.prototype.registerWithConsent = function() {
                    this.maximize = !0, $.storeSessionInformation(!1, "cf"), a.register()
                }, s.languageUpdater = function() {
                    if (y && y.main && y.main.waitingForLanguage) {
                        y.main.setupDone(!0);
                        try {
                            y.eventEmitter.emit("localeChanged"), M.updateFonts()
                        } catch (e) {
                            g.handleError("Unable to emit locale changed", e.fileName, e.lineNumber, e.stack)
                        }
                    }
                };

                function Xe(e, t) {
                    this.language = e, this.notFoundCallback = "function" == typeof t ? t : function() {}
                }
                var Qe, Ke, $e;
                Xe.prototype.translate = function(e, t, i, n) {
                    var a, o = [],
                        r = this.language || n;
                    if (!r[e]) return this.notFoundCallback(Error("Missing context : {" + e + "}, {" + t + "}")), t;
                    if (!(n = r[e][t])) return this.notFoundCallback(Error("Missing key : {" + e + "}, {" + t + "}")), t;
                    if (t = n.pluralVars ? n.pluralVars.length : 0, a = n.vars ? n.vars.length : 0, 0 < t) {
                        for (e = 0; e < t; e++) o.push(r.pluralFormFunction(i[n.pluralVars[e]]));
                        for (o = n.message[o.join("_")], e = 0; e < t; e++) o = o.replace(RegExp("#" + n.pluralVars[e], "g"), this.escapeStringReplacePlacement(i[n.pluralVars[e]]))
                    } else o = n.message;
                    if (0 < a)
                        for (e = 0; e < a; e++) o = o.replace(RegExp("#" + n.vars[e], "g"), this.escapeStringReplacePlacement(i[n.vars[e]]));
                    return o
                }, Xe.prototype.escapeStringReplacePlacement = function(e) {
                    return "string" == typeof e ? e.replace(/\$/g, "$$$") : e
                }, Xe.prototype.hasTranslation = function(e, t, i) {
                    return !!((i = i || this.language) && i[e] && i[e][t])
                }, "undefined" != typeof module && (module.exports = Xe), y.eventEmitter = new EventEmitter, y.eventEmitter.on("error", function(e) {
                    g.handleError("EventEmitter on error", e.fileName, e.lineNumber, e.stack)
                }), y.loggingHandler = new W, y.eventHandler = new V, y.activityManager = new Le, y.scheduler = new Oe, y.main = new Ye, y.languageParser = new Xe(s.language), y.socketManager = new Ge, y.sessionHandler = new Ve, y.chatHandler = new je, y.agents = new qe, y.visitorHandler = new Ue, y.audioPlayer = new K, a = new De, y.fileUploadHandler = new J, void 0 !== s.downloaded ? (y.eventHandler.clearEvents(), y.eventEmitter.removeAllListeners(), y = null) : (s.downloaded = !0, void 0 !== h.Prototype && "string" == typeof h.Prototype.Version && parseFloat(h.Prototype.Version.substr(0, 3), 10) < 1.7 && void 0 !== Array.prototype.toJSON && (Qe = JSON.stringify, JSON.stringify = function(e) {
                    var t = Array.prototype.toJSON;
                    return delete Array.prototype.toJSON, e = Qe(e), Array.prototype.toJSON = t, e
                }), Ke = h.history.pushState, $e = h.history.replaceState, h.history.pushState = function(e, t, i) {
                    Ke.apply(history, arguments);
                    var n = i && "string" == typeof i ? i.indexOf("#max-widget") : -1;
                    y && y.visitorHandler && -1 === n && y.visitorHandler.sendNavigationEvent()
                }, h.history.replaceState = function(e, t, i) {
                    $e.apply(history, arguments), y && y.visitorHandler && y.visitorHandler.sendNavigationEvent()
                }, y.main.load())
            } catch (e) {
                if (!g) throw Error("tawk : " + e.message);
                g.handleError(e.message, "tawk.js", e.lineNumber || e.line, e.stack)
            }

            function Je(e) {
                for (var t, i, n = [], a = 0, o = e.length; a < o;) 55296 <= (t = e.charCodeAt(a++)) && t <= 56319 && a < o ? 56320 == (64512 & (i = e.charCodeAt(a++))) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), a--) : n.push(t);
                return n
            }

            function Ze(e) {
                for (var t, i, n, a, o, r, s, l, d = [], c = (e = Je(e)).length, p = 128, h = 72, m = t = 0; m < c; ++m)(r = e[m]) < 128 && d.push(b(r));
                for ((i = n = d.length) && d.push("-"); i < c;) {
                    for (a = u, m = 0; m < c; ++m) p <= (r = e[m]) && r < a && (a = r);
                    if (a - p > v((u - t) / (s = i + 1))) throw new RangeError(f);
                    for (t += (a - p) * s, p = a, m = 0; m < c; ++m) {
                        if ((r = e[m]) < p && ++t > u) throw new RangeError(f);
                        if (r == p) {
                            for (o = t, a = 36; !(o < (r = a <= h ? 1 : h + 26 <= a ? 26 : a - h)); a += 36) l = o - r, o = 36 - r, d.push(b(+(r + l % o + 22 + 75 * (r + l % o < 26)))), o = v(l / o);
                            for (d.push(b(+(o + 22 + 75 * (o < 26)))), h = s, a = 0, t = i == n ? v(t / 700) : t >> 1, t += v(t / h); 455 < t; a += 36) t = v(t / 35);
                            h = v(a + 36 * t / (t + 38)), t = 0, ++i
                        }
                    }++t, ++p
                }
                return d.join("")
            }
        }.call(this, window.$_Tawk)
}(window);