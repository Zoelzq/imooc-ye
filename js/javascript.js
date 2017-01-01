window.onload = function () {
            var Lis = document.getElementsByClassName("nav_list");
            for (i = 0; i < Lis.length; i++) {
                Lis[i].onmouseover = function () {
                    this.className = "active";
                }

                Lis[i].onmouseout = function () {
                    this.className = "";
                }
            }

        }
var validator;
    $(document).ready(function () {
        $.validator.setDefaults({
            debug: true
        });

        validator = $("#demoForm").validate({
            rules: {
                username: {
                    required: true,
                },
                password: {
                    required: true,
                    minlength: 2,
                    maxlength: 16
                },
                "confirm-password": {
                    equalTo: "#password"
                }
            },
            messages: {
                username: {
                    required: "必须填写用户名",
                    minlength: "用户名最小为2位",
                    maxlength: "用户名最大为10位",
                    rangelength: "用户名应该在2-10位",
                    remote: "用户名不存在"
                },
                password: {
                    required: "必须填写密码",
                    minlength: "密码最小为2位",
                    maxlength: "密码最大为16位"
                },
                "confirm-password": {
                    equalTo: "两次输入的密码不一致"
                }
            },
            submitHandler: function (form) {
                console.log($(form).serialize());
            }
        });

        $.validator.addMethod("postcode", function(value, element, params){
            var postcode = /^[0-9]{6}$/;
            return this.optional(element) || (postcode.test(value));
        }, $.validator.format("请填写正确的{0}邮编！"));

        $("#check").click(function () {
            alert($("#demoForm").valid() ? "填写正确！" : "填写错误！");
        });
    });
