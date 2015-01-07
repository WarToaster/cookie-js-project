/*

author: {{ cookiecutter.author_full_name }}
website: {{ cookiecutter.author_website }}
version: {{ cookiecutter.version }}

{{ cookiecutter.project_short_description }}

*/
;(function($) {
    'use strict';

    var {{ cookiecutter.project_name }} = function() {

    };

    {{ cookiecutter.project_name }}.prototype = {

    };

    $(document).ready(function() {
        var lol = new {{ cookiecutter.project_name }}();
    });

}($));
