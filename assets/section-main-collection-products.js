document.addEventListener("DOMContentLoaded", function() {
    var purchaseTypeRadio = document.querySelectorAll('input[type=radio][name=purchase_type]');
    for (var i = 0; i < purchaseTypeRadio.length; i++) {
      purchaseTypeRadio[i].addEventListener('change', function() {
        if (this.value == 'onetime') {
          document.querySelector('.shipping_interval_unit_type').removeAttribute("name");
          document.querySelector('.auto_frequency').removeAttribute("name");
          document.querySelector('.subscription_variant_id').removeAttribute("name");
          document.querySelector('.defaut_variant_id').setAttribute("name", "id");
          this.closest('form').querySelector('.subscription-frequency-selector').classList.remove('active');
        }
        else if (this.value == 'autodeliver') {
          document.querySelector('.shipping_interval_unit_type').setAttribute("name", "properties[shipping_interval_unit_type]");
          document.querySelector('.auto_frequency').setAttribute("name", "properties[shipping_interval_frequency]");
          document.querySelector('.subscription_variant_id').setAttribute("name", "id");
          document.querySelector('.defaut_variant_id').removeAttribute("name");
          this.closest('form').querySelector('.subscription-frequency-selector').classList.add('active');
        }
      });
    }
  });
  