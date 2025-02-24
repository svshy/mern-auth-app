export const getVerifyEmailHTMLTemplate = (confirmUrl: string) => ({
  subject: "Verify your account in Blog App",
  text: "Verify your account in Blog App",
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t30,.t35{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t31{padding:40px!important}.t33{border-radius:0!important;width:480px!important}.t28,.t3,.t9{width:398px!important}.t21{text-align:left!important}.t20{vertical-align:top!important;width:auto!important;max-width:100%!important}
}
</style>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&amp;family=Sofia+Sans:wght@700&amp;family=Open+Sans:wght@400;600&amp;display=swap" rel="stylesheet" type="text/css" />
</head>
<body id="body" class="t38" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t37" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t36" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t33" style="background-color:#FFFFFF;border:1px solid #EBEBEB;overflow:hidden;width:600px;border-radius:3px 3px 3px 3px;">
<table class="t32" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t31" style="padding:44px 42px 32px 42px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t3" style="border-bottom:1px solid #EFF1F4;width:514px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 18px 0;"><h1 class="t0" style="margin:0;Margin:0;font-family:Montserrat,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Confirm your account</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t9" style="width:514px;">
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t7"><p class="t6" style="margin:0;Margin:0;font-family:Open Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;letter-spacing:-0.1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Please click the button below to confirm your email address and finish setting up your account. This link is valid for 24 hours.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:24px;line-height:24px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t16" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<td class="t15" style="background-color:#0666EB;overflow:hidden;width:auto;border-radius:40px 40px 40px 40px;">
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="width:auto;"><tr><td class="t13" style="text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:5px;padding:0 23px 0 23px;"><a href=${confirmUrl} class="t11" style="display:inline-block;margin:0;Margin:0;font-family:Sofia Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.2px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:5px;background-color:#0666EB;border-radius:40px;padding:0 23px;">Confirm</a></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t25" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t28" style="border-top:1px solid #DFE1E4;width:514px;">
<table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t26" style="padding:24px 0 0 0;"><div class="t24" style="width:100%;text-align:left;"><div class="t23" style="display:inline-block;"><table class="t22" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t21"><td></td><td class="t20" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t19" style="width:auto;"><tr><td class="t18" style="background-color:#FFFFFF;text-align:center;line-height:20px;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t17" style="display:block;margin:0;Margin:0;font-family:Open Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:600;font-style:normal;font-size:14px;text-decoration:none;direction:ltr;color:#222222;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">BlogApp</span></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t35" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`,
});

export const getResetPasswordHTMLTemplate = (confirmUrl: string) => ({
  subject: "Reset your password in Blog App",
  text: "Reset your password in Blog App",
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t30,.t35{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t31{padding:40px!important}.t33{border-radius:0!important;width:480px!important}.t28,.t3,.t9{width:398px!important}.t21{text-align:left!important}.t20{vertical-align:top!important;width:auto!important;max-width:100%!important}
}
</style>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&amp;family=Sofia+Sans:wght@700&amp;family=Open+Sans:wght@400;600&amp;display=swap" rel="stylesheet" type="text/css" />
</head>
<body id="body" class="t38" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t37" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t36" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t33" style="background-color:#FFFFFF;border:1px solid #EBEBEB;overflow:hidden;width:600px;border-radius:3px 3px 3px 3px;">
<table class="t32" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t31" style="padding:44px 42px 32px 42px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t3" style="border-bottom:1px solid #EFF1F4;width:514px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 18px 0;"><h1 class="t0" style="margin:0;Margin:0;font-family:Montserrat,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Forgot password?</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t9" style="width:514px;">
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t7"><p class="t6" style="margin:0;Margin:0;font-family:Open Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;letter-spacing:-0.1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Please click the button below to reset your password. This link is valid for 1 hour.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:24px;line-height:24px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t16" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<td class="t15" style="background-color:#0666EB;overflow:hidden;width:auto;border-radius:40px 40px 40px 40px;">
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="width:auto;"><tr><td class="t13" style="text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:5px;padding:0 23px 0 23px;"><a href=${confirmUrl} class="t11" style="display:inline-block;margin:0;Margin:0;font-family:Sofia Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.2px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:5px;background-color:#0666EB;border-radius:40px;padding:0 23px;">Reset password</a></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t25" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<td class="t28" style="border-top:1px solid #DFE1E4;width:514px;">
<table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t26" style="padding:24px 0 0 0;"><div class="t24" style="width:100%;text-align:left;"><div class="t23" style="display:inline-block;"><table class="t22" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t21"><td></td><td class="t20" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t19" style="width:auto;"><tr><td class="t18" style="background-color:#FFFFFF;text-align:center;line-height:20px;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t17" style="display:block;margin:0;Margin:0;font-family:Open Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:600;font-style:normal;font-size:14px;text-decoration:none;direction:ltr;color:#222222;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">BlogApp</span></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t35" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`,
});
