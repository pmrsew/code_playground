# Tip Time application
https://developer.android.com/codelabs/basic-android-kotlin-training-change-app-theme#0

## What you'll learn
* How to select effective colors for your app according to Material Design principles
* How to set colors as part of your app theme
* The RGB components of a color
* How to apply a style to a View
* Change the look of an app using a Theme
* Understand the importance of color contrast

#### Color
* High color contrast encourages accessibilty
* Color is represented as 3 hexadecimal numbers, (#00-#FF), that represent the transparency of red, green, blue (THERE CAN ALSO BE A FOURTH SET AT THE BEGINNING TO DEFINE OVERALL TRANSAPRENCY)
	* Think of a color as three layers stacked on top of eachother, each layer when opaque, Red, Green, Blue
	![alt text](C:\Users\aweso\Documents\Code\code_playground\images_for_notes\color_hexadecimalexplaination.png)
	* #00 = 0% = fully transparent
	* #FF = 100% = fully opaque
	* <color name="black">#FF000000</color>
	* <color name="white">#FFFFFFFF</color>
* The theme system groups colors into 12 attributes
	* This encourages consistancy
	* Allows you to use color in a meaningful way
	1. Primary				colorPrimary
	2. Primary Variant		colorPrimaryVariant
	3. Secondary			colorSecondary
	4. Secondary Variant	colorSecondaryVariant
	5. Background			colorBackground
	6. Surface				colorSurface
	7. Error				colorError
	8. On Primary			colorOnPrimary
	9. On Secondary			colorOnSecondary
	10. On Background		colorOnBackground
	11. On Surface			colorOnSurface
	12. On Error			colorOnError
	* Theme color attributes not defined in a theme will use the color from the parent theme
	* Use these resources to help choose theme colors:
	https://material.io/resources/color/#!/?view.left=0&view.right=0
	https://material.io/design/color/the-color-system.html#tools-for-picking-colors
	* I CHOSE DIFFERENT COLORS THAN TUTORIAL:
	
    <color name="green">#1B5E20</color>
    <color name="green_dark">#003300</color>
    <color name="green_light">#A5D6A7</color>
    <color name="blue">#0288D1</color>
    <color name="blue_dark">#005B9F</color>
    <color name="blue_light">#81D4FA</color>
	
	VERSUS
	
	<color name="darkgreen">#33691e</color>
    <color name="darkgreen_dark">#003d00</color>
    <color name="darkgreen_light">#629749</color>
    <color name="lightgreen">#aed581</color>
    <color name="lightgreen_dark">#7da453</color>
    <color name="lightgreen_light">#e1ffb1</color>
* Files to edit:
	* activity_main.xml
	* values/strings.xml
	* values/colors.xml
	* app > res > values > themes > themes.xml LIGHT THEME
		* Primary: darkgreen, Primary Variant: darkgreen_dark
		* Secondary: lightgreen, Secondary Variant: lightgreen_dark
	* app > res > values > themes > themes.xml (night) DARK THEME
		* Primary: darkgreen_light, Primary Variant: darkgreen
		* Secondary: lightgreen_light, Secondary Variant: lightgreen
	
	
	