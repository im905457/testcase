  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-mobile/js/widgets/listview.js at master · jquery/jquery-mobile</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/modules/logos_page/Octocat.png">
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4609291" name="octolytics-actor-id" /><meta content="im905457" name="octolytics-actor-login" /><meta content="e8bc9ea6c1a1f6699250e65fcd34632f4c80c62f9aef15b907a473c7d23a7f29" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="GgfGVEOnFWA05AIBp3OMicU2D8yJPwqqHQEE1/mUeGo=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-069f166cebb6afa806e7f150ae53692cbfaa83ab.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-58b10e96bcdc3e0d5ea328ffcd01e36e2e8fd07e.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-1f035caafe193d95a1028b6142ec3453f0da2419.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-75ad61b5f571ccedfb5ee8ffd08f1de0ad428c82.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="0fc470dd229a793445197dd55f5f2377">

        <link data-pjax-transient rel='permalink' href='/jquery/jquery-mobile/blob/e34f138c285ee196337998e5ecc20874d4257bf1/js/widgets/listview.js'>
    <meta property="og:title" content="jquery-mobile"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jquery/jquery-mobile"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/6906f317a4733f4379b06c32229ef02f?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-mobile - jQuery Mobile Framework"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jquery/jquery-mobile"/>

    <meta name="description" content="jquery-mobile - jQuery Mobile Framework" />


    <meta content="70142" name="octolytics-dimension-user_id" /><meta content="jquery" name="octolytics-dimension-user_login" /><meta content="907410" name="octolytics-dimension-repository_id" /><meta content="jquery/jquery-mobile" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="907410" name="octolytics-dimension-repository_network_root_id" /><meta content="jquery/jquery-mobile" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jquery/jquery-mobile/commits/master.atom" rel="alternate" title="Recent Commits to jquery-mobile:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    data-username="im905457"
      data-repo="jquery/jquery-mobile"
      data-branch="master"
      data-sha="8ad1630ca200262859fcf895cc60471e5ca4b3b2"
  >

    <input type="hidden" name="nwo" value="jquery/jquery-mobile" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/im905457" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/650aed6f606cf2defffb188e771d9859?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> im905457
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings (You have no verified emails)">
            <span class="octicon octicon-tools"></span>
          </a>
            <span class="settings-warning">!</span>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-list-unordered"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="jquery/jquery-mobile">This repository</span>
    </li>
    <li>
      <a href="/jquery/jquery-mobile/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      

<div class="flash-global flash-warn">
<div class="container">

    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
      Email verification helps our support team help you in case you have any email issues or lose your password.
    </p>












</div>
</div>



            <div class="global-notices">
      <div class="flash-global">
        <div class="container">
            <a href="/users/im905457/enable_repository_next?nwo=jquery%2Fjquery-mobile" class="button minibutton flash-action blue" data-method="post">Enable Repository Next</a>

            <h2>Hey there, would you like to enable our new repository design?</h2>
            <p>We&rsquo;ve been working hard making a <a href="https://github.com/blog/1529-repository-next">faster, better repository experience</a> and we&rsquo;d love to share it with you.</p>
        </div>
      </div>
    </div>
    <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="GgfGVEOnFWA05AIBp3OMicU2D8yJPwqqHQEE1/mUeGo=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="907410" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/jquery/jquery-mobile/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/jquery/jquery-mobile/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/jquery/jquery-mobile/stargazers">8,335</a>
    </li>

        <li>
          <a href="/jquery/jquery-mobile/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/jquery/jquery-mobile/network" class="social-count">1,935</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/jquery" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jquery</span>
                  </a></span> /
                <strong><a href="/jquery/jquery-mobile" class="js-current-repository">jquery-mobile</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/jquery/jquery-mobile/pulse" class="js-selected-navigation-item " data-selected-links="pulse /jquery/jquery-mobile/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/jquery/jquery-mobile" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jquery/jquery-mobile">Code</a></li>
    <li><a href="/jquery/jquery-mobile/network" class="js-selected-navigation-item " data-selected-links="repo_network /jquery/jquery-mobile/network">Network</a></li>
    <li><a href="/jquery/jquery-mobile/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /jquery/jquery-mobile/pulls">Pull Requests <span class='counter'>31</span></a></li>

      <li><a href="/jquery/jquery-mobile/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /jquery/jquery-mobile/issues">Issues <span class='counter'>332</span></a></li>

      <li><a href="/jquery/jquery-mobile/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /jquery/jquery-mobile/wiki">Wiki</a></li>


    <li><a href="/jquery/jquery-mobile/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /jquery/jquery-mobile/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jquery/jquery-mobile/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /jquery/jquery-mobile/tags">Tags <span class="counter ">30</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-git-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0-stable/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0-stable" rel="nofollow" title="1.0-stable">1.0-stable</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.1-stable/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1-stable" rel="nofollow" title="1.1-stable">1.1-stable</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2-stable/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2-stable" rel="nofollow" title="1.2-stable">1.2-stable</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.3-stable/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3-stable" rel="nofollow" title="1.3-stable">1.3-stable</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/4974-move-non-option-constants-to-defaults-object/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="4974-move-non-option-constants-to-defaults-object" rel="nofollow" title="4974-move-non-option-constants-to-defaults-object">4974-move-non-option-constants-to-defaults-object</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/active-state-fix/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="active-state-fix" rel="nofollow" title="active-state-fix">active-state-fix</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/basetag/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="basetag" rel="nofollow" title="basetag">basetag</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/before-next/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="before-next" rel="nofollow" title="before-next">before-next</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/content-widget/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="content-widget" rel="nofollow" title="content-widget">content-widget</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/coverTansitions/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="coverTansitions" rel="nofollow" title="coverTansitions">coverTansitions</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/dom-creation/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="dom-creation" rel="nofollow" title="dom-creation">dom-creation</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/ext-panels/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="ext-panels" rel="nofollow" title="ext-panels">ext-panels</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/fetchlink/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fetchlink" rel="nofollow" title="fetchlink">fetchlink</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/flip/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="flip" rel="nofollow" title="flip">flip</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/grunticon/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="grunticon" rel="nofollow" title="grunticon">grunticon</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/ios6-ofix-optout/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="ios6-ofix-optout" rel="nofollow" title="ios6-ofix-optout">ios6-ofix-optout</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/jqm-private/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="jqm-private" rel="nofollow" title="jqm-private">jqm-private</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/lazy-widgets/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="lazy-widgets" rel="nofollow" title="lazy-widgets">lazy-widgets</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/lazy-widgets-via-accessors/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="lazy-widgets-via-accessors" rel="nofollow" title="lazy-widgets-via-accessors">lazy-widgets-via-accessors</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/lazy-widgets-with-registry/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="lazy-widgets-with-registry" rel="nofollow" title="lazy-widgets-with-registry">lazy-widgets-with-registry</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/listview-grid/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="listview-grid" rel="nofollow" title="listview-grid">listview-grid</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/listview-swipe-reveal/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="listview-swipe-reveal" rel="nofollow" title="listview-swipe-reveal">listview-swipe-reveal</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/master/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/mobile-media-refactor/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="mobile-media-refactor" rel="nofollow" title="mobile-media-refactor">mobile-media-refactor</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/next/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="next" rel="nofollow" title="next">next</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/old-docs/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="old-docs" rel="nofollow" title="old-docs">old-docs</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/page-sections/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="page-sections" rel="nofollow" title="page-sections">page-sections</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/perf/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="perf" rel="nofollow" title="perf">perf</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/popup-not-relocated/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="popup-not-relocated" rel="nofollow" title="popup-not-relocated">popup-not-relocated</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/table-refresh-1.3/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="table-refresh-1.3" rel="nofollow" title="table-refresh-1.3">table-refresh-1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/tabs/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="tabs" rel="nofollow" title="tabs">tabs</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/test-for-image-loading/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="test-for-image-loading" rel="nofollow" title="test-for-image-loading">test-for-image-loading</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/testswarm/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="testswarm" rel="nofollow" title="testswarm">testswarm</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/touch-remove/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="touch-remove" rel="nofollow" title="touch-remove">touch-remove</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/transition-handler-refactor/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="transition-handler-refactor" rel="nofollow" title="transition-handler-refactor">transition-handler-refactor</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/widget-registry/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="widget-registry" rel="nofollow" title="widget-registry">widget-registry</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.3.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.1" rel="nofollow" title="1.3.1">1.3.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.3.0-rc.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.0-rc.1" rel="nofollow" title="1.3.0-rc.1">1.3.0-rc.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.3.0-beta.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.0-beta.1" rel="nofollow" title="1.3.0-beta.1">1.3.0-beta.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.3.0/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.0" rel="nofollow" title="1.3.0">1.3.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.1" rel="nofollow" title="1.2.1">1.2.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2.0-rc.2/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0-rc.2" rel="nofollow" title="1.2.0-rc.2">1.2.0-rc.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2.0-rc.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0-rc.1" rel="nofollow" title="1.2.0-rc.1">1.2.0-rc.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2.0-pre/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0-pre" rel="nofollow" title="1.2.0-pre">1.2.0-pre</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2.0-beta.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0-beta.1" rel="nofollow" title="1.2.0-beta.1">1.2.0-beta.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2.0-alpha.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0-alpha.1" rel="nofollow" title="1.2.0-alpha.1">1.2.0-alpha.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.2.0/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0" rel="nofollow" title="1.2.0">1.2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.1.2/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.2" rel="nofollow" title="1.1.2">1.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.1.1-rc.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.1-rc.1" rel="nofollow" title="1.1.1-rc.1">1.1.1-rc.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.1.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.1" rel="nofollow" title="1.1.1">1.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.1.0-rc.2/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.0-rc.2" rel="nofollow" title="1.1.0-rc.2">1.1.0-rc.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.1.0-rc.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.0-rc.1" rel="nofollow" title="1.1.0-rc.1">1.1.0-rc.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.1.0/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.0" rel="nofollow" title="1.1.0">1.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0rc3/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0rc3" rel="nofollow" title="1.0rc3">1.0rc3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0rc2/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0rc2" rel="nofollow" title="1.0rc2">1.0rc2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0rc1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0rc1" rel="nofollow" title="1.0rc1">1.0rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0b3/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0b3" rel="nofollow" title="1.0b3">1.0b3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0b2/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0b2" rel="nofollow" title="1.0b2">1.0b2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0b1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0b1" rel="nofollow" title="1.0b1">1.0b1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0a4.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0a4.1" rel="nofollow" title="1.0a4.1">1.0a4.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0a4/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0a4" rel="nofollow" title="1.0a4">1.0a4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0a3/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0a3" rel="nofollow" title="1.0a3">1.0a3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0a2/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0a2" rel="nofollow" title="1.0a2">1.0a2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0a1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0a1" rel="nofollow" title="1.0a1">1.0a1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0.1/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.1" rel="nofollow" title="1.0.1">1.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jquery/jquery-mobile/blob/1.0/js/widgets/listview.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0" rel="nofollow" title="1.0">1.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jquery/jquery-mobile" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /jquery/jquery-mobile">Files</a></li>
    <li><a href="/jquery/jquery-mobile/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /jquery/jquery-mobile/commits/master">Commits</a></li>
    <li><a href="/jquery/jquery-mobile/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /jquery/jquery-mobile/branches" rel="nofollow">Branches <span class="counter ">36</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:7b51fb715dbb12fa1f7c43551d135da7 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:7b51fb715dbb12fa1f7c43551d135da7 -->

<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <a href="/jquery/jquery-mobile/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        <div class="breadcrumb">
          <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jquery/jquery-mobile" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery-mobile</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jquery/jquery-mobile/tree/master/js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jquery/jquery-mobile/tree/master/js/widgets" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">widgets</span></a></span><span class="separator"> / </span><strong class="final-path">listview.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="js/widgets/listview.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>


        <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/jquery/jquery-mobile/contributors/master/js/widgets/listview.js">
          Fetching contributors…

          <div class="participation">
            <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
            <p class="loader-error">Cannot retrieve contributors at this time</p>
          </div>
        </div>

    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jquery/jquery-mobile/blob/e34f138c285ee196337998e5ecc20874d4257bf1/js/widgets/listview.js" data-title="jquery-mobile/js/widgets/listview.js at master · jquery/jquery-mobile · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>209 lines (170 sloc)</span>
                <span>6.861 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/jquery/jquery-mobile/edit/master/js/widgets/listview.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/jquery/jquery-mobile/raw/master/js/widgets/listview.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jquery/jquery-mobile/blame/master/js/widgets/listview.js" class="button minibutton ">Blame</a>
                  <a href="/jquery/jquery-mobile/commits/master/js/widgets/listview.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">//&gt;&gt;excludeStart(&quot;jqmBuildExclude&quot;, pragmas.jqmBuildExclude);</span></div><div class='line' id='LC2'><span class="c1">//&gt;&gt;description: Applies listview styling of various types (standard, numbered, split button, etc.)</span></div><div class='line' id='LC3'><span class="c1">//&gt;&gt;label: Listview</span></div><div class='line' id='LC4'><span class="c1">//&gt;&gt;group: Widgets</span></div><div class='line' id='LC5'><span class="c1">//&gt;&gt;css.structure: ../css/structure/jquery.mobile.listview.css</span></div><div class='line' id='LC6'><span class="c1">//&gt;&gt;css.theme: ../css/themes/default/jquery.mobile.theme.css</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="nx">define</span><span class="p">(</span> <span class="p">[</span> <span class="s2">&quot;jquery&quot;</span><span class="p">,</span> <span class="s2">&quot;../jquery.mobile.widget&quot;</span><span class="p">,</span> <span class="s2">&quot;./page&quot;</span><span class="p">,</span> <span class="s2">&quot;./addFirstLastClasses&quot;</span><span class="p">,</span> <span class="s2">&quot;../jquery.mobile.registry&quot;</span> <span class="p">],</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">jQuery</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'><span class="c1">//&gt;&gt;excludeEnd(&quot;jqmBuildExclude&quot;);</span></div><div class='line' id='LC10'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="kd">var</span> <span class="nx">getAttr</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">mobile</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">;</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="nx">$</span><span class="p">.</span><span class="nx">widget</span><span class="p">(</span> <span class="s2">&quot;mobile.listview&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">mobile</span><span class="p">.</span><span class="nx">widget</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="nx">options</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC17'>		<span class="nx">theme</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC18'>		<span class="nx">countTheme</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC19'>		<span class="nx">dividerTheme</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC20'>		<span class="nx">icon</span><span class="o">:</span> <span class="s2">&quot;arrow-r&quot;</span><span class="p">,</span></div><div class='line' id='LC21'>		<span class="nx">splitIcon</span><span class="o">:</span> <span class="s2">&quot;arrow-r&quot;</span><span class="p">,</span></div><div class='line' id='LC22'>		<span class="nx">splitTheme</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC23'>		<span class="nx">corners</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC24'>		<span class="nx">shadow</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC25'>		<span class="nx">inset</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC26'>	<span class="p">},</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="nx">_create</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC30'>			<span class="nx">listviewClasses</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>		<span class="nx">listviewClasses</span> <span class="o">+=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">inset</span> <span class="o">?</span> <span class="s2">&quot; ui-listview-inset&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!!</span><span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">inset</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC35'>			<span class="nx">listviewClasses</span> <span class="o">+=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">corners</span> <span class="o">?</span> <span class="s2">&quot; ui-corner-all&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC36'>			<span class="nx">listviewClasses</span> <span class="o">+=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">shadow</span> <span class="o">?</span> <span class="s2">&quot; ui-shadow&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC37'>		<span class="p">}</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>		<span class="c1">// create listview markup</span></div><div class='line' id='LC40'>		<span class="nx">t</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span> <span class="s2">&quot; ui-listview&quot;</span> <span class="o">+</span> <span class="nx">listviewClasses</span> <span class="p">);</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>		<span class="nx">t</span><span class="p">.</span><span class="nx">refresh</span><span class="p">(</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC43'>	<span class="p">},</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>	<span class="c1">// TODO: Remove in 1.5</span></div><div class='line' id='LC46'>	<span class="nx">_findFirstElementByTagName</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">ele</span><span class="p">,</span> <span class="nx">nextProp</span><span class="p">,</span> <span class="nx">lcName</span><span class="p">,</span> <span class="nx">ucName</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>		<span class="kd">var</span> <span class="nx">dict</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC48'>		<span class="nx">dict</span><span class="p">[</span> <span class="nx">lcName</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">dict</span><span class="p">[</span> <span class="nx">ucName</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC49'>		<span class="k">while</span> <span class="p">(</span> <span class="nx">ele</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">dict</span><span class="p">[</span> <span class="nx">ele</span><span class="p">.</span><span class="nx">nodeName</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC51'>				<span class="k">return</span> <span class="nx">ele</span><span class="p">;</span></div><div class='line' id='LC52'>			<span class="p">}</span></div><div class='line' id='LC53'>			<span class="nx">ele</span> <span class="o">=</span> <span class="nx">ele</span><span class="p">[</span> <span class="nx">nextProp</span> <span class="p">];</span></div><div class='line' id='LC54'>		<span class="p">}</span></div><div class='line' id='LC55'>		<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC56'>	<span class="p">},</span></div><div class='line' id='LC57'>	<span class="c1">// TODO: Remove in 1.5</span></div><div class='line' id='LC58'>	<span class="nx">_addThumbClasses</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">containers</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>		<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">img</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">containers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC60'>		<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>			<span class="nx">img</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_findFirstElementByTagName</span><span class="p">(</span> <span class="nx">containers</span><span class="p">[</span> <span class="nx">i</span> <span class="p">].</span><span class="nx">firstChild</span><span class="p">,</span> <span class="s2">&quot;nextSibling&quot;</span><span class="p">,</span> <span class="s2">&quot;img&quot;</span><span class="p">,</span> <span class="s2">&quot;IMG&quot;</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC62'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">img</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>				<span class="nx">$</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">_findFirstElementByTagName</span><span class="p">(</span> <span class="nx">img</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">parentNode</span><span class="p">,</span> <span class="s2">&quot;parentNode&quot;</span><span class="p">,</span> <span class="s2">&quot;li&quot;</span><span class="p">,</span> <span class="s2">&quot;LI&quot;</span> <span class="p">)</span> <span class="p">).</span><span class="nx">addClass</span><span class="p">(</span> <span class="nx">img</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span> <span class="s2">&quot;ui-li-icon&quot;</span> <span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;ui-li-has-icon&quot;</span> <span class="o">:</span> <span class="s2">&quot;ui-li-has-thumb&quot;</span> <span class="p">);</span></div><div class='line' id='LC64'>			<span class="p">}</span></div><div class='line' id='LC65'>		<span class="p">}</span></div><div class='line' id='LC66'>	<span class="p">},</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>	<span class="nx">_getChildrenByTagName</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">ele</span><span class="p">,</span> <span class="nx">lcName</span><span class="p">,</span> <span class="nx">ucName</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC69'>		<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC70'>			<span class="nx">dict</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC71'>		<span class="nx">dict</span><span class="p">[</span> <span class="nx">lcName</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">dict</span><span class="p">[</span> <span class="nx">ucName</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC72'>		<span class="nx">ele</span> <span class="o">=</span> <span class="nx">ele</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span></div><div class='line' id='LC73'>		<span class="k">while</span> <span class="p">(</span> <span class="nx">ele</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">dict</span><span class="p">[</span> <span class="nx">ele</span><span class="p">.</span><span class="nx">nodeName</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>				<span class="nx">results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">ele</span> <span class="p">);</span></div><div class='line' id='LC76'>			<span class="p">}</span></div><div class='line' id='LC77'>			<span class="nx">ele</span> <span class="o">=</span> <span class="nx">ele</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">;</span></div><div class='line' id='LC78'>		<span class="p">}</span></div><div class='line' id='LC79'>		<span class="k">return</span> <span class="nx">$</span><span class="p">(</span> <span class="nx">results</span> <span class="p">);</span></div><div class='line' id='LC80'>	<span class="p">},</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>	<span class="nx">refresh</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">create</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>		<span class="kd">var</span> <span class="nx">buttonClass</span><span class="p">,</span> <span class="nx">pos</span><span class="p">,</span> <span class="nx">numli</span><span class="p">,</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">itemClass</span><span class="p">,</span> <span class="nx">itemTheme</span><span class="p">,</span> <span class="nx">itemIcon</span><span class="p">,</span> <span class="nx">icon</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span></div><div class='line' id='LC84'>			<span class="nx">isDivider</span><span class="p">,</span> <span class="nx">startCount</span><span class="p">,</span> <span class="nx">newStartCount</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">last</span><span class="p">,</span> <span class="nx">splittheme</span><span class="p">,</span> <span class="nx">spliticon</span><span class="p">,</span></div><div class='line' id='LC85'>			<span class="nx">altButtonClass</span><span class="p">,</span> <span class="nx">dividerTheme</span><span class="p">,</span></div><div class='line' id='LC86'>			<span class="nx">o</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC87'>			<span class="nx">$list</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">,</span></div><div class='line' id='LC88'>			<span class="nx">li</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getChildrenByTagName</span><span class="p">(</span> <span class="nx">$list</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;li&quot;</span><span class="p">,</span> <span class="s2">&quot;LI&quot;</span> <span class="p">),</span></div><div class='line' id='LC89'>			<span class="nx">ol</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">$</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">(</span> <span class="nx">$list</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;ol&quot;</span> <span class="p">),</span></div><div class='line' id='LC90'>			<span class="nx">start</span> <span class="o">=</span> <span class="nx">$list</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="s2">&quot;start&quot;</span> <span class="p">),</span></div><div class='line' id='LC91'>			<span class="nx">itemClassDict</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC92'>			<span class="nx">countBubbles</span> <span class="o">=</span> <span class="nx">$list</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span> <span class="s2">&quot;.ui-li-count&quot;</span> <span class="p">),</span></div><div class='line' id='LC93'>			<span class="nx">countTheme</span> <span class="o">=</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">$list</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;counttheme&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">)</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">countTheme</span><span class="p">,</span></div><div class='line' id='LC94'>			<span class="nx">countThemeClass</span> <span class="o">=</span> <span class="nx">countTheme</span> <span class="o">?</span> <span class="s2">&quot;ui-body-&quot;</span> <span class="o">+</span> <span class="nx">countTheme</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">o</span><span class="p">.</span><span class="nx">theme</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'>			<span class="nx">$list</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span> <span class="s2">&quot;ui-group-theme-&quot;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">theme</span> <span class="p">);</span></div><div class='line' id='LC98'>		<span class="p">}</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>		<span class="c1">// Check if a start attribute has been set while taking a value of 0 into account</span></div><div class='line' id='LC101'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">ol</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">start</span> <span class="o">||</span> <span class="nx">start</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>			<span class="nx">startCount</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span> <span class="nx">start</span><span class="p">,</span> <span class="mi">10</span> <span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC103'>			<span class="nx">$list</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span> <span class="s2">&quot;counter-reset&quot;</span><span class="p">,</span> <span class="s2">&quot;listnumbering &quot;</span> <span class="o">+</span> <span class="nx">startCount</span> <span class="p">);</span></div><div class='line' id='LC104'>		<span class="p">}</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>		<span class="k">for</span> <span class="p">(</span> <span class="nx">pos</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">numli</span> <span class="o">=</span> <span class="nx">li</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">pos</span> <span class="o">&lt;</span> <span class="nx">numli</span><span class="p">;</span> <span class="nx">pos</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'>			<span class="nx">item</span> <span class="o">=</span> <span class="nx">li</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span> <span class="nx">pos</span> <span class="p">);</span></div><div class='line' id='LC108'>			<span class="nx">itemClass</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">create</span> <span class="o">||</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">className</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span> <span class="sr">/\bui-li-static\b|\bui-li-divider\b/</span> <span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>				<span class="nx">a</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getChildrenByTagName</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;a&quot;</span><span class="p">,</span> <span class="s2">&quot;A&quot;</span> <span class="p">);</span></div><div class='line' id='LC112'>				<span class="nx">isDivider</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;role&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;list-divider&quot;</span> <span class="p">);</span></div><div class='line' id='LC113'>				<span class="nx">value</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="s2">&quot;value&quot;</span> <span class="p">);</span></div><div class='line' id='LC114'>				<span class="nx">itemTheme</span> <span class="o">=</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;theme&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">a</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">a</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">className</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span> <span class="sr">/\bui-btn\b/</span> <span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">isDivider</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>					<span class="nx">itemIcon</span> <span class="o">=</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;icon&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC118'>					<span class="nx">icon</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">itemIcon</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">)</span> <span class="o">?</span> <span class="kc">false</span> <span class="o">:</span> <span class="p">(</span> <span class="nx">itemIcon</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">icon</span> <span class="p">);</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>					<span class="c1">// TODO: Remove in 1.5 together with links.js (links.js / .ui-link deprecated in 1.4)</span></div><div class='line' id='LC121'>					<span class="nx">a</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span> <span class="s2">&quot;ui-link&quot;</span> <span class="p">);</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>					<span class="nx">buttonClass</span> <span class="o">=</span> <span class="s2">&quot;ui-btn&quot;</span><span class="p">;</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">itemTheme</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'>						<span class="nx">buttonClass</span> <span class="o">+=</span> <span class="s2">&quot; ui-btn-&quot;</span> <span class="o">+</span> <span class="nx">itemTheme</span><span class="p">;</span></div><div class='line' id='LC127'>					<span class="p">}</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">a</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>						<span class="nx">itemClass</span> <span class="o">=</span> <span class="s2">&quot;ui-li-has-alt&quot;</span><span class="p">;</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>						<span class="nx">last</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">last</span><span class="p">();</span></div><div class='line' id='LC133'>						<span class="nx">splittheme</span> <span class="o">=</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">last</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;theme&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">splitTheme</span> <span class="o">||</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;theme&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC134'>						<span class="nx">spliticon</span> <span class="o">=</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">last</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;icon&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;icon&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">splitIcon</span><span class="p">;</span></div><div class='line' id='LC135'>						<span class="nx">altButtonClass</span> <span class="o">=</span> <span class="nx">splittheme</span> <span class="o">?</span> <span class="s2">&quot;ui-btn ui-btn-&quot;</span> <span class="o">+</span> <span class="nx">splittheme</span> <span class="o">+</span> <span class="s2">&quot; ui-icon-&quot;</span> <span class="o">+</span> <span class="nx">spliticon</span> <span class="o">:</span> <span class="s2">&quot;ui-btn ui-icon-&quot;</span> <span class="o">+</span> <span class="nx">spliticon</span><span class="p">;</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>						<span class="nx">last</span></div><div class='line' id='LC138'>							<span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="s2">&quot;title&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span> <span class="nx">last</span><span class="p">.</span><span class="nx">getEncodedText</span><span class="p">()</span> <span class="p">)</span> <span class="p">)</span></div><div class='line' id='LC139'>							<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span> <span class="nx">altButtonClass</span> <span class="p">)</span></div><div class='line' id='LC140'>							<span class="p">.</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC141'>					<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">icon</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>						<span class="nx">buttonClass</span> <span class="o">+=</span> <span class="s2">&quot; ui-icon-&quot;</span> <span class="o">+</span> <span class="nx">icon</span><span class="p">;</span></div><div class='line' id='LC143'>					<span class="p">}</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>					<span class="nx">a</span><span class="p">.</span><span class="nx">first</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span> <span class="nx">buttonClass</span> <span class="p">);</span></div><div class='line' id='LC146'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">isDivider</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>					<span class="nx">dividerTheme</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">getAttr</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span> <span class="s2">&quot;theme&quot;</span><span class="p">,</span> <span class="kc">true</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">dividerTheme</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">theme</span> <span class="p">);</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>					<span class="nx">itemClass</span> <span class="o">=</span> <span class="s2">&quot;ui-li-divider ui-bar-&quot;</span> <span class="o">+</span> <span class="p">(</span> <span class="nx">dividerTheme</span> <span class="o">?</span> <span class="nx">dividerTheme</span> <span class="o">:</span> <span class="s2">&quot;inherit&quot;</span> <span class="p">);</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>					<span class="nx">item</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="s2">&quot;role&quot;</span><span class="p">,</span> <span class="s2">&quot;heading&quot;</span> <span class="p">);</span></div><div class='line' id='LC152'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">a</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC153'>					<span class="nx">itemClass</span> <span class="o">=</span> <span class="s2">&quot;ui-li-static ui-body-&quot;</span> <span class="o">+</span> <span class="p">(</span> <span class="nx">itemTheme</span> <span class="o">?</span> <span class="nx">itemTheme</span> <span class="o">:</span> <span class="s2">&quot;inherit&quot;</span> <span class="p">);</span></div><div class='line' id='LC154'>				<span class="p">}</span></div><div class='line' id='LC155'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">ol</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'>					<span class="nx">newStartCount</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span> <span class="nx">value</span> <span class="p">,</span> <span class="mi">10</span> <span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>					<span class="nx">item</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span> <span class="s2">&quot;counter-reset&quot;</span><span class="p">,</span> <span class="s2">&quot;listnumbering &quot;</span> <span class="o">+</span> <span class="nx">newStartCount</span> <span class="p">);</span></div><div class='line' id='LC159'>				<span class="p">}</span></div><div class='line' id='LC160'>			<span class="p">}</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>			<span class="c1">// Instead of setting item class directly on the list item</span></div><div class='line' id='LC163'>			<span class="c1">// at this point in time, push the item into a dictionary</span></div><div class='line' id='LC164'>			<span class="c1">// that tells us what class to set on it so we can do this after this</span></div><div class='line' id='LC165'>			<span class="c1">// processing loop is finished.</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">itemClassDict</span><span class="p">[</span> <span class="nx">itemClass</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC168'>				<span class="nx">itemClassDict</span><span class="p">[</span> <span class="nx">itemClass</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC169'>			<span class="p">}</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>			<span class="nx">itemClassDict</span><span class="p">[</span> <span class="nx">itemClass</span> <span class="p">].</span><span class="nx">push</span><span class="p">(</span> <span class="nx">item</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC172'>		<span class="p">}</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'>		<span class="c1">// Set the appropriate listview item classes on each list item.</span></div><div class='line' id='LC175'>		<span class="c1">// The main reason we didn&#39;t do this</span></div><div class='line' id='LC176'>		<span class="c1">// in the for-loop above is because we can eliminate per-item function overhead</span></div><div class='line' id='LC177'>		<span class="c1">// by calling addClass() and children() once or twice afterwards. This</span></div><div class='line' id='LC178'>		<span class="c1">// can give us a significant boost on platforms like WP7.5.</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>		<span class="k">for</span> <span class="p">(</span> <span class="nx">itemClass</span> <span class="k">in</span> <span class="nx">itemClassDict</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>			<span class="nx">$</span><span class="p">(</span> <span class="nx">itemClassDict</span><span class="p">[</span> <span class="nx">itemClass</span> <span class="p">]</span> <span class="p">).</span><span class="nx">addClass</span><span class="p">(</span> <span class="nx">itemClass</span> <span class="p">);</span></div><div class='line' id='LC182'>		<span class="p">}</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>		<span class="nx">countBubbles</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC185'>			<span class="nx">$</span><span class="p">(</span> <span class="k">this</span> <span class="p">).</span><span class="nx">closest</span><span class="p">(</span> <span class="s2">&quot;li&quot;</span> <span class="p">).</span><span class="nx">addClass</span><span class="p">(</span> <span class="s2">&quot;ui-li-has-count&quot;</span> <span class="p">);</span></div><div class='line' id='LC186'>		<span class="p">});</span></div><div class='line' id='LC187'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">countThemeClass</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>			<span class="nx">countBubbles</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span> <span class="nx">countThemeClass</span> <span class="p">);</span></div><div class='line' id='LC189'>		<span class="p">}</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>		<span class="c1">// Deprecated in 1.4. From 1.5 you have to add class ui-li-has-thumb or ui-li-has-icon to the LI.</span></div><div class='line' id='LC192'>		<span class="k">this</span><span class="p">.</span><span class="nx">_addThumbClasses</span><span class="p">(</span> <span class="nx">li</span> <span class="p">);</span></div><div class='line' id='LC193'>		<span class="k">this</span><span class="p">.</span><span class="nx">_addThumbClasses</span><span class="p">(</span> <span class="nx">li</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span> <span class="s2">&quot;.ui-btn&quot;</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>		<span class="k">this</span><span class="p">.</span><span class="nx">_addFirstLastClasses</span><span class="p">(</span> <span class="nx">li</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getVisibles</span><span class="p">(</span> <span class="nx">li</span><span class="p">,</span> <span class="nx">create</span> <span class="p">),</span> <span class="nx">create</span> <span class="p">);</span></div><div class='line' id='LC196'>		<span class="c1">// autodividers binds to this to redraw dividers after the listview refresh</span></div><div class='line' id='LC197'>		<span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span> <span class="s2">&quot;afterrefresh&quot;</span> <span class="p">);</span></div><div class='line' id='LC198'>	<span class="p">}},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">mobile</span><span class="p">.</span><span class="nx">behaviors</span><span class="p">.</span><span class="nx">addFirstLastClasses</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'><span class="nx">$</span><span class="p">.</span><span class="nx">mobile</span><span class="p">.</span><span class="nx">listview</span><span class="p">.</span><span class="nx">initSelector</span> <span class="o">=</span> <span class="s2">&quot;:jqmData(role=&#39;listview&#39;)&quot;</span><span class="p">;</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'><span class="c1">//auto self-init widgets</span></div><div class='line' id='LC203'><span class="nx">$</span><span class="p">.</span><span class="nx">mobile</span><span class="p">.</span><span class="nx">_enhancer</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="s2">&quot;mobile.listview&quot;</span> <span class="p">);</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div><div class='line' id='LC206'><span class="c1">//&gt;&gt;excludeStart(&quot;jqmBuildExclude&quot;, pragmas.jqmBuildExclude);</span></div><div class='line' id='LC207'><span class="p">});</span></div><div class='line' id='LC208'><span class="c1">//&gt;&gt;excludeEnd(&quot;jqmBuildExclude&quot;);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
            <button type="submit" class="button">Go</button>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="https://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="https://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="https://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="https://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="https://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.19675s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jquery/jquery-mobile/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
    <span id='server_response_time' data-time='0.19723' data-host='fe4'></span>
    
  </body>
</html>

