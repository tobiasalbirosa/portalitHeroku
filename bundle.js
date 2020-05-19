(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var unique = require('uniq');
//var WiFiControl = require('wifi-control');
var WiFiControl = require('wifi-control');
//var fs = require('browserify-fs');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];


console.log(unique(data));
/*

WiFiControl.init({
  debug: true,
});


 
//  Initialize wifi-control package with verbose output
WiFiControl.init({
  debug: true,
});

//  Try scanning for access points:
WiFiControl.scanForWiFi( function(err, response) {
  if (err) console.log(err);
  console.log(response);
  alert('wiifi');
});*/
},{"uniq":16,"wifi-control":19}],2:[function(require,module,exports){
'use strict';
module.exports = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	var ret = {};

	for (var key in obj) {
		var val = obj[key];
		ret[val] = key;
	}

	return ret;
};

},{}],3:[function(require,module,exports){
'use strict';
var invertKv = require('invert-kv');
var all = require('./lcid.json');
var inverted = invertKv(all);

exports.from = function (lcidCode) {
	if (typeof lcidCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return inverted[lcidCode];
};

exports.to = function (localeId) {
	if (typeof localeId !== 'string') {
		throw new TypeError('Expected a string');
	}

	return all[localeId];
};

exports.all = all;

},{"./lcid.json":4,"invert-kv":2}],4:[function(require,module,exports){
module.exports={
	"af_ZA": 1078,
	"am_ET": 1118,
	"ar_AE": 14337,
	"ar_BH": 15361,
	"ar_DZ": 5121,
	"ar_EG": 3073,
	"ar_IQ": 2049,
	"ar_JO": 11265,
	"ar_KW": 13313,
	"ar_LB": 12289,
	"ar_LY": 4097,
	"ar_MA": 6145,
	"ar_OM": 8193,
	"ar_QA": 16385,
	"ar_SA": 1025,
	"ar_SY": 10241,
	"ar_TN": 7169,
	"ar_YE": 9217,
	"arn_CL": 1146,
	"as_IN": 1101,
	"az_AZ": 2092,
	"ba_RU": 1133,
	"be_BY": 1059,
	"bg_BG": 1026,
	"bn_IN": 1093,
	"bo_BT": 2129,
	"bo_CN": 1105,
	"br_FR": 1150,
	"bs_BA": 8218,
	"ca_ES": 1027,
	"co_FR": 1155,
	"cs_CZ": 1029,
	"cy_GB": 1106,
	"da_DK": 1030,
	"de_AT": 3079,
	"de_CH": 2055,
	"de_DE": 1031,
	"de_LI": 5127,
	"de_LU": 4103,
	"div_MV": 1125,
	"dsb_DE": 2094,
	"el_GR": 1032,
	"en_AU": 3081,
	"en_BZ": 10249,
	"en_CA": 4105,
	"en_CB": 9225,
	"en_GB": 2057,
	"en_IE": 6153,
	"en_IN": 18441,
	"en_JA": 8201,
	"en_MY": 17417,
	"en_NZ": 5129,
	"en_PH": 13321,
	"en_TT": 11273,
	"en_US": 1033,
	"en_ZA": 7177,
	"en_ZW": 12297,
	"es_AR": 11274,
	"es_BO": 16394,
	"es_CL": 13322,
	"es_CO": 9226,
	"es_CR": 5130,
	"es_DO": 7178,
	"es_EC": 12298,
	"es_ES": 3082,
	"es_GT": 4106,
	"es_HN": 18442,
	"es_MX": 2058,
	"es_NI": 19466,
	"es_PA": 6154,
	"es_PE": 10250,
	"es_PR": 20490,
	"es_PY": 15370,
	"es_SV": 17418,
	"es_UR": 14346,
	"es_US": 21514,
	"es_VE": 8202,
	"et_EE": 1061,
	"eu_ES": 1069,
	"fa_IR": 1065,
	"fi_FI": 1035,
	"fil_PH": 1124,
	"fo_FO": 1080,
	"fr_BE": 2060,
	"fr_CA": 3084,
	"fr_CH": 4108,
	"fr_FR": 1036,
	"fr_LU": 5132,
	"fr_MC": 6156,
	"fy_NL": 1122,
	"ga_IE": 2108,
	"gbz_AF": 1164,
	"gl_ES": 1110,
	"gsw_FR": 1156,
	"gu_IN": 1095,
	"ha_NG": 1128,
	"he_IL": 1037,
	"hi_IN": 1081,
	"hr_BA": 4122,
	"hr_HR": 1050,
	"hu_HU": 1038,
	"hy_AM": 1067,
	"id_ID": 1057,
	"ii_CN": 1144,
	"is_IS": 1039,
	"it_CH": 2064,
	"it_IT": 1040,
	"iu_CA": 2141,
	"ja_JP": 1041,
	"ka_GE": 1079,
	"kh_KH": 1107,
	"kk_KZ": 1087,
	"kl_GL": 1135,
	"kn_IN": 1099,
	"ko_KR": 1042,
	"kok_IN": 1111,
	"ky_KG": 1088,
	"lb_LU": 1134,
	"lo_LA": 1108,
	"lt_LT": 1063,
	"lv_LV": 1062,
	"mi_NZ": 1153,
	"mk_MK": 1071,
	"ml_IN": 1100,
	"mn_CN": 2128,
	"mn_MN": 1104,
	"moh_CA": 1148,
	"mr_IN": 1102,
	"ms_BN": 2110,
	"ms_MY": 1086,
	"mt_MT": 1082,
	"my_MM": 1109,
	"nb_NO": 1044,
	"ne_NP": 1121,
	"nl_BE": 2067,
	"nl_NL": 1043,
	"nn_NO": 2068,
	"ns_ZA": 1132,
	"oc_FR": 1154,
	"or_IN": 1096,
	"pa_IN": 1094,
	"pl_PL": 1045,
	"ps_AF": 1123,
	"pt_BR": 1046,
	"pt_PT": 2070,
	"qut_GT": 1158,
	"quz_BO": 1131,
	"quz_EC": 2155,
	"quz_PE": 3179,
	"rm_CH": 1047,
	"ro_RO": 1048,
	"ru_RU": 1049,
	"rw_RW": 1159,
	"sa_IN": 1103,
	"sah_RU": 1157,
	"se_FI": 3131,
	"se_NO": 1083,
	"se_SE": 2107,
	"si_LK": 1115,
	"sk_SK": 1051,
	"sl_SI": 1060,
	"sma_NO": 6203,
	"sma_SE": 7227,
	"smj_NO": 4155,
	"smj_SE": 5179,
	"smn_FI": 9275,
	"sms_FI": 8251,
	"sq_AL": 1052,
	"sr_BA": 7194,
	"sr_SP": 3098,
	"sv_FI": 2077,
	"sv_SE": 1053,
	"sw_KE": 1089,
	"syr_SY": 1114,
	"ta_IN": 1097,
	"te_IN": 1098,
	"tg_TJ": 1064,
	"th_TH": 1054,
	"tk_TM": 1090,
	"tmz_DZ": 2143,
	"tn_ZA": 1074,
	"tr_TR": 1055,
	"tt_RU": 1092,
	"ug_CN": 1152,
	"uk_UA": 1058,
	"ur_IN": 2080,
	"ur_PK": 1056,
	"uz_UZ": 2115,
	"vi_VN": 1066,
	"wen_DE": 1070,
	"wo_SN": 1160,
	"xh_ZA": 1076,
	"yo_NG": 1130,
	"zh_CHS": 4,
	"zh_CHT": 31748,
	"zh_CN": 2052,
	"zh_HK": 3076,
	"zh_MO": 5124,
	"zh_SG": 4100,
	"zh_TW": 1028,
	"zu_ZA": 1077
}

},{}],5:[function(require,module,exports){
var exec = require('child_process').exec;
var macProvider = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';

function parseAirport(terms, str) {
    var lines = str.split('\n');
    var colSsid = 0;
    var colMac = lines[0].indexOf(terms.BSSID);
    var colRssi = lines[0].indexOf(terms.RSSI);
    var colChannel = lines[0].indexOf(terms.CHANNEL);
    var colHt = lines[0].indexOf(terms.HT);
    var colSec = lines[0].indexOf(terms.SECURITY);
    //var colCC = lines[0].indexOf(terms.CC);

    var wifis = [];
    for (var i=1,l=lines.length; i<l; i++) {
        wifis.push({
            'mac' : lines[i].substr(colMac, colRssi - colMac).trim(),
            'ssid' : lines[i].substr(0, colMac).trim(),
            'channel' : lines[i].substr(colChannel, colHt - colChannel).trim(),
            'signal_level' : lines[i].substr(colRssi, colChannel - colRssi).trim(),
            'security' : lines[i].substr(colSec).trim()
        });
    }
    wifis.pop();
    return wifis;
}

function scan(terms, callback) {
    exec(macProvider + ' -s', function(err, stdout, stderr){
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, parseAirport(terms, stdout));
    });
}

exports.scan = scan;
exports.utility = macProvider;
exports.parse = parseAirport;

},{"child_process":21}],6:[function(require,module,exports){
(function (process){
var exec = require('child_process').exec;
var util = require('util');
var linuxProvider = '/sbin/iwlist';

function parseIwlist(terms, str) {
    var out = str.replace(/^\s+/mg, '');
    out = out.split('\n');
    var cells = [];
    var line;
    var info = {};
    var fields = {
        'mac' : new RegExp('^' + terms.Cell + ' \\d+ - ' + terms.Address + ': (.*)'),
        'ssid' : new RegExp('^' + terms.ESSID + ':"(.*)"'),
        'channel': new RegExp('^' + terms.Channel + ':(.*)'),
        // 'protocol' : /^Protocol:(.*)/,
        // 'mode' : /^Mode:(.*)/,
        // 'frequency' : /^Frequency:(.*)/,
        // 'encryption_key' : /Encryption key:(.*)/,
        // 'bitrates' : /Bit Rates:(.*)/,
        // 'quality' : /Quality(?:=|\:)([^\s]+)/,
        'signal_level' : new RegExp(terms['Signal level'] + '(?:=|\\:)([-\\w]+)')
    };

    for (var i=0,l=out.length; i<l; i++) {
        line = out[i].trim();

        if (!line.length) {
            continue;
        }
        if (line.match(terms["Scan completed :"])) {
            continue;
        }
        if (line.match(terms["Interface doesn't support scanning."])) {
            continue;
        }

        if (line.match(fields.mac)) {
            cells.push(info);
            info = {};
        }

        for (var field in fields) {
            if (line.match(fields[field])) {
                info[field] = (fields[field].exec(line)[1]).trim();
            }
        }
    }
    cells.push(info);
    cells.shift();
    return cells;
}

function scan(terms, callback) {
    var new_env = util._extend(process.env, { LANG: "en" });
    exec(linuxProvider + ' scan', new_env, function (err, stdout, stderr) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, parseIwlist(terms, stdout));
    });
}

exports.scan = scan;
exports.utility = linuxProvider;

}).call(this,require('_process'))
},{"_process":23,"child_process":21,"util":27}],7:[function(require,module,exports){
(function (process){
var exec = require('child_process').exec;
var systemRoot = process.env.SystemRoot || 'C:\\Windows';
var winProvider = systemRoot + '\\System32\\netsh.exe';

function parseNetsh(terms, str) {
    var lines = str.split('\n');
    var wifis = [];
    var info = {};
    var line;
    var ssid;
    var fields = {
        'mac' : new RegExp('^' + terms.BSSID + ' \\d+\\s*:\\s*(.+)'),
        'ssid' : new RegExp('^' + terms.SSID + ' \\d+\\s*:\\s*(.*)'),
        'signal_level' : new RegExp('^' + terms.Signal + '\\s*:\\s*(\\d+)'),
        'channel' : new RegExp('^' + terms.Channel + '\\s*:\\s*(\\d+)')
    };

    for (var i=0, l=lines.length; i<l; i++) {
        line = lines[i].trim();

        if (!line.length) {
            continue;
        }

        else if (line.match(fields.ssid)) {
            if (info.ssid) {
                wifis.push(info);
            }
            info = {};
            info.ssid = fields.ssid.exec(line)[1];
        }

        else if (line.match(fields.mac)) {
            info.mac = fields.mac.exec(line)[1];
        }

        else if (line.match(fields.signal_level)) {
            info.signal_level = fields.signal_level.exec(line)[1];

            // According to http://stackoverflow.com/q/15797920
            // Microsoft's signal quality is 0 to 100,
            //   representing RSSI values between -100 and -50 dbm.
            info.signal_level = (info.signal_level / 2) - 100;

        }
        else if (line.match(fields.channel)) {
            info.channel = fields.channel.exec(line)[1];
        }
    }

    if (info.ssid) {
        wifis.push(info);
    }
    return wifis;
}

function scan(terms, callback) {
    exec(winProvider + ' wlan show networks mode=Bssid', function(err, stdout, stderr){
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, parseNetsh(terms, stdout));
    });
}

exports.scan = scan;
exports.utility = winProvider;
exports.parse = parseNetsh;

}).call(this,require('_process'))
},{"_process":23,"child_process":21}],8:[function(require,module,exports){
var exec = require('child_process').exec;
var util = require('util');
var linuxProvider = '/usr/bin/nmcli';

var fields = {
    'SSID': 'ssid',
    'BSSID': 'mac',
    'CHAN': 'channel'
};

function parseNmcli(terms, str) {
    var out = str.split('\n');
    var cells = [];
    var info = {};

    var linesPerCell = Object.keys(fields).length;
    for (var i=0, l=out.length; i<l; i++) {
        var line = out[i].trim();
        if (!line.length) {
            continue;
        }

        if(i % linesPerCell == 0) {
            cells.push(info);
            info = {};
        }
        var components = line.split(":");
        var fieldName = components.shift();
        var fieldValue = components.join(":");

        var cellField = fields[terms[fieldName]];

        info[cellField] = fieldValue.trim();
    }
    cells.push(info);
    cells.shift();
    return cells;
}

function scan(terms, callback) {
    exec(linuxProvider + ' device wifi rescan', function (err, stdout, stderr) {
        var fieldNames = Object.keys(fields).join(",");
        exec(linuxProvider + ' --terse --mode multiline --fields ' + fieldNames + ' device wifi', function (err, stdout, stderr) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, parseNmcli(terms, stdout));
        });
    });
}

exports.scan = scan;
exports.utility = linuxProvider;
exports.parse = parseNmcli;

},{"child_process":21,"util":27}],9:[function(require,module,exports){
(function (__dirname){
var fs = require('fs');
var airport = require('./airport');
var iwlist = require('./iwlist');
var nmcli = require('./nmcli');
var netsh = require('./netsh');
var osLocale = require('os-locale');
var path = require('path');

var terms;

function setLocale(locale) {
    var shortLocale = locale.split('_')[0];
    var termsPath = path.join(__dirname, '../locales/' + shortLocale + '.json');
    if (!fs.existsSync(termsPath)) {
        shortLocale = 'en';
        termsPath = path.join(__dirname, '../locales/' + shortLocale + '.json');
    }
    terms = require(termsPath);
}

function scan(callback) {
    fs.exists(airport.utility, function (exists) {
        if (exists) {
            airport.scan(terms.airport, callback);
            return;
        }

        fs.exists(nmcli.utility, function (exists) {
            if(exists) {
                nmcli.scan(terms.nmcli, callback);
                return;
            }

            fs.exists(iwlist.utility, function (exists) {
                if (exists) {
                    iwlist.scan(terms.iwlist, callback);
                    return;
                }

                fs.exists(netsh.utility, function (exists) {
                    if (exists) {
                        netsh.scan(terms.netsh, callback);
                        return;
                    }

                    callback("No scanning utility found", null);
                });
            });
        });
    });
}

var fullLocale = osLocale.sync({ spawn: true }) || 'en_US';
setLocale(fullLocale);

exports.scan = scan;
exports.setLocale = setLocale;

}).call(this,"/node_modules/node-wifiscanner2/lib")
},{"./airport":5,"./iwlist":6,"./netsh":7,"./nmcli":8,"fs":21,"os-locale":10,"path":22}],10:[function(require,module,exports){
(function (process,setImmediate){
'use strict';
var childProcess = require('child_process');
var execFileSync = childProcess.execFileSync;
var lcid = require('lcid');
var defaultOpts = {spawn: true};
var cache;

function fallback() {
	cache = 'en_US';
	return cache;
}

function getEnvLocale(env) {
	env = env || process.env;
	var ret = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE;
	cache = getLocale(ret);
	return ret;
}

function parseLocale(x) {
	var env = x.split('\n').reduce(function (env, def) {
		def = def.split('=');
		env[def[0]] = def[1];
		return env;
	}, {});
	return getEnvLocale(env);
}

function getLocale(str) {
	return (str && str.replace(/[.:].*/, '')) || fallback();
}

module.exports = function (opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = defaultOpts;
	} else {
		opts = opts || defaultOpts;
	}

	if (cache || getEnvLocale() || opts.spawn === false) {
		setImmediate(cb, null, cache);
		return;
	}

	var getAppleLocale = function () {
		childProcess.execFile('defaults', ['read', '-g', 'AppleLocale'], function (err, stdout) {
			if (err) {
				fallback();
				return;
			}

			cache = stdout.trim() || fallback();
			cb(null, cache);
		});
	};

	if (process.platform === 'win32') {
		childProcess.execFile('wmic', ['os', 'get', 'locale'], function (err, stdout) {
			if (err) {
				fallback();
				return;
			}

			var lcidCode = parseInt(stdout.replace('Locale', ''), 16);
			cache = lcid.from(lcidCode) || fallback();
			cb(null, cache);
		});
	} else {
		childProcess.execFile('locale', function (err, stdout) {
			if (err) {
				fallback();
				return;
			}

			var res = parseLocale(stdout);

			if (!res && process.platform === 'darwin') {
				getAppleLocale();
				return;
			}

			cache = getLocale(res);
			cb(null, cache);
		});
	}
};

module.exports.sync = function (opts) {
	opts = opts || defaultOpts;

	if (cache || getEnvLocale() || !execFileSync || opts.spawn === false) {
		return cache;
	}

	if (process.platform === 'win32') {
		var stdout;

		try {
			stdout = execFileSync('wmic', ['os', 'get', 'locale'], {encoding: 'utf8'});
		} catch (err) {
			return fallback();
		}

		var lcidCode = parseInt(stdout.replace('Locale', ''), 16);
		cache = lcid.from(lcidCode) || fallback();
		return cache;
	}

	var res;

	try {
		res = parseLocale(execFileSync('locale', {encoding: 'utf8'}));
	} catch (err) {}

	if (!res && process.platform === 'darwin') {
		try {
			cache = execFileSync('defaults', ['read', '-g', 'AppleLocale'], {encoding: 'utf8'}).trim() || fallback();
			return cache;
		} catch (err) {
			return fallback();
		}
	}

	cache = getLocale(res);
	return cache;
};

}).call(this,require('_process'),require("timers").setImmediate)
},{"_process":23,"child_process":21,"lcid":3,"timers":24}],11:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.9.3
(function() {
  var fs, timeout;

  fs = require('fs');

  timeout = require('./timeout');

  module.exports = function() {
    var created, dir, i, len, name, ref, t_limit, tmp_dir;
    t_limit = Date.now() + 1000;
    tmp_dir = '/tmp';
    ref = ['TMPDIR', 'TMP', 'TEMP'];
    for (i = 0, len = ref.length; i < len; i++) {
      name = ref[i];
      if ((dir = process.env[name]) != null) {
        tmp_dir = dir.replace(/\/$/, '');
      }
    }
    while (!created) {
      try {
        dir = tmp_dir + '/sync-exec-' + Math.floor(Math.random() * 1000000000);
        fs.mkdir(dir);
        created = true;
      } catch (_error) {}
      timeout(t_limit, 'Can not create sync-exec directory');
    }
    return dir;
  };

}).call(this);

}).call(this,require('_process'))
},{"./timeout":14,"_process":23,"fs":21}],12:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.9.3
(function() {
  var child_process;

  child_process = require('child_process');

  module.exports = function(cmd, max_wait, options) {
    var err, orig_write, status, stderr, stdout, t0;
    options.timeout = max_wait;
    stdout = stderr = '';
    status = 0;
    t0 = Date.now();
    orig_write = process.stderr.write;
    process.stderr.write = function() {};
    try {
      stdout = child_process.execSync(cmd, options);
      process.stderr.write = orig_write;
    } catch (_error) {
      err = _error;
      process.stderr.write = orig_write;
      if (err.signal === 'SIGTERM' && t0 <= Date.now() - max_wait) {
        throw new Error('Timeout');
      }
      stdout = err.stdout, stderr = err.stderr, status = err.status;
    }
    return {
      stdout: stdout,
      stderr: stderr,
      status: status
    };
  };

}).call(this);

}).call(this,require('_process'))
},{"_process":23,"child_process":21}],13:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
(function() {
  var fs, timeout;

  fs = require('fs');

  timeout = require('./timeout');

  module.exports = function(dir, max_wait) {
    var deleted, i, len, pipe, read, ref, result, t_limit;
    t_limit = Date.now() + max_wait;
    while (!read) {
      try {
        if (fs.readFileSync(dir + '/done').length) {
          read = true;
        }
      } catch (_error) {}
      timeout(t_limit, 'Process execution timeout or exit flag read failure');
    }
    while (!deleted) {
      try {
        fs.unlinkSync(dir + '/done');
        deleted = true;
      } catch (_error) {}
      timeout(t_limit, 'Can not delete exit code file');
    }
    result = {};
    ref = ['stdout', 'stderr', 'status'];
    for (i = 0, len = ref.length; i < len; i++) {
      pipe = ref[i];
      result[pipe] = fs.readFileSync(dir + '/' + pipe, {
        encoding: 'utf-8'
      });
      read = true;
      fs.unlinkSync(dir + '/' + pipe);
    }
    try {
      fs.rmdirSync(dir);
    } catch (_error) {}
    result.status = Number(result.status);
    return result;
  };

}).call(this);

},{"./timeout":14,"fs":21}],14:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(limit, msg) {
    if (Date.now() > limit) {
      throw new Error(msg);
    }
  };

}).call(this);

},{}],15:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
(function() {
  var child_process, create_pipes, proxy, read_pipes, timeout;

  child_process = require('child_process');

  create_pipes = require('./lib/create-pipes');

  proxy = require('./lib/proxy');

  read_pipes = require('./lib/read-pipes');

  timeout = require('./lib/timeout');

  module.exports = function(cmd, max_wait, options) {
    var dir, ref;
    if (max_wait && typeof max_wait === 'object') {
      ref = [max_wait, null], options = ref[0], max_wait = ref[1];
    }
    if (options == null) {
      options = {};
    }
    if (!options.hasOwnProperty('encoding')) {
      options.encoding = 'utf8';
    }
    if (!(typeof options === 'object' && options)) {
      throw new Error('options must be an object');
    }
    if (max_wait == null) {
      max_wait = options.timeout || options.max_wait || 3600000;
    }
    if (!((max_wait == null) || max_wait >= 1)) {
      throw new Error('`options.timeout` must be >=1 millisecond');
    }
    delete options.max_wait;
    if (options.forceEmulation) {
      delete options.forceEmulation;
    } else if (child_process.execSync) {
      return proxy(cmd, max_wait, options);
    }
    delete options.timeout;
    dir = create_pipes();
    cmd = '((((' + cmd + ' > ' + dir + '/stdout 2> ' + dir + '/stderr ) ' + '&& echo $? > ' + dir + '/status) || echo $? > ' + dir + '/status) &&' + ' echo 1 > ' + dir + '/done) || echo 1 > ' + dir + '/done';
    child_process.exec(cmd, options, function() {});
    return read_pipes(dir, max_wait);
  };

}).call(this);

},{"./lib/create-pipes":11,"./lib/proxy":12,"./lib/read-pipes":13,"./lib/timeout":14,"child_process":21}],16:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],17:[function(require,module,exports){
// Generated by CoffeeScript 1.12.4
(function() {
  var AirPortBinary, connectionStateMap, parsePatterns, powerStateMap;

  AirPortBinary = "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport";

  parsePatterns = {
    airport_line: new RegExp(/(.+): (.+)/)
  };

  connectionStateMap = {
    init: "disconnected",
    running: "connected"
  };

  powerStateMap = {
    On: true,
    Off: false
  };

  module.exports = {
    autoFindInterface: function() {
      var _iface, _interface, _msg, findInterfaceCom;
      this.WiFiLog("Host machine is MacOS.");
      findInterfaceCom = "networksetup -listallhardwareports | awk '/^Hardware Port: (Wi-Fi|AirPort)$/{getline;print $2}'";
      this.WiFiLog("Executing: " + findInterfaceCom);
      _interface = this.execSync(findInterfaceCom);
      if (_interface) {
        _iface = _interface.trim();
        _msg = "Automatically located wireless interface " + _iface + ".";
        this.WiFiLog(_msg);
        return {
          success: true,
          msg: _msg,
          "interface": _iface
        };
      } else {
        _msg = "Error: No network interface found.";
        this.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg,
          "interface": null
        };
      }
    },
    getIfaceState: function() {
      var KEY, VALUE, connectionData, error, i, interfaceState, k, len, ln, parsedLine, powerData, ref;
      interfaceState = {};
      connectionData = this.execSync(AirPortBinary + " -I");
      ref = connectionData.split('\n');
      for (k = i = 0, len = ref.length; i < len; k = ++i) {
        ln = ref[k];
        try {
          parsedLine = parsePatterns.airport_line.exec(ln.trim());
          KEY = parsedLine[1];
          VALUE = parsedLine[2];
        } catch (error1) {
          error = error1;
          continue;
        }
        switch (KEY) {
          case "state":
            interfaceState.connection = connectionStateMap[VALUE];
            break;
          case "SSID":
            interfaceState.ssid = VALUE;
        }
        if (KEY === "SSID") {
          break;
        }
      }
      powerData = this.execSync("networksetup -getairportpower " + this.WiFiControlSettings.iface);
      try {
        parsedLine = parsePatterns.airport_line.exec(powerData.trim());
        KEY = parsedLine[1];
        VALUE = parsedLine[2];
      } catch (error1) {
        error = error1;
        return {
          success: false,
          msg: "Unable to retrieve state of network interface " + this.WiFiControlSettings.iface + "."
        };
      }
      interfaceState.power = powerStateMap[VALUE];
      return interfaceState;
    },
    connectToAP: function(_ap) {
      var COMMANDS, _msg, com, connectToAPChain, error, i, len, stdout;
      COMMANDS = {
        connect: "networksetup -setairportnetwork " + this.WiFiControlSettings.iface + " \"" + _ap.ssid + "\""
      };
      if (_ap.password.length) {
        COMMANDS.connect += " \"" + _ap.password + "\"";
      }
      connectToAPChain = ["connect"];
      for (i = 0, len = connectToAPChain.length; i < len; i++) {
        com = connectToAPChain[i];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        try {
          stdout = this.execSync(COMMANDS[com]);
        } catch (error1) {
          error = error1;
        }
        if (stdout === ("Could not find network " + _ap.ssid + ".")) {
          _msg = "Error: No network called " + _ap.ssid + " could be found.";
          this.WiFiLog(_msg, true);
          return {
            success: false,
            msg: _msg
          };
        }
        this.WiFiLog("Success!");
      }
    },
    resetWiFi: function() {
      var COMMANDS, _msg, com, i, len, resetWiFiChain, results, stdout;
      COMMANDS = {
        enableAirport: "networksetup -setairportpower " + this.WiFiControlSettings.iface + " on",
        disableAirport: "networksetup -setairportpower " + this.WiFiControlSettings.iface + " off"
      };
      resetWiFiChain = ["disableAirport", "enableAirport"];
      results = [];
      for (i = 0, len = resetWiFiChain.length; i < len; i++) {
        com = resetWiFiChain[i];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        stdout = this.execSync(COMMANDS[com]);
        _msg = "Success!";
        results.push(this.WiFiLog(_msg));
      }
      return results;
    }
  };

}).call(this);

},{}],18:[function(require,module,exports){
// Generated by CoffeeScript 1.12.4
(function() {
  var connectionStateMap, parsePatterns, powerStateMap;

  parsePatterns = {
    nmcli_line: new RegExp(/([^:]+):\s+(.+)/)
  };

  connectionStateMap = {
    connected: "connected",
    disconnected: "disconnected",
    connecting: "connecting"
  };

  powerStateMap = {
    enabled: true,
    disabled: false
  };

  module.exports = {
    autoFindInterface: function() {
      var _iface, _interface, _interfaceLine, _msg, findInterfaceCom, parsedLine;
      this.WiFiLog("Host machine is Linux.");
      findInterfaceCom = "nmcli -m multiline device status | grep wlan";
      this.WiFiLog("Executing: " + findInterfaceCom);
      _interfaceLine = this.execSync(findInterfaceCom);
      parsedLine = parsePatterns.nmcli_line.exec(_interfaceLine.trim());
      _interface = parsedLine[2];
      if (_interface) {
        _iface = _interface.trim();
        _msg = "Automatically located wireless interface " + _iface + ".";
        this.WiFiLog(_msg);
        return {
          success: true,
          msg: _msg,
          "interface": _iface
        };
      } else {
        _msg = "Error: No network interface found.";
        this.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg,
          "interface": null
        };
      }
    },
    getIfaceState: function() {
      var KEY, VALUE, connectionData, connectionName, error, foundInterface, i, interfaceState, k, len, ln, parsedLine, powerData, ref, ssidData;
      interfaceState = {};
      powerData = this.execSync("nmcli networking");
      interfaceState.power = powerStateMap[powerData.trim()];
      if (interfaceState.power) {
        foundInterface = false;
        connectionData = this.execSync("nmcli -m multiline device status");
        connectionName = null;
        ref = connectionData.split('\n');
        for (k = i = 0, len = ref.length; i < len; k = ++i) {
          ln = ref[k];
          try {
            parsedLine = parsePatterns.nmcli_line.exec(ln.trim());
            KEY = parsedLine[1];
            VALUE = parsedLine[2];
            if (VALUE === "--") {
              VALUE = null;
            }
          } catch (error1) {
            error = error1;
            continue;
          }
          switch (KEY) {
            case "DEVICE":
              if (VALUE === this.WiFiControlSettings.iface) {
                foundInterface = true;
              }
              break;
            case "STATE":
              if (foundInterface) {
                interfaceState.connection = connectionStateMap[VALUE];
              }
              break;
            case "CONNECTION":
              if (foundInterface) {
                connectionName = VALUE;
              }
          }
          if (KEY === "CONNECTION" && foundInterface) {
            break;
          }
        }
        if (!foundInterface) {
          return {
            success: false,
            msg: "Unable to retrieve state of network interface " + this.WiFiControlSettings.iface + "."
          };
        }
        if (connectionName) {
          try {
            ssidData = this.execSync("nmcli -m multiline connection show \"" + connectionName + "\" | grep 802-11-wireless.ssid");
            parsedLine = parsePatterns.nmcli_line.exec(ssidData.trim());
            interfaceState.ssid = parsedLine[2];
          } catch (error1) {
            error = error1;
            return {
              success: false,
              msg: "Error while retrieving SSID information of network interface " + this.WiFiControlSettings.iface + ": " + error.stderr
            };
          }
        } else {
          interfaceState.ssid = null;
        }
      } else {
        interfaceState.connection = connectionStateMap[VALUE];
        interfaceState.ssid = null;
      }
      return interfaceState;
    },
    scanForWiFi: function() {
      var KEY, VALUE, _network, c, error, i, j, k, len, len1, ln, networks, nwk, parsedLine, ref, ref1, scanResults;
      scanResults = this.execSync("nmcli -m multiline device wifi list ifname " + this.WiFiControlSettings.iface);
      networks = [];
      ref = scanResults.split('*:');
      for (c = i = 0, len = ref.length; i < len; c = ++i) {
        nwk = ref[c];
        if (c === 0) {
          continue;
        }
        _network = {};
        ref1 = nwk.split('\n');
        for (k = j = 0, len1 = ref1.length; j < len1; k = ++j) {
          ln = ref1[k];
          try {
            parsedLine = parsePatterns.nmcli_line.exec(ln.trim());
            KEY = parsedLine[1];
            VALUE = parsedLine[2];
          } catch (error1) {
            error = error1;
            continue;
          }
          switch (KEY) {
            case "SSID":
              _network.ssid = String(VALUE);
              break;
            case "CHAN":
              _network.channel = String(VALUE);
              break;
            case "SIGNAL":
              _network.signal_level = String(VALUE);
              break;
            case "SECURITY":
              _network.security = String(VALUE);
          }
        }
        if (_network.ssid !== "--") {
          networks.push(_network);
        }
      }
      return networks;
    },
    connectToAP: function(_ap) {
      var COMMANDS, _msg, com, connectToAPChain, error, i, len, ssidExist, stdout;
      COMMANDS = {
        "delete": "nmcli connection delete \"" + _ap.ssid + "\"",
        connect: "nmcli device wifi connect \"" + _ap.ssid + "\""
      };
      if (_ap.password.length) {
        COMMANDS.connect += " password \"" + _ap.password + "\"";
      }
      try {
        stdout = this.execSync("nmcli connection show \"" + _ap.ssid + "\"");
        if (stdout.length) {
          ssidExist = true;
        }
      } catch (error1) {
        error = error1;
        ssidExist = false;
      }
      connectToAPChain = [];
      if (ssidExist) {
        this.WiFiLog("It appears there is already a connection for this SSID.");
        connectToAPChain.push("delete");
      }
      connectToAPChain.push("connect");
      for (i = 0, len = connectToAPChain.length; i < len; i++) {
        com = connectToAPChain[i];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        try {
          stdout = this.execSync(COMMANDS[com]);
        } catch (error1) {
          error = error1;
          if (error.stderr.toString().trim() === ("Error: No network with SSID '" + _ap.ssid + "' found.")) {
            _msg = "Error: No network called " + _ap.ssid + " could be found.";
            this.WiFiLog(_msg, true);
            return {
              success: false,
              msg: _msg
            };
          } else if (error.stderr.toString().search(/Error:/ !== -1)) {
            _msg = error.stderr.toString().trim();
            this.WiFiLog(_msg, true);
            return {
              success: false,
              msg: _msg
            };
          }
          if (!/nmcli device wifi connect/.test(COMMANDS[com])) {
            this.WiFiLog(error, true);
            return {
              success: false,
              msg: error
            };
          }
        }
        this.WiFiLog("Success!");
      }
    },
    resetWiFi: function() {
      var COMMANDS, _msg, com, i, len, resetWiFiChain, results, stdout;
      COMMANDS = {
        disableNetworking: "nmcli networking off",
        enableNetworking: "nmcli networking on"
      };
      resetWiFiChain = ["disableNetworking", "enableNetworking"];
      results = [];
      for (i = 0, len = resetWiFiChain.length; i < len; i++) {
        com = resetWiFiChain[i];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        stdout = this.execSync(COMMANDS[com]);
        _msg = "Success!";
        results.push(this.WiFiLog(_msg));
      }
      return results;
    }
  };

}).call(this);

},{}],19:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.12.4
(function() {
  var CXT, WiFiScanner, execSyncToBuffer, os_instructions;

  WiFiScanner = require('node-wifiscanner2');

  execSyncToBuffer = require('sync-exec');

  CXT = {
    WiFiControlSettings: {
      iface: null,
      debug: false,
      connectionTimeout: 5000
    },
    execSync: function(command, options) {
      var results;
      if (options == null) {
        options = {};
      }
      results = execSyncToBuffer(command, options);
      if (!results.status) {
        return results.stdout;
      }
      throw {
        stderr: results.stderr
      };
    },
    WiFiLog: function(msg, error) {
      if (error == null) {
        error = false;
      }
      if (error) {
        return console.error("WiFiControl: " + msg);
      } else {
        if (this.WiFiControlSettings.debug) {
          return console.log("WiFiControl: " + msg);
        }
      }
    }
  };

  switch (process.platform) {
    case "linux":
      os_instructions = require('./linux.js');
      break;
    case "win32":
      os_instructions = require('./win32.js');
      break;
    case "darwin":
      os_instructions = require('./darwin.js');
      break;
    default:
      CXT.WiFiLog("Unrecognized operating system.", true);
      process.exit();
  }

  module.exports = {
    init: function(settings) {
      if (settings == null) {
        settings = {};
      }
      this.configure(settings);
      if (settings.iface == null) {
        return this.findInterface(settings.iface);
      }
    },
    configure: function(settings) {
      if (settings == null) {
        settings = {};
      }
      if (settings.debug != null) {
        CXT.WiFiControlSettings.debug = settings.debug;
        CXT.WiFiLog("Debug mode set to: " + settings.debug);
      }
      if (settings.connectionTimeout != null) {
        settings.connectionTimeout = parseInt(settings.connectionTimeout);
        CXT.WiFiControlSettings.connectionTimeout = settings.connectionTimeout;
        CXT.WiFiLog("AP connection attempt timeout set to: " + settings.connectionTimeout + "ms");
      }
      if (settings.iface != null) {
        return this.findInterface(settings.iface);
      }
    },
    findInterface: function(iface) {
      var _msg, error, interfaceResults;
      if (iface == null) {
        iface = null;
      }
      try {
        if (iface != null) {
          _msg = "Wireless interface manually set to " + iface + ".";
          CXT.WiFiLog(_msg);
          CXT.WiFiControlSettings.iface = iface;
          return {
            success: true,
            msg: _msg,
            "interface": iface
          };
        }
        CXT.WiFiLog("Determining system wireless interface...");
        interfaceResults = os_instructions.autoFindInterface.call(CXT);
        CXT.WiFiControlSettings.iface = interfaceResults["interface"];
        return interfaceResults;
      } catch (error1) {
        error = error1;
        _msg = "Encountered an error while searching for wireless interface: " + error;
        CXT.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg
        };
      }
    },
    scanForWiFi: function(cb) {
      var _msg, error, networks;
      if (CXT.WiFiControlSettings.iface == null) {
        _msg = "You cannot scan for nearby WiFi networks without a valid wireless interface.";
        CXT.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg
        };
      }
      try {
        CXT.WiFiLog("Scanning for nearby WiFi Access Points...");
        if (process.platform === "linux") {
          networks = os_instructions.scanForWiFi.apply(CXT);
          _msg = "Nearby WiFi APs successfully scanned (" + networks.length + " found).";
          CXT.WiFiLog(_msg);
          return cb(null, {
            success: true,
            msg: _msg,
            networks: networks
          });
        } else {
          return WiFiScanner.scan(function(err, networks) {
            if (err) {
              _msg = "We encountered an error while scanning for WiFi APs: " + error;
              CXT.WiFiLog(_msg, true);
              return cb(err, {
                success: false,
                msg: _msg
              });
            } else {
              _msg = "Nearby WiFi APs successfully scanned (" + networks.length + " found).";
              CXT.WiFiLog(_msg);
              return cb(null, {
                success: true,
                networks: networks,
                msg: _msg
              });
            }
          });
        }
      } catch (error1) {
        error = error1;
        _msg = "We encountered an error while scanning for WiFi APs: " + error;
        CXT.WiFiLog(_msg, true);
        return cb(error, {
          success: false,
          msg: _msg
        });
      }
    },
    connectToAP: function(_ap, cb) {
      var _msg, check_iface, error, request_msg, t0;
      if (CXT.WiFiControlSettings.iface == null) {
        _msg = "You cannot connect to a WiFi network without a valid wireless interface.";
        CXT.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg
        };
      }
      try {
        if (!_ap.ssid.length) {
          return {
            success: false,
            msg: "Please provide a non-empty SSID."
          };
        }
        if (_ap.password == null) {
          _ap.password = "";
        }
        os_instructions.connectToAP.call(CXT, _ap);
        request_msg = "WiFi connection request to \"" + _ap.ssid + "\" has been processed.";
        CXT.WiFiLog(request_msg);
        t0 = new Date();
        check_iface = (function(_this) {
          return function(_ap, cb) {
            var connect_to_ap_result, ifaceState;
            ifaceState = _this.getIfaceState();
            if (ifaceState.success && ((ifaceState.connection === "connected") || (ifaceState.connection === "disconnected"))) {
              if (ifaceState.ssid === _ap.ssid) {
                _msg = "Successfully connected to \"" + _ap.ssid + "\"";
                CXT.WiFiLog(_msg);
                cb(null, {
                  success: true,
                  msg: _msg
                });
              } else if (ifaceState.ssid == null) {
                _msg = "Error: Interface is not currently connected to any wireless AP.";
                CXT.WiFiLog(_msg, true);
                cb(_msg, {
                  success: false,
                  msg: "Error: Could not connect to " + _ap.ssid
                });
              } else {
                _msg = "Error: Interface is currently connected to \"" + ifaceState.ssid + "\"";
                CXT.WiFiLog(_msg, true);
                connect_to_ap_result = {
                  success: false,
                  msg: _msg
                };
                cb(_msg, {
                  success: false,
                  msg: "Error: Could not connect to " + _ap.ssid
                });
              }
              return;
            }
            if ((new Date() - t0) < CXT.WiFiControlSettings.connectionTimeout) {
              return setTimeout(function() {
                return check_iface(_ap, cb);
              }, 250);
            } else {
              return cb("Connection confirmation timed out. (" + CXT.WiFiControlSettings.connectionTimeout + "ms)", {
                success: false,
                msg: "Error: Could not connect to " + _ap.ssid
              });
            }
          };
        })(this);
        return check_iface(_ap, cb);
      } catch (error1) {
        error = error1;
        _msg = "Encountered an error while connecting to \"" + _ap.ssid + "\": " + error;
        CXT.WiFiLog(_msg, true);
        return cb(error, {
          success: false,
          msg: _msg
        });
      }
    },
    resetWiFi: function(cb) {
      var _msg, check_iface, error, t0;
      try {
        os_instructions.resetWiFi.call(CXT);
        CXT.WiFiLog("Waiting for interface to finish resetting...");
        t0 = new Date();
        check_iface = (function(_this) {
          return function(cb) {
            var _msg, ifaceState;
            ifaceState = _this.getIfaceState();
            if (ifaceState.success && ((ifaceState.connection === "connected") || (ifaceState.connection === "disconnected"))) {
              _msg = "Success!  Wireless interface is now reset.";
              cb(null, {
                success: true,
                msg: _msg
              });
              return;
            }
            if ((new Date() - t0) < CXT.WiFiControlSettings.connectionTimeout) {
              return setTimeout(function() {
                return check_iface(cb);
              }, 250);
            } else {
              return cb("Reset confirmation timed out. (" + CXT.WiFiControlSettings.connectionTimeout + "ms)", {
                success: false,
                msg: "Error: Could not completely reset WiFi."
              });
            }
          };
        })(this);
        return check_iface(cb);
      } catch (error1) {
        error = error1;
        _msg = "Encountered an error while resetting wireless interface: " + error;
        CXT.WiFiLog(_msg, true);
        return cb(error, {
          success: false,
          msg: _msg
        });
      }
    },
    getIfaceState: function() {
      var _msg, error, interfaceState;
      try {
        interfaceState = os_instructions.getIfaceState.call(CXT);
        if (interfaceState.success !== false) {
          interfaceState.success = true;
          interfaceState.msg = "Successfully acquired state of network interface " + CXT.WiFiControlSettings.iface + ".";
        }
        return interfaceState;
      } catch (error1) {
        error = error1;
        _msg = "Encountered an error while acquiring network interface connection state: " + error;
        CXT.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg
        };
      }
    }
  };

}).call(this);

}).call(this,require('_process'))
},{"./darwin.js":17,"./linux.js":18,"./win32.js":20,"_process":23,"node-wifiscanner2":9,"sync-exec":15}],20:[function(require,module,exports){
// Generated by CoffeeScript 1.12.4
(function() {
  var connectionStateMap, fs, parsePatterns, win32WirelessProfileBuilder;

  fs = require('fs');

  parsePatterns = {
    netsh_line: new RegExp(/([^:]+): (.+)/)
  };

  connectionStateMap = {
    connected: "connected",
    disconnected: "disconnected",
    associating: "connecting"
  };

  win32WirelessProfileBuilder = function(ssid, security, key) {
    var profile_content;
    if (security == null) {
      security = false;
    }
    if (key == null) {
      key = null;
    }
    profile_content = "<?xml version=\"1.0\"?> <WLANProfile xmlns=\"http://www.microsoft.com/networking/WLAN/profile/v1\"> <name>" + ssid.plaintext + "</name> <SSIDConfig> <SSID> <hex>" + ssid.hex + "</hex> <name>" + ssid.plaintext + "</name> </SSID> </SSIDConfig>";
    switch (security) {
      case "wpa":
        profile_content += "<connectionType>ESS</connectionType> <connectionMode>auto</connectionMode> <autoSwitch>true</autoSwitch> <MSM> <security> <authEncryption> <authentication>WPAPSK</authentication> <encryption>TKIP</encryption> <useOneX>false</useOneX> </authEncryption> <sharedKey> <keyType>passPhrase</keyType> <protected>false</protected> <keyMaterial>" + key + "</keyMaterial> </sharedKey> </security> </MSM>";
        break;
      case "wpa2":
        profile_content += "<connectionType>ESS</connectionType> <connectionMode>auto</connectionMode> <autoSwitch>true</autoSwitch> <MSM> <security> <authEncryption> <authentication>WPA2PSK</authentication> <encryption>AES</encryption> <useOneX>false</useOneX> </authEncryption> <sharedKey> <keyType>passPhrase</keyType> <protected>false</protected> <keyMaterial>" + key + "</keyMaterial> </sharedKey> </security> </MSM>";
        break;
      default:
        profile_content += "<connectionType>ESS</connectionType> <connectionMode>manual</connectionMode> <MSM> <security> <authEncryption> <authentication>open</authentication> <encryption>none</encryption> <useOneX>false</useOneX> </authEncryption> </security> </MSM>";
    }
    profile_content += "</WLANProfile>";
    return profile_content;
  };

  module.exports = {
    autoFindInterface: function() {
      var _iface, _interface, _msg, findInterfaceCom;
      this.WiFiLog("Host machine is Windows.");
      findInterfaceCom = "echo wlan";
      this.WiFiLog("Executing: " + findInterfaceCom);
      _interface = this.execSync(findInterfaceCom);
      if (_interface) {
        _iface = _interface.trim();
        _msg = "Automatically located wireless interface " + _iface + ".";
        this.WiFiLog(_msg);
        return {
          success: true,
          msg: _msg,
          "interface": _iface
        };
      } else {
        _msg = "Error: No network interface found.";
        this.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg,
          "interface": null
        };
      }
    },
    getIfaceState: function() {
      var KEY, VALUE, connectionData, error, interfaceState, j, k, len, ln, ln_trim, parsedLine, ref;
      interfaceState = {};
      connectionData = this.execSync("netsh " + this.WiFiControlSettings.iface + " show interface");
      ref = connectionData.split('\n');
      for (k = j = 0, len = ref.length; j < len; k = ++j) {
        ln = ref[k];
        try {
          ln_trim = ln.trim();
          if (ln_trim === "Software Off") {
            interfaceState = {
              ssid: null,
              connected: false,
              power: false
            };
            break;
          } else {
            parsedLine = parsePatterns.netsh_line.exec(ln_trim);
            KEY = parsedLine[1].trim();
            VALUE = parsedLine[2].trim();
          }
        } catch (error1) {
          error = error1;
          continue;
        }
        interfaceState.power = true;
        switch (KEY) {
          case "State":
            interfaceState.connection = connectionStateMap[VALUE];
            break;
          case "SSID":
            interfaceState.ssid = VALUE;
            break;
          case "Radio status":
            if (VALUE === "Hardware Off") {
              interfaceState = {
                ssid: null,
                connected: false,
                power: false
              };
              break;
            }
        }
        if (KEY === "SSID") {
          break;
        }
      }
      return interfaceState;
    },
    connectToAP: function(_ap) {
      var COMMANDS, _msg, com, connectToAPChain, error, i, j, l, len, ref, ssid, stdout, xmlContent;
      this.WiFiLog("Generating win32 wireless profile...");
      ssid = {
        plaintext: _ap.ssid,
        hex: ""
      };
      for (i = j = 0, ref = ssid.plaintext.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        ssid.hex += ssid.plaintext.charCodeAt(i).toString(16);
      }
      xmlContent = null;
      if (_ap.password.length) {
        xmlContent = win32WirelessProfileBuilder(ssid, "wpa2", _ap.password);
      } else {
        xmlContent = win32WirelessProfileBuilder(ssid);
      }
      try {
        fs.writeFileSync(_ap.ssid + ".xml", xmlContent);
      } catch (error1) {
        error = error1;
        _msg = "Encountered an error connecting to AP: " + error;
        this.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg
        };
      }
      COMMANDS = {
        loadProfile: "netsh " + this.WiFiControlSettings.iface + " add profile filename=\"" + _ap.ssid + ".xml\"",
        connect: "netsh " + this.WiFiControlSettings.iface + " connect ssid=\"" + _ap.ssid + "\" name=\"" + _ap.ssid + "\""
      };
      connectToAPChain = ["loadProfile", "connect"];
      for (l = 0, len = connectToAPChain.length; l < len; l++) {
        com = connectToAPChain[l];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        try {
          stdout = this.execSync(COMMANDS[com]);
        } catch (error1) {
          error = error1;
        }
        this.WiFiLog("Success!");
      }
      this.WiFiLog("Removing temporary WiFi config file...");
      return this.execSync("del \".\\" + _ap.ssid + ".xml\"");
    },
    resetWiFi: function() {
      var COMMANDS, _msg, com, j, len, resetWiFiChain, results, stdout;
      COMMANDS = {
        disconnect: "netsh " + this.WiFiControlSettings.iface + " disconnect"
      };
      resetWiFiChain = ["disconnect"];
      results = [];
      for (j = 0, len = resetWiFiChain.length; j < len; j++) {
        com = resetWiFiChain[j];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        stdout = this.execSync(COMMANDS[com]);
        _msg = "Success!";
        results.push(this.WiFiLog(_msg));
      }
      return results;
    }
  };

}).call(this);

},{"fs":21}],21:[function(require,module,exports){

},{}],22:[function(require,module,exports){
(function (process){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":23}],23:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],24:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":23,"timers":24}],25:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],26:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],27:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":26,"_process":23,"inherits":25}]},{},[1]);
