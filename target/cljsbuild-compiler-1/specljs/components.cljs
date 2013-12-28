(ns specljs.components)

(defprotocol SpecComponent
  (install [this description]))

(extend-protocol SpecComponent
  
  LazySeq (install [this description] (doseq [component (seq this)] (install component description)))
  List (install [this description] (doseq [component (seq this)] (install component description)))
  EmptyList (install [this description] (doseq [component (seq this)] (install component description)))
  PersistentVector (install [this description] (doseq [component (seq this)] (install component description)))
  object (install [this description] (comment "Whatever...  Let them pass."))
  )

(deftype Description [name ns parent children charcteristics tags befores before-alls afters after-alls withs with-alls arounds]
  SpecComponent
  (install [this description]
    (reset! (.-parent this) description)
    (swap! (.-children description) conj this))
  Object
  (toString [this] (str "Description: " \" name \")))

(defn new-description [name ns]
  (Description. name ns (atom nil) (atom []) (atom []) (atom #{}) (atom []) (atom []) (atom []) (atom []) (atom []) (atom []) (atom [])))

(deftype Characteristic [name parent body]
  SpecComponent
  (install [this description]
    (reset! (.-parent this) description)
    (swap! (.-charcteristics description) conj this))
  Object
  (toString [this] (str \" name \")))

(defn new-characteristic
  ([name body] (Characteristic. name (atom nil) body))
  ([name description body] (Characteristic. name (atom description) body)))

(deftype Before [body]
  SpecComponent
  (install [this description]
    (swap! (.-befores description) conj this)))

(defn new-before [body]
  (Before. body))

(deftype After [body]
  SpecComponent
  (install [this description]
    (swap! (.-afters description) conj this)))

(defn new-after [body]
  (After. body))

(deftype Around [body]
  SpecComponent
  (install [this description]
    (swap! (.-arounds description) conj this)))

(defn new-around [body]
  (Around. body))

(deftype BeforeAll [body]
  SpecComponent
  (install [this description]
    (swap! (.-before-alls description) conj this)))

(defn new-before-all [body]
  (BeforeAll. body))

(deftype AfterAll [body]
  SpecComponent
  (install [this description]
    (swap! (.-after-alls description) conj this)))

(defn new-after-all [body]
  (AfterAll. body))

(deftype With [name unique-name body value bang]
  SpecComponent
  (install [this description]
    (swap! (.-withs description) conj this))
  
    cljs.core/IDeref
    (-deref [this]
    (when (= ::none @value)
      (reset! value (body)))
    @value))

(defn reset-with [with]
  (reset! (.-value with) ::none)
  (if (.-bang with) (deref with)))

(defn new-with [name unique-name body bang]
  (let [with (With. name unique-name body (atom ::none) bang)]
    (when bang (deref with))
    with))

(deftype WithAll [name unique-name body value bang]
  SpecComponent
  (install [this description]
    (swap! (.-with-alls description) conj this))
  
    cljs.core/IDeref
    (-deref [this]
    (when (= ::none @value)
      (reset! value (body)))
    @value))

(defn new-with-all [name unique-name body bang]
  (let [with-all (WithAll. name unique-name body (atom ::none) bang)]
    (when bang (deref with-all))
    with-all))

(deftype Tag [name]
  SpecComponent
  (install [this description]
    (swap! (.-tags description) conj name)))

(defn new-tag [name]
  (Tag. name))
