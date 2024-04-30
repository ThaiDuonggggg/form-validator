// // function Validator(options) {

// //     // Hàm xử lý getParent
// //     function getParent(element, selector) {
// //         while (element.parentElement) {
// //             if (element.parentElement.matches(selector)) {
// //                 return element.parentElement;
// //             }
// //             element = element.parentElement;
// //         }
// //     }

// //     // Lấy ra form
// //     var formElement = document.querySelector(options.form);

// //     // Lấy ra giá trị của input
// //     var selectorRules = {};
// //     // Đối tượng validate

// //     function validate(inputElement, rule) {
// //         // var errorElement = getParent(inputElement, '.form-group')

// //         var errorMessage;
// //         var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector);

// //         // Lấy tất cả rule
// //         var rules = selectorRules[rule.selector];

// //         for(var i = 0; i < rules.length; ++i) {
// //             // Đưa biểu thức vào để so sánh với các trường hợp phía dưới
// //             switch(inputElement.type) {
// //                 // Đối với trường hợp checkbox, raido
// //                 case 'radio':
// //                 case 'checkbox':
// //                     errorMessage = rules[i](
// //                         formElement.querySelector(rule.selector + ':checked')
// //                     );
// //                     break;
// //                 default:
// //                     // Mặc định
// //                     errorMessage = rules[i](inputElement.value);
// //             }
// //            if (errorMessage)
// //             break;
// //         }

// //         if (errorMessage) {
// //             errorElement.innerText = errorMessage;
// //            getParent(inputElement, options.formGroup).classList.add('invalid')
// //         } else {
// //             errorElement.innerText = '';
// //            getParent(inputElement, options.formGroup).classList.remove('invalid')
// //         }
// //         return !errorMessage;
// //     }

// //     if (formElement) {
// //             // Xử lý trường submit với javascript
// //             formElement.onsubmit = function (e) {
// //                 e.preventDefault();

// //                 var isFormValid = true;
// //                 //Lặp qua từng rule và validate
// //                 options.rules.forEach((rule) => {
// //                     var inputElement = formElement.querySelector(rule.selector);

// //                     var isValid =  validate(inputElement, rule);

// //                     if (!isValid) {
// //                         isFormValid = false;
// //                     }

// //                 });

// //                 //Nếu nhập hết dữ liệu thì
// //                 if (isFormValid) {
// //                     if (typeof options.onSubmit === 'function') {
// //                         // Lặp qua tất cả thẻ input có Attribute là name
// //                         var enableInputs = formElement.querySelectorAll('[name]');

// //                         var formValues = Array.from(enableInputs).reduce((values, input) => {

// //                             switch(input.type) {
// //                                 case 'radio':
// //                                     values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
// //                                     break;
// //                                 case 'checkbox':
// //                                     // if (!input.matches(':checked')){
// //                                     //     values[input.name] = '';
// //                                     //     return values
// //                                     // }

// //                                     if (!Array.isArray(values[input.name])) {
// //                                         values[input.name] = [];
// //                                     }
// //                                     if (input.checked) {
// //                                         values[input.name].push(input.value);
// //                                     }
// //                                         break;
// //                                     case 'file':
// //                                         values[input.name] = input.files;
// //                                         break;
// //                                 default:
// //                                     values[input.name] = input.value;
// //                             }

// //                             return values;
// //                         }, {});

// //                         options.onSubmit(formValues)
// //                     }
// //                 }
// //             }

// //          // Lấy ra rules
// //         options.rules.forEach((rule) => {
// //             // Lấy ra tất cả các rule
// //             if (Array.isArray(selectorRules[rule.selector])) {
// //                 selectorRules[rule.selector].push(rule.test);
// //             } else {
// //                 selectorRules[rule.selector] = [rule.test];
// //             }

// //             // Lấy ra tất cả element
// //             var inputElements = formElement.querySelectorAll(rule.selector);

// //             // Khi lấy querySelectorAll là lấy tất cả thì chúng ta cần
// //             // biến đoạn mã này thành mảng thì mới sử dụng phương thức
// //             // forEach để lặp qua
// //             Array.from(inputElements).forEach((inputElement) => {
// //                 // Xử lý trường hợp blur ra khỏi input
// //                     inputElement.onblur = function () {
// //                         validate(inputElement, rule)

// //                         // Nếu người dùng click vào input nhập thì sẽ ẩn thông báo không nhập đi dùng 'oninput'
// //                         inputElement.oninput = function () {
// //                             var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector);
// //                             errorElement.innerText = '';
// //                             getParent(inputElement, options.formGroup).classList.remove('invalid')
// //                         }
// //                     }
// //             })

// //             // Khi blur ra khỏi input sẽ thực hiện sự kiện

// //         });
// //     }

// // }

// // Validator.isRequired = function (selector, message) {
// //     return {
// //         selector: selector,
// //         test: function (value) {
// //             return value ? undefined : message || 'Vui lòng nhập trường này'
// //         }
// //     }
// // }

// // Validator.isEmail = function (selector) {
// //     return {
// //         selector: selector,
// //         test: function (value) {
// //             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// //             return regex.test(value) ? undefined : 'Giá trị nhập không đúng'
// //         }
// //     }
// // }

// // Validator.minlength = function (selector, min) {
// //     return {
// //         selector: selector,
// //         test: function (value) {
// //             return value.length >= min ? undefined: `Vui lòng nhập tối thiểu ${min} ký tự`
// //         }
// //     }
// // }

// // Validator.isComfirmed = function (selector, getConfirmValues) {
// //     return {
// //         selector: selector,
// //         test: function (value) {
// //             return value === getConfirmValues() ? undefined : 'Giá trị nhập vào không chính xác';
// //         }
// //     }
// // }

// /*
//     Mong muốn trong bài này
//         1. Tạo được 1 form đăng ký hoàn chỉnh
//         2. Làm ra thư viện form có thể sử dụng được nhiều
//         3. Lắng nghe, phân tích, hiểu code giống như hiểu ngy vậy
//     Tiến độ
//         5. Xử lý rule, có thể sử dụng tất cả các rule chứ không phải 1 cái
//         6. Xử lý form submit
// */

function Validator(options) {
  // Get form element
  var formElement = document.querySelector(options.form);

  // Dùng để xử lý lấy ra rule
  var selectorRules = {};

  function getParent(element, selector) {
    while (element.parentElement) {
      //Điều kiện dường
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  function validate(inputElement, rule) {
    // Get input element
    // Ví dụ trong 1 trang có nhiều form, thì việc lấy input có thể
    // gây ra nhầm, nên mình không đi từ document, mà đi từ formElement
    // Là lớp cha của input vào
    // Nhưng khi nhiều lớp cha thì đoạn mã này sẽ không chạy
    // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

    // Sẽ thay thế bằng đoạn mã này

    var errorElement = getParent(inputElement, options.formGroup).querySelector(
      options.errorSelector
    );
    // Get value input người dùng nhập vào
    var errorMessage;

    // Lấy ra các rule của selector
    var rules = selectorRules[rule.selector];

    // Lặp qua từng rule & kiểm tra
    // Vòng lặp sẽ lặp qua từng lỗi từng cái rule mà mình cho thêm
    // Và nó lặp qua 2 cái lỗi, tất nhiên sẽ lấy lỗi cuối mà nó lặp
    // Nên mình thêm hàm if là nếu erorrMessage là nếu có lỗi
    // Thì bắt lỗi đó trước, rồi nếu người nhập thì bắt lỗi phía sau
    for (var i = 0; i < rules.length; ++i) {
      // Khi muốn lấy tới các thẻ input có nhiều name như là radio, checkbox, select,.. thì dùng switchx
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;

        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }

    return !errorMessage;
  }

  if (formElement) {
    // Xử lý form submit
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;
      options.rules.forEach(function (rule) {
        // Khi bấm nút submit thì vòng lặp forEach sẽ lặp qua hết
        // validate là hàm xử lý nếu chưa nhập thì sẽ báo lỗi
        // nên khi đưa vào onsubmit khi bấm thi sẽ lặp qua form
        // Đồng thời lặp qua các input nếu chưa nhập thì sẽ báo lỗi
        // Còn sự kiện ở dưới là khi mình bấm vào và blur ra ngoài thì sự kiện mới hoạt đồng
        // Còn sự kiện onsubmit là bấm vào submit thì nguyên cái trang chưa form sẽ hoạt đồng hết
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);

        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");

          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            switch (input.type) {
              case "radio":
              case "checkbox":
                values[input.name] = formElement.querySelector(
                  'input[name ="' + input.name + '"]:checked'
                ).value;
                break;
              default:
                values[input.name] = input.value;
            }
            return values;
          },
          {});
          options.onSubmit(formValues);
        }
        // submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Lặp qua mảng
    //Đây là cách có thể lấy các key trong object
    options.rules.forEach(function (rule) {
      // Xử lý lưu các rule cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelectorAll(rule.selector);
      Array.from(inputElement).forEach((inputElement) => {
        // Xử lý việc blur ra khỏi input
        inputElement.onblur = function () {
          // Lấy ra phần tử, giá trị của input

          validate(inputElement, rule);

          // XỬ Lý sự kiện khi người dùng nhập giá trị vào input
          // khi trỏ chuột vào và bắt đầu nhập thì sẽ được hiểu là
          // undefine tức là chuỗi trống giống else ở trên
          // Thì lập tức xóa class
          inputElement.oninput = function () {
            var errorElement = inputElement.parentElement.querySelector(
              options.errorSelector
            );
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
          };
        };
      });
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Trường này chưa đúng với yêu cầu";
    },
  };
};

Validator.minlength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Gía trị nhập phải tối đa ${min} ký tự`;
    },
  };
};

Validator.isComfirmed = function (selector, getConfirmValues) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValues()
        ? undefined
        : "Trường này chưa chính xác";
    },
  };
};
