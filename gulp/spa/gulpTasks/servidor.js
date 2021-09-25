const gulp = require('gulp')
const webServer = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(){
    return gulp.src('build') 
        .pipe(webServer({
            port:8080,
            open: true,
            livereload: true,
        })) 
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())   
    watch('src/**/*.scss', () => gulp.series('appCSS')())   
    watch('src/**/*.js', () => gulp.series('appJS')())   
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())   
    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}