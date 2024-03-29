import gradient from "gradient-string";

const colorGradient = gradient([
  { color: "#FF5FC3", pos: 0 },
  { color: "#00ffff", pos: 0.8 },
  { color: "#b952ff", pos: 1 },
]);

const myPackGradient = () => {
  console.log(
    colorGradient(String.raw`
    @@;==****************=;@@
    @@*8;;;;;;;;:::::::!***@@
    @@:,       -:      .**=@@
    @@?==      ;#       **=@@
    @@!**     ,=@!      !**@@
    @@=*!     ~@@@.     !*=@@
    @@~.-    .=@@@@     !*=@@
    @@=*!   *@@@@@@~:   !**@@
    @@?.    @@@@@@@@;   !**@@
    @@~!   @@@@@@@@@@   !*=@@
    @@~.    @@@@@@@@.   !*=@@
    @@?.     @@@@@@~    !*=@@
    @@!=     .@@@@$     !**@@
    @@?.      ;@@@:     !!*@@
    @@!=      -#@#      !!=@@
    @@!=    .;~!@-;-    !!=@@
    @@!=   ,*@#$$@#@=   !*=@@
    @@=*   @@@@@@@@@@.  !*=@@
    @@=*  @@@@@@@@@@@@  !*=@@
    @@=*  !@@@@@@@@@@!  !*=@@
    @@=*   *@@@@@@@@@.  !*=@@
    @@=*   *#@@@@@@@@   !*$@@
    @@=*!  .$@@@@@##$   **=@@
    @@=*!   *@@@@@@@-   **=@@
    @@=**   ,@@@@@@=.   **=@@
    @@=*!    =@@@@@;    =*$@@
    @@~=!    ,@@@@@-    =*$@@
    @@~$*     *@@@@     **$@@
    @@$=*     -$@@      *=$@@
    @@$=*      !@-      !=$@@
    @@*:        $       ==$@@
    *************=========$@@
    **====================#@@
    *=====================@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@

    seulhee          jaegwans
  `),
  );
};

export default myPackGradient;
