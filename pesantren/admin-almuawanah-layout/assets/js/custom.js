/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";
// $(".pwstrength").pwstrength();

$(".inputtags").tagsinput('items');

var cleavePN = new Cleave('.phone-number', {
    phone: true,
    phoneRegionCode: 'ID'
  });
