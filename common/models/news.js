'use strict';

module.exports = function(News) {
  News.observe('before save', function (ctx, next) {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId;

    if (ctx.instance) {
      ctx.instance.customerId = userId;
    }
    next();
  });
};
