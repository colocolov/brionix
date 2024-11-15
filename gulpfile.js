const { notify } = require("browser-sync");

let project_folder = require("path").basename(__dirname);
let source_folder = "#src";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css",
    js: project_folder + "/js",
    images: project_folder + "/images",
    fonts: project_folder + "/fonts",
  },
  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/sass/style.sass",
    cssadd: source_folder + "/css/*.css",
    js: source_folder + "/js/main.js",
    jsadd: [source_folder + "/js/*.js", "!" + source_folder + "/js/main.js"],
    images: source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.ttf",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/sass/**/*.sass",
    js: source_folder + "/js/**/*.js",
    images: source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + project_folder + "/",
};

let { src, dest, task } = require("gulp"),
  gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  scss = require('gulp-sass')(require('sass')),
  autoprefixer = require("gulp-autoprefixer"),
  mediagroup = require("gulp-group-css-media-queries"),
  cleancss = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  imagemin = require("gulp-imagemin"),
  sourcemaps = require("gulp-sourcemaps"),
  svgsprite = require("gulp-svg-sprite"),
  ttf2woff = require("gulp-ttf2woff"),
  ttf2woff2 = require("gulp-ttf2woff2"),
  fonter = require("gulp-fonter"),
  uglify = require("gulp-uglify-es").default,
  del = require("del");

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/",
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(mediagroup())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        grid: true,
        cascade: true,
      })
    )
    .pipe(dest(path.build.css))
    .pipe(cleancss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(sourcemaps.write())
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

// копирование доп. стилей из src в готовый проект
function cssadd() {
  return src(path.src.cssadd).pipe(dest(path.build.css));
}

function js() {
  return src(path.src.js)
    .pipe(sourcemaps.init())
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    //.pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

// копирование JS фалйов из src в готовый проект, кроме main.js
function jsadd() {
  return src(path.src.jsadd).pipe(dest(path.build.js)).pipe(browsersync.stream());
}

//--- конвертирование JPG в WEBP + копирование JPG в dist
function images() {
  return src(path.src.images).pipe(dest(path.build.images)).pipe(browsersync.stream());
}
//---END

//--- сжатие JPG
function imagesConvert() {
  return src(path.src.images)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest(path.build.images));
}
//---END

//--- создание SVG sprite
gulp.task("svgSprite", function () {
  return gulp
    .src([source_folder + "/images/iconsprite/*.svg"])
    .pipe(
      svgsprite({
        mode: {
          stack: {
            sprite: "../icons/icons.svg",
            example: true,
          },
        },
      })
    )
    .pipe(dest(path.build.images));
});
//---END

//--- конвертер шрифтов OTF в TTF -> WOFF
function fonts() {
  return src([source_folder + "/fonts/*.otf"])
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(dest(source_folder + "/fonts/"))
    .pipe(src(path.src.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
    .pipe(src(path.src.fonts))
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts));
}
//---END

// очистка папки с готовым проектом
function cleanDist() {
  return del(path.clean);
}

// отслеживание файлов
function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
}

let build = gulp.series(gulp.parallel(css, cssadd, html, js, jsadd, images));
let watch = gulp.parallel(build, watchFiles, browserSync);
let done = gulp.series(cleanDist, build, imagesConvert, fonts); // выгрузка в готовый проект

exports.css = css;
exports.html = html;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.done = done;
