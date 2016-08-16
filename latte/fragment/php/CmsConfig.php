<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/1/16
 * Time: 21:11
 */
class CmsConfig{

    private static $_fileUploadIsS3 = null;
    private static $_s3Key = null;
    private static $_s3Pass = null;
    private static $_s3Bucket = null;
    private static $_filesPath = null;

    /**
     * @return null|string
     */
    public static function getFilesPath(){
        if(self::$_filesPath === null){
            self::$_s3Key = Setting::getValue('cms', 0, 'files-path');

            if (!self::$_filesPath){
                self::$_filesPath = 'fragment/files';
            }
        }
        return self::$_filesPath;
    }

    /**
     * Gets a value indicating if the upload is configured to be S3
     * @return boolean
     */
    public static function getFileUploadIsS3(){
        if(self::$_fileUploadIsS3 === null){
            self::$_fileUploadIsS3 = intval(Setting::getValue('cms', 0, 'file-upload-s3')) === 1;
        }

        return self::$_fileUploadIsS3;
    }

    /**
     * Gets the configured S3 key
     * @return string
     */
    public static function getS3Key(){
        if (self::$_s3Key === null){
            self::$_s3Key = Setting::getValue('cms', 0, 's3-key');
        }
        return self::$_s3Key;
    }

    /**
     * Gets the configured S3 Pass phrase
     * @return string
     */
    public static function getS3Pass(){
        if (self::$_s3Pass === null){
            self::$_s3Pass = Setting::getValue('cms', 0, 's3-pass');
        }
        return self::$_s3Pass;
    }

    /**
     * Gets the configured S3 Bucket
     * @return string
     */
    public static function getS3Bucket(){
        if (self::$_s3Bucket === null){
            self::$_s3Bucket = Setting::getValue('cms', 0, 's3-bucket');
        }
        return self::$_s3Bucket;
    }

    /**
     * Stores a value indicating if the upload of files is configured to S3
     * @param $value
     */
    public static function setFileUploadIsS3($value){
        self::$_fileUploadIsS3 = $value;
        Setting::setValue('cms', 0, 'file-upload-s3', $value ? 1 : 0);
    }

}