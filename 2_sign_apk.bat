@echo La passphrase e' itsdigital (deve corrispondere nel file "1_generate_release_key.bat")

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore filosofapp-release.key platforms\android\build\outputs\apk\android-release-unsigned.apk filosofapp

pause