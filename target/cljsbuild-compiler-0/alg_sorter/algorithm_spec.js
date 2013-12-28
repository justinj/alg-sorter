goog.provide('alg_sorter.algorithm_spec');
goog.require('cljs.core');
goog.require('alg_sorter.algorithm');
goog.require('alg_sorter.algorithm');
goog.require('specljs.core');
var description__4523__auto___7065 = specljs.components.new_description.call(null,"algorithm","alg-sorter.algorithm-spec");var _STAR_parent_description_STAR_7035_7066 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__4523__auto___7065;
var seq__7037_7067 = cljs.core.seq.call(null,cljs.core.list.call(null,(function (){var description__4523__auto____$1 = specljs.components.new_description.call(null,"moves","alg-sorter.algorithm-spec");var _STAR_parent_description_STAR_7041_7071 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__4523__auto____$1;
var seq__7043_7072 = cljs.core.seq.call(null,cljs.core.list.call(null,specljs.components.new_characteristic.call(null,"returns a seq of moves",((function (_STAR_parent_description_STAR_7041_7071,description__4523__auto____$1){
return (function (){var expected__4603__auto___7076 = cljs.core.PersistentVector.fromArray(["R"], true);var actual__4604__auto___7077 = alg_sorter.algorithm.moves.call(null,"R");if(!(cljs.core._EQ_.call(null,expected__4603__auto___7076,actual__4604__auto___7077)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7076 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7076))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7077 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7077))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto___7078 = cljs.core.PersistentVector.fromArray(["U"], true);var actual__4604__auto___7079 = alg_sorter.algorithm.moves.call(null,"U");if(!(cljs.core._EQ_.call(null,expected__4603__auto___7078,actual__4604__auto___7079)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7078 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7078))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7079 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7079))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto___7080 = cljs.core.PersistentVector.fromArray(["R","U"], true);var actual__4604__auto___7081 = alg_sorter.algorithm.moves.call(null,"R U");if(!(cljs.core._EQ_.call(null,expected__4603__auto___7080,actual__4604__auto___7081)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7080 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7080))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7081 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7081))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto___7082 = cljs.core.PersistentVector.fromArray(["Rw","U"], true);var actual__4604__auto___7083 = alg_sorter.algorithm.moves.call(null,"Rw U");if(!(cljs.core._EQ_.call(null,expected__4603__auto___7082,actual__4604__auto___7083)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7082 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7082))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7083 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7083))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto__ = cljs.core.PersistentVector.fromArray(["Rw2","Uw'"], true);var actual__4604__auto__ = alg_sorter.algorithm.moves.call(null,"Rw2Uw'");if(!(cljs.core._EQ_.call(null,expected__4603__auto__,actual__4604__auto__)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto__))),cljs.core.str(" (using =)")].join('')));
} else
{return null;
}
});})(_STAR_parent_description_STAR_7041_7071,description__4523__auto____$1))
)));var chunk__7044_7073 = null;var count__7045_7074 = 0;var i__7046_7075 = 0;while(true){
if((i__7046_7075 < count__7045_7074))
{var component__4524__auto___7084 = cljs.core._nth.call(null,chunk__7044_7073,i__7046_7075);specljs.components.install.call(null,component__4524__auto___7084,description__4523__auto____$1);
{
var G__7085 = seq__7043_7072;
var G__7086 = chunk__7044_7073;
var G__7087 = count__7045_7074;
var G__7088 = (i__7046_7075 + 1);
seq__7043_7072 = G__7085;
chunk__7044_7073 = G__7086;
count__7045_7074 = G__7087;
i__7046_7075 = G__7088;
continue;
}
} else
{var temp__4092__auto___7089 = cljs.core.seq.call(null,seq__7043_7072);if(temp__4092__auto___7089)
{var seq__7043_7090__$1 = temp__4092__auto___7089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7043_7090__$1))
{var c__3557__auto___7091 = cljs.core.chunk_first.call(null,seq__7043_7090__$1);{
var G__7092 = cljs.core.chunk_rest.call(null,seq__7043_7090__$1);
var G__7093 = c__3557__auto___7091;
var G__7094 = cljs.core.count.call(null,c__3557__auto___7091);
var G__7095 = 0;
seq__7043_7072 = G__7092;
chunk__7044_7073 = G__7093;
count__7045_7074 = G__7094;
i__7046_7075 = G__7095;
continue;
}
} else
{var component__4524__auto___7096 = cljs.core.first.call(null,seq__7043_7090__$1);specljs.components.install.call(null,component__4524__auto___7096,description__4523__auto____$1);
{
var G__7097 = cljs.core.next.call(null,seq__7043_7090__$1);
var G__7098 = null;
var G__7099 = 0;
var G__7100 = 0;
seq__7043_7072 = G__7097;
chunk__7044_7073 = G__7098;
count__7045_7074 = G__7099;
i__7046_7075 = G__7100;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_7041_7071;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__4523__auto____$1);
} else
{}
return description__4523__auto____$1;
})(),(function (){var description__4523__auto____$1 = specljs.components.new_description.call(null,"expand","alg-sorter.algorithm-spec");var _STAR_parent_description_STAR_7047_7101 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__4523__auto____$1;
var seq__7049_7102 = cljs.core.seq.call(null,cljs.core.list.call(null,specljs.components.new_characteristic.call(null,"turns wide turns into normal turns",((function (_STAR_parent_description_STAR_7047_7101,description__4523__auto____$1){
return (function (){var expected__4603__auto__ = cljs.core.PersistentVector.fromArray(["R","x","x","x"], true);var actual__4604__auto__ = alg_sorter.algorithm.expand.call(null,cljs.core.PersistentVector.fromArray(["Lw"], true));if(!(cljs.core._EQ_.call(null,expected__4603__auto__,actual__4604__auto__)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto__))),cljs.core.str(" (using =)")].join('')));
} else
{return null;
}
});})(_STAR_parent_description_STAR_7047_7101,description__4523__auto____$1))
),specljs.components.new_characteristic.call(null,"turns primes and 2's into singles",((function (_STAR_parent_description_STAR_7047_7101,description__4523__auto____$1){
return (function (){var expected__4603__auto___7106 = cljs.core.PersistentVector.fromArray(["R"], true);var actual__4604__auto___7107 = alg_sorter.algorithm.expand.call(null,cljs.core.PersistentVector.fromArray(["R"], true));if(!(cljs.core._EQ_.call(null,expected__4603__auto___7106,actual__4604__auto___7107)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7106 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7106))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7107 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7107))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto__ = cljs.core.PersistentVector.fromArray(["R","R"], true);var actual__4604__auto__ = alg_sorter.algorithm.expand.call(null,cljs.core.PersistentVector.fromArray(["R2"], true));if(!(cljs.core._EQ_.call(null,expected__4603__auto__,actual__4604__auto__)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto__))),cljs.core.str(" (using =)")].join('')));
} else
{return null;
}
});})(_STAR_parent_description_STAR_7047_7101,description__4523__auto____$1))
)));var chunk__7050_7103 = null;var count__7051_7104 = 0;var i__7052_7105 = 0;while(true){
if((i__7052_7105 < count__7051_7104))
{var component__4524__auto___7108 = cljs.core._nth.call(null,chunk__7050_7103,i__7052_7105);specljs.components.install.call(null,component__4524__auto___7108,description__4523__auto____$1);
{
var G__7109 = seq__7049_7102;
var G__7110 = chunk__7050_7103;
var G__7111 = count__7051_7104;
var G__7112 = (i__7052_7105 + 1);
seq__7049_7102 = G__7109;
chunk__7050_7103 = G__7110;
count__7051_7104 = G__7111;
i__7052_7105 = G__7112;
continue;
}
} else
{var temp__4092__auto___7113 = cljs.core.seq.call(null,seq__7049_7102);if(temp__4092__auto___7113)
{var seq__7049_7114__$1 = temp__4092__auto___7113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7049_7114__$1))
{var c__3557__auto___7115 = cljs.core.chunk_first.call(null,seq__7049_7114__$1);{
var G__7116 = cljs.core.chunk_rest.call(null,seq__7049_7114__$1);
var G__7117 = c__3557__auto___7115;
var G__7118 = cljs.core.count.call(null,c__3557__auto___7115);
var G__7119 = 0;
seq__7049_7102 = G__7116;
chunk__7050_7103 = G__7117;
count__7051_7104 = G__7118;
i__7052_7105 = G__7119;
continue;
}
} else
{var component__4524__auto___7120 = cljs.core.first.call(null,seq__7049_7114__$1);specljs.components.install.call(null,component__4524__auto___7120,description__4523__auto____$1);
{
var G__7121 = cljs.core.next.call(null,seq__7049_7114__$1);
var G__7122 = null;
var G__7123 = 0;
var G__7124 = 0;
seq__7049_7102 = G__7121;
chunk__7050_7103 = G__7122;
count__7051_7104 = G__7123;
i__7052_7105 = G__7124;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_7047_7101;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__4523__auto____$1);
} else
{}
return description__4523__auto____$1;
})(),(function (){var description__4523__auto____$1 = specljs.components.new_description.call(null,"derotate","alg-sorter.algorithm-spec");var _STAR_parent_description_STAR_7053_7125 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__4523__auto____$1;
var seq__7055_7126 = cljs.core.seq.call(null,cljs.core.list.call(null,specljs.components.new_characteristic.call(null,"eliminates rotations",((function (_STAR_parent_description_STAR_7053_7125,description__4523__auto____$1){
return (function (){var expected__4603__auto___7130 = cljs.core.PersistentVector.fromArray(["R","U"], true);var actual__4604__auto___7131 = alg_sorter.algorithm.derotate.call(null,cljs.core.PersistentVector.fromArray(["R","U"], true));if(!(cljs.core._EQ_.call(null,expected__4603__auto___7130,actual__4604__auto___7131)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7130 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7130))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7131 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7131))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto___7132 = cljs.core.PersistentVector.fromArray(["R","R","U"], true);var actual__4604__auto___7133 = alg_sorter.algorithm.derotate.call(null,cljs.core.PersistentVector.fromArray(["R","x","R","B"], true));if(!(cljs.core._EQ_.call(null,expected__4603__auto___7132,actual__4604__auto___7133)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7132 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7132))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7133 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7133))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto___7134 = cljs.core.PersistentVector.fromArray(["R","R","U"], true);var actual__4604__auto___7135 = alg_sorter.algorithm.derotate.call(null,cljs.core.PersistentVector.fromArray(["R","x","R","B"], true));if(!(cljs.core._EQ_.call(null,expected__4603__auto___7134,actual__4604__auto___7135)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7134 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7134))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7135 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7135))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto__ = cljs.core.PersistentVector.fromArray(["R","R","U"], true);var actual__4604__auto__ = alg_sorter.algorithm.derotate.call(null,cljs.core.PersistentVector.fromArray(["R","x","x","x","x","x","R","B"], true));if(!(cljs.core._EQ_.call(null,expected__4603__auto__,actual__4604__auto__)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto__))),cljs.core.str(" (using =)")].join('')));
} else
{return null;
}
});})(_STAR_parent_description_STAR_7053_7125,description__4523__auto____$1))
)));var chunk__7056_7127 = null;var count__7057_7128 = 0;var i__7058_7129 = 0;while(true){
if((i__7058_7129 < count__7057_7128))
{var component__4524__auto___7136 = cljs.core._nth.call(null,chunk__7056_7127,i__7058_7129);specljs.components.install.call(null,component__4524__auto___7136,description__4523__auto____$1);
{
var G__7137 = seq__7055_7126;
var G__7138 = chunk__7056_7127;
var G__7139 = count__7057_7128;
var G__7140 = (i__7058_7129 + 1);
seq__7055_7126 = G__7137;
chunk__7056_7127 = G__7138;
count__7057_7128 = G__7139;
i__7058_7129 = G__7140;
continue;
}
} else
{var temp__4092__auto___7141 = cljs.core.seq.call(null,seq__7055_7126);if(temp__4092__auto___7141)
{var seq__7055_7142__$1 = temp__4092__auto___7141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7055_7142__$1))
{var c__3557__auto___7143 = cljs.core.chunk_first.call(null,seq__7055_7142__$1);{
var G__7144 = cljs.core.chunk_rest.call(null,seq__7055_7142__$1);
var G__7145 = c__3557__auto___7143;
var G__7146 = cljs.core.count.call(null,c__3557__auto___7143);
var G__7147 = 0;
seq__7055_7126 = G__7144;
chunk__7056_7127 = G__7145;
count__7057_7128 = G__7146;
i__7058_7129 = G__7147;
continue;
}
} else
{var component__4524__auto___7148 = cljs.core.first.call(null,seq__7055_7142__$1);specljs.components.install.call(null,component__4524__auto___7148,description__4523__auto____$1);
{
var G__7149 = cljs.core.next.call(null,seq__7055_7142__$1);
var G__7150 = null;
var G__7151 = 0;
var G__7152 = 0;
seq__7055_7126 = G__7149;
chunk__7056_7127 = G__7150;
count__7057_7128 = G__7151;
i__7058_7129 = G__7152;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_7053_7125;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__4523__auto____$1);
} else
{}
return description__4523__auto____$1;
})(),(function (){var description__4523__auto____$1 = specljs.components.new_description.call(null,"canonicalize","alg-sorter.algorithm-spec");var _STAR_parent_description_STAR_7059_7153 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__4523__auto____$1;
var seq__7061_7154 = cljs.core.seq.call(null,cljs.core.list.call(null,specljs.components.new_characteristic.call(null,"performs all the operations",((function (_STAR_parent_description_STAR_7059_7153,description__4523__auto____$1){
return (function (){var expected__4603__auto___7158 = cljs.core.PersistentVector.fromArray(["R"], true);var actual__4604__auto___7159 = alg_sorter.algorithm.canonicalize.call(null,"R");if(!(cljs.core._EQ_.call(null,expected__4603__auto___7158,actual__4604__auto___7159)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto___7158 == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto___7158))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto___7159 == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto___7159))),cljs.core.str(" (using =)")].join('')));
} else
{}
var expected__4603__auto__ = cljs.core.PersistentVector.fromArray(["R"], true);var actual__4604__auto__ = alg_sorter.algorithm.canonicalize.call(null,"L");if(!(cljs.core._EQ_.call(null,expected__4603__auto__,actual__4604__auto__)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__4603__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4603__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__4604__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4604__auto__))),cljs.core.str(" (using =)")].join('')));
} else
{return null;
}
});})(_STAR_parent_description_STAR_7059_7153,description__4523__auto____$1))
)));var chunk__7062_7155 = null;var count__7063_7156 = 0;var i__7064_7157 = 0;while(true){
if((i__7064_7157 < count__7063_7156))
{var component__4524__auto___7160 = cljs.core._nth.call(null,chunk__7062_7155,i__7064_7157);specljs.components.install.call(null,component__4524__auto___7160,description__4523__auto____$1);
{
var G__7161 = seq__7061_7154;
var G__7162 = chunk__7062_7155;
var G__7163 = count__7063_7156;
var G__7164 = (i__7064_7157 + 1);
seq__7061_7154 = G__7161;
chunk__7062_7155 = G__7162;
count__7063_7156 = G__7163;
i__7064_7157 = G__7164;
continue;
}
} else
{var temp__4092__auto___7165 = cljs.core.seq.call(null,seq__7061_7154);if(temp__4092__auto___7165)
{var seq__7061_7166__$1 = temp__4092__auto___7165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7061_7166__$1))
{var c__3557__auto___7167 = cljs.core.chunk_first.call(null,seq__7061_7166__$1);{
var G__7168 = cljs.core.chunk_rest.call(null,seq__7061_7166__$1);
var G__7169 = c__3557__auto___7167;
var G__7170 = cljs.core.count.call(null,c__3557__auto___7167);
var G__7171 = 0;
seq__7061_7154 = G__7168;
chunk__7062_7155 = G__7169;
count__7063_7156 = G__7170;
i__7064_7157 = G__7171;
continue;
}
} else
{var component__4524__auto___7172 = cljs.core.first.call(null,seq__7061_7166__$1);specljs.components.install.call(null,component__4524__auto___7172,description__4523__auto____$1);
{
var G__7173 = cljs.core.next.call(null,seq__7061_7166__$1);
var G__7174 = null;
var G__7175 = 0;
var G__7176 = 0;
seq__7061_7154 = G__7173;
chunk__7062_7155 = G__7174;
count__7063_7156 = G__7175;
i__7064_7157 = G__7176;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_7059_7153;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__4523__auto____$1);
} else
{}
return description__4523__auto____$1;
})()));var chunk__7038_7068 = null;var count__7039_7069 = 0;var i__7040_7070 = 0;while(true){
if((i__7040_7070 < count__7039_7069))
{var component__4524__auto___7177 = cljs.core._nth.call(null,chunk__7038_7068,i__7040_7070);specljs.components.install.call(null,component__4524__auto___7177,description__4523__auto___7065);
{
var G__7178 = seq__7037_7067;
var G__7179 = chunk__7038_7068;
var G__7180 = count__7039_7069;
var G__7181 = (i__7040_7070 + 1);
seq__7037_7067 = G__7178;
chunk__7038_7068 = G__7179;
count__7039_7069 = G__7180;
i__7040_7070 = G__7181;
continue;
}
} else
{var temp__4092__auto___7182 = cljs.core.seq.call(null,seq__7037_7067);if(temp__4092__auto___7182)
{var seq__7037_7183__$1 = temp__4092__auto___7182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7037_7183__$1))
{var c__3557__auto___7184 = cljs.core.chunk_first.call(null,seq__7037_7183__$1);{
var G__7185 = cljs.core.chunk_rest.call(null,seq__7037_7183__$1);
var G__7186 = c__3557__auto___7184;
var G__7187 = cljs.core.count.call(null,c__3557__auto___7184);
var G__7188 = 0;
seq__7037_7067 = G__7185;
chunk__7038_7068 = G__7186;
count__7039_7069 = G__7187;
i__7040_7070 = G__7188;
continue;
}
} else
{var component__4524__auto___7189 = cljs.core.first.call(null,seq__7037_7183__$1);specljs.components.install.call(null,component__4524__auto___7189,description__4523__auto___7065);
{
var G__7190 = cljs.core.next.call(null,seq__7037_7183__$1);
var G__7191 = null;
var G__7192 = 0;
var G__7193 = 0;
seq__7037_7067 = G__7190;
chunk__7038_7068 = G__7191;
count__7039_7069 = G__7192;
i__7040_7070 = G__7193;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_7035_7066;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__4523__auto___7065);
} else
{}
