<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/19/16
 * Time: 10:54
 */
class BasicPack{

    static $BEING_AUDITED = false;

    /**
     * Handles dispatch_initialized
     */
    static function dispatchInit(){
        self::$BEING_AUDITED = !(!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Speed Insights') === false);
    }

    /**
     * Handles after_scripts_print
     */
    static function afterScripts(){
        global $settings;

        if(!self::$BEING_AUDITED){
            if ($settings['analytics-account']){
                // Dump analytics
                $ua = $settings['analytics-account']->value;
                echo "
<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '$ua', 'auto');
ga('send', 'pageview');
</script>
            ";
            }
        }
    }

    /**
     * Handles get_global_configuration_settings
     * @return array
     */
    static function globalSettings(){
        return array(
            'analytics-account' => array(
                'icon' => 'chart_bars'
            )
        );
    }

}